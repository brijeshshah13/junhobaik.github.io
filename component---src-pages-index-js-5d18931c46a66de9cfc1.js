(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{181:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c}),a.d(t,"pageQuery",function(){return m});var n=a(6),r=a.n(n),o=a(0),i=a.n(o),l=a(194),s=a(210),c=(a(182),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=this.props.location;return i.a.createElement(l.a,{location:t},i.a.createElement(s.a,{data:e}))},t}(o.Component)),m="755028477"},186:function(e,t,a){var n;e.exports=(n=a(191))&&n.default||n},187:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),o=a(11),i=a.n(o),l=a(54),s=a.n(l);a.d(t,"a",function(){return s.a});a(186);var c=r.a.createContext({});function m(e){var t=e.staticQueryData,a=e.data,n=e.query,o=e.render,i=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,n=e.render,o=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(m,{data:t,query:a,render:n||o,staticQueryData:e})})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},190:function(e,t,a){var n={title:"HUNDRED",author:"Junho Baik",description:"Junho Baik's blog",siteUrl:"https://junhobaik.github.io",titleLogo:function(){return a(193)},titleLogoShow:!0,bio:"Jr. FRONT END DEVELOPER",bioShow:!0,googleAnalyticsTrackingId:"UA-103592668-4",disqusShortname:"dev-hundred-blog"};e.exports=n},191:function(e,t,a){"use strict";a.r(t);a(16);var n=a(0),r=a.n(n),o=a(11),i=a.n(o),l=a(79),s=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},192:function(e){e.exports={data:{site:{siteMetadata:{title:"HUNDRED"}}}}},193:function(e,t,a){e.exports=a.p+"static/profile-84a4704395a2596be588c30aae784e41.png"},194:function(e,t,a){"use strict";a(16);var n=a(192),r=a(0),o=a.n(r),i=a(11),l=a.n(i),s=a(195),c=a.n(s),m=a(187),d=a(188),u=a(189),p=(a(173),a(6)),g=a.n(p),E=function(e){function t(){return e.apply(this,arguments)||this}return g()(t,e),t.prototype.render=function(){return o.a.createElement("footer",{id:"footer"},o.a.createElement("div",{className:"copyright"},o.a.createElement("span",null,"© ",o.a.createElement("a",{href:"mailto:junhobaik@gmail.com"},"Junho Baik")," 2018, All rights reserved. Powered by "," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby"))),o.a.createElement("div",{className:"submenu"}))},t}(r.Component),h=a(190),f=a.n(h),y=(a(33),a(12),a(197),a(77),a(8),a(198)),v=new(a.n(y).a)({baseFontSize:"16px",baseLineHeight:1.666,headerFontFamily:["Nanum Gothic"],bodyFontFamily:["Noto Sans KR"]}),w=[{name:"Nanum Gothic",bold:[400,700]},{name:"Noto Sans KR"}].map(function(e){return e.bold?e.name.replace(/ /gi,"+")+":"+e.bold.toString():""+e.name.replace(/ /gi,"+")}).join("|").toString(),b=(v.rhythm,v.scale,function(e){var t=e.children,a=(e.data,e.location);return o.a.createElement(m.b,{query:"755544856",render:function(e){var n;n=a?a.href:f.a.siteUrl;var r=function(e,t){var a={};return a=e?{display:"inline-block"}:{display:"none"},t||(a=Object.assign({},a,{width:"1.5rem",height:"1.5rem",marginRight:"0.1rem"})),a}(f.a.titleLogoShow,f.a.bioShow),i=f.a.bioShow?{}:{display:"none"};return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:f.a.description},{name:"og:type",content:"website"},{name:"og:title",content:f.a.title},{name:"og:description",content:f.a.description},{name:"og:image",content:f.a.titleLogo()},{name:"og:url",content:n}]},o.a.createElement("html",{lang:"ko"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family="+w,rel:"stylesheet"}),o.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id="+f.a.googleAnalyticsTrackingId}),o.a.createElement("script",null,"\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n                gtag('config', '"+f.a.googleAnalyticsTrackingId+"');\n              ")),o.a.createElement("div",{id:"wrap"},o.a.createElement("header",{id:"header"},o.a.createElement("div",{className:"title"},o.a.createElement("div",{className:"title-wrap"},o.a.createElement(m.a,{to:"/"},o.a.createElement("div",{className:"logo-img",style:r},o.a.createElement("img",{src:f.a.titleLogo(),alt:"logo"})),o.a.createElement("div",null,o.a.createElement("h1",null,f.a.title),o.a.createElement("p",{className:"bio",style:i},f.a.bio))))),o.a.createElement("div",{className:"menu"},o.a.createElement("div",{className:"home"},o.a.createElement(m.a,{to:"/"},o.a.createElement(d.a,{icon:u.c,fixedWidth:!0,transform:"down-1"}),o.a.createElement("span",null,"Home"))),o.a.createElement("div",{className:"tags"},o.a.createElement(m.a,{to:"/tags"},o.a.createElement(d.a,{icon:u.f,fixedWidth:!0,transform:"down-1"}),o.a.createElement("span",null,"Tags"))),o.a.createElement("div",{className:"search"},o.a.createElement(m.a,{to:"/search"},o.a.createElement(d.a,{icon:u.d,fixedWidth:!0,transform:"down-1"}),o.a.createElement("span",null,"Search"))))),o.a.createElement("article",{id:"article"},t)),o.a.createElement(E,null))},data:n})});b.propTypes={children:l.a.node.isRequired,location:l.a.object.isRequired};t.a=b},210:function(e,t,a){"use strict";var n=a(6),r=a.n(n),o=a(0),i=a.n(o),l=a(188),s=a(189),c=(a(174),a(11)),m=a.n(c),d=a(54),u=a.n(d),p=a(216),g=a.n(p),E=a(199),h=a.n(E),f=a(205),y=(a(175),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.post,t=e.fields.slug,a=g()(e,"frontmatter.title")||t,n=e.excerpt,r=e.frontmatter.date,o=e.frontmatter.tags.map(function(e,t){return"Empty Tag"!==e?i.a.createElement(u.a,{to:"/tags/"+h.a.kebabCase(e),className:"tag",key:"tag-"+e},"#",i.a.createElement("span",{className:"tag-name"},e)):null});return i.a.createElement("div",{className:"post-link",key:t,style:this.props.showCnt-1>=this.props.index?{display:"inline-block"}:{display:"none"}},i.a.createElement(u.a,{to:t},i.a.createElement("h2",{className:"title hover"},a)),i.a.createElement("div",{className:"sub"},i.a.createElement("div",{className:"date"},i.a.createElement(l.a,{icon:f.a}),i.a.createElement("span",null,r)),i.a.createElement("div",{className:"tags-list"},o)),i.a.createElement(u.a,{to:t},i.a.createElement("span",{className:"excerpt"},n)))},t}(o.Component));y.propTypes={post:m.a.object.isRequired,title:m.a.string};var v=y,w=function(e){function t(t){var a;return(a=e.call(this,t)||this).onScroll=function(){a.state.currentPostCnt<a.props.data.length&&window.scrollY+window.innerHeight>=a.state.loadElPoint&&!a.state.isLoading&&(a.setState({isLoading:!0}),setTimeout(function(){a.setState({currentPostCnt:a.state.currentPostCnt+a.state.loadPostCnt,isLoading:!1}),a.setLoadElPoint()},200))},a.setLoadElPoint=function(){a.setState({loadElPoint:document.querySelector(".load-point").offsetTop})},a.state={loadPostCnt:7,currentPostCnt:7,isLoading:!1,loadElPoint:0},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setLoadElPoint(),window.addEventListener("scroll",this.onScroll,!1)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.onScroll,!1)},a.render=function(){var e=this,t=this.props,a=t.data,n=t.title,r=a.filter(function(e){return!!e.node.frontmatter.date}).map(function(t,a){return i.a.createElement(v,{key:t.node.fields.slug,post:t.node,index:a,showCnt:e.state.currentPostCnt})});return i.a.createElement("div",{id:"PostList"},n?i.a.createElement("h1",{className:"list-title"},n):null,i.a.createElement("div",{className:"list"},r),i.a.createElement("div",{className:"load"},i.a.createElement("div",{className:"loading"},i.a.createElement("div",{className:"spinner",style:this.state.isLoading?{display:"inline-block"}:{display:"none"}},i.a.createElement(l.a,{className:"blink",icon:s.e,size:"2x"}))),i.a.createElement("div",{className:"load-point"})))},t}(o.Component);t.a=w}}]);