import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            max: 8,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            max: 25
        },
        password: {
            type: String,
            required: true,
            max: 10,
        },
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.model('user', userSchema);