import { generateAccessToken } from "@/squidex";
import React, { useEffect } from "react";

function BlogDetail(props) {
  useEffect(() => {
    console.log(props.items);
  }, []);

  return <div>BlogDetail</div>;
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
