// Select all habit table cells except the first column (habit names)
const cells = document.querySelectorAll(".habit-table td");

// Load saved data from localStorage
cells.forEach((cell, index) => {
  const saved = localStorage.getItem("habit_cell_" + index);

  if (saved === "done") {
    cell.classList.add("done");
    cell.textContent = "✔";
  }
});

// Add click event to toggle ✔
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {

    // Skip the first column (habit names)
    if (cell.cellIndex === 0) return;

    cell.classList.toggle("done");

    if (cell.classList.contains("done")) {
      cell.textContent = "✔";
      localStorage.setItem("habit_cell_" + index, "done");
    } else {
      cell.textContent = "";
      localStorage.removeItem("habit_cell_" + index);
    }
  });
});

// Logout button
document.getElementById("logout").addEventListener("click", () => {
  window.location.href = "login.html";
});

// Highlight active sidebar link based on current page
const sidebarLinks = document.querySelectorAll('.navbar a');
const currentPage = window.location.pathname.split("/").pop();

sidebarLinks.forEach(link => {
  const hrefPage = link.getAttribute('href');
  if (hrefPage === currentPage) {
    link.style.backgroundColor = '#bcc0b7';
    link.style.borderRadius = '1vmin';
  }
});

// Logout button functionality
const logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', () => {
  // Clear any stored session (if using localStorage/sessionStorage)
  localStorage.clear();
  sessionStorage.clear();

  // Redirect to login page
  window.location.href = 'index.html';
});

// Optional: Dynamic welcome message
const welcomeText = document.getElementById('wc');
const hours = new Date().getHours();
if (hours < 12) {
  welcomeText.textContent = "Good Morning!";
} else if (hours < 18) {
  welcomeText.textContent = "Good Afternoon!";
} else {
  welcomeText.textContent = "Good Evening!";
}

// Optional: Add hover effect for box-content using JS (already in CSS)
const boxes = document.querySelectorAll('.box-content');
boxes.forEach(box => {
  box.addEventListener('click', () => {
    const link = box.querySelector('a').getAttribute('href');
    window.location.href = link;
  });
});



