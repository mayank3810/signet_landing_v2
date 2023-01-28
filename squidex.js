const generateAccessToken = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");
  urlencoded.append("client_id", process.env.NEXT_PUBLIC_SQUIDEX_CLIENT_ID);
  urlencoded.append(
    "client_secret",
    process.env.NEXT_PUBLIC_SQUIDEX_CLIENT_SECRET
  );
  urlencoded.append("scope", "squidex-api");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };
  //   const token = localStorage.getItem("squidex-token");

  //   if (token) {
  //     return token;
  //   } else {
  //     const jsonRsp = await fetch(
  //       "https://cloud.squidex.io/identity-server/connect/token",
  //       requestOptions
  //     );
  //     const data = await jsonRsp.json();
  //     localStorage.setItem("squidex-token", data.access_token);
  //     return data.access_token;
  //   }

  const jsonRsp = await fetch(
    "https://cloud.squidex.io/identity-server/connect/token",
    requestOptions
  );
  const data = await jsonRsp.json();
  //   localStorage.setItem("squidex-token", data.access_token);
  return data.access_token;
};

export { generateAccessToken };
