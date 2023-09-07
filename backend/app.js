import path from "path"
import express from 'express';
import connectDB from './config/db.js';
import { port } from './config/config.js';
import morgan from 'morgan';
import engRouter from './routes/eng.js';
import cors from 'cors';
const app = express();
const PORT = port || 8000

app.use(express.json());
app.use(morgan("dev"));




const whitelist = ['http://localhost:3000', 'http://localhost:5173'];

var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };  // Reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false };  // Disable CORS for this request
    }
    callback(null, corsOptions);  // Callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate))


connectDB();



app.use('/api/v1/engs', engRouter);
// app.use('/api/v1/users', postRouter);


if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    })

} else {
    app.get('/api', (req, res) => {
        res.send('API is running....')
    })
}


// 404






app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})