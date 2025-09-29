import { createSwaggerSpec } from "next-swagger-doc";

type OperationObject = {
  summary?: string;
  description?: string;
  parameters?: Array<{
    name: string;
    in: "query" | "header" | "path" | "cookie";
    description?: string;
    required?: boolean;
    schema?: {
      type: string;
      format?: string;
    };
  }>;
  responses: {
    [statusCode: string]: {
      description: string;
      content?: {
        [mediaType: string]: {
          schema: {
            type: string;
            properties?: Record<string, unknown>;
          };
        };
      };
    };
  };
};

type PathObject = {
  get?: OperationObject;
  post?: OperationObject;
  put?: OperationObject;
  delete?: OperationObject;
  patch?: OperationObject;
  options?: OperationObject;
  head?: OperationObject;
};

type OpenApiSpec = {
  openapi: string;
  info: {
    title: string;
    version: string;
    description: string;
  };
  servers: Array<{
    url: string;
    description: string;
  }>;
  paths: Record<string, PathObject>;
  components?: {
    schemas?: Record<string, unknown>;
    responses?: Record<string, unknown>;
    parameters?: Record<string, unknown>;
    securitySchemes?: Record<string, unknown>;
  };
};

// Cache the generated spec to avoid re-computation on every request
const cachedSpec = {
  current: null as OpenApiSpec | null
};

export const getApiDocs = () => {
  const _milliseconds = 1000;
  // Return cached spec if available
  if (cachedSpec.current) {
    return cachedSpec.current;
  }

  // Generate spec with optimized settings
  const generatedSpec = createSwaggerSpec({
    apiFolder: "app/api",
    definition: {
      openapi: "3.0.0",
      info: {
        title: "NextJS Faster API Documentation",
        version: "1.0.0",
        description: "API documentation for the NextJS Faster application"
      },
      servers: [
        {
          url: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
          description: "API Server"
        }
      ]
    },
    // Add cache settings
    cache: {
      maxAge: 60 * 60 * _milliseconds, // 1 hour
      cacheControl: "public, max-age=3600"
    }
  }) as OpenApiSpec;

  // Cache the generated spec
  cachedSpec.current = generatedSpec;

  return cachedSpec.current;
};
