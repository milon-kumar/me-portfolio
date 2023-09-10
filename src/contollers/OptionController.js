import {allTypes,typeCreateUpdate,showType,deleteType,allTags,tagCreateUpdate,tagShow,tagDelete} from "../services/OptionService.js"

export const types = async (req,res)=>{
    const result = await allTypes();
    return res.status(200).json(result);
}

export const typeCreate = async (req,res)=>{
    const result = await typeCreateUpdate(req);
    return res.status(201).json(result);
}

export const typeShow = async (req,res)=>{
    const result = await showType(req);
    return res.status(200).json(result);
}

export const typeUpdate = async (req,res)=>{
    const result = await typeCreateUpdate(req);
    return res.status(200).json(result);
}

export const typeDelete = async (req,res)=>{
    const result = await deleteType(req);
    return res.status(200).json(result);
}



export const tags = async (req,res)=>{
    const result = await allTags();
    return res.status(200).json(result);
}

export const tagCreate = async (req,res)=>{
    const result = await tagCreateUpdate(req);
    return res.status(201).json(result);
}

export const showTag = async (req,res)=>{
    const result = await tagShow(req);
    return res.status(200).json(result);
}

export const tagUpdate = async (req,res)=>{
    const result = await tagCreateUpdate(req);
    return res.status(200).json(result);
}

export const deleteTag = async (req,res)=>{
    const result = await tagDelete(req);
    return res.status(200).json(result);
}



export const categories = async (req,res)=>{
    const result = await allCategories();
    return res.status(200).json(result);
}

export const categoryCreate = async (req,res)=>{
    const result = await categoryCreateUpdate(req);
    return res.status(201).json(result);
}

export const showCategory = async (req,res)=>{
    const result = await categoryShow(req);
    return res.status(200).json(result);
}

export const categoryUpdate = async (req,res)=>{
    const result = await categoryCreateUpdate(req);
    return res.status(200).json(result);
}

export const deleteCategory = async (req,res)=>{
    const result = await categoryDelete(req);
    return res.status(200).json(result);
}