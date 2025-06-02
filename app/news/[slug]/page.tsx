import { notFound } from "next/navigation";
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return [
    { slug: "sample-1" },
    { slug: "sample-2" },
  ];
}

type Props = {
  params: { slug: string };
  searchParams?: { dk?: string };
};

export const revalidate = 0;

export default async function Page(props: Props) {
  const { params, searchParams } = props;

  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams?.dk,
  }).catch(notFound);

  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}