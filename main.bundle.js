!function(e){function t(t){for(var r,a,u=t[0],l=t[1],c=t[2],f=0,d=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);d.length;)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=l;i.push([106,1]),n()}({106:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(107),o=n(214),i=new URLSearchParams(window.location.search),a=r.Themes.darkGold;"light"==i.get("theme")&&(a=r.Themes.lightNew);var u,l,c;l=1e6,c=function(){h()},o.createProgressiveTraceGenerator().setNumberOfPoints(l+1).generate().toPromise().then((function(e){u=e,c()}));var s=document.getElementById("chart-container"),f=r.lightningChart().ChartXY({theme:a,container:s}).setTitleFillStyle(r.emptyFill).setPadding({left:0,bottom:0,right:30,top:10});s.style.width="0";var d=f.getDefaultAxisX().setAnimationScroll(void 0),g=f.getDefaultAxisY().setAnimationScroll(void 0),p=f.addLineSeries({dataPattern:{pattern:"ProgressiveX"}}),h=function(){requestAnimationFrame((function(){s.style.width="100%",y.setText("Rendering ...");var e=window.performance.now();p.add(u),requestAnimationFrame((function(){var t=window.performance.now()-e;y.setText((t/1e3).toFixed(3)+" seconds")}))}))},m=f.addUIElement(r.UILayoutBuilders.Column.setBackground(r.UIBackgrounds.Rectangle),{x:d,y:g}).setOrigin(r.UIOrigins.LeftTop).setDraggingMode(r.UIDraggingModes.notDraggable),v=function(){return m.setPosition({x:d.getInterval().start,y:g.getInterval().end})};v(),d.onScaleChange(v),g.onScaleChange(v),m.addElement(r.UIElementBuilders.TextBox).setText("Rendering speed "+1..toFixed(1)+" million data points:");var y=m.addElement(r.UIElementBuilders.TextBox).setTextFont((function(e){return e.setWeight("bold")}));m.addElement(r.UIElementBuilders.ButtonBox).setText("Render again").setMargin({left:10}).onSwitch((function(e,t){t&&(p.clear(),y.setText("Rendering ..."),h())}))},116:function(e,t){},118:function(e,t){},128:function(e,t){},130:function(e,t){},157:function(e,t){},159:function(e,t){},160:function(e,t){},165:function(e,t){},167:function(e,t){},174:function(e,t){},176:function(e,t){},194:function(e,t){},196:function(e,t){},208:function(e,t){},211:function(e,t){}});