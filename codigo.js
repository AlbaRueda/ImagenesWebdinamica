var myPicture1 = new Array();
myPicture1.push("cuadroAlba1.jpg");
myPicture1.push("CuadroAlba2.jpg");
myPicture1.push("CuadroAlba3.jpg");
myPicture1.push("CuadroAlba4.jpg");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function pickimg2() {
  document.randimg.src = myPicture1[getRandomInt(0, myPicture1.length - 1)];
}
