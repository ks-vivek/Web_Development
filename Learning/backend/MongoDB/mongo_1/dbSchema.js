import mongoose from "mongoose";

const helloSchema = new mongoose.Schema({
    first : {
        type : String
    },
    last : {
        type : String
    },
    mobile : {
        type : Number
    }
})

export default mongoose.model("info_about_user", helloSchema);