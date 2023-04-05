import { useEffect, useState } from 'react';
import { PetsData } from 'components/UserComp/PetsData/PetsData';
import { UserData } from 'components/UserComp/UserData/UserData';
import { UserDataTitle } from 'components/UserComp/UserDataTitle/UserDataTitle';
import { Logout } from 'components/UserComp/Logout/Logout';
import { AddPetButton } from 'components/UserComp/PetsData/AddPetButton/AddPetButton';
import {
  TopContainer,
  UserAboutWrapper,
  UserDataContainer,
  UserDataWrapper,
  UserPageWrapper,
  MyPetTitle,
} from './UserPage.styled';

import axios from 'axios';
import { addReload } from 'redux/reload/slice';
import { reloadValue } from 'redux/reload/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Section } from 'components/baseStyles/CommonStyle.styled';

const UserPage = () => {
  const dispatch = useDispatch();

  const [petsList, setPetsList] = useState([]);

  const removePetList = async _id => {
    try {
      const result = await axios.delete(`/pets/${_id}`);
      setPetsList(petsList.filter(pet => pet._id !== _id));
      return { result, _id };
    } catch ({ response }) {
      return response.data.message;
    }
  };

  const reload = useSelector(reloadValue);

  useEffect(() => {
    const getPets = async () => {
      const { data } = await axios('/user');
      return data.pets;
    };
    async function fetchPets() {
      const pets = await getPets();
      setPetsList(pets);
    }
    fetchPets();
    if (reload) {
      setTimeout(() => fetchPets(), 200);
      dispatch(addReload(false));
    }
  }, [dispatch, reload]);

  return (
    <>
      <Section>
        <Container>
          <UserPageWrapper>
            <UserDataWrapper>
              <UserDataTitle title="My information:" />
              <UserDataContainer>
                <UserData />
                <Logout />
              </UserDataContainer>
            </UserDataWrapper>
            <UserAboutWrapper>
              <TopContainer>
                <MyPetTitle>My pets:</MyPetTitle>
                <AddPetButton />
              </TopContainer>
              <PetsData petsList={petsList} removePetList={removePetList} />
            </UserAboutWrapper>
          </UserPageWrapper>
        </Container>
      </Section>
    </>
  );
};

export default UserPage;
