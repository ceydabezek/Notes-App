const Navbar = ({ notes }) => {
    return (
        <div className="navbar">
            <h1>NoteApp</h1>
            <p> There are a total of { notes.length } notes available.</p>
        </div>
    );
}

export default Navbar;