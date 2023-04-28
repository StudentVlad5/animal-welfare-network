import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { update } from 'redux/auth/operations';
import {
  CheckMarkStyle,
  Error,
  InputWrapper,
  PensilStyle,
  UserDataItemBtn,
  UserDataItemInput,
  UserDataItemInputBtnWrapper,
  UserDataItemLabel,
  UserDataItemWrapper,
} from './UserDataItem.styled';

export const UserDataItem = ({
  name,
  label,
  type,
  defaultValue,
  active,
  setActive,
  profile,
}) => {
  const emailRegExp = /^.+@.+\..+$/;
  const cityRegex = /^[a-zA-Z\s,'-]+$/;
  const phoneRegExp = /^\+380\d{9}$/;
  const dayToday = new Date().toLocaleDateString();
  const minDate = new Date('01.01.1910').toLocaleDateString();

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(defaultValue ?? '');
  const [isError, setIsError] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'userName':
        setInputValue(value);
        break;

      case 'email':
        setInputValue(value);
        break;

      case 'birthday':
        setInputValue(value);
        break;

      case 'phone':
        setInputValue(value);
        break;

      case 'location':
        setInputValue(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = name => {
    switch (name) {
      case 'userName':
        setActive('userName');
        if (
          inputValue.length !== 0 &&
          (inputValue.length < 2 || inputValue.length > 16)
        ) {
          setIsError('type from 2 to 16 letters');
          return;
        }
        setIsError('');
        setActive('');
        dispatch(update({ userName: inputValue }));
        break;

      case 'email':
        setActive('email');
        if (!inputValue.match(emailRegExp)) {
          setIsError('please type valid email');
          return;
        }
        setIsError('');
        setActive('');
        dispatch(update({ email: inputValue }));
        break;

      case 'birthday':
        setActive('birthday');
        if (inputValue > dayToday) {
          setIsError('date must be current');
          return;
        }
        if (inputValue < minDate) {
          setIsError('date must be current');
          return;
        }
        setIsError('');
        setActive('');
        dispatch(
          update({
            birthday: inputValue,
          }),
        );
        break;

      case 'phone':
        setActive('phone');
        if (!phoneRegExp.test(inputValue)) {
          setIsError('please type valid phone number starting with +380');
          return;
        }
        if (inputValue.length !== 13) {
          setIsError('phone number should contain 13 digits');
          return;
        }
        setIsError('');
        setActive('');
        dispatch(update({ phone: inputValue }));
        break;

      case 'location':
        setActive('location');
        if (!inputValue.match(cityRegex)) {
          setIsError('use format Kyiv, Brovary');
          return;
        }
        setIsError('');
        setActive('');
        dispatch(update({ location: inputValue }));
        break;

      default:
        return;
    }
  };

  const activeHandleClick = name => {
    if (!active) setActive(name);
  };

  return (
    <UserDataItemWrapper>
      <UserDataItemLabel htmlFor={name}>{label}</UserDataItemLabel>
      <UserDataItemInputBtnWrapper>
        <InputWrapper>
          <UserDataItemInput
            value={!profile ? inputValue : defaultValue}
            onChange={handleChange}
            active={active === name}
            disabled={active !== name}
            type={type}
            name={name}
            id={name}
          />
          {isError && active === name ? <Error>{isError}</Error> : null}
        </InputWrapper>

        {!profile &&
          (active === name ? (
            <UserDataItemBtn>
              <CheckMarkStyle onClick={() => handleSubmit(name)} />
            </UserDataItemBtn>
          ) : (
            <UserDataItemBtn
              disabled={active && active !== name}
              onClick={() => activeHandleClick(name)}
            >
              <PensilStyle />
            </UserDataItemBtn>
          ))}
      </UserDataItemInputBtnWrapper>
    </UserDataItemWrapper>
  );
};
