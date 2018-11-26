// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-tsx": preferDefault(require("/Users/alonsoindacochea/Sites/blog/src/templates/post.tsx")),
  "component---src-templates-tags-tsx": preferDefault(require("/Users/alonsoindacochea/Sites/blog/src/templates/tags.tsx")),
  "component---src-templates-author-tsx": preferDefault(require("/Users/alonsoindacochea/Sites/blog/src/templates/author.tsx")),
  "component---src-pages-404-tsx": preferDefault(require("/Users/alonsoindacochea/Sites/blog/src/pages/404.tsx")),
  "component---src-pages-about-tsx": preferDefault(require("/Users/alonsoindacochea/Sites/blog/src/pages/about.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/alonsoindacochea/Sites/blog/src/pages/index.tsx"))
}

