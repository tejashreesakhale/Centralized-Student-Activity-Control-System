// assets/js/timetable.js

document.addEventListener("DOMContentLoaded", function () {
    // Highlight today's column
    const todayIndex = new Date().getDay(); // Sunday = 0, Monday = 1
    if (todayIndex >= 1 && todayIndex <= 6) { // Monday-Saturday
        const table = document.querySelector("table");
        const columnIndex = todayIndex; // Monday=1 => columnIndex=1 in table
        const rows = table.querySelectorAll("tbody tr");

        rows.forEach(row => {
            const cell = row.cells[columnIndex];
            if (cell) {
                cell.style.backgroundColor = "#f7d794";
                cell.style.fontWeight = "bold";
            }
        });
    }

    // Logout button functionality
    const logoutBtn = document.getElementById("logout");
    logoutBtn.addEventListener("click", function () {
        alert("You have been logged out!");
        // window.location.href = "login.html";
    });

    // Make timetable editable
    const table = document.querySelector("table");
    const cells = table.querySelectorAll("tbody td");

    cells.forEach(cell => {
        cell.addEventListener("click", function () {
            const currentText = cell.textContent;
            const input = document.createElement("input");
            input.type = "text";
            input.value = currentText;
            cell.textContent = "";
            cell.appendChild(input);
            input.focus();

            // Save changes on blur or Enter key
            input.addEventListener("blur", () => {
                cell.textContent = input.value;
            });

            input.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    cell.textContent = input.value;
                }
            });
        });
    });
});

  // Highlight active sidebar link based on current page
  const sidebarLinks = document.querySelectorAll('.navbar a');
  const currentPage = window.location.pathname.split("/").pop();

  sidebarLinks.forEach(link => {
    const hrefPage = link.getAttribute('href');
    if(hrefPage === currentPage){
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
  if(hours < 12){
    welcomeText.textContent = "Good Morning!";
  } else if(hours < 18){
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



