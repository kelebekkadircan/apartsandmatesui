import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { newRequest } from "~/utils/newRequest";
import "./PostsinglePage.scss";
import PostDetail from "./PostDetail";
// import PostFeatures from "./PostFeatures";

const MatesPostPage = () => {
  // const data = useLoaderData();
  // console.log(data);
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchSingleHotel = async () => {
      setLoading(true);
      try {
        const response = await newRequest(`/posts/single/${id}`);
        setData(response.data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchSingleHotel();
  }, [id]);

  if (error) {
    return <div>Error</div>;
  }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  console.log(data);

  return (
    <div className="PostdenemeSinglePage">
      <div className="singlePage">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <PostDetail
              singlePostData={data}
              loading={loading}
              setLoading={setLoading}
              error={error}
              setError={setError}
            />
            {/* <PostFeatures
              loading={loading}
              setLoading={setLoading}
              error={error}
              setError={setError}
              singlePostData={data}
            /> */}
          </>
        )}
      </div>
    </div>
  );
};

export default MatesPostPage;
