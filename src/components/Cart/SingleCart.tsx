import React, { useState } from "react";

import { IProduct } from "../../interfaces/carts-interfaces";
import ProductsChart from "../Products/ProductsChart";
import Button from "../UI/Button/Button";
import Wrapper from "../UI/Wrapper/Wrapper";

import classes from "./SingleCart.module.css";

interface IProps {
	totalProducts: number;
	products: IProduct[];
	id: number;
	onDelete: (id: number) => void;
}

const SingleCart: React.FC<IProps> = ({
	totalProducts,
	products,
	id,
	onDelete,
}) => {
	const [showChart, setShowChart] = useState(false);

	const handleShowProductChart = () => setShowChart((prevShow) => !prevShow);

	return (
		<>
			<Wrapper className={classes.cart}>
				<div className={classes.image}>
					<img src="/basket-icon.png" alt="" />
					<span>cart {id}</span>
				</div>
				<div className={classes.product}>
					<span>All products: {totalProducts}</span>
					<Button onClick={() => onDelete(id)} text="Delete cart" />
					<Button onClick={handleShowProductChart} text="Show product chart" />
				</div>
			</Wrapper>
			{showChart && <ProductsChart products={products} />}
		</>
	);
};

export default SingleCart;
