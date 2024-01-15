"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { isExpired } from "../lib/utils";

const Homepage = () => {
  const router = useRouter();
  const { data, status } = useSession(  );
  // console.log(isExpired(data.expires))
  if (
    status === "unauthenticated" ||
    (status === "authenticated" && isExpired(data.isExpired))
  ) {
    router.push("/api/auth/signin");
  }
  return <div>Homepage</div>;
};

export default Homepage;
