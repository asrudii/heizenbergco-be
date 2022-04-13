const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aseprudi.luqmanul@gmail.com',
    pass: 'sbsxewlvzkucazoc',
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = transporter;
