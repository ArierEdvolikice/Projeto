import React, { useState } from 'react';
import './App.css';
import ProductRow from './ProductRow';
import ProductDetails from './ProductDetails';

function App() {
  const [expandedProductId, setExpandedProductId] = useState(null);
  const [selectedThumbnailIndexes, setSelectedThumbnailIndexes] = useState({});

  const products = [
    { 
      images: [
        { url: '/Produto_01.1.jpeg', vigor: 'Alto', uniformidade: 'Uniforme', quantPlântulas: 10, sementesNãoGerminadas: 2 },
        { url: '/Produto_01.2.jpeg', vigor: 'Médio', uniformidade: 'Irregular', quantPlântulas: 8, sementesNãoGerminadas: 3 },
        { url: '/Produto_01.3.jpeg', vigor: 'Baixo', uniformidade: 'Uniforme', quantPlântulas: 12, sementesNãoGerminadas: 1 }
      ],
      id: 1, 
      nome: 'Produto 1', 
      col4: 'Valor4', 
      col5: 'Valor5', 
      col6: 'Valor6', 
      col7: 'Valor7', 
      col8: 'Valor8', 
      col9: 'Valor9', 
      col10: 'Valor10', 
      col11: 'Valor11', 
      details: 'Detalhes do Produto 1' 
    },

    { 
      images: [
        { url: '/Produto_02.1.jpeg', vigor: 'Baixo', uniformidade: 'Uniforme', quantPlântulas: 17, sementesNãoGerminadas: 5 },
        { url: '/Produto_02.2.jpeg', vigor: 'Alto', uniformidade: 'Uniforme', quantPlântulas: 25, sementesNãoGerminadas: 14 },
        { url: '/Produto_02.2.jpeg', vigor: 'Alto', uniformidade: 'Uniforme', quantPlântulas: 25, sementesNãoGerminadas: 14 },
        { url: '/Produto_02.2.jpeg', vigor: 'Alto', uniformidade: 'Uniforme', quantPlântulas: 25, sementesNãoGerminadas: 14 },
        { url: '/Produto_02.2.jpeg', vigor: 'Alto', uniformidade: 'Uniforme', quantPlântulas: 25, sementesNãoGerminadas: 14 },
        { url: '/Produto_02.3.jpeg', vigor: 'Alto', uniformidade: 'Irregular', quantPlântulas: 14, sementesNãoGerminadas: 10 }
      ],
      id: 2, 
      nome: 'Produto 2', 
      col4: 'Valor4', 
      col5: 'Valor5', 
      col6: 'Valor6', 
      col7: 'Valor7', 
      col8: 'Valor8', 
      col9: 'Valor9', 
      col10: 'Valor10', 
      col11: 'Valor11', 
      details: 'Detalhes do Produto 1' 
    },
    
  ];

  const toggleDetails = (productId) => {
    setExpandedProductId(expandedProductId === productId ? null : productId);
    if (expandedProductId !== productId) {
      setSelectedThumbnailIndexes(prevState => ({ ...prevState, [productId]: 0 }));
    }
  };

  const handleThumbnailClick = (productId, index) => {
    setSelectedThumbnailIndexes(prevState => ({ ...prevState, [productId]: index }));
  };

  return (
    <div className="App">
      <div className="table-container">
        <div className="custom-table">
          <div className="header-row">
            <div>ID</div>
            <div>Imagem</div>
            <div>Nome da Planta</div>
            <div>Vigor</div>
            <div>Uniformidade</div>
            <div>Quant Plântulas</div>
            <div>Sementes não germinadas</div>
            <div>Coluna 8</div>
            <div>Coluna 9</div>
            <div>Coluna 10</div>
            <div>Detalhes</div>
          </div>
          {products.map(product => (
            <React.Fragment key={product.id}>
              <ProductRow
                product={product}
                toggleDetails={toggleDetails}
                isExpanded={expandedProductId === product.id}
              />
              {expandedProductId === product.id && (
                <ProductDetails 
                  product={product} 
                  selectedThumbnailIndex={selectedThumbnailIndexes[product.id] || 0}
                  onThumbnailClick={(index) => handleThumbnailClick(product.id, index)}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;