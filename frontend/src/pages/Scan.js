import { Component } from "react";
import { Pages } from "../globals/Enums";
import QrScanner from "qr-scanner";

import { toast } from "react-toastify";
import {Button} from '@material-ui/core';
import BackgroundImage from "../BackgroundImage_plain.png";

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

                let currentList = JSON.parse(
                    localStorage.getItem("scanned_people") || "[]"
                );
                currentList.push({
                    userId: userId,
                    name: name ?? "",
                    email: email ?? "",
                    phone: phone ?? "",
                    timestamp: new Date().toLocaleString(),
                });
                localStorage.setItem(
                    "scanned_people",
                    JSON.stringify(currentList)
                );
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
                    display: "in-line",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    maxWidth: '100%',
                    maxHeight: '100px',
                    backgroundImage: `url(${BackgroundImage})`
                }}
            >
                <div style={{backgroundColor: "#322061", borderRadius: "10px"}}>
                    <video id="qrScan" style={{height: "80%", width: "80%"}}></video>
                </div>
                <Button onClick={() => this.scanImage()}
                style={{
                    backgroundColor: "#FFFFFF", 
                    borderColor: "#322061",
                    border: "2px solid",
                    color: "#322061", 
                    borderRadius:30, 
                    padding:20, 
                    margin:10, 
                    width:"150px",
                    height: "50px",
                    textTransform: "inherit"
                }}> Scan </Button>
                <Button onClick={() => this.props.setPage(Pages.LANDING)} 
                style={{
                    backgroundColor: "#FFFFFF", 
                    borderColor: "#322061",
                    border: "2px solid",
                    color: "#322061", 
                    borderRadius:30, 
                    padding:20, 
                    margin:10, 
                    //boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
                    width:"150px",
                    height: "50px",
                    textTransform: "inherit"
                }}>
                    Back
                </Button>
            </div>
        );
    }
}
