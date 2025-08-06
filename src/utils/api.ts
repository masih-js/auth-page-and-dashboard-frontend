import { RandomUser, RandomUserResponse } from "@/types/user";

const API_URL = process.env.NEXT_PUBLIC_RANDOM_USER_API_URL;

export async function fetchRandomUser(): Promise<RandomUser> {
  if (!API_URL) {
    throw new Error(
      "Missing NEXT_PUBLIC_RANDOM_USER_API_URL environment variable",
    );
  }

  const res = await fetch(`${API_URL}?results=1&nat=us`);
  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }
  const data: RandomUserResponse = await res.json();
  return data.results[0];
}
