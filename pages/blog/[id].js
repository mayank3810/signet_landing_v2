import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { generateAccessToken } from '@/squidex';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

function BlogDetail(props) {
	const post = props.items[0];
	useEffect(() => {
		// console.log(props.items);
	}, []);

	const getParsedDate = (strDate) => {
		var strSplitDate = String(strDate).split(' ');
		var date = new Date(strSplitDate[0]);
		// alert(date);
		var dd = date.getDate();
		var mm = date.getMonth() + 1; //January is 0!

		var yyyy = date.getFullYear();
		if (dd < 10) {
			dd = '0' + dd;
		}
		if (mm < 10) {
			mm = '0' + mm;
		}
		date = dd + '-' + mm + '-' + yyyy;
		return date.toString();
	};

	return (
		<>
			<Head>
				<title>{post?.data?.title.iv}</title>
				<link rel="canonical" href={`https://www.signettags.com/blog/${post?.data?.slug.iv}/`} key="canonical" />
				<meta name="title" content={post?.data?.title.iv} />
				<meta name="description" content={post?.data?.text.iv.substring(0, 150)} />
				<meta name="keywords" content="Signet Tags, Signet Authenticity, brand protection software, blockchain-proven ownership" />
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:site_name" content="Signet Tags" />
				<meta property="og:url" content={`https://www.signettags.com/blog/${post?.data?.slug.iv}/`} />
				<meta property="og:type" content="article" />
				<meta property="og:title" content={post?.data?.title.iv} />
				<meta property="og:description" content={post.data.text.iv.substring(0, 150)} />
				<meta property="og:image" content="/assets/images/Twitter-card.jpeg" />
				<meta property="og:locale" content="en_US" />

				{/* <!-- Twitter --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@SignetTags" />
				<meta name="twitter:url" content={`https://www.signettags.com/blog/${post?.data?.slug.iv}/`} />
				<meta name="twitter:title" content={post?.data?.title.iv} />
				<meta name="twitter:description" content={post?.data?.text.iv.substring(0, 150)} />
				<meta name="twitter:image" content="/assets/images/Twitter-card.jpeg" />
			</Head>
			<Header scroll={true} />
			<section id="single-post" className="wide-100 inner-page-hero single-post-section division">
				<div className="container">
					<div className="row">
						<div className="col-lg-10 offset-lg-1">
							<div className="single-post-wrapper">
								<div className="single-post-title">
									<p className="p-sm post-tag txt-500 txt-upcase">{post?.data?.postType.iv + ' | ' + getParsedDate(post.created)}</p>
									<h1 className="h1-md">{post?.data?.title.iv}</h1>
									<div className="post-inner-img">
										<img
											className="img-fluid"
											src={'https://cloud.squidex.io/api/assets/signetblog/' + post?.data?.image?.iv[0]}
											alt="blog-post-image"
										/>
									</div>
								</div>

								<div className="single-post-txt p-lg" dangerouslySetInnerHTML={{ __html: post?.data?.text?.iv }}></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default BlogDetail;

export async function getStaticPaths() {
	const token = await generateAccessToken();

	var myHeaders = new Headers();
	myHeaders.append('Authorization', 'Bearer ' + token);

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow',
	};

	const jsonResp = await fetch(process.env.NEXT_PUBLIC_SQUIDEX_API_URL, requestOptions);
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
	myHeaders.append('Authorization', 'Bearer ' + token);

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow',
	};

	const jsonResp = await fetch(process.env.NEXT_PUBLIC_SQUIDEX_API_URL + "?$filter=data/slug/iv eq '" + params.id + "'", requestOptions);
	const post = await jsonResp.json();

	return {
		props: post,
	};
}
