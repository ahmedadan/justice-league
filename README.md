# justice-league

Justice League Team A - Vaccine Passport

# Setup Instructions

In a terminal:

-   `git clone https://github.com/daniel-weisdorf/justice-league.git`
-   `cd justice-league/backend`
-   `npm install`
-   `npm run-script dev`

In a second terminal:

-   `cd justice-league/frontend`
-   `npm install`
-   `npm start`

To confirm that your frontend is connecting to your backend properly

-   add the `DummyServerCheck` component to your `App.js` `render()` method. If you see "Backend is connected", you're good. If you see "Failed to find server", make sure the `node server.js` command worked properly.
