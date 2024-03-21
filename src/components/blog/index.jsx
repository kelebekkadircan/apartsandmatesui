import { FaArrowRightLong } from "react-icons/fa6";
import { BlogCard } from "./BlogCard";
import "./blog.scss";

export const Blog = () => {
  return (
    <div className="blogSection">
      <div className="blogContainer">
        <div className="innerSection">
          <div className="blogContent">
            <div className="contentTitle">
              Aparts <span className="title-color">&</span>Mates Blog
            </div>
            <div>
              <p className="contentSubTitle">
                Öğrenci Hayatı Hakkında Haberler, Öneri ve Tavsiyelerimiz
              </p>
              <p className="contentParagraph">
                Yaşadığın şehir, üniversite ve öğrenci hayatı hakkında sana özel
                hazırlanan yazılar, haberler ve galerileri keşfet! Öğrenciler
                için eğlence mekanları, gezilecek yerler, tarihi güzellikler,
                müzeler, cafe ve en güzel etkinlikleri hakkında haberler ile
                şehir ve kampüs hayatı hakkında bilgi al
              </p>
            </div>
            <div className="blogNav">
              <div className="navTitle">
                Tüm Yazılar
                <div className="navIcon">
                  <FaArrowRightLong />
                </div>
              </div>
            </div>
          </div>
          <div className="blogCardSection">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
  );
};
