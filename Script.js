document.addEventListener("DOMContentLoaded", function () {
    // Navigation Functions
    window.goToYearPage = function () {
        window.location.href = "year.html";
    };

    window.goToSemesterPage = function (year) {
        window.location.href = `Semester.html?year=${year}`;
    };

    window.goToSubjectPage = function (semester) {
        window.location.href = `Subject.html?semester=${semester}`;
    };

    window.goToUnitPage = function (subject) {
        window.location.href = `Unit.html?subject=${subject}`;
    };

    // Show only selected year's semesters in Semester.html
    if (window.location.pathname.includes("Semester.html")) {
        const urlParams = new URLSearchParams(window.location.search);
        const selectedYear = urlParams.get("year");

        if (selectedYear) {
            document.querySelectorAll(".Year_1, .Year_2, .Year_3, .Year_4").forEach(div => {
                div.style.display = "none";
            });
            
            let yearToShow = document.getElementById(`Year_${selectedYear}`);
            if (yearToShow) {
                yearToShow.style.display = "block";
            }
        }
    }

    // Show only selected semester's subjects in Subject.html
    if (window.location.pathname.includes("Subject.html")) {
        const urlParams = new URLSearchParams(window.location.search);
        const selectedSemester = urlParams.get("semester");

        if (selectedSemester) {
            document.querySelectorAll(".Sem_1, .Sem_2, .Sem_3, .Sem_4, .Sem_5, .Sem_6, .Sem_7, .Sem_8").forEach(div => {
                div.style.display = "none";
            });

            let semesterToShow = document.getElementById(`Sem_${selectedSemester}`);
            if (semesterToShow) {
                semesterToShow.style.display = "block";
            }
        }
    }

    // Show only selected subject's units in Unit.html
    if (window.location.pathname.includes("Unit.html")) {
        const urlParams = new URLSearchParams(window.location.search);
        const selectedSubject = urlParams.get("subject");

        if (selectedSubject) {
            document.querySelectorAll(".subject").forEach(div => {
                div.style.display = "none";
            });

            let subjectToShow = document.getElementById(selectedSubject);
            if (subjectToShow) {
                subjectToShow.style.display = "block";
            }
        }
    }

    // Filter Functionality
    function addFilter(inputId, targetClass) {
        const input = document.getElementById(inputId);
        if (!input) return;

        input.addEventListener("keyup", function () {
            const filter = input.value.toLowerCase();
            document.querySelectorAll(`.${targetClass}`).forEach(item => {
                const text = item.innerText.toLowerCase();
                item.style.display = text.includes(filter) ? "block" : "none";
            });
        });
    }

    addFilter("yearFilter", "Year_1, Year_2, Year_3, Year_4");
    addFilter("semesterFilter", "Sem_1, Sem_2, Sem_3, Sem_4, Sem_5, Sem_6, Sem_7, Sem_8");
    addFilter("subjectFilter", "subject");
    addFilter("unitFilter", "unit");
});
