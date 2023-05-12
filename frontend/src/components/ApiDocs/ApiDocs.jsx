import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export const ApiDocs = () => {
  return (
    <SwaggerUI url="https://raw.githubusercontent.com/StudentVlad5/animal-welfare-network/main/backend/swagger.json" />
  );
};
