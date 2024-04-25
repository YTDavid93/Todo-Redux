import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodos = () => {
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSubmit = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <section className="flex">
      <input
        type="text"
        placeholder="Enter your Todos"
        value={input}
        onChange={onInputChange}
        className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500  text-zinc-100 px-2 py-1 cursor-pointer"
        onClick={() => onSubmit}
      >
        Add Todo
      </button>
    </section>
  );
};

export default AddTodos;
