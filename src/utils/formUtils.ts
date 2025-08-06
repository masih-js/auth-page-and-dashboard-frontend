import { isError } from "./typeGuards";
import type { FieldValues, Path, UseFormSetError } from "react-hook-form";

export function setFormError<TFieldValues extends FieldValues>(
  setError: UseFormSetError<TFieldValues>,
  field: Path<TFieldValues>,
  err: unknown,
  defaultMsg = "Something went wrong. Please try again.",
) {
  const message = isError(err) ? err.message : defaultMsg;
  setError(field, { type: "server", message });
}
