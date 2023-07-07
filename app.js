let productsCountEL = document.getElementById("products-count");
console.log(productsCountEL);

let addToCartBtns = document.querySelectorAll(".btn-add-to-car");
console.log(addToCartBtns);

addToCartBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    productsCountEL.textContent = +productsCountEL.textContent + 1;
  })
);

let addLikeToDevice = document.querySelectorAll(".like-script");
console.log(addLikeToDevice);

function changeLike() {
  if (this.style.backgroundImage === 'url("images/like-white.png")') {
    this.style.backgroundImage = 'url("images/like-blue.png")';
    this.style.borderColor = "blue";
  } else {
    this.style.backgroundImage = 'url("images/like-white.png")';
    this.style.borderColor = "white";
  }
}

addLikeToDevice.forEach(function (element) {
  element.addEventListener("click", changeLike);
});

// addLikeToDevice.forEach((like) =>
//   like.addEventListener("click", function () {
//     like = addLikeToDevice.setAttribute(
//       "background-image",
//       'url("images/like-white.png")'
//     );
//   })
// );
