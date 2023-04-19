// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { addReload } from 'redux/reload/slice';
// import { reloadValue } from 'redux/reload/selectors';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
// import { PetsData } from 'components/UserComp/PetsData/PetsData';
import { UserData } from 'components/UserComp/UserData/UserData';
import { Logout } from 'components/UserComp/Logout/Logout';
// import { AddPetButton } from 'components/UserComp/PetsData/AddPetButton/AddPetButton';
import {
  UserSection,
  UserContainer,
  TopContainer,
  UserAboutWrapper,
  UserDataContainer,
  UserDataWrapper,
  UserTitle,
} from './UserComp.styled';
import { Title } from 'components/baseStyles/CommonStyle.styled';
import { useNavigate } from 'react-router-dom';
import {
  ButtonStyled,
  PlusIcon,
} from 'components/NoticesComp/AddNoticeButton/AddNoticeButton.styled';
import { toggleModalAddNotice } from 'utils/toggleModalNotice';
import { getBreeds } from 'utils/getBreeds';

export const UserComp = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  // const [petsList, setPetsList] = useState([]);

  // const removePetList = async _id => {
  //   try {
  //     const result = await axios.delete(`/pets/${_id}`);
  //     setPetsList(petsList.filter(pet => pet._id !== _id));
  //     return { result, _id };
  //   } catch ({ response }) {
  //     return response.data.message;
  //   }
  // };

  // const reload = useSelector(reloadValue);

  // useEffect(() => {
  //   const getPets = async () => {
  //     const { data } = await axios('/user');
  //     return data.pets;
  //   };
  //   async function fetchPets() {
  //     const pets = await getPets();
  //     setPetsList(pets);
  //   }
  //   fetchPets();
  //   if (reload) {
  //     setTimeout(() => fetchPets(), 200);
  //     dispatch(addReload(false));
  //   }
  // }, [dispatch, reload]);

  return (
    <UserSection>
      <UserContainer>
        <Title as="h1" hidden>
          Profile
        </Title>
        <UserDataWrapper>
          <UserTitle as="h2">My information:</UserTitle>
          <UserDataContainer>
            <UserData />
            <Logout />
          </UserDataContainer>
        </UserDataWrapper>
        <UserAboutWrapper>
          <TopContainer>
            {/* <UserTitle as="h2">My pets:</UserTitle> */}
            <ButtonStyled
              onClick={e => {
                navigate('/notices/sell?perPage=12&page=1');
                toggleModalAddNotice(e, isLoggedIn, dispatch);
                getBreeds(dispatch);
              }}
              data-modal="formSell"
            >
              <div>
                <PlusIcon />
              </div>
              Add pet
            </ButtonStyled>
            {/* {isLoggedIn && <AddNoticeModal />} */}
            {/* <AddPetButton /> */}
          </TopContainer>
          {/* <PetsData petsList={petsList} removePetList={removePetList} /> */}
        </UserAboutWrapper>
      </UserContainer>
    </UserSection>
  );
};
