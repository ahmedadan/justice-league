import React, { Component } from "react";
import { Pages } from "../globals/Enums";
import QRCode from "react-qr-code";
import * as OTPAuth from "otpauth";
import UploadBanner from "../upload-banner.png";
import UploadText from "../upload-text.png";
import UploadButton from "../upload-button.svg";
import Grid from "@material-ui/core/Grid";

export default class IndividualProfile extends Component {
    constructor(props) {
        super(props);

        this.fileInput = React.createRef();
        this.handleFileChange = this.handleFileChange.bind(this);

        this.state = {
            renderQR: false,
            QRValue: "",
        };
    }
    userid = "";
    totpSecret;
    totp;
    name = "";
    phone = "";
    email = "";

    qrInterval;

    componentDidMount() {
        this.readQRInfo();
    }

    readQRInfo() {
        this.userId = localStorage.getItem("userId");
        this.totpSecret = localStorage.getItem("totpSecret");

        if (this.userId && this.totpSecret) {
            this.name = localStorage.getItem("name");
            this.phone = localStorage.getItem("phone");
            this.email = localStorage.getItem("email");

            this.totp = new OTPAuth.TOTP({
                digits: 8,
                period: 60,
                secret: this.totpSecret,
            });

            // trigger timer to reset qrcode
            this.updateQRValue();
            this.qrInterval = setInterval(() => this.updateQRValue(), 10000);

            this.setState({ renderQR: true });
        }
    }

    componentWillUnmount() {
        clearInterval(this.qrInterval);
        this.qrInterval = null;
    }

    updateQRValue() {
        const token = this.totp.generate();

        this.setState({
            QRValue: `${this.userId},${token},${this.name},${this.phone},${this.email}`,
        });
    }

    handleFileChange(fileEvent) {
        this.setState({
            hasFile: !!fileEvent.target.files[0],
        });
    }

    async uploadReceipt() {
        const response = await fetch("/signup");
        const responseJson = await response.json();

        const userId = responseJson["userId"];
        const secret = responseJson["encodedSecret"];

        localStorage.setItem("userId", userId);
        localStorage.setItem("totpSecret", secret);

        this.readQRInfo();
    }

    render() {
        return (
            <div>
                <img
                    style={{ justify: "center", maxWidth: 500 }}
                    src={UploadBanner}
                />
                <h3 style={{ paddingBottom: "20px" }}>COVID Passport</h3>

                <img
                    hidden={this.state.renderQR}
                    style={{
                        justify: "center",
                        maxWidth: 300,
                        paddingBottom: "50px",
                    }}
                    src={UploadText}
                />

                <div hidden={this.state.renderQR}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            style={{
                                justify: "center",
                                alignItems: "center",
                                paddingBottom: "30px",
                            }}
                        >
                            <input
                                style={{
                                    backgroundColor: "#4CAF50",
                                    border: "none",
                                    color: "white",
                                    padding: "16px 32px",
                                    margin: "4px 2px",
                                }}
                                src="../upload-button.svg"
                                type="file"
                                ref={this.fileInput}
                                style={{
                                    marginLeft: "65px",
                                }}
                                onChange={this.handleFileChange}
                            />
                        </div>

                        <div
                            style={{ justify: "center", alignItems: "center" }}
                        >
                            <button
                                style={{
                                    backgroundColor: "#240D53",
                                    border: "none",
                                    color: "white",
                                    padding: "16px 32px",
                                    margin: "4px 2px",
                                    cursor: "pointer",
                                    minWidth: "200px",
                                    borderRadius: "50px",
                                }}
                                disabled={!this.state.hasFile}
                                onClick={() => this.uploadReceipt()}
                            >
                                Upload!
                            </button>
                        </div>
                    </div>
                </div>
                <div hidden={!this.state.renderQR || this.state.QRValue === ""}>
                    <QRCode value={this.state.QRValue} />
                </div>

                <button
                    style={{
                        backgroundColor: "#A5DED2",
                        border: "none",
                        color: "white",
                        padding: "16px 32px",
                        margin: "4px 2px",
                        cursor: "pointer",
                        minWidth: "100px",
                        borderRadius: "50px",
                    }}
                    onClick={() => this.props.setPage(Pages.LANDING)}
                >
                    Back
                </button>
            </div>
        );
    }
}
