import { MdDelete } from "react-icons/md";

const DeleteButton = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`block rounded px-2 py-2 hover:bg-slate-700/50 ${className}`}
    >
      <MdDelete className="w-6 h-6" />
    </button>
  );
};

export default DeleteButton;
