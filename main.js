import { en } from "./js/en.js";
import { es } from "./js/es.js";
import { fr } from "./js/fr.js";
import { refs } from "./js/refs.js";
const {
  main_text: {
    main_baner_text,
    the_best_text,
    the_best_text2,
    buy_text,
    order,
    count_item,
    item_price,
    body,
  },
  btn: {
    btn_en,
    btn_es,
    btn_fr,
    btn_become,
    btn_best,
    btn_learn,
    btn_close,
    btn_buy,
    minus,
    plus,
  },
  nav: { nav_brands, nav_contact, nav_who },
  oreder_item,
  addItem,
} = refs;
function language(lang) {
  main_baner_text.textContent = lang.main_baner_text;
  the_best_text.textContent = lang.the_best_text;
  the_best_text2.textContent = lang.the_best_text2;
  btn_become.textContent = lang.btn_become;
  btn_best.textContent = lang.btn_best;
  btn_learn.textContent = lang.btn_learn;
  nav_brands.textContent = lang.nav_brands;
  nav_contact.textContent = lang.nav_contact;
  nav_who.textContent = lang.nav_who;
}
const button = { btn_en, btn_es, btn_fr };
const laguage = { en, es, fr };
Object.keys(button).forEach((btnKey) => {
  button[btnKey].addEventListener("click", (e) => {
    const langCod = btnKey.split("_")[1];
    language(laguage[langCod]);
    Object.keys(button).forEach((btnKey) => {
      button[btnKey].classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
nav_brands.addEventListener("click", () => {
  order.classList.remove("unactive");
  body.classList.add("block");
});
btn_close.addEventListener("click", () => {
  order.classList.add("unactive");
});
btn_buy.addEventListener("click", () => {
  order.classList.add("unactive");
});
buy_text.addEventListener("click", () => {
  order.classList.add("unactive");
});

let count = 1;
let price = 23000;
let totalPrice = price;
count_item.textContent = count;
item_price.textContent = totalPrice;
addItem.addEventListener("click", () => {
  addItem.classList.add("unactive");
  oreder_item.classList.remove("unactive");
  btn_buy.classList.remove("unactive");
  count_item.textContent = 1;
  item_price.textContent = 23000;
});
plus.addEventListener("click", () => {
  count++;
  totalPrice += price;
  count_item.textContent = count;
  item_price.textContent = totalPrice;
});
minus.addEventListener("click", () => {
  if (count > 0) {
    count--;
    totalPrice -= price;
    count_item.textContent = count;
    item_price.textContent = totalPrice;
  }
  if (count <= 0) {
    oreder_item.classList.add("unactive");
    btn_buy.classList.add("unactive");
    addItem.classList.remove("unactive");
  }
});
