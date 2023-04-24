const express = require('express');
const { user, notices } = require('../../controllers');
const { ctrlWrapper, authMiddleware } = require('../../middleWares');

const router = express.Router();

router.get('/users', ctrlWrapper(authMiddleware), ctrlWrapper(user.getUsers));
router.delete(
  '/users/:id',
  ctrlWrapper(authMiddleware),
  ctrlWrapper(user.deleteUsers)
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

module.exports = routerAdmin = router;
