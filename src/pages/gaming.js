import React, { useState } from "react";
import ReactModal from "react-modal";
import Layout from "../components/layout";
import Button from "../components/buttons/button";
import { StaticImage } from "gatsby-plugin-image";

import "../scss/main.scss";
import { FooterBoxes } from "../datas/home/content";

import SignUp from "../components/modals/signUp";
import { seoContent } from "../datas/home/seoContent";
import Seo from "../components/seo";

const IndexPage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalType] = useState("");

	// const handleModalOpen = (event) => {
	// 	setModalType(event.target.id);
	// 	setIsModalOpen(true);
	// 	document.body.style.overflow = "hidden";
	// };

	const handleModalClose = (event) => {
		setIsModalOpen(false);
		document.body.style.overflow = "unset";
	};

	return (
		<Layout footerBoxes={FooterBoxes} className={"gaming-wrapper"}>
			<Seo title={seoContent.title} description={seoContent.description} ogTitle={seoContent.ogTitle} image={seoContent.image} />
			<div className='gaming-page'>
				<main>
					<section className={"hero-section"}>
						<div className={"container"}>
							<h1>Scale with the number of gamers</h1>
							<div className={"text"}>Frictionlessly build scalable and expressive fully on-chain games with Celestia underneath.</div>

							<div className='buttom'>
								<Button class={"purple"} type={"external"} text={"Build Modular"} url={"/"} />
								<Button class={"blurred"} type={"external"} text={"Contact"} url={"/"} />
							</div>
						</div>
					</section>
					<section id='unleash-section' className='unleash-section'>
						<div className='container'>
							<div className='title d-flex justify-content-center'>
								<h2 className='pb-2'>
									Unleash full <span className='gradient-text'>expressivity onchain</span>
								</h2>
							</div>
							<div className='d-flex flex-column flex-lg-row gap-5 gap-lg-3'>
								<div className='col-12 col-lg-6 col-1'>
									<div className='d-flex flex-column gap-3 align-items-lg-end'>
										<div className='card'>
											<div className='card-body'>
												<h3 className='card-title'>Boundless creativity</h3>
												<p className='card-text'>
													Use your chain as a creative vehicle. Integrate any type of gaming logic and customise
													your VM to unlock novel game features.
												</p>
											</div>
										</div>
										<div className='card small'>
											<div className='card-body'>
												<h3 className='card-title'>Become sovereign</h3>
												<p className='card-text'>
													Pick and choose the modular stack that best suits your initial needs. And in the future,
													upgrade components as your game evolves and new modular capabilities come online.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className='col-12 col-lg-6 col-2'>
									<div className='d-flex flex-column gap-3'>
										<div className='card'>
											<div className='card-body'>
												<h3 className='card-title'>Dynamic scaling</h3>
												<p className='card-text'>
													Celestia’s Data Availability Sampling enables low fees and high throughput for your game,
													whilst maintaining verifiability by any user.
												</p>
											</div>
										</div>
										<div className='card small'>
											<div className='card-body'>
												<h3 className='card-title'>Forever Unpluggable</h3>
												<p className='card-text'>
													Existing on top of an immutable blockchain with Celestia underneath, gaming moves from
													a make-believe exercise to an objective reality that is always persistent and accessible.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className={"games-section"}>
						<div className={"container"}>
							<h2 className='mb-5'>Games using the modular stack</h2>
							<div className='row flex-column-reverse flex-lg-row mb-5'>
								<div className='flex flex-column col-12 col-lg-4 d-flex justify-content-center'>
									<h3 className='title mb-4'>Argus</h3>
									<p className='text'>
										Argus develops the World Engine, an onchain game engine that makes it easy for developers to build and scale
										performance-intensive onchain games with Celestia underneath.
									</p>
								</div>
								<div className='col-12 col-lg-8 mb-4 mb-lg-0'>
									<StaticImage className='image-right' src='../images/gaming/dark-frontier.jpg' />
								</div>
							</div>
							<div className='row flex-column flex-lg-row'>
								<div className='col-12 col-lg-8 mb-4 mb-lg-0'>
									<StaticImage className='image-left' src='../images/gaming/game-2.jpg' />
								</div>
								<div className='flex flex-column col-12 col-lg-4 d-flex justify-content-center'>
									<h3 className='title mb-4'>Curio</h3>
									<p className='text'>
										Curio is a gaming studio building Keystone, an engine that allows developers to create games where players can
										co-create new governance structures and economic systems, starting with their own social strategy title.
									</p>
								</div>
							</div>
						</div>
					</section>
					<section className={"unlock-section"}>
						<div className={"container"}>
							<div className='row flex-column flex-lg-row mb-5'>
								<div className='title-col flex flex-column col-12 col-lg-6 d-flex justify-content-center'>
									<h2 className='mb-4'>Truly Autonomous Worlds</h2>
									<p className='text'>
										Celestia allows you to make the leap from building a game to building a digital universe
										that is sovereign, persistent and maximally scaleable whilst being verifiable by any user.
										A truly autonomous world is built on top of fully autonomous foundations.
									</p>
									<div className='button-wrapper mt-3'>
										<Button class={"simple"} type={"external"} text={"Level up"} url={"/build/"} />
									</div>
								</div>
								<div className='col-12 col-lg-6 mt-5 mt-lg-0'>
									<StaticImage src='../images/gaming/game-3.jpg' />
								</div>
							</div>
						</div>
					</section>
				</main>
				<ReactModal isOpen={isModalOpen}>
					<div className='inner'>
						<SignUp modalType={modalType} />
						<button className='close-button' onClick={handleModalClose}>
							<i className='icon-close' aria-label='close' />
						</button>
					</div>
				</ReactModal>
			</div>
		</Layout>
	);
};

export default IndexPage;
