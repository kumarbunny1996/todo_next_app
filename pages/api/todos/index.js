import dbConnect from "../../../utils/dbConnect";
import TodoModel from "../../../models/TodoModel";

export default async function handler(req, res) {
  const { method } = req;
  console.log(req.body);
  // Connect to database
  await dbConnect();

  // Create task
  if (method === "POST") {
    try {
      const newTodo = await new TodoModel(req.body).save();
      res
        .status(200)
        .json({ data: newTodo, message: "Task added successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
      console.log(error);
    }
  }

  if (method === "GET") {
    try {
      const todos = await TodoModel.find();
      res.status(200).json({ data: todos });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
      console.log(error);
    }
  }
}
