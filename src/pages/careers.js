import React from "react";
import Layout from "../components/layout";
import { content, FooterBoxes } from "../datas/careers/content";
import Perk from "../components/modules/perk";
import Image from "../components/imageComponent";
import Button from "../components/buttons/button";
import { seoContent } from "../datas/careers/seoContent";
import Seo from "../components/seo";

const CareersPage = () => {
	return (
		<Layout footerBoxes={FooterBoxes}>
			<Seo title={seoContent.title} description={seoContent.description} ogTitle={seoContent.ogTitle} image={seoContent.image} />
			<div className={"careers-page"}>
				<main>
					<div className={"container"}>
						<div className={"row mb-5 pb-5"}>
							<div className={"col col-12 col-md-6 pb-5 pe-md-5"}>
								<h1 className={"main mb-4"}>{content.title}</h1>
								<div className={"text"}>{content.subtitle}</div>
								<div className={"paragraph"}>{content.text}</div>
								{content.button && <Button type={"external"} class={"simple"} text={content.button.text} url={content.button.url} />}
							</div>
							<div className={"col col-12 col-md-6 ps-md-5 pt-5"}>
								<h4 className={"main mb-4 md:mb-3"}>{content.perks.title}</h4>

								<div className={"row"}>
									{content.perks.perks.map((perk, index) => (
										<div className={"col-md-6 pb-5"} key={index}>
											<Perk
												title={perk.title}
												animation={perk.animation}
												image={<Image className={"perk-image"} alt={perk.title} filename={perk.image} />}
											/>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</Layout>
	);
};

export default CareersPage;
