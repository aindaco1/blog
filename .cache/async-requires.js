// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-post-tsx": () => import("/Users/alonsoindacochea/Sites/blog/src/templates/post.tsx" /* webpackChunkName: "component---src-templates-post-tsx" */),
  "component---src-templates-tags-tsx": () => import("/Users/alonsoindacochea/Sites/blog/src/templates/tags.tsx" /* webpackChunkName: "component---src-templates-tags-tsx" */),
  "component---src-templates-author-tsx": () => import("/Users/alonsoindacochea/Sites/blog/src/templates/author.tsx" /* webpackChunkName: "component---src-templates-author-tsx" */),
  "component---src-pages-404-tsx": () => import("/Users/alonsoindacochea/Sites/blog/src/pages/404.tsx" /* webpackChunkName: "component---src-pages-404-tsx" */),
  "component---src-pages-about-tsx": () => import("/Users/alonsoindacochea/Sites/blog/src/pages/about.tsx" /* webpackChunkName: "component---src-pages-about-tsx" */),
  "component---src-pages-index-tsx": () => import("/Users/alonsoindacochea/Sites/blog/src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */)
}

exports.data = () => import("/Users/alonsoindacochea/Sites/blog/.cache/data.json")

