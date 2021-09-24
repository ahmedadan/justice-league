import React from "react";
import "./App.css";
import { Pages } from "./globals/Enums";
import DummyServerCheck from "./pages/DummyServerCheck";
import Landing from "./pages/Landing";
import CreateIndividualProfile from "./pages/CreateIndividualProfile";
import IndividualProfile from "./pages/IndividualProfile";
import Scan from "./pages/Scan";
import ScanData from "./pages/ScanData";

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

    render() {
        return (
            <div className="App">
                <DummyServerCheck />
                <div id="content" style={{ maxWidth: "450px", margin: "auto" }}>
                    {this.state.currentPage === Pages.LANDING && (
                        <Landing setPage={this.setPage} />
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
                </div>
            </div>
        );
    }
}

export default App;
