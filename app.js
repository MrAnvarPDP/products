let products = [
  {
    name: "Iphone 15 pro max",
    price: 1200,
    poster:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTuDzuW4oLkW2qp5T4AKtretTo0zUVuFes3lRGDEHHjnSjg2ND6tdFaBoiI6XA3kyyLfymZARpcetDb6BL9H1rDJhHpGMpfoVAipyk1fjF0WAGbVM-OnlddOg_gtvyXwgY3SEdytJ8EGAM&usqp=CAc",
  },

  {
    name: "Iphone XR",
    price: 700,
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3nl-YDd8L3eb0MkS-ECahs6g_9ruJC1LSRPB-191QVqmDXMtUfyJ6eHJHXg40zneheI&usqp=CAU",
  },
  {
    name: "iMac",
    price: 1800,
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdo73h5vAG2Zl8sO7-ocw5JRqMXTuvAu8M-Q&s",
  },
  {
    name: "Ipad Mini 9",
    price: 3000,
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDezF_77vkg_HdnBMf6_sccpQZRYfUdom7fQ&s",
  },
  {
    name: "Ipad Air",
    price: 1000,
    poster:
      "https://olcha.uz/image/400x400/products/2022-08-12/apple-ipad-air-5-m1-5g-98566-0.jpeg",
  },
  {
    name: "IPAD M4",
    price: 3000,
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkWqmodno-qmolV8_yzpyjMBq0eDB2KaQYw&s",
  },
  {
    name: "Apple pancil",
    price: 150,
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl4UWOy9xzmR8hyrVuuPJgIU34H-LNBtEcQ&s",
  },
  {
    name: "Apple watch",
    price: 400,
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhowmMOQvCrcDhEpnu-cH9dtC9WSuwrKafWA&s",
  },
  {
    name: "Air pots Max",
    price: 500,
    poster:
      "data:image/webp;base64,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",
  },
  {
    name: "Samsung",
    price: 400,
    poster:
      "https://images.samsung.com/is/image/samsung/p6pim/uz_ru/sm-a346elgaskz/gallery/uz-ru-galaxy-a34-5g-sm-a346-sm-a346elgaskz-536204479?$650_519_PNG$",
  },
  {
    name: "Samsung S24",
    price: 1100,
    poster:
      "https://images.samsung.com/is/image/samsung/p6pim/ph/2401/gallery/ph-galaxy-s24-s928-sm-s928bztqphl-thumb-539303751",
  },
  {
    name: "Samsung pots",
    price: 300,
    poster:
      "https://tovar.uz/images/company/1281/tovar/42984/o_5f93f296f2761.jpg",
  },
  {
    name: "Samsung book",
    price: 2000,
    poster:
      "https://olcha.uz/image/400x400/products/O2WzXMZK6bcaaKID1nX0f1CC94QzJxYX1ZU0DGornFlp3zSumUaLjmL73RRk.jpg",
  },
  {
    name: "Honor",
    price: 500,
    poster:
      "https://assets.asaxiy.uz/product/items/desktop/9ff181c0b7c5047488051e8f2922b3fc20240108140103836202wTPeJFjWD.png.webp",
  },
  {
    name: "Redmi Titanium",
    price: 600,
    poster:
      "https://img.myipadbox.com/upload/store/detail_l/EDA005863601A_1.jpg",
  },
  {
    name: "Nokia",
    price: 50,
    poster:
      "https://e7.pngegg.com/pngimages/352/534/png-clipart-nokia-3310-2017-nokia-130-nokia-phone-series-nokia-e75-smartphone-electronics-gadget.png",
  },
];

const elForm = document.querySelector(".form");
const elInput = document.querySelector(".max-price");
const elList = document.querySelector(".products");
const elInputName = document.querySelector(".product-name");
elForm.onsubmit = (evt) => {
  evt.preventDefault();
  console.log(elInput.value);
  let filteredArray = products.filter((el) => el.price <= elInput.value);
  console.log(filteredArray);
  render(filteredArray, elList);
};
function render(array, list) {
  list.innerHTML = "";
  for (let item of array) {
    list.innerHTML += `<li class="products-item">
    <img class="imgs" src="${item.poster}" alt="">
<h3 class="products-title">${item.name}</h3>
<mark class="products-price">${item.price + "$"}</mark>
</li>`;
  }
}

render(products, elList);

const elSelect = document.querySelector(".js-select");

elSelect.addEventListener("change", () => {
  console.log(elSelect.value);

  if (elSelect.value == "max-price") {
    products.sort((a, b) => b.price - a.price);
    render(products, elList);
  }
  if (elSelect.value == "min-price") {
    products.sort((b, a) => b.price - a.price);
    render(products, elList);
  }
});
