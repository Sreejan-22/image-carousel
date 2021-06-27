let currentIndex = 0;
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const carouselImg = document.querySelector(".carousel-img");
const carouselNavigators = document.querySelector(".carousel-navigators");

leftArrow.style.stroke = "white";
leftArrow.setAttribute("fill", "white");

function runAfterEveryImageChange(index) {
  carouselImg.setAttribute("src", imgArr[index]);

  leftArrow.style.stroke = index <= 0 ? "white" : "black";
  leftArrow.setAttribute("fill", index <= 0 ? "white" : "black");

  rightArrow.style.stroke = index >= 3 ? "white" : "black";
  rightArrow.setAttribute("fill", index >= 3 ? "white" : "black");
  let str = ``;
  for (let i = 0; i <= 3; i++) {
    if (i == index) {
      str += filledCircle;
    } else {
      str += outlineCircle;
    }
  }
  carouselNavigators.innerHTML = str;
}

rightArrow.addEventListener("click", (e) => {
  if (currentIndex < 3) {
    currentIndex += 1;
    // carouselImg.style.transform = "translateX(100%)";
    runAfterEveryImageChange(currentIndex);
  }
});

leftArrow.addEventListener("click", (e) => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    runAfterEveryImageChange(currentIndex);
  }
});
