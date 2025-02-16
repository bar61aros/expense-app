import { FC, useState } from "react";
import { InputCell } from "./components/input-cell";
import { EXPENSE_LABELS } from "./constants/expense-labels";
import { INPUT_CELLS } from "./constants/input-cells";
import { ExpenseLabel } from "./types/types";

export const App: FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [expenseLabel, setExpenseLabel] = useState<ExpenseLabel | null>(null);

  function handleAmountChange(cell: string) {
    if (cell === "✓") {
      alert("done");
    } else {
      setAmount((prev) => prev + cell);
    }
  }

  return (
    <body className="bg-primary/90">
      <main className="bg-primary min-h-dvh flex flex-col justify-between items-center pt-4 pb-4 max-w-lg mx-auto px-6">
        <h1 className="text-4xl tracking-tight w-full text-left text-white">
          Expenses
        </h1>
        <div className="w-full flex flex-row justify-between items-center">
          <h2 className="text-5xl tracking-tight w-full text-center text-white">
            {parseFloat(amount) || "0"}
          </h2>
          <button
            onClick={() => setAmount("")}
            className="bg-red-200 text-white rounded-2xl px-3 text-xl"
          >
            X
          </button>
        </div>
        <div className="w-full">
          <div>
            <input
              id="name"
              className="w-full h-full px-4 py-4 text-2xl bg-primary/70 text-white border-2 border-white rounded-2xl active:border-primary focus:border-primary"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Name"
            />
          </div>
          <section className="flex flex-row w-full py-4 overflow-scroll">
            {EXPENSE_LABELS.map((label) => (
              <div
                className={`border rounded-full px-4 py-2 mx-1 cursor-pointer border-gray-500 bg-gray-300 ${
                  expenseLabel === label ? "bg-green-700" : ""
                }`}
                onClick={() => setExpenseLabel(label)}
              >
                <p>{label}</p>
              </div>
            ))}
          </section>
          <section className="w-full grid grid-cols-3 gap-2">
            {INPUT_CELLS.map((cell) => (
              <InputCell
                title={cell}
                onClick={() => handleAmountChange(cell)}
                type={cell === "✓" ? "action" : "number"}
              />
            ))}
          </section>
        </div>
      </main>
    </body>
  );
};
