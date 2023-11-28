
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());

app.post('/send-email', function(req, res) {
    const { name, email, message } = req.body;

    // Конфигурация Nodemailer
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nikitaprivalov278@gmail.com',
            pass: 'Awsz123456'
        }
    });

    var mailOptions = {
        from: 'nikitaprivalov278@gmail.com',
        to: 'nikitaprivalov278@gmail.com',
        subject: 'Новое сообщение от ' + name,
        text: 'Сообщение: ' + message + '\nEmail: ' + email
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.send('error'); 
        } else {
            console.log('Email sent: ' + info.response);
            res.send('sent');
        }
    });
});

app.listen(3000, function() {
    console.log('Сервер запущен на порту 3000');
});