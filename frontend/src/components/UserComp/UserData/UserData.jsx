import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserDataItem } from './UserDataItem/UserDataItem';
import defaultUserPhoto from '../../../images/UserData/defaultUserPhoto.webp';
import {
  EditCameraForm,
  EditCameraStyle,
  EditCameraWrapper,
  EditPhotoInput,
  EditPhotoLabel,
  UserDataContainer,
  UserDataImg,
  UserDataImgWrapper,
  UserDataList,
} from './UserData.styled';
import { useAuth } from 'hooks/useAuth';
import { update } from 'redux/auth/operations';
import { useTranslation } from 'react-i18next';

export const UserData = () => {
  const [active, setActive] = useState('');
  const dispatch = useDispatch();
  const { t } = useTranslation();

  let { userIn } = useAuth();
  let profile = false;

  const changeAvatar = e => {
    const data = new FormData();
    data.append('avatar', e.target.files[0]);
    dispatch(update(data));
  };

  const birthday = userIn.birthday
    ? new Date(userIn.birthday).toISOString().slice(0, 10)
    : '';

  return (
    <>
      <UserDataContainer>
        <UserDataImgWrapper>
          <UserDataImg
            src={userIn.avatar ? userIn.avatar : defaultUserPhoto}
            alt="User"
          />
          <EditCameraForm>
            <EditCameraWrapper>
              <EditPhotoLabel htmlFor="user_photo">
                <EditCameraStyle />
                <span>{t("Edit photo")}</span>
              </EditPhotoLabel>
            </EditCameraWrapper>
            <EditPhotoInput
              type="file"
              name="edit photo"
              id="user_photo"
              onChange={changeAvatar}
              accept=".gif,.jpg,.jpeg,.webp,.png"
            />
          </EditCameraForm>
        </UserDataImgWrapper>

        <UserDataList>
          <UserDataItem
            profile={profile}
            label={'Name:'}
            defaultValue={userIn.userName}
            type="text"
            name="userName"
            active={active}
            setActive={setActive}
            id="name"
          />

          <UserDataItem
            profile={profile}
            label={'Email:'}
            defaultValue={userIn.email}
            type="email"
            name="email"
            active={active}
            setActive={setActive}
            id="email"
          />

          <UserDataItem
            profile={profile}
            label={'Birthday:'}
            defaultValue={birthday || '01.01.1900'}
            type="date"
            name="birthday"
            active={active}
            setActive={setActive}
            id="birthday"
          />

          <UserDataItem
            profile={profile}
            label={'Phone:'}
            defaultValue={userIn.phone}
            type="tel"
            name="phone"
            active={active}
            setActive={setActive}
            id="phone"
          />

          <UserDataItem
            profile={profile}
            label={'City:'}
            defaultValue={userIn.location}
            type="text"
            name="location"
            active={active}
            setActive={setActive}
            id="city"
          />
        </UserDataList>
      </UserDataContainer>
    </>
  );
};
