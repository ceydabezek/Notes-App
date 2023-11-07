import Note from "./Note";

const NoteList = ({ notes, dispatch }) => {
    return notes.length > 0 ? 
    (
        <div className="note-list">
            <ul>
                { notes.map(note => { return (<Note note={note} key={ note.id } dispatch={dispatch} />); }) }
            </ul>
        </div>
    ) : 
    (
        <div className="empty">You haven't added any notes yet.</div>
    );

}

export default NoteList;