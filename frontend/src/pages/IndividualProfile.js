import { Component } from "react";
import { Pages } from "../globals/Enums";

export default class IndividualProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                IndividualProfile Page
                <button onClick={() => this.props.setPage(Pages.LANDING)}>
                    back
                </button>
            </div>
        );
    }
}
