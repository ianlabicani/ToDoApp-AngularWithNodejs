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
const ToDo = mongoose.model("todo", toDosSchema);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.get("/api/todos", (req, res) => {
	ToDo.find({}, (err, todos) => {
		if (err) {
			console.log("Error: ", err);
		} else {
			res.send(todos);
		}
	});
});

app.delete("/api/todo/:id", (req, res) => {
	ToDo.findOneAndDelete({ id: req.params.id }, (err, todo) => {
		if (err) {
			console.log("Error: ", err);
		} else {
			console.log("Deleted Successfully.");
			res.send(todo);
		}
	});
});

app.put("/api/todo/:id", (req, res) => {
	ToDo.findOneAndUpdate(
		{ id: req.params.id },
		req.body,
		{ new: true },
		(err, todo) => {
			if (err) {
				console.log("Error: ", err);
			} else {
				console.log("Updated Successfully.");
				res.send(todo);
			}
		}
	);
});

// server start
app.listen(3000, (err) => {
	if (err) {
		console.log("errpr :", err);
	} else {
		console.log("Server started at port 3000.");
	}
});
