import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { getAllProducts } from '../../utils/api';

const ProductList = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false); // Set loading to false after fetching products
      })
      .catch((err) => {
        console.error(err);
        setLoading(false); // Set loading to false if there's an error
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;

// import React, { useEffect, useState } from 'react';
// import ProductCard from './ProductCard';
// import { getAllProducts } from '../../utils/api';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getAllProducts()
//       .then((data) => setProducts(data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//       {products.map((product) => (
//         <ProductCard key={product._id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default ProductList;