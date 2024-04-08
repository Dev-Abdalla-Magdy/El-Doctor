document.addEventListener("DOMContentLoaded", function () {
  const linksMenu = document.querySelector(".links");
  const burgerMenu = document.querySelector("#menu");
  const allBarsMenu = document.querySelectorAll(".bar");
  const dropListBtns = document.querySelectorAll(".drop_list");
  const dropList = document.querySelectorAll(".b_links");
  const mainLinks = document.querySelectorAll(".main_link");

  burgerMenu.addEventListener("click", function () {
    allBarsMenu.forEach((item) => item.classList.toggle("active"));
    linksMenu.classList.toggle("active");
  });

  dropListBtns.forEach((item) =>
    item.addEventListener("click", (e) => {
      console.log(e);
    })
  );

  mainLinks.forEach((link) =>
    link.addEventListener("mouseover", (e) => {
      console.log(e.target, "hi");
    })
  );
});
