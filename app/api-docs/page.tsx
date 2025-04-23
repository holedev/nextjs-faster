import Link from "next/link";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

function ApiDoc() {
  return (
    <div className='container mx-auto p-4'>
      <Link href='/' className='text-2xl font-bold mb-4'>
        NextJS Faster
      </Link>
      <div className='swagger-ui-wrapper bg-white rounded-lg shadow-sm'>
        <SwaggerUI url='/api/docs' />
      </div>
    </div>
  );
}

export default ApiDoc;
