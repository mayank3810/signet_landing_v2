import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { generateAccessToken } from '@/squidex';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

function Blog(props) {
	const getParsedDate = (strDate) => {
		var strSplitDate = String(strDate).split(' ');
		var date = new Date(strSplitDate[0]);
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
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="robots" content="index, follow" />
				<meta name="language" content="English" />
				<meta name="title" content="Stay Updated with Signet Blog for Relevant News and More" />
				<meta
					name="description"
					content="Keep yourself informed and updated with our blog, featuring relevant news and valuable insights on various topics."
				/>
				<meta name="keywords" content="Signet Tags, Signet Authenticity, brand protection software, blockchain-proven ownership" />

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:site_name" content="Signet Tags" />
				<meta property="og:url" content="https://www.signettags.com/blog" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Stay Informed with Signet Blog" />
				<meta property="og:description" content="Stay informed with Signet Blog's news and insights." />
				<meta property="og:image" content="/assets/images/Twitter-card.jpeg" />
				<meta property="og:locale" content="en_US" />

				{/* <!-- Twitter --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@SignetTags" />
				<meta name="twitter:url" content="https://www.signettags.com/blog" />
				<meta name="twitter:title" content="Stay Informed with Signet Blog" />
				<meta name="twitter:description" content="Stay informed with Signet Blog's news and insights." />
				<meta name="twitter:image" content="/assets/images/Twitter-card.jpeg" />

				<link rel="canonical" href="https://www.signettags.com/blog" key="canonical" />
				<title>Signet Blog - Relevant News and More</title>
			</Head>
			<Header scroll={true} />

			<section id="blog-page" className="bg-snow wide-50 inner-page-hero blog-page-section division">
				<div className="container">
					{/* SECTION TITLE */}
					<div className="row justify-content-center">
						<div className="col-md-10 col-lg-8">
							<div className="section-title title-02 mb-85">
								<h1 className="h1-md">Relevant news and more for you. </h1>
							</div>
						</div>
					</div>
					<div className="posts-wrapper">
						<div className="row">
							{props?.items.map((post) => (
								<div key={post.id} className="col-lg-4 col-md-6 col-sm-12">
									{/* BLOG POST IMAGE */}
									<div className="blog-post-img">
										<div className="hover-overlay">
											<Link href={'/blog/' + post?.data?.slug.iv}>
												{post?.data?.image?.iv && (
													<img
														className="same-height-image"
														src={'https://cloud.squidex.io/api/assets/signetblog/' + post?.data?.image?.iv[0]}
														alt={post?.data?.MainImgAltText?.iv}
														width="100%"
													/>
												)}
											</Link>
											<div className="item-overlay" />
										</div>
									</div>
									<div className="blog-post-txt">
										{/* <p className="p-md post-tag">{'Date: ' + getParsedDate(post.created)}</p> */}
										{/* Post Link */}
										<h2 className="h3-font">
											<Link href={'/blog/' + post?.data?.slug.iv}>{post?.data?.title.iv}</Link>
											{/* <a href="single-post.html"></a> */}
										</h2>
									</div>
								</div>
							))}
						</div>
					</div>{' '}
				</div>{' '}
			</section>
		</>
	);
}

export default Blog;

export async function getStaticProps(context) {
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

	return {
		props: posts,
	};
}
