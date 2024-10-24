import React, { useState, useEffect } from "react";
import Card from "./Components/Card";

function App() {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((data) => {
				setProduct(data.products);
			});
	}, []);

	return (
		<div className="App flex flex-wrap gap-10 justify-center p-10 bg-zinc-500">
			{product.map((product, index) => {
				return (
					<Card
						key={index}
						thumbnail={product.thumbnail}
						title={product.title}
						description={product.description}
						rating={product.rating}
						price={product.price}
					/>
				);
			})}
		</div>
	);
}

export default App;
