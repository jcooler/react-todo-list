(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(3),l=a.n(c),s=(a(15),a(1)),r=(a(17),a(4)),u=function(e){var t=e.setInputText,a=e.todos,n=e.setTodos,c=e.inputText,l=e.setStatus;return o.a.createElement("form",null,o.a.createElement("input",{value:c,onChange:function(e){t(e.target.value)},type:"text",className:"todo-input"}),o.a.createElement("button",{onClick:function(e){e.preventDefault(),n([].concat(Object(r.a)(a),[{text:c,completed:!1,id:1e3*Math.random()}])),t("")},className:"todo-button",type:"submit"},o.a.createElement("i",{className:"fas fa-plus-square"})),o.a.createElement("div",{className:"select"},o.a.createElement("select",{onChange:function(e){l(e.target.value)},name:"todos",className:"filter-todo"},o.a.createElement("option",{value:"all"},"All"),o.a.createElement("option",{value:"completed"},"Completed"),o.a.createElement("option",{value:"uncompleted"},"Uncompleted"))))},i=a(5),m=function(e){var t=e.text,a=e.todo,n=e.todos,c=e.setTodos;return o.a.createElement("div",{className:"todo"},o.a.createElement("li",{className:"todo-item ".concat(a.completed?"completed":"")},t),o.a.createElement("button",{onClick:function(){c(n.map(function(e){return e.id===a.id?Object(i.a)({},e,{completed:!e.completed}):e}))},className:"complete-btn"},o.a.createElement("i",{className:"fas fa-check"})," "),o.a.createElement("button",{onClick:function(){c(n.filter(function(e){return e.id!==a.id}))},className:"trash-btn"},o.a.createElement("i",{className:"fas fa-trash"})))},d=function(e){var t=e.todos,a=e.setTodos,n=e.filteredTodos;return o.a.createElement("div",{className:"todo-container"},o.a.createElement("ul",{className:"todo-list"},n.map(function(e){return o.a.createElement(m,{setTodos:a,todos:t,text:e.text,key:e.id,todo:e})})))};var f=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),r=Object(s.a)(l,2),i=r[0],m=r[1],f=Object(n.useState)("all"),p=Object(s.a)(f,2),E=p[0],b=p[1],v=Object(n.useState)([]),g=Object(s.a)(v,2),N=g[0],O=g[1];Object(n.useEffect)(function(){h()},[]),Object(n.useEffect)(function(){S(),T()},[i,E]);var S=function(){switch(E){case"completed":O(i.filter(function(e){return!0===e.completed}));break;case"uncompleted":O(i.filter(function(e){return!1===e.completed}));break;default:O(i)}},T=function(){i.length>0&&localStorage.setItem("todos",JSON.stringify(i))},h=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));m(e)}};return o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement("h1",null,"Jon's Todo List")),o.a.createElement(u,{inputText:a,todos:i,setTodos:m,setInputText:c,setStatus:b}),o.a.createElement(d,{filteredTodos:N,setTodos:m,todos:i}))},p=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,20)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),o(e),c(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null))),p()},6:function(e,t,a){e.exports=a(19)}},[[6,3,2]]]);
//# sourceMappingURL=main.02962e3f.chunk.js.map