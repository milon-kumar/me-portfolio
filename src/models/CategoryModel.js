import mongoose from "mongoose";
import { Schema } from "mongoose";

const dataSchema = new Schema({
    typeId:{type:Schema.ObjectId,required:true},
    name:{type:String,required:true},
    description:{type:String,required:false},
    image:{type:String,required:false},
    meta_tag:{type:String,required:false},
    meta_image:{type:String,required:false},
    meta_title:{type:String,required:false},
    meta_description:{type:String,required:false},
},{timestamps:true,versionKey:false})

const CategoryModel = mongoose.model("categories",dataSchema)
export default CategoryModel;