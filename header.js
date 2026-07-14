const headerHTML = `
  <header class="main-header">
    <div class="logo">
      <a href="index.html">Murasaki Games</a>
    </div>
    <nav class="nav-links">
      <a href="projects.html">Projects</a>
      <a href="ideas.html">Ideas</a>
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