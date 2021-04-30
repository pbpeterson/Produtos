import React from 'react';
import Head from './Head';

const Notfound = () => {
  return (
    <div>
      <Head title="Error 404" description="Página não encontrada." />
      <h1 className="animar">Página não encontrada</h1>
    </div>
  );
};

export default Notfound;
