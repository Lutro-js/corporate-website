export const dynamic = "force-dynamic";

import { getNewsList } from '@/app/_libs/microcms';
import NewsList from '@/app/_components/NewsList';
import Pagination from '@/app/_components/Pagination';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    page: string;
  };
};

export async function generateStaticParams() {
  const totalPages = 5; // ←本来は totalCount を使って算出
  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

export default async function Page({ params }: Props) {
  const currentPage = Number(params.page);

  if (isNaN(currentPage) || currentPage < 1) {
    notFound();
  }

  const offset = (currentPage - 1) * NEWS_LIST_LIMIT;

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset,
  });

  return (
    <>
      <NewsList news={news} />
      <Pagination
        totalCount={totalCount}
        current={currentPage}
        basePath="/news/p"
      />
    </>
  );
}