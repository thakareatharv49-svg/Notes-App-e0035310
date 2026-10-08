class NoteApp {
    constructor() {
        this.notes = [];
        this.noteTitleInput = document.getElementById('note-title');
        this.noteContentInput = document.getElementById('note-content');
        this.saveNoteButton = document.getElementById('save-note');
        this.notesContainer = document.getElementById('notes-container');
        this.saveNoteButton.addEventListener('click', this.saveNote.bind(this));
    }
    saveNote() {
        const noteTitle = this.noteTitleInput.value;
        const noteContent = this.noteContentInput.value;
        if (noteTitle && noteContent) {
            const note = { title: noteTitle, content: noteContent }; 
            this.notes.push(note);
            this.renderNotes();
            this.noteTitleInput.value = '';
            this.noteContentInput.value = '';
        }
    }
    renderNotes() {
        this.notesContainer.innerHTML = '';
        this.notes.forEach((note, index) => {
            const noteElement = document.createElement('div');
            noteElement.classList.add('note');
            noteElement.innerHTML = `Title: ${note.title}
Content: ${note.content}`;
            this.notesContainer.appendChild(noteElement);
        });
    }
}
const app = new NoteApp();
