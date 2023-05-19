const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");
const getImage = async function () {
  res = await fetch("https://picsum.photos/v2/list?limit=100");
  const images = await JSON();
  console.log(images);
};
console.log(getImage);
