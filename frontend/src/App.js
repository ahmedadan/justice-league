import React from "react";
import "./App.css";
import { Pages } from "./globals/Enums";
import DummyServerCheck from "./pages/DummyServerCheck";
import CreateIndividualProfile from "./pages/CreateIndividualProfile";
import WelcomePage from "./pages/welcome.js";
import IndividualProfile from "./pages/IndividualProfile";
import Scan from "./pages/Scan";
import ScanData from "./pages/ScanData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.setPage = this.setPage.bind(this);

        this.state = {
            currentPage: Pages.LANDING,
        };
    }
    setPage(page) {
        this.setState({ currentPage: page });
    }
    clearData() {
        localStorage.removeItem("userId");
        localStorage.removeItem("totpSecret");
    }

    render() {
        const isDev = true;
        return (
            <div className="App">
                {
                    //<DummyServerCheck />
                }
                <div
                    id="content"
                    style={{
                        maxWidth: "450px",
                        margin: "auto",
                        height: "800px",
                    }}
                >
                    {this.state.currentPage === Pages.LANDING && (
                        <WelcomePage setPage={this.setPage} />
                    )}
                    {this.state.currentPage ===
                        Pages.CREATE_INDIVIDUAL_PROFILE && (
                        <CreateIndividualProfile setPage={this.setPage} />
                    )}
                    {this.state.currentPage === Pages.INDIVIDUAL_PROFILE && (
                        <IndividualProfile setPage={this.setPage} />
                    )}
                    {this.state.currentPage === Pages.SCAN && (
                        <Scan setPage={this.setPage} />
                    )}
                    {this.state.currentPage === Pages.SCAN_DATA && (
                        <ScanData setPage={this.setPage} />
                    )}
                </div>
                <div hidden={!isDev}>
                    <button onClick={() => this.setPage(Pages.LANDING)}>
                        welcome
                    </button>
                    <button
                        onClick={() =>
                            this.setPage(Pages.CREATE_INDIVIDUAL_PROFILE)
                        }
                    >
                        create individual profile
                    </button>
                    <button
                        onClick={() => this.setPage(Pages.INDIVIDUAL_PROFILE)}
                    >
                        individual profile
                    </button>
                    <button onClick={() => this.setPage(Pages.SCAN)}>
                        scan
                    </button>
                    <button onClick={() => this.setPage(Pages.SCAN_DATA)}>
                        scan data
                    </button>
                    <br />
                    <button onClick={() => this.clearData()}>
                        clear user info
                    </button>
                </div>

                <ToastContainer position="bottom-center" />
            </div>
        );
    }
}

export default App;
