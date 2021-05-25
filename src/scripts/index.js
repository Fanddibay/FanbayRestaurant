import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";

const hamburgerButton = document.querySelector("#hamburger");
const drawerElement = document.querySelector("#drawer");
const mainElement = document.querySelector("main");

hamburgerButton.addEventListener("click", (event) => {
  drawerElement.classList.toggle("open");
  event.stopPropagation();
});

mainElement.addEventListener("click", (event) => {
  drawerElement.classList.remove("open");
  event.stopPropagation();
});

const buttonDarkTheme = document.querySelector("#darkTheme");
const mainDarkTheme = document.querySelector("main");
const ourShop = document.querySelector("#explore__shop");
const mainTitle = document.querySelector("#main__h2");
const menuShop = document.querySelector("#about");
const drawer = document.querySelector("#drawer");
const header = document.querySelector("#header__logo");
const body = document.querySelector("body");

buttonDarkTheme.addEventListener("click", (event) => {
  mainDarkTheme.classList.toggle("close");
  ourShop.classList.toggle("explore__menu");
  mainTitle.classList.toggle("__h1");
  menuShop.classList.toggle("menuShop__dark");
  drawer.classList.toggle("explore__menu");
  header.classList.toggle("explore__menu");
  body.classList.toggle("menuShop__dark");
  event.stopPropagation();
});
