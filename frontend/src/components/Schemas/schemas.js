import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^\s*\S+\s*$/, 'Email must be without spaces')
    .matches(/\S{7,}/, 'Email too short (min 7 symbols)')
    .matches(
      /^(?=.{7,63}$)([^а-яА-Я]+@([a-zA-Z]+\.)+[a-zA-z]{2,3})$/g,
      'Invalid email',
    )
    .matches(
      /^[^-]+((.*[^-]))*@([a-zA-Z]+\.)+[a-zA-z]{2,3}$/g,
      'Dashes should only be inside email',
    )
    .required('Require field'),
  password: Yup.string()
    .min(7, 'Password too short (min 7)')
    .max(32, 'Password too long (max 32)')
    .matches(/^\s*\S+\s*$/, 'Password must be without spaces')
    .required('Require field'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Password must match')
    .required('Require field'),
  name: Yup.string()
    .matches(/\S{2,}/, 'Name too short (min 2)')
    .matches(
      /((\s*[a-zA-Z]+\s*){2,}|[a-zA-Z]{2,})/,
      'Name must includes only Latin alphabet',
    )
    .required('Require field'),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, 'Invalid number. valid +38(0xx) xxx-xx-xx')
    .required('Require field'),
  location: Yup.string()
    .matches(
      /(([A-Za-zsd&.-]){1,}, ([A-Za-zsd&,.-]){1,})/,
      'Invalid format. Example: Brovary, Kyiv ...',
    )
    .required('Require field'),
});

const schemasLogin = Yup.object().shape({
  email: Yup.string()
    .matches(/^\s*\S+\s*$/, 'Email must be without spaces')
    .matches(/\S{7,}/, 'Email too short (min 7 symbols)')
    .matches(
      /^(?=.{7,63}$)([^а-яА-Я]+@([a-zA-Z]+\.)+[a-zA-z]{2,3})$/g,
      'Invalid email',
    )
    .matches(
      /^[^-]+((.*[^-]))*@([a-zA-Z]+\.)+[a-zA-z]{2,3}$/g,
      'Dashes should only be inside email',
    )
    .required('Require'),
  password: Yup.string()
    .min(7, 'Password too short (min 7)')
    .max(32, 'Password too long (max 32)')
    .matches(/^\s*\S+\s*$/, 'Password must be without spaces')
    .required('Require'),
});

const noticeSchemaFirst = Yup.object().shape({
  category: Yup.string().required('Category is Required!'),
  typeofpet: Yup.string().required('Type of Pet is Required!'),
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(48, 'Too Long!')
    .required('Title is Required!'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Name is Required!'),
  birthday: Yup.date().required('BirthDay is Required!'),
  breed: Yup.string()
    .min(2, 'Too Short!')
    .max(34, 'Too Long!')
    .required('Breed is Required!'),
});
const noticeSchemaSecond = Yup.object().shape({
  sex: Yup.string().required('Sex is Required!'),
  size: Yup.string().required('Size is Required!'),
  height: Yup.number()
    .moreThan('0')
    .positive()
    .integer()
    .max(100, 'Too Match!')
    .required('Height is Required!'),
  weight: Yup.number()
    .moreThan('0')
    .positive()
    .max(100, 'Too Match!')
    .required('Weight is Required!'),
  location: Yup.string()
    .matches(
      /(([A-Za-zsd&.-]){1,}, ([A-Za-zsd&,.-]){1,})/,
      'Invalid format. Example: Brovary, Kyiv ...',
    )
    .required('Location is Required!'),
});

const noticeSchemaSecondPrice = noticeSchemaSecond.concat(
  Yup.object().shape({
    price: Yup.number()
      .moreThan('0')
      .positive()
      .integer()
      .required('Price is Required!'),
    currency: Yup.string().required('Currency is Required!'),
  }),
);

const noticeSchemaThird = Yup.object().shape({
  imageUrl: Yup.string().required('Image is Required!'),
  imageUrl_1: Yup.string(),
  imageUrl_2: Yup.string(),
  passport: Yup.string().required('Passport is Required!'),
  sterilization: Yup.string().required('Sterilization is Required!'),
  lives: Yup.string().required('Lives is Required!'),
  comments: Yup.string()
    .min(8, 'Too Short!')
    .max(120, 'Too Long!')
    .required('Comments are Required!'),
});

const addPetsUser = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Name is Required!'),

  data: Yup.date().required('BirthDay is Required!'),

  breed: Yup.string()
    .min(2, 'Too Short!')
    .max(34, 'Too Long!')
    .required('Breed is Required!'),

  // imageUrl: Yup.mixed().required('Photo is Required!'),

  comments: Yup.string()
    .min(8, 'Too Short!')
    .max(120, 'Too Long!')
    .required('Comments are Required!'),
});

const schemas = {
  registerSchema,
  schemasLogin,
  noticeSchemaFirst,
  noticeSchemaSecond,
  noticeSchemaSecondPrice,
  noticeSchemaThird,
  addPetsUser,
};

export default schemas;
