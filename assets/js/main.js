const linksMenu = document.querySelector(".links");
const burgerMenu = document.querySelector("#menu");
const allBarsMenu = document.querySelectorAll(".bar");

burgerMenu.addEventListener("click", function () {
  allBarsMenu.forEach((item) => item.classList.toggle("active"));
  linksMenu.classList.toggle("active");
});

/* ===== 🔽 Header Drop List Menu 🔽 =====*/
const dropListBtn1 = document.getElementById("drop_list_btn_1");
const dropList1 = document.getElementById("drop_list_1");
const dropListBtn2 = document.getElementById("drop_list_btn_2");
const dropList2 = document.getElementById("drop_list_2");

dropListBtn1.addEventListener("click", () => {
  dropList1.classList.toggle("inactive");
  if (!dropList2.classList.contains("inactive")) {
    dropList2.classList.add("inactive");
  }
});

dropListBtn2.addEventListener("click", () => {
  dropList2.classList.toggle("inactive");
  if (!dropListBtn1.classList.contains("inactive")) {
    dropList1.classList.add("inactive");
  }
});

document.addEventListener("click", function (event) {
  const isClicked = event.target.closest("li");

  if (!isClicked) {
    dropList1.classList.add("inactive");
    dropList2.classList.add("inactive");
  }
});
/* ===== 🔼 Header Drop List Menu 🔼 =====*/
const themeBtn = document.getElementById("theme_btn");
const darkBtn = document.getElementById("dark_btn");
const lightBtn = document.getElementById("light_btn");
const bodyEl = document.body;

function applyTheme(isDarkTheme) {
  if (isDarkTheme) {
    bodyEl.style.backgroundColor = "#0f0f0f";
    bodyEl.style.color = "#fbfbfb";
    darkBtn.classList.add("inactive");
    lightBtn.classList.remove("inactive");
  } else {
    bodyEl.style.backgroundColor = "#fbfbfb";
    bodyEl.style.color = "#0f0f0f";
    lightBtn.classList.add("inactive");
    darkBtn.classList.remove("inactive");
  }
}

let isDarkTheme = localStorage.getItem("darkTheme") === "true";

applyTheme(isDarkTheme);

themeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const newIsDarkTheme = !isDarkTheme;
  applyTheme(newIsDarkTheme);
  localStorage.setItem("darkTheme", newIsDarkTheme);
  isDarkTheme = newIsDarkTheme;
});
