const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const app = express();
const port = 4000;

mongoose.connect('mongodb+srv://admin:admin1234@cluster0.otywiso.mongodb.net/PRAC-DB?retryWrites=true&w=majority&appName=Cluster0');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('Were connected to database'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/users', userRoutes);

if(require.main === module) {
	app.listen(port, () => console.log(`Server is running at ${port}`));
}

module.exports = {app, mongoose};