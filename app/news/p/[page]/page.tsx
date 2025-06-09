import { getNewsList } from '@/app/_libs/microcms';
import NewsList from '@/app/_components/NewsList';
import Pagination from '@/app/_components/Pagination';
import { NEWS_LIST_LIMIT } from '@/app/_constants';

type Props = {
  params: {
    page: string;
  };
};

export default async function Page({ params }: Props) {
  const currentPage = Number(params.page);

  if (isNaN(currentPage) || currentPage < 1) {
    // 不正なページ番号なら404にするなどの処理
    throw new Error('Invalid page number');
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
        basePath="/news"
      />
    </>
  );
}