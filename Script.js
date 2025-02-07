// Sample notes data
const notes = [
    { title: "Note 1", content: "Content for note 1" },
    { title: "Note 2", content: "Content for note 2" },
    { title: "Note 3", content: "Content for note 3" },
];

// Function to display notes
function displayNotes(notes) {
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = ''; // Clear existing notes
    notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.innerHTML = `<h3>${note.title}</h3><p>${note.content}</p>`;
        notesList.appendChild(noteElement);
    });
}

// Search functionality
document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(searchTerm));
    displayNotes(filteredNotes);
});

// Initial display of notes
displayNotes(notes);
