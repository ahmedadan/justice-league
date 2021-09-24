import { Component } from "react";
import { Pages } from "../globals/Enums";
import QrScanner from "qr-scanner";

import { toast } from "react-toastify";

QrScanner.WORKER_PATH = "../qr-scanner-worker.min.js";

export default class Scan extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    qrScanner;

    componentDidMount() {
        const videoElem = document.getElementById("qrScan");
        this.qrScanner = new QrScanner(videoElem, (result) =>
            console.log("decoded qr code:", result)
        );
        this.qrScanner.start();
    }
    componentWillUnmount() {
        this.qrScanner.stop();
    }

    async processQrCodeScan(qrCode) {
        console.log(qrCode);

        try {
            const fields = qrCode.split(",");
            const userId = fields[0];
            const token = fields[1];
            const name = fields[2];
            const email = fields[3];
            const phone = fields[4];

            // hit api
            const response = await fetch("/validate", {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    userId: userId,
                    token: token,
                }),
            });

            const resultJSON = await response.json();

            console.log(resultJSON);
            if (resultJSON) {
                toast("QR Code Validated!", {
                    type: "success",
                });
                // save values
            } else {
                toast("QR Code is not valid.", {
                    type: "error",
                });
            }
        } catch (error) {
            toast("QR Code is improperly formatted", {
                type: "error",
            });
            console.log("invalid qr");
            console.log(error);
        }
    }

    scanImage() {
        const videoElem = document.getElementById("qrScan");
        QrScanner.scanImage(videoElem)
            .then((result) => this.processQrCodeScan(result))
            .catch((error) =>
                toast("Could not read QR code, try again!", { type: "warning" })
            );
    }

    render() {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <video id="qrScan"></video>
                <button onClick={() => this.scanImage()}> SCAN </button>
                <button onClick={() => this.props.setPage(Pages.LANDING)}>
                    back
                </button>
            </div>
        );
    }
}
