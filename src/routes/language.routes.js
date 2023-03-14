import { Router } from "express";
import { methods as languageController, methods } from "../controllers/languages.controller";

const router = Router();

router.get('/', methods.getLanguages);
router.get('/:id', methods.getLanguage);
router.post('/', methods.addLanguages);
router.delete('/:id', methods.deleteLanguage);
router.put('/:id', methods.updateLanguage);

export default router;