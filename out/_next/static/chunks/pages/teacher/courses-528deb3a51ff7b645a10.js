(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9122],{7251:function(e,s,r){"use strict";var c=r(5893),a=(r(7294),r(1664));s.Z=function(e){var s=e.pageTitle,r=e.homePageUrl,i=e.homePageText,n=e.activePageText;return(0,c.jsxs)("div",{className:"page-title-area",children:[(0,c.jsx)("div",{className:"container",children:(0,c.jsxs)("div",{className:"page-title-content",children:[(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(a.default,{href:r,children:(0,c.jsx)("a",{children:i})})}),(0,c.jsx)("li",{className:"active",children:n})]}),(0,c.jsx)("h2",{children:s})]})}),(0,c.jsx)("div",{className:"shape9",children:(0,c.jsx)("img",{src:"/images/shape8.svg",alt:"image"})})]})}},719:function(e,s,r){"use strict";var c=r(5893),a=(r(7294),r(1664));s.Z=function(e){var s=e.id,r=e.title,i=e.price,n=e.overview,t=e.profilePhoto,l=e.lessons,o=e.user,d=e.enroled_courses,h=d||[];return(0,c.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,c.jsxs)("div",{className:"single-courses-box",children:[(0,c.jsxs)("div",{className:"courses-image",children:[(0,c.jsx)(a.default,{href:"/courses/[id]",as:"/courses/".concat(s),children:(0,c.jsx)("a",{className:"d-block image",children:(0,c.jsx)("img",{src:t,alt:r})})}),(0,c.jsx)("a",{href:"#",className:"fav",children:(0,c.jsx)("i",{className:"flaticon-heart"})}),(0,c.jsxs)("div",{className:"price shadow",children:["$",i]})]}),(0,c.jsxs)("div",{className:"courses-content",children:[(0,c.jsxs)("div",{className:"course-author d-flex align-items-center",children:[(0,c.jsx)("img",{src:"".concat(o.profilePhoto?o.profilePhoto:"/images/user1.jpg"),className:"rounded-circle",alt:o.name}),(0,c.jsx)("span",{children:o.name})]}),(0,c.jsx)("h3",{children:(0,c.jsx)(a.default,{href:"/courses/[id]",as:"/courses/".concat(s),children:(0,c.jsx)("a",{children:r})})}),(0,c.jsx)("p",{children:n.slice(0,100)}),(0,c.jsxs)("ul",{className:"courses-box-footer d-flex justify-content-between align-items-center",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"flaticon-agenda"})," ",parseInt(l)," Lessons"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"flaticon-people"})," ",h.length," Students"]})]})]})]})})}},5303:function(e,s,r){"use strict";r.r(s);var c=r(7757),a=r.n(c),i=r(5861),n=r(4942),t=r(7294),l=r(5893),o=r(2286),d=r(9669),h=r.n(d),u=r(4264),j=r(719),x=r(7251),m=r(5943);function f(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);s&&(c=c.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,c)}return r}function p(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?f(Object(r),!0).forEach((function(s){(0,n.Z)(e,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))}))}return e}var v=function(e){var s=e.courses;return(0,l.jsxs)(t.Fragment,{children:[(0,l.jsx)(x.Z,{pageTitle:"Teacher Courses",homePageUrl:"/",homePageText:"Home",activePageText:"Teacher Courses"}),(0,l.jsx)("div",{className:"courses-area courses-section pt-100 pb-70",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-md-4 col-lg-4",children:(0,l.jsx)("div",{className:"td-sidebar",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(m.Z,{href:"/teacher/courses",activeClassName:"active",children:(0,l.jsx)("a",{children:"My Courses"})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m.Z,{href:"/teacher/course/create",activeClassName:"active",children:(0,l.jsx)("a",{children:"Create A Course"})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m.Z,{href:"/teacher/courses/course-edit",activeClassName:"active",children:(0,l.jsx)("a",{children:"Edit My Course"})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m.Z,{href:"/teacher/course/upload-course-video",activeClassName:"active",children:(0,l.jsx)("a",{children:"Upload Course Video"})})})]})})}),(0,l.jsx)("div",{className:"col-md-8 col-lg-8",children:(0,l.jsx)("div",{className:"row",children:s.length?s.map((function(e){return(0,t.createElement)(j.Z,p(p({},e),{},{key:e.id}))})):(0,l.jsx)("div",{className:"col-lg-12",children:(0,l.jsx)("h3",{className:"empty-content",children:"Empty"})})})})]})})})]})};v.getInitialProps=function(){var e=(0,i.Z)(a().mark((function e(s){var r,c,i,n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=(0,o.parseCookies)(s),c=r.token){e.next=3;break}return e.abrupt("return",{courses:[]});case 3:return i={headers:{Authorization:c}},n="".concat(u.Z,"/api/v1/courses/my-courses"),e.next=7,h().get(n,i);case 7:return t=e.sent,e.abrupt("return",t.data);case 9:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),s.default=v},3715:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/teacher/courses",function(){return r(5303)}])}},function(e){e.O(0,[9774,2888,179],(function(){return s=3715,e(e.s=s);var s}));var s=e.O();_N_E=s}]);