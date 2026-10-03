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

  const orderNo = clean(body.orderNo, 80);

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

  const sellerText =

`Նոր պատվեր ${orderNo}

Անուն՝ ${name}

Հեռախոս՝ ${phone}

Email՝ ${email}

Հասցե՝ ${address}

${comment ? `Մեկնաբանություն՝ ${comment}\n` : ''}

${order}`;

  const customerText =

`Շնորհակալություն Ձեր պատվերի համար։

Ձեր պատվերը հաջողությամբ ընդունվել է Stop Market-ի կողմից։

Պատվեր № ${orderNo}

${order}

Մեր աշխատակիցը շուտով կկապվի Ձեզ հետ պատվերը հաստատելու և առաքումը համաձայնեցնելու համար։

Stop Market

+374 41 03 30 03

stopmarket.am`;

  const customerHtml = `

  <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;border:1px solid #eee;border-radius:14px;overflow:hidden">

    <div style="background:#ffd400;padding:18px 24px;font-size:24px;font-weight:700">

      <span style="background:#111;color:#ffd400;padding:5px 9px;border-radius:6px">Stop</span> Market

    </div>

    <div style="padding:24px;color:#111">

      <h2 style="margin-top:0">Շնորհակալություն Ձեր պատվերի համար</h2>

      <p>Ձեր պատվերը հաջողությամբ ընդունվել է։</p>

      <p><b>Պատվեր № ${esc(orderNo)}</b></p>

      <pre style="white-space:pre-wrap;background:#f7f7f7;padding:14px;border-radius:10px;font-family:Arial,sans-serif">${esc(order)}</pre>

      <p>

        Մեր աշխատակիցը շուտով կկապվի Ձեզ հետ պատվերը հաստատելու և առաքումը համաձայնեցնելու համար։

      </p>

      <p style="margin-bottom:0">

        <b>Stop Market</b><br>

        +374 41 03 30 03<br>

        stopmarket.am

      </p>

    </div>

  </div>`;

  try {

    await transporter.verify();

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
