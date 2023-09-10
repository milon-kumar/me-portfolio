import express from "express";
import { types ,typeCreate,typeShow,typeUpdate,typeDelete, tags, tagCreate, showTag, tagUpdate, deleteTag,categories,categoryCreate,categoryUpdate,showCategory,deleteCategory} from "../contollers/OptionController.js";
import { categoryDelete } from "../services/OptionService.js";


const router = express.Router();

router.get('/types',types)
router.post('/type-create',typeCreate)
router.get('/types-show/:id',typeShow)
router.post('/types-update/:id',typeUpdate)
router.get('/types-delete/:id',typeDelete)


router.get('/tags',tags)
router.post('/tag-create',tagCreate)
router.get('/tag-show/:id',showTag)
router.post('/tag-update/:id',tagUpdate)
router.get('/tag-delete/:id',deleteTag)


router.get('/categories',categories)
router.post('/category-create',categoryCreate)
router.get('/category-show/:id',showCategory)
router.post('/category-update/:id',categoryUpdate)
router.get('/category-delete/:id',categoryDelete)


export default router;