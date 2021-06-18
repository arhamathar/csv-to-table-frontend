import React, { useRef, useState } from "react";

function CsvUpload() {
	const [file, setFile] = useState();
	const [fileName, setFileName] = useState("Pick CSV");

	const filePickerRef = useRef();

	const onChangeHandler = (e) => {
		let files = e.target.files;
		setFile(e.target.files);
		setFileName(e.target.files[0].name);

		const reader = new FileReader();
		// if (files && files[1] === 1) {
		reader.readAsDataURL(files[0]);
		reader.onload = (e) => {
			console.log("data", typeof e.target.result);
		};
		// }

		console.log(files);
	};

	const onClickHandler = (e) => {
		filePickerRef.current.click();
	};

	return (
		<div className='form-container'>
			<p>Choose CSV File</p>
			<input
				id='csv'
				type='file'
				name='file'
				accept='.csv'
				style={{ display: "none" }}
				ref={filePickerRef}
				onChange={onChangeHandler}
			/>
			<button className='btn' type='button' onClick={onClickHandler}>
				{fileName}
			</button>
		</div>
	);
}

export default CsvUpload;
