(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{40:function(e,t,a){},50:function(e,t,a){e.exports=a.p+"static/media/pfp.91014688.jpg"},51:function(e,t,a){e.exports=a.p+"static/media/Resume.5479861b.pdf"},52:function(e,t,a){e.exports=a.p+"static/media/AV.f9b69ed3.jpg"},68:function(e,t,a){e.exports=a(87)},73:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),c=a.n(o),i=(a(73),a(21)),l=a(6),s=a(60),m=(a(59),r.a.createContext(),function(e){e.component;var t=Object(s.a)(e,["component"]);return r.a.createElement(l.b,Object.assign({},t,{render:function(e){return r.a.createElement(l.a,{to:"/login".concat("/"==(t.path||!t.path)?"":"?redirect=".concat(encodeURIComponent(t.path)))})}}))}),u=(a(40),a(9)),p=a(10),d=a(12),h=a(11),b=a(109),f=a(4),v=(Object(f.a)({root:{height:"65px",borderRadius:"10px",padding:"0 15px 0 15px",color:"white",fontSize:"20px",margin:"5px 8%","&:hover":{background:"#006daa"}}})(b.a),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).checkScroll=function(e){n.setState({scrolled:window.pageYOffset>30})},n.state={scrolled:!1},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.checkScroll)}},{key:"render",value:function(){return r.a.createElement("div",{class:this.state.scrolled?"scrolled":"fadeInHeader"},r.a.createElement("div",{class:"tabs"},r.a.createElement(b.a,{component:i.b,exact:!0,activeClassName:"active",className:"tabButton",to:"/"},r.a.createElement("p",null,"Introduction")),r.a.createElement(b.a,{component:i.b,activeClassName:"active",className:"tabButton",to:"/profile"},r.a.createElement("p",null,"About Me!")),r.a.createElement(b.a,{component:i.b,activeClassName:"active",className:"tabButton",to:"/experience"},r.a.createElement("p",null,"Experience")),r.a.createElement(b.a,{component:i.b,activeClassName:"active",className:"tabButton",to:"/projects"},r.a.createElement("p",null,"My Projects"))))}}]),a}(n.Component)),E=a(50),g=a.n(E),j=a(51),w=a.n(j),x=(a(52),Object(f.a)({root:{font:"Roboto",borderRadius:10,border:0,color:"white",height:48,padding:"0 8px",background:"#006daa","&:hover":{background:"#00bfff",transition:"all 0.25s cubic-bezier(.17,.67,.83,.67)"}}})(b.a)),O=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(u.a)(this,a),t.call(this,e)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"introPage"},r.a.createElement("div",{className:"header"},r.a.createElement(v,null)),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{class:"IntroBanner"},"Hi, I'm Andrew Liang!"),r.a.createElement("img",{class:"PFP",src:g.a}),r.a.createElement("p",{class:"IntroBlurb"},"I'm a third-year Computer Science major (with a minor in Management Science) at UCSD. I'm currently looking for a software development internship. I've got experience in Python, Javascript, Java, C++, C, HTML, CSS, Node.JS, React, to name a few languages. I've also gained meaningful experience in dealing with containerization with Docker (learning Kubernetes as well), as well as RESTful API development (check out my Projects tab to learn more about how this website was implemented!). I'm looking to extend my understanding of software development continually with any company willing to provide me with avenues for growth."),r.a.createElement(x,{variant:"contained",href:w.a,target:"_blank"},"Check out my Resume!")))}}]),a}(n.Component),k=a(23),y=a.n(k),C=a(38),N=a(22),P=new(function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).hobbies=[],e.exp=[],e.projects=[],e.getHobbies=e.getHobbies.bind(Object(N.a)(e)),e.getExp=e.getExp.bind(Object(N.a)(e)),e.getProjects=e.getProjects.bind(Object(N.a)(e)),e.isAuthorized=e.isAuthorized.bind(Object(N.a)(e)),e}return Object(p.a)(a,[{key:"getHobbies",value:function(){var e=Object(C.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getExp",value:function(){var e=Object(C.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getProjects",value:function(){var e=Object(C.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"isAuthorized",value:function(){}}]),a}(a(54).EventEmitter)),I=a(110),S=a(117),H=a(111),A=a(112),M=a(113),B=a(114),R=a(116),J=a(115),z=a(39),D=a(56),T=a.n(D),L=a(55),U=a.n(L),F=a(57),W=a.n(F),K=(Object(I.a)((function(e){return{root:{width:"60%",backdropFilter:"blur(5px)"},media:{height:0,maxHeight:300,paddingTop:"56.25%"}}})),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleExpandClick=function(){n.state.expanded=!n.state.expanded,n.forceUpdate()},n.state={expanded:!1,image:n.props.doc.image,progress:"In Progress"==n.props.doc.work?"statusIP":"Completed"==n.props.doc.work?"statusComp":"statusPlanned"},n}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement(S.a,{className:"infoCard"},r.a.createElement(H.a,{title:this.props.doc.title,subheader:r.a.createElement("div",{className:"subhead"},this.props.doc.date&&r.a.createElement("h4",null,"Project Timeframe: ",this.props.doc.date),this.props.doc.work&&r.a.createElement("h4",{className:this.state.progress},this.props.doc.work))}),r.a.createElement(A.a,{component:"img",className:"infoCardMedia",image:this.state.image}),r.a.createElement(M.a,null,r.a.createElement(z.a,{variant:"body2",color:"textSecondary",component:"p"},this.props.doc.blurb)),r.a.createElement(B.a,null,r.a.createElement(J.a,{onClick:this.handleExpandClick,"aria-expanded":this.state.expanded,"aria-label":"Show more"},this.state.expanded?r.a.createElement(U.a,{style:{color:"#ffffff"}}):r.a.createElement(T.a,{style:{color:"#ffffff"}})),this.props.doc.link&&r.a.createElement(x,{variant:"contained",startIcon:r.a.createElement(W.a,{className:"biolink"}),href:this.props.doc.link,target:"_blank"},"Source Code")),r.a.createElement(R.a,{in:this.state.expanded,timeout:"auto",unmountOnExit:!0},r.a.createElement(M.a,null,this.props.doc.info.map((function(e){return r.a.createElement(z.a,null,e)})))))}}]),a}(n.Component)),V=[{path:"/",Component:O,private:!1},{path:"/profile",Component:function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),n=t.call(this,e),P.getHobbies().then(console.log("Hobbies retrieved from Mongo")),n}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"profilePage"},r.a.createElement("div",{className:"header"},r.a.createElement(v,null)),r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"About Me"),r.a.createElement("p",null,"Here's a little more about my interests and hobbies!"),P.hobbies.map((function(e){return r.a.createElement(K,{doc:e})}))))}}]),a}(n.Component),private:!1},{path:"/experience",Component:function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),n=t.call(this,e),P.getExp().then(console.log("Experience retrieved from Mongo")),n}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"expPage"},r.a.createElement("div",{className:"header"},r.a.createElement(v,null)),r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Work Experience"),r.a.createElement("p",null,"Here's a little bit about any work I have done that I feel would be relevant in the workplace!"),P.exp.map((function(e){return r.a.createElement(K,{doc:e})}))))}}]),a}(n.Component),private:!1},{path:"/projects",Component:function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),n=t.call(this,e),P.getProjects().then(console.log("Projects retrieved from database")),n}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"projectsPage"},r.a.createElement("div",{className:"header"},r.a.createElement(v,null)),r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Side Project Archive"),r.a.createElement("p",null,"Here's some information about a few side projects I've done along the way!"),P.projects.map((function(e){return r.a.createElement(K,{doc:e})}))))}}]),a}(n.Component),private:!1},{path:"/manage",Component:function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(u.a)(this,a),t.call(this,e)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"expPage"},r.a.createElement("div",{className:"header"},r.a.createElement(v,null)),r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Database Management Dashboard")))}}]),a}(n.Component),private:!0}],_=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},V.map((function(e){return e.private?r.a.createElement(m,{exact:!0,path:e.path,component:e.Component}):r.a.createElement(l.b,{exact:!0,path:e.path,component:e.Component})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=a(58);c.a.render(r.a.createElement(Q.a,{domain:"dev-j3ai5m4d.us.auth0.com",clientId:"ms7HTvXoZF3Q1LKkSJmoO6apcNcJACSV",redirectUri:window.location.origin},r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.acd1729a.chunk.js.map