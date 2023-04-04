import { useEffect } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import { getToken } from "@/shared/helpers/token";
import { LoggedLayout } from "@/layout/logged";

export const DashboardScreen = () => {
  const router = useRouter();

  useEffect(() => {
    if (!getToken()) {
      router.push("/login");
    }
  }, [router]);

  return (
    <LoggedLayout>
      <Head>
        <title>Linda Pagina Dashboard</title>
      </Head>
      <h1>Dashboard</h1>
    </LoggedLayout>
  );
};
