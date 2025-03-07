import { useEffect, useState } from "react";
import articlesApi from "../api/articlesApi";
import ArticleForm from "../components/ArticleForm";
import Article from "../components/Article";

export default function HomePage() {
  const [articles, setArticles] = useState([]);

  async function fetchArticles() {
    const response = await articlesApi.getArticles();
    setArticles(response.reverse());
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>댓글쓰기 홈페이지</h1>
      <ArticleForm fetchArticles={fetchArticles}></ArticleForm>
      {articles.map((article) => {
        return (
          <Article
            key={article.id}
            article={article}
            isDetail={false}
          ></Article>
        );
      })}
    </div>
  );
}
