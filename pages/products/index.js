import Link from "next/link";

function Products({products}){
    return <div>
        <h1>List of Products</h1>
        <div>
            {products.map(product => <Link href={`products/${product.id}`} passHref> <h2>{product.id} {product.name}</h2> <hr/> </Link>)}
        </div>
    </div>
}
export default Products;

export async function getStaticProps(){
    const response = await fetch("http://localhost:4000/products");
    let data = await response.json();
    return {
        props: {
            products: data
        },
        revalidate: 10 //to make sure that stale data gets removed and regenrated data gets generated every 10 seconds
    }
}