function Product({ product }) {
    return (
      <>
        <div key={product.id}>
          <h1>{product.id} {product.name}</h1>
          <p>{product.description}</p>
        </div>
      </>
    );
  }
  export default Product;
  
  export async function getStaticPaths() {
      const response = await fetch("http://localhost:4000/products");
      let data = await response.json();
  
      const paths = data.map(product => {
          return {
              params: {productId: `${product.id}`}
          }
      })
    return {
      paths,
      fallback: false
    };
  }
  
  export async function getStaticProps(context) {
    const { params } = context;
    const response = await fetch(`http://localhost:4000/products/${params.productId}`);
    const data = await response.json();
    return {
      props: {
        product: data,
      },
      revalidate: 10
    };
  }
  