/**
 * Dear programmer:
 * When I wrote this code, only god and 
 * I knew how it worked.
 * Now, only god knows it!
 * 
 * You have been warned.
 * 
 * For more information visit: https://alonsoaliaga.com/DearProgrammer
 */
const defaultGradients = {
  0:{
    identifier:"default",
    colors:["#00cdac", "#02aab0"],
  },
  1:{
    identifier:"rainbow",
    colors:["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"],
  },
  2:{
    identifier:"instagram",
    colors:["#833ab4", "#fd1d1d", "#fcb045"],
  },
  3:{
    identifier:"fire",
    colors:["#A10100", "#DA3604", "#FE650D", "#FFC11F", "#FFF75D"],
  },
  4:{
    identifier:"amethyst",
    colors:["#D93894","#B327BB", "#6E48AA"],
  },
  5:{
    identifier:"tiktok",
    colors:["#FF0050", "#4B0018", "#00F2EA"],
  },
  6:{
    identifier:"rose",
    colors:["#F4C4F3","#FC67FA"]
  }
}
const fonts = {
  "accent": {
    "name": "Accent",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ĀBÇÐÊFǴĦÎĴĶĿMŇήÖPQŘŞŢŬVŴXŸƵābčďéfǥĥɨĵķłmņŇǒpqřşŧùvŵxŷž⁰¹²³⁴⁵⁶⁷⁸⁹".split("")
    }
  },
  "big": {
    "name": "Big",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎÑOᑭᑫᖇᔕTᑌᐯᗯ᙭YᘔᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎñOᑭᑫᖇᔕTᑌᐯᗯ᙭Yᘔ0123456789".split("")
    }
  },
  "bubble": {
    "name": "Bubble",
    "processed": {},
    "data": {
      tosearch: "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⓪①②③④⑤⑥⑦⑧⑨".split("")
    }
  },
  "currency": {
    "name": "Currency",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦ÑØ₱QⱤ₴₮ɄV₩ӾɎⱫ₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦ñØ₱QⱤ₴₮ɄV₩ӾɎⱫ0123456789".split("")
    }
  },
  "cursed": {
    "name": "Cursed",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ԹՅՇԺȝԲԳɧɿʝƙʅʍՌՌԾρφՐՏԵՄעաՃՎՀԹՅՇԺȝԲԳɧɿʝƙʅʍՌՌԾρφՐՏԵՄעաՃՎՀ0123456789".split("")
    }
  },
  "elegant": {
    "name": "Elegant",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ąɓƈđε∱ɠɧïʆҡℓɱŋñσþҩŗşŧų√щхγẕąɓƈđε∱ɠɧïʆҡℓɱŋñσþҩŗşŧų√щхγẕ0123456789".split("")
    }
  },
  "greek": {
    "name": "Greek",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"αႦƈԃҽϝɠԋιʝƙʅɱɳñσρϙɾʂƚυʋɯxყȥαႦƈԃҽϝɠԋιʝƙʅɱɳñσρϙɾʂƚυʋɯxყȥ0123456789".split("")
    }
  },
  "knight": {
    "name": "Knight",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ḀḃḉḊḕḟḠḧḭjḲḶṁṆÑṏṖqṙṠṮṳṼẇẌẏẒḀḃḉḊḕḟḠḧḭjḲḶṁṆñṏṖqṙṠṮṳṼẇẌẏẒ0123456789".split("")
    }
  },
  "krypto": {
    "name": "Krypto",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"คც८ძ૯Բ૭ҺɿʆқՆɱՈÑ૦ƿҩՐς੮υ౮ω૪עઽคც८ძ૯Բ૭ҺɿʆқՆɱՈՈ૦ƿҩՐς੮υ౮ω૪עઽ0123456789".split("")
    }
  },
  "parenthesis": {
    "name": "Parenthesis",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵⒪⑴⑵⑶⑷⑸⑹⑺⑻⑼".split("")
    }
  },
  "random": {
    "name": "Random",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ᏗᏰፈᎴᏋᎦᎶᏂᎥᏠᏦᏝᎷᏁÑᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚᏗᏰፈᎴᏋᎦᎶᏂᎥᏠᏦᏝᎷᏁñᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚ0123456789".split("")
    }
  },
  "small-caps": {
    "name": "Small caps 💎",
    "before": function(s) {
      return s.toLowerCase();
    },
    "processed": {},
    "data": {
      tosearch:"abcdefghijklmnñopqrstuvwxyzqæƀðʒǝɠɨłꟽɯœɔȣꝵʉγλπρψ0123456789-+".split(""),
      toreplace:"ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴñᴏᴘǫʀsᴛᴜᴠᴡxʏᴢǫᴁᴃᴆᴣⱻʛᵻᴌꟺꟺɶᴐᴕꝶᵾᴦᴧᴨᴩᴪ₀₁₂₃₄₅₆₇₈₉₋₊".split("")
    }
  },
  "spaced": {
    "name": "Spaced",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ＡＢＣＤＥＦＧＨＩＪＫＬＭＮÑＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎñｏｐｑｒｓｔｕｖｗｘｙｚ０１２３４５６７８９".split("")
    }
  },
  "superscript": {
    "name": "SuperScript",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺÑᴼᴾᵠᴿˢᵀᵁⱽᵂˣʸᶻᵃᵇᶜᵈᵉᶠᵍʰᶦʲᵏˡᵐⁿñᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ⁰¹²³⁴⁵⁶⁷⁸⁹".split("")
    }
  },
  "tail": {
    "name": "Tail",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ƛƁƇƊЄƑƓӇƖʆƘԼMƝƝƠƤƢƦƧƬƲƔƜҲƳȤʌƅƈɗєƒʛɦɪʝƙʅɱɲɲơƥƣɾƨƭυvɯҳɣȥ0123456789".split("")
    }
  },
  "tailuppercase": {
    "name": "Tail Uppercase",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ƛƁƇƊЄƑƓӇƖʆƘԼMƝƝƠƤƢƦƧƬƲƔƜҲƳȤƛƁƇƊЄƑƓӇƖʆƘԼMƝÑƠƤƢƦƧƬƲƔƜҲƳȤ0123456789".split("")
    }
  },
  "taillowercase": {
    "name": "Tail Lowercase",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ʌƅƈɗєƒʛɦɪʝƙʅɱɲɲơƥƣɾƨƭυVɯҳɣȥʌƅƈɗєƒʛɦɪʝƙʅɱɲɲơƥƣɾƨƭυvɯҳɣȥ0123456789".split("")
    }
  },
  "upsidedown": {
    "name": "Upside down",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"∀ᙠƆᗡƎℲ⅁HIſ⋊˥WNÑOԀΌᴚS⊥∩ΛWX⅄Zɐqɔpǝɟɓɥıɾʞlɯuñopqɹsʇuʌʍxʎz0⇂ᄅƐㄣގ9ㄥ89".split("")
    }
  },
  "upsidedown2": {
    "name": "Upside down #2",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ɐqɔpǝɟɓɥıſʞๅɯuuodbɹsʇnʌʍxʎzɐqɔpǝɟɓɥıſʞๅɯuũodbɹsʇnʌʍxʎz0123456789".split("")
    }
  },
  "upsidedown3": {
    "name": "Upside down #3",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"∀ʙCᴅєɻƋʜǀๅĸΓWИÑObƠɩƧ⊥∏ΛMXλZɑʙcᴅєɻმʜιɿĸгwиñoƅϭʁƨ⊥nʌʍx⑃z0123456789".split("")
    }
  },
  "weird": {
    "name": "Weird",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ǟɮƈɖɛʄɢɦɨʝӄʟʍռñօքզʀֆȶʊʋաӼʏʐǟɮƈɖɛʄɢɦɨʝӄʟʍռñօքզʀֆȶʊʋաӼʏʐ0123456789".split("")
    }
  }
}
let adLockedModels = ["crossed","criss_cross","reading","profile","relaxing","bitzel","mojavatar","custom-5","custom-6","custom-7","custom-10","custom-11","custom-12","custom-13","custom-17","custom-18","custom-19","custom-20","custom-21","custom-22","custom-23","custom-24","custom-25","custom-26","custom-27","custom-28","custom-29","custom-30","custom-31","custom-32","custom-33","custom-34","custom-35","custom-36","custom-37","custom-38","custom-39","custom-40","custom-41","custom-42","custom-43","custom-44","custom-45","custom-46","custom-47","custom-48","custom-49","custom-50"];
const models = {
  "default": {
    image: "default.png",
    name: "Default",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "crossed": {
    image: "crossed-arms.png",
    name: "Crossed Arms",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "ultimate": {
    image: "ultimate.png",
    name: "Ultimate",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "walking": {
    image: "walking.png",
    name: "Walking",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "cheering": {
    image: "cheering.png",
    name: "Cheering",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "cowering": {
    image: "cowering.png",
    name: "Cowering",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "head": {
    image: "head.png",
    name: "Head",
    crops: [
      "full"
    ]
  },
  "dead": {
    image: "dead.png",
    name: "Dead",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "high_ground": {
    image: "opened-arms.png",
    name: "Opened Arms",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "archer": {
    image: "archer.png",
    name: "Archer",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "marching": {
    image: "marching.png",
    name: "Marching",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "crouching": {
    image: "crouching.png",
    name: "Crouching",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "criss_cross": {
    image: "crossed-legs.png",
    name: "Crossed Legs",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "isometric": {
    image: "isometric.png",
    name: "Isometric",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "relaxing": {
    image: "relaxing.png",
    name: "Relaxing",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "trudging": {
    image: "trudging.png",
    name: "Trudging",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "pointing": {
    image: "pointing.png",
    name: "Pointing",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "lunging": {
    image: "sword-attack.png",
    name: "Sword Attack",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "dungeons": {
    image: "dungeons.png",
    name: "Dungeons",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "facepalm": {
    image: "facepalm.png",
    name: "Facepalm",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "sleeping": {
    image: "sleeping.png",
    name: "Sleeping",
    crops: [
      "full",
      "bust"
    ]
  },
  "kicking": {
    image: "kicking.png",
    name: "Kicking",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "mojavatar": {
    image: "mojavatar.png",
    name: "Mojavatar",
    crops: [
      "full",
      "bust"
    ]
  },
  "reading": {
    image: "reading.png",
    name: "Reading",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "clown": {
    image: "clown.png",
    name: "Clown",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "bitzel": {
    image: "bitzel.png",
    name: "Bitzel",
    is2D: true,
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "pixel": {
    image: "pixel.png",
    name: "Pixel",
    is2D: true,
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "ornament": {
    image: "ornament.png",
    name: "Ornament",
    is2D: true,
    crops: [
      "full"
    ]
  },
  "profile": {
    image: "profile.png",
    name: "Profile",
    is2D: true,
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "custom-1": {
    custom: true,
    url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9jdXN0b20ve2Nyb3B9P3dpZGVNb2RlbD1odHRwczovL2Nkbi5sdW5hcmVjbGlwc2Uuc3R1ZGlvL21vZGVsLm9iaiZzbGltTW9kZWw9aHR0cHM6Ly9jZG4ubHVuYXJlY2xpcHNlLnN0dWRpby9tb2RlbC5vYmomY2FtZXJhUG9zaXRpb249eyJ4IjoiLTQuOTQiLCJ5IjoiMzIuMDkiLCJ6IjoiLTIxLjYifSZjYW1lcmFGb2NhbFBvaW50PXsieCI6IjMuNjciLCJ5IjoiMTYuMzEiLCJ6IjoiMy4zNSJ9e2FkZGl0aW9uYWx9`,
    image: "custom/custom-1.png",
    name: "How are you?",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "custom-2": {
    custom: true,
    url: `aHR0cHM6Ly9tYy1oZWFkcy5uZXQvYXZhdGFyL3t1dWlkfS97c2l6ZX0=`,
    image: "custom/custom-2.png",
    name: "Pixel Head<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    crops: [
      "None available"
    ]
  },
  "custom-3": {
    custom: true,
    url: `aHR0cHM6Ly9tYy1oZWFkcy5uZXQvaGVhZC97dXNlcm5hbWV9L3tzaXplfQ`,
    image: "custom/custom-3.png",
    name: "Isometric Head<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    crops: [
      "None available"
    ]
  },
  // "custom-4": {
  //   custom: true,
  //   url: `aHR0cHM6Ly9yZW5kZXIuc2tpbm1jLm5ldC8zZC5waHA/dXNlcj17dXNlcm5hbWV9JnZyPTgmaHIwJmhyaD0tMzkmYWE9JmhlYWRPbmx5PXRydWUmcmF0aW89NTAucG5n`,
  //   image: "custom/custom-4.png",
  //   name: "Cube Head<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small><br><small><small><small>❌ Might not work sometimes. Try later.</small></small></small>",
  //   crops: [
  //     "None available"
  //   ]
  // },
  "custom-5": {
    custom: true,
    url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci93YWxscGFwZXIve2Nyb3B9e2FkZGl0aW9uYWx9`,
    is2D: true,
    image: "custom/custom-5.png",
    name: "Wallpaper Render<br><small><small><small>❌ Not supported with image quality</small></small></small>",
    crops: [
      "herobrine_hill",
      "quick_hide",
      "malevolent",
      "off_to_the_stars",
      "wheat",
    ]
  },
  "custom-6": {
    custom: true,
    url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9kdW5nZW9ucy97Y3JvcH0/Y2FtZXJhUG9zaXRpb249eyJ4IjoiMjUuMjYiLCJ5IjoiMjkuMzQiLCJ6IjoiLTU0Ljk0In0mY2FtZXJhRm9jYWxQb2ludD17IngiOiIwLjg1IiwieSI6IjE2LjMyIiwieiI6Ii0wLjA4In0maXNvbWV0cmljPXRydWUmZGlyTGlnaHRQb3M9eyJ4IjoiLTEwIiwieSI6IjEwIiwieiI6Ii0xMCJ9JmRpckxpZ2h0Q29sb3I9MDA0MGZmJmdsb2JhbExpZ2h0Q29sb3I9ZmZmZmZmJnByb3BNb2RlbD1odHRwczovL2Nkbi5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3Byb3BUZXN0Lm9iaiZwcm9wVGV4dHVyZT1odHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlLzU1ZDJlZDEzZDZiNTMyMGQwN2E4NDBkNTIyMmZiNTJmODU5MTI0ODNmZjZhNWI1YzQ2NzUxYWU0OTA0YzVkNGQmZ2xvYmFsTGlnaHRJbnRlbnNpdHk9LTAuMTUmZGlyTGlnaHRJbnRlbnNpdHk9MC41NXthZGRpdGlvbmFsfQ==`,
    //url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9kdW5nZW9ucy97dXNlcm5hbWV9L3tjcm9wfT9jYW1lcmFQb3NpdGlvbj17IngiOiIyNS4yNiIsInkiOiIyOS4zNCIsInoiOiItNTQuOTQifSZjYW1lcmFGb2NhbFBvaW50PXsieCI6IjAuODUiLCJ5IjoiMTYuMzIiLCJ6IjoiLTAuMDgifSZpc29tZXRyaWM9dHJ1ZSZkaXJMaWdodFBvcz17IngiOiItMTAiLCJ5IjoiMTAiLCJ6IjoiLTEwIn0mZGlyTGlnaHRDb2xvcj0wMDQwZmYmZ2xvYmFsTGlnaHRDb2xvcj1mZmZmZmYmcHJvcE1vZGVsPWh0dHBzOi8vY2RuLmx1bmFyZWNsaXBzZS5zdHVkaW8vcHJvcFRlc3Qub2JqJnByb3BUZXh0dXJlPWh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNTVkMmVkMTNkNmI1MzIwZDA3YTg0MGQ1MjIyZmI1MmY4NTkxMjQ4M2ZmNmE1YjVjNDY3NTFhZTQ5MDRjNWQ0ZCZnbG9iYWxMaWdodEludGVuc2l0eT0tMC4xNSZkaXJMaWdodEludGVuc2l0eT0wLjU1`,
    image: "custom/custom-6.png",
    name: "Friend Herobrine<br><small><small><small>❌ Not supported with image quality</small></small></small>",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "custom-7": {
    restricted: true,
    custom: true,
    url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9jdXN0b20ve2Nyb3B9P3dpZGVNb2RlbD1odHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vQWxvbnNvQWxpYWdhL0Fsb25zb0FsaWFnYUFQSS9yZWZzL2hlYWRzL21haW4vcmVuZGVycy9sb29rLXRoZXJlLm9iaiZzbGltTW9kZWw9aHR0cHM6Ly9jZG4ubHVuYXJlY2xpcHNlLnN0dWRpby9tb2RlbC5vYmomY2FtZXJhUG9zaXRpb249eyJ4IjoiMzguNTUiLCJ5IjoiMy42NyIsInoiOiItNTAuNTQifSZjYW1lcmFGb2NhbFBvaW50PXsieCI6IjAuNDkiLCJ5IjoiMTYuNzkiLCJ6IjoiLTQuMTIifXthZGRpdGlvbmFsfQ==`,
    //url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9jdXN0b20ve3VzZXJuYW1lfS97Y3JvcH0/d2lkZU1vZGVsPWh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9BbG9uc29BbGlhZ2EvQWxvbnNvQWxpYWdhQVBJL3JlZnMvaGVhZHMvbWFpbi9yZW5kZXJzL2xvb2stdGhlcmUub2JqJnNsaW1Nb2RlbD1odHRwczovL2Nkbi5sdW5hcmVjbGlwc2Uuc3R1ZGlvL21vZGVsLm9iaiZjYW1lcmFQb3NpdGlvbj17IngiOiIzOC41NSIsInkiOiIzLjY3IiwieiI6Ii01MC41NCJ9JmNhbWVyYUZvY2FsUG9pbnQ9eyJ4IjoiMC40OSIsInkiOiIxNi43OSIsInoiOiItNC4xMiJ9`,
    image: "custom/custom-7.png",
    name: "Look there! Is that a plane?",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "custom-8": {
    custom: true,
    url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9jdXN0b20ve2Nyb3B9P3dpZGVNb2RlbD1odHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vQWxvbnNvQWxpYWdhL0Fsb25zb0FsaWFnYUFQSS9yZWZzL2hlYWRzL21haW4vcmVuZGVycy95b3UtdG9vLXNtYWxsLm9iaiZzbGltTW9kZWw9aHR0cHM6Ly9jZG4ubHVuYXJlY2xpcHNlLnN0dWRpby9tb2RlbC5vYmomY2FtZXJhUG9zaXRpb249eyJ4IjoiMCIsInkiOiItMTUuOCIsInoiOiItMzYuNDIifSZjYW1lcmFGb2NhbFBvaW50PXsieCI6IjAiLCJ5IjoiMTYuNTUiLCJ6IjoiMCJ9e2FkZGl0aW9uYWx9`,
    //url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9jdXN0b20ve3VzZXJuYW1lfS97Y3JvcH0/d2lkZU1vZGVsPWh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9BbG9uc29BbGlhZ2EvQWxvbnNvQWxpYWdhQVBJL3JlZnMvaGVhZHMvbWFpbi9yZW5kZXJzL3lvdS10b28tc21hbGwub2JqJnNsaW1Nb2RlbD1odHRwczovL2Nkbi5sdW5hcmVjbGlwc2Uuc3R1ZGlvL21vZGVsLm9iaiZjYW1lcmFQb3NpdGlvbj17IngiOiIwIiwieSI6Ii0xNS44IiwieiI6Ii0zNi40MiJ9JmNhbWVyYUZvY2FsUG9pbnQ9eyJ4IjoiMCIsInkiOiIxNi41NSIsInoiOiIwIn0=`,
    image: "custom/custom-8.png",
    name: "You are too small!",
    crops: [
      "full",
      "bust",
      "face"
    ]
  },
  "custom-9": {
    custom: true,
    url: `aHR0cHM6Ly9za2lucy5tY3N0YXRzLmNvbS9idXN0L3t1dWlkfT9zY2FsZT17c2l6ZX0=`,
    isStats: true,
    image: "custom/custom-9.png",
    name: "Bust 3D<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
    ]
  },
  "custom-10": {
    custom: true,
    url: `aHR0cHM6Ly9za2lucy5tY3N0YXRzLmNvbS9ib2R5L2Zyb250L3t1dWlkfT9zY2FsZT17c2l6ZX0=`,
    isStats: true,
    image: "custom/custom-10.png",
    name: "Front 3D<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ]
  },
  "custom-11": {
    custom: true,
    url: `aHR0cHM6Ly9za2lucy5tY3N0YXRzLmNvbS9ib2R5L2JhY2sve3V1aWR9P3NjYWxlPXtzaXplfQ==`,
    isStats: true,
    image: "custom/custom-11.png",
    name: "Back 3D<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ]
  },
  "custom-12": {
    custom: true,
    url: `aHR0cHM6Ly9za2lucy5tY3N0YXRzLmNvbS9ib2R5L3NpZGUve3V1aWR9P3NjYWxlPXtzaXplfQ==`,
    isStats: true,
    image: "custom/custom-12.png",
    name: "Isometric Side 3D<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ]
  },
  "custom-16": {
    custom: true,
    url: `aHR0cHM6Ly9hcGkubWluZWF0YXIuaW8vYm9keS9mcm9udC97dXVpZH0/c2NhbGU9e3NpemV9`,
    isAtar: true,
    image: "custom/custom-16.png",
    name: "Pixel (front)<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ]
  },
  "custom-13": {
    custom: true,
    url: `aHR0cHM6Ly9hcGkubWluZWF0YXIuaW8vYm9keS9iYWNrL3t1dWlkfT9zY2FsZT17c2l6ZX0=`,
    isAtar: true,
    image: "custom/custom-13.png",
    name: "Pixel (back)<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ]
  },
  "custom-14": {
    custom: true,
    url: `aHR0cHM6Ly9hcGkubWluZWF0YXIuaW8vYm9keS9sZWZ0L3t1dWlkfT9zY2FsZT17c2l6ZX0=`,
    isAtar: true,
    image: "custom/custom-14.png",
    name: "Pixel (left)<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available" 
    ]
  },
  "custom-15": {
    custom: true,
    url: `aHR0cHM6Ly9hcGkubWluZWF0YXIuaW8vYm9keS9yaWdodC97dXVpZH0/c2NhbGU9e3NpemV9`,
    isAtar: true,
    image: "custom/custom-15.png",
    name: "Pixel (right)<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ]
  },
  "custom-17": {
    custom: true,
    url: `YmFja2dyb3VuZHMvTWluZWNyYWZ0Q29wcGVyVXBkYXRlLmpwZw==`,
    isRen: true,
    category: "wallpaper||Wallpapers 🖼️",
    image: "custom/custom-17.png",
    name: "Copper Update 🤖<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ],
    composition: [
      {
        url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9jaGVlcmluZy9mdWxsP3NraW5Vcmw9e3NraW5Vcmx9JnJlbmRlclNjYWxlPTImZGlyTGlnaHRDb2xvcj1mYzBmNmE=`,
        x: 1626,
        y: 849,
        width: 726,
        height: 1086
      }
    ]
  },
  "custom-18": {
    custom: true,
    url: `YmFja2dyb3VuZHMvTWluZWNyYWZ0VHJpYWxzVXBkYXRlLmpwZw==`,
    isRen: true,
    category: "wallpaper",
    image: "custom/custom-18.png",
    name: "Trials Update 🗝️<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ],
    composition: [
      {
        url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9hcmNoZXIvZnVsbD9za2luVXJsPXtza2luVXJsfSZyZW5kZXJTY2FsZT0yJmNhbWVyYVBvc2l0aW9uPXslMjJ4JTIyOiUyMjIwLjA1JTIyLCUyMnklMjI6JTIyMTUuOTglMjIsJTIyeiUyMjolMjItMTQuNDclMjJ9JmRpckxpZ2h0Q29sb3I9Nzg1NjAw`,
        //url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9hcmNoZXIvZnVsbD9za2luVXJsPXtza2luVXJsfSZyZW5kZXJTY2FsZT0yJmNhbWVyYVBvc2l0aW9uPXsieCI6IjIwLjA1IiwieSI6IjE1Ljk4IiwieiI6Ii0xNC40NyJ9JmRpckxpZ2h0Q29sb3I9Nzg1NjAw`,
        x: 255,
        y: 634,
        width: 873,
        height: 1631
      }
    ]
  },
  "custom-21": {
    custom: true,
    url: `YmFja2dyb3VuZHMvTWluZWNyYWZ0SGFiYm8uanBn`,
    isRen: true,
    category: "wallpaper",
    image: "custom/custom-21.png",
    name: "Habbo Hotel 🏨<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ],
    composition: [
      {
        url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9pc29tZXRyaWMvZnVsbD9za2luVXJsPXtza2luVXJsfSZyZW5kZXJTY2FsZT0wLjI1`,
        x: 810,
        y: 252,
        width: 89,
        height: 199,
        border: "black 4 1"
      }
    ]
  },
  "custom-19": {
    custom: true,
    url: `YmFja2dyb3VuZHMvTWluZWNyYWZ0UG9ydHJhaXRTcGFjZS5qcGc=`,
    isRen: true,
    category: "wallpaper",
    image: "custom/custom-19.png",
    name: "Portrait Space 🚀<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ],
    composition: [
      {
        url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci91bHRpbWF0ZS9idXN0P3NraW5Vcmw9e3NraW5Vcmx9JnJlbmRlclNjYWxlPTImZGlyTGlnaHRDb2xvcj0wMzI0ZmM=`,
        x: 623,
        y: 478,
        width: 2593,
        height: 3175
      },
      {
        url: `bGF5ZXJzL01pbmVjcmFmdFBvcnRyYWl0U3BhY2VCb3R0b20ucG5n`,
        x: 1356,
        y: 3465,
        width: 1128,
        height: 376
      }
    ],
  },
  "custom-20": {
    custom: true,
    url: `YmFja2dyb3VuZHMvTWluZWNyYWZ0UG9ydHJhaXRNdWx0aXZlcnNlLmpwZw==`,
    isRen: true,
    category: "wallpaper",
    image: "custom/custom-20.png",
    name: "Portrait Multiverse 🌌<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ],
    composition: [
      {
        url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci91bHRpbWF0ZS9idXN0P3NraW5Vcmw9e3NraW5Vcmx9JnJlbmRlclNjYWxlPTImZGlyTGlnaHRDb2xvcj1lZDAwZTE=`,
        x: 623,
        y: 478,
        width: 2593,
        height: 3175
      },
      {
        url: `bGF5ZXJzL01pbmVjcmFmdFBvcnRyYWl0TXVsdGl2ZXJzZUJvdHRvbS5wbmc=`,
        x: 1356,
        y: 3465,
        width: 1128,
        height: 376
      }
    ]
  },
  "custom-23": {
    custom: true,
    url: `YmFja2dyb3VuZHMvTWluZWNyYWZ0UG9ydHJhaXRFYXJ0aC5qcGc=`,
    isRen: true,
    category: "wallpaper",
    image: "custom/custom-23.png",
    name: "Portrait Earth 🌍<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ],
    composition: [
      {
        url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci91bHRpbWF0ZS9idXN0P3NraW5Vcmw9e3NraW5Vcmx9JnJlbmRlclNjYWxlPTgmZGlyTGlnaHRDb2xvcj0wMGJmZmY=`,
        x: 623,
        y: 478,
        width: 2593,
        height: 3175
      },
      {
        url: `bGF5ZXJzL01pbmVjcmFmdFBvcnRyYWl0RWFydGhCb3R0b20ucG5n`,
        x: 1356,
        y: 3465,
        width: 1128,
        height: 376
      }
    ]
  },
  "custom-22": {
    custom: true,
    url: `YmFja2dyb3VuZHMvTWVycnlDaHJpc3RtYXNBbmRIYXBweU5ld1llYXIuanBn`,
    isRen: true,
    category: "wallpaper",
    image: "custom/custom-22.png",
    name: "Merry Christmas 🎄<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ],
    composition: [
      {
        url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9jcmlzc19jcm9zcy9mdWxsP3NraW5Vcmw9e3NraW5Vcmx9JnJlbmRlclNjYWxlPTEmZGlyTGlnaHRDb2xvcj0wNTM3ZmY=`,
        x: 646,
        y: 1141,
        width: 278,
        height: 512,
        colorize: "blue 0.2"
      }
    ]
  },
  "custom-34": {
    custom: true,
    url: `YmFja2dyb3VuZHMvTWluZWNyYWZ0TXV0YW50Wm9tYmllLmpwZw==`,
    isRen: true,
    category: "wallpaper",
    image: "custom/custom-34.png",
    name: "Mutant Zombie 🧟<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ],
    composition: [
      {
        url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci91bHRpbWF0ZS9mdWxsP3NraW5Vcmw9e3NraW5Vcmx9JnJlbmRlclNjYWxlPTImY2FtZXJhUG9zaXRpb249eyJ4IjoiMi4zMyIsInkiOiIyNi43OCIsInoiOiIzNy40NCJ9JmNhbWVyYUZvY2FsUG9pbnQ9eyJ4IjoiLTAuNjEiLCJ5IjoiMTkuMzYiLCJ6IjoiLTIuNjEifQ==`,
        x: 1143,
        y: 841,
        width: 530,
        height: 968,
        tonality: "#fdaa3d 0.2"
      }
    ]
  },
  "custom-24": {
    custom: true,
    url: `YmFja2dyb3VuZHMvTWluZWNyYWZ0V2hlYXRMYW5kc2NhcGUuanBn`,
    isRen: true,
    category: "wallpaper",
    image: "custom/custom-24.png",
    name: "Wheat Landscape 🌽<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ],
    composition: [
      {
        url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9jdXN0b20vZnVsbD9za2luVXJsPXtza2luVXJsfSZ3aWRlTW9kZWw9aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0Fsb25zb0FsaWFnYS9BbG9uc29BbGlhZ2FBUEkvcmVmcy9oZWFkcy9tYWluL3JlbmRlcnMvc2l0dGluZy5vYmomc2xpbU1vZGVsPWh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9BbG9uc29BbGlhZ2EvQWxvbnNvQWxpYWdhQVBJL3JlZnMvaGVhZHMvbWFpbi9yZW5kZXJzL3NpdHRpbmcub2JqJmNhbWVyYVBvc2l0aW9uPXsieCI6IjI3LjQ0IiwieSI6IjI5LjciLCJ6IjoiLTI3LjAxIn0mY2FtZXJhRm9jYWxQb2ludD17IngiOiItMS45OCIsInkiOiIxOC43MyIsInoiOiIwLjMzIn0mcmVuZGVyU2NhbGU9MiZkaXJMaWdodENvbG9yPWZmOTUwMA==`,
        x: 621,
        y: 378
      },
      {
        url: `bGF5ZXJzL01pbmVjcmFmdFdoZWF0Qm90dG9tLnBuZw==`,
        x: 734,
        y: 1219
      }
    ]
  },
  "custom-25": {
    custom: true,
    url: `YmFja2dyb3VuZHMvTWluZWNyYWZ0THVzaENhdmUuanBn`,
    isRen: true,
    category: "wallpaper",
    image: "custom/custom-25.png",
    name: "Lush Cave 🪻<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ],
    composition: [
      {
        url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9yZWxheGluZy9mdWxsP3NraW5Vcmw9aHR0cHM6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvODkxZDE1YzFiNzQxMDU5N2EzNDZjMWZmMjljMDk3NmY5OTZkMjRiMTJjOGI5Y2ZlZDFjYjBkMDVmNzMyMjk1OSZyZW5kZXJTY2FsZT0yJmRpckxpZ2h0Q29sb3I9ZWJkODM0JmNhbWVyYVBvc2l0aW9uPXsieCI6Ii00Ni43OCIsInkiOiIxMS42MCIsInoiOiItNDAuMzAifSZjYW1lcmFGb2NhbFBvaW50PXsieCI6IjEuNDYiLCJ5IjoiMTcuMjEiLCJ6IjoiMC4wNCJ9`,
        x: 1483,
        y: 685,
        width: 360,
        height: 334
      }
    ]
  },
  "custom-26": {
    custom: true,
    url: `YmFja2dyb3VuZHMvTWluZWNyYWZ0TXlzdGljUnVpbnMuanBn`,
    isRen: true,
    category: "wallpaper",
    image: "custom/custom-26.png",
    name: "Mystic Ruins 🌀<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ],
    composition: [
      {
        url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9kZWFkL2Z1bGw/c2tpblVybD17c2tpblVybH0mcmVuZGVyU2NhbGU9MSZkaXJMaWdodENvbG9yPWZmZjA2ZQ==`,
        x: 1103,
        y: 568,
        width: 573,
        height: 321,
        tonality: "#f7ffcf 0.2"
      }
    ]
  },
  "custom-27": {
    custom: true,
    url: `YmFja2dyb3VuZHMvTWluZWNyYWZ0QW1ldGh5c3RCYXNlLmpwZw==`,
    isRen: true,
    category: "wallpaper",
    image: "custom/custom-27.png",
    name: "Amethyst Base 🪻<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ],
    composition: [
      {
        url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9jcmlzc19jcm9zcy9mdWxsP3NraW5Vcmw9e3NraW5Vcmx9JnJlbmRlclNjYWxlPTEmZGlyTGlnaHRDb2xvcj1mZjI5OGQmY2FtZXJhUG9zaXRpb249eyJ4IjoiMjkuMDUiLCJ5IjoiMzAuNTEiLCJ6IjoiLTQ5LjEyIn0mY2FtZXJhRm9jYWxQb2ludD17IngiOiIwLjAwIiwieSI6IjEyLjAwIiwieiI6IjAuMDAifQ==`,
        x: 1324,
        y: 734
      }
    ]
  },
  "custom-29": {
    custom: true,
    url: `YmFja2dyb3VuZHMvTWluZWNyYWZ0QW5jaWVudENpdHkuanBn`,
    isRen: true,
    category: "wallpaper",
    image: "custom/custom-29.png",
    name: "Ancient City 🏛️<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ],
    composition: [
      {
        url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci91bHRpbWF0ZS9mdWxsP3NraW5Vcmw9e3NraW5Vcmx9JnJlbmRlclNjYWxlPTImY2FtZXJhUG9zaXRpb249eyJ4IjoiMi4zMyIsInkiOiIyNi43OCIsInoiOiIzNy40NCJ9JmNhbWVyYUZvY2FsUG9pbnQ9eyJ4IjoiLTAuNjEiLCJ5IjoiMTkuMzYiLCJ6IjoiLTIuNjEifQ==`,
        x: 1143,
        y: 781,
        width: 530,
        height: 968,
        tonality: "#0eb591 0.2"
      }
    ]
  },
  "custom-28": {
    custom: true,
    url: `YmFja2dyb3VuZHMvTWluZWNyYWZ0SnVuZ2xlQnJpZGdlLmpwZw==`,
    isRen: true,
    category: "wallpaper",
    image: "custom/custom-28.png",
    name: "Jungle Bridge 🦜<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ],
    composition: [
      {
        url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9wb2ludGluZy9mdWxsP3NraW5Vcmw9e3NraW5Vcmx9JnJlbmRlclNjYWxlPTMmZGlyTGlnaHRDb2xvcj1mZjI5OGQmY2FtZXJhUG9zaXRpb249eyJ4IjoiLTIuNjciLCJ5IjoiNjguODAiLCJ6IjoiMS44MyJ9JmNhbWVyYUZvY2FsUG9pbnQ9eyJ4IjoiLTIuMTYiLCJ5IjoiMTMuMjkiLCJ6IjoiLTkuMzUifQ==`,
        x: 1048,
        y: 1032,
        width: 1450,
        height: 1636
      }
    ]
  },
  "custom-33": {
    custom: true,
    url: `YmFja2dyb3VuZHMvTWluZWNyYWZ0SHlkcmEuanBn`,
    isRen: true,
    category: "wallpaper",
    image: "custom/custom-33.png",
    name: "Hydra Room 🐲<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ],
    composition: [
      {
        url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci91bHRpbWF0ZS9mdWxsP3NraW5Vcmw9e3NraW5Vcmx9JnJlbmRlclNjYWxlPTImY2FtZXJhUG9zaXRpb249eyJ4IjoiMi4zMyIsInkiOiIyNi43OCIsInoiOiIzNy40NCJ9JmNhbWVyYUZvY2FsUG9pbnQ9eyJ4IjoiLTAuNjEiLCJ5IjoiMTkuMzYiLCJ6IjoiLTIuNjEifQ==`,
        x: 1143,
        y: 781,
        width: 530,
        height: 968,
        tonality: "#00a884 0.2"
      }
    ]
  },
  "custom-30": {
    custom: true,
    url: `YmFja2dyb3VuZHMvTWluZWNyYWZ0R3JlZW5ob3VzZS5qcGc=`,
    isRen: true,
    category: "wallpaper",
    image: "custom/custom-30.png",
    name: "Greenhouse 🌸<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ],
    composition: [
      {
        url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9zbGVlcGluZy9mdWxsP3NraW5Vcmw9e3NraW5Vcmx9JnJlbmRlclNjYWxlPTE=`,
        x: 659,
        y: 907,
        width: 499,
        height: 667,
        tonality: "#ffaf38 0.2"
      }
    ]
  },
  "custom-31": {
    custom: true,
    url: `YmFja2dyb3VuZHMvTWluZWNyYWZ0Q2FzdGxlLmpwZw==`,
    isRen: true,
    category: "wallpaper",
    image: "custom/custom-31.png",
    name: "Castle Selfie 🏰<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ],
    composition: [
      {
        url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9oaWdoX2dyb3VuZC9mdWxsP3NraW5Vcmw9e3NraW5Vcmx9JnJlbmRlclNjYWxlPTMuMyZkaXJMaWdodENvbG9yPWEzY2NmZg==`,
        x: -119,
        y: 156,
        width: 3024,
        height: 2075
      }
    ]
  },
  "custom-32": {
    custom: true,
    url: `YmFja2dyb3VuZHMvTWluZWNyYWZ0QWxjaGVtaXN0LmpwZw==`,
    isRen: true,
    category: "wallpaper",
    image: "custom/custom-32.png",
    name: "Alchemist 🧪<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ],
    composition: [
      {
        url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9jaGVlcmluZy9mdWxsP3NraW5Vcmw9e3NraW5Vcmx9JnJlbmRlclNjYWxlPTImZGlyTGlnaHRDb2xvcj1mZmYwMjQ=`,
        x: 758,
        y: 419,
        width: 580,
        height: 868
      },
      {
        url: `bGF5ZXJzL01pbmVjcmFmdEFsY2hlbWlzdExheWVyLnBuZw==`,
        x: 0,
        y: 0
      }
    ]
  },
  "custom-35": {
    custom: true,
    url: `YmFja2dyb3VuZHMvTWluZWNyYWZ0T2JzaWRpYW5NYWdlLmpwZw==`,
    isRen: true,
    category: "wallpaper",
    image: "custom/custom-35.png",
    name: "Obsidian Mage 🧙<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ],
    composition: [
      {
        url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci91bHRpbWF0ZS9mdWxsP3NraW5Vcmw9e3NraW5Vcmx9JnJlbmRlclNjYWxlPTImY2FtZXJhUG9zaXRpb249eyJ4IjoiMi4zMyIsInkiOiIyNi43OCIsInoiOiIzNy40NCJ9JmNhbWVyYUZvY2FsUG9pbnQ9eyJ4IjoiLTAuNjEiLCJ5IjoiMTkuMzYiLCJ6IjoiLTIuNjEifQ==`,
        x: 1143,
        y: 841,
        width: 530,
        height: 968,
        tonality: "#9200cc 0.2"
      }
    ]
  },
  "custom-36": {
    custom: true,
    url: `YmFja2dyb3VuZHMvTWluZWNyYWZ0UmVkc3RvbmVMYWJvcmF0b3J5LmpwZw==`,
    isRen: true,
    category: "wallpaper",
    image: "custom/custom-36.png",
    name: "Redstone Laboratory 🧪<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ],
    composition: [
      {
        url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9jcm91Y2hpbmcvZnVsbD9za2luVXJsPXtza2luVXJsfSZyZW5kZXJTY2FsZT0xJmRpckxpZ2h0Q29sb3I9MzQ0Y2ViJmNhbWVyYVBvc2l0aW9uPXsieCI6Ii0zNi41MCIsInkiOiIyOC43MSIsInoiOiI0NC41OSJ9JmNhbWVyYUZvY2FsUG9pbnQ9eyJ4IjoiMC4wMCIsInkiOiIxMi4wMCIsInoiOiIwLjAwIn0=`,
        x: 1509,
        y: 642,
        width: 140,
        height: 222,
        tonality: "#00e1ff 0.2"
      }
    ]
  },
  "custom-37": {
    custom: true,
    url: `YmFja2dyb3VuZHMvTWluZWNyYWZ0VGhlUHVycGxlUGFsYWRpbi5qcGc=`,
    isRen: true,
    category: "wallpaper",
    image: "custom/custom-37.png",
    name: "The Purple Paladin 🛡️<br><small><small>❌ Not supported with custom skin</small></small><br><small><small><small>❌ Not supported with image quality</small></small></small>",
    uuid: true,
    crops: [
      "Not available"
    ],
    composition: [
      {
        url: `aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci93YWxraW5nL2Z1bGw/c2tpblVybD17c2tpblVybH0mcmVuZGVyU2NhbGU9MSZkaXJMaWdodENvbG9yPWZmZjAyNA==`,
        x: 1443,
        y: 516,
        width: 460,
        height: 738,
        tonality: "#be6f26 0.15"
      },
      {
        url: `bGF5ZXJzL01pbmVjcmFmdFRoZVB1cnBsZVBhbGFkaW5CbG9jay5wbmc=`,
        x: 0,
        y: 0
      }
    ]
  },
}
var geom = {};
(function(){
    geom.contour = function(grid, start){
        var s = start || d3_geom_contourStart(grid), c = [], x = s[0], y = s[1], dx = 0, dy = 0, pdx = NaN, pdy = NaN, i = 0;
        do {
            i = 0;
            if(grid(x-1, y-1)) i += 1;
            if(grid(x, y-1)) i += 2;
            if(grid(x-1, y)) i += 4;
            if(grid(x, y)) i += 8;
            if(i === 6){ dx = pdy === -1 ? -1 : 1; dy = 0; }
            else if(i === 9){ dx = 0; dy = pdx === 1 ? -1 : 1; }
            else { dx = d3_geom_contourDx[i]; dy = d3_geom_contourDy[i]; }
            if(dx != pdx && dy != pdy){ c.push([x, y]); pdx = dx; pdy = dy; }
            x += dx; y += dy;
        } while(s[0] != x || s[1] != y);
        return c;
    };
    var d3_geom_contourDx = [1, 0, 1, 1, -1, 0, -1, 1, 0, 0, 0, 0, -1, 0, -1, NaN];
    var d3_geom_contourDy = [0, -1, 0, 0, 0, -1, 0, 0, 1, -1, 1, 1, 0, -1, 0, NaN];
    function d3_geom_contourStart(grid){
        var x = 0, y = 0;
        while(true){
            if(grid(x, y)) return [x, y];
            if(x === 0){ x = y + 1; y = 0; }
            else { x = x - 1; y = y + 1; }
        }
    }
})();
function generateSolidOverlay(imageBuffer, colorOptions) {
  var params = colorOptions.split(" ");
  var color = params[0] || "white";
  var opacity = isNaN(params[1]) ? 0.5 : parseFloat(params[1]);

  const canvas = document.createElement('canvas');
  canvas.width = imageBuffer.width;
  canvas.height = imageBuffer.height;
  const ctx = canvas.getContext('2d');

  ctx.drawImage(imageBuffer, 0, 0);

  ctx.globalCompositeOperation = 'source-in';

  ctx.globalAlpha = opacity;
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.globalCompositeOperation = 'source-over';
  ctx.globalAlpha = 1.0;
  return canvas;
}
function applyTonality(imageBuffer, colorOptions) {
  var params = colorOptions.split(" ");
  var color = params[0] || "white";
  var opacity = isNaN(params[1]) ? 1.0 : parseFloat(params[1]);

  const canvas = document.createElement('canvas');
  canvas.width = imageBuffer.width;
  canvas.height = imageBuffer.height;
  const ctx = canvas.getContext('2d');

  ctx.drawImage(imageBuffer, 0, 0);

  ctx.globalCompositeOperation = 'color';
  ctx.globalAlpha = opacity;
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.globalCompositeOperation = 'destination-in';
  ctx.globalAlpha = 1.0;
  ctx.drawImage(imageBuffer, 0, 0);

  // 4. Restaurar el contexto por seguridad
  ctx.globalCompositeOperation = 'source-over';

  return canvas;
}
function colorizeImage(imageBuffer, colorOptions) {
  var params = colorOptions.split(" ");
  var color = params[0] || "white";
  var opacity = isNaN(params[1]) ? 0.5 : parseFloat(params[1]);

  const canvas = document.createElement('canvas');
  canvas.width = imageBuffer.width;
  canvas.height = imageBuffer.height;
  const ctx = canvas.getContext('2d');

  ctx.drawImage(imageBuffer, 0, 0);

  ctx.globalCompositeOperation = 'source-atop';
  ctx.globalAlpha = opacity;
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.globalCompositeOperation = 'destination-in';
  ctx.globalAlpha = 1.0;
  ctx.drawImage(imageBuffer, 0, 0);

  ctx.globalCompositeOperation = 'source-over';
  
  return canvas;
}
function addBorder(imageBuffer, borderOptions) {
    var params = borderOptions.split(" ");
    var strokeColor = params[0] || "white";
    var strokeWeight = parseInt(params[1]) || 8;
    var strokeOpacity = parseFloat(params[2]) || 1;

    var cw = imageBuffer.width || imageBuffer.naturalWidth;
    var ch = imageBuffer.height || imageBuffer.naturalHeight;
    
    var padding = strokeWeight;
    var newWidth = cw + padding * 2;
    var newHeight = ch + padding * 2;
    
    var workCanvas = document.createElement("canvas");
    workCanvas.width = newWidth;
    workCanvas.height = newHeight;
    var ctx = workCanvas.getContext("2d");

    ctx.drawImage(imageBuffer, padding, padding);

    var canvases = [], imageData, data1;

    var defineNonTransparent = function(x, y){ 
        if(x < 0 || y < 0 || x >= newWidth || y >= newHeight) return false;
        return (data1[(y * newWidth + x) * 4 + 3] > 0); 
    };

    while(moveDiscreteElementToNewCanvas()){}

    var finalCanvas = document.createElement("canvas");
    finalCanvas.width = newWidth;
    finalCanvas.height = newHeight;
    var finalCtx = finalCanvas.getContext("2d");

    for(var i = 0; i < canvases.length; i++){
        var pts = canvases[i].outlinePoints;
        var ctx1 = canvases[i].getContext("2d");
        
        defineGeomPath(ctx1, pts);
        ctx1.lineJoin = "round";
        ctx1.lineCap = "round";
        ctx1.strokeStyle = strokeColor;
        ctx1.globalAlpha = strokeOpacity;
        ctx1.lineWidth = strokeWeight;
        ctx1.stroke();
        ctx1.globalAlpha = 1;

        finalCtx.drawImage(canvases[i], 0, 0);
    }

    finalCtx.drawImage(imageBuffer, padding, padding);

    return finalCanvas;

    function moveDiscreteElementToNewCanvas(){
        imageData = ctx.getImageData(0, 0, newWidth, newHeight);
        data1 = imageData.data;
        var hit = false;
        for(var i = 0; i < data1.length; i += 4){
            if(data1[i + 3] > 0){ hit = true; break; }
        }
        if(!hit) return false;

        var points = geom.contour(defineNonTransparent);
        var newCanvas = document.createElement('canvas');
        newCanvas.width = newWidth;
        newCanvas.height = newHeight;
        var newCtx = newCanvas.getContext('2d');
        newCanvas.outlinePoints = points;

        defineGeomPath(newCtx, points);
        newCtx.save();
        newCtx.clip();
        newCtx.drawImage(workCanvas, 0, 0);
        newCtx.restore();

        defineGeomPath(ctx, points);
        ctx.save();
        ctx.clip();
        ctx.globalCompositeOperation = "destination-out";
        ctx.clearRect(0, 0, newWidth, newHeight);
        ctx.restore();

        canvases.push(newCanvas);
        return true;
    }

    function defineGeomPath(context, points){
        context.beginPath();
        context.moveTo(points[0][0], points[0][1]);
        for(var i = 1; i < points.length; i++){ context.lineTo(points[i][0], points[i][1]); }
        context.lineTo(points[0][0], points[0][1]);
        context.closePath();
    }
}
const modelsCache = new Map();
const defaultCooldown = 10;
let currentRenderType = "default";
let currentCrop = "full";
let copiedTimeout;
function copyTextToClipboard(text) {
  let textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.bottom= 0;
  textArea.style.left= 0;

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  document.execCommand('copy');
  /*
  let copiedElement = document.createElement('copied-element');
  copiedElement.style.display = "inline-block"
  if(copiedTimeout) {
    clearTimeout(copiedTimeout);
  }

  copiedTimeout = setTimeout(()=>{

    copiedTimeout = undefined;
  },500);
  alert('You text was copied! Ready to paste!\n\nThanks for using our tool!\n- AlonsoAliaga');
  */
  alertCopied();
  document.body.removeChild(textArea);
}
function alertCopied() {
  if(copiedTimeout) {
    clearTimeout(copiedTimeout);
    var sb = document.getElementById("snackbar");
    sb.className = sb.className.replace("show", "");
  }
  var sb = document.getElementById("snackbar");

  //this is where the class name will be added & removed to activate the css
  sb.className = "show";

  copiedTimeout = setTimeout(()=>{ sb.className = sb.className.replace("show", ""); }, 3000);
}
function markAll() {
  for(let errorType of Object.keys(errorsFormat)) {
    let errorTypeOption = document.getElementById(`${errorType}-option`);
    if(errorTypeOption) {
      errorTypeOption.checked = true;
    }
  }
}
function unmarkAll() {
  for(let errorType of Object.keys(errorsFormat)) {
    let errorTypeOption = document.getElementById(`${errorType}-option`);
    if(errorTypeOption) {
      errorTypeOption.checked = false;
    }
  }
}
function test() {
  console.log("TESTING WORKS!")
}
let  buttonsToToggleDarkMode = ["appearance","inputText","download-all","colors-amount","button-toggle-custom-gradient-div","button-quality",
"button-remove-watermark-download-div","button-custom-background-div","button-revert-skin-div","button-shadow-div","button-no-background-div",
"customskindiv","button-pixelate-background-div"];
function toggleDarkmode() {
  if (document.getElementById('darkmode').checked == true) {
    document.body.classList.add('dark');
    for(let o of document.querySelectorAll('.lightbuttonboxes')) {
      o.classList.remove("lightbuttonboxes");
      o.classList.add("darkbuttonboxes");
      //console.log(`Darking: ${o.id}`)
    }
  }else{
    document.body.classList.remove('dark');
    for(let o of document.querySelectorAll('.darkbuttonboxes')) {
      o.classList.remove("darkbuttonboxes");
      o.classList.add("lightbuttonboxes");
      //console.log(`Lighting: ${o.id}`)
    }
  }
  return;
    if (document.getElementById('darkmode').checked == true) {
      document.body.classList.add('dark');
      //document.getElementById('result').classList.add("darktextboxes");
      for(let n of   buttonsToToggleDarkMode) {
        let d = document.getElementById(n);
        if(d) {
          d.classList.remove("lightbuttonboxes");
          d.classList.add("darkbuttonboxes");
        }
      }
      let success = document.getElementById('success_message');
      if(success) {
        success.classList.remove("successlight");
        success.classList.add("successdark");
      }
    } else {
      document.body.classList.remove('dark');
      //document.getElementById('result').classList.remove("darktextboxes");
      //Buttons
      for(let n of   buttonsToToggleDarkMode) {
        let d = document.getElementById(n);
        if(d) {
          d.classList.remove("darkbuttonboxes");
          d.classList.add("lightbuttonboxes");
        }
      }
      let success = document.getElementById('success_message');
      if(success) {
        success.classList.remove("successdark");
        success.classList.add("successlight");
      }
    }
    //console.log("Dark mode is now: "+(document.getElementById('darkmode').checked))
}
function loadKey(window) {
  let search = window.location.search;
  if(typeof search !== "undefined" && search.length > 0) {
    try{
      let parts = atob(search.slice(1)).split("&");
      for(let part of parts) {
        let [k,v] = part.split("=");
        //console.log(k,v)
        try{
          k = btoa(k);
          if(k == "bW9kZQ==") {
            v = btoa(v);
            if(v == "ZGV2ZWxvcG1lbnQ=") {
              //console.log(`Allowed params..`)
              unblock();
              return;
            }
          }
        }catch(e){}
      }
    }catch(e){}
  }
  //console.log(`Blocking..`)
  block();
}
function block() {
  document.getElementById("maintenance-overlay").style.display = "none";
  //document.body.style.overflow = "hidden";
}
function unblock() {
  document.getElementById("maintenance-overlay").style.display = "none";
  //document.body.style.overflow = "";
}
function checkSite(window) {
  let search = window.location.search;
  if(typeof search !== "undefined" && search.length > 0) {
    try{
      let parts = atob(search.slice(1)).split("&");
      for(let part of parts) {
        let [k,v] = part.split("=");
        //console.log(k,v)
        try{
          k = btoa(k);
          if(k == "dXNlcm5hbWU=") {
            if(v.match(/[a-z0-9_]/gi)) {
              setTimeout(()=>{
                usernameInput.value = v;
                processUsername();
              },500);
            }
          }
        }catch(e){}
      }
    }catch(e){}
  }
  setTimeout(()=>{
    let href = window.location.href;
    if(!href.includes(atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw=="))) {
      try{document.title = `Page stolen from https://${atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw==")}`;}catch(e){}
      window.location = `https://${atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw==")}/mc-renders/`}
  });
  fetch('https://raw.githubusercontent.com/AlonsoAliaga/AlonsoAliagaAPI/refs/heads/main/api/tools/tools-list.json')
    .then(res => res.json())
    .then(content => {
      let toolsData = content;
      let toolsArray = []
      for(let toolData of toolsData) {
        let clazz = typeof toolData.clazz == "undefined" ? "" : ` class="${toolData.clazz}"`;
        let style = typeof toolData.style == "undefined" ? "" : ` style="${toolData.style}"`;
        toolsArray.push(`<span>💠</span> <span${clazz}${style}><a title="${toolData.description}" id="tool-priority-${toolData.priority}" href="${toolData.link}">${toolData.name}</a></span>`);
      }
      document.getElementById("tools-for-you").innerHTML = toolsArray.join(`<br>`);
    });
}
function showCredits() {
  let credits = document.getElementById("credits-overlay");
  if(credits.style.display == "block") {
    credits.style.display = "none";
  } else {
    credits.style.display = "block";
  }
}
function selectTab(evt, tabName, buttonName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  if(evt) {
    evt.currentTarget.className += " active";
  }else if(buttonName) {
    let b = document.getElementById(buttonName);
    if(b) b.className += " active";
  }
}
//const jsyaml = require("js-yaml");
function compareFiles() {
  clearResults();
  processed1 = undefined;
  processed2 = undefined;
  outputExtension = ".yml";
  let input1 = document.getElementById("current-config");
  let input2 = document.getElementById("new-config");
  let currentFile = input1.files[0];
  let newFile = input2.files[0];
  if(typeof currentFile == "undefined") {
    alert('Current configuration cannot be empty!');
    return;
  }
  let matchExtension = allowedExtensions.find(r=> currentFile.name.endsWith(r));
  if(!matchExtension) {
    alert(`Current configuration must be a valid yaml file!\nAllowed types: ${allowedExtensions.join(" ")}`);
    return;
  }
  if(typeof newFile == "undefined") {
    alert('New configuration cannot be empty!');
    return;
  }
  if(!allowedExtensions.find(r=> newFile.name.endsWith(r))) {
    alert(`New configuration must be a valid yaml file!\nAllowed types: ${allowedExtensions.join(" ")}`);
    return;
  }
  outputExtension = matchExtension;
  // console.log(`Attempting to compare '${currentFile.name}' & '${newFile.name}'`);
  input1.value = "";
  input2.value = "";
  var reader1 = new FileReader();
  //let schem1 = jsyaml.DEFAULT_SCHEMA;
  reader1.onloadend = function(event) {
    // console.log(`Starting load of ${currentFile.name}`)
    let result = event.target.result;
    // console.log(`Successfully result ${currentFile.name}`)
    //processed1 = result;
    //console.log(result);
    /*
    processed1 = jsyaml.load(result, { schem1 });
    console.log(`Successfully loaded ${currentFile.name}`)
    console.log(processed1)
    */
    //if(processed2) processComparator();

    //var reader2 = new FileReader();
    //let schem2 = jsyaml.DEFAULT_SCHEMA;
    reader1.onloadend = function(event2) {
      // console.log(`Starting load of ${newFile.name}`)
      let result2 = event2.target.result;
      // console.log(`Successfully result ${newFile.name}`)
      //processed2 = result2;
      //console.log(result2);
      //processed2 = jsyaml.load(result2, { schem2 });
      //console.log(`Successfully loaded ${newFile.name}`)
      //console.log(processed2)
      if(result) processComparator(result,result2);
    }

    reader1.readAsText(newFile)
  }
  reader1.readAsText(currentFile)
}
function mergeObjects(obj1, obj2) {
  const diff = {};
  for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (
        typeof obj2[key] === "object" &&
        obj2[key] !== null &&
        typeof obj1[key] === "object" &&
        obj1[key] !== null && !Array.isArray(obj2[key])
      ) {
        const nestedDiff = mergeObjects(obj1[key], obj2[key]);
        if (Object.keys(nestedDiff).length > 0) {
          diff[key] = nestedDiff;
        }
      } else if (!obj1.hasOwnProperty(key)/* || obj1[key] !== obj2[key]*/) {
        diff[key] = obj2[key];
        obj1[key] = obj2[key];
      }
    }
  }
  return diff;
}
let processed1;
let processed2;
let outputExtension;
let allowedExtensions = [".yaml",".yml",".txt"]
function processComparator(processedCurrent,processedNew) {
  let schem = jsyaml.DEFAULT_SCHEMA;
  let first = jsyaml.load(processedCurrent,schem)
  let second = jsyaml.load(processedNew,schem)
  let firstToModify = jsyaml.load(processedCurrent,schem)
  // console.log(first)
  // console.log(second)
  // setTimeout(() => {
  //   first["love"] = "HOLAAAAAAAAAAAAAAAAA";
  //   second["love"] = "HOLAAAAAAAAAAAAAAAAA 2222222222222222222";
  // }, 5000);
  // console.log(`Both files were proccessed!`);
  // //console.log(jsyaml)
  // console.log(`This is processed #1:`)
  // console.log(processed1)
  // console.log(`Successfully loaded #1`)
  // //processed1 = jsyaml.load(processedCurrent,schem);
  // console.log(processed1)
  // console.log(`This is processed #2:`)
  // console.log(processed2)
  // console.log(`Successfully loaded #2`)
  // //processed2 = jsyaml.load("Hello: 10",schem);
  // console.log(processed2)
  let resultsFull = document.getElementById("results");
  if(resultsFull) {
    resultsFull.style.display = "block";
  }
  selectTab(null, 'fixed-config',"f-c-b");
  let difference = mergeObjects(firstToModify,second);
  // console.log(`This is the new yaml #1:`)
  // console.log(firstToModify);
  // console.log(`This is difference:`)
  // console.log(difference);
  let fixedYAML = jsyaml.dump(firstToModify,{skipInvalid:true,lineWidth:-1,noCompatMode:true})
  let differenceYAML;
  if(Object.keys(difference).length === 0) {
    differenceYAML = "#We couldn't find any missing option. Your config is up-to-date!";
  }else{
    differenceYAML = jsyaml.dump(difference,{skipInvalid:true,lineWidth:-1,noCompatMode:true})
  }
  processed1 = fixedYAML;
  processed2 = differenceYAML;
  document.getElementById("output-fixed").innerText = fixedYAML;
  document.getElementById("output-differences").innerText = differenceYAML;
  // console.log(fixedYAML);
  // console.log(differenceYAML);
  //console.log(YAML)
}
function downloadProfile() {
  let removeWatermark = document.getElementById("button-remove-watermark-download")
  if(removeWatermark && !removeWatermark.checked) {
    console.log(`Downloading with watermark..`)
    let additionalHeight = Math.round(siteCanvas.height / 16);
    let additonalBoderBottom = Math.round(siteCanvas.height / 75);
    markedCanvas.width = siteCanvas.width;
    markedCanvas.height = siteCanvas.height + additonalBoderBottom + additionalHeight;
    let markedCtx = markedCanvas.getContext("2d");
    const text = "Generated on https://alonsoaliaga.com/mc-renders";
    markedCtx.fillStyle = "#302a3b"; // Set the fill color to white
    markedCtx.fillRect(0, siteCanvas.height + additonalBoderBottom, siteCanvas.width, additionalHeight);
    let fontSize = 50; // Initial font size
    let textWidth = 0;
    do {
      fontSize--; // Decrease the font size
      markedCtx.font = `${fontSize}px MinecraftBold`; // Set the new font size
      textWidth = markedCtx.measureText(text).width;
    } while (textWidth > (markedCanvas.width - 50));
    markedCtx.fillStyle = "#ffffff"; // Set the fill color to gray
    markedCtx.font = `${fontSize}px MinecraftBold`; // Set the font style
    markedCtx.textAlign = "center"; // Set the text alignment to center
    markedCtx.textBaseline = "middle"; // Set the text baseline to middle
    markedCtx.fillText(text, markedCanvas.width / 2, siteCanvas.height + additonalBoderBottom + Math.round(additionalHeight / 2)); // Write the text at the center of the rectangle

    //markedCtx.clearRect(0, 0, markedCanvas.width, markedCanvas.height);
    markedCtx.drawImage(siteCanvas,0,0);
    var anchor = document.createElement("a");
    anchor.href = markedCanvas.toDataURL("image/png");
    let username = usernameInput?.value || "AlonsoAliaga";
    anchor.download = `MinecraftPFP-${username}.png`;
    anchor.click();
  }else{
    console.log(`Downloading without watermark..`)
    var anchor = document.createElement("a");
    anchor.href = siteCanvas.toDataURL("image/png");
    let username = usernameInput?.value || "AlonsoAliaga";
    anchor.download = `MinecraftPFP-${username}.png`;
    anchor.click();
  }
}
function toggleCustomGradientBox(event) {
  let customGradientBox = document.getElementById("custom-gradient-box");
  let customGradientsOpened = document.getElementById("button-toggle-custom-gradient").checked;
  if(customGradientsOpened) {
    if(event) backgroundType = 2;
    customGradientBox.classList.add("expanded");
    updateSkin(true);
  }else{
    backgroundType = 0;
    customGradientBox.classList.remove("expanded");
    updateSkin(true);
  }
}
function toggleWatermark(event) {
  let removeWatermark = document.getElementById("button-remove-watermark-download").checked;
  let downloadButton = document.getElementById("download-all-label");
  if(removeWatermark) {
    downloadButton.innerText = "Download your Minecraft Render without watermark📥"
  }else{
    downloadButton.innerText = "Download your Minecraft Render with watermark 📥"
  }
}
let colorsButton = document.getElementById("colors-amount");
const maxColorsAmount = 15;
function removeColor(event) {
  if(event) backgroundType = 2;
  let currentAmount = colorsButton.innerText;
  if(isNaN(currentAmount)) {
    currentAmount = 2;
    colorsButton.innerText = currentAmount;
  }else{
    currentAmount--;
    if(currentAmount < 2) {
      currentAmount = 2;
    }
    colorsButton.innerText = currentAmount;
  }
  //console.log(`Current amount: ${currentAmount}`);
  for(let i = maxColorsAmount; i >= currentAmount;i--) {
    let pickerToHide = document.getElementById(`color-picker-${i}`);
    //console.log(`Hiding color #${i}`);
    if(pickerToHide) {
      pickerToHide.style.display = "none";
    }
  }
  if(event) updateSkin(true);
}
function addColor(event) {
  backgroundType = 2;
  let currentAmount = colorsButton.innerText;
  if(isNaN(currentAmount)) {
    currentAmount = 2;
    colorsButton.innerText = currentAmount;
  }else{
    currentAmount++;
    if(currentAmount > maxColorsAmount) {
      currentAmount = maxColorsAmount;
    }
    colorsButton.innerText = currentAmount;
  }
  //console.log(`Current amount: ${currentAmount}`);
  for(let i = 0; i < currentAmount;i++) {
    let pickerToShow = document.getElementById(`color-picker-${i}`);
    //console.log(`Showing color #${i}`);
    if(pickerToShow) {
      pickerToShow.style.display = "";
    }
  }
  updateSkin(true);
}
function downloadProfile2() {
  let inputBox = document.getElementById(`inputText`);
  let content = `Original:\nUnknown input`;
  if(inputBox) content = `Original:\n${inputBox.value}\n\n`;
  let i = 1;
  for(let fontType of Object.keys(fonts)) {
    let data = fonts[fontType];
    let b = document.getElementById(`${fontType}-box`);
    if(b) {
      content+= `${i}. ${data.name}:\n${b.value}\n\n`;
    }
    i++;
  }
  content += `\n💎 Thanks for using our font generator tool! 👁‍🗨\n📩 File generated using https://alonsoaliaga.com/font-generator`
  const blob = new Blob([content], { type: 'text/text' });

  // Create a URL object with the Blob data
  const url = window.URL.createObjectURL(blob);
  
  // Create a link element with download attribute pointing to the URL object
  const link = document.createElement('a');
  link.download = `fonts-${Date.now().toString()}.txt`; // Set the download file name
  link.href = url; // Set the link href to the URL object
  
  // Append the link element to the document body
  document.body.appendChild(link);
  
  // Programmatically click the link to initiate the download of the YAML file
  link.click();

  // Remove the link element from the document body
  document.body.removeChild(link);

  // Revoke the URL object to free up system resources
  window.URL.revokeObjectURL(url);
}
function readFile(evt) {
  clearIssues();
  var files = evt.target.files;
  var file = files[0];    
  // console.log(`Attempting to read ${file}`);
  document.getElementById("log-file").value = "";
  var reader = new FileReader();
  reader.onload = function(event) {
    let result = event.target.result;
    processData(result);
  }
  reader.readAsText(file)
}
function checkYamlFile(evt) {
  var files = evt.target.files;
  var file = files[0];
  clearResults();
  processed1 = undefined;
  processed2 = undefined;
  document.getElementById("output-fixed").innerText = "Loading..";
  document.getElementById("output-differences").innerText = "Loading..";
  if(typeof file == "undefined") {
    let f = document.getElementById(evt.target.id);
    if(f) f.value = "";
    console.log(`Wrong! File is null: '${file.name}'`);
    alert('Configuration cannot be empty!');
    return;
  }
  let matchExtension = allowedExtensions.find(r=> file.name.endsWith(r));
  if(!matchExtension) {
    let f = document.getElementById(evt.target.id);
    if(f) f.value = "";
    console.log(`Wrong! File type not allowed: '${file.name}'`);
    alert(`Configuration must be a valid yaml file!\nAllowed types: ${allowedExtensions.join(" ")}`);
    return;
  }
  console.log(`Detected '${evt.target.id}' file!`);
}
window.onclick = function(event) {
  if (event.target == document.getElementById("error-full")) {
    clearIssues();
  }
}
let loadedMainSkinBuffer = undefined;
const usernameInput = document.getElementById('inputText');
const usernameInputDiv = document.getElementById('inputTextDiv');
const cacheSkins = new Map();
let lastFailed = false;
let lastSuccessUsername = "AlonsoAliaga";
let lastUsernameToUUID = undefined;
let lastObtainedUUID = undefined;
let globalModelsLock = false;
let globalCropsLock = false;
let cacheUserUUID = new Map();
let cacheUserData = new Map();
//[PlayerName,UUID,SkinTextureUrl]
async function alertUnexpectedError(message) {
  alertError("❌⠀⠀⠀⠀⠀⠀⠀Unexpected error!⠀⠀⠀⠀⠀⠀⠀❌<br>Please try again later or contact the developer.<br><small><small>Error: "+message+"</small></small>");
  //alert(`An unexpected error occurred!\n\nError: ${message}\n\nPlease try again later or contact the developer.`);
}
async function alertInvalidUsername() {
  alertError("❌⠀⠀⠀⠀⠀⠀⠀Invalid username!⠀⠀⠀⠀⠀⠀⠀❌<br>Please check the spelling and try again.");
  //alert(`Invalid username! Please check the spelling and try again.\n\nIf you think this is a mistake, please contact the developer.`);
}
async function processUsername(order) {
  skinType = 0;
  if(order != "no-cooldown") blockUsername(defaultCooldown);
  let username = usernameInput?.value || "AlonsoAliaga";
  //let playerData;
  let inCache = cacheUserData.has(username.toLowerCase());
  console.log(`Processing username: ${username} (in cache: ${inCache})`);
  if(inCache) {
    //playerData = cacheUserData.get(username.toLowerCase());
    lastSuccessUsername = cacheUserData.get(username.toLowerCase())[0];
  }else{
    let pbUrl = `https://playerdb.co/api/player/minecraft/${username}`;
    let fetchedData = undefined;
    try{
      let response = await fetch(pbUrl);
      if(response.ok) {
        let data = await response.json();
        if(data && data.success) {
          console.log(`Username ${username} is valid!`)
          console.log(data);
          console.log(data.data.player);
          if(username != data.data.player.username) {
            console.log(`Username case mismatch: ${username} -> ${data.data.player.username}`);
            username = data.data.player.username;
          }
          lastSuccessUsername = username;
          cacheUserData.set(username.toLowerCase(),[data.data.player.username,data.data.player.id,data.data.player.skin_texture]);
        }else{
          console.log(`Username ${username} is NOT valid!`)
          username = "AlonsoAliaga";
          alertInvalidUsername();
          return;
        }
      }else{
        console.log(`Username ${username} is NOT valid!`)
        username = "AlonsoAliaga";
        alertInvalidUsername();
        return;
      }
    }catch(e) {
      console.log(`Error fetching ${username}: ${e.message}`)
      alertUnexpectedError(e.message);
      return;
    }
    /*
    if(!cacheUserUUID.has(username.toLowerCase())) {
      try {
        if(fetchedData) {
          console.log(fetchedData);
          lastUsernameToUUID = fetchedData.data.player.username;
          lastObtainedUUID = fetchedData.data.player.id;
          cacheUserUUID.set(lastUsernameToUUID.toLowerCase(),lastObtainedUUID);
          console.log(`Valid uuid saved in cache: ${username} -> ${cacheUserUUID.get(username.toLowerCase())}`);
        }else{
          lastUsernameToUUID = undefined;
          lastObtainedUUID = undefined;
          console.log("An error occurred: Fetched data is invalid or null");
        }
      } catch (error) {
        lastUsernameToUUID = undefined;
        lastObtainedUUID = undefined;
        console.log("An error occurred:", error);
      }
    }else{
      console.log(`Username in cache: ${username} -> ${cacheUserUUID.get(username.toLowerCase())}`);
    }
    */
    updateModel(username);
  }
}
/*
async function loadImageWithCheck(url) {
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load image: ${response.status} ${response.statusText}`);
  }
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Error loading image'));
    img.src = URL.createObjectURL(blob);
  });
}
*/
function createGradient(ctx, colours) {
  if(!colours) {
    if(typeof defaultGradients[currentGradient] !== "undefined") {
      colours = defaultGradients[currentGradient].colors;
      //console.log(`Creating gradient.. ${defaultGradients[currentGradient].identifier}`)
    }else {
      colours = defaultGradients[0].colors;
      //console.log(`Creating gradient.. ${defaultGradients[0].identifier}`)
    }
  }else{
    //console.log(`Creating custom gradient.. ${colours}`)
  }
	const gradient = ctx.createLinearGradient(0, 0, 20,20);
	//const gradient = ctx.createLinearGradient(0, 0, 18.75, 18.75);

	let interval = 1;
	const decrement = 1 / (colours.length - 1);
	colours.forEach(colour => {
    //console.log(`Fixed: ${interval.toFixed(5)}`);
    //console.log(`Adding color stop interval: ${interval}${interval>1?` CAUTION GREATER+!`:``}${interval<0?` CAUTION LOWER-!`:``}`)
		gradient.addColorStop(Math.max(0,interval), colour);
		interval -= decrement;
	})
	ctx.fillStyle = gradient;
	//ctx.fillRect(0, 0, 18.75, 18.75);
	ctx.fillRect(0, 0, 20, 20);
  return ctx;
}
function previousGradient() {
  backgroundType = 0;
  if(typeof defaultGradients[currentGradient - 1] !== "undefined") {
    currentGradient--;
  }else currentGradient = Object.keys(defaultGradients).length - 1;
  let customGradientsOpened = document.getElementById("button-toggle-custom-gradient");
  if(customGradientsOpened.checked) {
    let customGradientBox = document.getElementById("custom-gradient-box");
    customGradientBox.classList.remove("expanded");
    customGradientsOpened.checked = false;
  }
  updateSkin(true);
}
function nextGradient() {
  backgroundType = 0;
  if(typeof defaultGradients[currentGradient + 1] !== "undefined") {
    currentGradient++;
  }else currentGradient = 0;
  let customGradientsOpened = document.getElementById("button-toggle-custom-gradient");
  if(customGradientsOpened.checked) {
    let customGradientBox = document.getElementById("custom-gradient-box");
    customGradientBox.classList.remove("expanded");
    customGradientsOpened.checked = false;
  }
  updateSkin(true);
}
let backgroundType = 0; //0 - gradient | 1 - image | 2 - custom gradient
let currentGradient = 0;
let skinType = 0; //0 - username | 1 - custom
function togglePixelateBorderBox() {
  let effectBox = document.getElementById("pixelate-background-box");
  let effectOption = document.getElementById("button-pixelate-background").checked;
  if(effectOption) {
    //document.getElementById("button-pixelate-background").checked = false;
    effectBox.classList.add("expanded");
  }else{
    effectBox.classList.remove("expanded");
  }
}
function modifyPixelateBackgroundWidth(event,toAdd) {
  let customSize= document.getElementById("pixelate-background-size");
  let newSize = parseInt(customSize.innerText) + (toAdd  * ((event.ctrlKey||event.altKey) ? 2 : 1));
  if(newSize <= 1) {    
    customSize.innerText = 1;
  }else{
    customSize.innerText = Math.max(1,Math.min(100,newSize));
  }
  updateSkin(true);
}
function pixelateCtx(ctx) {
  let customSize= document.getElementById("pixelate-background-size");
  let size = parseInt(customSize.innerText);
  let c = ctx.canvas, w = c.width, h = c.height;
  let tmp = document.createElement("canvas");
  tmp.width = w/size; tmp.height = h/size;
  let tctx = tmp.getContext("2d");
  tctx.drawImage(c, 0, 0, tmp.width, tmp.height);
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, w, h);
  ctx.drawImage(tmp, 0, 0, w, h);
}
let addX = 0,addY = 0;
function moveIcon(direction,event) {
  let revertSkin = document.getElementById("button-revert-skin").checked;
  let toModify = event.altKey || event.shiftKey ? 5 : 1;
  toModify = revertSkin ? toModify * -1 : toModify;
  if(direction == "left") addX = Math.max(-250,addX - toModify);
  else if(direction == "right") addX = Math.min(250,addX + toModify);
  else if(direction == "up") addY = Math.max(0,addY - toModify);
  else addY = Math.min(250,addY + toModify);
  updateSkin(true);
}
let logoBuffer;
let defaultAlonsoPixel;
let defaultBgPixel;
let defaultShadowPixel;
let pixelCache = new Map();
/*
async function updatePixelTest(username) {
  const canvas = document.getElementById('test');
  if(document.getElementById("pixel-showcase-div").style.display == "none") {
    //console.log(`Render showcase is hidden. Ignoring..`)
    return;
  }
  if(!logoBuffer) {
    try{
      logoBuffer = await loadImage("https://raw.githubusercontent.com/AlonsoAliaga/alonsoaliaga.github.io/main/assets/img/apple-touch-icon.png");
    }catch(e){
      console.log(`Error loading logo buffer wtf? ${e.message}`);
    }
  }
  if(!defaultBgPixel) {
    try{
      defaultBgPixel = await loadLocalImage("https://raw.githubusercontent.com/AlonsoAliaga/mc-renders/main/assets/images/default-bg.png");
    }catch(e){
      console.log(e)
      console.log(`Error loading default bg wtf? ${e.message}`);
    }
  }
  if(!defaultShadowPixel) {
    try{
      defaultShadowPixel = await loadLocalImage("https://raw.githubusercontent.com/AlonsoAliaga/mc-renders/main/assets/images/20x20pshading.png");
    }catch(e){
      console.log(e)
      console.log(`Error loading default bg wtf? ${e.message}`);
    }
  }
  if(!defaultAlonsoPixel) {
    try{
      defaultAlonsoPixel = await loadLocalImage("https://raw.githubusercontent.com/AlonsoAliaga/mc-renders/main/assets/images/default-pixel.png");
    }catch(e){
      console.log(e)
      console.log(`Error loading default AlonsoAliaga pixel wtf? ${e.message}`);
    }
  }
  //console.log(`Updating render showcase with username: ${username}`);
  let imageToUse;
  let ctx = canvas.getContext('2d');
  if(username.toLowerCase() == "alonsoaliaga") {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.drawImage(defaultAlonsoPixel, 0, 0);
    console.log(`Default username for pixel: AlonsoAliaga`);
    return;
  }
  if(pixelCache.has(username.toLowerCase())) {
    imageToUse = pixelCache.get(username.toLowerCase());
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.drawImage(defaultBgPixel, 0, 0);
    ctx.drawImage(imageToUse, 128, 64, 616, 1000, 75, 60, 151, 245);
    ctx.globalAlpha = 0.05;
    ctx.drawImage(logoBuffer,15,15,64,53);
    ctx.drawImage(logoBuffer,canvas.width - 79, canvas.height - 68,64,53);
    ctx.globalAlpha = 0.03;
    ctx.drawImage(logoBuffer,canvas.width/2 - (256/2), canvas.height/2 - (214 / 2),256,214);
    ctx.globalAlpha = 1.0;
  }else{
    let link = atob("aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9iaXR6ZWwve3VzZXJuYW1lfS9idXN0").replace(/{username}/g,username);
    const img = new Image();
    img.crossOrigin = 'anonymous'; // Enable CORS if the image is from another domain
    img.onload = () => {
      pixelCache.set(username.toLowerCase(),img);
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      ctx.drawImage(defaultBgPixel, 0, 0);
      ctx.drawImage(img, 128, 64, 616, 1000, 75, 60, 151, 245);
      ctx.globalAlpha = 0.05;
      ctx.drawImage(logoBuffer,15,15,64,53);
      ctx.drawImage(logoBuffer,canvas.width - 79, canvas.height - 68,64,53);
      ctx.globalAlpha = 0.03;
      ctx.drawImage(logoBuffer,canvas.width/2 - (256/2), canvas.height/2 - (214 / 2),256,214);
      ctx.globalAlpha = 1.0;
    }
    img.onerror = () => {
      //console.log(`Invalid username: ${username}`)
      updateTest("AlonsoAliaga");
    }
    img.src = link; // Replace with your image URL
  }
}
*/
/*
async function updateTest(username) {
  if(!document.getElementById("render-showcase-div")) return;
  if(document.getElementById("render-showcase-div").style.display == "none") {
    //console.log(`Render showcase is hidden. Ignoring..`)
    return;
  }
  if(!logoBuffer) {
    try{
      logoBuffer = await loadImage("https://raw.githubusercontent.com/AlonsoAliaga/alonsoaliaga.github.io/main/assets/img/apple-touch-icon.png");
    }catch(e){
      console.log(`Error loading logo buffer wtf? ${e.message}`);
    }
  }
  if(lastFailed || typeof username == "undefined") {
    username = "AlonsoAliaga";
  }
  //console.log(`Updating render showcase with username: ${username}`);
  let link = atob("aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci9tYXJjaGluZy97dXNlcm5hbWV9L2ZhY2U=").replace(/{username}/g,username);
  const canvas = document.getElementById('test');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  const img = new Image();
  img.crossOrigin = 'anonymous'; // Enable CORS if the image is from another domain
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    ctx.globalAlpha = 0.05;
    ctx.drawImage(logoBuffer,15,15,64,53);
    ctx.drawImage(logoBuffer,canvas.width - 79, canvas.height - 68,64,53);
    ctx.globalAlpha = 0.03;
    ctx.drawImage(logoBuffer,canvas.width/2 - (256/2), canvas.height/2 - (214 / 2),256,214);
    ctx.globalAlpha = 1.0;
  }
  img.onerror = () => {
    //console.log(`Invalid username: ${username}`)
    updateTest("AlonsoAliaga");
  }
  img.src = link; // Replace with your image URL
}
*/
function isLocal(location) {
  return location.hostname.includes("0.0") || location.protocol == "file:";
}
const EffectRegistry = {
  border: addBorder,
  colorize: colorizeImage,
  overlay: generateSolidOverlay,
  
  crop: cropLayer,
  glow: generateGlowEffect,
  resize: resizeLayer,
  chroma: applyChromaKey,
  pixelate: pixelateLayer,
  grayscale: convertToGrayscale,
  brightness: adjustBrightness,
  invert: invertLayer,
  tonality: applyTonality
};
let currentScaleId = "normal";
let scale = 1;
async function updateModel(usernameToUse) {
  if(typeof lastSuccessUsername == "undefined") lastSuccessUsername = "AlonsoAliaga";
  if(typeof usernameToUse == "undefined") {
    if (typeof loadedMainSkinBuffer !== "undefined") {
      usernameToUse = loadedMainSkinBuffer;
    } else {
      usernameToUse = lastSuccessUsername;
    }
  }
  let modelKey;
  let additionalToJoin = [];
  let skinUrl = undefined;
  if(usernameToUse.length >= 20) {
    modelKey = `${usernameToUse}$$$${currentRenderType}$$$${currentCrop}$$$${scale}`;
    additionalToJoin.push(`skinUrl=${usernameToUse}`);
    skinUrl = usernameToUse;
    usernameToUse = "AlonsoAliaga777"; 
  } else {
    let playerData = cacheUserData.get(usernameToUse.toLowerCase());
    if(!playerData) {
      //throw new Error(`PlayerData is undefined for ${usernameToUse}!`);
      //alert(`This error is impossible to happen! Please contact the developer!`);
      //alert(`PlayerData is undefined for ${usernameToUse}!`);
      return;
    }
    modelKey = `${usernameToUse.toLowerCase()}$$$${currentRenderType}$$$${currentCrop}$$$${scale}`;
    additionalToJoin.push(`skinUrl=${playerData[2]}`);
    skinUrl = playerData[2];
  }
  
  let modelImage;
  if(modelsCache.has(modelKey)) {
    modelImage = modelsCache.get(modelKey);
  } else {
    let modelData = models[currentRenderType];
    if(!modelData) {
      console.log(`UNKNOWN MODEL! HOW?`)
    } else {
      let url;
      additionalToJoin.push(modelData.is2D ? `cameraWidth=${scale == 1 ? 800 : Math.max(800,Math.min(3840,(scale * 255) + 800))}` : `renderScale=${scale}`);
      if(modelData.custom) {
        let theU;
        try{
          theU = atob(modelData.url)
        }catch(e) {
          theU = modelData.url;
        }
        if(!theU.startsWith("http")) {
          if(isLocal(window.location)) {
            theU = `../assets/images/${theU}`;
          }else{
            theU = `https://raw.githubusercontent.com/AlonsoAliaga/mc-renders/main/assets/images/${theU}`
          }
        }
        url = theU.replace(/{crop}/g, currentCrop);;
        if(url.includes("{uuid}")) {
          console.log(`Username in cache: ${usernameToUse.toLowerCase()} -> ${cacheUserData.get(usernameToUse.toLowerCase())}`);
          console.log(`Last success username in cache: ${lastSuccessUsername.toLowerCase()} -> ${cacheUserData.get(lastSuccessUsername.toLowerCase())}`);
          let dataToUse = cacheUserData.get(usernameToUse.toLowerCase()) || cacheUserData.get(lastSuccessUsername.toLowerCase()) || ["e1c1a194-7e86-414f-86bb-42d82a21cfb8","e1c1a194-7e86-414f-86bb-42d82a21cfb8"];
          url = url.replace(/{uuid}/g, dataToUse[1]);
        }else if(url.includes("{username}")) {
          url = url.replace(/{username}/g, lastSuccessUsername);
        }
        if(url.includes("{size}")) {
          if(modelData.isStats) {
            let scaleData = scals[currentScaleId];
            if(!scaleData) scaleData = scals["normal"];
            url = url.replace(/{size}/g, scaleData.statsScale);
          }else if(modelData.isAtar) {
            let scaleData = scals[currentScaleId];
            if(!scaleData) scaleData = scals["normal"];
            url = url.replace(/{size}/g, scaleData.statsAtar);
          }else{
            url = url.replace(/{size}/g, scale == 1 ? 800 : Math.max(800,Math.min(3840,(scale * 255) + 800)));
          }
        }
        if(url.includes("{additional}")) {
          if(url.includes("?")) {
            url = url.replace(/{additional}/g, "&"+additionalToJoin.join("&"));
          }else{
            url = url.replace(/{additional}/g, "?"+additionalToJoin.join("&"));
          }
        }
      } else {
        url = atob("aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci97cmVuZGVyX3R5cGV9L3tjcm9wfXthZGRpdGlvbmFsfQ==").replace(/{render_type}/g, currentRenderType).replace(/{crop}/g, currentCrop);
        if(url.includes("{additional}")) {
          if(url.includes("?")) {
            url = url.replace(/{additional}/g, "&"+additionalToJoin.join("&"));
          }else{
            url = url.replace(/{additional}/g, "?"+additionalToJoin.join("&"));
          }
        }
      }
      showLoading(`⌛ Your model is loading!<br>Please wait!`);
      try {
        let imageBuffer = await loadImage(url);
        modelsCache.set(modelKey, imageBuffer);
        modelImage = imageBuffer;
      } catch(e) {
        console.log(`Error getting image?: ${e.message}`);
        //alert(`An error occurred while loading the model!\n\nError: ${e.message}\n\nPlease try again later or contact the developer.`);
        alertError(`❌ Model couldn't be loaded!<br>Try again in some minutes!`);
        return;
      }
      if(modelData.custom && modelData.isRen) {
        let toComposeCanvas = document.createElement("canvas");
        toComposeCanvas.width = modelImage.width;
        toComposeCanvas.height = modelImage.height;
        let toComposeCtx = toComposeCanvas.getContext("2d");
        toComposeCtx.drawImage(modelImage, 0, 0);
        console.log(`Composing model with ${modelData.composition.length} images..`);

        let i = 0;
        for (let compositionData of modelData.composition) {
          console.log(compositionData);
          try {
            let imageComposite;

            const x = compositionData.x !== undefined ? compositionData.x : 0;
            const y = compositionData.y !== undefined ? compositionData.y : 0;
          
            const isGlobal = compositionData.global === true;
            const srcX = isGlobal ? 0 : x;
            const srcY = isGlobal ? 0 : y;
            const srcW = isGlobal ? toComposeCanvas.width : (compositionData.width !== undefined ? compositionData.width : toComposeCanvas.width);
            const srcH = isGlobal ? toComposeCanvas.height : (compositionData.height !== undefined ? compositionData.height : toComposeCanvas.height);
          
            if (compositionData.url !== undefined) {
              let compositionUrl;
              try {
                compositionUrl = atob(compositionData.url);
              } catch (e) {
                compositionUrl = compositionData.url;
              }
            
              if (!compositionUrl.startsWith("http")) {
                if (isLocal(window.location)) {
                  compositionUrl = `../assets/images/${compositionUrl}`;
                } else {
                  compositionUrl = `https://raw.githubusercontent.com/AlonsoAliaga/mc-renders/refs/heads/main/assets/images/${compositionUrl}`;
                }
              }
            
              const finalUrl = compositionUrl.replace(/{skinUrl}/g, skinUrl);
              console.log(`Loading composition image #${i}: ${finalUrl}`);

              imageComposite = await loadImage(finalUrl);
            } else {
              const tempCanvas = document.createElement('canvas');
              tempCanvas.width = srcW;
              tempCanvas.height = srcH;
              const tempCtx = tempCanvas.getContext('2d');
            
              tempCtx.drawImage(toComposeCanvas, srcX, srcY, srcW, srcH, 0, 0, srcW, srcH);
              imageComposite = tempCanvas;

              console.log(`Applying global effects layer #${i} on canvas content`);
            }
          
            const filtrosArray = Object.entries(compositionData);
          
            for (const [key, value] of filtrosArray) {
              if (["url", "x", "y", "width", "height", "comment", "global"].includes(key) || value === undefined) {
                continue;
              }
            
              const effectFn = EffectRegistry[key];
              if (effectFn) {
                imageComposite = effectFn(imageComposite, value);
              }
            }
          
            const finalWidth = isGlobal ? imageComposite.width : (compositionData.width !== undefined ? compositionData.width : imageComposite.width);
            const finalHeight = isGlobal ? imageComposite.height : (compositionData.height !== undefined ? compositionData.height : imageComposite.height);
          
            // 5. Renderizar el resultado procesado
            if (isGlobal) {
              toComposeCanvas.width = finalWidth;
              toComposeCanvas.height = finalHeight;
              toComposeCtx.drawImage(imageComposite, 0, 0);
            } else {
              toComposeCtx.drawImage(imageComposite, x, y, finalWidth, finalHeight);
            }

            console.log(`Composition image rendered successfully on x:${isGlobal ? 0 : x} y:${isGlobal ? 0 : y} width:${finalWidth} height:${finalHeight}`);
          } catch (e) {
            console.log(`Error loading composition image #${i}: ${e.message}`);
          }
          i++;
        }
        /*
        let i = 0;
        for(let compositionData of modelData.composition) {
          console.log(compositionData);
          try{
            let compositionUrl;
            try{
              compositionUrl = atob(compositionData.url);
            }catch(e) {
              compositionUrl = compositionData.url;
            }
            if(!compositionUrl.startsWith("http")) {
              if(isLocal(window.location)) {
                compositionUrl = `../assets/images/${compositionUrl}`;
              }else{
                compositionUrl = `https://raw.githubusercontent.com/AlonsoAliaga/mc-renders/main/assets/images/${compositionUrl}`
              }
            }
            console.log(`Loading composition image #${i}: ${compositionUrl.replace(/{skinUrl}/g,skinUrl)}`);
            let imageComposite = await loadImage(compositionUrl.replace(/{skinUrl}/g,skinUrl));
            if(typeof compositionData.border !== "undefined") {
              imageComposite = addBorder(imageComposite, compositionData.border);
            }
            if(typeof compositionData.colorize !== "undefined") {
              imageComposite = colorizeImage(imageComposite, compositionData.colorize);
            }
            if(typeof compositionData.overlay !== "undefined") {
              imageComposite = generateSolidOverlay(imageComposite, compositionData.overlay);
            }
            toComposeCtx.drawImage(imageComposite, compositionData.x || 0, compositionData.y || 0, compositionData.width || imageComposite.width, compositionData.height || imageComposite.height);
            
            
            console.log(`Composition image rendered successfully on x:${compositionData.x || 0} y:${compositionData.y || 0} width:${compositionData.width || imageComposite.width} height:${compositionData.height || imageComposite.height}`);
          }catch(e) {
            console.log(`Error loading composition image #${i}: ${e.message}`);
          }
          i++;
        }
        */
        try{
          modelImage = await canvasToImage(toComposeCanvas);
          //modelImage = toComposeCtx.getImageData(0, 0, toComposeCanvas.width, toComposeCanvas.height).data.buffer;
          modelsCache.set(modelKey, modelImage);
        }catch(e) {
          console.log(`Error getting buffer to assign new model image: ${e.message}`);
        }
      }
      showLoaded(`✅ Model successfully loaded!<br>You can now download it!`);
    }
  }
  let revertSkin = document.getElementById("button-revert-skin").checked;
  let finalRender = document.getElementById("final-canvas");
  let ctx = finalRender.getContext("2d");
  ctx.clearRect(0, 0, finalRender.width, finalRender.height);
  finalRender.width = modelImage.width;
  finalRender.height = modelImage.height;
  ctx = finalRender.getContext("2d");
  if(revertSkin) {
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(modelImage, (finalRender.width * -1), 0, finalRender.width, finalRender.height);
    ctx.restore();
  } else {
    ctx.drawImage(modelImage, 0, 0);
  }
  /*
  if(typeof lastObtainedUUID != "undefined") {
    console.log(`Obtained UUID is valid!`);
  } else {
    console.log(`Obtained UUID is NOT valid!`);
  }
  */
}
function cropLayer(imageBuffer, args) {
  const params = args.split(" ");
  const x = parseInt(params[0]) || 0;
  const y = parseInt(params[1]) || 0;
  const w = parseInt(params[2]) || imageBuffer.width;
  const h = parseInt(params[3]) || imageBuffer.height;

  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');

  ctx.drawImage(imageBuffer, x, y, w, h, 0, 0, w, h);
  return canvas;
}

function generateGlowEffect(imageBuffer, args) {
  const params = args.split(" ");
  const color = params[0] || "white";
  const width = parseInt(params[1]) || 10;
  const intensity = parseInt(params[2]) || 3;

  const canvas = document.createElement('canvas');
  // Añadimos margen extra para que el resplandor no se corte en los bordes
  canvas.width = imageBuffer.width + (width * 2);
  canvas.height = imageBuffer.height + (width * 2);
  const ctx = canvas.getContext('2d');

  ctx.shadowColor = color;
  ctx.shadowBlur = width;

  // Dibujamos la imagen múltiples veces de forma acumulativa para la intensidad
  for (let i = 0; i < intensity; i++) {
    ctx.drawImage(imageBuffer, width, width);
  }

  return canvas;
}

function resizeLayer(imageBuffer, args) {
  const params = args.split(" ");
  const w = parseInt(params[0]) || imageBuffer.width;
  const h = parseInt(params[1]) || imageBuffer.height;
  const smooth = params[2] !== "false"; // Por defecto true

  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');

  ctx.imageSmoothingEnabled = smooth;
  ctx.drawImage(imageBuffer, 0, 0, w, h);
  return canvas;
}

function applyChromaKey(imageBuffer, args) {
  const params = args.split(" ");
  const chromaColor = params[0] || "#00ff00";
  const tolerance = parseInt(params[1]) || 20;

  const canvas = document.createElement('canvas');
  canvas.width = imageBuffer.width;
  canvas.height = imageBuffer.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(imageBuffer, 0, 0);

  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;

  // Parsear color HEX a RGB
  const tempCtx = document.createElement('canvas').getContext('2d');
  tempCtx.fillStyle = chromaColor;
  const hex = tempCtx.fillStyle; // Convierte nombres como "green" a rgb/hex estándar
  const rTarget = parseInt(hex.slice(1,3), 16);
  const gTarget = parseInt(hex.slice(3,5), 16);
  const bTarget = parseInt(hex.slice(5,7), 16);

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i+1];
    const b = data[i+2];

    // Distancia Euclidiana de color
    const diff = Math.sqrt((r-rTarget)**2 + (g-gTarget)**2 + (b-bTarget)**2);
    if (diff < tolerance) {
      data[i+3] = 0; // Hace el píxel transparente
    }
  }

  ctx.putImageData(imgData, 0, 0);
  return canvas;
}

function pixelateLayer(imageBuffer, args) {
  const size = parseInt(args) || 4;

  const canvas = document.createElement('canvas');
  canvas.width = imageBuffer.width;
  canvas.height = imageBuffer.height;
  const ctx = canvas.getContext('2d');

  // Mini canvas temporal
  const smallCanvas = document.createElement('canvas');
  smallCanvas.width = Math.max(1, imageBuffer.width / size);
  smallCanvas.height = Math.max(1, imageBuffer.height / size);
  const smallCtx = smallCanvas.getContext('2d');

  // Achicar imagen
  smallCtx.drawImage(imageBuffer, 0, 0, smallCanvas.width, smallCanvas.height);

  // Agrandar sin suavizado
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(smallCanvas, 0, 0, smallCanvas.width, smallCanvas.height, 0, 0, canvas.width, canvas.height);

  return canvas;
}

function convertToGrayscale(imageBuffer, args) {
  const factor = isNaN(args) ? 1.0 : parseFloat(args);

  const canvas = document.createElement('canvas');
  canvas.width = imageBuffer.width;
  canvas.height = imageBuffer.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(imageBuffer, 0, 0);

  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i+1];
    const b = data[i+2];
    // Luminosidad estándar ITU-R BT.601
    const gray = 0.299 * r + 0.587 * g + 0.114 * b;

    data[i]   = r + (gray - r) * factor;
    data[i+1] = g + (gray - g) * factor;
    data[i+2] = b + (gray - b) * factor;
  }

  ctx.putImageData(imgData, 0, 0);
  return canvas;
}

function adjustBrightness(imageBuffer, args) {
  // 1.0 es normal, < 1.0 es oscuridad, > 1.0 es brillo
  const factor = isNaN(args) ? 1.0 : parseFloat(args);

  const canvas = document.createElement('canvas');
  canvas.width = imageBuffer.width;
  canvas.height = imageBuffer.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(imageBuffer, 0, 0);

  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;

  for (let i = 0; i < data.length; i += 4) {
    data[i]   = Math.min(255, Math.max(0, data[i] * factor));     // R
    data[i+1] = Math.min(255, Math.max(0, data[i+1] * factor));   // G
    data[i+2] = Math.min(255, Math.max(0, data[i+2] * factor));   // B
  }

  ctx.putImageData(imgData, 0, 0);
  return canvas;
}

function invertLayer(imageBuffer, args) {
  const canvas = document.createElement('canvas');
  canvas.width = imageBuffer.width;
  canvas.height = imageBuffer.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(imageBuffer, 0, 0);

  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;

  for (let i = 0; i < data.length; i += 4) {
    data[i]   = 255 - data[i];     // Invertir R
    data[i+1] = 255 - data[i+1];   // Invertir G
    data[i+2] = 255 - data[i+2];   // Invertir B
  }

  ctx.putImageData(imgData, 0, 0);
  return canvas;
}
function canvasToImage(canvas) {
  return new Promise((resolve) => {
    const dataUrl = canvas.toDataURL('image/png');
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = dataUrl;
  });
}
async function updateModel3(username) {
  if(typeof lastSuccessUsername == "undefined") lastSuccessUsername = "AlonsoAliaga";
  if(typeof username == "undefined") username = lastSuccessUsername;
  let modelKey = `${username.toLowerCase()}$$$${currentRenderType}$$$${currentCrop}`;
  let additionalToUse = "";
  if(username.length >= 20) {
    modelKey = `${username}$$$${currentRenderType}$$$${currentCrop}`;
    additionalToUse = `skinUrl=${username}`
    username = "AlonsoAliaga777";
  }
  let modelImage;
  if(modelsCache.has(modelKey)) {
    modelImage = modelsCache.get(modelKey);
  }else{
    let modelData = models[currentRenderType];
    if(!modelData) {
      console.log(`UNKNOWN MODEL! HOW?`)
    }else{
      let url;
      if(modelData.custom) {
        url = atob(modelData.url);
        //console.log(url)
        url = url.replace(/{username}/g,username).replace(/{crop}/g,currentCrop);
        //console.log(url)
        if(url.endsWith(`${username}{additional}`)) {
          url = url.replace(/{additional}/g,`?${additionalToUse}`).replace(/{crop}/g,currentCrop);
        }else{
          url = url.replace(/{additional}/g,`&${additionalToUse}`).replace(/{crop}/g,currentCrop);
        }
      }else{
        url = atob("aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlvL3JlbmRlci97cmVuZGVyX3R5cGV9L3t1c2VybmFtZX0ve2Nyb3B9e2FkZGl0aW9uYWx9").replace(/{render_type}/g,currentRenderType);
        url = url.replace(/{username}/g,username).replace(/{additional}/g,`?${additionalToUse}`).replace(/{crop}/g,currentCrop);
      }
      try{
        let imageBuffer = await loadImage(url);
        modelsCache.set(modelKey,imageBuffer);
        modelImage = imageBuffer;
      }catch(e) {
        console.log(`Error getting image?: ${e.message}`);
        return;
      }
    }
  }
  let revertSkin = document.getElementById("button-revert-skin").checked;

  let finalRender = document.getElementById("final-canvas");
  let ctx = finalRender.getContext("2d");
  ctx.clearRect(0, 0, finalRender.width, finalRender.height);
  finalRender.width = modelImage.width;
  finalRender.height = modelImage.height;
  ctx = finalRender.getContext("2d");
  if(revertSkin) {
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(modelImage, (finalRender.width * -1), 0, finalRender.width, finalRender.height);
    ctx.restore();
  }else{
    ctx.drawImage(modelImage,0,0);
  }
  /*
  if(typeof lastObtainedUUID != "undefined") {
    console.log(`Obtained UUID is valid!`);
  }else{
    console.log(`Obtained UUID is NOT valid!`);
  }
  */
}
function updateSkin(inCache = true) {
  let username = usernameInput?.value || "AlonsoAliaga";
  //
  let pixelateBackground = document.getElementById("button-pixelate-background").checked;
  let revertSkin = document.getElementById("button-revert-skin").checked;
  let shadow = document.getElementById("button-shadow").checked;
  let transparentBackground = document.getElementById("button-no-background").checked;
  //
  let finalCanvas = document.getElementById("final-canvas");
  let finalCtx = finalCanvas.getContext("2d");
  finalCtx.clearRect(0, 0, finalCanvas.width, finalCanvas.height);
  //console.log(finalCanvas.width,finalCanvas.height)
  finalCtx.imageSmoothingEnabled = true;
  //
  let backgroundCtx = backgroundCanvas.getContext("2d");
  if(!transparentBackground) {
    finalCanvas.style.border = "1px solid #d3d3d3";
    if(backgroundType == 0) {
      backgroundCtx.clearRect(0, 0, backgroundCtx.canvas.width, backgroundCtx.canvas.height);
      createGradient(backgroundCtx);
      finalCtx.drawImage(backgroundCanvas,0,0);
    }else if(backgroundType == 1) {
      //console.log(`Writing custom background..`);
      finalCtx.drawImage(backgroundCanvas,0,0);
      //createGradient(backgroundCtx);
    }else{
      backgroundCtx.clearRect(0, 0, backgroundCtx.canvas.width, backgroundCtx.canvas.height);
      let currentAmount = isNaN(colorsButton.innerText) ? 2 : Math.max(2,Math.min(maxColorsAmount,parseInt(colorsButton.innerText)));
      createGradient(backgroundCtx,defaultColors.slice(0, currentAmount));
      finalCtx.drawImage(backgroundCanvas,0,0);
    }
    if(pixelateBackground) {
      pixelateCtx(finalCtx)
    }
  }else{
    finalCanvas.style.border = "none";
  }
  //siteCtx.fillStyle = "#FFFF00";
  //siteCtx.fillRect(0, 0,siteCanvas.width,siteCanvas.height);
  //console.log("Site canvas:",finalCanvas.width,finalCanvas.height);
  //let skinCanvas = document.getElementById("skin-canvas");
  let skinCtx = skinCanvas.getContext("2d");
  skinCtx.clearRect(0, 0, skinCanvas.width, skinCanvas.height);
  //startingCtx.fillStyle = "#FF0000";
  //startingCtx.fillRect(0, 0,startingCanvas.width,startingCanvas.height);
  skinCtx.imageSmoothingEnabled = false;
  //console.log("Starting canvas:",skinCanvas.width,skinCanvas.height);
  
  if(shadow) {
    skinCtx.drawImage(backdropBuffer, 0, 0, 20, 20);
  }
  //console.log(`Type of loadedSkinBuffer: ${typeof loadedSkinBuffer}`);
  if (loadedSkinBuffer.height === 32) {
    skinCtx.drawImage(loadedSkinBuffer, 8,  9, 7, 7, 8, 4, 7, 7); // Head (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 5,  9, 3, 7, 5, 4, 3, 7); // Head Side (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 44, 20, 3, 7, 12, 13, 3, 7); // Arm Right Side (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 21, 20, 6, 1, 7, 11, 6, 1); // Chest Neck Small Line (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 20, 21, 8, 8, 6, 12, 8, 8); // Chest Other (Bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 44, 20, 3, 7, 5, 13, 3, 7); // Arm Left Side (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 40, 9, 7, 7, 8, 4, 7, 7); // Head (top layer)
    skinCtx.drawImage(loadedSkinBuffer, 33, 9, 3, 7, 5, 4, 3, 7); // Head Side (top layer)

  } else {
    // * BOTTOM LAYER
    skinCtx.drawImage(loadedSkinBuffer, 8,  9, 7, 7, 8, 4, 7, 7); // Head (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 5,  9, 3, 7, 5, 4, 3, 7); // Head Side (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 36, 52, 3, 7, 12, 13, 3, 7); // Arm Right Side (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 21, 20, 6, 1, 7, 11, 6, 1); // Chest Neck Small Line (bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 20, 21, 8, 8, 6, 12, 8, 8); // Chest Other (Bottom layer)
    skinCtx.drawImage(loadedSkinBuffer, 44, 20, 3, 7, 5, 13, 3, 7); // Arm Left Side (bottom layer)
 addY +
    // * TOP LAYER addY +
    skinCtx.drawImage(loadedSkinBuffer, 40, 9, 7, 7, 8, 4, 7, 7); // Head (top layer)
    skinCtx.drawImage(loadedSkinBuffer, 33, 9, 3, 7, 5, 4, 3, 7); // Head Side (top layer)
    skinCtx.drawImage(loadedSkinBuffer, 52, 52, 3, 7, 12, 13, 3, 7); // Arm Right Side (top layer)
    skinCtx.drawImage(loadedSkinBuffer, 52, 36, 3, 7, 5, 13, 3, 7); // Arm Left Side (top layer)
    skinCtx.drawImage(loadedSkinBuffer, 20, 37, 8, 8, 6, 12, 8, 8); // Chest Other (top layer)
    skinCtx.drawImage(loadedSkinBuffer, 21, 36, 6, 1, 7, 11, 6, 1); // Chest Neck Small Line (top layer)
  }
  skinCtx.drawImage(shadingBuffer, 0 , 0, 20, 20);
  if(revertSkin) {
    finalCtx.save();
    finalCtx.scale(-1, 1);
    finalCtx.drawImage(skinCanvas, addX + (skinCtx.canvas.width * -1), addY, skinCtx.canvas.width, skinCtx.canvas.height);
    finalCtx.restore();
  }else{
    finalCtx.drawImage(skinCanvas,addX,addY,300,300)
  }

  //console.log(`Username: ${username}\nRevert skin: ${revertSkin}\nShadow: ${shadow}\nTransparent background: ${transparentBackground}\nIn cache: ${inCache}`);
}
const usernameInputCooldown = document.getElementById('inputTextCooldown');
let blockInterval;
function blockUsername(seconds = 3) {
  if(blockInterval) clearInterval(blockInterval);
  usernameInputDiv.style.display = "none"
  usernameInputCooldown.style.display = ""
  let i = Math.max(3,seconds);
  usernameInputCooldown.value = `${i} seconds left..`
  blockInterval = setInterval(()=> {
    i--;
    usernameInputCooldown.value = `${i} seconds left..`
    if(i <= 0) {
      usernameInputCooldown.style.display = "none"
      usernameInputDiv.style.display = ""
      clearInterval(blockInterval);
      blockInterval = undefined;
      return;
    }
  },1000);
}
const defaultColors = [];
let failedBuffer;
let backdropBuffer;
let shadingBuffer;
const backgroundCanvas = document.getElementById("background-canvas");
const skinCanvas = document.getElementById("skin-canvas");
const siteCanvas = document.getElementById("final-canvas");
const markedCanvas = document.getElementById("marked-canvas");
async function addListeners() {
	failedBuffer = await loadImage("https://raw.githubusercontent.com/AlonsoAliaga/mcpfp/main/assets/images/notFound.png");
	backdropBuffer = await loadImage("https://raw.githubusercontent.com/AlonsoAliaga/mcpfp/main/assets/images/backdropshading.png");
	shadingBuffer = await loadImage("https://raw.githubusercontent.com/AlonsoAliaga/mcpfp/main/assets/images/20x20pshading.png");
  backgroundCanvas.getContext("2d").scale(15, 15);
  skinCanvas.getContext("2d").scale(15, 15);
  usernameInput.addEventListener("keyup", function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        processUsername();
    }
  });
  processUsername("no-cooldown");
  /*
  for(let i = 0; i < maxColorsAmount; i++) {
    if(defaultColors.length < maxColorsAmount) {
      let newColor = getRandomHexColor();
      //console.log(`Random color: ${newColor}${newColor.length != 7?` | CAUTION!`:``}`),
      defaultColors.push(newColor);
    }
    let colorsDiv = document.getElementById("colors-div");
    //console.log(`Creating color picker #${i}`);
    let p = document.createElement("input");
    p.type = "color";
    p.id = `color-picker-${i}`;
    p.index = i;
    p.value = defaultColors[i];
    p.addEventListener('change', function() {
      const color = this.value;
      //console.log(`Color picked: ${color} | ID: ${this.id} | Index: ${this.index}`);
      defaultColors[this.index] = color;
      updateSkin(true);
    });
    if(i != 0) {
      let s = document.createElement("span");
      s.innerText = " ";
      colorsDiv.appendChild(s);
    }
    colorsDiv.appendChild(p);
    //console.log(`Creating color picker #${i}! display="${p.style.display}"`)
  }
  removeColor();
  */
  runDelayed();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random()*16777215).toString(16).toUpperCase().padStart(6, '0')}`;
}
let timeOnLoad = Date.now();
function uploadCustomSkinTexture(event) {
  if(typeof loadedMainSkinBuffer != "undefined") {
    //Remove custom skin
    loadedMainSkinBuffer = undefined;
    if(typeof lastSuccessUsername == "undefined") lastSuccessUsername = "AlonsoAliaga";
    lastSuccessUsername = "AlonsoAliaga";
    document.getElementById("inputText").value = "AlonsoAliaga";
    document.getElementById("customskindiv").innerHTML = "🌀 Upload<br>Custom Skin";
    updateModel(lastSuccessUsername)
    //updateModel("AlonsoAliaga")
    return;
  }
  if(timeOnLoad + 1000 > Date.now()) {
    alertError(`<b>⏳ Please wait a moment! ⏳</b><br><span style="font-size: small;">Page is still loading.</span>`);
    return;
  }
  if(typeof adBlockEnabled == "undefined" || adBlockEnabled) {
    alertError(`<b>❌ Disable AdBlock! ❌</b><br><span style="font-size: small;">To access custom textures!</span>`);
    return;
  }
  //console.log(event);
  //let imageContainer = document.getElementById("motd-icon");
  // Create a new input element
  const uploadInput = document.createElement('input');
  uploadInput.type = 'file';
  // Add event listener to handle file selection
  uploadInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    // Handle the file upload or further processing here
    // Create a FileReader object
    const reader = new FileReader();
    // Set up a load event listener on the FileReader
    reader.addEventListener('load', function() {
      // Update the image source with the uploaded image
      var img = new Image();
      img.src = reader.result;
      //console.log(`Processing custom image: ${file.name} | ${img.width}px x ${img.height}px`);
      img.onload = function () {
        if(img.width !== 64) {
          alertError(`<b>💎 Wrong skin texture! 💎</b><br><span style="font-size: small;">Skin must be 64px width!</span>`);
          return;
        }
        if(![64,32].includes(img.height)) {
          alertError(`<b>💎 Wrong skin texture! 💎</b><br><span style="font-size: small;">Skin must be 64px or 32px width!</span>`);
          return;
        }
        //skinType = 1;
        let tempCanvas = document.createElement("canvas");
        tempCanvas.width = 64;
        tempCanvas.height = 64;
        let tempCtx = tempCanvas.getContext("2d");
        tempCtx.drawImage(img, 0, 0);
        //console.log(tempCanvas.toDataURL())
        loadedMainSkinBuffer = tempCanvas.toDataURL();

        document.getElementById("customskindiv").innerHTML = "❌ Remove<br>Custom Skin";
        
        updateModel(loadedMainSkinBuffer)

        //console.log(`Uploaded custom image: ${file.name} | ${img.width}px x ${img.height}px`);
        //updateSkin(true);
      };
    });

    // Read the uploaded file as a data URL
    reader.readAsDataURL(file);
  });

  // Append the input element to the image container
  document.body.appendChild(uploadInput);

  // Trigger a click event on the input element
  uploadInput.click();
  
  document.body.removeChild(uploadInput);
}
let errorTimeout = undefined;
let loadingTimeout = undefined;
function showLoading(text = "Empty") {
  //console.log(`Alerting: ${text}`)
  if(loadingTimeout) {
    clearTimeout(loadingTimeout);
    var sb = document.getElementById("snackbar-loading");
    sb.className = sb.className.replace("show", "");
  }
  var sb = document.getElementById("snackbar-loading");
  sb.innerHTML = text;
  //this is where the class name will be added & removed to activate the css
  sb.className = "show";

  loadingTimeout = setTimeout(()=>{ sb.className = sb.className.replace("show", ""); }, 60000);
}
function showLoaded(text = "Empty") {
  if(loadingTimeout) {
    clearTimeout(loadingTimeout);
    var sb = document.getElementById("snackbar-loading");
    sb.className = sb.className.replace("show", "");
  }
  sb.innerHTML = text;
  sb.className = "show";
  loadingTimeout = setTimeout(()=>{ sb.className = sb.className.replace("show", ""); }, 3000);
}
function alertError(text = "Empty error.") {
  //console.log(`Alerting: ${text}`)
  if(errorTimeout) {
    clearTimeout(errorTimeout);
    var sb = document.getElementById("snackbar-error");
    sb.className = sb.className.replace("show", "");
  }
  var sb = document.getElementById("snackbar-error");
  sb.innerHTML = text;
  //this is where the class name will be added & removed to activate the css
  sb.className = "show";

  errorTimeout = setTimeout(()=>{ sb.className = sb.className.replace("show", ""); }, 3000);
}
function uploadCustomBackground(event) {
  //console.log(event);
  //let imageContainer = document.getElementById("motd-icon");
  // Create a new input element
  const uploadInput = document.createElement('input');
  uploadInput.type = 'file';

  // Add event listener to handle file selection
  uploadInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    // Handle the file upload or further processing here
    
    // Create a FileReader object
    const reader = new FileReader();
    let backgroundCtx = backgroundCanvas.getContext("2d");
    backgroundCtx.clearRect(0, 0, backgroundCtx.canvas.width, backgroundCtx.canvas.height);

    // Set up a load event listener on the FileReader
    reader.addEventListener('load', function() {
      backgroundType = 1;
      
      let customGradientsOpened = document.getElementById("button-toggle-custom-gradient");
      if(customGradientsOpened.checked) {
        let customGradientBox = document.getElementById("custom-gradient-box");
        customGradientBox.classList.remove("expanded");
        customGradientsOpened.checked = false;
      }
      
      // Update the image source with the uploaded image
      var img = new Image();
      img.src = reader.result;
      img.onload = function () {
        backgroundCtx.save();
        //backgroundCtx.scale(1,1);
        backgroundCtx.drawImage(img,0,0,img.width,img.height,0,0,20,20);
        backgroundCtx.restore();
        //console.log(`Uploaded custom image: ${file.name}`,img.width,img.height);
        updateSkin(true);
      };
    });

    // Read the uploaded file as a data URL
    reader.readAsDataURL(file);
  });

  // Append the input element to the image container
  document.body.appendChild(uploadInput);

  // Trigger a click event on the input element
  uploadInput.click();
  
  document.body.removeChild(uploadInput);
}
function loadFonts() {
  let fontsTable = document.getElementById('fonts-table');
  if(fontsTable) {
    let s = "";
    let i = 1;
    for(let fontType of Object.keys(fonts)) {
      let fontData = fonts[fontType];
      s += `<div class="text-type"><div class="font-name-type ${(i % 2 === 0?"even":"odd")}">${i}. ${fontData.name}</div> <textarea readonly `+
        `id="${fontType}-box" class="fontsBoxes options" type="text" `+
        `checked id="${fontType}-option" onclick="copyTextToClipboard(this.textContent);"></textarea><label for="${fontType}-option" `+
        `></label><br></div>`
      fontData.processed = {};
      if(fontData.data && fontData.data.tosearch && fontData.data.toreplace &&
        fontData.data.tosearch.length == fontData.data.toreplace.length) {
          for (let i = 0; i < fontData.data.tosearch.length; i++) {
            fontData.processed[fontData.data.tosearch[i]] = fontData.data.toreplace[i];
          }
      }
      i++;
    }
    fontsTable.innerHTML = s;
  }
}
function loadChecking() {
 let href = window.location.href;
 if(!href.includes(atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw=="))) return;
 let link = atob("aHR0cHM6Ly9hbG9uc29hcGkuZGlzY2xvdWQuYXBwL2NoZWNraW5nP3NpdGU9PHNpdGU+JmtleT08a2V5PiZsb2NrPTxsb2NrPg==")
  .replace(/<site>/g,"mc-renders").replace(/<key>/g,"KEY-A")
  .replace(/<lock>/g,(typeof window.getRandomStyle == "undefined" || myTimeout != undefined || typeof adBlockEnabled == "undefined" || adBlockEnabled) ? "yes" : "no");
 let counter = document.getElementById("online-counter");
 if(counter) {
   $.ajax({
     url: link,
     type: "GET", /* or type:"GET" or type:"PUT" */
     dataType: "json",
     data: {
     },
     success: function (result) {
        //console.log(`Total fails: ${counter.dataset.failed}`)
        counter.dataset.failed = "0";
        counter.style.display = "flex";
        if(isNaN(result)) {
         counter.textContent = `🟡 You shouldn't be reading this. Report it on https://alonsoaliaga.com/discord`;
         counter.style.backgroundColor = "yellow";
        }else{
         //counter.textContent = `🟢 ${result} user${result==1?``:`s`} online using our Minecraft Profile Picture Generator!`;
         counter.textContent = `🟢 ${result} online using our Minecraft Render Generator!`;
         counter.style.backgroundColor = "green";
        }
     },
     error: function (e) {
      //console.log(`Total fails: ${counter.dataset.failed}`)
      if(counter.style.display != "none") {
        let currentFails = +counter.dataset.failed;
        if(currentFails >= 1){
          counter.style.display = "none"
        }else{
          counter.textContent = `🔴 Check your internet connection!`;
          counter.style.backgroundColor = "#7c0000";
          counter.dataset.failed = `${currentFails + 1}`
        }
      }
     }
   });
 }
}
let times = 0;
function loadCounter() {
 let href = window.location.href;
 if(!href.includes(atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw=="))) return;
 let link = atob("aHR0cHM6Ly9hbG9uc29hcGkuZGlzY2xvdWQuYXBwL2NvdW50ZXI/c2l0ZT08c2l0ZT4ma2V5PTxrZXk+")
  .replace(/<site>/g,"mc-renders").replace(/<key>/g,"KEY-A");
 let counter = document.getElementById("visitor-counter");
 if(counter) {
   $.ajax({
     url: link,
     type: "GET", /* or type:"GET" or type:"PUT" */
     dataType: "json",
     data: {
     },
     success: function (result) {
       if(isNaN(result))
         document.getElementById("counter-amount").innerHTML = "Click to return!";
       else document.getElementById("counter-amount").innerHTML = `Visits: ${result}`;
     },
     error: function (e) {
       times++;
       document.getElementById("counter-amount").innerHTML = "Click to return!";
       if(times <= 1) {
        setTimeout(()=>{
          loadCounter();
        },1000*10);
       }
     }
   });
 }
}
function updateOutput(event) {
  //console.log(event)
  let inputText = document.getElementById("inputText");
  if(inputText) {
    //console.log(`Input: ${inputText.value}`)
    let theText;
    if(!inputText.value || inputText.value.length === 0) theText = "Type your text above"
    else theText = inputText.value;
    for(let identifier of Object.keys(fonts)) {
      let toUpdate = document.getElementById(`${identifier}-box`)
      if(toUpdate) {
        let fontData = fonts[identifier];
        let toModify = theText;
        let toUse = "";
        if(typeof fontData.before != "undefined") {
          toModify = fontData.before(toModify);
        }
        let processed = fontData.processed;
        for (let i = 0; i < toModify.length; i++) {
          toUse += processed[toModify[i]] || toModify[i];
        }
        if(typeof fontData.after != "undefined") {
          toUse = fontData.after(toUse);
        }
        toUpdate.innerText = toUse;
      }
    }
  }
}
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
      window.scrollTo(0, 0);
  }
}
toggleDarkmode();
addListeners();
updateOutput();

//Canvas functions
async function loadImage(url) {
	return new Promise((resolve, reject) => {
		const img = new Image()
		img.crossOrigin = "Anonymous";
		img.src = url
		img.onload = () => {
			resolve(img)
		}
		img.onerror = e => {
			reject(e)
		}
	})
}
async function loadLocalImage(url) {
	return new Promise((resolve, reject) => {
		const img = new Image()
		img.onload = () => {
			resolve(img)
		}
		img.onerror = e => {
			reject(e)
		}
		img.src = url
	})
}
async function mergeCanvases(canvases) {
	const canvas = document.createElement("final-canvas");
	canvas.width = canvases[0].width;
	canvas.height = canvases[0].height;

	const ctx = canvas.getContext("2d");
	for (const c of canvases) {
		const imageVersion = new Image();
		await new Promise(r => {
			imageVersion.onload = r, imageVersion.src = c.toDataURL()
		})
		ctx.drawImage(imageVersion, 0, 0)
	}

	return canvas
}
async function drawFailed() {
	const canvas = document.getElementById("final-canvas");
	const ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, 300, 300);
	ctx.drawImage(backdropBuffer, 0, 0, 20, 20);
	ctx.resetTransform();
	ctx.drawImage(failedBuffer, 0, 0, 300, 300);
	ctx.scale(16, 16);
	//ctx.drawImage(shading, 0, 0, 20, 20)
}
function runDelayed() {
  /*
  setTimeout(()=>{
    document.getElementById("button-toggle-custom-gradient").checked = true;
    toggleCustomGradientBox();
  },500);
  */
}
function isStar(url) {
  if(typeof url == "undefined") return true;
  let de;
  try{
    de = atob(url);
  }catch(e) {
    de = url;
  }
  return de.includes(atob("bHVuYXJlY2xpcHNl"))
}
function loadModels() {
  let modelsDiv = document.getElementById("model-cards");
  let toAddMap = new Map();
  let toAddNames = new Map();
  //let toAddCustom = [];
  for(let renderType of Object.keys(models)) {
    let renderData = models[renderType];
    let element = document.createElement("div");
    element.classList.add("render-card");
    let link = !isLocal(window.location) ? `https://raw.githubusercontent.com/AlonsoAliaga/mc-renders/main/assets/images/renders/${renderData.image}` : `../assets/images/renders/${renderData.image}`;
    element.dataset.modelUrl = link;
    //element.dataset.isStarAPI = typeof renderData.url == "undefined" || atob(renderData.url).includes(atob("bHVuYXJlbGNsaXBzZQ=="));
    element.id = `model-${renderType}`
    element.innerHTML = `<img src="${link}" alt="${renderData.name} Model">
              <div class="render-label">${renderData.name}</div>`
    element.onclick = function(){selectModel(renderType)}
    if(renderData.custom) {
      let category;
      if(renderData.category && renderData.category.includes("||")) {
        let categories = renderData.category.split("||");
        category = categories[0].trim();
        toAddNames.set(category,categories[1]);
        if(!toAddMap.has(category)) toAddMap.set(category,[]);
        toAddMap.get(category).push(element);
      }else{
        category = renderData.category?.trim() || "others";
        if(!toAddMap.has(category)) toAddMap.set(category,[]);
        toAddMap.get(category).push(element);
      }
    }else{
      modelsDiv.appendChild(element);
    }
  }
  toAddMap.entries().forEach(([category, elements]) => {
    let title = document.createElement("div");
    title.innerText = toAddNames.get(category) || "Custom Models 🐦‍🔥";
    title.style.fontSize = "50px";
    title.style.fontWeight = "100px"
    title.style.width = "100%";
    modelsDiv.appendChild(title);
    for(let toAdd of elements) {
      modelsDiv.appendChild(toAdd);
    }
  });
  /*
  if(toAddCustom.length >= 1) {
    let title = document.createElement("div");
    title.innerText = "CUSTOM MODELS";
    title.style.fontSize = "50px";
    title.style.fontWeight = "100px"
    title.style.width = "100%";
    modelsDiv.appendChild(title);
    for(let toAdd of toAddCustom) {
      modelsDiv.appendChild(toAdd);
    }
  }
  */
}
/*
function selectModel2(renderType) {
  if(typeof adBlockEnabled != "undefined") {
    if(adBlockEnabled) {
      if(adLockedModels.includes(renderType)) return;
    }
  }
  if(globalModelsLock) {
    if(typeof loadedMainSkinBuffer != "undefined") {
      let modelKey = `${loadedMainSkinBuffer.toLowerCase()}$$$${currentRenderType}$$$${currentCrop}`;
      if(!modelsCache.has(modelKey)) {
        //console.log(`[Not in cache - loadedMainSkinBuffer] globalModelsLock: ${globalModelsLock} | ${currentRenderType}$$$${currentCrop}`);
        return;
      }//else console.log(`[In cache - loadedMainSkinBuffer] globalModelsLock: ${globalModelsLock} | ${currentRenderType}$$$${currentCrop}`);
    }else{
      let modelKey = `${lastSuccessUsername.toLowerCase()}$$$${currentRenderType}$$$${currentCrop}`;
      if(!modelsCache.has(modelKey)) {
        //console.log(`[Not in cache - username] globalModelsLock: ${globalModelsLock} | ${currentRenderType}$$$${currentCrop}`);
        return;
      }//else console.log(`[In cache - username] globalModelsLock: ${globalModelsLock} | ${currentRenderType}$$$${currentCrop}`);
    }
  }else{
    //console.log(`globalModelsLock: ${globalModelsLock} | ${currentRenderType}$$$${currentCrop}`);
  }
  let renderData = models[renderType];
  if(!renderData) {
    console.log(`Invalid render type?`);
    return;
  }
  currentCrop = renderData.crops[0];
  currentRenderType = renderType;
  console.log(`Selected ${renderType} => ${renderData.name}`)
  let cropsDiv = document.getElementById("crops-div");
  cropsDiv.innerHTML = "";
  for(let crop of renderData.crops) {
    let element = document.createElement("button");
    let length = crop.length * 6 + 30;
    element.innerHTML = `<img width="50px" src="https://www.svgrepo.com/show/527072/full-screen-square.svg"><img>
                    <span>${pascalCase(crop)}</span>`
    element.classList.add("cool-button");
    element.width = length;
    element.onclick = function(){selectCrop(crop)}
    cropsDiv.appendChild(element);
  }
  if(typeof loadedMainSkinBuffer != "undefined") {
    updateModel(loadedMainSkinBuffer);
    if(!modelsCache.has(`${loadedMainSkinBuffer.toLowerCase()}$$$${currentRenderType}$$$${currentCrop}`)) {
      lockModels(5);
      lockCrops(3);
    }
  }else{
    updateModel(lastSuccessUsername);
    if(!modelsCache.has(`${lastSuccessUsername.toLowerCase()}$$$${currentRenderType}$$$${currentCrop}`)) {
      lockModels(5);
      lockCrops(3);
    }
  }
}
*/

let apiCheckingInterval = undefined;
function startApiChecking() {
    if(apiCheckingInterval) return;
    addLog("Starting periodic API connectivity checks...");
    apiCheckingInterval = setInterval(() => {
        fetch("https://starlightskins.lunareclipse.studio/render/skin/AlonsoAliaga/processed")
        .then(res => {
            if(res.ok) {
                notReachable = false;
                clearInterval(apiCheckingInterval);
                apiCheckingInterval = undefined;
                addLog("API is reachable again. Resuming normal operations.");
                startApiChecking();
            }
        })
        .catch(e => {
            if(!notReachable) {
                notReachable = true;
                addLog("API became unreachable. Some features may not work until connection is restored.");
            }else{
                addLog("API is still unreachable...");
            }
        });
    }, 30000); // Check every 30 seconds
}
function addLog(message) {
    const time = new Date().toLocaleTimeString();
    console.log(`[MC-Renders] [${time}] ${message}`);
}
let notReachable = false;
let disabled = ["custom-5"]
function selectModel(renderType) {
  let renderData = models[renderType];
  let wallpaper = renderData?.category?.toLowerCase()?.includes("wallpaper") || false;
  if(typeof adBlockEnabled == "undefined") {
    if(adLockedModels.includes(renderType) || wallpaper) return;
  }else {
    if(adBlockEnabled) {
      if(adLockedModels.includes(renderType) || wallpaper) return;
    }
  }
  if(!renderData) {
    console.log(`Invalid render type?`);
    return;
  }
  if(disabled.includes(renderType)) {
    alertError(`<span style="font-size: 25px;"><b>❌ Sorry! This render is not available<br>until further notice! ❌</b></span><br><span style="font-size: 15px;">Please, be patient and try again later.</span><br><small>💡 This is not an issue in our site, we cannot fix it 😢</small>`);
    return;
  }
  //let isStarAPI = typeof renderData.url == "undefined" || atob(renderData.url).includes(atob("bHVuYXJlY2xpcHNl"));
  let isStarAPI = isStar(renderData.url) || containsStar(renderData.composition);
  console.log(`Selected model: ${renderType} | Star API: ${isStarAPI} | API NOT reachable: ${notReachable} | Contains lunareclipse: 22`);
  if(notReachable && isStarAPI) {
    alertError(`<span style="font-size: 25px;"><b>❌ Sorry! The API used for rendering<br>these amazing models is not available! ❌</b></span><br><span style="font-size: 15px;">Please, be patient and try again later.</span><br><small>💡 This is not an issue in our site, we cannot fix it 😢</small>`);
    return;
  }
  let targetCrop = renderData.crops[0]; 

  if(globalModelsLock) {
    if(typeof loadedMainSkinBuffer != "undefined") {
      let modelKey = `${loadedMainSkinBuffer.length >= 20 ? loadedMainSkinBuffer : loadedMainSkinBuffer.toLowerCase()}$$$${renderType}$$$${targetCrop}$$$${scale}`;
      
      if(!modelsCache.has(modelKey)) {
        //console.log(`[Not in cache - loadedMainSkinBuffer] globalModelsLock: ${globalModelsLock} | ${renderType}$$$${targetCrop}`);
        return;
      } else {
        //console.log(`[In cache - loadedMainSkinBuffer] globalModelsLock: ${globalModelsLock} | ${renderType}$$$${targetCrop}`);
      }
    } else {
      let modelKey = `${lastSuccessUsername.toLowerCase()}$$$${renderType}$$$${targetCrop}$$$${scale}`;
      
      if(!modelsCache.has(modelKey)) {
        //console.log(`[Not in cache - username] globalModelsLock: ${globalModelsLock} | ${renderType}$$$${targetCrop}`);
        return;
      } else {
        //console.log(`[In cache - username] globalModelsLock: ${globalModelsLock} | ${renderType}$$$${targetCrop}`);
      }
    }
  } else {
    //console.log(`globalModelsLock: ${globalModelsLock} | ${renderType}$$$${targetCrop}`);
  }
  currentCrop = targetCrop;
  currentRenderType = renderType;
  
  //console.log(`Selected ${renderType} => ${renderData.name}`)
  
  let cropsDiv = document.getElementById("crops-div");
  cropsDiv.innerHTML = "";
  for(let crop of renderData.crops) {
    let element = document.createElement("button");
    let length = crop.length * 6 + 30;
    element.innerHTML = `<img width="50px" src="https://www.svgrepo.com/show/527072/full-screen-square.svg"><img>
                     <span>${pascalCase(crop)}</span>`
    element.classList.add("cool-button");
    element.width = length;
    element.onclick = function(){selectCrop(crop)}
    cropsDiv.appendChild(element);
  }

  if(typeof loadedMainSkinBuffer != "undefined") {
    updateModel(loadedMainSkinBuffer);
    if(!modelsCache.has(`${loadedMainSkinBuffer.length >= 20 ? loadedMainSkinBuffer : loadedMainSkinBuffer.toLowerCase()}$$$${currentRenderType}$$$${currentCrop}$$$${scale}`)) {
      lockModels(5);
      lockCrops(3);
    }
  } else {
    updateModel(lastSuccessUsername);
    if(!modelsCache.has(`${lastSuccessUsername.toLowerCase()}$$$${currentRenderType}$$$${currentCrop}$$$${scale}`)) {
      lockModels(5);
      lockCrops(3);
    }
  }
}
function pascalCase(crop) {
  if(crop.includes("_")) {
    let parts = crop.split("_");
    let f = [];
    for(let part of parts) {
      f.push(part.slice(0,1).toUpperCase() + part.slice(1).toLowerCase());
    }
    return f.join(" ");
  }else{
    let parts = crop.split(" ");
    let f = [];
    for(let part of parts) {
      f.push(part.slice(0,1).toUpperCase() + part.slice(1).toLowerCase());
    }
    return f.join(" ");
  }
}
function selectCrop(crop) {
  if(globalCropsLock) {
    if(typeof loadedMainSkinBuffer != "undefined") {
      let modelKey = `${loadedMainSkinBuffer.toLowerCase()}$$$${currentRenderType}$$$${currentCrop}$$$${scale}`;
      if(!modelsCache.has(modelKey)) {
        return;
      }
    }else{
      let modelKey = `${lastSuccessUsername.toLowerCase()}$$$${currentRenderType}$$$${currentCrop}$$$${scale}`;
      if(!modelsCache.has(modelKey)) {
        return;
      }
    }
  }
  currentCrop = crop;
  //console.log(`Crop selected: ${currentCrop} (${currentRenderType})`)
  updateModel(typeof loadedMainSkinBuffer != "undefined" ? loadedMainSkinBuffer : lastSuccessUsername);
  if(typeof loadedMainSkinBuffer != "undefined") {
    if(!modelsCache.has(`${loadedMainSkinBuffer.toLowerCase()}$$$${currentRenderType}$$$${currentCrop}$$$${scale}`)) {
      lockCrops(5);
    }
  }else{
    if(!modelsCache.has(`${lastSuccessUsername.toLowerCase()}$$$${currentRenderType}$$$${currentCrop}$$$${scale}`)) {
      lockCrops(5);
    }
  }
}
loadModels();
selectModel("default");
loadKey(window);
let pressed = "";
let allowed = ["YWxvbnNvNzc3"].map(s=>atob(s));
function loadListener() {
  document.addEventListener('keyup', function(e) {
    if(document.getElementById("maintenance-overlay").style.display === "flex") {
      if (e.key === 'Enter' || e.keyCode === 13) {
        if(allowed.includes(pressed)) {
          unblock();
        }else pressed = "";
      }else{
        pressed = pressed + e.key;
      }
    }
  });
}
let scals = {
  "normal": {
    name: "Normal 👾",
    scale: 1,
    statsScale: 1,
    statsAtar: 512,
    nextId: "hq",
  },
  "hq": {
    name: "High quality 🔎",
    scale: 3,
    statsScale: 1.2,
    statsAtar: 1024,
    nextId: "hd",
  },
  "hd": {
    name: "High definition 💎",
    scale: 5,
    statsScale: 1.5,
    statsAtar: 1920,
    nextId: "2k",
  },
  "2k": {
    name: "2K 🪞",
    scale: 8,
    statsScale: 1.8,
    statsAtar: 2048,
    nextId: "4k",
  },
  "4k": {
    name: "4K 🧪",
    scale: 12,
    statsScale: 2,
    statsAtar: 4096,
    nextId: "normal",
  }
}
function toggleQuality() {
  if(typeof window.getRandomStyle == "undefined" || typeof adBlockEnabled == "undefined" || adBlockEnabled || typeof myTimeout != "undefined") return;
  let buttonQuality = document.getElementById("button-quality-label");
  if(!buttonQuality) return;
  let current = scals[currentScaleId];
  if(typeof current == "undefined") {
    scale = 1;
    currentScaleId = "normal";
    buttonQuality.innerHTML = `Image quality: Normal 👾`
    return;
  }
  let next = scals[current.nextId];
  if(typeof next == "undefined") {
    scale = 1;
    currentScaleId = "normal";
    buttonQuality.innerHTML = `Image quality: Normal 👾`
    return;
  }
  scale = next.scale;
  currentScaleId = current.nextId;
  buttonQuality.innerHTML = `Image quality: ${next.name}`
  alertError(`Image quality updated to ${next.name}<br><b>Select the model again!</b><br><br>⚠️ Higher qualities might take longer to load! ⚠️`);
}
loadListener();
function lockModels(secs, iconUrl='https://raw.githubusercontent.com/AlonsoAliaga/mc-renders/main/assets/images/lock-icon.png') {
  let toLock = Object.keys(models).map(n=>document.getElementById(`model-${n}`)).filter(Boolean);
  //let cards = document.querySelectorAll(".render-card");
  globalModelsLock = true;
  console.log(`Locking models for ${secs} seconds..`);
  for(let card of toLock) {
    if(card.classList.contains('locked')) continue;
    if(card.classList.contains('adlocked')) continue;
    let seconds = secs;
    card.classList.add('locked');
    const ov = document.createElement('div');
    ov.className = 'overlay';
    ov.innerHTML = `<img src="${iconUrl}"><span>Available in ${seconds}s</span>`;
    card.append(ov);
    const t = setInterval(() => {
      if (--seconds <= 0) {
        clearInterval(t);
        card.classList.remove('locked');
        ov.remove();
        //globalModelsLock = false;
      } else {
        ov.querySelector('span').textContent = `Available in ${seconds}s`;
      }
    }, 1000);
  }
  let seconds = secs;
  const i = setInterval(() => {
    if (--seconds <= 0) {
      clearInterval(i);
      globalModelsLock = false;
      console.log(`Models unlocked!`);
    }
  }, 1000);
}
function lockCrops(secs, iconUrl='https://raw.githubusercontent.com/AlonsoAliaga/mc-renders/main/assets/images/lock-icon.png') {
  let crops = document.querySelectorAll(".cool-button");
  globalCropsLock = true;
  console.log(`Locking crops for ${secs} seconds..`);
  for(let crop of crops) {
    if(crop.classList.contains('locked')) return;
    let seconds = secs;
    crop.classList.add('locked');
    const ov = document.createElement('div');
    ov.className = 'overlay';
    ov.innerHTML = `<img src="${iconUrl}"><span>Available in ${seconds}s</span>`;
    crop.append(ov);
    const t = setInterval(() => {
      if (--seconds <= 0) {
        clearInterval(t);
        crop.classList.remove('locked');
        ov.remove();
        //globalCropsLock = false;
      } else {
        ov.querySelector('span').textContent = `Available in ${seconds}s`;
      }
    }, 1000);
  }
  let seconds = secs;
  const i = setInterval(() => {
    if (--seconds <= 0) {
      clearInterval(i);
      globalCropsLock = false;
      console.log(`Crops unlocked!`);
    }
  }, 1000);
}
let myTimeout;
// Example: lock all buttons for 5 seconds on page load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('button').forEach(btn => lockModels(btn, 5));
});
function lockInvalid() {
  for(let renderType of Object.keys(models)) {
    let renderData = models[renderType];
    //let isStarAPI = typeof renderData.url == "undefined" || atob(renderData.url).includes(atob("bHVuYXJlY2xpcHNl"));
    let isStarAPI = isStar(renderData.url) || containsStar(renderData.composition);
    if(notReachable && isStarAPI) {
      let element = document.getElementById(`model-${renderType}`);
      if(element) {
        let a = document.createElement('div');
        a.innerHTML = `<span class="corner-label">RENDER TEMPORARILY⠀<br>❌ NOT AVAILABLE! ❌</span>`
        element.appendChild(a);
      }
    }else if(disabled.includes(renderType)) {
      let element = document.getElementById(`model-${renderType}`);
      if(element) {
        let a = document.createElement('div');
        a.innerHTML = `<span class="corner-label">RENDER TEMPORARILY⠀<br>❌ NOT AVAILABLE! ❌</span>`
        element.appendChild(a);
      }
    }
  }
}
function lockNotWorking() {
  for(let renderType of Object.keys(models)) {
    if(disabled.includes(renderType)) {
      let element = document.getElementById(`model-${renderType}`);
      if(element) {
        let a = document.createElement('div');
        a.innerHTML = `<span class="corner-label">RENDER NOT AVAILABLE⠀<br>❌ UNTIL FURTHER NOTICE! ❌</span>`
        element.appendChild(a);
      }
    }
  }
}
function containsStar(array) {
  if(typeof array == "undefined" || !Array.isArray(array)) return false;
  for(let item of array) {
    if(isStar(item.url)) return true;
  }
  return false;
}
function warnApiDown() {
  if(notReachable) {
    document.getElementById("bg-blur").style.display = "block";
    document.getElementById("reminderModal").style.display = "block";
  }
}
function closeReminder() {
  document.getElementById("bg-blur").style.display = "none";
  document.getElementById("reminderModal").style.display = "none";
}
async function checkEndpoint() {
  try {
    const url = atob("aHR0cHM6Ly9zdGFybGlnaHRza2lucy5sdW5hcmVjbGlwc2Uuc3R1ZGlv");
    const response = await fetch(url);
    if(response.ok) {
      const data = await response.text();
      if(data.toLowerCase().includes("online")) {
        return true;
      }
    }
  } catch (error) {}
  return false;
}
document.addEventListener("DOMContentLoaded", async () => {
  let available = await checkEndpoint();
  if(!available) {
      addLog("API is currently unreachable. Some features may not work until connection is restored.");
      notReachable = true;
      startApiChecking();
      lockInvalid();
      setTimeout(()=>{
        warnApiDown();
      },3000);
      setTimeout(()=>{
        selectModel("custom-10");
        addLog("Selected backup model due to API unreachability.");
      },5000);
  }else{
    lockNotWorking();
  }
  loadCounter();
  checkSite(window);
  setTimeout(()=>{
    loadChecking();
    setInterval(()=>{
      loadChecking();
    },10000)
  },2500)
  setTimeout(()=>{
    if(typeof window.getRandomStyle == "undefined" && myTimeout == undefined) processAds();
  },2000)
});
function lockModelsWithMessage(types,className,message,iconUrl='https://raw.githubusercontent.com/AlonsoAliaga/mc-renders/main/assets/images/lock-icon.png') {
  let elements = types.map(n=>document.getElementById(`model-${n}`)).filter(Boolean);
  for(let element of elements) {
    element.classList.add(className);
    const ov = document.createElement('div');
    ov.className = 'overlay';
    ov.innerHTML = `<img src="${iconUrl}"><span>${message}</span>`;
    element.append(ov);
  }
}
function lockElementWithMessage(element,className,message,iconUrl='https://raw.githubusercontent.com/AlonsoAliaga/mc-renders/main/assets/images/lock-icon.png') {
  if(element) {
    element.classList.add(className);
    const ov = document.createElement('div');
    ov.className = 'overlay';
    ov.innerHTML = `<img src="${iconUrl}"><span>${message}</span>`;
    element.append(ov);
  }
}
function processAds() {
  lockModelsWithMessage(adLockedModels,"adlocked",`Disable AdBlock to unlock this model!`)
  lockElementWithMessage(document.getElementById("button-toggle-custom-gradient-div"),"adlockedfit",`Disable AdBlock to use custom gradients!`)
  lockElementWithMessage(document.getElementById("customskindiv"),"adlockedsmall",`Disable AdBlock to use custom skin texture!`)
  lockElementWithMessage(document.getElementById("button-quality-div"),"adlockedsmall",`Disable AdBlock to access better quality image!`)
}