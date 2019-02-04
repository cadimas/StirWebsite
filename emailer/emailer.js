let fs = require("fs");
let nodemailer = require("nodemailer");
let smtpTransport = require("nodemailer-smtp-transport");

let details = require("./details");

exports.send = function(First, Last, email, Subject, Message) {
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
    subject: Subject, // Subject line
    text:
      "From: " +
      email +
      "First name: " +
      First +
      " Last name: " +
      Last +
      " Email: " +
      email +
      " Message: " +
      Message, // plain text body
    html:
      "From: " +
      email +
      "First name: " +
      First +
      " Last name: " +
      Last +
      " Email: " +
      email +
      " Message: " +
      Message // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return false;
    }

    let data = First + " " + Last + "\n";
    fs.appendFile("log.txt", data, function(err) {
      if (err) throw err;
      console.log("Saved!");
    });
    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    return true;
  });
};
