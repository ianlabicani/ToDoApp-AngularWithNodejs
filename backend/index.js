const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost:27017/todolistDB");

const toDosSchema = {
	id: Number,
	name: String,
	description: String,
	isHighPriority: Boolean,
};
const toDo = mongoose.model("todo", toDosSchema);

const defaultToDos = [
	{
		id: 1,
		name: "Grocery Shopping",
		description: "Pick up groceries for the week",
		isHighPriority: false,
	},
	{
		id: 2,
		name: "Doctor's Appointment",
		description: "Check-up with the dentist",
		isHighPriority: true,
	},
	{
		id: 3,
		name: "Meeting with Team",
		description: "Discuss project progress with team",
		isHighPriority: false,
	},
];

toDo.insertMany(defaultToDos, (err) => {
	if (err) {
		console.log("Insert Failed.");
	} else {
		console.log("Insert Successful.");
	}
});

app.use(cors());
app.use(express.json());

app.listen(3000, (err) => {
	if (err) {
		console.log("errpr :", err);
	} else {
		console.log("Server started at port 3000.");
	}
});
