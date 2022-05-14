let hamBtn = document.getElementById("hamburger");
let hamMenu = document.getElementById("hamburger-menu");

let handleClick = () => {
  console.log(hamMenu);
  if (hamMenu.style.display == "none") {
    hamMenu.style.display = "block";
  } else {
    hamMenu.style.display = "none";
  }
};
