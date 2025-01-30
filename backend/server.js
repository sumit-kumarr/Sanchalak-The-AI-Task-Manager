const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');
require('dotenv').config();

const app = express();
connectDB();

app.use(express.json({ extended: false }));
app.use(cors());
 //app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5001 ||5002;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));