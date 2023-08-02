import React from 'react';
import {DataTwoType} from "../App";

type MessageType = {
	data2: DataTwoType[]
}

export const Message = (props: MessageType) => {
	return (
		<>
			<h1>Message</h1>
			<div className={"messagesContainer"}>
				<div>
					<ul>
						{props.data2.map((el)=>{
							return (
								<li>{el.name}</li>
							)
						})}
					</ul>
				</div>

				<div>
					<ul>
						{props.data2.map((el)=>{
							return (
								<li>{el.message}</li>
							)
						})}
					</ul>
				</div>
			</div>

		</>
	);
};

