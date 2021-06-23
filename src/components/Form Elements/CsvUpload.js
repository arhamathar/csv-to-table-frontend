import React, { useState } from "react";
import Preview from "../../pages/Preview";

function CsvUpload() {
	const [csv, setCsv] = useState("");
	const [csvString, setCsvString] = useState("");
	const [fileName, setFileName] = useState("Pick CSV");

	const onChangeHandler = (e) => {
		setCsv(e.target.files[0]);
		setFileName(e.target.files[0].name);
	};

	const onClickHandler = (e) => {
		if (csv) {
			const reader = new FileReader();
			reader.onload = () => {
				setCsvString(reader.result);
			};
			reader.readAsBinaryString(csv);
		}
	};

	return (
		<div className='form-container'>
			{!csvString && (
				<div className='form-container__div'>
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
						<button
							className='btn'
							type='button'
							onClick={onClickHandler}
						>
							{fileName}
						</button>
					</div>
				</div>
			)}
			{csvString && <Preview data={csvString} />}
		</div>
	);
}

export default CsvUpload;
