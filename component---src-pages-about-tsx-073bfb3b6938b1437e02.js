(window.webpackJsonp=window.webpackJsonp||[]).push([[6,9],{141:function(e,t,a){"use strict";a.r(t);a(166),a(79);var r=a(150),n=a(168),i=a.n(n),o=a(155),l=a(151),m=a(0),c=a(148),s=a(160),d=(a(156),a(149)),p=a(154),g=Object(c.b)("section",{target:"e157wiz10"})("display:flex;"),A=Object(c.b)("h4",{target:"e157wiz11"})("margin:8px 0 2px 0;padding:0;font-size:2rem;a{color:",d.a.darkgrey,";font-weight:700;}a:hover{text-decoration:none;}"),h=Object(c.b)("section",{target:"e157wiz12"})("p{margin:0;color:",d.a.midgrey,";line-height:1.3em;}"),f=function(e){var t=e.author;return m.createElement(g,null,m.createElement("img",{className:""+p.a,src:t.avatar.children[0].fixed.src,alt:t.id}),m.createElement(h,null,m.createElement(A,null,m.createElement(r.Link,{to:"/author/"+o.kebabCase(t.id)+"/"},t.id)),t.bio?m.createElement("p",null,t.bio):m.createElement("p",null,"Read ",m.createElement(r.Link,{to:"/author/"+o.kebabCase(t.id)+"/"},"more posts")," by this author.")))},u=a(161),b=a(163),x=a(159),w=a(169),E=Object(c.b)("footer",{target:"e7emgmi0"})("display:flex;justify-content:space-between;align-items:center;margin:0 auto;padding:3vw 0 6vw 0;max-width:840px;"),y=function(e){return m.createElement(E,null,e.children)},k=Object(c.b)("div",{target:"e1k5zwkz0"})("flex-shrink:0;margin-left:20px;"),v=Object(c.a)("display:block;padding:9px 16px;border:",Object(l.c)("0.2",d.a.midgrey)," 1px solid;color:",d.a.midgrey,";font-size:1.2rem;line-height:1;font-weight:500;border-radius:20px;transition:all ease 0.2s;:hover{border-color:",d.a.blue,";color:",d.a.blue,";text-decoration:none;}"),j=function(e){return m.createElement(k,null,m.createElement(r.Link,{className:""+v,to:"/author/"+o.kebabCase(e.authorId)+"/"},"Read More"))},z=(a(48),a(180)),O=function(){return m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},m.createElement("path",{d:"M13 14.5s2 3 5 3 5.5-2.463 5.5-5.5S21 6.5 18 6.5c-5 0-7 11-12 11C2.962 17.5.5 15.037.5 12S3 6.5 6 6.5s4.5 3.5 4.5 3.5"}))},N=a(152),C=Object(c.b)("article",{target:"em2u7rs0"})(function(e){return"\n  position: relative;\n  flex: 1 1 300px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  margin: 0 20px 40px;\n  padding: 25px;\n  color: #fff;\n  background: "+d.a.darkgrey+' center center;\n  background-size: cover;\n  border-radius: 5px;\n  box-shadow: rgba(39, 44, 49, 0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;\n  background-image: url("'+e.coverImage+'");\n\n  :before {\n    content: "";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: block;\n    background: linear-gradient(135deg, rgba(0,40,60,0.8) 0%,rgba(0,20,40,0.7) 100%);\n    border-radius: 5px;\n    backdrop-filter: blur(2px);\n  }\n'}),Q=Object(c.b)("header",{target:"em2u7rs1"})("position:relative;z-index:50;padding-top:20px;text-align:center;"),S=Object(c.b)("small",{target:"em2u7rs2"})("display:block;font-size:1.3rem;line-height:1.3em;opacity:0.8;"),I=Object(c.b)("h3",{target:"em2u7rs3"})("margin:0;padding:0 20px;color:#fff;font-size:3rem;line-height:1.2em;letter-spacing:1px;a{color:#fff;font-weight:300;text-decoration:none;}a:hover{text-decoration:none;}"),B=Object(c.b)("div",{target:"em2u7rs4"})("position:relative;display:flex;justify-content:center;height:80px;svg{width:40px;fill:transparent;stroke:#fff;stroke-width:0.5px;stroke-opacity:0.65;}"),G=Object(c.b)("div",{target:"em2u7rs5"})("position:relative;z-index:50;flex-grow:1;display:flex;font-size:1.7rem;ul{display:flex;flex-direction:column;margin:0 auto;padding:0;text-align:center;list-style:none;}li{margin:0;padding:0;font-size:1.6rem;line-height:1.25em;font-weight:200;letter-spacing:-0.5px;}li a{display:block;padding:20px 0;border-bottom:rgba(255,255,255,0.3) 1px solid;color:#fff;font-weight:500;vertical-align:top;transition:opacity 0.3s ease;}li:first-of-type a{padding-top:10px;}li a:hover{opacity:1;}"),P=Object(c.b)("footer",{target:"em2u7rs6"})("position:relative;margin:15px 0 3px 0;text-align:center;a{color:#fff;}"),Y=function(e){return m.createElement(r.StaticQuery,{query:"1676377518",render:function(t){var a=t.header;return m.createElement(C,{coverImage:a.childImageSharp.fluid.src},m.createElement(Q,null,m.createElement(S,null,"— ",N.a.title," —"),m.createElement(I,null,m.createElement(r.Link,{to:"/tags/"+o.kebabCase(e.tags[0])+"/"},e.tags[0]))),m.createElement(B,null,m.createElement(O,null)),m.createElement(G,null,m.createElement("ul",null,e.relatedPosts.edges.map(function(e){return m.createElement("li",{key:e.node.frontmatter.title},m.createElement(r.Link,{to:e.node.fields.slug},e.node.frontmatter.title))}))),m.createElement(P,null,m.createElement(r.Link,{to:"/tags/"+o.kebabCase(e.tags[0])+"/"},e.relatedPosts.totalCount>1&&"See all "+e.relatedPosts.totalCount+" posts",1===e.relatedPosts.totalCount&&"1 post",0===e.relatedPosts.totalCount&&"No posts"," →")))},data:z})},F=a(177),D=Object(c.b)("section",{target:"e1vzronv0"})("margin:1.5em 0;padding:6.5vw 7vw 7vw;border:",Object(l.c)("0.02",d.a.whitegrey)," 1px solid;text-align:center;background:",Object(l.c)("0.04",d.a.whitegrey),";border-radius:7px;p{margin-bottom:1em;color:",d.a.midgrey,";font-size:2.2rem;line-height:1.55em;letter-spacing:0.2px;}form{display:flex;justify-content:center;align-items:center;margin:0 auto;max-width:420px;}.form-group{flex-grow:1;}@media (max-width:650px){p{font-size:1.6rem;}}"),R=Object(c.a)("margin:0 0 3px 0;padding:0;color:",d.a.darkgrey,";font-size:3.5rem;line-height:1;font-weight:700;@media (max-width:650px){font-size:2.4rem;}"),U=function(e){return m.createElement(D,null,m.createElement("h3",{className:""+R},"Subscribe to ",e.title),m.createElement("p",null,"Get the latest posts delivered right to your inbox"),m.createElement(F.a,null))},L=a(157),T=a(158);a.d(t,"PostFull",function(){return H}),a.d(t,"NoImage",function(){return q}),a.d(t,"PostFullHeader",function(){return J}),a.d(t,"PostFullTitle",function(){return X}),a.d(t,"query",function(){return K});var M=Object(c.a)(".site-main{background #fff;padding-bottom:4vw;}"),H=Object(c.a)("position:relative;z-index:50;"),q=Object(c.a)(".post-full-content{padding-top:0;}.post-full-content:before,.post-full-content:after{display:none;}"),J=Object(c.b)("header",{target:"ewnyor50"})("margin:0 auto;padding:6vw 3vw 3vw;max-width:1040px;text-align:center;@media (max-width:500px){padding:14vw 3vw 10vw;}"),_=Object(c.b)("section",{target:"ewnyor51"})("display:flex;justify-content:center;align-items:center;color:",d.a.midgrey,";font-size:1.4rem;font-weight:600;text-transform:uppercase;@media (max-width:500px){font-size:1.2rem;line-height:1.3em;}"),W=Object(c.b)("time",{target:"ewnyor52"})("color:",d.a.blue,";"),X=Object(c.b)("h1",{target:"ewnyor53"})("margin:0;color:",Object(l.e)("0.05",d.a.darkgrey),";@media (max-width:500px){font-size:2.9rem;}"),V=Object(c.b)("figure",{target:"ewnyor54"})("margin:0 -10vw -165px;height:800px;background:",d.a.lightgrey," center center;background-size:cover;border-radius:5px;@media (max-width:1170px){margin:0 -4vw -100px;height:600px;border-radius:0;}@media (max-width:800px){height:400px;}@media (max-width:500px){margin-bottom:4vw;height:350px;}"),Z=Object(c.b)("span",{target:"ewnyor55"})("display:inline-block;margin:0 6px 1px;"),$=Object(c.b)("div",{target:"ewnyor56"})("display:flex;flex-wrap:wrap;margin:0 -20px;padding:40px 0 0 0;"),K=(t.default=function(e){var t=e.data.markdownRemark,a="",n="";return t.frontmatter.image&&(a=t.frontmatter.image.childImageSharp.fluid.sizes.split(", ")[1].split("px")[0],n=String(Number(a)/t.frontmatter.image.childImageSharp.fluid.aspectRatio)),m.createElement(T.a,{className:"post-template"},m.createElement(s.Helmet,null,m.createElement("title",null,t.frontmatter.title),m.createElement("meta",{property:"og:site_name",content:N.a.title}),m.createElement("meta",{property:"og:type",content:"article"}),m.createElement("meta",{property:"og:title",content:t.frontmatter.title}),m.createElement("meta",{property:"og:description",content:t.excerpt}),m.createElement("meta",{property:"og:url",content:N.a.siteUrl+e.pathContext.slug}),t.frontmatter.image&&m.createElement("meta",{property:"og:image",content:t.frontmatter.image.childImageSharp.fluid.src}),m.createElement("meta",{property:"article:published_time",content:t.frontmatter.date}),t.frontmatter.tags&&m.createElement("meta",{property:"article:tag",content:t.frontmatter.tags[0]}),m.createElement("meta",{property:"article:publisher",content:N.a.facebook}),m.createElement("meta",{property:"article:author",content:N.a.facebook}),m.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),m.createElement("meta",{name:"twitter:title",content:t.frontmatter.title}),m.createElement("meta",{name:"twitter:description",content:t.excerpt}),m.createElement("meta",{name:"twitter:url",content:N.a.siteUrl+e.pathContext.slug}),t.frontmatter.image&&m.createElement("meta",{name:"twitter:image",content:t.frontmatter.image.childImageSharp.fluid.src}),m.createElement("meta",{name:"twitter:label1",content:"Written by"}),m.createElement("meta",{name:"twitter:data1",content:t.frontmatter.author.id}),m.createElement("meta",{name:"twitter:label2",content:"Filed under"}),t.frontmatter.tags&&m.createElement("meta",{name:"twitter:data2",content:t.frontmatter.tags[0]}),m.createElement("meta",{name:"twitter:site",content:"@"+N.a.twitter.split("https://twitter.com/")[0]}),m.createElement("meta",{name:"twitter:creator",content:"@"+N.a.twitter.split("https://twitter.com/")[0]}),a&&m.createElement("meta",{property:"og:image:width",content:a}),n&&m.createElement("meta",{property:"og:image:height",content:n})),m.createElement(L.a,{className:""+M},m.createElement("header",{className:p.e+" "+p.k},m.createElement("div",{className:""+p.j},m.createElement(b.a,null))),m.createElement("main",{id:"site-main",className:"site-main "+p.g+" "+p.k},m.createElement("div",{className:""+p.j},m.createElement("article",{className:H+" "+(t.frontmatter.image?"":q)},m.createElement(J,null,m.createElement(_,null,m.createElement(W,{dateTime:t.frontmatter.date},t.frontmatter.userDate),t.frontmatter.tags&&t.frontmatter.tags.length>0&&m.createElement(m.Fragment,null,m.createElement(Z,null,"/"),m.createElement(r.Link,{to:"/tags/"+o.kebabCase(t.frontmatter.tags[0])+"/"},t.frontmatter.tags[0]))),m.createElement(X,null,t.frontmatter.title)),t.frontmatter.image&&m.createElement(V,null,m.createElement(i.a,{style:{height:"100%"},fluid:t.frontmatter.image.childImageSharp.fluid})),m.createElement(w.b,{htmlAst:t.htmlAst}),N.a.showSubscribe&&m.createElement(U,{title:N.a.title}),m.createElement(y,null,m.createElement(f,{author:t.frontmatter.author}),m.createElement(j,{authorId:t.frontmatter.author.id}))))),m.createElement("aside",{className:"read-next "+p.k},m.createElement("div",{className:""+p.j},m.createElement($,null,e.data.relatedPosts&&m.createElement(Y,{tags:t.frontmatter.tags,relatedPosts:e.data.relatedPosts}),e.pageContext.prev&&m.createElement(x.a,{post:e.pageContext.prev}),e.pageContext.next&&m.createElement(x.a,{post:e.pageContext.next})))),m.createElement(u.a,null)))},"4204474640")},144:function(e,t,a){"use strict";a.r(t);var r=a(158),n=a(157),i=a(163),o=a(154),l=a(0),m=a(148),c=a(141),s=a(169),d=a(161),p=a(160),g=a.n(p),A=Object(m.a)(".site-main{background #fff;padding-bottom:4vw;}");t.default=function(){return l.createElement(r.a,null,l.createElement(g.a,null,l.createElement("title",null,"About")),l.createElement(n.a,{className:""+A},l.createElement("header",{className:o.e+" "+o.k},l.createElement("div",{className:""+o.j},l.createElement(i.a,null))),l.createElement("main",{id:"site-main",className:"site-main "+o.g+" "+o.k},l.createElement("article",{className:c.PostFull+" post page "+c.NoImage},l.createElement(c.PostFullHeader,null,l.createElement(c.PostFullTitle,null,"About")),l.createElement(s.a,{className:"post-full-content"},l.createElement("div",{className:"post-content"},l.createElement("p",null,"Ghost is professional publishing platform designed for modern journalism. This is a demo site of a basic Ghost install to give you a general sense of what a new Ghost site looks like when set up for the first time."),l.createElement("blockquote",null,l.createElement("p",null,"If you'd like to set up a site like this for yourself, head over to"," ",l.createElement("a",{href:"https://ghost.org"},"Ghost.org")," and start a free 14 day trial to give Ghost a try!")),l.createElement("p",null,"If you're a developer: Ghost is a completely open source (MIT) Node.js application built on a JSON API with an Ember.js admin client. It works with MySQL and SQLite, and is publicly available ",l.createElement("a",{href:"https://github.com/TryGhost/ghost"},"on Github"),"."),l.createElement("p",null,"If you need help with using Ghost, you'll find a ton of useful articles on"," ",l.createElement("a",{href:"https://help.ghost.org"},"our knowledgebase"),", as well as extensive"," ",l.createElement("a",{href:"https://docs.ghost.org"},"developer documentation"),"."))))),l.createElement(d.a,null)))}},169:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var r=a(167),n=a.n(r),i=a(151),o=a(0),l=a(148),m=a(185),c=a.n(m),s=a(149),d=Object(l.b)("section",{target:"e14ijd7g0"})("position:relative;margin:0 auto;padding:70px 100px 0;min-height:230px;font-family:Georgia,serif;font-size:2.2rem;line-height:1.6em;background:#fff;@media (max-width:1170px){padding:5vw 7vw 0;}@media (max-width:800px){font-size:1.9rem;}:before{content:'';position:absolute;top:15px;left:-5px;z-index:-1;display:block;width:20px;height:200px;background:rgba(39,44,49,0.15);filter:blur(5px);transform:rotate(-5deg);}:after{content:'';position:absolute;top:15px;right:-5px;z-index:-1;display:block;width:20px;height:200px;background:rgba(39,44,49,0.15);filter:blur(5px);transform:rotate(5deg);}h1,h2,h3,h4,h5,h6,p,ul,ol,dl,pre,blockquote,.post-full-comments,.footnotes{min-width:100%;}li{word-break:break-word;}li p{margin:0;}a{color:#000;word-break:break-word;box-shadow:",s.a.blue," 0 -1px 0 inset;}a:hover{color:",s.a.blue,";text-decoration:none;}strong,em{color:",Object(i.a)("0.05",s.a.darkgrey),";}small{display:inline-block;line-height:1.6em;}li:first-child{margin-top:0;}img,video{display:block;margin:1.5em auto;max-width:1040px;height:auto;}@media (max-width:1040px){img,video{width:100%;}}img[src$='#full']{max-width:none;width:100vw;}img + br + small{display:block;margin-top:-3em;margin-bottom:1.5em;text-align:center;}iframe{margin:0 auto !important;}blockquote{margin:0 0 1.5em;padding:0 1.5em;border-left:#3eb0ef 3px solid;}blockquote p{margin:0 0 1em 0;color:inherit;font-size:inherit;line-height:inherit;font-style:italic;}blockquote p:last-child{margin-bottom:0;}code{padding:0 5px 2px;font-size:0.8em;line-height:1em;font-weight:400 !important;background:",s.a.whitegrey,";border-radius:3px;}p code{word-break:break-all;}pre{overflow-x:auto;margin:1.5em 0 3em;padding:20px;max-width:100%;border:",Object(i.a)("0.01",s.a.darkgrey)," 1px solid;color:",s.a.whitegrey,";font-size:1.4rem;line-height:1.5em;background:",Object(i.a)("0.03",s.a.darkgrey),";border-radius:5px;}pre code{padding:0;font-size:inherit;line-height:inherit;background:transparent;}pre code:not(span){color:inherit;}.gatsby-resp-iframe-wrapper{margin:1.5em 0 3em;}hr{margin:4vw 0;}hr:after{content:'';position:absolute;top:-15px;left:50%;display:block;margin-left:-10px;width:1px;height:30px;background:",Object(i.c)("0.1",s.a.lightgrey),";box-shadow:#fff 0 0 0 5px;transform:rotate(45deg);}h1,h2,h3,h4,h5,h6{color:",Object(i.e)("0.05",s.a.darkgrey),";font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;}h1{margin:0.5em 0 0.2em 0;font-size:4.6rem;font-weight:700;}@media (max-width:500px){h1{font-size:2.8rem;}}h2{margin:0.5em 0 0.2em 0;font-size:3.6rem;font-weight:700;}@media (max-width:500px){h2{font-size:2.6rem;}}h3{margin:0.5em 0 0.2em 0;font-size:2.8rem;font-weight:700;}@media (max-width:500px){h3{font-size:2.2rem;}}h4{margin:0.5em 0 0.2em 0;font-size:2.8rem;font-weight:700;}@media (max-width:500px){h4{font-size:2.2rem;}}h5{display:block;margin:0.5em 0;padding:1em 0 1.5em;border:0;color:",s.a.blue,";font-family:Georgia,serif;font-size:3.2rem;line-height:1.35em;text-align:center;}@media (min-width:1180px){h5{max-width:1060px;}}@media (max-width:500px){h5{padding:0 0 0.5em;font-size:2.2rem;}}h6{margin:0.5em 0 0.2em 0;font-size:2.3rem;font-weight:700;}@media (max-width:500px){h6{font-size:2rem;}}table{display:inline-block;overflow-x:auto;margin:0.5em 0 2.5em;max-width:100%;width:auto;border-spacing:0;border-collapse:collapse;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;font-size:1.6rem;white-space:nowrap;vertical-align:top;}table{-webkit-overflow-scrolling:touch;background:radial-gradient(ellipse at left,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0) 75%) 0 center,radial-gradient(ellipse at right,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0) 75%) 100% center;background-attachment:scroll,scroll;background-size:10px 100%,10px 100%;background-repeat:no-repeat;}table td:first-child{background-image:linear-gradient( to right,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100% );background-size:20px 100%;background-repeat:no-repeat;}table td:last-child{background-image:linear-gradient( to left,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100% );background-position:100% 0;background-size:20px 100%;background-repeat:no-repeat;}table th{color:",s.a.darkgrey,";font-size:1.2rem;font-weight:700;letter-spacing:0.2px;text-align:left;text-transform:uppercase;background-color:",Object(i.c)("0.04",s.a.whitegrey),";}table th,table td{padding:6px 12px;border:",Object(i.f)("0.05",Object(i.a)("0.01",s.a.whitegrey))," 1px solid;}@media (max-width:500px){padding:0;:before{display:none;}:after{display:none;}}"),p=new c.a({createElement:o.createElement,components:{}}).Compiler,g=function(e){var t=e.ast,a=n()(e,["ast"]);return t.properties=a,p(t)};t.b=function(e){var t=e.htmlAst;return o.createElement(d,{className:"post-full-content"},o.createElement(g,{className:"post-content",ast:t}))}},180:function(e){e.exports={data:{header:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAcOiQL//xAAUEAEAAAAAAAAAAAAAAAAAAAAQ/9oACAEBAAEFAn//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAQ/9oACAEBAAY/An//xAAXEAEAAwAAAAAAAAAAAAAAAAABABAR/9oACAEBAAE/ISJlf//aAAwDAQACAAMAAAAQ/A//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAWEAEBAQAAAAAAAAAAAAAAAAABEBH/2gAIAQEAAT8QGt3/2Q==",aspectRatio:3.003003003003003,src:"/static/f55e924eff608d71da37e57b398c587d/f4589/blog-cover.jpg",srcSet:"/static/f55e924eff608d71da37e57b398c587d/5911c/blog-cover.jpg 500w,\n/static/f55e924eff608d71da37e57b398c587d/a2da7/blog-cover.jpg 1000w,\n/static/f55e924eff608d71da37e57b398c587d/f4589/blog-cover.jpg 2000w",sizes:"(max-width: 2000px) 100vw, 2000px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-about-tsx-073bfb3b6938b1437e02.js.map