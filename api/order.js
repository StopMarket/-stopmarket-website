const nodemailer = require('nodemailer');

function clean(v, max=5000){

  return String(v ?? '').replace(/[\u0000-\u001F\u007F]/g, ' ').trim().slice(0,max);

}

function esc(v){

  return clean(v).replace(/[&<>"']/g, c => ({

    '&':'&amp;',

    '<':'&lt;',

    '>':'&gt;',

    '"':'&quot;',

    "'":'&#39;'

  }[c]));

}

// A durable shared counter starts at 1 and survives deployments.
async function nextOrderNumber(fallback) {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  if (!url || !token) return fallback;
  try {
    const response = await fetch(url.replace(/\/$/, ''), {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(['INCR', 'stopmarket:orders:sequence:v1']),
      signal: AbortSignal.timeout(5000)
    });
    const data = await response.json();
    if (!response.ok || data.error || !Number.isSafeInteger(data.result) || data.result < 1) {
      throw new Error('Order counter unavailable');
    }
    return String(data.result).padStart(4, '0');
  } catch {
    // Email orders remain available during a counter outage.
    console.error('Order counter unavailable; retaining unique order reference');
    return fallback;
  }
}

module.exports = async function handler(req, res) {

  if (req.method !== 'POST') {

    return res.status(405).json({ error: 'Method not allowed' });

  }

  const user = process.env.GMAIL_USER;

  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {

    return res.status(500).json({ error: 'Email service is not configured' });

  }

  const body = req.body || {};

  let orderNo = clean(body.orderNo, 80);

  const name = clean(body.name, 120);

  const email = clean(body.email, 200);

  const phone = clean(body.phone, 80);

  const address = clean(body.address, 300);

  const comment = clean(body.comment, 1000);

  const order = clean(body.order, 8000);

  if (!orderNo || !name || !email || !phone || !address || !order) {

    return res.status(400).json({ error: 'Missing required fields' });

  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

    return res.status(400).json({ error: 'Invalid email' });

  }

  const transporter = nodemailer.createTransport({

    service: 'gmail',

    auth: {

      user,

      pass

    }

  });

  try {
    await transporter.verify();
    orderNo = await nextOrderNumber(orderNo);

  const sellerText =

`Նոր պատվեր ${orderNo}

Անուն՝ ${name}

Հեռախոս՝ ${phone}

Email՝ ${email}

Հասցե՝ ${address}

${comment ? `Մեկնաբանություն՝ ${comment}\n` : ''}

${order}`;

  const deliveryNote = 'Երևանի տարածքում մինչև 30 000 դրամի պատվերների առաքումն արժե 2 000 դրամ։';
  const customerText = `Շնորհակալություն Ձեր պատվերի համար։\n\nՊատվեր № ${orderNo}\n\nՄեր աշխատակիցը շուտով կկապվի Ձեզ հետ։\n\n${deliveryNote}\n\nStop Market\n+374 41 03 30 03\nhttps://stopmarket.am`;
  const customerHtml = `
  <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;border:1px solid #eee;border-radius:14px;overflow:hidden">
    <div style="background:#ffd400;padding:18px 24px;font-size:24px;font-weight:700">
      <span style="background:#111;color:#ffd400;padding:5px 9px;border-radius:6px">Stop</span> Market
    </div>
    <div style="padding:24px;color:#111;line-height:1.6">
      <h2 style="margin-top:0;font-size:22px">Շնորհակալություն Ձեր պատվերի համար</h2>
      <p><b>Պատվեր № ${esc(orderNo)}</b></p>
      <p>Մեր աշխատակիցը շուտով կկապվի Ձեզ հետ։</p>
      <p style="margin:24px 0 0;font-size:13px;color:#666">${deliveryNote}</p>
      <p style="margin:24px 0 0"><b>Stop Market</b><br><a href="tel:+37441033003" style="color:inherit;text-decoration:none">+374 41 03 30 03</a><br><a href="https://stopmarket.am">stopmarket.am</a></p>
    </div>
  </div>`;

    await Promise.all([

      transporter.sendMail({

        from: `Stop Market <${user}>`,

        to: user,

        replyTo: email,

        subject: `Նոր պատվեր ${orderNo} — Stop Market`,

        text: sellerText

      }),

      transporter.sendMail({

        from: `Stop Market <${user}>`,

        to: email,

        replyTo: user,

        subject: `Ձեր պատվերը հաստատված է — ${orderNo}`,

        text: customerText,

        html: customerHtml

      })

    ]);

    return res.status(200).json({

      ok: true,

      orderNo

    });

  } catch (err) {

    console.error('Email send failed:', err);

    return res.status(500).json({

      error: 'Email send failed'

    });

  }

}
