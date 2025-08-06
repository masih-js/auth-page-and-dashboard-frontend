// atoms/auth.ts
import { atomWithStorage } from "jotai/utils";
import { RandomUser } from "../types/user";

export const authUserAtom = atomWithStorage<RandomUser | null>(
  "authUser",
  null,
);
