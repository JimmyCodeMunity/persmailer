const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodeMailer = require('nodemailer');
const { sendEmail, sendReminder, sendGiveMissmatch, sendPassMissmatch, sendEvidence, sendCongrats } = require('./controllers/MailControllers');
const { reminderHtml, givemismatchHtml, passmismatchHtml, evidenceHtml, congratsHtml } = require('./controllers/MailBody');



const app = express();
const port = 3000; // You can change this to any port you prefer

app.use(cors()); // Enable CORS
app.use(bodyParser.json());




// HTML messages



//main route
app.get('/', (req, res) => {
    res.send('Pax Mailer has been deployed...system ready to run.')

})

// Route to send confirmation email
app.post('/sendconfirm', async (req, res) => {
    //const email = 'jameswafula2002@gmail.com'; // You can get this from request parameters or body
    const { email } = req.body;
    const subject = 'Paxful';


    try {

        await sendEmail(email, subject, confirmationHtml);
        res.send('Confirmation email sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Route to send reminder email
app.post('/sendreminder', async (req, res) => {
    //const email = 'jameswafula2002@gmail.com'; // You can get this from request parameters or body
    const { email } = req.body;
    const subject = 'Paxful';


    try {

        await sendReminder(email, subject, reminderHtml);
        res.send('Confirmation email sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


// Route to send givemissmatch email
app.post('/sendgivemissmatch', async (req, res) => {
    //const email = 'jameswafula2002@gmail.com'; // You can get this from request parameters or body
    const { email } = req.body;
    const subject = 'Paxful';


    try {

        await sendGiveMissmatch(email, subject, givemismatchHtml);
        res.send('Confirmation email sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


// Route to send password missmatch email
app.post('/sendpassmissmatch', async (req, res) => {
    //const email = 'jameswafula2002@gmail.com'; // You can get this from request parameters or body
    const { email } = req.body;
    const subject = 'Paxful';


    try {

        await sendPassMissmatch(email, subject, passmismatchHtml);
        res.send('Confirmation email sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


// Route to send evidence email
app.post('/sendevidence', async (req, res) => {
    //const email = 'jameswafula2002@gmail.com'; // You can get this from request parameters or body
    const { email } = req.body;
    const subject = 'Paxful';


    try {

        await sendEvidence(email, subject, evidenceHtml);
        res.send('Confirmation email sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Route to send congratulations email
app.post('/sendcongrats', async (req, res) => {
    //const email = 'dev.jimin02@gmail.com'; // You can get this from request parameters or body
    const { email } = req.body;
    const subject = 'Paxful';

    try {
        await sendCongrats(email, subject, congratsHtml);
        res.send('Congratulations email sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
