import { Router } from "express";
import { check, param, body } from "express-validator";

import uploadCompanyFile from "../utils/multer.js";
import isAuthorized from "../utils/isAuthorized.js";
import {
  getAllCompanies,
  getAllCompaniesByStatus,
  getAllCompaniesSimilarToName,
  getCompanyById,
  getCompanyByToken,
  getCompanyProductsByToken,
  patchCompany,
  patchCompanyStatus,
  postCompany,
} from "../controllers/companyController.js";

const router = Router();

router.get("/", getAllCompanies);

router.get(
  "/search/:name",
  [
    param("name")
      .not()
      .isEmpty()
      .withMessage("Query param name must be provided"),
  ],
  getAllCompaniesSimilarToName
);

router.get("/token/company", isAuthorized, getCompanyByToken);

router.get("/token/products", isAuthorized, getCompanyProductsByToken);

router.get(
  "/status/:status",
  [param("status").not().isEmpty().withMessage("Query param status incorrect")],
  getAllCompaniesByStatus
);

router.get(
  "/:id",
  [
    param("id")
      .not()
      .isEmpty()
      .isInt()
      .withMessage("Query param id incorrect")
      .toInt(),
  ],
  getCompanyById
);

const multerOptions = uploadCompanyFile.fields([
  { name: "banner", maxCount: 1 },
  { name: "logo", maxCount: 1 },
]);
router.post(
  "/",
  multerOptions,
  [
    body("password")
      .not()
      .isEmpty()
      .withMessage("Password must not be empty")
      .trim()
      .escape(),
    body("email")
      .isEmail()
      .withMessage("Email is invalid")
      .not()
      .isEmpty()
      .withMessage("Email must not be empty")
      .trim()
      .escape(),
    body("name")
      .not()
      .isEmpty()
      .withMessage("Name must not be empty")
      .trim()
      .escape(),
    body("address")
      .not()
      .isEmpty()
      .withMessage("Address must not be empty")
      .trim()
      .escape(),
    check("files")
      .custom((value, { req }) => req.files.banner !== undefined)
      .withMessage("Banner image must be provided"),
    check("files")
      .custom((value, { req }) => req.files.logo !== undefined)
      .withMessage("Logo image must be provided"),
  ],
  postCompany
);

router.patch(
  "/:id",
  isAuthorized,
  multerOptions,
  [
    param("id")
      .not()
      .isEmpty()
      .isInt()
      .withMessage("Query param id incorrect")
      .toInt(),
  ],
  patchCompany
);

router.patch(
  "/status/:id",
  isAuthorized,
  multerOptions,
  [
    body("status")
      .not()
      .isEmpty()
      .withMessage("Status must not be empty")
      .trim()
      .escape(),
    param("id")
      .not()
      .isEmpty()
      .isInt()
      .withMessage("Query param id incorrect")
      .toInt(),
  ],
  patchCompanyStatus
);

export default router;