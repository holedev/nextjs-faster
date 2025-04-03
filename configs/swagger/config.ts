import { createSwaggerSpec } from "next-swagger-doc";

export const getApiDocs = () => {
  const spec = createSwaggerSpec({
    apiFolder: "app/api", // Path to API folder
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Starter Kit API Documentation",
        version: "1.0.0",
        description: "API documentation for the Starter Kit application"
      },
      servers: [
        {
          url: "http://localhost:3000",
          description: "Development server"
        }
      ]
    }
  });
  return spec;
};
