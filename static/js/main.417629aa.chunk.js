(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var o=n(7),s=n.n(o),r=n(2),c=n(3),a=n(5),i=n(4),l=n(1),h=n.n(l),u=(n(12),n(0)),b=function(t){Object(a.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={isReverse:!1,sortBy:"",wordLength:1},t.switchReverse=function(){t.setState((function(t){return{isReverse:!t.isReverse}}))},t.sortByAlphabet=function(){t.setState((function(t){return{sortBy:"alphabet"===t.sortBy?"":"alphabet"}}))},t.sortByLength=function(){t.setState((function(t){return{sortBy:"length"===t.sortBy?"":"length"}}))},t.handleChange=function(e){t.setState({wordLength:e})},t.reset=function(){t.setState({isReverse:!1,sortBy:"",wordLength:1})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isReverse,o=e.sortBy,s=e.wordLength,r=this.props.goodsList.filter((function(t){return t.length>=s}));switch(o){case"alphabet":r.sort((function(t,e){return t.localeCompare(e)}));break;case"length":r.sort((function(t,e){return t.length-e.length}))}return n&&r.reverse(),Object(u.jsxs)("div",{className:"goods",children:[Object(u.jsxs)("div",{className:"goods__buttons",children:[Object(u.jsx)("button",{type:"button",className:"goods__button ".concat(n&&"goods__button--active"),onClick:this.switchReverse,children:"Reverse"}),Object(u.jsx)("button",{type:"button",className:"goods__button ".concat("alphabet"===o&&"goods__button--active"),onClick:this.sortByAlphabet,children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:"goods__button ".concat("length"===o&&"goods__button--active"),onClick:this.sortByLength,children:"Sort by length"}),Object(u.jsxs)("select",{className:"goods__button ".concat(1!==s&&"goods__button--active"),onChange:function(e){return t.handleChange(Number(e.target.value))},value:s,children:[Object(u.jsx)("option",{value:"1",children:"Word length >= 1"}),Object(u.jsx)("option",{value:"2",children:"Word length >= 2"}),Object(u.jsx)("option",{value:"3",children:"Word length >= 3"}),Object(u.jsx)("option",{value:"4",children:"Word length >= 4"}),Object(u.jsx)("option",{value:"5",children:"Word length >= 5"}),Object(u.jsx)("option",{value:"6",children:"Word length >= 6"}),Object(u.jsx)("option",{value:"7",children:"Word length >= 7"}),Object(u.jsx)("option",{value:"8",children:"Word length >= 8"}),Object(u.jsx)("option",{value:"9",children:"Word length >= 9"}),Object(u.jsx)("option",{value:"10",children:"Word length >= 10"})]}),Object(u.jsx)("button",{type:"button",className:"goods__button",onClick:this.reset,children:"Reset"})]}),Object(u.jsx)("ul",{className:"goods__list",children:r.map((function(t){return Object(u.jsx)("li",{className:"goods__item",children:t},t)}))})]})}}]),n}(h.a.Component),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(t){Object(a.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={isVisible:!1},t.showList=function(){t.setState((function(t){return{isVisible:!t.isVisible}}))},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state.isVisible;return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)("h1",{className:"app__header",children:"Goods"}),t&&Object(u.jsx)(b,{goodsList:d}),Object(u.jsx)("button",{type:"button",onClick:this.showList,className:"show-button ".concat(t&&"show-button--hide"),children:"Start"})]})}}]),n}(h.a.Component),g=j;s.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.417629aa.chunk.js.map