import  { model, Schema } from "mongoose";

const userSchema = Schema({
    name: {
        type: String,
        required: [true, 'User Name is required'],
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    email: {
        type: String,
        required: [true, 'User Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\s+/, 'Please fill a valid email address.']
    },
    password: {
        type: String,
        required: [true, 'User Password is required'],
        minLength: 6,
    }
}, {timestamps: true})

export const User = model('User',userSchema);