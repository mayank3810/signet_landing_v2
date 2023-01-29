import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { generateAccessToken } from "@/squidex";
import React, { useEffect, useState } from "react";

function BlogDetail(props) {
  const post = props.items[0];
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
        id="single-post"
        className="wide-100 inner-page-hero single-post-section division"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="single-post-wrapper">
                <div className="single-post-title">
                  <p className="p-sm post-tag txt-500 txt-upcase">
                    {post?.data?.postType.iv +
                      " | " +
                      getParsedDate(post.created)}
                  </p>
                  <h2 className="h2-md">{post?.data?.title.iv}</h2>
                  <div className="post-inner-img">
                    <img
                      className="img-fluid"
                      src={
                        "https://cloud.squidex.io/api/assets/signetblog/" +
                        post?.data?.image?.iv[0]
                      }
                      alt="blog-post-image"
                    />
                  </div>
                </div>

                <div
                  className="single-post-txt p-lg"
                  dangerouslySetInnerHTML={{ __html: post?.data?.text?.iv }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default BlogDetail;

export async function getStaticPaths() {
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

  let paths = posts.items.map((post) => {
    return {
      params: {
        id: post.data.slug.iv,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const token = await generateAccessToken();

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const jsonResp = await fetch(
    process.env.NEXT_PUBLIC_SQUIDEX_API_URL +
      "?$filter=data/slug/iv eq '" +
      params.id +
      "'",
    requestOptions
  );
  const post = await jsonResp.json();

  return {
    props: post,
  };
}
