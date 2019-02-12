let nodemailer = require("nodemailer");
let smtpTransport = require("nodemailer-smtp-transport");

let details = require("./details");

exports.send = function(first, last, email, subject, message, cb) {
  let transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      auth: {
        user: details.botEmail, // generated ethereal user
        pass: details.botPw // generated ethereal password
      }
    })
  );

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Stir Bot 👻" <' + details.botEmail + ">", // sender address
    to: details.recepient, // list of receivers
    subject: subject, // Subject line
    html: `<p>Name: ${first} ${last}</p><p>Email: ${email}</p><p>Subject ${subject}</p><p>Message ${message}</p>`
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    cb(error);
    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    return true;
  });
};
