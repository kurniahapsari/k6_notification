import express from 'express'
import bodyParser from 'body-parser'
import mysql from 'mysql2'
import dotenv from 'dotenv';
dotenv.config();

const app = express()
app.use(bodyParser.json())

//create koneksi ke db
const db = mysql.createConnection({
    host: process.env.host_url,
    user: process.env.user_db,
    password: process.env.password_db,
    database: process.env.db_name
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database');
});

//endpoint buat simpan token ke db
app.post('/save-token', (req, res) => {
    const { token } = req.body
    if (!token){
        return res.status(400).json({ error: 'Token is required'});
        }

    db.query('INSERT INTO tokens (token) VALUES (?)', [token], (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to save token' })
        }
        res.status(200).json({ message: 'Token saved successfully' })
    })
})


//endpoint buat get token terbaru
app.get('/get-token', (req, res) => {
    db.query('SELECT token FROM tokens ORDER BY RAND() LIMIT 1', (err, results) => {
      if (err || results.length === 0) {
        return res.status(500).json({ error: 'Failed to retrieve token' });
      }
      res.status(200).json({ token: results[0].token });
    });
  });

  
  // Menjalankan server
  const PORT = 3002
  app.listen(PORT, () => {
    console.log(`Middleware API running on http://localhost:${PORT}`);
  });

//endpoint buat simpan id notif ke db
app.post('/save-id-notif', (req, res) => {
    console.log('Body received at server:', req.body);
    const { id_notif } = req.body;

    if (!id_notif) {
        return res.status(400).json({ error: 'Id Notif is required'});
    }

    db.query('INSERT INTO notif (id_notif) VALUES (?)', [id_notif], (err) => {
        if (err) {
            console.error('DB Insert Error:', err);   // <- log error DB
            return res.status(500).json({ error: 'Failed to save id notif' })
        }
        res.status(200).json({ message: 'Id Notif saved successfully' })
    })
});