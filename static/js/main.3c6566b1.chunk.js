(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,n,t){},121:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),o=t(21),r=t.n(o),c=(t(35),t(26)),s=[{name:"Home",value:"index"},{name:"About",value:"about"},{name:"Projects",value:"projects"},{name:"Work",value:"work"},{name:"Social",value:"social"}];t(36);var u=function(e){var n=e.handleMenuChange;return i.a.createElement("div",{className:"menu"},s.map(function(e){return i.a.createElement("button",{value:e.value,className:"menu-item",onClick:n,key:e.value},e.name)}))},l={index:"## Hi there, thank you for visiting!\n\nMy name is Eko.\n\nI can write some code.\n\n```javascript\nfunction sayHelloToVisitor() {\n  console.log('Hello you!');\n}\n\nsayHelloToVisitor();\n```\n",about:"## Who am I?\n\nI am Lorem ipsum dolor sit amet, quo virtute phaedrum cu. At splendide pertinacia usu. No vix quando graeci animal. Vis no hinc detraxit efficiantur. Inani partem inciderint ex his.\n\nNonumy principes at vel, natum moderatius percipitur ad qui. Erat prima torquatos sit at, est at perfecto platonem, vidit omnesque ocurreret id eos. Sit at enim aeque, est eu alterum nominavi offendit, mea ancillae percipit mnesarchum ad. Quas ceteros maluisset cum ea, ex minim dicant honestatis eos.\n",projects:"## Here are some of the interesting things I've done\n\n- Project Number 1  \n  Implemented something to create something\n\n- Project Number 2  \n  Did this easy thing and that hard thing. And oh, that very difficult thing using this technology.\n\n- Project Number N  \n  Developed something with technology something.  \n  Demo can be seen [here]()\n",social:"My social media:\n\n- [Github]()\n- Instagram (@balbalblaa)\n- [Facebook]()\n- [LinkedIn]()\n",work:"I have worked in several companies before:\n\n- In [Company A](), I did this and improved the efficiency of that by this much.\n\n- I also implemented something in [Company B](), generating more than \\$XXXXXX of additional revenue. My boss liked me very much.\n\n- Currently, I am working on improving the efficiency of something something in [Company C](). I use mostly these technologies: A, B, C.\n"},m=(t(37),t(22)),h=t(23),d=t(27),v=t(24),g=t(6),p=t(28),f=t(0),y=window.hljs,b=function(e){function n(e){var t;return Object(m.a)(this,n),(t=Object(d.a)(this,Object(v.a)(n).call(this,e))).setRef=t.setRef.bind(Object(g.a)(t)),t}return Object(p.a)(n,e),Object(h.a)(n,[{key:"setRef",value:function(e){this.codeEl=e}},{key:"componentDidMount",value:function(){this.highlightCode()}},{key:"componentDidUpdate",value:function(){this.highlightCode()}},{key:"highlightCode",value:function(){y.highlightBlock(this.codeEl)}},{key:"render",value:function(){return f.createElement("pre",null,f.createElement("code",{ref:this.setRef,className:"language-".concat(this.props.language)},this.props.value))}}]),n}(f.PureComponent);b.defaultProps={language:""};var k=b,w=t(25),j=t.n(w);var E=function(e){var n=e.activePage;return i.a.createElement("div",{className:"content"},i.a.createElement(j.a,{source:l[n],renderers:{code:k}}))};t(120);var I=function(){var e=Object(a.useState)("index"),n=Object(c.a)(e,2),t=n[0],o=n[1];return i.a.createElement("div",{className:"App"},i.a.createElement(u,{handleMenuChange:function(e){o(e.currentTarget.value)}}),i.a.createElement(E,{activePage:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},29:function(e,n,t){e.exports=t(121)},35:function(e,n,t){},36:function(e,n,t){},37:function(e,n,t){}},[[29,1,2]]]);
//# sourceMappingURL=main.3c6566b1.chunk.js.map