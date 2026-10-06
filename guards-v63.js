// Load after existing catalog scripts. Updates only cornerGuards.
(()=>{'use strict';
const key='cornerGuards';
const items=[["Ռետինե պաշտպանիչ անկյունակ Evelux", "Բարձրություն՝ 80 սմ", "8,000 ֏", "images/guards-v63/evelux-80.jpeg", ["images/guards-v63/evelux-80.jpeg"], {"hy": {"name": "Ռետինե պաշտպանիչ անկյունակ Evelux", "size": "Բարձրություն՝ 80 սմ"}, "ru": {"name": "Резиновый защитный уголок Evelux", "size": "Высота: 80 см"}, "en": {"name": "Evelux rubber corner guard", "size": "Height: 80 cm"}}], ["Կլորացված ռետինե պաշտպանիչ՝ պատերի և սյուների համար", "Բարձրություն՝ 80 սմ", "6,000 ֏", "images/guards-v63/rounded-80.webp", ["images/guards-v63/rounded-80.webp"], {"hy": {"name": "Կլորացված ռետինե պաշտպանիչ՝ պատերի և սյուների համար", "size": "Բարձրություն՝ 80 սմ"}, "ru": {"name": "Закруглённая резиновая защита стен и колонн", "size": "Высота: 80 см"}, "en": {"name": "Rounded rubber wall and column guard", "size": "Height: 80 cm"}}], ["Կլորացված ռետինե պաշտպանիչ՝ պատերի և սյուների համար", "Երկարություն՝ 1 մ", "7,000 ֏", "images/guards-v63/rounded-100.jpeg", ["images/guards-v63/rounded-100.jpeg"], {"hy": {"name": "Կլորացված ռետինե պաշտպանիչ՝ պատերի և սյուների համար", "size": "Երկարություն՝ 1 մ"}, "ru": {"name": "Закруглённая резиновая защита стен и колонн", "size": "Длина: 1 м"}, "en": {"name": "Rounded rubber wall and column guard", "size": "Length: 1 m"}}], ["Կլորացված ռետինե պաշտպանիչ՝ չորս դեղին շերտով", "Երկարություն՝ 80 սմ", "5,000 ֏", "images/guards-v63/rounded-80-four-bands.png", ["images/guards-v63/rounded-80-four-bands.png"], {"hy": {"name": "Կլորացված ռետինե պաշտպանիչ՝ չորս դեղին շերտով", "size": "Երկարություն՝ 80 սմ"}, "ru": {"name": "Закруглённая резиновая защита с четырьмя жёлтыми полосами", "size": "Длина: 80 см"}, "en": {"name": "Rounded rubber guard with four yellow bands", "size": "Length: 80 cm"}}]];
const titles={hy:'Պատերի և սյուների պաշտպանիչներ',ru:'Защита стен и колонн',en:'Wall and column guards'};
// Keep old cart descriptions rather than mapping old records to new products.
for(const entry of cart)if((entry.productId||'').startsWith(key+':'))delete entry.productId;
catalogData[key].title=titles.hy;
catalogData[key].items=items;
categoryTitles[key]=titles;
for(let i=productRecords.length-1;i>=0;i--)if(productRecords[i].key===key)productRecords.splice(i,1);
items.forEach((item,index)=>productRecords.push({id:'v63:'+key+':'+index,key,index,item}));
const card=document.querySelector('.categoryCard[data-category="cornerGuards"]');
if(card){const img=card.querySelector('img');if(img){img.src=items[0][3];img.alt=titles.hy;}}
window.refreshStoreLanguage?.();
})();
