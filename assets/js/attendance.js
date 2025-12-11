// Select elements
const subjectInput = document.getElementById("subject");
const attendanceInput = document.getElementById("attendance");
const dateInput = document.getElementById("date");
const preInput = document.getElementById("pre");
const submitBtn = document.getElementById("submit");
const deleteBtn = document.querySelector(".deleteBtn");

const tableBody = document.querySelector(".tutorial-table tbody");

// Boxes
const presentBox = document.querySelector("#box1 p:nth-child(3)");
const absentBox = document.querySelector("#box2 p:nth-child(3)");
const totalBox = document.querySelector("#box3 p:nth-child(3)");

// Counters
let presentCount = 0;
let absentCount = 0;
let totalCount = 0;

// Update top boxes
function updateCounts() {
  presentBox.textContent = presentCount;
  absentBox.textContent = absentCount;
  totalBox.textContent = totalCount;
}

// Add Attendance
submitBtn.addEventListener("click", () => {
  let subject = subjectInput.value.trim();
  let att = attendanceInput.value.trim();
  let date = dateInput.value;
  let status = preInput.value.trim().toLowerCase();

  if (!subject || !att || !date || !status) {
    alert("Please fill all fields!");
    return;
  }

  let statusClass = "";
  let statusText = "";

  if (status === "present") {
    statusClass = "Present";
    statusText = "Present";
    presentCount++;
  } else if (status === "absent") {
    statusClass = "Absent";
    statusText = "Absent";
    absentCount++;
  } else {
    alert("Status must be 'Present' or 'Absent'");
    return;
  }

  totalCount++;

  // Create table row
  let newRow = document.createElement("tr");
  newRow.innerHTML = `
        <td>${subject}</td>
        <td>${att}</td>
        <td>${date}</td>
        <td><span class="${statusClass}">${statusText}</span></td>
    `;

  tableBody.appendChild(newRow);

  updateCounts();

  subjectInput.value = "";
  attendanceInput.value = "";
  dateInput.value = "";
  preInput.value = "";
});

// Delete Last Row
deleteBtn.addEventListener("click", () => {
  let rows = tableBody.querySelectorAll("tr");
  if (rows.length === 0) {
    alert("No rows to delete!");
    return;
  }

  let lastRow = rows[rows.length - 1];
  let statusText = lastRow.querySelector("span").textContent;

  if (statusText === "Present") presentCount--;
  else if (statusText === "Absent") absentCount--;

  totalCount--;

  lastRow.remove();
  updateCounts();
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



