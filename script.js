const t={hy:{search:'Փնտրել ապրանքներ...',products:'Ապրանքներ',marking:'Գծանշում',clients:'Գործընկերներ',contact:'Կապ',viewProducts:'Դիտել ապրանքները',retail:'Մանրածախ վաճառք',retailSub:'Լայն տեսականի',wholesale:'Մեծածախ վաճառք',wholesaleSub:'Հատուկ պայմաններ',delivery:'Առաքում',deliverySub:'Հայաստանի տարածքում',service:'Մասնագիտական սպասարկում',serviceSub:'Խորհրդատվություն և լուծումներ',popular:'Ապրանքներ',mirror:'Կլոր հայելի',cone:'Ճանապարհային կոն',bump:'Արհեստական անհարթություն',post:'Ճկուն սյունիկ',barrier:'Կայանման արգելափակիչ',lock:'Փականով',hemi:'Բետոնե կիսագունդ',markingTitle:'Ճանապարհային գծանշման աշխատանքներ',markingText:'Գծանշման աշխատանքներ ժամանակակից սարքավորումներով՝ ճանապարհների, կայանատեղիների և արտադրական տարածքների համար։',contactUs:'Կապվել մեզ հետ',concreteTitle:'Բետոնե կիսագնդեր',concreteText:'Կայանման և տարածքների սահմանափակման համար',eveluxTitle:'Evelux-ի պաշտոնական ներկայացուցիչը Հայաստանում',eveluxText:'Ճանապարհային անվտանգության որակյալ ապրանքների լայն տեսականի։',trusted:'Մեզ վստահում են',trustedText:'Մեզ վստահում են ավելի քան 50 գործընկերներ',yerevan:'Երևանի քաղաքապետարան',about:'Stop Market',aboutText:'Ճանապարհային անվտանգության պարագաների մեծածախ և մանրածախ վաճառք և գծանշման աշխատանքներ։',wholesaleRetail:'Մեծածախ և մանրածախ վաճառք',address:'Երևան, Պռոշյան 5',menuAbout:'Մեր մասին',menuDelivery:'Առաքում',menuOrder:'Պատվիրել',menuInstall:'Տեղադրում',menuConsult:'Խորհրդատվություն'},ru:{search:'Поиск товаров...',products:'Товары',marking:'Разметка',clients:'Партнеры',contact:'Контакты',viewProducts:'Смотреть товары',retail:'Розничная продажа',retailSub:'Широкий ассортимент',wholesale:'Оптовая продажа',wholesaleSub:'Специальные условия',delivery:'Доставка',deliverySub:'По всей Армении',service:'Профессиональный сервис',serviceSub:'Консультации и решения',popular:'Товары',mirror:'Дорожное зеркало',cone:'Дорожный конус',bump:'Искусственная неровность',post:'Гибкий столбик',barrier:'Парковочный барьер',lock:'С замком',hemi:'Бетонная полусфера',markingTitle:'Работы по дорожной разметке',markingText:'Профессиональная разметка дорог, парковок и промышленных территорий современным оборудованием.',contactUs:'Связаться с нами',concreteTitle:'Бетонные полусферы',concreteText:'Для ограничения парковки и территорий',eveluxTitle:'Официальный представитель Evelux в Армении',eveluxText:'Широкий ассортимент качественной продукции для дорожной безопасности.',trusted:'Нам доверяют',trustedText:'Нам доверяют более 50 партнеров',yerevan:'Мэрия Еревана',about:'Stop Market',aboutText:'Оптовая и розничная продажа средств дорожной безопасности и работы по дорожной разметке.',wholesaleRetail:'Оптовая и розничная продажа',address:'Ереван, Прошян 5',menuAbout:'О нас',menuDelivery:'Доставка',menuOrder:'Заказать',menuInstall:'Установка',menuConsult:'Консультация'},en:{search:'Search products...',products:'Products',marking:'Road Marking',clients:'Partners',contact:'Contact',viewProducts:'View products',retail:'Retail sales',retailSub:'Wide selection',wholesale:'Wholesale sales',wholesaleSub:'Special terms',delivery:'Delivery',deliverySub:'Across Armenia',service:'Professional service',serviceSub:'Consulting and solutions',popular:'Products',mirror:'Convex mirror',cone:'Traffic cone',bump:'Speed bump',post:'Flexible post',barrier:'Parking barrier',lock:'With lock',hemi:'Concrete hemisphere',markingTitle:'Road marking services',markingText:'Professional marking for roads, parking areas and industrial sites using modern equipment.',contactUs:'Contact us',concreteTitle:'Concrete hemispheres',concreteText:'For parking and area restriction',eveluxTitle:'Official Evelux representative in Armenia',eveluxText:'A wide range of quality road safety products.',trusted:'Trusted by',trustedText:'Trusted by more than 50 partners',yerevan:'Yerevan Municipality',about:'Stop Market',aboutText:'Wholesale and retail road-safety products and professional road-marking services.',wholesaleRetail:'Wholesale and retail sales',address:'Yerevan, Proshyan 5',menuAbout:'About us',menuDelivery:'Delivery',menuOrder:'Order',menuInstall:'Installation',menuConsult:'Consultation'}};
function lang(l){if(!t[l])l='hy';document.documentElement.lang=l;document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=t[l][e.dataset.i18n]||e.textContent);document.querySelectorAll('[data-i18n-ph]').forEach(e=>e.placeholder=t[l][e.dataset.i18nPh]||e.placeholder);document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===l));const sel=document.querySelector('.langSelect');if(sel)sel.value=l;localStorage.setItem('smLang',l);window.refreshStoreLanguage?.()}document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>lang(b.dataset.lang));const sel=document.querySelector('.langSelect');if(sel)sel.onchange=()=>lang(sel.value);lang(localStorage.getItem('smLang')||'hy');

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
 barriers:{title:'Կայանման արգելափակիչներ',items:[["Հեռակառավարվող կայանման արգելափակիչ", "Բարձրություն՝ 60 սմ • Սնուցում՝ 4 մարտկոց • 2 հեռակառավարման վահանակ", "37,000 ֏", "images/barriers/remote.webp", ["images/barriers/remote.webp"], {"ru": {"name": "Парковочный барьер с дистанционным управлением", "size": "Высота: 60 см • Питание: 4 батарейки • 2 пульта"}, "en": {"name": "Remote-controlled parking barrier", "size": "Height: 60 cm • Power: 4 batteries • 2 remote controls"}}], ["Ծալվող կայանման արգելափակիչ՝ կողպեքով", "Բարձրություն՝ 40 սմ • Լայնություն՝ 53 սմ • Կողպեքով • Գույներ՝ սև և դեղին", "11,500 ֏", "images/barriers/folding.webp", ["images/barriers/folding.webp"], {"ru": {"name": "Складной парковочный барьер с замком", "size": "Высота: 40 см • Ширина: 53 см • С замком • Цвета: чёрный и жёлтый"}, "en": {"name": "Folding parking barrier with lock", "size": "Height: 40 cm • Width: 53 cm • Lock-operated • Colors: black and yellow"}}], ["Ծալվող կայանման սյուն՝ կողպեքով և նշանով", "Բարձրություն՝ 75 սմ • Կողպեքով • Գույներ՝ դեղին և կարմիր", "14,500 ֏", "images/barriers/post.webp", ["images/barriers/post.webp"], {"ru": {"name": "Складной парковочный столбик с замком и знаком", "size": "Высота: 75 см • С замком • Цвета: жёлтый и красный"}, "en": {"name": "Folding parking post with lock and sign", "size": "Height: 75 cm • Lock-operated • Colors: yellow and red"}}]]},
 concrete:{title:'Բետոնե կիսագնդեր',items:[['Բետոնե կիսագունդ','Ø 50 սմ × 35 սմ','Գինը՝ ճշտել','concrete-hemisphere.jpg']]}
};
const catHome=document.querySelector('[data-page="categories"]'),catPage=document.querySelector('[data-page="category"]'),variantGrid=document.querySelector('.variantGrid'),catTitle=document.querySelector('.categoryPageTitle');

// v42: a shared multilingual catalog for category pages, search and cart.
const categoryTitles={
 cones:{hy:'Ճանապարհային կոններ',ru:'Дорожные конусы',en:'Traffic cones'},
 bumps:{hy:'Արհեստական անհարթություններ',ru:'Искусственные неровности',en:'Speed bumps'},
 mirrors:{hy:'Կլոր հայելիներ',ru:'Дорожные зеркала',en:'Convex mirrors'},
 posts:{hy:'Ճկուն սյունիկներ',ru:'Гибкие столбики',en:'Flexible posts'},
 barriers:{hy:'Կայանման արգելափակիչներ',ru:'Парковочные барьеры',en:'Parking barriers'},
 concrete:{hy:'Բետոնե կիսագնդեր',ru:'Бетонные полусферы',en:'Concrete hemispheres'}
};
const itemNames={cones:{ru:'Дорожный конус',en:'Traffic cone'},bumps:{ru:'Искусственная неровность',en:'Speed bump'},mirrors:{ru:'Дорожное зеркало',en:'Convex mirror'},posts:{ru:'Гибкий столбик',en:'Flexible post'},concrete:{ru:'Бетонная полусфера',en:'Concrete hemisphere'}};
const labels={
 hy:{add:'Ավելացնել զամբյուղ',added:'Ավելացված է',back:'Ապրանքներ',ask:'Գինը՝ ճշտել',results:'Որոնման արդյունքներ',none:'Ապրանքներ չեն գտնվել։ Փորձեք այլ անուն։',found:'Գտնված ապրանքներ՝',cart:'Զամբյուղ',empty:'Զամբյուղը դատարկ է',total:'Ընդհանուր',order:'Պատվիրել',yourOrder:'Ձեր պատվերը',zoom:'Մեծացնել ապրանքի նկարը',search:'Որոնել ապրանքներ',close:'Փակել',previous:'Նախորդ նկար',next:'Հաջորդ նկար'},
 ru:{add:'Добавить в корзину',added:'Добавлено',back:'Товары',ask:'Уточнить цену',results:'Результаты поиска',none:'Товары не найдены. Попробуйте другое название.',found:'Найдено товаров:',cart:'Корзина',empty:'Корзина пуста',total:'Итого',order:'Заказать',yourOrder:'Ваш заказ',zoom:'Увеличить фото товара',search:'Поиск товаров',close:'Закрыть',previous:'Предыдущее фото',next:'Следующее фото'},
 en:{add:'Add to cart',added:'Added',back:'Products',ask:'Ask for price',results:'Search results',none:'No products found. Try another name.',found:'Products found:',cart:'Cart',empty:'Your cart is empty',total:'Total',order:'Order',yourOrder:'Your order',zoom:'Enlarge product photo',search:'Search products',close:'Close',previous:'Previous photo',next:'Next photo'}
};
const currentLanguage=()=>document.documentElement.lang||'hy';
const ui=()=>labels[currentLanguage()]||labels.hy;
const escapeHtml=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function translatedSize(text,l){if(l==='hy')return text;const map=l==='ru'?{'Երկարություն՝':'Длина:','Լայնություն՝':'Ширина:','Բարձրություն՝':'Высота:','սմ':'см',' մ':' м'}:{'Երկարություն՝':'Length:','Լայնություն՝':'Width:','Բարձրություն՝':'Height:','սմ':'cm',' մ':' m'};return Object.entries(map).reduce((v,[a,b])=>v.replaceAll(a,b),text)}
const productRecords=[];
Object.entries(catalogData).forEach(([key,cat])=>cat.items.forEach((item,index)=>{
 item[5]||={};item[5].hy={name:item[0],size:item[1]};
 for(const l of ['ru','en'])if(!item[5][l])item[5][l]={name:itemNames[key][l]+(key==='cones'?' '+translatedSize(item[1],l):''),size:translatedSize(item[1],l)};
 productRecords.push({id:key+':'+index,key,index,item});
}));
function productRecord(id){return productRecords.find(r=>r.id===id)}
function localizedItem(item){return item[5][currentLanguage()]||item[5].hy}
function localizedPrice(item){return moneyNumber(item[2])?item[2]:ui().ask}
function cartDisplay(entry){const record=productRecord(entry.productId)||productRecords.find(r=>r.item[3]===entry.img&&r.item[2]===entry.price&&r.item[0]===entry.name);return record?{...entry,...localizedItem(record.item),price:localizedPrice(record.item)}:entry}
let activeCategory=null,searchTerm='';
const searchStatus=document.querySelector('.searchStatus');
function revealCards(){const cards=document.querySelectorAll('.catalogPage.active .categoryCard,.catalogPage.active .variantCard');cards.forEach((card,index)=>{card.style.setProperty('--reveal-delay',(index%4)*65+'ms');if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window))return;card.classList.add('reveal');revealObserver.observe(card)})}
const revealObserver='IntersectionObserver' in window?new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');revealObserver.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px 30px 0px'}):null;
function renderProductCards(records){variantGrid.innerHTML=records.map(r=>{const i=r.item,local=localizedItem(i);return `<article class="variantCard" data-product-id="${r.id}"><button type="button" class="photo productPhoto productImageButton" data-gallery-id="${r.id}" aria-label="${escapeHtml(ui().zoom)}"><img src="${i[3]}" alt="${escapeHtml(local.name)}" loading="lazy"></button><h3>${escapeHtml(local.name)}</h3><div class="variantSize">${escapeHtml(local.size)}</div><div class="variantPrice">${escapeHtml(localizedPrice(i))}</div><button type="button" class="cartBtn"><span aria-hidden="true">🛒</span> ${ui().add}</button></article>`}).join('');revealCards()}
function showCategories(scroll=false){activeCategory=null;searchTerm='';document.querySelectorAll('.search input,.mobileSearch input').forEach(input=>input.value='');catPage.classList.remove('active');catHome.classList.add('active');searchStatus.textContent='';history.replaceState(null,'','#products');revealCards();if(scroll)catHome.scrollIntoView({behavior:'smooth',block:'start'})}
function openCategory(key,scroll=true){if(!catalogData[key])return;activeCategory=key;searchTerm='';document.querySelectorAll('.search input,.mobileSearch input').forEach(input=>input.value='');catHome.classList.remove('active');catPage.classList.add('active');catTitle.textContent=categoryTitles[key][currentLanguage()];searchStatus.textContent='';renderProductCards(productRecords.filter(r=>r.key===key));history.replaceState(null,'','#products/'+key);if(scroll)catPage.scrollIntoView({behavior:'smooth',block:'start'})}
function normalizeSearch(text){return String(text).normalize('NFKC').toLocaleLowerCase().replace(/ё/g,'е').replace(/[^\p{L}\p{N}]+/gu,' ').trim()}
function matchingProducts(query){const tokens=normalizeSearch(query).split(/\s+/).filter(Boolean);return productRecords.filter(r=>{const text=normalizeSearch(Object.values(r.item[5]).map(x=>x.name+' '+x.size).join(' ')+' '+Object.values(categoryTitles[r.key]).join(' '));return tokens.every(token=>text.includes(token))})}
function searchProducts(query,scroll=false){searchTerm=query.trim();activeCategory=null;document.querySelectorAll('.search input,.mobileSearch input').forEach(input=>{if(input.value!==query)input.value=query});if(!searchTerm){showCategories(scroll);return}catHome.classList.remove('active');catPage.classList.add('active');catTitle.textContent=ui().results;const matches=matchingProducts(searchTerm);searchStatus.textContent=matches.length?ui().found+' '+matches.length:ui().none;renderProductCards(matches);history.replaceState(null,'','#products/search');if(scroll){ms?.classList.remove('open');catPage.scrollIntoView({behavior:'smooth',block:'start'})}}
document.querySelectorAll('.categoryCard').forEach(button=>button.addEventListener('click',()=>openCategory(button.dataset.category)));
document.querySelector('.categoryBack')?.addEventListener('click',()=>showCategories(true));

// Working shopping cart
const cartDrawer=document.querySelector('.cartDrawer'),cartItemsEl=document.querySelector('.cartItems'),cartEmptyEl=document.querySelector('.cartEmpty'),cartTotalEl=document.querySelector('.cartTotal'),cartCountEl=document.querySelector('.cartCount');
let cart=[];try{cart=JSON.parse(localStorage.getItem('stopMarketCart')||'[]')}catch(e){cart=[]}
function saveCart(){localStorage.setItem('stopMarketCart',JSON.stringify(cart));renderCart()}
function moneyNumber(s){return Number(String(s).replace(/[^0-9]/g,''))||0}
function renderCart(){const count=cart.reduce((n,x)=>n+x.qty,0);if(cartCountEl)cartCountEl.textContent=count;if(!cartItemsEl)return;cartItemsEl.innerHTML=cart.map((entry,i)=>{const x=cartDisplay(entry);return `<div class="cartItem"><img src="${escapeHtml(x.img)}" alt=""><div><div class="cartItemName">${escapeHtml(x.name)}</div><div class="cartItemMeta">${escapeHtml(x.size)} · ${escapeHtml(x.price)}</div><div class="cartQty"><button data-cart-minus="${i}" aria-label="−">−</button><b>${x.qty}</b><button data-cart-plus="${i}" aria-label="+">+</button></div></div><button class="cartRemove" data-cart-remove="${i}" aria-label="${ui().close}">×</button></div>`}).join('');cartEmptyEl.textContent=ui().empty;cartEmptyEl.style.display=cart.length?'none':'block';const total=cart.reduce((n,x)=>n+moneyNumber(x.price)*x.qty,0);cartTotalEl.textContent=cart.length?`${ui().total}: ${total.toLocaleString('hy-AM')} ֏`:''}
function addCardToCart(btn){const card=btn.closest('.variantCard');const record=productRecord(card?.dataset.productId);if(!record)return;const item=record.item;const found=cart.find(x=>x.productId===record.id||(!x.productId&&x.name===item[0]&&x.price===item[2]&&x.img===item[3]));if(found){found.productId=record.id;found.qty++}else cart.push({productId:record.id,name:item[0],size:item[1],price:item[2],img:item[3],qty:1});saveCart();btn.classList.add('added');btn.innerHTML='<span>✓</span> '+ui().added;setTimeout(()=>{btn.innerHTML='<span aria-hidden="true">🛒</span> '+ui().add;btn.classList.remove('added')},900)}
document.addEventListener('click',e=>{const add=e.target.closest('.cartBtn');if(add){addCardToCart(add);return}const plus=e.target.closest('[data-cart-plus]');if(plus){cart[+plus.dataset.cartPlus].qty++;saveCart();return}const minus=e.target.closest('[data-cart-minus]');if(minus){const i=+minus.dataset.cartMinus;cart[i].qty--;if(cart[i].qty<=0)cart.splice(i,1);saveCart();return}const rem=e.target.closest('[data-cart-remove]');if(rem){cart.splice(+rem.dataset.cartRemove,1);saveCart();return}});
document.querySelector('.headerCartBtn')?.addEventListener('click',()=>{cartDrawer.classList.add('open');cartDrawer.setAttribute('aria-hidden','false')});document.querySelector('.cartClose')?.addEventListener('click',()=>{cartDrawer.classList.remove('open');cartDrawer.setAttribute('aria-hidden','true')});cartDrawer?.addEventListener('click',e=>{if(e.target===cartDrawer){cartDrawer.classList.remove('open');cartDrawer.setAttribute('aria-hidden','true')}});renderCart();


// v37: checkout form + email order delivery
const checkoutModal=document.querySelector('.checkoutModal'),checkoutSummary=document.querySelector('.checkoutSummary'),checkoutForm=document.querySelector('#checkoutForm'),orderDetails=document.querySelector('#orderDetails'),orderStatus=document.querySelector('.orderStatus');
function orderText(){const total=cart.reduce((n,x)=>n+moneyNumber(x.price)*x.qty,0);return cart.map((entry,i)=>{const x=cartDisplay(entry);return `${i+1}. ${x.name} | ${x.size} | ${x.price} | Քանակ՝ ${x.qty}`}).join('\n')+`\n\nԸնդհանուր՝ ${total.toLocaleString('hy-AM')} ֏`}
function openCheckout(){if(!cart.length){cartDrawer?.classList.add('open');cartDrawer?.setAttribute('aria-hidden','false');if(orderStatus)orderStatus.textContent='';return}cartDrawer?.classList.remove('open');cartDrawer?.setAttribute('aria-hidden','true');renderCheckoutSummary();orderDetails.value=orderText();orderStatus.textContent='';checkoutModal.classList.add('open');checkoutModal.setAttribute('aria-hidden','false')}
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
let viewerImages=[],viewerIndex=0,viewerScroll='',viewerFocus=null,viewerName='';
function renderViewer(){viewerPhoto.src=viewerImages[viewerIndex];viewerPhoto.alt=`${viewerName} — ${viewerIndex+1}`;imageViewer.querySelector('.imageViewerCounter').textContent=`${viewerIndex+1} / ${viewerImages.length}`;viewerPrev.hidden=viewerNext.hidden=viewerImages.length<2;}
function stepViewer(step){viewerIndex=(viewerIndex+step+viewerImages.length)%viewerImages.length;renderViewer();}
function closeImageViewer(){imageViewer.close();}
variantGrid.addEventListener('click',event=>{const button=event.target.closest('[data-gallery-id]');if(!button)return;const record=productRecord(button.dataset.galleryId);if(!record)return;const item=record.item;viewerImages=item[4]||[item[3]];viewerName=localizedItem(item).name;viewerIndex=0;viewerFocus=button;renderViewer();viewerScroll=document.body.style.overflow;document.body.style.overflow='hidden';imageViewer.showModal();imageViewer.querySelector('.imageViewerClose').focus();});
viewerPrev.addEventListener('click',()=>stepViewer(-1));
viewerNext.addEventListener('click',()=>stepViewer(1));
imageViewer.querySelector('.imageViewerClose').addEventListener('click',closeImageViewer);
imageViewer.addEventListener('click',event=>{if(event.target===imageViewer)closeImageViewer();});
imageViewer.addEventListener('close',()=>{document.body.style.overflow=viewerScroll;viewerFocus?.focus();});
imageViewer.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'){event.preventDefault();stepViewer(-1);}if(event.key==='ArrowRight'){event.preventDefault();stepViewer(1);}});
let swipeStart=null;
viewerPhoto.addEventListener('touchstart',event=>{const touch=event.touches.length===1?event.touches[0]:null;swipeStart=touch?{x:touch.clientX,y:touch.clientY}:null;},{passive:true});
viewerPhoto.addEventListener('touchend',event=>{if(!swipeStart)return;const touch=event.changedTouches[0],dx=touch.clientX-swipeStart.x,dy=touch.clientY-swipeStart.y;swipeStart=null;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.5&&viewerImages.length>1)stepViewer(dx<0?1:-1);},{passive:true});

function renderCheckoutSummary(){checkoutSummary.innerHTML='<h3>'+ui().yourOrder+'</h3>'+cart.map(entry=>{const x=cartDisplay(entry);return `<div class="checkoutLine"><span>${escapeHtml(x.name)} × ${x.qty}</span><b>${escapeHtml(x.price)}</b></div>`}).join('')}
window.refreshStoreLanguage=function(){
 document.querySelectorAll('.categoryCard').forEach(card=>{const name=categoryTitles[card.dataset.category][currentLanguage()];card.querySelector('h3').textContent=name;card.querySelector('img').alt=name});
 document.querySelector('.categoryBack').textContent='← '+ui().back;
 document.querySelector('.cartHead h2').textContent=ui().cart;
 document.querySelector('.checkoutBtn').textContent=ui().order;
 document.querySelectorAll('.search input,.search button,.mobileSearch input,.mobileSearchGo,.mobileSearchBtn').forEach(el=>el.setAttribute('aria-label',ui().search));
 imageViewer.querySelector('.imageViewerClose').setAttribute('aria-label',ui().close);viewerPrev.setAttribute('aria-label',ui().previous);viewerNext.setAttribute('aria-label',ui().next);
 syncHeaderLang();renderCart();
 if(searchTerm)searchProducts(searchTerm);else if(activeCategory)openCategory(activeCategory,false);
 if(checkoutModal.classList.contains('open')){renderCheckoutSummary();orderDetails.value=orderText()}
};
document.querySelectorAll('.search input,.mobileSearch input').forEach(input=>{
 input.addEventListener('input',()=>searchProducts(input.value));
 input.addEventListener('keydown',event=>{if(event.key==='Enter'){event.preventDefault();searchProducts(input.value,true)}if(event.key==='Escape'){input.value='';showCategories();ms?.classList.remove('open')}});
});
document.querySelector('.search button')?.addEventListener('click',()=>searchProducts(document.querySelector('.search input').value,true));
document.querySelector('.mobileSearchGo')?.addEventListener('click',()=>searchProducts(document.querySelector('.mobileSearch input').value,true));
document.querySelectorAll('a[href="#products"]').forEach(link=>link.addEventListener('click',()=>showCategories()));
const doorVideo=document.querySelector('.doorVideo');
if(doorVideo&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){doorVideo.muted=true;doorVideo.play().catch(()=>{document.addEventListener('pointerdown',()=>doorVideo.play().catch(()=>{}),{once:true})})}
lang(currentLanguage());
const categoryFromHash=location.hash.match(/^#products\/(cones|bumps|mirrors|posts|barriers|concrete)$/)?.[1];
if(categoryFromHash)openCategory(categoryFromHash,false);else revealCards();
