const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/lessons');
const user = mongoose.model('user', { name: String });

const userStream = new user({ name: 'Narina' });
userStream.save().then(() => console.log('kkkk'));