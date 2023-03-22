import React, { useRef, useState } from "react";

import Button from "../UI/Button/Button";

import { IAddProduct } from "../../interfaces/carts-interfaces";

import classes from "./AddCart.module.css";

const AddCart: React.FC<{ onAdd: (addProducts: IAddProduct[]) => void }> = ({
	onAdd,
}) => {
	const [products, setProducts] = useState<IAddProduct[]>([]);
	const [error, setError] = useState<string>("");
	const productIdRef = useRef<HTMLInputElement>(null);
	const productQuantityRef = useRef<HTMLInputElement>(null);

	const handleAddProduct = () => {
		if (productIdRef.current && productQuantityRef.current) {
			if (
				+productIdRef.current.value >= 1 &&
				+productIdRef.current.value <= 100
			) {
				const index = products.findIndex(
					(item) => item.id === +productIdRef.current!.value
				);
				if (index !== -1) {
					products[index].quantity += +productQuantityRef.current.value || 1;
					setProducts([...products]);
				} else {
					setProducts([
						...products,
						{
							id: +productIdRef.current.value,
							quantity: +productQuantityRef.current.value || 1,
						},
					]);
				}

				setError("");
			} else {
				setError("Invalid value! Only between 1-100");
			}

			productIdRef.current.value = "";
			productQuantityRef.current.value = "";
		}
	};

	const handleAddCart = () => {
		if (products.length > 0) {
			onAdd(products);
			setProducts([]);
			setError("");
		} else {
			setError("Add ID of product and optionally quantity!");
		}
	};

	return (
		<div className={classes.add}>
			<div className={classes.inputs}>
				<label htmlFor="productId">ID of product you want (1-100):</label>
				<input
					type="number"
					name="productId"
					id="productId"
					ref={productIdRef}
					placeholder="number of ID"
				/>
				<label htmlFor="productQuantity">Quantity:</label>
				<input
					type="number"
					name="productQuantity"
					id="productQuantity"
					ref={productQuantityRef}
					placeholder="number of quantity"
				/>
				<Button onClick={handleAddProduct} text="Add Product" />
			</div>
			<div className={classes.product}>
				{products.map((product, index) => (
					<li key={index}>
						<span>id: {product.id},</span>
						<span>quantity: {product.quantity}</span>
					</li>
				))}
			</div>
			{error && <span className={classes.error}>{error}</span>}
			<Button onClick={handleAddCart} text="Add Cart" />
		</div>
	);
};

export default AddCart;
