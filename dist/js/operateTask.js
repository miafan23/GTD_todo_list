/*!GTD Tool 2015-06-27
* created by fiona23
*/
define(["util","init","defaults","todoData"],function(a,b,c,d){var e=window.localStorage;return operateTask=function(){function f(a){if(/2\d{3}\/((0?[13578]|1[012])\/(0?[1-9]|[12][0-9]|3[01])|(0?[469]|11)\/(0?[1-9]|[12][0-9]|3[01])|0?2\/(0?[1-9]|[12][0-9]))$/.test(a)){console.log("a");var b=a.split("/"),c=parseInt(b[0]),d=parseInt(b[1])-1,e=parseInt(b[2]);return c%4==0&&c%400==0||1!=d||29!=e?!0:!1}return!1}function g(b){function d(a){e.id===c.addTask?(a[0].value="",a[0].removeAttribute("disabled")):e.id===c.editTask?a[0].removeAttribute("disabled"):"cancle"===e.id?a[0].setAttribute("disabled","disabled"):"sure"===e.id&&a[0].setAttribute("disabled","disabled")}b=b||window.event;var e=b.srcElement?b.srcElement:b.target,f=a("#"+c.taskName),g=a("#"+c.datepicker),h=a("#"+c.taskDescription),i=[f,g,h];a.each(i,d)}function h(b){var c,d;"edit"===b?(c="inline-block",d="none"):"save"===b&&(d="inline-block",c="none"),a("#sure")[0].style.display=c,a("#cancle")[0].style.display=c,a("#complete")[0].style.display=d,a("#edit")[0].style.display=d}return{addTask:function(i){h("edit"),g(i),a.on("#"+c.sure,"click",function(i){console.log("a");var j=a("#"+c.taskName)[0].value,k=a("#"+c.datepicker)[0].value,l=a("#"+c.taskDescription)[0].value,m=a(".active")[0],n=m.className.split(" ")[0];if(!(j&&k&&l))return alert("信息填写不全"),!1;if(f(k)){var o=(new Date).getTime(),p={id:o,code:"1",title:j,date:k,description:l,className:n};d[o]=p,console.log(d),e.setItem("todoData",JSON.stringify(d)),console.log(JSON.parse(e.getItem("todoData"))),b.showTaskList()}else alert("日期格式错误，请按照YYYY/MM/DD格式填写");h("save"),g(i),a.un("#"+c.sure,"click")})},editTask:function(f){g(f),h("edit"),a.on("#"+c.sure,"click",function(){var f=a("#"+c.taskName)[0].className,g=a("#"+c.taskName)[0].value,i=a("#"+c.datepicker)[0].value,j=a("#"+c.taskDescription)[0].value;d[f].title=g,d[f].date=i,d[f].description=j,e.setItem("todoData",JSON.stringify(d)),b.showTaskList(),b.showTaskDetail(),h("save")}),a.un("#"+c.sure,"click")},taskComplete:function(){var f=a("#"+c.taskName)[0].className;d[f].code="2",e.setItem("todoData",JSON.stringify(d)),b.showTaskList()},cancleEditTask:function(b){h("save"),g(b);var e=a("#"+c.taskName).className;a("#"+c.taskName)[0].value=d[e].title,a("#"+c.datepicker)[0].value=d[e].date,a("#"+c.taskDescription)[0].value=d[e].description},chooseCode:function(b){var d=b||window.event;target=d.srcElement?d.srcElement:d.target;for(var e=a(".codes",a("#codes-line")[0]).length-1;e>=0;e--)a(".codes",a("#codes-line")[0]).eq(e).removeClass("active");a(target).addClass("active");var f=new RegExp(c.pending),g=new RegExp(c.completed);f.test(target.id)?(a("#pending")[0].style.display="block",a("#completed")[0].style.display="none",a("#all")[0].style.display="none"):g.test(target.id)?(a("#completed")[0].style.display="block",a("#pending")[0].style.display="none",a("#all")[0].style.display="none"):/all/.test(target.id)?(a("#"+c.pending)[0].style.display="none",a("#"+c.completed)[0].style.display="none",a("#all")[0].style.display="block"):(a("#"+c.pending)[0].style.display="none",a("#"+c.completed)[0].style.display="none",a("#all")[0].style.display="block")}}}()});