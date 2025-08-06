import { RandomUser, RandomUserResponse } from "@/types/user";

export async function fetchRandomUser(): Promise<RandomUser> {
  const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }
  const data: RandomUserResponse = await res.json();
  return data.results[0];
}
