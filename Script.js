// Function to navigate from Index page to Year page
function goToYearPage() {
    window.location.href = 'year.html';
}

// Function to navigate from Year page to Semester page with filtering
document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const year = params.get('year');
    if (year) {
        document.querySelectorAll('.Year_1, .Year_2, .Year_3, .Year_4').forEach(el => el.style.display = 'none');
        const selectedYear = document.querySelector(`.Year_${year}`);
        if (selectedYear) selectedYear.style.display = 'block';
    }
});

function goToSemesterPage(year) {
    window.location.href = `Semester.html?year=${year}`;
}

// Function to navigate from Semester page to Subject page with filtering
document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const sem = params.get('sem');
    if (sem) {
        document.querySelectorAll('.semester').forEach(el => el.style.display = 'none');
        const selectedSem = document.querySelector(`#Sem_${sem}`);
        if (selectedSem) selectedSem.style.display = 'block';
    }
});

function goToSubjectPage(sem) {
    window.location.href = `Subject.html?sem=${sem}`;
}

// Function to navigate from Subject page to Unit page
function goToUnitPage(subject) {
    window.location.href = `Unit.html?subject=${subject}`;
}

// Ensure semester buttons navigate correctly
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[id^=Sem_] button').forEach(button => {
        button.addEventListener('click', function () {
            const semId = this.parentElement.id.split('_')[1];
            goToSubjectPage(semId);
        });
    });
});

// Ensure subject buttons navigate correctly
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[id^=Sub_] button').forEach(button => {
        button.addEventListener('click', function () {
            const subjectId = this.parentElement.id;
            goToUnitPage(subjectId);
        });
    });
});

// ✅ Function to filter and show only the selected subject's units on Unit page
document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const subject = params.get('subject');

    

        // Show only the selected subject and its units
        const selectedSubject = document.querySelector(`#${subject}`);
        if (selectedSubject) {
            selectedSubject.style.display = 'block';
            selectedSubject.querySelectorAll('.unit').forEach(unit => unit.style.display = 'block');
        } else {
            console.error("Subject not found:", subject);
        }
    
});
