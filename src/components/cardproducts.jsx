export function CardProduct({ name, price, image, onAdd }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3>{name}</h3>
        <p className="product-price">R$ {price}</p>
        {/* Dispara a função do App.js ao clicar */}
        <button className="add-to-cart" onClick={onAdd}> 
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}

