export const NotesList = ({notes}) => {
    return (
        <ul>
            {notes.map(el => <li key={el.id}>{el.text}</li>)}
        </ul>
    );
};
