const t={hy:{search:'Փնտրել ապրանքներ...',products:'Ապրանքներ',marking:'Գծանշում',clients:'Գործընկերներ',contact:'Կապ',viewProducts:'Դիտել ապրանքները',retail:'Մանրածախ վաճառք',retailSub:'Լայն տեսականի',wholesale:'Մեծածախ վաճառք',wholesaleSub:'Հատուկ պայմաններ',delivery:'Առաքում',deliverySub:'Հայաստանի տարածքում',service:'Մասնագիտական սպասարկում',serviceSub:'Խորհրդատվություն և լուծումներ',popular:'Ապրանքներ',mirror:'Կլոր հայելի',cone:'Ճանապարհային կոն',bump:'Արհեստական անհարթություն',post:'Ճկուն սյունիկ',barrier:'Կայանման արգելափակիչ',lock:'Փականով',hemi:'Բետոնե կիսագունդ',markingTitle:'Ճանապարհային գծանշման աշխատանքներ',markingText:'Գծանշման աշխատանքներ ժամանակակից սարքավորումներով՝ ճանապարհների, կայանատեղիների և արտադրական տարածքների համար։',contactUs:'Կապվել մեզ հետ',concreteTitle:'Բետոնե կիսագնդեր',concreteText:'Կայանման և տարածքների սահմանափակման համար',eveluxTitle:'Evelux-ի պաշտոնական ներկայացուցիչը Հայաստանում',eveluxText:'Ճանապարհային անվտանգության որակյալ ապրանքների լայն տեսականի։',trusted:'Մեզ վստահում են',trustedText:'Մեզ վստահում են ավելի քան 50 գործընկերներ',yerevan:'Երևանի քաղաքապետարան',about:'Stop Market',aboutText:'Ճանապարհային անվտանգության պարագաների մեծածախ և մանրածախ վաճառք և գծանշման աշխատանքներ։',wholesaleRetail:'Մեծածախ և մանրածախ վաճառք',address:'Երևան, Պռոշյան 5',menuAbout:'Մեր մասին',menuDelivery:'Առաքում',menuOrder:'Պատվիրել',menuInstall:'Տեղադրում',menuConsult:'Խորհրդատվություն'},ru:{search:'Поиск товаров...',products:'Товары',marking:'Разметка',clients:'Партнеры',contact:'Контакты',viewProducts:'Смотреть товары',retail:'Розничная продажа',retailSub:'Широкий ассортимент',wholesale:'Оптовая продажа',wholesaleSub:'Специальные условия',delivery:'Доставка',deliverySub:'По всей Армении',service:'Профессиональный сервис',serviceSub:'Консультации и решения',popular:'Товары',mirror:'Дорожное зеркало',cone:'Дорожный конус',bump:'Искусственная неровность',post:'Гибкий столбик',barrier:'Парковочный барьер',lock:'С замком',hemi:'Бетонная полусфера',markingTitle:'Работы по дорожной разметке',markingText:'Профессиональная разметка дорог, парковок и промышленных территорий современным оборудованием.',contactUs:'Связаться с нами',concreteTitle:'Бетонные полусферы',concreteText:'Для ограничения парковки и территорий',eveluxTitle:'Официальный представитель Evelux в Армении',eveluxText:'Широкий ассортимент качественной продукции для дорожной безопасности.',trusted:'Нам доверяют',trustedText:'Нам доверяют более 50 партнеров',yerevan:'Мэрия Еревана',about:'Stop Market',aboutText:'Оптовая и розничная продажа средств дорожной безопасности и работы по дорожной разметке.',wholesaleRetail:'Оптовая и розничная продажа',address:'Ереван, Прошян 5',menuAbout:'О нас',menuDelivery:'Доставка',menuOrder:'Заказать',menuInstall:'Установка',menuConsult:'Консультация'},en:{search:'Search products...',products:'Products',marking:'Road Marking',clients:'Partners',contact:'Contact',viewProducts:'View products',retail:'Retail sales',retailSub:'Wide selection',wholesale:'Wholesale sales',wholesaleSub:'Special terms',delivery:'Delivery',deliverySub:'Across Armenia',service:'Professional service',serviceSub:'Consulting and solutions',popular:'Products',mirror:'Convex mirror',cone:'Traffic cone',bump:'Speed bump',post:'Flexible post',barrier:'Parking barrier',lock:'With lock',hemi:'Concrete hemisphere',markingTitle:'Road marking services',markingText:'Professional marking for roads, parking areas and industrial sites using modern equipment.',contactUs:'Contact us',concreteTitle:'Concrete hemispheres',concreteText:'For parking and area restriction',eveluxTitle:'Official Evelux representative in Armenia',eveluxText:'A wide range of quality road safety products.',trusted:'Trusted by',trustedText:'Trusted by more than 50 partners',yerevan:'Yerevan Municipality',about:'Stop Market',aboutText:'Wholesale and retail road-safety products and professional road-marking services.',wholesaleRetail:'Wholesale and retail sales',address:'Yerevan, Proshyan 5',menuAbout:'About us',menuDelivery:'Delivery',menuOrder:'Order',menuInstall:'Installation',menuConsult:'Consultation'}};
function lang(l){document.documentElement.lang=l;document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=t[l][e.dataset.i18n]||e.textContent);document.querySelectorAll('[data-i18n-ph]').forEach(e=>e.placeholder=t[l][e.dataset.i18nPh]||e.placeholder);document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===l));const sel=document.querySelector('.langSelect');if(sel)sel.value=l;localStorage.setItem('smLang',l)}document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>lang(b.dataset.lang));const sel=document.querySelector('.langSelect');if(sel)sel.onchange=()=>lang(sel.value);lang(localStorage.getItem('smLang')||'hy');

const menuBtn=document.querySelector('.menu'), mobileMenu=document.querySelector('.mobileMenu');if(menuBtn&&mobileMenu){menuBtn.addEventListener('click',()=>{const open=mobileMenu.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open?'true':'false')});mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileMenu.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}));document.addEventListener('click',e=>{if(!mobileMenu.contains(e.target)&&!menuBtn.contains(e.target)){mobileMenu.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}})}

const msb=document.querySelector('.mobileSearchBtn'),ms=document.querySelector('.mobileSearch');if(msb&&ms){msb.addEventListener('click',e=>{e.stopPropagation();ms.classList.toggle('open');if(ms.classList.contains('open'))ms.querySelector('input').focus()});document.addEventListener('click',e=>{if(!ms.contains(e.target)&&!msb.contains(e.target))ms.classList.remove('open')});}


// v28 compact header language switcher
const headerLangBtn=document.querySelector('.headerLangBtn');
const langOrder=['hy','ru','en'];
const langLabels={hy:'ՀԱՅ',ru:'РУС',en:'ENG'};
function syncHeaderLang(){if(headerLangBtn) headerLangBtn.textContent=langLabels[document.documentElement.lang]||'ՀԱՅ'}
if(headerLangBtn){headerLangBtn.addEventListener('click',()=>{const current=document.documentElement.lang||'hy';const next=langOrder[(langOrder.indexOf(current)+1)%langOrder.length];lang(next);syncHeaderLang()});syncHeaderLang()}

// v31: logo returns to top; delivery links already target #delivery; phone links use tel:
document.querySelectorAll('.top .brand').forEach(a=>a.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'})));

// v32: category-first product catalog. Product codes intentionally removed.
const catalogData={
 cones:{title:'Ճանապարհային կոններ',items:[['Ճանապարհային կոն 45 սմ','45 սմ','Գինը՝ ճշտել','https://images.tcdn.com.br/img/img_prod/1247987/cone_de_sinalizao_75_cm_base_de_borracha_faixa_1_20251103135210_14ba19d09f11.png'],['Ճանապարհային կոն 75 սմ','75 սմ','5,500 ֏','https://images.tcdn.com.br/img/img_prod/1247987/cone_de_sinalizao_75_cm_base_de_borracha_faixa_1_20251103135210_14ba19d09f11.png'],['Ճանապարհային կոն 90 սմ','90 սմ','Գինը՝ ճշտել','https://images.tcdn.com.br/img/img_prod/1247987/cone_de_sinalizao_75_cm_base_de_borracha_faixa_1_20251103135210_14ba19d09f11.png']]},
 bumps:{title:'Արհեստական անհարթություններ',items:[
 ["Արհեստական անհարթություն", "Երկարություն՝ 50 սմ • Լայնություն՝ 35 սմ • Բարձրություն՝ 5 սմ", "12,000 ֏", "images/bumps/01-main.webp", ["images/bumps/01-main.webp", "images/bumps/01-detail-2.webp", "images/bumps/01-detail-3.jpeg"]],
 ["Արհեստական անհարթություն", "Երկարություն՝ 1.83 մ • Լայնություն՝ 32 սմ • Բարձրություն՝ 5 սմ", "32,000 ֏", "images/bumps/02-main.webp", ["images/bumps/02-main.webp"]],
 ["Արհեստական անհարթություն", "Երկարություն՝ 1 մ • Լայնություն՝ 33 սմ • Բարձրություն՝ 5 սմ", "14,000 ֏", "images/bumps/03-main.webp", ["images/bumps/03-main.webp"]],
 ["Արհեստական անհարթություն", "Երկարություն՝ 1 մ • Լայնություն՝ 15 սմ • Բարձրություն՝ 2.5 սմ", "9,500 ֏", "images/bumps/04-main.jpeg", ["images/bumps/04-main.jpeg"]],
 ["Արհեստական անհարթություն", "Երկարություն՝ 1 մ • Լայնություն՝ 30 սմ • Բարձրություն՝ 6 սմ", "21,000 ֏", "images/bumps/05-main.webp", ["images/bumps/05-main.webp"]]
 ]},
 mirrors:{title:'Կլոր հայելիներ',items:[['Կլոր հայելի','45 սմ','Գինը՝ ճշտել','https://cdn.hoffmann-group.com/derivatives/3268512/jpg_1200/jpg_1200_b994454_60.jpg'],['Կլոր հայելի','60 սմ','Գինը՝ ճշտել','https://cdn.hoffmann-group.com/derivatives/3268512/jpg_1200/jpg_1200_b994454_60.jpg'],['Կլոր հայելի','80 սմ','Գինը՝ ճշտել','https://cdn.hoffmann-group.com/derivatives/3268512/jpg_1200/jpg_1200_b994454_60.jpg'],['Կլոր հայելի','100 սմ','Գինը՝ ճշտել','https://cdn.hoffmann-group.com/derivatives/3268512/jpg_1200/jpg_1200_b994454_60.jpg']]},
 posts:{title:'Ճկուն սյունիկներ',items:[['Ճկուն սյունիկ','75 սմ','7,500 ֏','https://www.newbollardsdirect.co.uk/user/products/large/TL.Flexpin%201000_2%20RW.png'],['Ճկուն սյունիկ','100 սմ','Գինը՝ ճշտել','https://www.newbollardsdirect.co.uk/user/products/large/TL.Flexpin%201000_2%20RW.png']]},
 barriers:{title:'Կայանման արգելափակիչներ',items:[['Ծալվող արգելափակիչ','Փականով','Գինը՝ ճշտել','https://media.adeo.com/mkp/db15403a8bb2df879504c0afda844529/media.jpeg'],['Կայանման արգելափակիչ','Ստանդարտ','Գինը՝ ճշտել','https://media.adeo.com/mkp/db15403a8bb2df879504c0afda844529/media.jpeg']]},
 concrete:{title:'Բետոնե կիսագնդեր',items:[['Բետոնե կիսագունդ','Ø 50 սմ × 35 սմ','Գինը՝ ճշտել','concrete-hemisphere.jpg']]}
};
const catHome=document.querySelector('[data-page="categories"]'),catPage=document.querySelector('[data-page="category"]'),variantGrid=document.querySelector('.variantGrid'),catTitle=document.querySelector('.categoryPageTitle');
function openCategory(key){const c=catalogData[key];if(!c)return;catTitle.textContent=c.title;variantGrid.innerHTML=c.items.map((i,index)=>`<article class="variantCard">${key==='bumps'?`<button type="button" class="photo productPhoto productImageButton" data-gallery-index="${index}" aria-label="Մեծացնել ապրանքի նկարը"><img src="${i[3]}" alt="${i[0]}"></button>`:`<div class="photo productPhoto"><img src="${i[3]}" alt="${i[0]}"></div>`}<h3>${i[0]}</h3><div class="variantSize">Չափ՝ ${i[1]}</div><div class="variantPrice">${i[2]}</div><button class="cartBtn"><span>🛒</span> Ավելացնել զամբյուղ</button></article>`).join('');catHome.classList.remove('active');catPage.classList.add('active');catPage.scrollIntoView({behavior:'smooth',block:'start'});history.replaceState(null,'','#products/'+key)}
document.querySelectorAll('.categoryCard').forEach(b=>b.addEventListener('click',()=>openCategory(b.dataset.category)));
document.querySelector('.categoryBack')?.addEventListener('click',()=>{catPage.classList.remove('active');catHome.classList.add('active');history.replaceState(null,'','#products');catHome.scrollIntoView({behavior:'smooth',block:'start'})});

// Working shopping cart
const cartDrawer=document.querySelector('.cartDrawer'),cartItemsEl=document.querySelector('.cartItems'),cartEmptyEl=document.querySelector('.cartEmpty'),cartTotalEl=document.querySelector('.cartTotal'),cartCountEl=document.querySelector('.cartCount');
let cart=[];try{cart=JSON.parse(localStorage.getItem('stopMarketCart')||'[]')}catch(e){cart=[]}
function saveCart(){localStorage.setItem('stopMarketCart',JSON.stringify(cart));renderCart()}
function moneyNumber(s){return Number(String(s).replace(/[^0-9]/g,''))||0}
function renderCart(){const count=cart.reduce((n,x)=>n+x.qty,0);if(cartCountEl)cartCountEl.textContent=count;if(!cartItemsEl)return;cartItemsEl.innerHTML=cart.map((x,i)=>`<div class="cartItem"><img src="${x.img}" alt=""><div><div class="cartItemName">${x.name}</div><div class="cartItemMeta">${x.size} · ${x.price}</div><div class="cartQty"><button data-cart-minus="${i}">−</button><b>${x.qty}</b><button data-cart-plus="${i}">+</button></div></div><button class="cartRemove" data-cart-remove="${i}">×</button></div>`).join('');cartEmptyEl.style.display=cart.length?'none':'block';const total=cart.reduce((n,x)=>n+moneyNumber(x.price)*x.qty,0);cartTotalEl.textContent=cart.length?`Ընդհանուր՝ ${total.toLocaleString('hy-AM')} ֏`:''}
function addCardToCart(btn){const card=btn.closest('.variantCard');if(!card)return;const name=card.querySelector('h3')?.textContent.trim()||'Ապրանք',size=card.querySelector('.variantSize')?.textContent.trim()||'',price=card.querySelector('.variantPrice')?.textContent.trim()||'',img=card.querySelector('img')?.getAttribute('src')||'';const found=cart.find(x=>x.name===name&&x.size===size&&x.price===price);if(found)found.qty++;else cart.push({name,size,price,img,qty:1});saveCart();btn.classList.add('added');const old=btn.innerHTML;btn.innerHTML='<span>✓</span> Ավելացված է';setTimeout(()=>{btn.innerHTML=old;btn.classList.remove('added')},900)}
document.addEventListener('click',e=>{const add=e.target.closest('.cartBtn');if(add){addCardToCart(add);return}const plus=e.target.closest('[data-cart-plus]');if(plus){cart[+plus.dataset.cartPlus].qty++;saveCart();return}const minus=e.target.closest('[data-cart-minus]');if(minus){const i=+minus.dataset.cartMinus;cart[i].qty--;if(cart[i].qty<=0)cart.splice(i,1);saveCart();return}const rem=e.target.closest('[data-cart-remove]');if(rem){cart.splice(+rem.dataset.cartRemove,1);saveCart();return}});
document.querySelector('.headerCartBtn')?.addEventListener('click',()=>{cartDrawer.classList.add('open');cartDrawer.setAttribute('aria-hidden','false')});document.querySelector('.cartClose')?.addEventListener('click',()=>{cartDrawer.classList.remove('open');cartDrawer.setAttribute('aria-hidden','true')});cartDrawer?.addEventListener('click',e=>{if(e.target===cartDrawer){cartDrawer.classList.remove('open');cartDrawer.setAttribute('aria-hidden','true')}});renderCart();


// v37: checkout form + email order delivery
const checkoutModal=document.querySelector('.checkoutModal'),checkoutSummary=document.querySelector('.checkoutSummary'),checkoutForm=document.querySelector('#checkoutForm'),orderDetails=document.querySelector('#orderDetails'),orderStatus=document.querySelector('.orderStatus');
function orderText(){const total=cart.reduce((n,x)=>n+moneyNumber(x.price)*x.qty,0);return cart.map((x,i)=>`${i+1}. ${x.name} | ${x.size} | ${x.price} | Քանակ՝ ${x.qty}`).join('\n')+`\n\nԸնդհանուր՝ ${total.toLocaleString('hy-AM')} ֏`}
function openCheckout(){if(!cart.length){cartDrawer?.classList.add('open');cartDrawer?.setAttribute('aria-hidden','false');if(orderStatus)orderStatus.textContent='';return}cartDrawer?.classList.remove('open');cartDrawer?.setAttribute('aria-hidden','true');checkoutSummary.innerHTML='<h3>Ձեր պատվերը</h3>'+cart.map(x=>`<div class="checkoutLine"><span>${x.name} × ${x.qty}</span><b>${x.price}</b></div>`).join('');orderDetails.value=orderText();orderStatus.textContent='';checkoutModal.classList.add('open');checkoutModal.setAttribute('aria-hidden','false')}
function closeCheckout(){checkoutModal?.classList.remove('open');checkoutModal?.setAttribute('aria-hidden','true')}
document.querySelector('.checkoutBtn')?.addEventListener('click',openCheckout);document.querySelector('.menuOrder')?.addEventListener('click',e=>{e.preventDefault();mobileMenu?.classList.remove('open');openCheckout()});document.querySelector('.checkoutClose')?.addEventListener('click',closeCheckout);checkoutModal?.addEventListener('click',e=>{if(e.target===checkoutModal)closeCheckout()});
checkoutForm?.addEventListener('submit',async e=>{

  e.preventDefault();

  if(!cart.length)return;

  const btn=checkoutForm.querySelector('.submitOrderBtn');

  btn.disabled=true;

  btn.textContent='Ուղարկվում է…';

  orderDetails.value=orderText();

  try{

    const fd=new FormData(checkoutForm);

    const data={

      orderNo:'SM-'+Date.now(),

      name:fd.get('name')||'',

      email:fd.get('email')||'',

      phone:fd.get('phone')||'',

      address:fd.get('address')||'',

      comment:fd.get('comment')||'',

      order:orderText()

    };

    const r=await fetch('/api/order',{

      method:'POST',

      headers:{'Content-Type':'application/json'},

      body:JSON.stringify(data)

    });

    const result=await r.json();

    if(!r.ok)throw new Error(result.error||'send');

    orderStatus.textContent='Շնորհակալություն։ Ձեր պատվերն ընդունված է։ Մենք շուտով կկապվենք Ձեզ հետ։';

    orderStatus.classList.add('success');

    cart=[];

    saveCart();

    checkoutForm.reset();

    setTimeout(closeCheckout,2200);

  }catch(err){

    console.error(err);

    orderStatus.textContent='Չհաջողվեց ուղարկել պատվերը։ Խնդրում ենք փորձել կրկին կամ զանգահարել +374 41 03 30 03։';

    orderStatus.classList.remove('success');

  }finally{

    btn.disabled=false;

    btn.textContent='Հաստատել պատվերը';

  }

});

// v41: product image viewer; galleries open only after clicking the card image.
const imageViewer=document.createElement('dialog');
imageViewer.className='imageViewer';
imageViewer.setAttribute('aria-label','Ապրանքի նկարներ');
imageViewer.innerHTML='<div class="imageViewerBox"><button type="button" class="imageViewerClose" aria-label="Փակել">×</button><div class="imageViewerStage"><button type="button" class="imageViewerPrev" aria-label="Նախորդ նկար">‹</button><img class="imageViewerPhoto" alt=""><button type="button" class="imageViewerNext" aria-label="Հաջորդ նկար">›</button></div><div class="imageViewerCounter" aria-live="polite"></div></div>';
document.body.append(imageViewer);
const viewerPhoto=imageViewer.querySelector('.imageViewerPhoto');
const viewerPrev=imageViewer.querySelector('.imageViewerPrev');
const viewerNext=imageViewer.querySelector('.imageViewerNext');
let viewerImages=[],viewerIndex=0,viewerScroll='',viewerFocus=null;
function renderViewer(){viewerPhoto.src=viewerImages[viewerIndex];viewerPhoto.alt=`Արհեստական անհարթություն — նկար ${viewerIndex+1}`;imageViewer.querySelector('.imageViewerCounter').textContent=`${viewerIndex+1} / ${viewerImages.length}`;viewerPrev.hidden=viewerNext.hidden=viewerImages.length<2;}
function stepViewer(step){viewerIndex=(viewerIndex+step+viewerImages.length)%viewerImages.length;renderViewer();}
function closeImageViewer(){imageViewer.close();}
variantGrid.addEventListener('click',event=>{const button=event.target.closest('[data-gallery-index]');if(!button)return;const item=catalogData.bumps.items[Number(button.dataset.galleryIndex)];viewerImages=item[4]||[item[3]];viewerIndex=0;viewerFocus=button;renderViewer();viewerScroll=document.body.style.overflow;document.body.style.overflow='hidden';imageViewer.showModal();imageViewer.querySelector('.imageViewerClose').focus();});
viewerPrev.addEventListener('click',()=>stepViewer(-1));
viewerNext.addEventListener('click',()=>stepViewer(1));
imageViewer.querySelector('.imageViewerClose').addEventListener('click',closeImageViewer);
imageViewer.addEventListener('click',event=>{if(event.target===imageViewer)closeImageViewer();});
imageViewer.addEventListener('close',()=>{document.body.style.overflow=viewerScroll;viewerFocus?.focus();});
imageViewer.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'){event.preventDefault();stepViewer(-1);}if(event.key==='ArrowRight'){event.preventDefault();stepViewer(1);}});
let swipeStart=null;
viewerPhoto.addEventListener('touchstart',event=>{const touch=event.touches.length===1?event.touches[0]:null;swipeStart=touch?{x:touch.clientX,y:touch.clientY}:null;},{passive:true});
viewerPhoto.addEventListener('touchend',event=>{if(!swipeStart)return;const touch=event.changedTouches[0],dx=touch.clientX-swipeStart.x,dy=touch.clientY-swipeStart.y;swipeStart=null;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.5&&viewerImages.length>1)stepViewer(dx<0?1:-1);},{passive:true});
