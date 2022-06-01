const button = document.getElementById("add");
const paragraf = document.getElementById("p1");
// const button = document.getElementById("add2");
// const paragraf = document.getElementById("p2");

let tempId = 2;
button.onclick = function () {
  const parent = document.getElementById("wrapper");
  let clonedElement = paragraf.cloneNode(true);
  clonedElement.id = "p"+tempId;
  parent.append(clonedElement);
  ++tempId;
};

// let tempId = 3;
// button.onclick = function () {
//   const parent = document.getElementById("wrapper");
//   let clonedElement = paragraf.cloneNode(true);
//   clonedElement.id = "p2"+tempId;
//   parent.append(clonedElement);
//   ++tempId;
// };