// eslint-disable-next-line import/no-extraneous-dependencies
import { allPosts } from '.contentlayer/data';

export const getPosts = (locale: string) => {
  allPosts.filter((post) => post.locale === locale);
  // .sort(
  //   (a, b) =>
  //     Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  // );
};
