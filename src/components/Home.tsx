import React from 'react';
import {DataOneObjType} from "../App";

type PropsHomeType = {
	data1: DataOneObjType
}

export const Home = (props: PropsHomeType) => {
	return (
		<div>
			<h1>Home</h1>
			<div>{props.data1.image}</div>
			<button>{props.data1.button}</button>
		</div>
	);
};

