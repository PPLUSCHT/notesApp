export const Input = ({inputNote, updateInputNote, addNote, clearNotes}) => {
    
    const handleNoteChange = (event) => {
        updateInputNote({...inputNote, text: event.target.value});
    };

    return (
        <div>
            <form onSubmit={addNote}>
                <input value = {inputNote.text} onChange={handleNoteChange}/>
                <button type= "submit">Add Note</button>
            </form>
            <form onSubmit={clearNotes}>
                <button type="submit">Clear List</button>
            </form>
        </div>
    );
};