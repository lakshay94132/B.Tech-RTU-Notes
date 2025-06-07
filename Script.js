document.addEventListener("DOMContentLoaded", function () {
    function handleRouting() {
        const path = window.location.pathname;
        const urlParams = new URLSearchParams(window.location.search);

        if (path.includes("Semester.html")) {
            let selectedYear = urlParams.get("year");
            if (selectedYear) {
                localStorage.setItem("selectedYear", selectedYear);
            }
        }

        if (path.includes("Subject.html")) {
            let selectedSemester = urlParams.get("semester");
            if (selectedSemester) {
                localStorage.setItem("selectedSemester", selectedSemester);
            }
        }

        if (path.includes("Unit.html")) {
            let selectedSubject = urlParams.get("subject");
            if (selectedSubject) {
                localStorage.setItem("selectedSubject", selectedSubject);
            }
        }
    }

    function applyFilters() {
        const path = window.location.pathname;
        const urlParams = new URLSearchParams(window.location.search);

        let selectedYear = urlParams.get("year") || localStorage.getItem("selectedYear");
        let selectedSemester = urlParams.get("semester") || localStorage.getItem("selectedSemester");
        let selectedSubject = urlParams.get("subject") || localStorage.getItem("selectedSubject");

        console.log("Filtering for:", { selectedYear, selectedSemester, selectedSubject });

        if (selectedYear && path.includes("Semester.html")) {
            document.querySelectorAll("[id^='Year_']").forEach(el => el.style.display = "none");
            document.querySelectorAll(".heading4").forEach(el => el.style.display = "none");

            document.querySelectorAll("h1").forEach(heading => {
                if (heading.textContent.includes(`${selectedYear}st`) ||
                    heading.textContent.includes(`${selectedYear}nd`) ||
                    heading.textContent.includes(`${selectedYear}rd`) ||
                    heading.textContent.includes(`${selectedYear}th`)) {
                    heading.style.display = "block";
                }
            });

            let yearSection = document.getElementById(`Year_${selectedYear}`);
            if (yearSection) {
                yearSection.style.display = "flex";
            } else {
                console.error("Error: Year section not found for Year_" + selectedYear);
            }
        }

        if (selectedSemester && path.includes("Subject.html")) {
            document.querySelectorAll("[id^='Sem_']").forEach(el => el.style.display = "none");
            document.querySelectorAll(".heading4").forEach(el => el.style.display = "none");

            document.querySelectorAll("h1").forEach(heading => {
                if (heading.textContent.includes(`${selectedSemester}st`) ||
                    heading.textContent.includes(`${selectedSemester}nd`) ||
                    heading.textContent.includes(`${selectedSemester}rd`) ||
                    heading.textContent.includes(`${selectedSemester}th`)) {
                    heading.style.display = "block";
                }
            });

            let semesterSection = document.getElementById(`Sem_${selectedSemester}`);
            if (semesterSection) {
                semesterSection.style.display = "block";
            } else {
                console.error("Error: Semester section not found for Sem_" + selectedSemester);
            }
        }

        if (selectedSubject && path.includes("Unit.html")) {
            document.querySelectorAll(".subject").forEach(el => el.style.display = "none");
            document.querySelectorAll(".heading4").forEach(el => el.style.display = "none");

            let subjectUnitSection = document.getElementById(selectedSubject);
            let subjectHeading = document.querySelector(`.heading4[data-subject="${selectedSubject}"]`);

            if (subjectUnitSection) {
                subjectUnitSection.style.display = "block";
            } else {
                console.error("Error: Subject section not found for:", selectedSubject);
            }

            if (subjectHeading) {
                subjectHeading.style.display = "block";
            } else {
                console.error("Error: Subject heading not found for:", selectedSubject);
            }
        }
    }

    // Apply filters immediately when the page loads
    applyFilters();

    // Store parameters in localStorage for navigation
    handleRouting();

    // Ensure 'btn' exists before adding an event listener
    let btn = document.getElementById("btn");
    if (btn) {
        btn.addEventListener("click", function () {
            window.location.href = "year.html";
        });
    }
});

// Redirect Functions
function goToSemesterPage(year) {
    localStorage.setItem("selectedYear", year);
    window.location.href = `Semester.html?year=${year}`;
}

function goToSubjectPage(semester) {
    localStorage.setItem("selectedSemester", semester);
    window.location.href = `Subject.html?semester=${semester}`;
}

function goToUnitPage(subject) {
    localStorage.setItem("selectedSubject", subject);
    window.location.href = `Unit.html?subject=${subject}`;
}

// Notification Slider Functionality
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.notification-slider');
    if (!slider) return;

    let scrollAmount = 0;
    const scrollStep = 0.001; // pixels per frame
    const scrollDelay = 20; // ms per frame

    function scrollSlider() {
        scrollAmount += scrollStep;
        if (scrollAmount >= slider.scrollWidth / 2) {
            scrollAmount = 0;
        }
        slider.scrollLeft = scrollAmount;
    }

    let scrollInterval = setInterval(scrollSlider, scrollDelay);

    // Pause on hover
    slider.addEventListener('mouseenter', () => clearInterval(scrollInterval));
    slider.addEventListener('mouseleave', () => {
        scrollInterval = setInterval(scrollSlider, scrollDelay);
    });
});
