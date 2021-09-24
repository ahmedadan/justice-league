import logo from "./logo.svg";
import "./App.css";
// TODO - Import your page component here
import DummyServerCheck from "./pages/DummyServerCheck";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* 
        // TODO - Put your component outside of these braces
        e.g. <LandingPage/> or something
        */}
                <DummyServerCheck />
            </header>
        </div>
    );
}

export default App;
