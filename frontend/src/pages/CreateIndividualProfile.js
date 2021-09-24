import { Component } from "react";
import { Pages } from "../globals/Enums";

export default class CreateIndividualProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                CreateIndividualProfile Page
                <button onClick={() => this.props.setPage(Pages.LANDING)}>
                    back
                </button>
            </div>
        );
    }
}
