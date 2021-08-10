import React, { useState } from "react";

const Home = () => {
	const [Color, setColor] = useState("");

	return (
		<div className="text-center mt-5">
			<div className="palito"></div>
			<div className="caja">
				<div
					onClick={() => setColor("rojo")}
					className={"rojo" + (Color == "rojo" ? " glow" : "")}></div>
				<div
					onClick={() => setColor("amarillo")}
					className={
						"amarillo" + (Color == "amarillo" ? " glow" : "")
					}></div>
				<div
					onClick={() => setColor("verde")}
					className={
						"verde" + (Color == "verde" ? " glow" : "")
					}></div>
			</div>
		</div>
	);
};

export default Home;
