const express = require("express");

const app = express();

app.use(express.json());

app.listen(3000, (err) => {
	if (err) {
		console.log("errpr :", err);
	} else {
		console.log("Server started at port 3000.");
	}
});
