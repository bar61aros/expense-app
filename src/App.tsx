import { FC, useState } from "react";
import { InputCell } from "./components/input-cell";
import { EXPENSE_LABELS } from "./constants/expense-labels";

export const App: FC = () => {
  const [inputText, setInputText] = useState<string>("");
  return (
    <body className="bg-primary/90">
      <main className="bg-primary min-h-dvh flex flex-col justify-between items-center pt-4 pb-4 max-w-lg mx-auto px-6">
        <h1 className="text-4xl tracking-tight w-full text-left text-white">
          Expenses
        </h1>
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
              <div className="border rounded-full px-4 py-2 mx-1 border-gray-500 bg-gray-300">
                <p>{label}</p>
              </div>
            ))}
          </section>
          <section className="w-full grid grid-cols-3 gap-2">
            <InputCell title="1" onClick={() => console.log("click")} />
            <InputCell title="2" onClick={() => console.log("click")} />
            <InputCell title="3" onClick={() => console.log("click")} />
            <InputCell title="4" onClick={() => console.log("click")} />
            <InputCell title="5" onClick={() => console.log("click")} />
            <InputCell title="6" onClick={() => console.log("click")} />
            <InputCell title="7" onClick={() => console.log("click")} />
            <InputCell title="8" onClick={() => console.log("click")} />
            <InputCell title="9" onClick={() => console.log("click")} />
            <InputCell title="." onClick={() => console.log("click")} />
            <InputCell title="0" onClick={() => console.log("click")} />
            <InputCell
              title="✓"
              onClick={() => console.log("click")}
              type="action"
            />
          </section>
        </div>
      </main>
    </body>
  );
};
