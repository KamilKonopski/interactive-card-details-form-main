import React from "react";
import {
	LineChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Line,
	ResponsiveContainer,
	Label,
} from "recharts";

import { IProduct } from "../../interfaces/carts-interfaces";

interface IProps {
	products: IProduct[];
}

const ProductsChart: React.FC<IProps> = ({ products }) => {
	products.forEach((product) => {
		const calculateDiscountedPrice = () => {
			const result = (product.price * product.discountPercentage) / 100;
			const discountedPriceOfOneProduct = product.price - result;
			return +discountedPriceOfOneProduct.toFixed(2);
		};
		product.discountedPriceOfOneProduct = calculateDiscountedPrice();
	});
	console.log(products);

	return (
		<div>
			<ResponsiveContainer width="100%" height={250}>
				<LineChart
					width={100}
					height={100}
					data={products}
					margin={{ top: 55, right: 30, left: 20, bottom: 5 }}
				>
					<XAxis
						dataKey="title"
						tick={{ stroke: "#fdfdfd", fontSize: 12 }}
						interval={0}
					/>
					<YAxis dataKey="price" stroke="#fdfdfd">
						<Label value="price" offset={20} position="top" stroke="#fdfdfd" />
					</YAxis>
					<CartesianGrid strokeDasharray="3 3" />
					<Tooltip />
					<Line
						type="linear"
						dataKey="price"
						stroke="#ffcb05"
						strokeWidth={2}
					/>
					<Line
						type="linear"
						dataKey="discountedPriceOfOneProduct"
						stroke="#7ca5a8"
						strokeWidth={2}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default ProductsChart;
