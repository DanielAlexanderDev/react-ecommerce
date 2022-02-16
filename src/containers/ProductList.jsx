import React from 'react';
import ProductItem from '../components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import Loading from '../components/Loading';
import '../styles/ProductList.scss';

const API = 'http://api.escuelajs.co/api/v1/products';


const ProductList = () => {
  const products = useGetProducts(API).products;
  const loading = useGetProducts(API).loading;
  return (
    <section className='main-container'>
      <div className="ProductList">
        {loading && <Loading />}
        {products.map( product => (
          <ProductItem product={product} key={product.id} />
        ))}
			</div>
    </section>
  );
};

export default ProductList;
