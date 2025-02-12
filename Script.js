document.addEventListener("DOMContentLoaded", function () {
    // Navigation from Index Page to Year Page
    let notesButton = document.querySelector("button"); // First button on index.html
    if (notesButton) {
        notesButton.addEventListener("click", function () {
            window.location.href = "year.html";
        });
    }

    // Navigation from Year Page to Semester Page with Year Parameter
    let yearButtons = document.querySelectorAll("h1#heading4 + .container button");
    if (yearButtons.length > 0) {
        yearButtons.forEach(button => {
            button.addEventListener("click", function () {
                let parentHeading = this.closest(".container").previousElementSibling;
                if (parentHeading && parentHeading.tagName === "H1") {
                    let selectedYear = parentHeading.textContent.trim().charAt(0); // Extract the first digit of year
                    window.location.href = `semester.html?year=${selectedYear}`;
                }
            });
        });
    }
    
});
