import { Component } from "react";
import { Pages } from "../globals/Enums";
import QRCode from "react-qr-code";
import * as OTPAuth from "otpauth";

export default class IndividualProfile extends Component {
    constructor(props) {
        super(props);
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
        this.userId = localStorage.getItem("userId");
        this.totpSecret = localStorage.getItem("totpSecret");

        if (this.userId && this.totpSecret) {
            this.name = localStorage.getItem("name");
            this.phone = localStorage.getItem("phone");
            this.email = localStorage.getItem("email");

            this.totp = new OTPAuth.TOTP({
                digits: 6,
                period: 60,
                secret: this.totpKey,
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

    renderModal() {}

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
                    <button
                        style={{
                            marginLeft: "50px",
                        }}
                        hidden={this.state.renderQR}
                        onClick={() => this.renderModal()}
                    >
                        +
                    </button>
                </div>

                <div
                    hidden={this.state.renderQR}
                    style={{
                        width: "328px",
                        height: "188px",
                        background: "#240D53",
                        boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.15)",
                        borderRadius: "20px",
                        fontFamily: "SF Pro Display",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "188px",
                        color: "#FFFFFF",
                    }}
                >
                    You have not created a COVID Passport yet
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
