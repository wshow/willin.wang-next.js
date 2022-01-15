import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { InferGetStaticPropsType, GetStaticPropsContext } from 'next';

export default function Blog({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  const { t } = useTranslation('common');
}
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const posts = allBlogs
    .map((post) =>
      pick(post, ['slug', 'title', 'summary', 'publishedAt', 'locale'])
    )
    .filter((post) => post.locale === locale)
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      posts
    }
  };
}
