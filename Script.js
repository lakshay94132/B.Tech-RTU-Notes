document.addEventListener("DOMContentLoaded", function () {
    // Fix: Ensure 'btn' exists before adding event listener
    let btn = document.getElementById("btn");
    if (btn) {
        btn.addEventListener("click", function () {
            window.location.href = "year.html";
        });
    }

    // Show only the selected year's semesters in Semester.html
    let selectedYear = localStorage.getItem("selectedYear");
    console.log("Selected Year from Storage:", selectedYear);
    
    if (selectedYear && window.location.pathname.includes("Semester.html")) {
        // Hide all year sections and their headings
        document.querySelectorAll("[id^='Year_']").forEach(el => el.style.display = "none");
        document.querySelectorAll(".heading4").forEach(el => el.style.display = "none");

        let headings = document.querySelectorAll("h1");
        headings.forEach(heading => {
            if (heading.textContent.includes(`${selectedYear}st`) ||
                heading.textContent.includes(`${selectedYear}nd`) ||
                heading.textContent.includes(`${selectedYear}rd`) ||
                heading.textContent.includes(`${selectedYear}th`)) {
                heading.style.display = "block";
            }
        });
        
        // Show only the selected year's section
        let yearSection = document.getElementById(`Year_${selectedYear}`);
        if (yearSection) {
            yearSection.style.display = "block";
        }
    }

    // Show only the selected semester's subjects in Subject.html
    let selectedSemester = localStorage.getItem("selectedSemester");
    console.log("Selected Semester from Storage:", selectedSemester);
    
    if (selectedSemester && window.location.pathname.includes("Subject.html")) {
        // Hide all semester subjects
        document.querySelectorAll("[id^='Sem_']").forEach(el => el.style.display = "none");
        document.querySelectorAll(".heading4").forEach(el => el.style.display = "none");

        let headings = document.querySelectorAll("h1");
        headings.forEach(heading => {
            if (heading.textContent.includes(`${selectedSemester}st`) ||
                heading.textContent.includes(`${selectedSemester}nd`) ||
                heading.textContent.includes(`${selectedSemester}rd`) ||
                heading.textContent.includes(`${selectedSemester}th`)) {
                heading.style.display = "block";
            }
        });

        
        // Show only the subjects for the selected semester
        let semesterSection = document.getElementById(`Sem_${selectedSemester}`);
        if (semesterSection) {
            semesterSection.style.display = "block";
        } else {
            console.error("Error: Semester section not found for Sem_" + selectedSemester);
        }
    }
});
 
// Redirect from Year page to Semester page
function goToSemesterPage(year) {
    localStorage.setItem("selectedYear", year);
    window.location.href = "Semester.html";
}

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
