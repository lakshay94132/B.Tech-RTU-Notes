document.addEventListener("DOMContentLoaded", function () {
    window.goToYearPage = function () {
        window.location.href = "year.html";
    };

    window.goToSemesterPage = function (year) {
        window.location.href = `Semester.html?year=${year}`;
    };

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

            document.querySelectorAll("#heading4").forEach(heading => {
                if (!heading.textContent.includes(selectedYear)) {
                    heading.style.display = "none";
                }
            });
        }
    }
});
