import { getSession } from "next-auth/react";

export const axiosAuthHeader = async () => {
  const session = await getSession();
  if (session?.accessToken) {
    return {
      headers: { Authorization: `Bearer ${session?.accessToken}` },
    };
  } else {
    return {
      headers: { Authorization: `Bearer ` },
    };
  }
};
