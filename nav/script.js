function handleTabletChange(e) {
  if (e.matches) {
    document.querySelectorAll(".active").forEach((e) => {
      e.classList.remove("active");
    });
    document.querySelector(".nav").style.display = "none";
  } else {
    document.querySelector(".nav").style.display = "flex";
  }
}
window.matchMedia("(max-width: 850px)").addListener(handleTabletChange);
handleTabletChange(window.matchMedia("(max-width: 850px)"));

function toggleDrop() {
  let eventElement = event.srcElement;
  let dropList = event.srcElement.nextElementSibling;
  eventElement.classList.toggle("active");
  dropList.classList.toggle("active");
  if (dropList.classList[1] === "active") {
    eventElement.children[0].classList.add("active");
  } else {
    eventElement.children[0].classList.remove("active");
  }
}

function toggleMenu() {
  let burger = document.querySelector(".fas.fa-bars");
  let menu = document.querySelector(".nav");
  burger.classList.toggle("active");
  if (burger.classList[2] === "active") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}
