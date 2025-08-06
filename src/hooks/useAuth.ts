"use client";

import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { authUserAtom } from "@/atoms/auth";
import { fetchRandomUser } from "@/utils/api";
import { RandomUser } from "@/types/user";

export function useAuth() {
  const [user, setUser] = useAtom(authUserAtom);
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = async (_phone: string): Promise<RandomUser> => {
    const fetchedUser = await fetchRandomUser();
    setUser(fetchedUser);
    router.push("/dashboard");
    return fetchedUser;
  };

  const logout = () => {
    setUser(null);
    router.push("/auth");
  };

  return { user, login, logout };
}
