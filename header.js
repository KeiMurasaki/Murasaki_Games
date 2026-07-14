const headerHTML = `
  <header class="main-header">
    <div class="logo">
      <a href="index.html">Murasaki Games</a>
    </div>
    <nav class="nav-links">
      <a href="">About</a>
      <a href="projects.html">Projects</a>
    </nav>
  </header>
`;

// Inject the header into the element with id "header-placeholder"
document.addEventListener("DOMContentLoaded", () => {
    const placeholder = document.getElementById("header-placeholder");
    if (placeholder) {
        placeholder.innerHTML = headerHTML;
    }
});