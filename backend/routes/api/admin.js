const express = require('express');
const { user, notices } = require('../../controllers');
const {
  ctrlWrapper,
  authMiddleware,
  validation,
  uploadCloud,
} = require('../../middleWares');
const { createValidation } = require('../../middleWares/newNoticesValidation');
const { userUpdateValidationSchema } = require('../../models');

const router = express.Router();

router.get('/users', ctrlWrapper(authMiddleware), ctrlWrapper(user.getUsers));
router.get(
  '/users/:id',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(user.getUserById)
);
router.delete(
  '/users/:id',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(user.deleteUsers)
);

router.patch(
  '/users/:id',
  ctrlWrapper(authMiddleware),
  uploadCloud.single('avatar'),
  validation(userUpdateValidationSchema),
  ctrlWrapper(user.updateUser)
);

router.get(
  '/notices',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(notices.getNotices)
);
router.delete(
  '/notices/:id',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(notices.deleteNotices)
);

router.patch(
  '/notices/:id',
  ctrlWrapper(authMiddleware),
  uploadCloud.fields([
    { name: 'imageUrl', maxCount: 1 },
    { name: 'imageUrl_1', maxCount: 1 },
    { name: 'imageUrl_2', maxCount: 1 },
  ]),
  // createValidation,
  ctrlWrapper(notices.editNotices)
);

module.exports = routerAdmin = router;
