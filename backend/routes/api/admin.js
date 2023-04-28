const express = require('express');
const { user, notices } = require('../../controllers');
const {
  ctrlWrapper,
  authMiddleware,
  validation,
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

router.put(
  '/users/:id',
  ctrlWrapper(authMiddleware),
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

router.put(
  '/notices/:id',
  ctrlWrapper(authMiddleware),
  createValidation,
  ctrlWrapper(notices.updateNotices)
);

module.exports = routerAdmin = router;
