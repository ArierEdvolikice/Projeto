// ProductDetails.js
import React, { useState, useEffect } from 'react';

function ProductDetails({ product, selectedThumbnailIndex, onThumbnailClick }) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsExpanded(selectedThumbnailIndex !== null);
  }, [selectedThumbnailIndex]);

  return (
    <div className={`details ${isExpanded ? 'expanded' : ''}`}>
      <div className="details-inside">
        <div className="left-column">
          {product.images && product.images.length > 0 && (
            <React.Fragment>
              <img src={product.images[selectedThumbnailIndex].url} alt={product.nome} />
              <div className='thumbnails'>
                {product.images.map((image, index) => (
                  <img 
                    key={index} 
                    src={image.url} 
                    alt={`${product.nome} - Thumbnail ${index + 1}`} 
                    onClick={() => onThumbnailClick(index)}  
                    className={selectedThumbnailIndex === index ? 'thumbnail active' : 'thumbnail'} // Aplica a classe condicional
                  />
                ))}
              </div>
            </React.Fragment>
          )}
        </div>
        <div className="right-column">
          <h3>Detalhes do Produto</h3>
          <ul>
            <li><strong>ID:</strong> {product.id}</li>
            <li><strong>Nome:</strong> {product.nome}</li>
            {isExpanded && (
              <>
                <li><strong>Vigor:</strong> {product.images[selectedThumbnailIndex].vigor}</li>
                <li><strong>Uniformidade:</strong> {product.images[selectedThumbnailIndex].uniformidade}</li>
                <li><strong>N.º de Plântulas:</strong> {product.images[selectedThumbnailIndex].quantPlântulas}</li>
                <li><strong>N.º Sementes não Germinadas:</strong> {product.images[selectedThumbnailIndex].sementesNãoGerminadas}</li>
              </>
            )}
            <li><strong>Coluna 8:</strong> {product.col8}</li>
            <li><strong>Coluna 9:</strong> {product.col9}</li>
            <li><strong>Coluna 10:</strong> {product.col10}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
