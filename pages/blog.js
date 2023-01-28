import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { generateAccessToken } from "@/squidex";
import Link from "next/link";
import React, { useEffect } from "react";

function Blog(props) {
  useEffect(() => {
    // console.log(props.items);
  }, []);

  return (
    <>
      <Header scroll={true} />
      <section
        id="blog-page"
        className="bg-snow wide-50 inner-page-hero blog-page-section division"
      >
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="section-title title-02 mb-85">
                <h2 className="h2-xs">
                  Relevant news and more for you. Welcome to our blog
                </h2>
              </div>
            </div>
          </div>
          {/* POSTS WRAPPER */}
          <div className="posts-wrapper">
            {/* BLOG POSTS */}
            <div className="row">
              <div className="col gallery-items-list">
                <div
                  className="masonry-wrap grid-loaded"
                  style={{ position: "relative", height: "1270.01px" }}
                >
                  {/* BLOG POST #1 */}
                  {props?.items.map((post) => (
                    <div key={post.id} className="blog-3-post masonry-image">
                      {/* BLOG POST IMAGE */}
                      <div className="blog-post-img">
                        <div className="hover-overlay">
                          <img
                            className="img-fluid"
                            src="images/blog/post-1-img.jpg"
                            alt="blog-post-image"
                          />
                          <div className="item-overlay" />
                        </div>
                      </div>
                      {/* BLOG POST TEXT */}
                      <div className="blog-post-txt">
                        {/* Post Tag */}
                        <p className="p-md post-tag">
                          OLMO News  |  JuLy 31, 2021
                        </p>
                        {/* Post Link */}
                        <h5 className="h5-md">
                          <Link href={"/blog/" + post?.data?.slug.iv}>
                            {post?.data?.title.iv}
                          </Link>
                          {/* <a href="single-post.html"></a> */}
                        </h5>
                        {/* Post Meta */}
                        <div className="post-meta">
                          <p className="p-md">9 Comments</p>
                        </div>
                      </div>{" "}
                      {/* END BLOG POST TEXT */}
                    </div>
                  ))}
                </div>
              </div>
            </div>{" "}
            {/* END BLOG POSTS */}
          </div>{" "}
          {/* END POSTS WRAPPER */}
        </div>{" "}
        {/* End container */}
      </section>

      <Footer />
    </>
  );
}

export default Blog;

export async function getStaticProps(context) {
  const token = await generateAccessToken();

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const jsonResp = await fetch(
    process.env.NEXT_PUBLIC_SQUIDEX_API_URL,
    requestOptions
  );
  const posts = await jsonResp.json();

  return {
    props: posts,
  };
}
