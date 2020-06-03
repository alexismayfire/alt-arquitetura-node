var lastKnownScrollY = 0;
var ticking = false;

function showMenuOverlay(scrollY) {
  // Do something with the scroll position
  var box = document.querySelector("#home").getBoundingClientRect();
  if (box.top + box.height < 0) {
    document.querySelector("header").classList.add("navbar-overlay");
  } else {
    document.querySelector("header").classList.remove("navbar-overlay");
  }
}

document.addEventListener("scroll", function(e) {
  lastKnownScrollY = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      showMenuOverlay(lastKnownScrollY);
      ticking = false;
    });

    ticking = true;
  }
});

function loadHamburgerMenu() {
  var navbar = document.querySelector("#navbarMenuHeroC");
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
    navbar.style.position = "absolute";
    navbar.style.width = "100%";
  }
}

function projectItemListener(evt) {
  var currentActive = document.querySelector(".project-item.active");
  currentActive.addEventListener("click", projectItemListener);
  currentActive.classList.remove("active");

  evt.target.classList.add("active");
  evt.target.removeEventListener("click", projectItemListener);
}

function submitForm(evt) {
  evt.preventDefault();
  var data = new FormData(evt.target);
  alert("Enviando...");
}

document.addEventListener("DOMContentLoaded", function() {
  var hamburger = document.querySelector(".navbar-burger");
  hamburger.addEventListener("click", loadHamburgerMenu);

  var projectList = document.querySelectorAll(".project-item:not(.active)");
  projectList.forEach(elem =>
    elem.addEventListener("click", projectItemListener)
  );

  var form = document.querySelector("#form-contato");
  form.addEventListener("submit", submitForm);
});
