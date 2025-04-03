"use client";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

function ApiDoc() {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>API Documentation</h1>
      <div className='swagger-ui-wrapper bg-white rounded-lg shadow'>
        <SwaggerUI url='/api/docs' />
      </div>
    </div>
  );
}

export default ApiDoc;
