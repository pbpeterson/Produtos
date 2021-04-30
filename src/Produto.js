import React from 'react';
import { useParams } from 'react-router';

const Produto = () => {
  const { id } = useParams();
  const [produto, setProduto] = React.useState(null);
  const [carregando, setCarregando] = React.useState(false);

  React.useEffect(() => {
    async function fetchProduto(url) {
      setCarregando(true);
      const response = await fetch(url);
      const json = await response.json();
      setProduto(json);
      setCarregando(false);
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (carregando === true) return <div className="carregando"></div>;

  if (produto === null) return null;

  return (
    <section className="animar">
      <div className="produtoEsp">
        <img src={produto.fotos[0].src} alt={produto.id} />
        <div className="infos">
          <h1>{produto.nome}</h1>
          <p className="preco">R$ {produto.preco}</p>
          <p>{produto.descricao}</p>
        </div>
      </div>
    </section>
  );
};

export default Produto;
