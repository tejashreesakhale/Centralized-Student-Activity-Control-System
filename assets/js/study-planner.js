// Get all table cells except the first column (task names)
const cells = document.querySelectorAll("table td");

// Load saved data from localStorage when page loads
window.onload = function () {
    cells.forEach((cell, index) => {
        let savedValue = localStorage.getItem("cell_" + index);
        if (savedValue !== null) {
            cell.textContent = savedValue;
        }
    });
};

// Make cells editable on click
cells.forEach((cell, index) => {
    cell.addEventListener("click", function () {
        let currentValue = cell.textContent;
        let newValue = prompt("Enter study time or task:", currentValue);

        if (newValue !== null) {
            cell.textContent = newValue;

            // Save updated value
            localStorage.setItem("cell_" + index, newValue);
        }
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
    window.location.href = 'login.html';
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


