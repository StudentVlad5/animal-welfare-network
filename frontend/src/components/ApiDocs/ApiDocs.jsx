import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export const ApiDocs = () => {
  return (
    <SwaggerUI url="https://raw.githubusercontent.com/NilKad/project-nodejs_55-5_backend/main/swagger.json" />
  );
};
