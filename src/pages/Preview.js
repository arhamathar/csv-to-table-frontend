import React from "react";
import CsvTable from "../components/Table/CsvTable";

function Preview(props) {
	const csvToTable = (data) => {
		if (data === "") return [];
		if (data === undefined) return [];
		console.log(data);
		const rows = data.replace(/['"]+/g, "").trim().split("\n");
		console.log(rows);
		const table = rows.map((row) => {
			return row.split(",");
		});
		return table;
	};

	return (
		<div>
			<h1>Preview</h1>
			<CsvTable data={csvToTable(props.data)} />
		</div>
	);
}

export default Preview;
