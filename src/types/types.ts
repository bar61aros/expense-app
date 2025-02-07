export enum ExpenseLabel {
  DRUGS = "DRUGS",
  HOME = "HOME",
  FOOD = "FOOD",
  CAFE = "CAFE",
  SHOPPING = "SHOPPING",
  SUBSCRIPTIONS = "SUBSCRIPTIONS",
  DEBT = "DEBT",
}

export type Expense = {
  id: number;
  description: string;
  amount: number;
  createdAt: Date;
  label: ExpenseLabel;
};
