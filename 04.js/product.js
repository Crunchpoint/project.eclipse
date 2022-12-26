let data = [
  { url: "../01.img/mints_grape.png", title: "MINTS GRAPE" },
  { url: "../01.img/mints_intense.png", title: "MINTS INTENSE" },
  { url: "../01.img/mints_orange.png", title: "MINTS ORANGE" },
  { url: "../01.img/mints_peppermint.png", title: "MINTS PEPPERMINT" },
  { url: "../01.img/mints_spearmint.png", title: "MINTS SPEARMINT" },
  { url: "../01.img/mints_strawberry.png", title: "MINTS STRAWBERRY" },
  { url: "../01.img/plus_comfort.png", title: "MINTS COMFORT" },
  { url: "../01.img/plus_release.png", title: "MINTS RELEASE" },
];

const IMG = document.querySelectorAll(".cont div");
const MAINITEM = document.querySelector(".main-item");

IMG.forEach(function (v, key) {
  v.addEventListener("click", function () {
    MAINITEM.innerHTML = `
    <h2>${data[key].title}</h2>
    <div class="item-img">
        <img src="${data[key].url}" alt="">
    </div>`;
  });
});

const CONTAINER = document.querySelector(".item-img");
const ZOOMIMG = document.querySelector(".item-img img");

ZOOMIMG.addEventListener("mousemove", function () {
  
});

// CONTAINER.addEventListener("mousemove", function (e) {
//   const x = e.clientX - e.target.offsetLeft;
//   const y = e.clientY - e.target.offsetTop;

//   ZOOMIMG.style.transformOrigin = `${x}px ${y}px`;
//   ZOOMIMG.style.transform = "scale(2)";
// });

// CONTAINER.addEventListener("mouseleave", function () {
//   ZOOMIMG.style.transformOrigin = "center center";
//   ZOOMIMG.style.transform = "scale(1)";
// });


