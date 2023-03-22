import React from "react";

import classes from "./Button.module.css";

interface IProps {
	text: string;
	onClick: () => void;
}

const Button: React.FC<IProps> = ({ onClick, text }) => {
	return (
		<button className={classes.button} type="button" onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
