import * as React from "react";
import Image from "../components/imageComponent";
import Button from "../components/buttons/button";

import { heroData } from "../datas/celestia-underneath/hero-data";
import { whatIsANode } from "../datas/celestia-underneath/what-is-a-node";
import { joinTheNetwork } from "../datas/celestia-underneath/join-the-network";
import { lightNode } from "../datas/celestia-underneath/light-node";
import { FooterBoxes } from "../datas/celestia-underneath/content";

import Layout from "../components/layout";
import IconCard from "../components/modules/icon-card";

import { seoContent } from "../datas/run-a-node/seoContent";
import Seo from "../components/seo";

const CelestiaUnderneath = () => {
	return (
		<Layout footerBoxes={FooterBoxes}>
			<Seo title={seoContent.title} description={seoContent.description} image={seoContent.image} />
			<div className={"celestia-underneath"}>
				<main>
					<section className='hero'>
						<div className={"container"}>
							<h1 className={"main"}>{heroData.title}</h1>
							<div className={"row justify-content-center justify-content-lg-between align-items-start"}>
								<div className={"text-box col-12 col-lg-5"}>
									<h2 className={"subtitle"}>{heroData.subtitle}</h2>
									<p className={"text-bold"} dangerouslySetInnerHTML={{ __html: heroData.textBold }} />
									<p className={"text-slim"} dangerouslySetInnerHTML={{ __html: heroData.textLight }} />
									<p className={"text-purple"} dangerouslySetInnerHTML={{ __html: heroData.textPurple }} />
								</div>
								<div className={"image-box col-12 col-md-9 col-lg-6"}>
									{/* card 1 */}
									<div className='card-1'>
										<div className='position-relative'>
											<div className='dotted-line'>
												<svg
													className='d-none d-md-block'
													width={136}
													height={81}
													viewBox='0 0 136 81'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path d='M0 0.5H119C127.837 0.5 135 7.66344 135 16.5V81' stroke='black' strokeDasharray='12 12' />
												</svg>
												<svg
													className='d-md-none'
													width={2}
													height={140}
													viewBox='0 0 1 140'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<line x1='0.5' y1='2.18557e-08' x2='0.499994' y2={140} stroke='black' strokeDasharray='12 12' />
												</svg>
											</div>
											<div className='text-card'>
												<div className='text-card-wrapper'>
													<h3>{heroData.cards[0].title}</h3>
													<p>{heroData.cards[0].text}</p>
													<div className='link-wrapper'>
														<Button
															class={heroData.cards[0].button.class}
															type={heroData.cards[0].button.type}
															text={heroData.cards[0].button.text}
															url={heroData.cards[0].button.url}
														/>
													</div>
												</div>
											</div>
										</div>
									</div>

									{/* main image */}
									<div className='image-wrapper'>
										<Image alt={heroData.image.alt} filename={heroData.image.filename} />
									</div>

									{/* card 2 */}
									<div className='card-2'>
										<div className='position-relative'>
											<div className='dotted-line'>
												<svg
													className='d-none d-lg-block'
													width={250}
													height={138}
													viewBox='0 0 250 138'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path
														d='M249.278 0.416315L60.1482 134.067C57.4474 135.975 54.2216 137 50.9146 137L0.500009 137.001'
														stroke='black'
														strokeDasharray='12 12'
													/>
												</svg>

												<svg
													className='d-lg-none'
													width={1}
													height={200}
													viewBox='0 0 1 200'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<line x1='0.5' y1='-2.18557e-08' x2='0.500009' y2={200} stroke='black' strokeDasharray='12 12' />
												</svg>
											</div>
											<div className='text-card'>
												<div className='text-card-wrapper'>
													<h3>{heroData.cards[1].title}</h3>
													<p>{heroData.cards[1].text}</p>
													<div className='link-wrapper'>
														<Button
															class={heroData.cards[1].button.class}
															type={heroData.cards[1].button.type}
															text={heroData.cards[1].button.text}
															url={heroData.cards[0].button.url}
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* <section className={"what-is-a-node"}>
						<div className={"container"}>
							<div className={"row justify-content-between align-items-center"}>
								<div className={"image-box--node col-12 col-lg-6"}>
									<div className='image-wrapper'>
										<Image alt={heroData.image.alt} filename={heroData.image.filename} />
									</div>
								</div>
								<div className={"text-box col-12 col-lg-6"}>
									<h2 className='title'>{whatIsANode.title}</h2>
									<div className={"text"} dangerouslySetInnerHTML={{ __html: whatIsANode.text }} />
								</div>
							</div>
						</div>
					</section> */}

					<section className={"join-the-network"}>
						<div className={"container"}>
							<div className={"row justify-content-center align-items-center"}>
								<h2 className='with-decor'>{joinTheNetwork.title}</h2>
								{joinTheNetwork.description && <div className={"description"}>{joinTheNetwork.description}</div>}
								<div className={"row gx-3 gy-3 pt-lg-4 pb-3"}>
									{joinTheNetwork.items.map(function (item) {
										return (
											<IconCard
												className='icon-card-wrapper col-12 col-md min-width-33'
												key={item.id}
												content={item}
												variant={"anchor no-image"}
											/>
										);
									})}
								</div>
							</div>
						</div>
					</section>

					<section className={"light-nodes"}>
						<div className={"container"}>
							<div className={"row justify-content-center align-items-center"}>
								<div className='d-lg-flex justify-content-between align-items-center'>
									<h2 className='mb-3 mb-lg-0 with-decor'>{lightNode.title}</h2>
									<Button
										class={lightNode.button.class}
										type={lightNode.button.type}
										text={lightNode.button.text}
										url={lightNode.button.url}
									/>
								</div>
								{lightNode.description && <div className={"description"}>{lightNode.description}</div>}
								<div className={"row gx-3 gy-3 pt-4 pb-3"}>
									{lightNode.items.map(function (item) {
										return (
											<IconCard
												className='icon-card-wrapper col-12 col-md min-width-33'
												key={item.id}
												content={item}
												variant={"anchor no-image"}
											/>
										);
									})}
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>
		</Layout>
	);
};

export default CelestiaUnderneath;
