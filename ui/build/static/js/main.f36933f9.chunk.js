(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(18).concat([function(e,t,a){},,,,,,,,function(e,t,a){e.exports=a(56)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/qover-logo.fd0919f1.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/valid.36845401.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/background-travel.f24f6400.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),s=(a(31),a(22)),o=a(10),i=a(3),m=a(4),u=a(6),d=a(5),h=a(7),E=(a(32),function(e){var t=e.label,a=e.type;return r.a.createElement("div",{className:"edit-text"},r.a.createElement("input",{type:a,required:!0}),r.a.createElement("span",{className:"highlight"}),r.a.createElement("span",{className:"bar"}),r.a.createElement("label",null,t))}),p=(a(33),function(e){var t=e.label;return r.a.createElement("div",{className:"checkbox"},r.a.createElement("input",{type:"checkbox",name:"checkbox"}),r.a.createElement("label",{htmlFor:"checkbox"},t))}),b=(a(18),function(e){return r.a.createElement("div",{className:"action btn "+e.theme},e.children?e.children:e.label)}),v=(a(34),Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_USERNAME:"Qover",REACT_APP_PASSWORD:"Ninja"})),f=(v.USERNAME,v.PASSWORD,function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).state={},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"login gradient"},r.a.createElement("div",{className:"nav-bar"},r.a.createElement("div",{className:"action"})),r.a.createElement("div",{className:"content"},r.a.createElement("img",{src:a(35),alt:"qover logo"}),r.a.createElement("form",{className:"card shadow"},r.a.createElement("div",{className:"card-content"},r.a.createElement("h3",null,"Welcome at Qover"),r.a.createElement(E,{label:"Email",type:"text"}),r.a.createElement(E,{label:"Password",type:"password"}),r.a.createElement("div",{className:"account-actions"},r.a.createElement(p,{label:"Remember me"}),r.a.createElement("a",{className:"forgotten-password"},"Forgot your password?")),r.a.createElement(b,{label:"Sign into your account",theme:"primary"}))),r.a.createElement(b,{label:"Don't have an account? Ask access",theme:"outline"})),r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"line"}),r.a.createElement("p",null,"\xa9 Qover 2017")))}}]),t}(n.Component)),g=(a(36),function(e){var t=e.children;return r.a.createElement("div",{className:"col"},t)}),N=(a(37),function(e){var t=e.children;return r.a.createElement("div",{className:"row"},t)}),y=(a(38),function(e){return r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox",checked:e.checked,onChange:e.onChange}),r.a.createElement("span",{className:"slider round"}))}),C=(a(39),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.theme;return r.a.createElement("div",{className:"card "+(e||"")},this.props.children)}}]),t}(n.Component)),O=(a(40),function(e){return r.a.createElement("div",{className:"action btn selectable-button "+(e.selected?"selected":"unselected"),onClick:e.onClick},e.selected&&r.a.createElement("img",{width:"16px",src:a(41),alt:"plan selected"}),r.a.createElement("span",null),e.selected?"Plan selected":"Choose this plan")}),A=(a(42),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).formatCurrency=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=e.toLocaleString("de-DE",{currency:"EUR",style:"currency",minimumFractionDigits:a?2:0});return t?n:n.replace("\u20ac","")},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isMonthlySelected,a=e.selected,n=e.plan,l=e.onClick;return r.a.createElement(C,{theme:a?"aqua":"white"},r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,n.title),r.a.createElement("div",{className:"selected-price-showcase"},r.a.createElement("h1",null,this.formatCurrency(t?n.annualCost/12:n.annualCost,!1,!0),r.a.createElement("sup",null,"\u20ac")),r.a.createElement("p",null,t?"MONTHLY":"YEARLY"," INCL. TAXES")),r.a.createElement("div",{className:"benefits-list"},r.a.createElement("h3",null,r.a.createElement("strong",null,"Maximum duration travel")," of ",r.a.createElement("strong",null,n.travelDurationDays," days")),r.a.createElement("h3",null,r.a.createElement("strong",null,"Medical expenses reimbursement")," up to ",r.a.createElement("strong",null,this.formatCurrency(n.medicalReimbursement))),r.a.createElement("h3",null,r.a.createElement("strong",null,"Personal assistance abroad")," up to ",r.a.createElement("strong",null,this.formatCurrency(n.personalAssistanceAbroad))),r.a.createElement("h3",null,r.a.createElement("strong",null,"Travel assistance abroad")," up to ",r.a.createElement("strong",null,this.formatCurrency(n.travelAssistanceAbroad)),r.a.createElement("br",null),"per insured per travel"),r.a.createElement("h3",null,r.a.createElement("strong",null,"Coverage duration: ",n.duration.length," ",n.duration.unit))),r.a.createElement(O,{selected:a,onClick:l})))}}]),t}(n.PureComponent)),j=[{title:"Global",annualCost:78.3,travelDurationDays:90,medicalReimbursement:1e6,personalAssistanceAbroad:5e3,travelAssistanceAbroad:1e3,duration:{length:1,unit:"year"}},{title:"Universe",annualCost:114.71,travelDurationDays:180,medicalReimbursement:3e6,personalAssistanceAbroad:1e4,travelAssistanceAbroad:2500,duration:{length:1,unit:"year"}}],k=(a(43),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).onSelectPlan=function(t){e.setState({selectedIndex:t})},e.onSwitchChange=function(){var t=e.state.isMonthlySelected;e.setState({isMonthlySelected:!t})},e.state={isMonthlySelected:!1,selectedIndex:0},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.selectedIndex,l=t.isMonthlySelected;return r.a.createElement("div",{className:"plans"},r.a.createElement("img",{className:"skewed-background",alt:"qover background",src:a(44)}),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"heading"},"Select a plan"),r.a.createElement("div",{className:"payment-frequency"},r.a.createElement("h3",{className:"switch"},"PAY MONTHLY"),r.a.createElement(y,{checked:!l,onChange:this.onSwitchChange}),r.a.createElement("h3",{className:"switch"},"PAY YEARLY")),r.a.createElement(N,null,j.map(function(t,a){return r.a.createElement(g,null,r.a.createElement(A,{plan:t,selected:a===n,isMonthlySelected:l,onClick:function(){return e.onSelectPlan(a)}}))})),r.a.createElement("div",{className:"link-container"},r.a.createElement("a",{className:"link"},"Show me the full comparison table"))))}}]),t}(n.Component)),S=function(e){return r.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)},w=(a(45),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).onClick=function(){e.setState({redirecting:!0})},e.state={redirecting:!1},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"page-not-found"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",null,"Hmm... This page doesn't seem to exist ",r.a.createElement(S,{symbol:"\ud83e\udd14"})))))}}]),t}(n.Component)),P=(a(46),["Audi","BMW","Porsche"]),x=(a(47),function(e){var t=e.fieldName,a=e.label,n=e.type,l=e.descriptor,c=e.error,s=e.onChange;return r.a.createElement("div",{className:"text-field "+t},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{className:t,type:n,name:t,onChange:s,required:!0}),l&&r.a.createElement("span",null,r.a.createElement("p",null,l)),c&&r.a.createElement("h5",{className:"error"},c))}),R=(a(48),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).onAgeChange=function(t){e.setState({driverAge:t.target.value})},e.onCarBrandChange=function(e){},e.onPurchasePriceChange=function(t){var a=t.target.value;e.setState({purchasePrice:a})},e.state={errors:{},driverAge:null,carBrand:null,purchasePrice:null},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"quote gradient"},r.a.createElement(C,null,r.a.createElement("form",{className:"quote-content"},r.a.createElement(x,{fieldName:"driver-age",label:"Age of the Driver",type:"number",onChange:this.onAgeChange}),r.a.createElement("div",{className:"car-brand"},r.a.createElement("label",{htmlFor:"car-brand"},"Car"),r.a.createElement("select",{className:"car-brand",name:"car-brand",required:!0},P.map(function(e,t){return r.a.createElement("option",{key:t,value:e.toLowerCase()},e)}))),r.a.createElement(x,{fieldName:"purchase-price",label:"Purchase Price",type:"number",descriptor:"\u20ac",error:e.error,onChange:this.onPurchasePriceChange}),r.a.createElement(b,{label:"Get a price",theme:"aqua"}))))}}]),t}(n.Component));var D=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/login",component:f}),r.a.createElement(o.b,{path:"/quote",component:R}),r.a.createElement(o.b,{path:"/plans",component:k}),r.a.createElement(o.b,{path:"/404",component:w}),r.a.createElement(o.a,{to:"/404"}))))},M=a(25),q=a.n(M);a(53),q.a.load({google:{families:["Roboto","Open Sans","sans-serif"]}}),c.a.render(r.a.createElement(D,null),document.getElementById("root"))}]),[[26,1,2]]]);
//# sourceMappingURL=main.f36933f9.chunk.js.map