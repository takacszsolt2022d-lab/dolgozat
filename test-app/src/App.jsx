import { useState } from "react";
import Box from "./Box.jsx";

const boxLabels = ["Első Box", "Második Box", "Harmadik Box"];

function App() {
    const [message, setMessage] = useState("Kattints egy Boxra!");

    function handleBoxClick() {
        setMessage("Clicked!");
    }

    return (
        <main className="app">
            <h1>React gyakorló alkalmazás</h1>
            <p className="message" aria-live="polite">
                {message}
            </p>
            <div className="box-list">
                {boxLabels.map((label) => (
                    <Box key={label} text={label} onClick={handleBoxClick} />
                ))}
            </div>
        </main>
    );
}

export default App;
