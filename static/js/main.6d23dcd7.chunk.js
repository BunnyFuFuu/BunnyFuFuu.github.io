(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{28:function(e,t,n){},33:function(e,t,n){e.exports=n.p+"static/media/pfp.91014688.jpg"},34:function(e,t,n){e.exports=n.p+"static/media/Resume.5479861b.pdf"},42:function(e,t,n){e.exports=n(60)},47:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),o=n.n(c),i=(n(47),n(17)),s=n(3),l=n(38),u=(n(37),r.a.createContext(),function(e){e.component;var t=Object(l.a)(e,["component"]);return r.a.createElement(s.b,Object.assign({},t,{render:function(e){return r.a.createElement(s.a,{to:"/login".concat("/"==(t.path||!t.path)?"":"?redirect=".concat(encodeURIComponent(t.path)))})}}))}),p=(n(28),n(5)),m=n(6),d=n(8),h=n(7),f=n(74),v=n(19),b=(Object(v.a)({root:{height:"65px",borderRadius:"10px",padding:"0 15px 0 15px",color:"white",fontSize:"20px",margin:"5px 8%","&:hover":{background:"#006daa"}}})(f.a),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).checkScroll=function(e){a.setState({scrolled:window.pageYOffset>30})},a.state={scrolled:!1},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.checkScroll)}},{key:"render",value:function(){return r.a.createElement("div",{class:this.state.scrolled?"scrolled":"fadeInHeader"},r.a.createElement("div",{class:"tabs"},r.a.createElement(f.a,{component:i.b,exact:!0,activeClassName:"active",className:"tabButton",to:"/"},r.a.createElement("p",null,"Introduction")),r.a.createElement(f.a,{component:i.b,activeClassName:"active",className:"tabButton",to:"/profile"},r.a.createElement("p",null,"About Me!")),r.a.createElement(f.a,{component:i.b,activeClassName:"active",className:"tabButton",to:"/experience"},r.a.createElement("p",null,"Experience")),r.a.createElement(f.a,{component:i.b,activeClassName:"active",className:"tabButton",to:"/projects"},r.a.createElement("p",null,"My Projects"))))}}]),n}(a.Component)),g=n(33),E=n.n(g),j=n(34),w=n.n(j),O=Object(v.a)({root:{font:"Roboto",borderRadius:10,border:0,color:"white",height:48,padding:"0 30px",background:"#006daa","&:hover":{background:"#00bfff"}}})(f.a),x=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(p.a)(this,n),t.call(this,e)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"introPage"},r.a.createElement("div",{className:"header"},r.a.createElement(b,null)),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{class:"IntroBanner"},"Hi, I'm Andrew Liang!"),r.a.createElement("img",{class:"PFP",src:E.a}),r.a.createElement("p",{class:"IntroBlurb"},"I'm a third-year Computer Science major (with a minor in Management Science) at UCSD. I'm currently looking for a software development internship. I've got experience in Python, Javascript, Java, C++, C, HTML, CSS, Node.JS, React, to name a few languages. I've also gained meaningful experience in dealing with containerization with Docker (learning Kubernetes as well), as well as RESTful API development (check out my Projects tab to learn more about how this website was implemented!). I'm looking to extend my understanding of software development continually with any company willing to provide me with avenues for growth."),r.a.createElement(O,{variant:"contained",href:w.a,target:"_blank"},"Check out my Resume!")))}}]),n}(a.Component),y=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(p.a)(this,n),t.call(this,e)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"profilePage"},r.a.createElement("div",{className:"header"},r.a.createElement(b,null)),r.a.createElement("div",{className:"content"},r.a.createElement("p",null,"Profile page")))}}]),n}(a.Component),C=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(p.a)(this,n),t.call(this,e)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"expPage"},r.a.createElement("div",{className:"header"},r.a.createElement(b,null)),r.a.createElement("div",{className:"content"},r.a.createElement("p",null,"Experience page")))}}]),n}(a.Component),k=n(16),N=n.n(k),R=n(25),I=n(22),P=new(function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).repos=[],e.configs=[],e.getReposList=e.getReposList.bind(Object(I.a)(e)),e.getReposCfg=e.getReposCfg.bind(Object(I.a)(e)),e}return Object(m.a)(n,[{key:"getReposList",value:function(){var e=Object(R.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/BunnyFuFuu/repos",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:e.sent.json().then((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getReposCfg",value:function(){var e=Object(R.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getReposList();case 2:return e.next=4,Promise.all(this.repos.map(function(){var e=Object(R.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/BunnyFuFuu/".concat(t,"/contents/src/site.json"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:return t=e.sent,e.next=7,Promise.all(t.filter((function(e){return 200==e.status})).map(function(){var e=Object(R.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:n=e.sent,this.configs=n.map((function(e){return e.download_url}));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isAuthorized",value:function(){}}]),n}(n(35).EventEmitter)),S=[{path:"/",Component:x,private:!1},{path:"/profile",Component:y,private:!1},{path:"/experience",Component:C,private:!1},{path:"/projects",Component:function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(p.a)(this,n),a=t.call(this,e),P.getReposCfg().then((function(){return a.forceUpdate()})),a}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"projectsPage"},r.a.createElement("div",{className:"header"},r.a.createElement(b,null)),r.a.createElement("div",{className:"content"},P.repos.map((function(e){return r.a.createElement("p",null,e)}))))}}]),n}(a.Component),private:!1},{path:"/manage",Component:function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(p.a)(this,n),t.call(this,e)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"expPage"},r.a.createElement("div",{className:"header"},r.a.createElement(b,null)),r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Database Management Dashboard")))}}]),n}(a.Component),private:!0}],B=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},S.map((function(e){return e.private?r.a.createElement(u,{exact:!0,path:e.path,component:e.Component}):r.a.createElement(s.b,{exact:!0,path:e.path,component:e.Component})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=n(36);o.a.render(r.a.createElement(L.a,{domain:"dev-j3ai5m4d.us.auth0.com",clientId:"ms7HTvXoZF3Q1LKkSJmoO6apcNcJACSV",redirectUri:window.location.origin},r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.6d23dcd7.chunk.js.map