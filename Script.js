document.addEventListener("DOMContentLoaded", function () {
    // Function to navigate from Index Page to Year Page
    window.goToYearPage = function () {
        window.location.href = "year.html";
    };

    // Function to navigate from Year Page to Semester Page
    window.goToSemesterPage = function (year) {
        window.location.href = `Semester.html?year=${year}`;
    };

    // Function to navigate from Semester Page to Subject Page
    window.goToSubjectPage = function (semester) {
        window.location.href = `Subject.html?semester=${semester}`;
    };

    // Show only the selected year's semesters in Semester.html
    if (window.location.pathname.includes("Semester.html")) {
        const urlParams = new URLSearchParams(window.location.search);
        const selectedYear = urlParams.get("year");

        if (selectedYear) {
            // Hide all year sections
            document.querySelectorAll(".Year_1, .Year_2, .Year_3, .Year_4").forEach(div => {
                div.style.display = "none";
            });

            // Show only the selected year's semester section
            let yearToShow = document.getElementById(`Year_${selectedYear}`);
            if (yearToShow) {
                yearToShow.style.display = "block";
            }
        }

        // Add event listeners to Semester buttons
        let semesterButtons = document.querySelectorAll(".Year_" + selectedYear + " button");

        semesterButtons.forEach((button, index) => {
            button.addEventListener("click", function () {
                let semester = index + 1 + (selectedYear - 1) * 2; // Calculate correct semester number
                window.location.href = `Subject.html?semester=${semester}`;
            });
        });
    }

    // Show only the selected semester's subjects in Subject.html
    if (window.location.pathname.includes("Subject.html")) {
        const urlParams = new URLSearchParams(window.location.search);
        const selectedSemester = urlParams.get("semester");

        if (selectedSemester) {
            // Hide all semester sections
            document.querySelectorAll(".Sem_1, .Sem_2, .Sem_3, .Sem_4, .Sem_5, .Sem_6, .Sem_7, .Sem_8").forEach(div => {
                div.style.display = "none";
            });

            // Show only the selected semester's subjects
            let semesterToShow = document.getElementById(`Sem_${selectedSemester}`);
            if (semesterToShow) {
                semesterToShow.style.display = "block";
            }
        }
    }
});
