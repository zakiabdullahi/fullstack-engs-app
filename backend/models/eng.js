import mongoose from "mongoose";


const engSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true

        },
        verified: {
            type: Boolean,
            default: false
        }

    },
    {
        timestamps: true,
    }

);

const Eng = mongoose.model('Eng', engSchema);

export default Eng;