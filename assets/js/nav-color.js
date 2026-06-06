document.addEventListener("DOMContentLoaded", function() {
  var style = document.createElement("style");
  style.innerHTML = `
    .masthead, .masthead__inner-wrap, .greedy-nav {
      background: #1e3a8a !important;
    }
    .greedy-nav a, .site-title {
      color: #ffffff !important;
    }
    .greedy-nav a:hover {
      color: #a5b4fc !important;
    }
    .greedy-nav__toggle svg {
      fill: #ffffff !important;
    }
    .search__toggle {
      color: #ffffff !important;
    }
  `;
  document.head.appendChild(style);
});