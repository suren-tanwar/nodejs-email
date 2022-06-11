const express= require('express')
const morgan= require('morgan')
const app = express();
const abcRoutes = require('./utils/sendEmail');
const cors = require('cors');
// const cookieParser= require ("cookie-parser")
app.use(cors());
app.options('*', cors());
app.use(morgan('dev'));
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({extended: true,})); //Parse URL-encoded bodies





//ROUTES 
app.use('/email/' ,abcRoutes);

// iF THERE IS ERROR IN BACKEND SERVER



module.exports = app; 