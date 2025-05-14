import { loadDataA, loadDataB } from "../data";

export const revalidate = 7200; // 2 hours in seconds

export default async function WorkingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  console.log("Locale:", locale);
  const dataA = await loadDataA();
  const dataB = await loadDataB();

  return (
    <div>
      <h1>Working Page</h1>
      <p>Locale: {locale}</p>
      <p>DataA: {dataA}</p>
      <p>DataB: {dataB}</p>
    </div>
  );
}
