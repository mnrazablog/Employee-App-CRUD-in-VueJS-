(function(e){function t(t){for(var r,i,s=t[0],l=t[1],c=t[2],p=0,m=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Employee-App-CRUD-in-VueJS-/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"336a":function(e,t,n){"use strict";var r=n("ec48"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"small-container",attrs:{id:"app"}},[n("h1",[e._v("Employee")]),n("employee-form",{on:{"add:employee":e.addEmployee}}),n("employee-table",{attrs:{employees:e.employees},on:{"delete:employee":e.deleteEmployee,"edit:employee":e.editEmployee}})],1)},o=[],i=(n("99af"),n("4de4"),n("d81d"),n("d3b7"),n("2909")),s=(n("96cf"),n("1da1")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"employee-table"}},[e.employees.length<1?n("p",{staticClass:"empty-table"},[e._v(" No employees ")]):n("table",[e._m(0),n("tbody",e._l(e.employees,(function(t){return n("tr",{key:t.id},[e.editing===t.id?n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"employee.name"}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(n){n.target.composing||e.$set(t,"name",n.target.value)}}})]):n("td",[e._v(e._s(t.name))]),e.editing===t.id?n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"employee.email"}],attrs:{type:"text"},domProps:{value:t.email},on:{input:function(n){n.target.composing||e.$set(t,"email",n.target.value)}}})]):n("td",[e._v(e._s(t.email))]),e.editing===t.id?n("td",[n("button",{on:{click:function(n){return e.editEmployee(t)}}},[n("i",{staticClass:"fa fa-floppy-o fa-2x",attrs:{"aria-hidden":"true"}})]),n("button",{staticClass:"muted-button",on:{click:function(n){return e.cancelEdit(t)}}},[n("i",{staticClass:"fa fa-undo fa-2x",attrs:{"aria-hidden":"true"}})])]):n("td",[n("button",{on:{click:function(n){return e.editMode(t)}}},[n("i",{staticClass:"fa fa-pencil-square-o fa-2x",attrs:{"aria-hidden":"true"}})]),n("button",{staticClass:"del",on:{click:function(n){return e.$emit("delete:employee",t.id)}}},[n("i",{staticClass:"fa fa-trash fa-2x",attrs:{"aria-hidden":"true"}})])])])})),0)])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("Name")]),n("th",[e._v("Email")]),n("th",[e._v("Actions")])])])}],u=(n("b0c0"),{name:"employee-table",props:{employees:Array},data:function(){return{editing:null}},methods:{editMode:function(e){this.cachedEmployee=Object.assign({},e),this.editing=e.id},cancelEdit:function(e){Object.assign(e,this.cachedEmployee),this.editing=null},editEmployee:function(e){""!==e.name&&""!==e.email&&(this.$emit("edit:employee",e.id,e),this.editing=null)}}}),p=u,m=(n("6480"),n("2877")),d=Object(m["a"])(p,l,c,!1,null,"0d42b51f",null),f=d.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"employee-form"}},[n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("label",[e._v("Employee name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.name,expression:"employee.name"}],ref:"first",class:{"has-error":e.submitting&&e.invalidName},attrs:{type:"text"},domProps:{value:e.employee.name},on:{focus:e.clearStatus,keypress:e.clearStatus,input:function(t){t.target.composing||e.$set(e.employee,"name",t.target.value)}}}),n("label",[e._v("Employee Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.email,expression:"employee.email"}],class:{"has-error":e.submitting&&e.invalidEmail},attrs:{type:"text"},domProps:{value:e.employee.email},on:{focus:e.clearStatus,input:function(t){t.target.composing||e.$set(e.employee,"email",t.target.value)}}}),e.error&&e.submitting?n("p",{staticClass:"error-message"},[e._v("❗Please fill out all required fields")]):e._e(),e.success?n("p",{staticClass:"success-message"},[e._v("✅ Employee successfully added")]):e._e(),e._m(0)])])},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",[n("i",{staticClass:"fa fa-plus-square",attrs:{"aria-hidden":"true"}}),e._v(" Add Employee")])}],v={name:"employee-form",data:function(){return{error:!1,submitting:!1,success:!1,employee:{name:"",email:""}}},computed:{invalidName:function(){return""===this.employee.name},invalidEmail:function(){return""===this.employee.email}},methods:{handleSubmit:function(){this.clearStatus(),this.submitting=!0,this.invalidName||this.invalidEmail?this.error=!0:(this.$emit("add:employee",this.employee),this.$refs.first.focus(),this.employee={name:"",email:""},this.success=!0,this.error=!1,this.submitting=!1)},clearStatus:function(){this.success=!1,this.error=!1}}},b=v,g=(n("336a"),Object(m["a"])(b,h,y,!1,null,"ae5d5184",null)),x=g.exports,E={name:"App",components:{EmployeeTable:f,EmployeeForm:x},data:function(){return{employees:[]}},mounted:function(){this.getEmployees()},methods:{getEmployees:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,e.employees=r,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},addEmployee:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://jsonplaceholder.typicode.com/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:return r=n.sent,n.next=6,r.json();case 6:a=n.sent,t.employees=[].concat(Object(i["a"])(t.employees),[a]),n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))()},editEmployee:function(e,t){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("https://jsonplaceholder.typicode.com/users/".concat(e),{method:"PUT",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:return a=r.sent,r.next=6,a.json();case 6:o=r.sent,n.employees=n.employees.map((function(t){return t.id===e?o:t})),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),console.error(r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteEmployee:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://jsonplaceholder.typicode.com/users/".concat(e),{method:"DELETE"});case 3:t.employees=t.employees.filter((function(t){return t.id!==e})),n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](0),console.error(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()}}},_=E,j=(n("034f"),Object(m["a"])(_,a,o,!1,null,null,null)),w=j.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(w)}}).$mount("#app")},6480:function(e,t,n){"use strict";var r=n("8a51"),a=n.n(r);a.a},"85ec":function(e,t,n){},"8a51":function(e,t,n){},ec48:function(e,t,n){}});
//# sourceMappingURL=app.0e3cca02.js.map