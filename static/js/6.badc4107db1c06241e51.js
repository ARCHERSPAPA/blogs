webpackJsonp([6],{"6wzD":function(t,e){},Qt9A:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Dd8w"),r=a.n(n),s=a("ZYmg"),i=a("NYxO"),o={data:function(){return{blogs:[],total:0,page:1,user:{}}},computed:r()({filters:function(){return console.log(this.blogs.filter(function(t){return null!==t.user})),this.blogs.filter(function(t){return null!==t.user})}},Object(i.c)(["isLogin"])),created:function(){var t=this;this.page=parseInt(this.$route.query.page)||1,s.a.getIndexBlogs({page:this.page}).then(function(e){t.blogs=e.data,t.total=e.total,t.page=e.page})},methods:{onPageChange:function(t){var e=this;s.a.getIndexBlogs({page:t}).then(function(a){e.blogs=a.data,e.total=a.total,e.page=a.page,e.$router.push({path:"/",query:{page:t}})})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"index"}},[[t._l(t.filters,function(e){return a("div",{key:e.id,staticClass:"content"},[a("figure",{staticClass:"user",attrs:{id:"nihao"}},[a("img",{attrs:{src:e.user.avatar,alt:""}}),t._v(" "),a("p",[a("a",{attrs:{href:"",title:"用户名"}},[t._v(t._s(e.user.username))])])]),t._v(" "),a("router-link",{attrs:{to:"/detail/"+e.id}},[a("div",{staticClass:"text"},[a("h3",[t._v("\n          "+t._s(e.title)+"\n          "),a("span",[t._v("发表日期:"+t._s(t.friendlyDate(e.createdAt)))])]),t._v(" "),a("p",[t._v(t._s(e.description))])])])],1)}),t._v(" "),a("el-pagination",{staticStyle:{float:"right"},attrs:{background:"",layout:"prev, pager, next",total:t.total},on:{"current-change":t.onPageChange}})],t._v(" "),void 0],2)},staticRenderFns:[]};var u=a("VU/8")(o,l,!1,function(t){a("6wzD")},null,null);e.default=u.exports}});
//# sourceMappingURL=6.badc4107db1c06241e51.js.map