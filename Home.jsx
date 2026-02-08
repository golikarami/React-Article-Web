import Navbar from "../../components/navbar/Navbar";
import styled from "../home/Home.module.css";
import Article from "../../components/article/Article";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";
function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    setIsloading(true);
    axios
      .get("http://localhost:8000/articles")
      .then((result) => {
        setArticles(result.data);
        setIsloading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsloading(false);
      });
  }, []);

  return (
    <div className={styled.homeWrapper}>
      <Navbar title="گلی بلاگ" />

      <div className="container">
        <h2>مقالات جدید</h2>

        {isLoading ? (
          <p>
            <Loading />
          </p>
        ) : (
          <div className={styled.articles}>
            {articles.map((article) => (
              <Link to={`/article/${article.id}`}>
                <Article key={article.id} article={article} />
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
export default Home;
