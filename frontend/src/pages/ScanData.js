import { Component } from "react";
import { Pages } from "../globals/Enums";
import { Button } from "@material-ui/core";

export default class ScanData extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const scanData = JSON.parse(localStorage.getItem("scanned_people"));

        const tableRows = scanData.map((user) => {
            return (
                <tr>
                    <td>{user.userId}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.timestamp}</td>
                </tr>
            );
        });

        return (
            <div>
                <table>
                    <tr>
                        <th>Identifier</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Time</th>
                    </tr>
                    {tableRows}
                </table>
                <Button
                    onClick={() => this.props.setPage(Pages.SCAN)}
                    style={{
                        backgroundColor: "#FFFFFF",
                        borderColor: "#322061",
                        border: "2px solid",
                        color: "#322061",
                        borderRadius: 30,
                        padding: 20,
                        margin: 10,
                        //boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
                        width: "150px",
                        height: "50px",
                        textTransform: "inherit",
                    }}
                >
                    Back
                </Button>
            </div>
        );
    }
}
