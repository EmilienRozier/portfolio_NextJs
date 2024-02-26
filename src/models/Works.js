import mongoose, { Schema } from "mongoose";

const WorksSchema = new mongoose.Schema({
    title: String,
    year: Number,
    techno: Array,
    content: Array,
})

const Works = mongoose.models.Works || mongoose.model('Works', WorksSchema)

export default Works;