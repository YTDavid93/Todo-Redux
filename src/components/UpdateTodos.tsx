import { MdEdit } from "react-icons/md";

interface UpdateTodosProps {
  onClick: () => void;
  className?: string;
}

const UpdateTodos = ({ onClick, className }: UpdateTodosProps) => {
  return <button onClick={onClick} className={` ${className}`}>
    <MdEdit />
  </button>;
};

export default UpdateTodos;
