export interface ICart {
	discountedTotal: number;
	id: number;
	products: IProduct[];
	total: number;
	totalProducts: number;
	totalQuantity: number;
	userId: number;
}

export interface IProduct {
	discountPercentage: number;
	discountedPrice: number;
	id: number;
	price: number;
	quantity: number;
	title: string;
	total: number;
	discountedPriceOfOneProduct: number;
}

export interface IAddProduct {
	id: number;
	quantity: number;
}
