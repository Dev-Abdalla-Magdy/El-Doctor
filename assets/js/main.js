document.addEventListener("DOMContentLoaded", function () {
  const linksMenu = document.querySelector(".links");
  const burgerMenu = document.querySelector("#menu");
  const allBarsMenu = document.querySelectorAll(".bar");
  const mainLinks = document.querySelectorAll(".main_link");
  const listBtns = document.querySelectorAll(".list_btn");

  burgerMenu.addEventListener("click", function () {
    allBarsMenu.forEach((item) => item.classList.toggle("active"));
    linksMenu.classList.toggle("active");
  });

  mainLinks.forEach((link) =>
    link.addEventListener("mouseenter", (e) => {
      // e.preventDefault();
      const targetId = link.dataset.target;
      const targetDropList = document.getElementById(targetId);
      targetDropList.classList.remove("inactive");
    })
  );

  mainLinks.forEach((link) =>
    link.addEventListener("mouseleave", (e) => {
      // e.preventDefault();
      const targetId = link.dataset.target;
      const targetDropList = document.getElementById(targetId);
      targetDropList.classList.add("inactive");
    })
  );

  listBtns.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = btn.dataset.target;
      const targetDropList = document.getElementById(targetId);
      console.log(targetDropList.id);
      if (targetDropList) {
        targetDropList.classList.toggle("inactive");
      }
    })
  );
});
