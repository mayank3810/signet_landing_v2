import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { generateAccessToken } from "@/squidex";
import Link from "next/link";
import React, { useEffect } from "react";

function Blog(props) {
  useEffect(() => {
    // console.log(props.items);
  }, []);

  const getParsedDate = (strDate) => {
    var strSplitDate = String(strDate).split(" ");
    var date = new Date(strSplitDate[0]);
    // alert(date);
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!

    var yyyy = date.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    date = dd + "-" + mm + "-" + yyyy;
    return date.toString();
  };

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
                <div className="masonry-wrap grid-loaded d-flex">
                  {props?.items.map((post) => (
                    <div key={post.id} className="blog-3-post masonry-image">
                      {/* BLOG POST IMAGE */}
                      <div className="blog-post-img">
                        <div className="hover-overlay">
                          <Link href={"/blog/" + post?.data?.slug.iv}>
                            <img
                              className="img-fluid"
                              src={
                                "https://cloud.squidex.io/api/assets/signetblog/" +
                                post?.data?.image?.iv[0]
                              }
                              alt="blog-post-image"
                            />
                          </Link>
                          <div className="item-overlay" />
                        </div>
                      </div>
                      {/* BLOG POST TEXT */}
                      <div className="blog-post-txt">
                        {/* Post Tag */}
                        <p className="p-md post-tag">
                          {post?.data?.postType.iv +
                            " | " +
                            getParsedDate(post.created)}
                        </p>
                        {/* Post Link */}
                        <h5 className="h5-md">
                          <Link href={"/blog/" + post?.data?.slug.iv}>
                            {post?.data?.title.iv}
                          </Link>
                          {/* <a href="single-post.html"></a> */}
                        </h5>
                      </div>
                    </div>
                  ))}
                  {/* END BLOG POST #1 */}
                </div>
              </div>
            </div>{" "}
            {/* END BLOG POSTS */}
          </div>{" "}
          {/* END POSTS WRAPPER */}
        </div>{" "}
        {/* End container */}
      </section>
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
