const img_back = document.querySelector(".backgnd-img");

function changebackground() {
  const images = [
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img4.jpeg",
    "img5.jpeg",
    "img6.jpeg",
    "img7.jpeg",
  ];

  const randImg = images[Math.floor(Math.random() * images.length)];
  console.log(randImg);
  img_back.src = randImg;
}

// setInterval(changebackground, 3000);
