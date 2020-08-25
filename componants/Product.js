import React from 'react';

const Product = props => {
  const [isProductCooked, setIsProductCooked] = React.useState(false);
  const { raw, cooked } = props;

  const cookTheProduct = () => setIsProductCooked(true);

  return (
    <div>
      <h1 id="product">{isProductCooked ? cooked : raw}</h1>
      <button type="button" onClick={cookTheProduct} disabled={isProductCooked}>
        {isProductCooked ? 'Cooked' : 'Cook it!'}
      </button>
    </div>
  );
};

export default Product;
