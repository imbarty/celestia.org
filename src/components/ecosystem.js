import React from "react";
import Image from "./imageComponent";

const Ecosystem = ({ ecosystem }) => {
	return (
		<a href={ecosystem.url} target={"_blank"} rel={"noreferrer"} aria-label={ecosystem.title}>
			<div className={"ecosystem d-flex flex-column justify-content-between"}>
				<div>
					<div className={"logo-container"}>
						<Image alt={ecosystem.title} filename={ecosystem.image} />
					</div>
					{ecosystem.categories.map((category) => (
						<div className={"category"}>{category}</div>
					))}
				</div>
				{ecosystem.title && <div className={"title"}>{ecosystem.title}</div>}
			</div>
		</a>
	);
};

export default Ecosystem;
