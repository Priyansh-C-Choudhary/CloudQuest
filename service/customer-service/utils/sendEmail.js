const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, text) => {
    try {
        // Nodemailer transport configuration for Gmail
        const transporter = nodemailer.createTransport({
            service: process.env.SERVICE,  // 'gmail' in this case
            auth: {
                user: process.env.USER,  // Your Gmail email address
                pass: process.env.PASS   // Your Gmail app-specific password
            },
            tls: {
                rejectUnauthorized: false  // Helps with self-signed certificates
            }
        });

        // Email options
        const mailOptions = {
            from: process.env.USER,  // Sender's email address (your Gmail)
            to: email,               // Recipient's email address
            subject: subject,        // Email subject
            text: text               // Email body text
        };

        // Send email using async/await
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully: ", info.messageId);
    } catch (error) {
        console.error("Error sending email: ", error);
    }
};

module.exports = sendEmail;
