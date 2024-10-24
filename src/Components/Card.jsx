import React from "react";
import Button from "./Button";

function Card(props) {
	return (
		<>
			<div className="card flex flex-col w-[23%] h-[67vh] p-5 bg-slate-200 rounded-lg items-center">
				<img src={props.thumbnail} />
				<div className="card-body mt-5">
					<h5 className="font-bold  mt-5">{props.title}</h5>
					<p className="text-sm mt-2">{props.description}</p>
					<p className="text-md font-semibold mt-5">Rating: {props.rating}</p>
					<p className="text-lg font-bold mb-8 mt-2">Price: {props.price}</p>
				</div>

				<Button />
			</div>
		</>
	);
}

export default Card;
