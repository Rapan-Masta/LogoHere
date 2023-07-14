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

// ----------------------

let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let inputFields = document.querySelectorAll(".product-quantity");

function Counter(incrementBtn, decrementBtn, inputField) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };

  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  };

  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  };

  this.toggleButtonState = function () {
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= 1;
    this.domRefs.incrementBtn.disabled = count >= 10;
  };

  this.domRefs.incrementBtn.addEventListener(
    "click",
    this.increment.bind(this)
  );

  this.domRefs.decrementBtn.addEventListener(
    "click",
    this.decrement.bind(this)
  );

  this.toggleButtonState();
}

for (let i = 0; i < decrementBtns.length; i++) {
  let counter = new Counter(incrementBtns[i], decrementBtns[i], inputFields[i]);
}
