(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/female.ae10377b.svg"},function(e,t,a){e.exports=a.p+"static/media/male.1c57bf04.svg"},function(e,t,a){e.exports=a.p+"static/media/mask.8b58d9ac.svg"},function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),c=a.n(s),i=(a(15),a(16),a(1)),o=a(2),l=a(3),m=a(4),p=(a(17),a(7)),u=a.n(p),f=a(8),d=a.n(f),h=a(9),N=a.n(h),g=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).getIcon=function(){return"female"===e.props.gender?u.a:"male"===e.props.gender?d.a:N.a},e.getLinktoCall=function(){return"tel:"+e.props.phone},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.firstName,a=e.lastName,n=e.phone;return r.a.createElement("div",{className:"contact__block"},r.a.createElement("img",{src:this.getIcon(),alt:"gender icon",className:"gender__img"}),r.a.createElement("div",{className:"contact__info-inner"},r.a.createElement("p",{className:"first__name"},"\u0406\u043c'\u044f: ",t),r.a.createElement("p",{className:"last__name"},"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435: ",a),r.a.createElement("a",{href:this.getLinktoCall(),className:"link__to-phone"},n)))}}]),a}(r.a.Component),v=(a(18),function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={contacts:n.props.contacts,term:""},n}return Object(o.a)(a,[{key:"searchHandler",value:function(e){this.setState({term:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state.contacts.filter((function(t){return-1!==t.lastName.toLowerCase().indexOf(e.state.term.toLowerCase())||-1!==t.firstName.toLowerCase().indexOf(e.state.term.toLowerCase())||-1!==t.phone.indexOf(e.state.term)}));return r.a.createElement("div",{className:"hw__inner"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:"Search",onChange:this.searchHandler.bind(this),value:this.state.term})),r.a.createElement("ul",{className:"contacts__list"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(g,e))}))))}}]),a}(r.a.Component)),E=[{id:1,firstName:"\u0411\u0430\u0440\u043d\u0435\u0439",lastName:"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u043a\u0438\u0439",phone:"+380956319521",gender:"male"},{id:2,firstName:"\u0420\u043e\u0431\u0438\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u043a\u0430\u044f",phone:"+380931460123",gender:"female"},{id:3,firstName:"\u0410\u043d\u043e\u043c\u043d\u044b\u0439",lastName:"\u0410\u043d\u043e\u043d\u0438\u043c\u0443\u0441",phone:"+3806666666",gender:""},{id:4,firstName:"\u041b\u0438\u043b\u0438\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",phone:"+380504691254",gender:"female"},{id:5,firstName:"\u041c\u0430\u0440\u0448\u044d\u043d",lastName:"\u042d\u0440\u0438\u043a\u0441\u043e\u043d\u044f\u043d",phone:"+380739432123",gender:"male"},{id:6,firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u044d\u0441",phone:"+380956319520",gender:"male"}];var _=function(){return r.a.createElement(v,{contacts:E})};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.16e24cc1.chunk.js.map