require('dotenv').config({ path: '.env', override: true });
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;
console.log('Testing connection with MONGO_URI (raw)=', uri);

if (!uri) {
  console.error('No MONGO_URI found in environment');
  process.exit(1);
}

mongoose.connect(uri)
  .then(() => {
    console.log('Test connection: SUCCESS');
    return mongoose.disconnect();
  })
  .then(() => process.exit(0))
  .catch(err => {
    console.error('Test connection: FAILED', err.message);
    process.exit(1);
  });
