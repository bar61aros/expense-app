import { FC } from "react";

interface InputCellProps {
  title: string;
  onClick: () => void;
  type?: "number" | "action";
}

export const InputCell: FC<InputCellProps> = ({
  title,
  onClick,
  type = "number",
}) => {
  const inputCellVariants = {
    number: "bg-platinum hover:bg-platinum/70 text-black",
    action: "bg-green-700 hover:bg-green-600 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center p-4 h-10 text-center cursor-pointer text-3xl py-9 rounded-xl ${inputCellVariants[type]}`}
    >
      {title}
    </button>
  );
};
