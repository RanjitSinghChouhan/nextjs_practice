function Articles({articles}) {
  return (
    <div>
      <h1>List of Articles</h1>
      {articles.map(article => {
        return <>
        <h2 key={article.id}>{article.id}: {article.title} | {article.category}</h2>
        <hr/>
        </>
      })}
    </div>
  );
}
export default Articles;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();
  return {
    props: {
      articles: data,
    },
  };
}
