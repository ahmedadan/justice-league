import { Component } from "react";
import { Pages } from "../globals/Enums";

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
            </div>
        );
    }
}
