import React from 'react';
import './App.css';
import {Home} from "./components/Home";
import {Message} from "./components/Message";

export type DataOneObjType = {
	image: string
	button: string
}


export type DataTwoType = {
	id: number
	name: string
	message: string
}


const data1: DataOneObjType = {
	image: "The image should be here",
	button: "The name of the button"
}

const data2: DataTwoType[] = [
	{id: 1, name: 'Alex', message: "Hi."},
	{id: 2, name: 'Anna', message: "Hello."},
	{id: 3, name: 'Roma', message: "I'm sorry, I'm busy!"},
	{id: 4, name: 'Irina', message: "How r u?"},
	{id: 5, name: 'Dmitry', message: "Well done!"},
	{id: 6, name: 'Kate', message: "Well, it was my bad."},
]

function App() {

	return (
		<div className="App">
			<Home data1={data1}/>
			<Message data2={data2}/>
		</div>
	);
}

export default App;

