import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  document.title = 'Home';

  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produtos == null) return null;

  return (
    <div className="animar container">
      <div className="produtos">
        {produtos.map(({ id, nome, fotos }) => (
          <Link to={`produto/${id}`} className="produto" key={id}>
            <img src={fotos[0].src} alt={nome} />
            <h1>{nome}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
