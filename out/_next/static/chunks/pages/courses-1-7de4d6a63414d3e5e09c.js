(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[490],{7251:function(e,s,c){"use strict";var i=c(5893),r=(c(7294),c(1664));s.Z=function(e){var s=e.pageTitle,c=e.homePageUrl,a=e.homePageText,n=e.activePageText;return(0,i.jsxs)("div",{className:"page-title-area",children:[(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"page-title-content",children:[(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(r.default,{href:c,children:(0,i.jsx)("a",{children:a})})}),(0,i.jsx)("li",{className:"active",children:n})]}),(0,i.jsx)("h2",{children:s})]})}),(0,i.jsx)("div",{className:"shape9",children:(0,i.jsx)("img",{src:"/images/shape8.svg",alt:"image"})})]})}},2710:function(e,s,c){"use strict";c.r(s);var i=c(7757),r=c.n(i),a=c(5861),n=c(5893),l=c(7294),t=c(7251),o=c(1664),d=c(9669),h=c.n(d),u=c(4264),x=function(e){var s=e.courses;return(0,n.jsxs)(l.Fragment,{children:[(0,n.jsx)(t.Z,{pageTitle:"Courses Grid 01",homePageUrl:"/",homePageText:"Home",activePageText:"Courses Grid 01"}),(0,n.jsx)("div",{className:"courses-area courses-section pt-100 pb-70",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("div",{className:"edemy-grid-sorting row align-items-center",children:[(0,n.jsx)("div",{className:"col-lg-8 col-md-6 result-count",children:(0,n.jsxs)("p",{children:["We found ",(0,n.jsx)("span",{className:"count",children:s.length})," courses available for you"]})}),(0,n.jsx)("div",{className:"col-lg-4 col-md-6 ordering",children:(0,n.jsx)("div",{className:"select-box",children:(0,n.jsxs)("select",{className:"form-control",children:[(0,n.jsx)("option",{children:"Sort By"}),(0,n.jsx)("option",{children:"Popularity"}),(0,n.jsx)("option",{children:"Latest"}),(0,n.jsx)("option",{children:"Price: low to high"}),(0,n.jsx)("option",{children:"Price: high to low"})]})})})]}),(0,n.jsx)("div",{className:"row",children:s?s.map((function(e){return(0,n.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,n.jsxs)("div",{className:"single-courses-box",children:[(0,n.jsxs)("div",{className:"courses-image",children:[(0,n.jsx)(o.default,{href:"/courses/[id]",as:"/courses/".concat(e.id),children:(0,n.jsx)("a",{className:"d-block image",children:(0,n.jsx)("img",{src:e.profilePhoto,alt:e.title})})}),(0,n.jsx)(o.default,{href:"#",children:(0,n.jsx)("a",{className:"fav",children:(0,n.jsx)("i",{className:"flaticon-heart"})})}),(0,n.jsxs)("div",{className:"price shadow",children:["$",e.price]})]}),(0,n.jsxs)("div",{className:"courses-content",children:[(0,n.jsxs)("div",{className:"course-author d-flex align-items-center",children:[(0,n.jsx)("img",{src:"".concat(e.user.profilePhoto?e.user.profilePhoto:"/images/user1.jpg"),className:"rounded-circle",alt:e.user.name}),(0,n.jsx)("span",{children:e.user.name})]}),(0,n.jsx)("h3",{title:e.title,children:(0,n.jsx)(o.default,{href:"/courses/[id]",as:"/courses/".concat(e.id),children:(0,n.jsxs)("a",{children:[e.title.slice(0,20),"..."]})})}),(0,n.jsxs)("p",{children:[e.overview.slice(0,100),"..."]}),(0,n.jsxs)("ul",{className:"courses-box-footer d-flex justify-content-between align-items-center",children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"flaticon-agenda"})," ",parseInt(e.lessons)," Lessons"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"flaticon-people"})," ",e.enroled_courses.length," Students"]})]})]})]})},e.id)})):(0,n.jsx)("h2",{children:"Empty"})})]})})]})};x.getInitialProps=(0,a.Z)(r().mark((function e(){var s,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="".concat(u.Z,"/api/v1/courses/homepage-courses"),e.next=3,h().get(s);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)}))),s.default=x},4091:function(e,s,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/courses-1",function(){return c(2710)}])}},function(e){e.O(0,[9774,2888,179],(function(){return s=4091,e(e.s=s);var s}));var s=e.O();_N_E=s}]);