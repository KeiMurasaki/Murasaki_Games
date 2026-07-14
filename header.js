const headerHTML = `
  <header class="main-header">
    <div class="logo">
      <a href="index.html">My Cool Website</a>
    </div>
    <nav class="nav-links">
      <a href="index.html">Home</a>
      <a href="">About</a>
      <a href="">Projects</a>
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