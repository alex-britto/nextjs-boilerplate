import { useEffect } from "react";

import { useRouter } from "next/router";
import Head from "next/head";

import { Text } from "@/components";

import { LoggedLayout } from "@/layout/logged";
import { getUser } from "@/shared/helpers/user";

export const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    !getUser() && router.push("/login");
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <LoggedLayout>
        <Text>Você está no dashboard</Text>
      </LoggedLayout>
    </>
  );
};
