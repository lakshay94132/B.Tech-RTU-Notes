// Redirect from Index to Year page
document.getElementById("btn").addEventListener("click", function () {
    window.location.href = "year.html";
});

// Redirect from Year page to Semester page
function goToSemesterPage(year) {
    localStorage.setItem("selectedYear", year);
    window.location.href = "Semester.html";
}

// Show only the selected year's semesters in Semester.html
document.addEventListener("DOMContentLoaded", function () {
    let selectedYear = localStorage.getItem("selectedYear");

    if (selectedYear) {
        // Hide all year sections
        document.querySelectorAll("[id^='Year_']").forEach(el => el.style.display = "none");

        // Show only the selected year's section
        let yearSection = document.getElementById(`Year_${selectedYear}`);
        if (yearSection) {
            yearSection.style.display = "block";
        }
    }
});

// Redirect from Semester page to Subject page
function goToSubjectPage(semester) {
    localStorage.setItem("selectedSemester", semester);
    window.location.href = "Subject.html";
}

// Redirect from Subject page to Unit page
function goToUnitPage(subject) {
    localStorage.setItem("selectedSubject", subject);
    window.location.href = "Unit.html";
}
