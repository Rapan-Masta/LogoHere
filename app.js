// Лічільник покупок
let productsCountEL = document.getElementById("products-count");

let addToCartBtns = document.querySelectorAll(".btn-add-to-car");

addToCartBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    productsCountEL.textContent = +productsCountEL.textContent + 1;
  })
);

// Відображення лайку при натиску на кнопку лайк

let addLikeToDevice = document.querySelectorAll(".like");
console.log(addLikeToDevice);

// addLikeToDevice.forEach((btn) =>
//   btn.addEventListener("click", function () {
//     if (btn.classList.contains("liked")) {
//       btn.classList.contains("liked");
//       btn.classList.remove("liked");
//     } else {
//       btn.classList.add("liked");
//     }
//   })
// );

addLikeToDevice.forEach((btn) =>
  btn.addEventListener("click", function () {
    btn.classList.toggle("liked");
  })
);

// Відкриття форми для кнопки More detail

let btnMoreDetails = document.querySelectorAll(".btn-more-details");

let modal = document.querySelector(".modal");

btnMoreDetails.forEach((btn) =>
  btn.addEventListener("click", function () {
    modal.classList.remove("hide");
    modal.classList.add("show");
  })
);

let modalClose = document.querySelector(".btn-close");

modalClose.addEventListener("click", function () {
  modal.classList.remove("show");
  modal.classList.add("hide");
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.remove("show");
    modal.classList.add("hide");
  }
});

// ------slider-------

$(".slider").slick({
  dots: true,
});
