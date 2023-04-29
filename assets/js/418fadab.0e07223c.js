"use strict";(self.webpackChunkqcefviewdoc=self.webpackChunkqcefviewdoc||[]).push([[416],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return _}});var n=a(7294);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,d=function(e,t){if(null==e)return{};var a,n,d={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var r=n.createContext({}),c=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(r.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,d=e.mdxType,l=e.originalType,r=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(a),_=d,f=p["".concat(r,".").concat(_)]||p[_]||m[_]||l;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function _(e,t){var a=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:d,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8634:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return r},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var n=a(7462),d=a(3366),l=(a(7294),a(3905)),i=["components"],o={title:"QCefDownloadItem"},r="class `QCefDownloadItem`",c={unversionedId:"reference/QCefDownloadItem",id:"reference/QCefDownloadItem",title:"QCefDownloadItem",description:"classqcefdownloaditem}",source:"@site/docs/reference/QCefDownloadItem.md",sourceDirName:"reference",slug:"/reference/QCefDownloadItem",permalink:"/QCefView/docs/reference/QCefDownloadItem",editUrl:"https://github.com/CefView/QCefViewDoc/tree/master/docs/reference/QCefDownloadItem.md",tags:[],version:"current",frontMatter:{title:"QCefDownloadItem"},sidebar:"default",previous:{title:"QCefContext",permalink:"/QCefView/docs/reference/QCefContext"},next:{title:"QCefEvent",permalink:"/QCefView/docs/reference/QCefEvent"}},s=[{value:"Summary",id:"summary",children:[],level:2},{value:"Members",id:"members",children:[{value:"<code>public  </code>~QCefDownloadItem<code>()</code>",id:"class_q_cef_download_item_1a913a2654dcd05ef8facefc515d831124",children:[],level:3},{value:"<code>public void </code>start<code>(const QString &amp; path, bool useDefaultDialog) const</code>",id:"class_q_cef_download_item_1a315592aa53a2bf7bc8aea717195f5b43",children:[],level:3},{value:"<code>public void </code>pause<code>() const</code>",id:"class_q_cef_download_item_1aaa31f59599e9311f0aee99a0a13e2568",children:[],level:3},{value:"<code>public void </code>resume<code>() const</code>",id:"class_q_cef_download_item_1aa2afc687e69c7c78f6c49e9a41a34823",children:[],level:3},{value:"<code>public void </code>cancel<code>() const</code>",id:"class_q_cef_download_item_1a723b2081749a447049efd04e768d9e57",children:[],level:3},{value:"<code>public bool </code>isStarted<code>() const</code>",id:"class_q_cef_download_item_1a6febee1fe8a5f7d15e888a4352d50526",children:[{value:"Returns",id:"returns",children:[],level:4}],level:3},{value:"<code>public bool </code>isInProgress<code>() const</code>",id:"class_q_cef_download_item_1a22455702c989d4dcc08fb1d13659739d",children:[{value:"Returns",id:"returns-1",children:[],level:4}],level:3},{value:"<code>public bool </code>isComplete<code>() const</code>",id:"class_q_cef_download_item_1a67c86edf9e9cb742050e2521b55c86df",children:[{value:"Returns",id:"returns-2",children:[],level:4}],level:3},{value:"<code>public bool </code>isCanceled<code>() const</code>",id:"class_q_cef_download_item_1ada41b0480a3e97d788086ea8c420a22c",children:[{value:"Returns",id:"returns-3",children:[],level:4}],level:3},{value:"<code>public qint64 </code>currentSpeed<code>() const</code>",id:"class_q_cef_download_item_1a5c9648906b02ce59aa6d82f03e468c1d",children:[{value:"Returns",id:"returns-4",children:[],level:4}],level:3},{value:"<code>public int </code>percentComplete<code>() const</code>",id:"class_q_cef_download_item_1a18fafe4f375aa60e43ec7c5d855ab91e",children:[{value:"Returns",id:"returns-5",children:[],level:4}],level:3},{value:"<code>public qint64 </code>totalBytes<code>() const</code>",id:"class_q_cef_download_item_1ab1ff7414475451351e4d4ab50f723bee",children:[{value:"Returns",id:"returns-6",children:[],level:4}],level:3},{value:"<code>public qint64 </code>receivedBytes<code>() const</code>",id:"class_q_cef_download_item_1a5d76f04bb41c5e4edad6d680b01fe63f",children:[{value:"Returns",id:"returns-7",children:[],level:4}],level:3},{value:"<code>public QDateTime </code>startTime<code>() const</code>",id:"class_q_cef_download_item_1afe0d048a282cb605da910de1c5d82242",children:[{value:"Returns",id:"returns-8",children:[],level:4}],level:3},{value:"<code>public QDateTime </code>endTime<code>() const</code>",id:"class_q_cef_download_item_1a61b2bd3cdc2f35d2424ded4e8b3801fd",children:[{value:"Returns",id:"returns-9",children:[],level:4}],level:3},{value:"<code>public QString </code>fullPath<code>() const</code>",id:"class_q_cef_download_item_1a40227300f52cd34a67281eacf95bcc28",children:[{value:"Returns",id:"returns-10",children:[],level:4}],level:3},{value:"<code>public quint32 </code>id<code>() const</code>",id:"class_q_cef_download_item_1aff911ad0aa21867cdfe56457293f4914",children:[{value:"Returns",id:"returns-11",children:[],level:4}],level:3},{value:"<code>public QString </code>url<code>() const</code>",id:"class_q_cef_download_item_1a253cf33b582e3994b65d5611ef277bbe",children:[{value:"Returns",id:"returns-12",children:[],level:4}],level:3},{value:"<code>public QString </code>originalUrl<code>() const</code>",id:"class_q_cef_download_item_1a9f9bcb65952b50b4f24c4d55eff9b64e",children:[{value:"Returns",id:"returns-13",children:[],level:4}],level:3},{value:"<code>public QString </code>suggestedFileName<code>() const</code>",id:"class_q_cef_download_item_1ac0dd9f8bea7ca594f04935d81cfb72a4",children:[{value:"Returns",id:"returns-14",children:[],level:4}],level:3},{value:"<code>public QString </code>contentDisposition<code>() const</code>",id:"class_q_cef_download_item_1af97dad25e439c8b997d6689fe1c91bf8",children:[{value:"Returns",id:"returns-15",children:[],level:4}],level:3},{value:"<code>public QString </code>mimeType<code>() const</code>",id:"class_q_cef_download_item_1afb8ec36477b64a222b0610c8518f8e31",children:[{value:"Returns",id:"returns-16",children:[],level:4}],level:3},{value:"<code>private QScopedPointer&lt; QCefDownloadItemPrivate &gt; </code>d_ptr",id:"class_q_cef_download_item_1a631e89a5388360954e21644f91371a15",children:[],level:3},{value:"<code>private  </code>QCefDownloadItem<code>(</code>QCefDownloadItem<code> &amp;&amp;) = delete</code>",id:"class_q_cef_download_item_1a2721c6c268fbe3b92ec7e3f5524b6d1a",children:[],level:3},{value:"<code>private </code>QCefDownloadItem<code>&amp;</code>operator=<code>(</code>QCefDownloadItem<code> &amp;&amp;) = delete</code>",id:"class_q_cef_download_item_1a0486e85d7e5ccf2c182e504129c9e068",children:[],level:3},{value:"<code>private  </code>QCefDownloadItem<code>()</code>",id:"class_q_cef_download_item_1a6db795a0e61816d85a4125aa67d98b76",children:[],level:3}],level:2}],m={toc:s};function p(e){var t=e.components,a=(0,d.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"class_q_cef_download_item"},"class ",(0,l.kt)("inlineCode",{parentName:"h1"},"QCefDownloadItem")),(0,l.kt)("p",null,"Represents the download item"),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Members"),(0,l.kt)("th",{parentName:"tr",align:null},"Descriptions"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public  "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1a913a2654dcd05ef8facefc515d831124"},(0,l.kt)("inlineCode",{parentName:"a"},"~QCefDownloadItem")),(0,l.kt)("inlineCode",{parentName:"td"},"()")),(0,l.kt)("td",{parentName:"tr",align:null},"Destructs the download item instance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public void "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1a315592aa53a2bf7bc8aea717195f5b43"},(0,l.kt)("inlineCode",{parentName:"a"},"start")),(0,l.kt)("inlineCode",{parentName:"td"},"(const QString & path, bool useDefaultDialog) const")),(0,l.kt)("td",{parentName:"tr",align:null},"Starts the download")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public void "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1aaa31f59599e9311f0aee99a0a13e2568"},(0,l.kt)("inlineCode",{parentName:"a"},"pause")),(0,l.kt)("inlineCode",{parentName:"td"},"() const")),(0,l.kt)("td",{parentName:"tr",align:null},"Pauses the download")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public void "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1aa2afc687e69c7c78f6c49e9a41a34823"},(0,l.kt)("inlineCode",{parentName:"a"},"resume")),(0,l.kt)("inlineCode",{parentName:"td"},"() const")),(0,l.kt)("td",{parentName:"tr",align:null},"Resume the download")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public void "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1a723b2081749a447049efd04e768d9e57"},(0,l.kt)("inlineCode",{parentName:"a"},"cancel")),(0,l.kt)("inlineCode",{parentName:"td"},"() const")),(0,l.kt)("td",{parentName:"tr",align:null},"Cancels the download")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public bool "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1a6febee1fe8a5f7d15e888a4352d50526"},(0,l.kt)("inlineCode",{parentName:"a"},"isStarted")),(0,l.kt)("inlineCode",{parentName:"td"},"() const")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets whether the download is started")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public bool "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1a22455702c989d4dcc08fb1d13659739d"},(0,l.kt)("inlineCode",{parentName:"a"},"isInProgress")),(0,l.kt)("inlineCode",{parentName:"td"},"() const")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets whether the download is in progress")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public bool "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1a67c86edf9e9cb742050e2521b55c86df"},(0,l.kt)("inlineCode",{parentName:"a"},"isComplete")),(0,l.kt)("inlineCode",{parentName:"td"},"() const")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets whether the download is complete")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public bool "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1ada41b0480a3e97d788086ea8c420a22c"},(0,l.kt)("inlineCode",{parentName:"a"},"isCanceled")),(0,l.kt)("inlineCode",{parentName:"td"},"() const")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets whether the download has been canceled or interrupted")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public qint64 "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1a5c9648906b02ce59aa6d82f03e468c1d"},(0,l.kt)("inlineCode",{parentName:"a"},"currentSpeed")),(0,l.kt)("inlineCode",{parentName:"td"},"() const")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets current download speed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public int "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1a18fafe4f375aa60e43ec7c5d855ab91e"},(0,l.kt)("inlineCode",{parentName:"a"},"percentComplete")),(0,l.kt)("inlineCode",{parentName:"td"},"() const")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the completion percentage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public qint64 "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1ab1ff7414475451351e4d4ab50f723bee"},(0,l.kt)("inlineCode",{parentName:"a"},"totalBytes")),(0,l.kt)("inlineCode",{parentName:"td"},"() const")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets total number of bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public qint64 "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1a5d76f04bb41c5e4edad6d680b01fe63f"},(0,l.kt)("inlineCode",{parentName:"a"},"receivedBytes")),(0,l.kt)("inlineCode",{parentName:"td"},"() const")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets number of received bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public QDateTime "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1afe0d048a282cb605da910de1c5d82242"},(0,l.kt)("inlineCode",{parentName:"a"},"startTime")),(0,l.kt)("inlineCode",{parentName:"td"},"() const")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the time that the download started")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public QDateTime "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1a61b2bd3cdc2f35d2424ded4e8b3801fd"},(0,l.kt)("inlineCode",{parentName:"a"},"endTime")),(0,l.kt)("inlineCode",{parentName:"td"},"() const")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the time that the download ended")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public QString "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1a40227300f52cd34a67281eacf95bcc28"},(0,l.kt)("inlineCode",{parentName:"a"},"fullPath")),(0,l.kt)("inlineCode",{parentName:"td"},"() const")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the full path to the downloaded or downloading file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public quint32 "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1aff911ad0aa21867cdfe56457293f4914"},(0,l.kt)("inlineCode",{parentName:"a"},"id")),(0,l.kt)("inlineCode",{parentName:"td"},"() const")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the unique identifier for this download")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public QString "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1a253cf33b582e3994b65d5611ef277bbe"},(0,l.kt)("inlineCode",{parentName:"a"},"url")),(0,l.kt)("inlineCode",{parentName:"td"},"() const")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the URL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public QString "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1a9f9bcb65952b50b4f24c4d55eff9b64e"},(0,l.kt)("inlineCode",{parentName:"a"},"originalUrl")),(0,l.kt)("inlineCode",{parentName:"td"},"() const")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the original URL before any redirections")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public QString "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1ac0dd9f8bea7ca594f04935d81cfb72a4"},(0,l.kt)("inlineCode",{parentName:"a"},"suggestedFileName")),(0,l.kt)("inlineCode",{parentName:"td"},"() const")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the suggested file name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public QString "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1af97dad25e439c8b997d6689fe1c91bf8"},(0,l.kt)("inlineCode",{parentName:"a"},"contentDisposition")),(0,l.kt)("inlineCode",{parentName:"td"},"() const")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the content disposition")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public QString "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1afb8ec36477b64a222b0610c8518f8e31"},(0,l.kt)("inlineCode",{parentName:"a"},"mimeType")),(0,l.kt)("inlineCode",{parentName:"td"},"() const")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the mime type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"private QScopedPointer< QCefDownloadItemPrivate > "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1a631e89a5388360954e21644f91371a15"},(0,l.kt)("inlineCode",{parentName:"a"},"d_ptr"))),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"private  "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1a2721c6c268fbe3b92ec7e3f5524b6d1a"},(0,l.kt)("inlineCode",{parentName:"a"},"QCefDownloadItem")),(0,l.kt)("inlineCode",{parentName:"td"},"("),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item"},(0,l.kt)("inlineCode",{parentName:"a"},"QCefDownloadItem")),(0,l.kt)("inlineCode",{parentName:"td"}," &&) = delete")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"private "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item"},(0,l.kt)("inlineCode",{parentName:"a"},"QCefDownloadItem")),(0,l.kt)("inlineCode",{parentName:"td"},"&"),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1a0486e85d7e5ccf2c182e504129c9e068"},(0,l.kt)("inlineCode",{parentName:"a"},"operator=")),(0,l.kt)("inlineCode",{parentName:"td"},"("),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item"},(0,l.kt)("inlineCode",{parentName:"a"},"QCefDownloadItem")),(0,l.kt)("inlineCode",{parentName:"td"}," &&) = delete")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"private  "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_download_item_1a6db795a0e61816d85a4125aa67d98b76"},(0,l.kt)("inlineCode",{parentName:"a"},"QCefDownloadItem")),(0,l.kt)("inlineCode",{parentName:"td"},"()")),(0,l.kt)("td",{parentName:"tr",align:null},"Constructs a download item instance")))),(0,l.kt)("h2",{id:"members"},"Members"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1a913a2654dcd05ef8facefc515d831124"},(0,l.kt)("inlineCode",{parentName:"h3"},"public  "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1a913a2654dcd05ef8facefc515d831124"},(0,l.kt)("inlineCode",{parentName:"a"},"~QCefDownloadItem")),(0,l.kt)("inlineCode",{parentName:"h3"},"()")),(0,l.kt)("p",null,"Destructs the download item instance"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1a315592aa53a2bf7bc8aea717195f5b43"},(0,l.kt)("inlineCode",{parentName:"h3"},"public void "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1a315592aa53a2bf7bc8aea717195f5b43"},(0,l.kt)("inlineCode",{parentName:"a"},"start")),(0,l.kt)("inlineCode",{parentName:"h3"},"(const QString & path, bool useDefaultDialog) const")),(0,l.kt)("p",null,"Starts the download"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1aaa31f59599e9311f0aee99a0a13e2568"},(0,l.kt)("inlineCode",{parentName:"h3"},"public void "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1aaa31f59599e9311f0aee99a0a13e2568"},(0,l.kt)("inlineCode",{parentName:"a"},"pause")),(0,l.kt)("inlineCode",{parentName:"h3"},"() const")),(0,l.kt)("p",null,"Pauses the download"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1aa2afc687e69c7c78f6c49e9a41a34823"},(0,l.kt)("inlineCode",{parentName:"h3"},"public void "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1aa2afc687e69c7c78f6c49e9a41a34823"},(0,l.kt)("inlineCode",{parentName:"a"},"resume")),(0,l.kt)("inlineCode",{parentName:"h3"},"() const")),(0,l.kt)("p",null,"Resume the download"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1a723b2081749a447049efd04e768d9e57"},(0,l.kt)("inlineCode",{parentName:"h3"},"public void "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1a723b2081749a447049efd04e768d9e57"},(0,l.kt)("inlineCode",{parentName:"a"},"cancel")),(0,l.kt)("inlineCode",{parentName:"h3"},"() const")),(0,l.kt)("p",null,"Cancels the download"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1a6febee1fe8a5f7d15e888a4352d50526"},(0,l.kt)("inlineCode",{parentName:"h3"},"public bool "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1a6febee1fe8a5f7d15e888a4352d50526"},(0,l.kt)("inlineCode",{parentName:"a"},"isStarted")),(0,l.kt)("inlineCode",{parentName:"h3"},"() const")),(0,l.kt)("p",null,"Gets whether the download is started"),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1a22455702c989d4dcc08fb1d13659739d"},(0,l.kt)("inlineCode",{parentName:"h3"},"public bool "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1a22455702c989d4dcc08fb1d13659739d"},(0,l.kt)("inlineCode",{parentName:"a"},"isInProgress")),(0,l.kt)("inlineCode",{parentName:"h3"},"() const")),(0,l.kt)("p",null,"Gets whether the download is in progress"),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,"True if the download is in progress; otherwise false"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1a67c86edf9e9cb742050e2521b55c86df"},(0,l.kt)("inlineCode",{parentName:"h3"},"public bool "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1a67c86edf9e9cb742050e2521b55c86df"},(0,l.kt)("inlineCode",{parentName:"a"},"isComplete")),(0,l.kt)("inlineCode",{parentName:"h3"},"() const")),(0,l.kt)("p",null,"Gets whether the download is complete"),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,"True if the download is complete; otherwise false"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1ada41b0480a3e97d788086ea8c420a22c"},(0,l.kt)("inlineCode",{parentName:"h3"},"public bool "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1ada41b0480a3e97d788086ea8c420a22c"},(0,l.kt)("inlineCode",{parentName:"a"},"isCanceled")),(0,l.kt)("inlineCode",{parentName:"h3"},"() const")),(0,l.kt)("p",null,"Gets whether the download has been canceled or interrupted"),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,"True if the download has been canceled or interrupted; otherwise false"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1a5c9648906b02ce59aa6d82f03e468c1d"},(0,l.kt)("inlineCode",{parentName:"h3"},"public qint64 "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1a5c9648906b02ce59aa6d82f03e468c1d"},(0,l.kt)("inlineCode",{parentName:"a"},"currentSpeed")),(0,l.kt)("inlineCode",{parentName:"h3"},"() const")),(0,l.kt)("p",null,"Gets current download speed"),(0,l.kt)("h4",{id:"returns-4"},"Returns"),(0,l.kt)("p",null,"A simple speed estimate in bytes/s"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1a18fafe4f375aa60e43ec7c5d855ab91e"},(0,l.kt)("inlineCode",{parentName:"h3"},"public int "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1a18fafe4f375aa60e43ec7c5d855ab91e"},(0,l.kt)("inlineCode",{parentName:"a"},"percentComplete")),(0,l.kt)("inlineCode",{parentName:"h3"},"() const")),(0,l.kt)("p",null,"Gets the completion percentage"),(0,l.kt)("h4",{id:"returns-5"},"Returns"),(0,l.kt)("p",null,"The rough percent complete or -1 if the receive total size is unknown"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1ab1ff7414475451351e4d4ab50f723bee"},(0,l.kt)("inlineCode",{parentName:"h3"},"public qint64 "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1ab1ff7414475451351e4d4ab50f723bee"},(0,l.kt)("inlineCode",{parentName:"a"},"totalBytes")),(0,l.kt)("inlineCode",{parentName:"h3"},"() const")),(0,l.kt)("p",null,"Gets total number of bytes"),(0,l.kt)("h4",{id:"returns-6"},"Returns"),(0,l.kt)("p",null,"The total number of bytes"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1a5d76f04bb41c5e4edad6d680b01fe63f"},(0,l.kt)("inlineCode",{parentName:"h3"},"public qint64 "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1a5d76f04bb41c5e4edad6d680b01fe63f"},(0,l.kt)("inlineCode",{parentName:"a"},"receivedBytes")),(0,l.kt)("inlineCode",{parentName:"h3"},"() const")),(0,l.kt)("p",null,"Gets number of received bytes"),(0,l.kt)("h4",{id:"returns-7"},"Returns"),(0,l.kt)("p",null,"The number of received bytes"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1afe0d048a282cb605da910de1c5d82242"},(0,l.kt)("inlineCode",{parentName:"h3"},"public QDateTime "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1afe0d048a282cb605da910de1c5d82242"},(0,l.kt)("inlineCode",{parentName:"a"},"startTime")),(0,l.kt)("inlineCode",{parentName:"h3"},"() const")),(0,l.kt)("p",null,"Gets the time that the download started"),(0,l.kt)("h4",{id:"returns-8"},"Returns"),(0,l.kt)("p",null,"The time that the download started"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1a61b2bd3cdc2f35d2424ded4e8b3801fd"},(0,l.kt)("inlineCode",{parentName:"h3"},"public QDateTime "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1a61b2bd3cdc2f35d2424ded4e8b3801fd"},(0,l.kt)("inlineCode",{parentName:"a"},"endTime")),(0,l.kt)("inlineCode",{parentName:"h3"},"() const")),(0,l.kt)("p",null,"Gets the time that the download ended"),(0,l.kt)("h4",{id:"returns-9"},"Returns"),(0,l.kt)("p",null,"The time that the download ended"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1a40227300f52cd34a67281eacf95bcc28"},(0,l.kt)("inlineCode",{parentName:"h3"},"public QString "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1a40227300f52cd34a67281eacf95bcc28"},(0,l.kt)("inlineCode",{parentName:"a"},"fullPath")),(0,l.kt)("inlineCode",{parentName:"h3"},"() const")),(0,l.kt)("p",null,"Gets the full path to the downloaded or downloading file"),(0,l.kt)("h4",{id:"returns-10"},"Returns"),(0,l.kt)("p",null,"The full path to the downloaded or downloading file"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1aff911ad0aa21867cdfe56457293f4914"},(0,l.kt)("inlineCode",{parentName:"h3"},"public quint32 "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1aff911ad0aa21867cdfe56457293f4914"},(0,l.kt)("inlineCode",{parentName:"a"},"id")),(0,l.kt)("inlineCode",{parentName:"h3"},"() const")),(0,l.kt)("p",null,"Gets the unique identifier for this download"),(0,l.kt)("h4",{id:"returns-11"},"Returns"),(0,l.kt)("p",null,"The unique identifier for this download"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1a253cf33b582e3994b65d5611ef277bbe"},(0,l.kt)("inlineCode",{parentName:"h3"},"public QString "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1a253cf33b582e3994b65d5611ef277bbe"},(0,l.kt)("inlineCode",{parentName:"a"},"url")),(0,l.kt)("inlineCode",{parentName:"h3"},"() const")),(0,l.kt)("p",null,"Gets the URL"),(0,l.kt)("h4",{id:"returns-12"},"Returns"),(0,l.kt)("p",null,"The the URL"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1a9f9bcb65952b50b4f24c4d55eff9b64e"},(0,l.kt)("inlineCode",{parentName:"h3"},"public QString "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1a9f9bcb65952b50b4f24c4d55eff9b64e"},(0,l.kt)("inlineCode",{parentName:"a"},"originalUrl")),(0,l.kt)("inlineCode",{parentName:"h3"},"() const")),(0,l.kt)("p",null,"Gets the original URL before any redirections"),(0,l.kt)("h4",{id:"returns-13"},"Returns"),(0,l.kt)("p",null,"The original URL before any redirections"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1ac0dd9f8bea7ca594f04935d81cfb72a4"},(0,l.kt)("inlineCode",{parentName:"h3"},"public QString "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1ac0dd9f8bea7ca594f04935d81cfb72a4"},(0,l.kt)("inlineCode",{parentName:"a"},"suggestedFileName")),(0,l.kt)("inlineCode",{parentName:"h3"},"() const")),(0,l.kt)("p",null,"Gets the suggested file name"),(0,l.kt)("h4",{id:"returns-14"},"Returns"),(0,l.kt)("p",null,"The suggested file name"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1af97dad25e439c8b997d6689fe1c91bf8"},(0,l.kt)("inlineCode",{parentName:"h3"},"public QString "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1af97dad25e439c8b997d6689fe1c91bf8"},(0,l.kt)("inlineCode",{parentName:"a"},"contentDisposition")),(0,l.kt)("inlineCode",{parentName:"h3"},"() const")),(0,l.kt)("p",null,"Gets the content disposition"),(0,l.kt)("h4",{id:"returns-15"},"Returns"),(0,l.kt)("p",null,"The the content disposition"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1afb8ec36477b64a222b0610c8518f8e31"},(0,l.kt)("inlineCode",{parentName:"h3"},"public QString "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1afb8ec36477b64a222b0610c8518f8e31"},(0,l.kt)("inlineCode",{parentName:"a"},"mimeType")),(0,l.kt)("inlineCode",{parentName:"h3"},"() const")),(0,l.kt)("p",null,"Gets the mime type"),(0,l.kt)("h4",{id:"returns-16"},"Returns"),(0,l.kt)("p",null,"The mime type"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1a631e89a5388360954e21644f91371a15"},(0,l.kt)("inlineCode",{parentName:"h3"},"private QScopedPointer< QCefDownloadItemPrivate > "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1a631e89a5388360954e21644f91371a15"},(0,l.kt)("inlineCode",{parentName:"a"},"d_ptr"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1a2721c6c268fbe3b92ec7e3f5524b6d1a"},(0,l.kt)("inlineCode",{parentName:"h3"},"private  "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1a2721c6c268fbe3b92ec7e3f5524b6d1a"},(0,l.kt)("inlineCode",{parentName:"a"},"QCefDownloadItem")),(0,l.kt)("inlineCode",{parentName:"h3"},"("),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item"},(0,l.kt)("inlineCode",{parentName:"a"},"QCefDownloadItem")),(0,l.kt)("inlineCode",{parentName:"h3"}," &&) = delete")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1a0486e85d7e5ccf2c182e504129c9e068"},(0,l.kt)("inlineCode",{parentName:"h3"},"private "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item"},(0,l.kt)("inlineCode",{parentName:"a"},"QCefDownloadItem")),(0,l.kt)("inlineCode",{parentName:"h3"},"&"),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1a0486e85d7e5ccf2c182e504129c9e068"},(0,l.kt)("inlineCode",{parentName:"a"},"operator=")),(0,l.kt)("inlineCode",{parentName:"h3"},"("),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item"},(0,l.kt)("inlineCode",{parentName:"a"},"QCefDownloadItem")),(0,l.kt)("inlineCode",{parentName:"h3"}," &&) = delete")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_download_item_1a6db795a0e61816d85a4125aa67d98b76"},(0,l.kt)("inlineCode",{parentName:"h3"},"private  "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_download_item_1a6db795a0e61816d85a4125aa67d98b76"},(0,l.kt)("inlineCode",{parentName:"a"},"QCefDownloadItem")),(0,l.kt)("inlineCode",{parentName:"h3"},"()")),(0,l.kt)("p",null,"Constructs a download item instance"))}p.isMDXComponent=!0}}]);