document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling between sections
  const sections = document.querySelectorAll(".section");
  let currentSection = 0;

  function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: "smooth" });
    currentSection = index;
  }

  // Scroll to the next section on wheel event
  document.addEventListener("wheel", function (event) {
    if (event.deltaY > 0 && currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1);
    } else if (event.deltaY < 0 && currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  });

  // Scroll to the next or previous section on arrow key press
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowDown" && currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1);
    } else if (event.key === "ArrowUp" && currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  });

  // Scroll to the next or previous section on swipe gesture (for touch devices)
  let touchstartY = 0;
  document.addEventListener("touchstart", function (event) {
    touchstartY = event.touches[0].clientY;
  });

  document.addEventListener("touchend", function (event) {
    const touchendY = event.changedTouches[0].clientY;
    const deltaY = touchendY - touchstartY;

    if (deltaY > 50 && currentSection > 0) {
      scrollToSection(currentSection - 1);
    } else if (deltaY < -50 && currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1);
    }
  });
});
