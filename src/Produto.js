import React from 'react';
import { useParams } from 'react-router';

const Produto = () => {
  const params = useParams();
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
      .then((response) => response.json())
      .then((json) => setProduto(json));
  }, [params.id]);

  console.log(produto);

  if (produto === null) return null;

  return (
    <section className="container animar">
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
