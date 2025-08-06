// atoms/auth.ts
import { atomWithStorage } from "jotai/utils";
import { RandomUser } from "@/utils/api";

/**
 * authUserAtom holds either the logged-in user
 * or null. It persists automatically to localStorage.
 */
export const authUserAtom = atomWithStorage<RandomUser | null>(
  "authUser",
  null,
);
