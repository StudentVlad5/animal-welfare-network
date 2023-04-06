import { PetsList } from './PetsList/PetsList';

import { AddPetWrapper, PetDataInfo, PetDataWrapper } from './PetsData.styled';

export const PetsData = ({ petsList, removePetList }) => {
  return (
    <AddPetWrapper>
      {petsList?.length === 0 ? (
        <PetDataWrapper>
          <PetDataInfo>Unfortunately there is no one here yet.</PetDataInfo>
        </PetDataWrapper>
      ) : (
        <PetsList petsList={petsList} removePetList={removePetList} />
      )}
    </AddPetWrapper>
  );
};
