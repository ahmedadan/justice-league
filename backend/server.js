const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const totp = require("totp-generator");
const { v4: uuid } = require('uuid');
const OTPAuth = require('otpauth');
const base32 = require('base32')

let userDB = {}

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/signup', (req, res) => {
    const userId = generateUserId();
    const sharedSecret = userId.split("-")[4];
    const encodedSecret = base32.encode(sharedSecret);
    userDB[userId] = encodedSecret
    res.send(JSON.stringify({userId, encodedSecret}));
});

app.post('/validate', (req, res) => {
    const userId = req.body.userId;
    const token = req.body.token;
    res.send(verify(userId, token));
});

app.get("/ping", (req, res) => {
    res.send({ msg: "Backend is connected" });
});

function verify(userId, userTotp) {
    let totp = new OTPAuth.TOTP({
        digits: 8,
        period: 60,
        secret: userDB[userId]
    })
    let ret = totp.validate({
        token: userTotp,
        window: 2
    })
    return !(ret === null)
}

function generateUserId() {
    return uuid();
}