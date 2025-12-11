// Buttons
const addBtn = document.getElementById("add");
const submitBtn = document.getElementById("submit");

// Inputs
const subjectInput = document.getElementById("subject");
const taskInput = document.getElementById("attendance");
const dateInput = document.getElementById("date");
const statusInput = document.getElementById("pre");

// Table body
const tableBody = document.querySelector(".tutorial-table tbody");

// Hide form initially
document.querySelector(".form").style.display = "none";

// Show form when clicking Add Tutorials
addBtn.addEventListener("click", () => {
  document.querySelector(".form").style.display = "flex";
});

// Submit new tutorial
submitBtn.addEventListener("click", () => {
  let subject = subjectInput.value.trim();
  let task = taskInput.value.trim();
  let date = dateInput.value;
  let status = statusInput.value.trim().toLowerCase();

  if (!subject || !task || !date || !status) {
    alert("Please fill all fields!");
    return;
  }

  // Determine color class
  let statusClass =
    status === "completed" ? "status-completed" : "status-pending";

  // Create new row
  let newRow = document.createElement("tr");

  newRow.innerHTML = `
        <td>${subject}</td>
        <td>${task}</td>
        <td>${date}</td>
        <td><span class="${statusClass}">${statusClass === "status-completed" ? "Completed" : "Pending"}</span></td>
        <td><button class="deleteBtn">Delete</button></td>
    `;

  tableBody.appendChild(newRow);

  // Clear form fields
  subjectInput.value = "";
  taskInput.value = "";
  dateInput.value = "";
  statusInput.value = "";
});


// ⭐ DELETE FUNCTIONALITY (for existing + new rows)
document.querySelector(".tutorial-table").addEventListener("click", function (e) {
  if (e.target.classList.contains("deleteBtn")) {
    e.target.closest("tr").remove();
  }
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


