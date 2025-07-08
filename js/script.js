//Toogle class active
const navbarNav = document.querySelector(".navbar-nav");
//Ketika Humberger menu di klik//
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik Luar Side Bar untuk Close Nav Bar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
