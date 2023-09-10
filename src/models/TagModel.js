import mongoose from "mongoose";
import { Schema } from "mongoose";

const dataSchema = new Schema({
    tagId:{type:Number,default:Math.floor(100000 + Math.random() * 900000)},
    typeId:{type:Schema.ObjectId,required:true},
    name:{type:String,required:true},
    description:{type:String,required:false},
    meta_tag:{type:String,required:false},
    meta_image:{type:String,required:false},
    meta_title:{type:String,required:false},
    meta_description:{type:String,required:false},
},{timestamps:true,versionKey:false})

const TagModel = mongoose.model("tags",dataSchema)
export default TagModel;