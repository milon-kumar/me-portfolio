import TagModel from "../models/TagModel.js"
import TypeModel from "../models/TypeModel.js"
import CategoryModel from "../models/CategoryModel.js"

export const allTypes = async () => {
    try {
        const types = await TypeModel.find({})
        return{
            success:true,
            message:"Type Get Success",
            data:types,
        }
    } catch (error) {
        return{
            success:false,
            message:"Type Get Fail",
            data:error.message,
        }
    }
}

export const typeCreateUpdate = async (req) => {
    try {
        const id = req.params.id
        const data = req.body;
        let type ;
        if(id){
            type = await TypeModel.findByIdAndUpdate(id,{$set:data})
        }else{
            type = await TypeModel.create(data);
        }
        return{
            success:true,
            message:"Type Create Or Update Success ",
            data:type,
        }
    } catch (error) {
        return{
            success:false,
            message:"Type Create Or Update Fail",
            data:error.message,
        }
    }
}

export const showType = async (req) =>{
    try {
        const id = req.params.id
        const type = await TypeModel.findById({"_id":id})
        return{
            success:true,
            message:"Single Type Get Success",
            data:type,
        }
    } catch (error) {
        return{
            success:false,
            message:"Type Create Fail",
            data:error.message,
        }
    }
}

export const deleteType = async (req) =>{
    try {
        const id = req.params.id
        const type = await TypeModel.findByIdAndRemove(id)
        return{
            success:true,
            message:"Single Type Delete Success",
            data:type,
        }
    } catch (error) {
        return{
            success:false,
            message:"Type Create Fail",
            data:error.message,
        }
    }
}


export const allTags = async () => {
    try {
        const response = await TagModel.aggregate([
            {$lookup:{from:"types",localField:"typeId",foreignField:"_id",as:"type"}},
            {$project:{"type._id":0,"type.createdAt":0,"type.updatedAt":0}}
        ])
        return{
            success:true,
            message:"Tag Get Success",
            data:response,
        }
    } catch (error) {
        return{
            success:false,
            message:"Tag Get Fail",
            data:error.message,
        }
    }
}

export const tagCreateUpdate = async (req) => {
    try {
        const id = req.params.id
        const data = req.body;
        let response ;
        if(id){
            response = await TagModel.findByIdAndUpdate(id,{$set:data})
        }else{
            response = await TagModel.create(data);
        }
        return{
            success:true,
            message:"Tag Create Or Update Success ",
            data:response,
        }
    } catch (error) {
        return{
            success:false,
            message:"Tag Create Or Update Fail",
            data:error.message,
        }
    }
}

export const tagShow = async (req) =>{
    try {
        const id = req.params.id
        const response = await TagModel.findById({"_id":id})
        return{
            success:true,
            message:"Single Tag Get Success",
            data:response,
        }
    } catch (error) {
        return{
            success:false,
            message:"Tag Create Fail",
            data:error.message,
        }
    }
}

export const tagDelete = async (req) =>{
    try {
        const id = req.params.id
        const response = await TagModel.findByIdAndRemove(id)
        return{
            success:true,
            message:"Single Tag Delete Success",
            data:response,
        }
    } catch (error) {
        return{
            success:false,
            message:"Tag Create Fail",
            data:error.message,
        }
    }
}


export const allCategories = async () => {
    try {
        const response = await CategoryModel.aggregate([{$lookup:{from:"types",localField:"typeId",foreignField:"_id",as:"type"}}])
        return{
            success:true,
            message:"Category Get Success",
            data:response,
        }
    } catch (error) {
        return{
            success:false,
            message:"Category Get Fail",
            data:error.message,
        }
    }
}

export const categoryCreateUpdate = async (req) => {
    try {
        const id = req.params.id
        const data = req.body;
        let response ;
        if(id){
            response = await TagModel.findByIdAndUpdate(id,{$set:data})
        }else{
            response = await TagModel.create(data);
        }
        return{
            success:true,
            message:"Category Create Or Update Success ",
            data:response,
        }
    } catch (error) {
        return{
            success:false,
            message:"Category Create Or Update Fail",
            data:error.message,
        }
    }
}

export const categoryShow = async (req) =>{
    try {
        const id = req.params.id
        const response = await TagModel.findById({"_id":id})
        return{
            success:true,
            message:"Single Category Get Success",
            data:response,
        }
    } catch (error) {
        return{
            success:false,
            message:"Single Category Get Fail",
            data:error.message,
        }
    }
}

export const categoryDelete = async (req) =>{
    try {
        const id = req.params.id
        const response = await TagModel.findByIdAndRemove(id)
        return{
            success:true,
            message:"Single Category Delete Success",
            data:response,
        }
    } catch (error) {
        return{
            success:false,
            message:"Category Delete Fail",
            data:error.message,
        }
    }
}
