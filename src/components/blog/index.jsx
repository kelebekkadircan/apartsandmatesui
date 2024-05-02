import { FaArrowRightLong } from "react-icons/fa6";
import { BlogCard } from "./BlogCard";
import "./blog.scss";
import { useEffect, useState } from "react";
import { newRequest } from "~/utils/newRequest";

export const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [error, setError] = useState();
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    const blogDataFetch = async () => {
      isLoading(true);
      try {
        const response = await newRequest.get("/blogs/popular");
        setBlogData(response.data);
      } catch (e) {
        setError(e);
      } finally {
        isLoading(false);
      }
    };
    blogDataFetch();
  }, []);

  if (error) {
    return <div>There is an error</div>;
  }

  // console.log(blogData);

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
            {loading ? (
              <div>Loading Blog</div>
            ) : (
              blogData.map((data, i) => <BlogCard key={i} data={data} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
