import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { generateAccessToken } from "@/squidex";
import Head from "next/head";
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
      <Head>
        <title>Signet Blog - Relevant News and More</title>
        <link
          rel="canonical"
          href="https://www.signettags.com/blog"
          key="canonical"
        />
        <meta
          name="title"
          content="Stay Updated with Signet Blog for Relevant News and More"
        />
        <meta
          name="description"
          content="Keep yourself informed and updated with our blog, featuring relevant news and valuable insights on various topics."
        />
        <meta
          name="keywords"
          content="Signet Tags, Signet Authenticity, brand protection software, blockchain-proven ownership"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:site_name" content="Signet Tags" />
        <meta property="og:url" content="https://www.signettags.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Stay Informed with Signet Blog" />
        <meta
          property="og:description"
          content="Stay informed with Signet Blog's news and insights."
        />
        <meta property="og:image" content="/assets/images/Twitter-card.jpeg" />
        <meta property="og:locale" content="en_US" />

        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SignetTags" />
        <meta name="twitter:url" content="https://www.signettags.com/blog" />
        <meta name="twitter:title" content="Stay Informed with Signet Blog" />
        <meta
          name="twitter:description"
          content="Stay informed with Signet Blog's news and insights."
        />
        <meta name="twitter:image" content="/assets/images/Twitter-card.jpeg" />
      </Head>
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
                <h1 className="h1-md">
                  Relevant news and more for you. Welcome to our blog
                </h1>
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
                            {post?.data?.image?.iv && (
                              <img
                                className="img-fluid"
                                src={
                                  "https://cloud.squidex.io/api/assets/signetblog/" +
                                  post?.data?.image?.iv[0]
                                }
                                alt="blog-post-image"
                              />
                            )}
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
                        <h2 className="h3-font">
                          <Link href={"/blog/" + post?.data?.slug.iv}>
                            {post?.data?.title.iv}
                          </Link>
                          {/* <a href="single-post.html"></a> */}
                        </h2>
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
