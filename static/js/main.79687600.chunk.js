(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,n){e.exports={list:"Statistics_list__3uH4i",item:"Statistics_item__2ojHl"}},10:function(e,t,n){e.exports={message:"Notification_message__1LcyM"}},11:function(e,t,n){e.exports={container:"Container_container__1QOT0"}},20:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),i=n(5),s=n.n(i),o=n(6),r=n(7),l=n(8),u=n(13),d=n(12),b=n(1),j=n.n(b),h=n(0);var f=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,i=e.positivePercentage;return Object(h.jsxs)("ul",{className:j.a.list,children:[Object(h.jsxs)("li",{className:j.a.item,children:["Good: ",t]}),Object(h.jsxs)("li",{className:j.a.item,children:["Neutral: ",n]}),Object(h.jsxs)("li",{className:j.a.item,children:["Bad: ",a]}),Object(h.jsxs)("li",{className:j.a.item,children:["Total: ",c]}),Object(h.jsxs)("li",{className:j.a.item,children:["Positive feedback: ",i,"%"]})]})},m=n(9),v=n.n(m);var O=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(h.jsx)("button",{type:"button",className:v.a.button,onClick:function(){return n(e)},children:e},e)}))},x=n(4),k=n.n(x);var p=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("section",{className:k.a.section,children:[Object(h.jsx)("h2",{className:k.a.title,children:t}),n]})},_=n(10),g=n.n(_);var N=function(e){var t=e.message;return Object(h.jsx)("p",{className:g.a.message,children:t})},F=n(11),P=n.n(F);var y=function(e){var t=e.children;return Object(h.jsx)("div",{className:P.a.container,children:t})},S=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.addFeedback=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){var t=e.state.good;return Math.round(t/e.countTotalFeedback()*100)||0},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return Object(h.jsxs)(y,{children:[Object(h.jsx)(p,{title:"Please leave feedback",children:Object(h.jsx)(O,{options:Object.keys(this.state),onLeaveFeedback:this.addFeedback})}),Object(h.jsx)(p,{title:"Statistics",children:this.countTotalFeedback()?Object(h.jsx)(f,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(h.jsx)(N,{message:"No feedback given"})})]})}}]),n}(a.Component);n(19);s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))},4:function(e,t,n){e.exports={section:"Section_section__3BsNi",title:"Section_title__tw35e"}},9:function(e,t,n){e.exports={button:"FeedbackOptions_button__m1oIB"}}},[[20,1,2]]]);
//# sourceMappingURL=main.79687600.chunk.js.map