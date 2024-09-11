import mongoose from 'mongoose';
import autoIncrement from 'mongoose-sequence'; // Import mongoose-sequence

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    city: String
});

// Apply the autoIncrement plugin
userSchema.plugin(autoIncrement(mongoose), { inc_field: 'id' });

const User = mongoose.model('User', userSchema);

export default User;
