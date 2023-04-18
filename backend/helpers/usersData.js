const userMainField = [
  '_id',
  'userName',
  'email',
  // 'password',
  'location',
  'phone',
  'birthday',
  'avatar',
  'favorites',
  'groupAcces',
  'role',
  // 'authToken',
];

const userFullField = [
  '_id',
  'userName',
  'email',
  // 'password',
  'location',
  'phone',
  'birthday',
  'avatar',
  'favorites',
  'groupAcces',
  'authToken',
  'role',
];

const userFieldReceivedFromFront = [
  'userName',
  'email',
  'location',
  'phone',
  'birthday',
  'avatar',
];

const requiredSignUpFields = [
  'userName',
  'email',
  'location',
  'phone',
  'password',
];

module.exports = {
  userMainField,
  userFullField,
  userFieldReceivedFromFront,
  requiredSignUpFields,
};
