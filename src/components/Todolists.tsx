import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllTodos,
  removeTodo,
  updateTodo,
} from "../features/todo/todoSlice";
import DeleteButton from "./DeleteButton";
import UpdateTodos from "./UpdateTodos";

const Todolists = () => {
  const todos = useSelector(getAllTodos);
  const [editId, setEditId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const dispatch = useDispatch();

  const handelEdit = (id: string, Text: string) => {
    setEditId(id);
    setEditText(Text);
  };

  const handleDeleteConfirm = (id: string) => {
    dispatch(removeTodo(id));
  };

  const hanldeUpateTodo = (id: string) => {
    dispatch(updateTodo({id , Text: editText})) 
    setEditId(null);
  }

  return (
    <div className="mt-5">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center">
          {editId === todo.id ? (
            <div className=" flex gap-4">
              <input
                type="text"
                value={editText}
                onChange={(e) => {
                  setEditText(e.target.value);
                  console.log(e.target.value);
                }}
                className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
              />
              <button onClick={() => hanldeUpateTodo(todo.id)}>Save</button>
            </div>
          ) : (
            <div className="text-xl">{todo.Text}</div>
          )}
       {!editId &&   <UpdateTodos
            onClick={() => {
              handelEdit(todo.id, todo.Text);
            }}
            className="ml-2"
          />}
          <DeleteButton
            onClick={() => handleDeleteConfirm(todo.id)}
            className="ml-2"
          />
        </li>
      ))}
    </div>
  );
};

export default Todolists;
