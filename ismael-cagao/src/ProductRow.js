import React from 'react';

function ProductRow({ product, toggleDetails, isExpanded }) {
  return (
    <div className="row">
      <div>{product.id}</div>
      <div><img src={product.images[0].url} alt={product.nome} /></div>
      <div>{product.nome}</div>
      <div>{product.images[0].vigor}</div>
      <div>{product.images[0].uniformidade}</div>
      <div>{product.images[0].quantPlântulas}</div>
      <div>{product.images[0].sementesNãoGerminadas}</div>
      <div>{product.col8}</div>
      <div>{product.col9}</div>
      <div>{product.col10}</div>
      <div>
        <button className="button button-flat" onClick={() => toggleDetails(product.id)}>
          {isExpanded ? "-" : "+"}
        </button>
      </div>
    </div>
  );
}

export default ProductRow;
