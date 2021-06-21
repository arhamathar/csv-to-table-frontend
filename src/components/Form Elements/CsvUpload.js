import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

function CsvUpload() {
	const history = useHistory();
	const [csv, setCsv] = useState("");
	const [csvString, setCsvString] = useState("");
	const [fileName, setFileName] = useState("Pick CSV");

	const onChangeHandler = (e) => {
		setCsv(e.target.files[0]);
		setFileName(e.target.files[0].name);
	};

	const onClickHandler = (e) => {
		const reader = new FileReader();
		reader.onload = () => {
			setCsvString(reader.result);
		};
		reader.readAsBinaryString(csv);
		console.log(csvString);
		history.push("/csv-table-preview");
	};

	return (
		<div className='form-container'>
			<p>Choose CSV File</p>
			<div>
				<input
					id='csv'
					type='file'
					name='file'
					accept='.csv'
					onChange={onChangeHandler}
					required
				/>
				<button className='btn' type='button' onClick={onClickHandler}>
					{fileName}
				</button>
			</div>
		</div>
	);
}

export default CsvUpload;
