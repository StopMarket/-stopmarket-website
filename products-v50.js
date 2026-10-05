// Stop Market v50: supplied warning lights and EXIT signs.
(()=>{
'use strict';
const data={
  "solarLights": [
    [
      "Արևային սնուցմամբ ճանապարհային ազդանշանային լույս",
      "Ապրանքանիշ՝ Evelux • Գույն՝ կարմիր",
      "14,000 ֏",
      "images/lights-exit/triangular-red.webp",
      [
        "images/lights-exit/triangular-red.webp"
      ],
      {
        "hy": {
          "name": "Արևային սնուցմամբ ճանապարհային ազդանշանային լույս",
          "size": "Ապրանքանիշ՝ Evelux • Գույն՝ կարմիր"
        },
        "ru": {
          "name": "Дорожный сигнальный фонарь на солнечной батарее",
          "size": "Бренд: Evelux • Цвет: красный"
        },
        "en": {
          "name": "Solar-powered road warning light",
          "size": "Brand: Evelux • Color: red"
        }
      }
    ],
    [
      "Արևային սնուցմամբ ճանապարհային ազդանշանային լույս",
      "Գույներ՝ կապույտ և կարմիր",
      "30,000 ֏",
      "images/lights-exit/bar-blue-red.webp",
      [
        "images/lights-exit/bar-blue-red.webp"
      ],
      {
        "hy": {
          "name": "Արևային սնուցմամբ ճանապարհային ազդանշանային լույս",
          "size": "Գույներ՝ կապույտ և կարմիր"
        },
        "ru": {
          "name": "Дорожный сигнальный фонарь на солнечной батарее",
          "size": "Цвет: синий и красный"
        },
        "en": {
          "name": "Solar-powered road warning light",
          "size": "Color: blue and red"
        }
      }
    ],
    [
      "Արևային սնուցմամբ ճանապարհային ազդանշանային լույս",
      "Գույն՝ դեղին",
      "12,000 ֏",
      "images/lights-exit/double-yellow.webp",
      [
        "images/lights-exit/double-yellow.webp"
      ],
      {
        "hy": {
          "name": "Արևային սնուցմամբ ճանապարհային ազդանշանային լույս",
          "size": "Գույն՝ դեղին"
        },
        "ru": {
          "name": "Дорожный сигнальный фонарь на солнечной батарее",
          "size": "Цвет: жёлтый"
        },
        "en": {
          "name": "Solar-powered road warning light",
          "size": "Color: yellow"
        }
      }
    ],
    [
      "Արևային սնուցմամբ ճանապարհային ազդանշանային լույս",
      "Գույն՝ կարմիր",
      "12,000 ֏",
      "images/lights-exit/double-red.webp",
      [
        "images/lights-exit/double-red.webp"
      ],
      {
        "hy": {
          "name": "Արևային սնուցմամբ ճանապարհային ազդանշանային լույս",
          "size": "Գույն՝ կարմիր"
        },
        "ru": {
          "name": "Дорожный сигнальный фонарь на солнечной батарее",
          "size": "Цвет: красный"
        },
        "en": {
          "name": "Solar-powered road warning light",
          "size": "Color: red"
        }
      }
    ],
    [
      "Արևային սնուցմամբ ճանապարհային ազդանշանային լույս",
      "Գույն՝ դեղին",
      "8,500 ֏",
      "images/lights-exit/round-yellow.webp",
      [
        "images/lights-exit/round-yellow.webp"
      ],
      {
        "hy": {
          "name": "Արևային սնուցմամբ ճանապարհային ազդանշանային լույս",
          "size": "Գույն՝ դեղին"
        },
        "ru": {
          "name": "Дорожный сигнальный фонарь на солнечной батарее",
          "size": "Цвет: жёлтый"
        },
        "en": {
          "name": "Solar-powered road warning light",
          "size": "Color: yellow"
        }
      }
    ],
    [
      "Արևային սնուցմամբ ճանապարհային ազդանշանային լույս",
      "Գույն՝ նարնջագույն",
      "12,000 ֏",
      "images/lights-exit/led-orange.webp",
      [
        "images/lights-exit/led-orange.webp"
      ],
      {
        "hy": {
          "name": "Արևային սնուցմամբ ճանապարհային ազդանշանային լույս",
          "size": "Գույն՝ նարնջագույն"
        },
        "ru": {
          "name": "Дорожный сигнальный фонарь на солнечной батарее",
          "size": "Цвет: оранжевый"
        },
        "en": {
          "name": "Solar-powered road warning light",
          "size": "Color: orange"
        }
      }
    ],
    [
      "Արևային սնուցմամբ ճանապարհային ազդանշանային լույս",
      "Գույն՝ կարմիր",
      "12,000 ֏",
      "images/lights-exit/beacon-red.webp",
      [
        "images/lights-exit/beacon-red.webp"
      ],
      {
        "hy": {
          "name": "Արևային սնուցմամբ ճանապարհային ազդանշանային լույս",
          "size": "Գույն՝ կարմիր"
        },
        "ru": {
          "name": "Дорожный сигнальный фонарь на солнечной батарее",
          "size": "Цвет: красный"
        },
        "en": {
          "name": "Solar-powered road warning light",
          "size": "Color: red"
        }
      }
    ],
    [
      "Արևային սնուցմամբ ճանապարհային ազդանշանային լույս",
      "Ապրանքանիշ՝ Evelux • Գույն՝ սպիտակ՝ դեղին լուսանդրադարձիչով",
      "8,000 ֏",
      "images/lights-exit/evelux-clear.webp",
      [
        "images/lights-exit/evelux-clear.webp"
      ],
      {
        "hy": {
          "name": "Արևային սնուցմամբ ճանապարհային ազդանշանային լույս",
          "size": "Ապրանքանիշ՝ Evelux • Գույն՝ սպիտակ՝ դեղին լուսանդրադարձիչով"
        },
        "ru": {
          "name": "Дорожный сигнальный фонарь на солнечной батарее",
          "size": "Бренд: Evelux • Цвет: белый с жёлтым отражателем"
        },
        "en": {
          "name": "Solar-powered road warning light",
          "size": "Brand: Evelux • Color: white with yellow reflector"
        }
      }
    ],
    [
      "Արևային սնուցմամբ ճանապարհային ազդանշանային լույս",
      "Գույներ՝ դեղին և կարմիր",
      "8,500 ֏",
      "images/lights-exit/beacon-yellow-red.webp",
      [
        "images/lights-exit/beacon-yellow-red.webp",
        "images/lights-exit/beacon-red-variant.webp"
      ],
      {
        "hy": {
          "name": "Արևային սնուցմամբ ճանապարհային ազդանշանային լույս",
          "size": "Գույներ՝ դեղին և կարմիր"
        },
        "ru": {
          "name": "Дорожный сигнальный фонарь на солнечной батарее",
          "size": "Цвет: жёлтый и красный"
        },
        "en": {
          "name": "Solar-powered road warning light",
          "size": "Color: yellow and red"
        }
      }
    ],
    [
      "Արևային սնուցմամբ ճանապարհային ազդանշանային լույս",
      "Գույն՝ դեղին",
      "10,000 ֏",
      "images/lights-exit/tall-yellow.webp",
      [
        "images/lights-exit/tall-yellow.webp"
      ],
      {
        "hy": {
          "name": "Արևային սնուցմամբ ճանապարհային ազդանշանային լույս",
          "size": "Գույն՝ դեղին"
        },
        "ru": {
          "name": "Дорожный сигнальный фонарь на солнечной батарее",
          "size": "Цвет: жёлтый"
        },
        "en": {
          "name": "Solar-powered road warning light",
          "size": "Color: yellow"
        }
      }
    ],
    [
      "Արևային սնուցմամբ ճանապարհային ազդանշանային լույս",
      "Գույն՝ դեղին",
      "17,000 ֏",
      "images/lights-exit/multi-yellow.webp",
      [
        "images/lights-exit/multi-yellow.webp"
      ],
      {
        "hy": {
          "name": "Արևային սնուցմամբ ճանապարհային ազդանշանային լույս",
          "size": "Գույն՝ դեղին"
        },
        "ru": {
          "name": "Дорожный сигнальный фонарь на солнечной батарее",
          "size": "Цвет: жёлтый"
        },
        "en": {
          "name": "Solar-powered road warning light",
          "size": "Color: yellow"
        }
      }
    ]
  ],
  "exitSigns": [
    [
      "Լուսային ելքի ցուցանակ՝ EXIT, առանց սլաքի",
      "Գույն՝ կանաչ",
      "5,500 ֏",
      "images/lights-exit/exit-plain.webp",
      [
        "images/lights-exit/exit-plain.webp"
      ],
      {
        "hy": {
          "name": "Լուսային ելքի ցուցանակ՝ EXIT, առանց սլաքի",
          "size": "Գույն՝ կանաչ"
        },
        "ru": {
          "name": "Световой указатель EXIT, без стрелки",
          "size": "Цвет: зелёный"
        },
        "en": {
          "name": "Illuminated EXIT sign, no arrow",
          "size": "Color: green"
        }
      }
    ],
    [
      "Լուսային ելքի ցուցանակ՝ EXIT, աջ սլաքով",
      "Գույն՝ կանաչ",
      "5,500 ֏",
      "images/lights-exit/exit-right.webp",
      [
        "images/lights-exit/exit-right.webp"
      ],
      {
        "hy": {
          "name": "Լուսային ելքի ցուցանակ՝ EXIT, աջ սլաքով",
          "size": "Գույն՝ կանաչ"
        },
        "ru": {
          "name": "Световой указатель EXIT, со стрелкой вправо",
          "size": "Цвет: зелёный"
        },
        "en": {
          "name": "Illuminated EXIT sign, right arrow",
          "size": "Color: green"
        }
      }
    ],
    [
      "Լուսային ելքի ցուցանակ՝ EXIT, ձախ սլաքով",
      "Գույն՝ կանաչ",
      "5,500 ֏",
      "images/lights-exit/exit-left.webp",
      [
        "images/lights-exit/exit-left.webp"
      ],
      {
        "hy": {
          "name": "Լուսային ելքի ցուցանակ՝ EXIT, ձախ սլաքով",
          "size": "Գույն՝ կանաչ"
        },
        "ru": {
          "name": "Световой указатель EXIT, со стрелкой влево",
          "size": "Цвет: зелёный"
        },
        "en": {
          "name": "Illuminated EXIT sign, left arrow",
          "size": "Color: green"
        }
      }
    ],
    [
      "Լուսային ելքի ցուցանակ՝ EXIT, ներքև սլաքով",
      "Գույն՝ կանաչ",
      "5,500 ֏",
      "images/lights-exit/exit-down.webp",
      [
        "images/lights-exit/exit-down.webp"
      ],
      {
        "hy": {
          "name": "Լուսային ելքի ցուցանակ՝ EXIT, ներքև սլաքով",
          "size": "Գույն՝ կանաչ"
        },
        "ru": {
          "name": "Световой указатель EXIT, со стрелкой вниз",
          "size": "Цвет: зелёный"
        },
        "en": {
          "name": "Illuminated EXIT sign, down arrow",
          "size": "Color: green"
        }
      }
    ]
  ]
};
for(const [key,items] of Object.entries(data)){
 catalogData[key].items=items;
 for(let i=productRecords.length-1;i>=0;i--)if(productRecords[i].key===key)productRecords.splice(i,1);
 items.forEach((item,index)=>productRecords.push({id:'v50:'+key+':'+index,key,index,item}));
 const image=document.querySelector('.categoryCard[data-category="'+key+'"] img');
 if(image)image.src=items[0][3];
}
categoryTitles.solarLights={hy:'Ճանապարհային ազդանշանային լույսեր',ru:'Дорожные сигнальные фонари',en:'Road warning lights'};
catalogData.solarLights.title=categoryTitles.solarLights.hy;
// Preserve stored cart details for the former placeholder items.
for(const entry of cart)if(/^(solarLights|exitSigns):/.test(entry.productId||''))delete entry.productId;
window.refreshStoreLanguage?.();
})();
