import Navbar from "../../../components/navbar/Navbar";
import styled from "./AboutUs.module.css";
import Iran from "../../../assets/images/iran.png";
import Footer from "../../../components/footer/Footer";

function AboutUS() {
  return (
    <div>
      <Navbar title="گلی بلاگ" />

      <div className={styled.aboutPage}>
        <div className="container">
          <h2>درباره ما</h2>
          <p>
            «لورم ایپسوم» یک متن ساختگی و بی‌معنی است که توسط طراحان گرافیک و وب
            برای پر کردن فضاهای خالی در طرح‌ها و نمونه‌های اولیه استفاده می‌شود
            تا شکل و ظاهر نهایی طرح را بدون نیاز به محتوای واقعی نشان دهد. این
            متن به طراحان اجازه می‌دهد تا روی چیدمان، فونت و اندازه‌بندی تمرکز
            کنند بدون اینکه حواسشان توسط متن اصلی پرت شود.
          </p>
          <h3>فعالیت ما در کدام شهر هاست؟</h3>
          <img src={Iran} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default AboutUS;
