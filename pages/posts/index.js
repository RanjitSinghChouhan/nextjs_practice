import Link from "next/link";

function Posts({posts}){
    return <div>
        <h1>List of Posts</h1>
        <div>
            {posts.map(post => <Link href={`posts/${post.id}`} passHref> <h2>{post.id} {post.title}</h2> <hr/> </Link>)}
        </div>
    </div>
}
export default Posts;

export async function getStaticProps(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    return {
        props: {
            posts: data
        },
    }
}