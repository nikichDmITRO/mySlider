const containerImg = document.querySelector(".container-img");
const next = document.querySelector(".next");
const prew = document.querySelector(".prew");
const containerImgIm = document.querySelectorAll(".img");
const container = document.querySelector(".container");

let leng = 0;
let child = containerImg.children.length;
let widtha = container.clientWidth;
let numberOf = 1;
let widthImg = widtha / numberOf;
let childMin = child;

for (let i = 0; i < child; i++) {
  containerImgIm[i].style["min-width"] = widthImg + "px";
  console.log("test");
}
let { width } = containerImgIm[0].getBoundingClientRect();
next.addEventListener("click", () => {
  if (childMin > numberOf) {
    let lengNew = leng - width;
    containerImg.style.left = lengNew + "px";
    leng = lengNew;
    childMin -= 1;
  } else {
    leng = 0;
    containerImg.style.left = leng + "px";
    childMin = child;
  }
});
prew.addEventListener("click", () => {
  if (parseInt(containerImg.style.left)) {
    let lengNew = leng + width;
    containerImg.style.left = lengNew + "px";
    leng = lengNew;
    childMin += 1;
  } else {
    let lengNew = leng - width * (child - numberOf);

    containerImg.style.left = lengNew + "px";

    leng = lengNew;
    childMin = numberOf;
  }
});


