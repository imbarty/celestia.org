import * as React from "react";
import Lottie from "lottie-react";

const Perk = ({ animation, title }) => {
	return (
		<div className={"perk"}>
			<Lottie
				animationData={animation}
				loop={false}
				autoplay={true}
				onComplete={() => console.log("Animation completed:", title)}
				rendererSettings={{
					preserveAspectRatio: "xMidYMid slice",
					progressiveLoad: true,
				}}
			/>
			<div className={"title"}>{title}</div>
		</div>
	);
};

export default Perk;
