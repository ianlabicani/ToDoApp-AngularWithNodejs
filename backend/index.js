const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const app = express();

mongoose.connect("mongodb://localhost:27017/todolistDB");

const toDosSchema = {
	id: Number,
	name: String,
	description: String,
	isHighPriority: Boolean,
};
const toDo = mongoose.model("todo", toDosSchema);

app.use(cors());
app.use(express.json());

app.get("/api/todos", (req, res) => {
	toDo.find({}, (err, todos) => {
		if (err) {
			console.log("Error: ", err);
		} else {
			res.send(todos);
		}
	});
});

app.listen(3000, (err) => {
	if (err) {
		console.log("errpr :", err);
	} else {
		console.log("Server started at port 3000.");
	}
});
