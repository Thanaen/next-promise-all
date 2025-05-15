import { getTranslations, setRequestLocale } from "next-intl/server";

export const revalidate = 7200; // 2 hours in seconds

export default async function WorkingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations();
  setRequestLocale(locale);

  const renderedAt = new Date().toLocaleString();

  return (
    <div>
      {t("HomePage.title")}
      <h1>Working Page</h1>
      <p>Locale: {locale}</p>
      <p>Rendered at: {renderedAt}</p>
    </div>
  );
}
