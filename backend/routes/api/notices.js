const express = require("express");
const { notices } = require("../../controllers");
const {
  ctrlWrapper,
  authMiddleware,
  uploadCloud,
  tokenValidation,
  newNoticesValidation,
} = require("../../middleWares");
const { createValidation, validateId } = newNoticesValidation;
const {
  createNotices,
  get,
  getId,
  addFavorite,
  deleteFavorite,
  deleteNotices,
  editNotices,
} = notices;

const router = express.Router();

router.get("/", ctrlWrapper(tokenValidation), ctrlWrapper(get));
router.get("/:category", ctrlWrapper(tokenValidation), ctrlWrapper(get));
router.get("/byid/:id", validateId, ctrlWrapper(getId));
router.post(
  "/:category",
  ctrlWrapper(authMiddleware),
  uploadCloud.fields([
    { name: "imageUrl", maxCount: 1 },
    { name: "imageUrl_1", maxCount: 1 },
    { name: "imageUrl_2", maxCount: 1 },
  ]),
  createValidation,
  ctrlWrapper(createNotices)
);
router.patch(
  "/:id",
  ctrlWrapper(authMiddleware),
  uploadCloud.fields([
    { name: "imageUrl", maxCount: 1 },
    { name: "imageUrl_1", maxCount: 1 },
    { name: "imageUrl_2", maxCount: 1 },
  ]),
  // createValidation,
  ctrlWrapper(editNotices)
);
router.post(
  "/favorites/:id",
  validateId,
  ctrlWrapper(authMiddleware),
  ctrlWrapper(addFavorite)
);
router.delete(
  "/favorites/:id",
  validateId,
  ctrlWrapper(authMiddleware),
  ctrlWrapper(deleteFavorite)
);
router.delete("/:id", ctrlWrapper(authMiddleware), ctrlWrapper(deleteNotices));

module.exports = routerNotices = router;
