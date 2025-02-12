document.addEventListener("DOMContentLoaded", function () {
    let notesButton = document.querySelector("button"); 
    if (notesButton) {
        notesButton.addEventListener("click", function () {
            window.location.href = "year.html";
        });
    }

    let yearButtons = document.querySelectorAll("h1#heading4 + .container button");
    if (yearButtons.length > 0) {
        yearButtons.forEach(button => {
            button.addEventListener("click", function () {
                let parentHeading = this.closest(".container").previousElementSibling;
                if (parentHeading && parentHeading.tagName === "H1") {
                    let selectedYear = parentHeading.textContent.trim().charAt(0); 
                    window.location.href = `semester.html?year=${selectedYear}`;
                }
            });
        });
    }
    
});
