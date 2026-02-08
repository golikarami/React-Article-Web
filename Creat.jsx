import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import styled from "./creat.module.css";
import { useState } from "react";
import Input from "../../components/input/Input";
import TextArea from "../../components/textArea/TextArea";
import axios from "axios";
function Creat() {
  const [article, setArticle] = useState({
    title1: "",
    date: "",
    readingTime: "",
    athor: "",
    message: "",
    imageURL: "",
  });
  const handleChangeCreat = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const hnadleChangeSArticlleMessage = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      message: e.target.value,
    }));
  };
  const handleCreatNewArticle = () => {
    axios.post("http://localhost:8000/articles", {
      id: 9,
      imageUrl: article.imageURL,
      title: article.title,
      readingTime: article.readingTime,
      date: article.date,
      athor: article.athor,
      content: article.message,
    });
    console.log(article);
  };
  return (
    <>
      <Navbar title="گلی بلاگ" />
      <div className={styled.creatPage}>
        <div className="container">
          <h3>ساخت مقاله</h3>

          <Input label="عنوان" name="title" handleChange={handleChangeCreat} />
          <Input
            label="تاریخ"
            name="date"
            handleChange={handleChangeCreat}
            type="date"
          />
          <Input
            label="مدت زمان خواندن"
            name="readingTime"
            handleChange={handleChangeCreat}
          />
          <Input
            label="نویسنده"
            name="athor"
            handleChange={handleChangeCreat}
          />
          <Input
            label="آدرس عکس"
            name="imageURL"
            handleChange={handleChangeCreat}
          />

          <TextArea label="متن" handleChange={hnadleChangeSArticlleMessage} />

          <div className={styled.buttonWrapper}>
            <button onClick={handleCreatNewArticle}>ساخت مقاله</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Creat;
