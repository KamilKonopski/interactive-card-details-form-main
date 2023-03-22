import React from "react";

import classes from "./Wrapper.module.css";

interface IProps {
	children: React.ReactNode;
	className?: string;
}

const Wrapper = ({ children, className }: IProps) => {
	return (
		<section className={`${classes.wrapper} ${className}`}>{children}</section>
	);
};

export default Wrapper;
