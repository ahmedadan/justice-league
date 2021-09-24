import { Component } from "react";

export default class DummyServerCheck extends Component {
    constructor(props) {
        super(props);
        this.state = { pingTest: "Waiting for response" };
    }
    async componentDidMount() {
        const response = await fetch("/ping");
        if (response.status === 200) {
            const body = await response.json();
            this.setState({ pingTest: body.msg });
        } else {
            this.setState({ pingTest: "Failed to find server" });
        }
    }
    render() {
        return <div>{this.state.pingTest}</div>;
    }
}
