import { loadDataA, loadDataB } from "../data";

export const revalidate = 7200; // 2 hours in seconds

export default async function BrokenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const [{ locale }, dataA, dataB] = await Promise.all([
    params,
    loadDataA(),
    loadDataB(),
  ]);
  console.log("Locale:", locale);

  return (
    <div>
      <h1>Broken Page</h1>
      <p>Locale: {locale}</p>
      <p>DataA: {dataA}</p>
      <p>DataB: {dataB}</p>
    </div>
  );
}
