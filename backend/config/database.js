/**
 * Placeholder for database configuration
 * This file will contain the configuration settings for the database connection.
 */

const mongoose = require('mongoose');

const dbUrl = process.env.DATABASE_URL || 'mongodb://localhost:27017/tracksy';

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
