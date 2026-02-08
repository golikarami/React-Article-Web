import Navbar from "../../../components/navbar/Navbar";
import pic from "../../../assets/images/programmer.png";
import styled from "./ArticlePage.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Footer from "../../../components/footer/Footer";
import Loading from "../../../components/loading/Loading";
function ArticlePage() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const params = useParams();
  useEffect(() => {
    setIsloading(true);
    axios
      .get(`http://localhost:8000/articles/${params.id}`)
      .then((result) => {
        setArticle(result.data);
        setIsloading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsloading(false);
      });
  }, []);
  return (
    <div>
      <Navbar title="گلی بلاگ" />
      <div className={styled.articleWrapper}>
        <div className="container">
          {isLoading ? (
            <p>
              <Loading />
            </p>
          ) : (
            <>
              <div className={styled.articleInfo}>
                <span>{article.date}تاریخ</span>
                <span>نویسنده:گلی کرمی</span>
                <span>{article.readingTime}مدت زمان خواندن</span>
              </div>
              <img src={article.imageUrl} alt="" />

              <p>{article.content} </p>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ArticlePage;
