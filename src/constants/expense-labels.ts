import { ExpenseLabel } from "../types/types";

export const EXPENSE_LABELS: ExpenseLabel[] = [
  ExpenseLabel.DRUGS,
  ExpenseLabel.HOME,
  ExpenseLabel.FOOD,
  ExpenseLabel.CAFE,
  ExpenseLabel.SHOPPING,
  ExpenseLabel.SUBSCRIPTIONS,
  ExpenseLabel.DEBT,
] as const;
