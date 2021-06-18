import React from "react";
import "./input.css";

const Input = (props) => {
	return (
		<div className='input-container'>
			<label className='label'>{props.label}</label>
			<input
				id={props.id}
				{...props}
				className={`input ${props.className}`}
				onChange={(e) => props.onChange(e)}
				value={props.value}
				autoFocus={props.autoFocus}
			/>
		</div>
	);
};

export default Input;
