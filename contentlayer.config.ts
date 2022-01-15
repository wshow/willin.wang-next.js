/* eslint-disable no-underscore-dangle */
import {
  ComputedFields,
  defineDocumentType,
  makeSource
  // eslint-disable-next-line import/no-unresolved
} from 'contentlayer/source-files';

const computedFields: ComputedFields = {
  // readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: 'number',
    // eslint-disable-next-line
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length
  },
  slug: {
    type: 'string',
    resolve: (_) => _._raw.flattenedPath.replace('blog/', '')
  }

  // slug: {
  //   type: 'string',
  //   resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
  // }
};

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/**/*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true }
    // date: { type: 'date', required: true }
  },
  computedFields
}));

const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: 'pages/**/*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true }
    // date: { type: 'date', required: true }
  },
  computedFields
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Page]
  // mdx: {
  //   remarkPlugins: [remarkGfm],
  //   rehypePlugins: [
  //     rehypeSlug,
  //     rehypeCodeTitles,
  //     rehypePrism,
  //     [
  //       rehypeAutolinkHeadings,
  //       {
  //         properties: {
  //           className: ['anchor']
  //         }
  //       }
  //     ]
  //   ]
  // }
});

export default contentLayerConfig;
