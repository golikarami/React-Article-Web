import styled from "./Article.module.css";
import article from "./../../assets/images/images (2).png";
function Article(props) {
  return (
    <div className={styled.articleWrapper}>
      <img src={props.article.imageUrl} />
      <h3>{props.article.title}</h3>
      <p>خواندن {props.article.readingTime} دقیقه ای</p>
    </div>
  );
}
export default Article;
