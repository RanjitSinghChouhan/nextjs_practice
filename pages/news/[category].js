function ArticleByCategory({ articles }) {
  return (
    <>
      {articles.map((article) => (
        <div key={article.id}>
          <h1>
            {article.id}: {article.title}
          </h1>
          <h2>{article.category}</h2>
          <p>{article.description}</p>
        </div>
      ))}
      <hr />
    </>
  );
}

export default ArticleByCategory;

export async function getServerSideProps(context){
    const { params } = context;
    const { category } = params;
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json();
    return {
        props: {
            articles: data,
            category
        }
    }
}
