document.addEventListener("DOMContentLoaded", function () {
    // Function to navigate from Index Page to Year Page
    window.goToYearPage = function () {
        window.location.href = "year.html";
    };

    // Function to navigate from Year Page to Semester Page
    window.goToSemesterPage = function (year) {
        window.location.href = `Semester.html?year=${year}`;
    };

    // Filter Semesters in Semester Page
    if (window.location.pathname.includes("Semester.html")) {
        const urlParams = new URLSearchParams(window.location.search);
        const selectedYear = urlParams.get("year");

        if (selectedYear) {
            // Hide all year sections first
            document.querySelectorAll(".Year_1, .Year_2, .Year_3, .Year_4").forEach(div => {
                div.style.display = "none";
            });

            // Show only the selected year's semester section
            let yearToShow = document.getElementById(`Year_${selectedYear}`);
            if (yearToShow) {
                yearToShow.style.display = "block";
            }

            // Hide the headings of other years
            document.querySelectorAll("#heading4").forEach(heading => {
                if (!heading.textContent.includes(selectedYear)) {
                    heading.style.display = "none";
                }
            });
        }
    }
});
