"use client";
import React, { createContext, useState } from "react";

export const GlobalContext = createContext({
	userName: "John Doe",
	value: "ham144", // Initial value for the state
	doSomething: () => {}, // Function to handle something
	setValue: (newValue) => {},
});

const GglobalState = ({ children }) => {
	const [value, setValue] = useState("ham144");
	const [userName, setUsername] = useState("Ham");

	function doSomething() {
		//complex logic here
		console.log("Hello guys");
	}

	return (
		<GlobalContext.Provider
			value={{ doSomething, value, setValue, userName, setUsername }}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GglobalState;
