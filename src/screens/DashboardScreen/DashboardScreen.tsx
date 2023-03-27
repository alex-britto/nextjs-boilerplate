import { useEffect } from "react";
import { useRouter } from "next/router";
import { getToken } from "@/shared/helpers/token";
import Head from "next/head";

interface DashboardScreenProps {}

export function DashboardScreen(props: DashboardScreenProps) {
  const router = useRouter();

  useEffect(() => {
    if (!getToken()) {
      router.push("/login");
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>Linda Pagina Dashboard</title>
      </Head>
      <h1>Dashboard</h1>
    </>
  );
}
