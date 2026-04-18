function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.display =
    sidebar.style.display === "block" ? "none" : "block";
}

function toggleProfile() {
  const dropdown = document.getElementById("profileDropdown");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
}