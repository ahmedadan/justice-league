import React, { Component } from "react";
import { Pages } from "../globals/Enums";
import QRCode from "react-qr-code";
import * as OTPAuth from "otpauth";

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
            <div style={{ padding: "50px" }}>
                <div
                    style={{
                        display: "inline-block",
                        width: "100%",
                        height: "100px",
                    }}
                >
                    COVID Passport
                </div>

                <div hidden={this.state.renderQR}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            width: "328px",
                            height: "188px",
                            background: "#240D53",
                            boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.15)",
                            borderRadius: "20px",
                            fontFamily: "SF Pro Display",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight: "25px",
                            fontSize: "14px",
                            color: "#FFFFFF",
                        }}
                    >
                        You have not created a COVID Passport yet.
                        <br />
                        Please upload your vaccination receipt.
                        <input
                            type="file"
                            ref={this.fileInput}
                            style={{
                                marginLeft: "65px",
                            }}
                            onChange={this.handleFileChange}
                        />
                        <button
                            style={{
                                width: "80px",
                                margin: "5px",
                                marginLeft: "124px",
                                backgroundColor: "green",
                            }}
                            disabled={!this.state.hasFile}
                            onClick={() => this.uploadReceipt()}
                        >
                            Upload!
                        </button>
                    </div>
                </div>
                <div hidden={!this.state.renderQR || this.state.QRValue === ""}>
                    <QRCode value={this.state.QRValue} />
                </div>

                <button onClick={() => this.props.setPage(Pages.LANDING)}>
                    back
                </button>
            </div>
        );
    }
}
