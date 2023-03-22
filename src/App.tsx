import React, { useEffect, useState } from "react";

import AddCart from "./components/Cart/AddCart";
import SingleCart from "./components/Cart/SingleCart";

import { IAddProduct, ICart } from "./interfaces/carts-interfaces";

import classes from "./App.module.css";
import Wrapper from "./components/UI/Wrapper/Wrapper";

//100 produktów

const App: React.FC = () => {
	const [carts, setCarts] = useState<ICart[] | []>([]);

	useEffect(() => {
		fetch("https://dummyjson.com/carts")
			.then((res) => res.json())
			.then(({ carts }) => setCarts(carts));
	}, []);

	const handleAddCart = (addProducts: IAddProduct[]) => {
		fetch("https://dummyjson.com/carts/add", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				userId: 1,
				products: addProducts,
			}),
		})
			.then((res) => res.json())
			.then((data) => setCarts([...carts, data]));
	};

	const handleDeleteCart = (id: number) => {
		const filteredCarts = carts.filter((cart) => cart.id !== id);
		setCarts(filteredCarts);
	};
	return (
		<div className={classes.container}>
			<header>
				<h1 className={classes.heading}>Carts Dashboard</h1>
			</header>
			<Wrapper>
				<AddCart onAdd={handleAddCart} />
			</Wrapper>
			<Wrapper>
				{carts.map((cart) => (
					<SingleCart
						key={cart.id}
						totalProducts={cart.totalProducts}
						products={cart.products}
						id={cart.id}
						onDelete={handleDeleteCart}
					/>
				))}
			</Wrapper>
		</div>
	);
};

export default App;
