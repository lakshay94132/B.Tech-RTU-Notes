document.addEventListener("DOMContentLoaded", function () {
    // Navigate from Index Page to Year Page
    let notesButton = document.querySelector("button");
    if (notesButton) {
        notesButton.addEventListener("click", function () {
            window.location.href = "year.html";
        });
    }

    // Navigate from Year Page to Semester Page
    let yearButtons = document.querySelectorAll("h1#heading4 + .container button");
    if (yearButtons.length > 0) {
        yearButtons.forEach(button => {
            button.addEventListener("click", function () {
                let parentHeading = this.closest(".container").previousElementSibling;
                if (parentHeading && parentHeading.tagName === "H1") {
                    let selectedYear = parentHeading.textContent.trim().charAt(0); // Get the first digit of the year
                    window.location.href = `semester.html?year=${selectedYear}`;
                }
            });
        });
    }

    // Filter Semesters in Semester Page
    let semesterPage = document.querySelector(".main");
    if (semesterPage) {
        const urlParams = new URLSearchParams(window.location.search);
        const selectedYear = urlParams.get("year");

        if (selectedYear) {
            // Hide all semester divs
            document.querySelectorAll(".Year_1, .Year_2, .Year_3, .Year_4").forEach(div => {
                div.style.display = "none";
            });

            // Show only the selected year's semesters
            let yearToShow = document.querySelector(`.Year_${selectedYear}`);
            if (yearToShow) {
                yearToShow.style.display = "block";
            }
        }
    }
});

