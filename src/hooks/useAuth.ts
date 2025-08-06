// hooks/useAuth.ts
"use client";

import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { authUserAtom } from "@/atoms/auth";
import { fetchRandomUser } from "@/utils/api";
import { RandomUser } from "@/types/user";

export function useAuth() {
  const [user, setUser] = useAtom(authUserAtom);
  const router = useRouter();

  /**
   * Logs in by fetching a random user, persisting it,
   * then sending you to /dashboard.
   * @param phone The validated phone number (not used in fetch)
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = async (_phone: string): Promise<RandomUser> => {
    const fetchedUser = await fetchRandomUser();
    setUser(fetchedUser);
    router.push("/dashboard");
    return fetchedUser;
  };

  /**
   * Clears out the stored user and sends you back to /auth.
   */
  const logout = () => {
    setUser(null);
    router.push("/auth");
  };

  return { user, login, logout };
}
