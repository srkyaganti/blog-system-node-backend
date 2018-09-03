const nodemailer = require('nodemailer');
const emailConfig = require('../config.json').email

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b5b2c288a2826e",
      pass: "a8e4d89a9937ba"
    }
})

class EmailService {
    send(data) {
        return new Promise((resolve, reject) => {
            let mailOptions = {
                from: emailConfig.name +  ' <' + emailConfig.address + '>',
                to: data.email,
                subject: data.subject,
                html: data.html
            }
            
            transporter.verify((err, data) => {
                if(err) {
                    console.log(err)
                    reject(err)
                } else {
                    console.log(data)
                    resolve(data)
                }
            })
            
            // transporter.sendMail(mailOptions, (err, data) => {
            //     if(err) reject(error)
            //     else resolve(data)
            // })
        })
    }
}

module.exports = new EmailService();