import mongoose from "mongoose";
import { Schema } from "mongoose";

const dataSchema = new Schema({
    typeId:{type:Number,default:Math.floor(100000 + Math.random() * 900000)},
    name:{type:String,required:true},
    description:{type:String,required:false},
    meta_tag:{type:String,required:false},
    meta_image:{type:String,required:false},
    meta_title:{type:String,required:false},
    meta_description:{type:String,required:false},
},{timestamps:true,versionKey:false})

const TypeModel = mongoose.model("types",dataSchema)
export default TypeModel;