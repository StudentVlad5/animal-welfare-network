import { PetsList } from './PetsList/PetsList';

import {
  AddPetDiv,
  AddPetWrapper,
  PetDataInfo,
  PetDataWrapper,
} from './PetsData.styled';

export const PetsData = ({ petsList, removePetList }) => {
  return (
    <>
      <AddPetWrapper>
        <AddPetDiv></AddPetDiv>

        {petsList?.length === 0 ? (
          <PetDataWrapper>
            <PetDataInfo>Unfortunately there is no one here yet.</PetDataInfo>
          </PetDataWrapper>
        ) : (
          <PetsList petsList={petsList} removePetList={removePetList} />
        )}
      </AddPetWrapper>
    </>
  );
};
