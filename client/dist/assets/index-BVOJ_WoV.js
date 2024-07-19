const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Thoughts-DeJ2cPl7.js","assets/index-Bfm6BA1g.js","assets/index-BfY8uxN2.css","assets/index-CWXHrlhI.js","assets/Music-Bo7ftHHG.js","assets/NewSection-CMuVumxj.js","assets/CommentSection-DYIZvz9C.js"])))=>i.map(i=>d[i]);
import{r as b,R as D,c as oe,a as Ui,j as l,u as Ie,b as Gi,L as bt,g as qi,_ as xt}from"./index-Bfm6BA1g.js";function Qi(){const[t,e]=b.useState(document.visibilityState==="visible");return b.useEffect(()=>{const r=()=>{e(document.visibilityState==="visible")};return document.addEventListener("visibilitychange",r),()=>{document.removeEventListener("visibilitychange",r)}},[]),t}var H=function(){return H=Object.assign||function(e){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},H.apply(this,arguments)};function Ce(t,e,r){if(r||arguments.length===2)for(var n=0,i=e.length,o;n<i;n++)(o||!(n in e))&&(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))}var C="-ms-",ke="-moz-",j="-webkit-",jn="comm",wt="rule",lr="decl",Yi="@import",kn="@keyframes",Ji="@layer",Cn=Math.abs,ur=String.fromCharCode,Kt=Object.assign;function Xi(t,e){return L(t,0)^45?(((e<<2^L(t,0))<<2^L(t,1))<<2^L(t,2))<<2^L(t,3):0}function Pn(t){return t.trim()}function Z(t,e){return(t=e.exec(t))?t[0]:t}function x(t,e,r){return t.replace(e,r)}function rt(t,e,r){return t.indexOf(e,r)}function L(t,e){return t.charCodeAt(e)|0}function ve(t,e,r){return t.slice(e,r)}function Q(t){return t.length}function In(t){return t.length}function je(t,e){return e.push(t),t}function Ki(t,e){return t.map(e).join("")}function Ir(t,e){return t.filter(function(r){return!Z(r,e)})}var _t=1,ye=1,An=0,G=0,R=0,_e="";function St(t,e,r,n,i,o,a,s){return{value:t,root:e,parent:r,type:n,props:i,children:o,line:_t,column:ye,length:a,return:"",siblings:s}}function ie(t,e){return Kt(St("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function he(t){for(;t.root;)t=ie(t.root,{children:[t]});je(t,t.siblings)}function Zi(){return R}function eo(){return R=G>0?L(_e,--G):0,ye--,R===10&&(ye=1,_t--),R}function q(){return R=G<An?L(_e,G++):0,ye++,R===10&&(ye=1,_t++),R}function ue(){return L(_e,G)}function nt(){return G}function $t(t,e){return ve(_e,t,e)}function Zt(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function to(t){return _t=ye=1,An=Q(_e=t),G=0,[]}function ro(t){return _e="",t}function Bt(t){return Pn($t(G-1,er(t===91?t+2:t===40?t+1:t)))}function no(t){for(;(R=ue())&&R<33;)q();return Zt(t)>2||Zt(R)>3?"":" "}function io(t,e){for(;--e&&q()&&!(R<48||R>102||R>57&&R<65||R>70&&R<97););return $t(t,nt()+(e<6&&ue()==32&&q()==32))}function er(t){for(;q();)switch(R){case t:return G;case 34:case 39:t!==34&&t!==39&&er(R);break;case 40:t===41&&er(t);break;case 92:q();break}return G}function oo(t,e){for(;q()&&t+R!==57;)if(t+R===84&&ue()===47)break;return"/*"+$t(e,G-1)+"*"+ur(t===47?t:q())}function ao(t){for(;!Zt(ue());)q();return $t(t,G)}function so(t){return ro(it("",null,null,null,[""],t=to(t),0,[0],t))}function it(t,e,r,n,i,o,a,s,c){for(var u=0,d=0,h=a,v=0,y=0,_=0,O=1,k=1,w=1,T=0,$="",S=i,E=o,p=n,g=$;k;)switch(_=T,T=q()){case 40:if(_!=108&&L(g,h-1)==58){rt(g+=x(Bt(T),"&","&\f"),"&\f",Cn(u?s[u-1]:0))!=-1&&(w=-1);break}case 34:case 39:case 91:g+=Bt(T);break;case 9:case 10:case 13:case 32:g+=no(_);break;case 92:g+=io(nt()-1,7);continue;case 47:switch(ue()){case 42:case 47:je(co(oo(q(),nt()),e,r,c),c);break;default:g+="/"}break;case 123*O:s[u++]=Q(g)*w;case 125*O:case 59:case 0:switch(T){case 0:case 125:k=0;case 59+d:w==-1&&(g=x(g,/\f/g,"")),y>0&&Q(g)-h&&je(y>32?Mr(g+";",n,r,h-1,c):Mr(x(g," ","")+";",n,r,h-2,c),c);break;case 59:g+=";";default:if(je(p=Ar(g,e,r,u,d,i,s,$,S=[],E=[],h,o),o),T===123)if(d===0)it(g,e,p,p,S,o,h,s,E);else switch(v===99&&L(g,3)===110?100:v){case 100:case 108:case 109:case 115:it(t,p,p,n&&je(Ar(t,p,p,0,0,i,s,$,i,S=[],h,E),E),i,E,h,s,n?S:E);break;default:it(g,p,p,p,[""],E,0,s,E)}}u=d=y=0,O=w=1,$=g="",h=a;break;case 58:h=1+Q(g),y=_;default:if(O<1){if(T==123)--O;else if(T==125&&O++==0&&eo()==125)continue}switch(g+=ur(T),T*O){case 38:w=d>0?1:(g+="\f",-1);break;case 44:s[u++]=(Q(g)-1)*w,w=1;break;case 64:ue()===45&&(g+=Bt(q())),v=ue(),d=h=Q($=g+=ao(nt())),T++;break;case 45:_===45&&Q(g)==2&&(O=0)}}return o}function Ar(t,e,r,n,i,o,a,s,c,u,d,h){for(var v=i-1,y=i===0?o:[""],_=In(y),O=0,k=0,w=0;O<n;++O)for(var T=0,$=ve(t,v+1,v=Cn(k=a[O])),S=t;T<_;++T)(S=Pn(k>0?y[T]+" "+$:x($,/&\f/g,y[T])))&&(c[w++]=S);return St(t,e,r,i===0?wt:s,c,u,d,h)}function co(t,e,r,n){return St(t,e,r,jn,ur(Zi()),ve(t,2,-2),0,n)}function Mr(t,e,r,n,i){return St(t,e,r,lr,ve(t,0,n),ve(t,n+1,-1),n,i)}function Mn(t,e,r){switch(Xi(t,e)){case 5103:return j+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return j+t+t;case 4789:return ke+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return j+t+ke+t+C+t+t;case 5936:switch(L(t,e+11)){case 114:return j+t+C+x(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return j+t+C+x(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return j+t+C+x(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return j+t+C+t+t;case 6165:return j+t+C+"flex-"+t+t;case 5187:return j+t+x(t,/(\w+).+(:[^]+)/,j+"box-$1$2"+C+"flex-$1$2")+t;case 5443:return j+t+C+"flex-item-"+x(t,/flex-|-self/g,"")+(Z(t,/flex-|baseline/)?"":C+"grid-row-"+x(t,/flex-|-self/g,""))+t;case 4675:return j+t+C+"flex-line-pack"+x(t,/align-content|flex-|-self/g,"")+t;case 5548:return j+t+C+x(t,"shrink","negative")+t;case 5292:return j+t+C+x(t,"basis","preferred-size")+t;case 6060:return j+"box-"+x(t,"-grow","")+j+t+C+x(t,"grow","positive")+t;case 4554:return j+x(t,/([^-])(transform)/g,"$1"+j+"$2")+t;case 6187:return x(x(x(t,/(zoom-|grab)/,j+"$1"),/(image-set)/,j+"$1"),t,"")+t;case 5495:case 3959:return x(t,/(image-set\([^]*)/,j+"$1$`$1");case 4968:return x(x(t,/(.+:)(flex-)?(.*)/,j+"box-pack:$3"+C+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+j+t+t;case 4200:if(!Z(t,/flex-|baseline/))return C+"grid-column-align"+ve(t,e)+t;break;case 2592:case 3360:return C+x(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(n,i){return e=i,Z(n.props,/grid-\w+-end/)})?~rt(t+(r=r[e].value),"span",0)?t:C+x(t,"-start","")+t+C+"grid-row-span:"+(~rt(r,"span",0)?Z(r,/\d+/):+Z(r,/\d+/)-+Z(t,/\d+/))+";":C+x(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(n){return Z(n.props,/grid-\w+-start/)})?t:C+x(x(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return x(t,/(.+)-inline(.+)/,j+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Q(t)-1-e>6)switch(L(t,e+1)){case 109:if(L(t,e+4)!==45)break;case 102:return x(t,/(.+:)(.+)-([^]+)/,"$1"+j+"$2-$3$1"+ke+(L(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~rt(t,"stretch",0)?Mn(x(t,"stretch","fill-available"),e,r)+t:t}break;case 5152:case 5920:return x(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,i,o,a,s,c,u){return C+i+":"+o+u+(a?C+i+"-span:"+(s?c:+c-+o)+u:"")+t});case 4949:if(L(t,e+6)===121)return x(t,":",":"+j)+t;break;case 6444:switch(L(t,L(t,14)===45?18:11)){case 120:return x(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+j+(L(t,14)===45?"inline-":"")+"box$3$1"+j+"$2$3$1"+C+"$2box$3")+t;case 100:return x(t,":",":"+C)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return x(t,"scroll-","scroll-snap-")+t}return t}function ct(t,e){for(var r="",n=0;n<t.length;n++)r+=e(t[n],n,t,e)||"";return r}function lo(t,e,r,n){switch(t.type){case Ji:if(t.children.length)break;case Yi:case lr:return t.return=t.return||t.value;case jn:return"";case kn:return t.return=t.value+"{"+ct(t.children,n)+"}";case wt:if(!Q(t.value=t.props.join(",")))return""}return Q(r=ct(t.children,n))?t.return=t.value+"{"+r+"}":""}function uo(t){var e=In(t);return function(r,n,i,o){for(var a="",s=0;s<e;s++)a+=t[s](r,n,i,o)||"";return a}}function fo(t){return function(e){e.root||(e=e.return)&&t(e)}}function po(t,e,r,n){if(t.length>-1&&!t.return)switch(t.type){case lr:t.return=Mn(t.value,t.length,r);return;case kn:return ct([ie(t,{value:x(t.value,"@","@"+j)})],n);case wt:if(t.length)return Ki(r=t.props,function(i){switch(Z(i,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":he(ie(t,{props:[x(i,/:(read-\w+)/,":"+ke+"$1")]})),he(ie(t,{props:[i]})),Kt(t,{props:Ir(r,n)});break;case"::placeholder":he(ie(t,{props:[x(i,/:(plac\w+)/,":"+j+"input-$1")]})),he(ie(t,{props:[x(i,/:(plac\w+)/,":"+ke+"$1")]})),he(ie(t,{props:[x(i,/:(plac\w+)/,C+"input-$1")]})),he(ie(t,{props:[i]})),Kt(t,{props:Ir(r,n)});break}return""})}}var ho={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},V={},be=typeof process<"u"&&V!==void 0&&(V.REACT_APP_SC_ATTR||V.SC_ATTR)||"data-styled",Rn="active",zn="data-styled-version",Ot="6.1.12",dr=`/*!sc*/
`,lt=typeof window<"u"&&"HTMLElement"in window,mo=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&V!==void 0&&V.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&V.REACT_APP_SC_DISABLE_SPEEDY!==""?V.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&V.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&V!==void 0&&V.SC_DISABLE_SPEEDY!==void 0&&V.SC_DISABLE_SPEEDY!==""&&V.SC_DISABLE_SPEEDY!=="false"&&V.SC_DISABLE_SPEEDY),Tt=Object.freeze([]),xe=Object.freeze({});function go(t,e,r){return r===void 0&&(r=xe),t.theme!==r.theme&&t.theme||e||r.theme}var Ln=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),vo=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yo=/(^-|-$)/g;function Rr(t){return t.replace(vo,"-").replace(yo,"")}var bo=/(a)(d)/gi,Ye=52,zr=function(t){return String.fromCharCode(t+(t>25?39:97))};function tr(t){var e,r="";for(e=Math.abs(t);e>Ye;e=e/Ye|0)r=zr(e%Ye)+r;return(zr(e%Ye)+r).replace(bo,"$1-$2")}var Vt,Nn=5381,ge=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},Dn=function(t){return ge(Nn,t)};function Fn(t){return tr(Dn(t)>>>0)}function xo(t){return t.displayName||t.name||"Component"}function Wt(t){return typeof t=="string"&&!0}var Hn=typeof Symbol=="function"&&Symbol.for,Bn=Hn?Symbol.for("react.memo"):60115,wo=Hn?Symbol.for("react.forward_ref"):60112,_o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},So={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Vn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$o=((Vt={})[wo]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vt[Bn]=Vn,Vt);function Lr(t){return("type"in(e=t)&&e.type.$$typeof)===Bn?Vn:"$$typeof"in t?$o[t.$$typeof]:_o;var e}var Oo=Object.defineProperty,To=Object.getOwnPropertyNames,Nr=Object.getOwnPropertySymbols,Eo=Object.getOwnPropertyDescriptor,jo=Object.getPrototypeOf,Dr=Object.prototype;function Wn(t,e,r){if(typeof e!="string"){if(Dr){var n=jo(e);n&&n!==Dr&&Wn(t,n,r)}var i=To(e);Nr&&(i=i.concat(Nr(e)));for(var o=Lr(t),a=Lr(e),s=0;s<i.length;++s){var c=i[s];if(!(c in So||r&&r[c]||a&&c in a||o&&c in o)){var u=Eo(e,c);try{Oo(t,c,u)}catch{}}}}return t}function we(t){return typeof t=="function"}function fr(t){return typeof t=="object"&&"styledComponentId"in t}function le(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function rr(t,e){if(t.length===0)return"";for(var r=t[0],n=1;n<t.length;n++)r+=t[n];return r}function Pe(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function nr(t,e,r){if(r===void 0&&(r=!1),!r&&!Pe(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=nr(t[n],e[n]);else if(Pe(e))for(var n in e)t[n]=nr(t[n],e[n]);return t}function pr(t,e){Object.defineProperty(t,"toString",{value:e})}function Ae(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var ko=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var r=0,n=0;n<e;n++)r+=this.groupSizes[n];return r},t.prototype.insertRules=function(e,r){if(e>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,o=i;e>=o;)if((o<<=1)<0)throw Ae(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(e+1),c=(a=0,r.length);a<c;a++)this.tag.insertRule(s,r[a])&&(this.groupSizes[e]++,s++)},t.prototype.clearGroup=function(e){if(e<this.length){var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r;this.groupSizes[e]=0;for(var o=n;o<i;o++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var r="";if(e>=this.length||this.groupSizes[e]===0)return r;for(var n=this.groupSizes[e],i=this.indexOfGroup(e),o=i+n,a=i;a<o;a++)r+="".concat(this.tag.getRule(a)).concat(dr);return r},t}(),ot=new Map,ut=new Map,at=1,Je=function(t){if(ot.has(t))return ot.get(t);for(;ut.has(at);)at++;var e=at++;return ot.set(t,e),ut.set(e,t),e},Co=function(t,e){at=e+1,ot.set(t,e),ut.set(e,t)},Po="style[".concat(be,"][").concat(zn,'="').concat(Ot,'"]'),Io=new RegExp("^".concat(be,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ao=function(t,e,r){for(var n,i=r.split(","),o=0,a=i.length;o<a;o++)(n=i[o])&&t.registerName(e,n)},Mo=function(t,e){for(var r,n=((r=e.textContent)!==null&&r!==void 0?r:"").split(dr),i=[],o=0,a=n.length;o<a;o++){var s=n[o].trim();if(s){var c=s.match(Io);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(Co(d,u),Ao(t,d,c[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}},Fr=function(t){for(var e=document.querySelectorAll(Po),r=0,n=e.length;r<n;r++){var i=e[r];i&&i.getAttribute(be)!==Rn&&(Mo(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function Ro(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Un=function(t){var e=document.head,r=t||e,n=document.createElement("style"),i=function(s){var c=Array.from(s.querySelectorAll("style[".concat(be,"]")));return c[c.length-1]}(r),o=i!==void 0?i.nextSibling:null;n.setAttribute(be,Rn),n.setAttribute(zn,Ot);var a=Ro();return a&&n.setAttribute("nonce",a),r.insertBefore(n,o),n},zo=function(){function t(e){this.element=Un(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,i=0,o=n.length;i<o;i++){var a=n[i];if(a.ownerNode===r)return a}throw Ae(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""},t}(),Lo=function(){function t(e){this.element=Un(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,r){if(e<=this.length&&e>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),No=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,r){return e<=this.length&&(this.rules.splice(e,0,r),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Hr=lt,Do={isServer:!lt,useCSSOMInjection:!mo},Gn=function(){function t(e,r,n){e===void 0&&(e=xe),r===void 0&&(r={});var i=this;this.options=H(H({},Do),e),this.gs=r,this.names=new Map(n),this.server=!!e.isServer,!this.server&&lt&&Hr&&(Hr=!1,Fr(this)),pr(this,function(){return function(o){for(var a=o.getTag(),s=a.length,c="",u=function(h){var v=function(w){return ut.get(w)}(h);if(v===void 0)return"continue";var y=o.names.get(v),_=a.getGroup(h);if(y===void 0||!y.size||_.length===0)return"continue";var O="".concat(be,".g").concat(h,'[id="').concat(v,'"]'),k="";y!==void 0&&y.forEach(function(w){w.length>0&&(k+="".concat(w,","))}),c+="".concat(_).concat(O,'{content:"').concat(k,'"}').concat(dr)},d=0;d<s;d++)u(d);return c}(i)})}return t.registerId=function(e){return Je(e)},t.prototype.rehydrate=function(){!this.server&&lt&&Fr(this)},t.prototype.reconstructWithOptions=function(e,r){return r===void 0&&(r=!0),new t(H(H({},this.options),e),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(r){var n=r.useCSSOMInjection,i=r.target;return r.isServer?new No(i):n?new zo(i):new Lo(i)}(this.options),new ko(e)));var e},t.prototype.hasNameForId=function(e,r){return this.names.has(e)&&this.names.get(e).has(r)},t.prototype.registerName=function(e,r){if(Je(e),this.names.has(e))this.names.get(e).add(r);else{var n=new Set;n.add(r),this.names.set(e,n)}},t.prototype.insertRules=function(e,r,n){this.registerName(e,r),this.getTag().insertRules(Je(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Je(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Fo=/&/g,Ho=/^\s*\/\/.*$/gm;function qn(t,e){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(e," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(e," ")),r.props=r.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=qn(r.children,e)),r})}function Bo(t){var e,r,n,i=xe,o=i.options,a=o===void 0?xe:o,s=i.plugins,c=s===void 0?Tt:s,u=function(v,y,_){return _.startsWith(r)&&_.endsWith(r)&&_.replaceAll(r,"").length>0?".".concat(e):v},d=c.slice();d.push(function(v){v.type===wt&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(Fo,r).replace(n,u))}),a.prefix&&d.push(po),d.push(lo);var h=function(v,y,_,O){y===void 0&&(y=""),_===void 0&&(_=""),O===void 0&&(O="&"),e=O,r=y,n=new RegExp("\\".concat(r,"\\b"),"g");var k=v.replace(Ho,""),w=so(_||y?"".concat(_," ").concat(y," { ").concat(k," }"):k);a.namespace&&(w=qn(w,a.namespace));var T=[];return ct(w,uo(d.concat(fo(function($){return T.push($)})))),T};return h.hash=c.length?c.reduce(function(v,y){return y.name||Ae(15),ge(v,y.name)},Nn).toString():"",h}var Vo=new Gn,ir=Bo(),Qn=D.createContext({shouldForwardProp:void 0,styleSheet:Vo,stylis:ir});Qn.Consumer;D.createContext(void 0);function Br(){return b.useContext(Qn)}var Yn=function(){function t(e,r){var n=this;this.inject=function(i,o){o===void 0&&(o=ir);var a=n.name+o.hash;i.hasNameForId(n.id,a)||i.insertRules(n.id,a,o(n.rules,a,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=r,pr(this,function(){throw Ae(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=ir),this.name+e.hash},t}(),Wo=function(t){return t>="A"&&t<="Z"};function Vr(t){for(var e="",r=0;r<t.length;r++){var n=t[r];if(r===1&&n==="-"&&t[0]==="-")return t;Wo(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var Jn=function(t){return t==null||t===!1||t===""},Xn=function(t){var e,r,n=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!Jn(o)&&(Array.isArray(o)&&o.isCss||we(o)?n.push("".concat(Vr(i),":"),o,";"):Pe(o)?n.push.apply(n,Ce(Ce(["".concat(i," {")],Xn(o),!1),["}"],!1)):n.push("".concat(Vr(i),": ").concat((e=i,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in ho||e.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function de(t,e,r,n){if(Jn(t))return[];if(fr(t))return[".".concat(t.styledComponentId)];if(we(t)){if(!we(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return de(i,e,r,n)}var o;return t instanceof Yn?r?(t.inject(r,n),[t.getName(n)]):[t]:Pe(t)?Xn(t):Array.isArray(t)?Array.prototype.concat.apply(Tt,t.map(function(a){return de(a,e,r,n)})):[t.toString()]}function Uo(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(we(r)&&!fr(r))return!1}return!0}var Go=Dn(Ot),qo=function(){function t(e,r,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Uo(e),this.componentId=r,this.baseHash=ge(Go,r),this.baseStyle=n,Gn.registerId(r)}return t.prototype.generateAndInjectStyles=function(e,r,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))i=le(i,this.staticRulesId);else{var o=rr(de(this.rules,e,r,n)),a=tr(ge(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,a)){var s=n(o,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,s)}i=le(i,a),this.staticRulesId=a}else{for(var c=ge(this.baseHash,n.hash),u="",d=0;d<this.rules.length;d++){var h=this.rules[d];if(typeof h=="string")u+=h;else if(h){var v=rr(de(h,e,r,n));c=ge(c,v+d),u+=v}}if(u){var y=tr(c>>>0);r.hasNameForId(this.componentId,y)||r.insertRules(this.componentId,y,n(u,".".concat(y),void 0,this.componentId)),i=le(i,y)}}return i},t}(),Kn=D.createContext(void 0);Kn.Consumer;var Ut={};function Qo(t,e,r){var n=fr(t),i=t,o=!Wt(t),a=e.attrs,s=a===void 0?Tt:a,c=e.componentId,u=c===void 0?function(S,E){var p=typeof S!="string"?"sc":Rr(S);Ut[p]=(Ut[p]||0)+1;var g="".concat(p,"-").concat(Fn(Ot+p+Ut[p]));return E?"".concat(E,"-").concat(g):g}(e.displayName,e.parentComponentId):c,d=e.displayName,h=d===void 0?function(S){return Wt(S)?"styled.".concat(S):"Styled(".concat(xo(S),")")}(t):d,v=e.displayName&&e.componentId?"".concat(Rr(e.displayName),"-").concat(e.componentId):e.componentId||u,y=n&&i.attrs?i.attrs.concat(s).filter(Boolean):s,_=e.shouldForwardProp;if(n&&i.shouldForwardProp){var O=i.shouldForwardProp;if(e.shouldForwardProp){var k=e.shouldForwardProp;_=function(S,E){return O(S,E)&&k(S,E)}}else _=O}var w=new qo(r,v,n?i.componentStyle:void 0);function T(S,E){return function(p,g,z){var B=p.attrs,pe=p.componentStyle,Be=p.defaultProps,Ve=p.foldedComponentIds,Lt=p.styledComponentId,We=p.target,Nt=D.useContext(Kn),Wi=Br(),Dt=p.shouldForwardProp||Wi.shouldForwardProp,Cr=go(g,Nt,Be)||xe,K=function(Ge,Oe,qe){for(var Te,ae=H(H({},Oe),{className:void 0,theme:qe}),Ht=0;Ht<Ge.length;Ht+=1){var Qe=we(Te=Ge[Ht])?Te(ae):Te;for(var te in Qe)ae[te]=te==="className"?le(ae[te],Qe[te]):te==="style"?H(H({},ae[te]),Qe[te]):Qe[te]}return Oe.className&&(ae.className=le(ae.className,Oe.className)),ae}(B,g,Cr),Ue=K.as||We,$e={};for(var ee in K)K[ee]===void 0||ee[0]==="$"||ee==="as"||ee==="theme"&&K.theme===Cr||(ee==="forwardedAs"?$e.as=K.forwardedAs:Dt&&!Dt(ee,Ue)||($e[ee]=K[ee]));var Pr=function(Ge,Oe){var qe=Br(),Te=Ge.generateAndInjectStyles(Oe,qe.styleSheet,qe.stylis);return Te}(pe,K),Ft=le(Ve,Lt);return Pr&&(Ft+=" "+Pr),K.className&&(Ft+=" "+K.className),$e[Wt(Ue)&&!Ln.has(Ue)?"class":"className"]=Ft,$e.ref=z,b.createElement(Ue,$e)}($,S,E)}T.displayName=h;var $=D.forwardRef(T);return $.attrs=y,$.componentStyle=w,$.displayName=h,$.shouldForwardProp=_,$.foldedComponentIds=n?le(i.foldedComponentIds,i.styledComponentId):"",$.styledComponentId=v,$.target=n?i.target:t,Object.defineProperty($,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=n?function(E){for(var p=[],g=1;g<arguments.length;g++)p[g-1]=arguments[g];for(var z=0,B=p;z<B.length;z++)nr(E,B[z],!0);return E}({},i.defaultProps,S):S}}),pr($,function(){return".".concat($.styledComponentId)}),o&&Wn($,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),$}function Wr(t,e){for(var r=[t[0]],n=0,i=e.length;n<i;n+=1)r.push(e[n],t[n+1]);return r}var Ur=function(t){return Object.assign(t,{isCss:!0})};function N(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(we(t)||Pe(t))return Ur(de(Wr(Tt,Ce([t],e,!0))));var n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?de(n):Ur(de(Wr(n,e)))}function or(t,e,r){if(r===void 0&&(r=xe),!e)throw Ae(1,e);var n=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return t(e,r,N.apply(void 0,Ce([i],o,!1)))};return n.attrs=function(i){return or(t,e,H(H({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},n.withConfig=function(i){return or(t,e,H(H({},r),i))},n}var Zn=function(t){return or(Qo,t)},f=Zn;Ln.forEach(function(t){f[t]=Zn(t)});function hr(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=rr(N.apply(void 0,Ce([t],e,!1))),i=Fn(n);return new Yn(i,n)}const me={largeDesktop:1500,desktop:1100,largeTablet:1024,tablet:"768px",phone:"576px",smallPhone:"480px"},m={largeDesktop:(...t)=>N`
    @media (max-width: ${me.largeDesktop}) {
      ${N(...t)}
    }
  `,desktop:(...t)=>N`
    @media (max-width: ${me.desktop}) {
      ${N(...t)}
    }
  `,largeTablet:(...t)=>N`
    @media (max-width: ${me.largeTablet}) {
      ${N(...t)}
    }
  `,tablet:(...t)=>N`
    @media (max-width: ${me.tablet}) {
      ${N(...t)}
    }
  `,phone:(...t)=>N`
    @media (max-width: ${me.phone}) {
      ${N(...t)}
    }
  `,smallPhone:(...t)=>N`
    @media (max-width: ${me.smallPhone}) {
      ${N(...t)}
    }
  `};var M={},mr={},Me={},Re={},ei="Expected a function",Gr=NaN,Yo="[object Symbol]",Jo=/^\s+|\s+$/g,Xo=/^[-+]0x[0-9a-f]+$/i,Ko=/^0b[01]+$/i,Zo=/^0o[0-7]+$/i,ea=parseInt,ta=typeof oe=="object"&&oe&&oe.Object===Object&&oe,ra=typeof self=="object"&&self&&self.Object===Object&&self,na=ta||ra||Function("return this")(),ia=Object.prototype,oa=ia.toString,aa=Math.max,sa=Math.min,Gt=function(){return na.Date.now()};function ca(t,e,r){var n,i,o,a,s,c,u=0,d=!1,h=!1,v=!0;if(typeof t!="function")throw new TypeError(ei);e=qr(e)||0,dt(r)&&(d=!!r.leading,h="maxWait"in r,o=h?aa(qr(r.maxWait)||0,e):o,v="trailing"in r?!!r.trailing:v);function y(p){var g=n,z=i;return n=i=void 0,u=p,a=t.apply(z,g),a}function _(p){return u=p,s=setTimeout(w,e),d?y(p):a}function O(p){var g=p-c,z=p-u,B=e-g;return h?sa(B,o-z):B}function k(p){var g=p-c,z=p-u;return c===void 0||g>=e||g<0||h&&z>=o}function w(){var p=Gt();if(k(p))return T(p);s=setTimeout(w,O(p))}function T(p){return s=void 0,v&&n?y(p):(n=i=void 0,a)}function $(){s!==void 0&&clearTimeout(s),u=0,n=c=i=s=void 0}function S(){return s===void 0?a:T(Gt())}function E(){var p=Gt(),g=k(p);if(n=arguments,i=this,c=p,g){if(s===void 0)return _(c);if(h)return s=setTimeout(w,e),y(c)}return s===void 0&&(s=setTimeout(w,e)),a}return E.cancel=$,E.flush=S,E}function la(t,e,r){var n=!0,i=!0;if(typeof t!="function")throw new TypeError(ei);return dt(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),ca(t,e,{leading:n,maxWait:e,trailing:i})}function dt(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function ua(t){return!!t&&typeof t=="object"}function da(t){return typeof t=="symbol"||ua(t)&&oa.call(t)==Yo}function qr(t){if(typeof t=="number")return t;if(da(t))return Gr;if(dt(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=dt(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Jo,"");var r=Ko.test(t);return r||Zo.test(t)?ea(t.slice(2),r?2:8):Xo.test(t)?Gr:+t}var fa=la,ze={};Object.defineProperty(ze,"__esModule",{value:!0});ze.addPassiveEventListener=function(e,r,n){var i=n.name;i||(i=r,console.warn("Listener must be a named function.")),st.has(r)||st.set(r,new Set);var o=st.get(r);if(!o.has(i)){var a=function(){var s=!1;try{var c=Object.defineProperty({},"passive",{get:function(){s=!0}});window.addEventListener("test",null,c)}catch{}return s}();e.addEventListener(r,n,a?{passive:!0}:!1),o.add(i)}};ze.removePassiveEventListener=function(e,r,n){e.removeEventListener(r,n),st.get(r).delete(n.name||r)};var st=new Map;Object.defineProperty(Re,"__esModule",{value:!0});var pa=fa,ha=ga(pa),ma=ze;function ga(t){return t&&t.__esModule?t:{default:t}}var va=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,ha.default)(e,r)},I={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,r){if(e){var n=va(function(i){I.scrollHandler(e)},r);I.scrollSpyContainers.push(e),(0,ma.addPassiveEventListener)(e,"scroll",n)}},isMounted:function(e){return I.scrollSpyContainers.indexOf(e)!==-1},currentPositionX:function(e){if(e===document){var r=window.pageYOffset!==void 0,n=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:n?document.documentElement.scrollLeft:document.body.scrollLeft}else return e.scrollLeft},currentPositionY:function(e){if(e===document){var r=window.pageXOffset!==void 0,n=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop}else return e.scrollTop},scrollHandler:function(e){var r=I.scrollSpyContainers[I.scrollSpyContainers.indexOf(e)].spyCallbacks||[];r.forEach(function(n){return n(I.currentPositionX(e),I.currentPositionY(e))})},addStateHandler:function(e){I.spySetState.push(e)},addSpyHandler:function(e,r){var n=I.scrollSpyContainers[I.scrollSpyContainers.indexOf(r)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(e),e(I.currentPositionX(r),I.currentPositionY(r))},updateStates:function(){I.spySetState.forEach(function(e){return e()})},unmount:function(e,r){I.scrollSpyContainers.forEach(function(n){return n.spyCallbacks&&n.spyCallbacks.length&&n.spyCallbacks.indexOf(r)>-1&&n.spyCallbacks.splice(n.spyCallbacks.indexOf(r),1)}),I.spySetState&&I.spySetState.length&&I.spySetState.indexOf(e)>-1&&I.spySetState.splice(I.spySetState.indexOf(e),1),document.removeEventListener("scroll",I.scrollHandler)},update:function(){return I.scrollSpyContainers.forEach(function(e){return I.scrollHandler(e)})}};Re.default=I;var Se={},Le={};Object.defineProperty(Le,"__esModule",{value:!0});var ya=function(e,r){var n=e.indexOf("#")===0?e.substring(1):e,i=n?"#"+n:"",o=window&&window.location,a=i?o.pathname+o.search+i:o.pathname+o.search;r?history.pushState(history.state,"",a):history.replaceState(history.state,"",a)},ba=function(){return window.location.hash.replace(/^#/,"")},xa=function(e){return function(r){return e.contains?e!=r&&e.contains(r):!!(e.compareDocumentPosition(r)&16)}},wa=function(e){return getComputedStyle(e).position!=="static"},qt=function(e,r){for(var n=e.offsetTop,i=e.offsetParent;i&&!r(i);)n+=i.offsetTop,i=i.offsetParent;return{offsetTop:n,offsetParent:i}},_a=function(e,r,n){if(n)return e===document?r.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(e).position!=="static"?r.offsetLeft:r.offsetLeft-e.offsetLeft;if(e===document)return r.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(wa(e)){if(r.offsetParent!==e){var i=function(d){return d===e||d===document},o=qt(r,i),a=o.offsetTop,s=o.offsetParent;if(s!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return a}return r.offsetTop}if(r.offsetParent===e.offsetParent)return r.offsetTop-e.offsetTop;var c=function(d){return d===document};return qt(r,c).offsetTop-qt(e,c).offsetTop};Le.default={updateHash:ya,getHash:ba,filterElementInContainer:xa,scrollOffset:_a};var Et={},gr={};Object.defineProperty(gr,"__esModule",{value:!0});gr.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var vr={};Object.defineProperty(vr,"__esModule",{value:!0});var Sa=ze,$a=["mousedown","mousewheel","touchmove","keydown"];vr.default={subscribe:function(e){return typeof document<"u"&&$a.forEach(function(r){return(0,Sa.addPassiveEventListener)(document,r,e)})}};var Ne={};Object.defineProperty(Ne,"__esModule",{value:!0});var ar={registered:{},scrollEvent:{register:function(e,r){ar.registered[e]=r},remove:function(e){ar.registered[e]=null}}};Ne.default=ar;Object.defineProperty(Et,"__esModule",{value:!0});var Oa=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Ta=Le;jt(Ta);var Ea=gr,Qr=jt(Ea),ja=vr,ka=jt(ja),Ca=Ne,Y=jt(Ca);function jt(t){return t&&t.__esModule?t:{default:t}}var ti=function(e){return Qr.default[e.smooth]||Qr.default.defaultEasing},Pa=function(e){return typeof e=="function"?e:function(){return e}},Ia=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},sr=function(){return Ia()||function(t,e,r){window.setTimeout(t,r||1e3/60,new Date().getTime())}}(),ri=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},ni=function(e){var r=e.data.containerElement;if(r&&r!==document&&r!==document.body)return r.scrollLeft;var n=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft},ii=function(e){var r=e.data.containerElement;if(r&&r!==document&&r!==document.body)return r.scrollTop;var n=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop},Aa=function(e){var r=e.data.containerElement;if(r&&r!==document&&r!==document.body)return r.scrollWidth-r.offsetWidth;var n=document.body,i=document.documentElement;return Math.max(n.scrollWidth,n.offsetWidth,i.clientWidth,i.scrollWidth,i.offsetWidth)},Ma=function(e){var r=e.data.containerElement;if(r&&r!==document&&r!==document.body)return r.scrollHeight-r.offsetHeight;var n=document.body,i=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)},Ra=function t(e,r,n){var i=r.data;if(!r.ignoreCancelEvents&&i.cancel){Y.default.registered.end&&Y.default.registered.end(i.to,i.target,i.currentPositionY);return}if(i.delta=Math.round(i.targetPosition-i.startPosition),i.start===null&&(i.start=n),i.progress=n-i.start,i.percent=i.progress>=i.duration?1:e(i.progress/i.duration),i.currentPosition=i.startPosition+Math.ceil(i.delta*i.percent),i.containerElement&&i.containerElement!==document&&i.containerElement!==document.body?r.horizontal?i.containerElement.scrollLeft=i.currentPosition:i.containerElement.scrollTop=i.currentPosition:r.horizontal?window.scrollTo(i.currentPosition,0):window.scrollTo(0,i.currentPosition),i.percent<1){var o=t.bind(null,e,r);sr.call(window,o);return}Y.default.registered.end&&Y.default.registered.end(i.to,i.target,i.currentPosition)},yr=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},De=function(e,r,n,i){r.data=r.data||ri(),window.clearTimeout(r.data.delayTimeout);var o=function(){r.data.cancel=!0};if(ka.default.subscribe(o),yr(r),r.data.start=null,r.data.cancel=!1,r.data.startPosition=r.horizontal?ni(r):ii(r),r.data.targetPosition=r.absolute?e:e+r.data.startPosition,r.data.startPosition===r.data.targetPosition){Y.default.registered.end&&Y.default.registered.end(r.data.to,r.data.target,r.data.currentPosition);return}r.data.delta=Math.round(r.data.targetPosition-r.data.startPosition),r.data.duration=Pa(r.duration)(r.data.delta),r.data.duration=isNaN(parseFloat(r.data.duration))?1e3:parseFloat(r.data.duration),r.data.to=n,r.data.target=i;var a=ti(r),s=Ra.bind(null,a,r);if(r&&r.delay>0){r.data.delayTimeout=window.setTimeout(function(){Y.default.registered.begin&&Y.default.registered.begin(r.data.to,r.data.target),sr.call(window,s)},r.delay);return}Y.default.registered.begin&&Y.default.registered.begin(r.data.to,r.data.target),sr.call(window,s)},kt=function(e){return e=Oa({},e),e.data=e.data||ri(),e.absolute=!0,e},za=function(e){De(0,kt(e))},La=function(e,r){De(e,kt(r))},Na=function(e){e=kt(e),yr(e),De(e.horizontal?Aa(e):Ma(e),e)},Da=function(e,r){r=kt(r),yr(r);var n=r.horizontal?ni(r):ii(r);De(e+n,r)};Et.default={animateTopScroll:De,getAnimationType:ti,scrollToTop:za,scrollToBottom:Na,scrollTo:La,scrollMore:Da};Object.defineProperty(Se,"__esModule",{value:!0});var Fa=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Ha=Le,Ba=br(Ha),Va=Et,Wa=br(Va),Ua=Ne,Xe=br(Ua);function br(t){return t&&t.__esModule?t:{default:t}}var Ke={},Yr=void 0;Se.default={unmount:function(){Ke={}},register:function(e,r){Ke[e]=r},unregister:function(e){delete Ke[e]},get:function(e){return Ke[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return Yr=e},getActiveLink:function(){return Yr},scrollTo:function(e,r){var n=this.get(e);if(!n){console.warn("target Element not found");return}r=Fa({},r,{absolute:!1});var i=r.containerId,o=r.container,a=void 0;i?a=document.getElementById(i):o&&o.nodeType?a=o:a=document,r.absolute=!0;var s=r.horizontal,c=Ba.default.scrollOffset(a,n,s)+(r.offset||0);if(!r.smooth){Xe.default.registered.begin&&Xe.default.registered.begin(e,n),a===document?r.horizontal?window.scrollTo(c,0):window.scrollTo(0,c):a.scrollTop=c,Xe.default.registered.end&&Xe.default.registered.end(e,n);return}Wa.default.animateTopScroll(c,r,e,n)}};var oi={exports:{}},Ga="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",qa=Ga,Qa=qa;function ai(){}function si(){}si.resetWarningCache=ai;var Ya=function(){function t(n,i,o,a,s,c){if(c!==Qa){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:si,resetWarningCache:ai};return r.PropTypes=r,r};oi.exports=Ya();var Ct=oi.exports,Pt={};Object.defineProperty(Pt,"__esModule",{value:!0});var Ja=Le,Qt=Xa(Ja);function Xa(t){return t&&t.__esModule?t:{default:t}}var Ka={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,r){this.containers[e]=r},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,r=this.getHash();r?window.setTimeout(function(){e.scrollTo(r,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,r){var n=this.scroller,i=n.get(e);if(i&&(r||e!==n.getActiveLink())){var o=this.containers[e]||document;n.scrollTo(e,{container:o})}},getHash:function(){return Qt.default.getHash()},changeHash:function(e,r){this.isInitialized()&&Qt.default.getHash()!==e&&Qt.default.updateHash(e,r)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};Pt.default=Ka;Object.defineProperty(Me,"__esModule",{value:!0});var Ze=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Za=function(){function t(e,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),es=b,Jr=Fe(es),ts=Re,et=Fe(ts),rs=Se,ns=Fe(rs),is=Ct,P=Fe(is),os=Pt,re=Fe(os);function Fe(t){return t&&t.__esModule?t:{default:t}}function as(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ss(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function cs(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Xr={to:P.default.string.isRequired,containerId:P.default.string,container:P.default.object,activeClass:P.default.string,activeStyle:P.default.object,spy:P.default.bool,horizontal:P.default.bool,smooth:P.default.oneOfType([P.default.bool,P.default.string]),offset:P.default.number,delay:P.default.number,isDynamic:P.default.bool,onClick:P.default.func,duration:P.default.oneOfType([P.default.number,P.default.func]),absolute:P.default.bool,onSetActive:P.default.func,onSetInactive:P.default.func,ignoreCancelEvents:P.default.bool,hashSpy:P.default.bool,saveHashHistory:P.default.bool,spyThrottle:P.default.number};Me.default=function(t,e){var r=e||ns.default,n=function(o){cs(a,o);function a(s){as(this,a);var c=ss(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,s));return i.call(c),c.state={active:!1},c}return Za(a,[{key:"getScrollSpyContainer",value:function(){var c=this.props.containerId,u=this.props.container;return c&&!u?document.getElementById(c):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var c=this.getScrollSpyContainer();et.default.isMounted(c)||et.default.mount(c,this.props.spyThrottle),this.props.hashSpy&&(re.default.isMounted()||re.default.mount(r),re.default.mapContainer(this.props.to,c)),et.default.addSpyHandler(this.spyHandler,c),this.setState({container:c})}}},{key:"componentWillUnmount",value:function(){et.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var c="";this.state&&this.state.active?c=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():c=this.props.className;var u={};this.state&&this.state.active?u=Ze({},this.props.style,this.props.activeStyle):u=Ze({},this.props.style);var d=Ze({},this.props);for(var h in Xr)d.hasOwnProperty(h)&&delete d[h];return d.className=c,d.style=u,d.onClick=this.handleClick,Jr.default.createElement(t,d)}}]),a}(Jr.default.PureComponent),i=function(){var a=this;this.scrollTo=function(s,c){r.scrollTo(s,Ze({},a.state,c))},this.handleClick=function(s){a.props.onClick&&a.props.onClick(s),s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault(),a.scrollTo(a.props.to,a.props)},this.spyHandler=function(s,c){var u=a.getScrollSpyContainer();if(!(re.default.isMounted()&&!re.default.isInitialized())){var d=a.props.horizontal,h=a.props.to,v=null,y=void 0,_=void 0;if(d){var O=0,k=0,w=0;if(u.getBoundingClientRect){var T=u.getBoundingClientRect();w=T.left}if(!v||a.props.isDynamic){if(v=r.get(h),!v)return;var $=v.getBoundingClientRect();O=$.left-w+s,k=O+$.width}var S=s-a.props.offset;y=S>=Math.floor(O)&&S<Math.floor(k),_=S<Math.floor(O)||S>=Math.floor(k)}else{var E=0,p=0,g=0;if(u.getBoundingClientRect){var z=u.getBoundingClientRect();g=z.top}if(!v||a.props.isDynamic){if(v=r.get(h),!v)return;var B=v.getBoundingClientRect();E=B.top-g+c,p=E+B.height}var pe=c-a.props.offset;y=pe>=Math.floor(E)&&pe<Math.floor(p),_=pe<Math.floor(E)||pe>=Math.floor(p)}var Be=r.getActiveLink();if(_){if(h===Be&&r.setActiveLink(void 0),a.props.hashSpy&&re.default.getHash()===h){var Ve=a.props.saveHashHistory,Lt=Ve===void 0?!1:Ve;re.default.changeHash("",Lt)}a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive(h,v))}if(y&&(Be!==h||a.state.active===!1)){r.setActiveLink(h);var We=a.props.saveHashHistory,Nt=We===void 0?!1:We;a.props.hashSpy&&re.default.changeHash(h,Nt),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(h,v))}}}};return n.propTypes=Xr,n.defaultProps={offset:0},n};Object.defineProperty(mr,"__esModule",{value:!0});var ls=b,Kr=ci(ls),us=Me,ds=ci(us);function ci(t){return t&&t.__esModule?t:{default:t}}function fs(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Zr(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function ps(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var hs=function(t){ps(e,t);function e(){var r,n,i,o;fs(this,e);for(var a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];return o=(n=(i=Zr(this,(r=e.__proto__||Object.getPrototypeOf(e)).call.apply(r,[this].concat(s))),i),i.render=function(){return Kr.default.createElement("a",i.props,i.props.children)},n),Zr(i,o)}return e}(Kr.default.Component);mr.default=(0,ds.default)(hs);var xr={};Object.defineProperty(xr,"__esModule",{value:!0});var ms=function(){function t(e,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),gs=b,en=li(gs),vs=Me,ys=li(vs);function li(t){return t&&t.__esModule?t:{default:t}}function bs(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function xs(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function ws(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var _s=function(t){ws(e,t);function e(){return bs(this,e),xs(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return ms(e,[{key:"render",value:function(){return en.default.createElement("button",this.props,this.props.children)}}]),e}(en.default.Component);xr.default=(0,ys.default)(_s);var wr={},It={};Object.defineProperty(It,"__esModule",{value:!0});var Ss=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},$s=function(){function t(e,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),Os=b,tn=At(Os),Ts=Ui;At(Ts);var Es=Se,rn=At(Es),js=Ct,nn=At(js);function At(t){return t&&t.__esModule?t:{default:t}}function ks(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Cs(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Ps(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}It.default=function(t){var e=function(r){Ps(n,r);function n(i){ks(this,n);var o=Cs(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,i));return o.childBindings={domNode:null},o}return $s(n,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;rn.default.unregister(this.props.name)}},{key:"registerElems",value:function(o){rn.default.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return tn.default.createElement(t,Ss({},this.props,{parentBindings:this.childBindings}))}}]),n}(tn.default.Component);return e.propTypes={name:nn.default.string,id:nn.default.string},e};Object.defineProperty(wr,"__esModule",{value:!0});var on=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Is=function(){function t(e,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),As=b,an=_r(As),Ms=It,Rs=_r(Ms),zs=Ct,sn=_r(zs);function _r(t){return t&&t.__esModule?t:{default:t}}function Ls(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ns(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Ds(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var ui=function(t){Ds(e,t);function e(){return Ls(this,e),Ns(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return Is(e,[{key:"render",value:function(){var n=this,i=on({},this.props);return delete i.name,i.parentBindings&&delete i.parentBindings,an.default.createElement("div",on({},i,{ref:function(a){n.props.parentBindings.domNode=a}}),this.props.children)}}]),e}(an.default.Component);ui.propTypes={name:sn.default.string,id:sn.default.string};wr.default=(0,Rs.default)(ui);var Yt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},cn=function(){function t(e,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();function ln(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function un(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function dn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var tt=b,se=Re,Jt=Se,A=Ct,ne=Pt,fn={to:A.string.isRequired,containerId:A.string,container:A.object,activeClass:A.string,spy:A.bool,smooth:A.oneOfType([A.bool,A.string]),offset:A.number,delay:A.number,isDynamic:A.bool,onClick:A.func,duration:A.oneOfType([A.number,A.func]),absolute:A.bool,onSetActive:A.func,onSetInactive:A.func,ignoreCancelEvents:A.bool,hashSpy:A.bool,spyThrottle:A.number},Fs={Scroll:function(e,r){console.warn("Helpers.Scroll is deprecated since v1.7.0");var n=r||Jt,i=function(a){dn(s,a);function s(c){ln(this,s);var u=un(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,c));return o.call(u),u.state={active:!1},u}return cn(s,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,d=this.props.container;return u?document.getElementById(u):d&&d.nodeType?d:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();se.isMounted(u)||se.mount(u,this.props.spyThrottle),this.props.hashSpy&&(ne.isMounted()||ne.mount(n),ne.mapContainer(this.props.to,u)),this.props.spy&&se.addStateHandler(this.stateHandler),se.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){se.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var d=Yt({},this.props);for(var h in fn)d.hasOwnProperty(h)&&delete d[h];return d.className=u,d.onClick=this.handleClick,tt.createElement(e,d)}}]),s}(tt.Component),o=function(){var s=this;this.scrollTo=function(c,u){n.scrollTo(c,Yt({},s.state,u))},this.handleClick=function(c){s.props.onClick&&s.props.onClick(c),c.stopPropagation&&c.stopPropagation(),c.preventDefault&&c.preventDefault(),s.scrollTo(s.props.to,s.props)},this.stateHandler=function(){n.getActiveLink()!==s.props.to&&(s.state!==null&&s.state.active&&s.props.onSetInactive&&s.props.onSetInactive(),s.setState({active:!1}))},this.spyHandler=function(c){var u=s.getScrollSpyContainer();if(!(ne.isMounted()&&!ne.isInitialized())){var d=s.props.to,h=null,v=0,y=0,_=0;if(u.getBoundingClientRect){var O=u.getBoundingClientRect();_=O.top}if(!h||s.props.isDynamic){if(h=n.get(d),!h)return;var k=h.getBoundingClientRect();v=k.top-_+c,y=v+k.height}var w=c-s.props.offset,T=w>=Math.floor(v)&&w<Math.floor(y),$=w<Math.floor(v)||w>=Math.floor(y),S=n.getActiveLink();if($)return d===S&&n.setActiveLink(void 0),s.props.hashSpy&&ne.getHash()===d&&ne.changeHash(),s.props.spy&&s.state.active&&(s.setState({active:!1}),s.props.onSetInactive&&s.props.onSetInactive()),se.updateStates();if(T&&S!==d)return n.setActiveLink(d),s.props.hashSpy&&ne.changeHash(d),s.props.spy&&(s.setState({active:!0}),s.props.onSetActive&&s.props.onSetActive(d)),se.updateStates()}}};return i.propTypes=fn,i.defaultProps={offset:0},i},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var r=function(n){dn(i,n);function i(o){ln(this,i);var a=un(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return a.childBindings={domNode:null},a}return cn(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(a){this.props.name!==a.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Jt.unregister(this.props.name)}},{key:"registerElems",value:function(a){Jt.register(a,this.childBindings.domNode)}},{key:"render",value:function(){return tt.createElement(e,Yt({},this.props,{parentBindings:this.childBindings}))}}]),i}(tt.Component);return r.propTypes={name:A.string,id:A.string},r}},Hs=Fs;Object.defineProperty(M,"__esModule",{value:!0});M.Helpers=M.ScrollElement=M.ScrollLink=Sr=M.animateScroll=M.scrollSpy=M.Events=M.scroller=M.Element=M.Button=He=M.Link=void 0;var Bs=mr,di=X(Bs),Vs=xr,fi=X(Vs),Ws=wr,pi=X(Ws),Us=Se,hi=X(Us),Gs=Ne,mi=X(Gs),qs=Re,gi=X(qs),Qs=Et,vi=X(Qs),Ys=Me,yi=X(Ys),Js=It,bi=X(Js),Xs=Hs,xi=X(Xs);function X(t){return t&&t.__esModule?t:{default:t}}var He=M.Link=di.default;M.Button=fi.default;M.Element=pi.default;M.scroller=hi.default;M.Events=mi.default;M.scrollSpy=gi.default;var Sr=M.animateScroll=vi.default;M.ScrollLink=yi.default;M.ScrollElement=bi.default;M.Helpers=xi.default;M.default={Link:di.default,Button:fi.default,Element:pi.default,scroller:hi.default,Events:mi.default,scrollSpy:gi.default,animateScroll:vi.default,ScrollLink:yi.default,ScrollElement:bi.default,Helpers:xi.default};var wi={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ft=D.createContext&&D.createContext(wi),Ks=["attr","size","title"];function Zs(t,e){if(t==null)return{};var r=ec(t,e),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function ec(t,e){if(t==null)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}function pt(){return pt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},pt.apply(this,arguments)}function pn(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function ht(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?pn(Object(r),!0).forEach(function(n){tc(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):pn(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function tc(t,e,r){return e=rc(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function rc(t){var e=nc(t,"string");return typeof e=="symbol"?e:e+""}function nc(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function _i(t){return t&&t.map((e,r)=>D.createElement(e.tag,ht({key:r},e.attr),_i(e.child)))}function F(t){return e=>D.createElement(ic,pt({attr:ht({},t.attr)},e),_i(t.child))}function ic(t){var e=r=>{var{attr:n,size:i,title:o}=t,a=Zs(t,Ks),s=i||r.size||"1em",c;return r.className&&(c=r.className),t.className&&(c=(c?c+" ":"")+t.className),D.createElement("svg",pt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,a,{className:c,style:ht(ht({color:t.color||r.color},r.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&D.createElement("title",null,o),t.children)};return ft!==void 0?D.createElement(ft.Consumer,null,r=>e(r)):e(wi)}function oc(t){return F({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(t)}function ac(t){return F({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(t)}function sc(t){return F({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M111.4 256.3l5.8 65-5.8 68.3c-.3 2.5-2.2 4.4-4.4 4.4s-4.2-1.9-4.2-4.4l-5.6-68.3 5.6-65c0-2.2 1.9-4.2 4.2-4.2 2.2 0 4.1 2 4.4 4.2zm21.4-45.6c-2.8 0-4.7 2.2-5 5l-5 105.6 5 68.3c.3 2.8 2.2 5 5 5 2.5 0 4.7-2.2 4.7-5l5.8-68.3-5.8-105.6c0-2.8-2.2-5-4.7-5zm25.5-24.1c-3.1 0-5.3 2.2-5.6 5.3l-4.4 130 4.4 67.8c.3 3.1 2.5 5.3 5.6 5.3 2.8 0 5.3-2.2 5.3-5.3l5.3-67.8-5.3-130c0-3.1-2.5-5.3-5.3-5.3zM7.2 283.2c-1.4 0-2.2 1.1-2.5 2.5L0 321.3l4.7 35c.3 1.4 1.1 2.5 2.5 2.5s2.2-1.1 2.5-2.5l5.6-35-5.6-35.6c-.3-1.4-1.1-2.5-2.5-2.5zm23.6-21.9c-1.4 0-2.5 1.1-2.5 2.5l-6.4 57.5 6.4 56.1c0 1.7 1.1 2.8 2.5 2.8s2.5-1.1 2.8-2.5l7.2-56.4-7.2-57.5c-.3-1.4-1.4-2.5-2.8-2.5zm25.3-11.4c-1.7 0-3.1 1.4-3.3 3.3L47 321.3l5.8 65.8c.3 1.7 1.7 3.1 3.3 3.1 1.7 0 3.1-1.4 3.1-3.1l6.9-65.8-6.9-68.1c0-1.9-1.4-3.3-3.1-3.3zm25.3-2.2c-1.9 0-3.6 1.4-3.6 3.6l-5.8 70 5.8 67.8c0 2.2 1.7 3.6 3.6 3.6s3.6-1.4 3.9-3.6l6.4-67.8-6.4-70c-.3-2.2-2-3.6-3.9-3.6zm241.4-110.9c-1.1-.8-2.8-1.4-4.2-1.4-2.2 0-4.2.8-5.6 1.9-1.9 1.7-3.1 4.2-3.3 6.7v.8l-3.3 176.7 1.7 32.5 1.7 31.7c.3 4.7 4.2 8.6 8.9 8.6s8.6-3.9 8.6-8.6l3.9-64.2-3.9-177.5c-.4-3-2-5.8-4.5-7.2zm-26.7 15.3c-1.4-.8-2.8-1.4-4.4-1.4s-3.1.6-4.4 1.4c-2.2 1.4-3.6 3.9-3.6 6.7l-.3 1.7-2.8 160.8s0 .3 3.1 65.6v.3c0 1.7.6 3.3 1.7 4.7 1.7 1.9 3.9 3.1 6.4 3.1 2.2 0 4.2-1.1 5.6-2.5 1.7-1.4 2.5-3.3 2.5-5.6l.3-6.7 3.1-58.6-3.3-162.8c-.3-2.8-1.7-5.3-3.9-6.7zm-111.4 22.5c-3.1 0-5.8 2.8-5.8 6.1l-4.4 140.6 4.4 67.2c.3 3.3 2.8 5.8 5.8 5.8 3.3 0 5.8-2.5 6.1-5.8l5-67.2-5-140.6c-.2-3.3-2.7-6.1-6.1-6.1zm376.7 62.8c-10.8 0-21.1 2.2-30.6 6.1-6.4-70.8-65.8-126.4-138.3-126.4-17.8 0-35 3.3-50.3 9.4-6.1 2.2-7.8 4.4-7.8 9.2v249.7c0 5 3.9 8.6 8.6 9.2h218.3c43.3 0 78.6-35 78.6-78.3.1-43.6-35.2-78.9-78.5-78.9zm-296.7-60.3c-4.2 0-7.5 3.3-7.8 7.8l-3.3 136.7 3.3 65.6c.3 4.2 3.6 7.5 7.8 7.5 4.2 0 7.5-3.3 7.5-7.5l3.9-65.6-3.9-136.7c-.3-4.5-3.3-7.8-7.5-7.8zm-53.6-7.8c-3.3 0-6.4 3.1-6.4 6.7l-3.9 145.3 3.9 66.9c.3 3.6 3.1 6.4 6.4 6.4 3.6 0 6.4-2.8 6.7-6.4l4.4-66.9-4.4-145.3c-.3-3.6-3.1-6.7-6.7-6.7zm26.7 3.4c-3.9 0-6.9 3.1-6.9 6.9L227 321.3l3.9 66.4c.3 3.9 3.1 6.9 6.9 6.9s6.9-3.1 6.9-6.9l4.2-66.4-4.2-141.7c0-3.9-3-6.9-6.9-6.9z"},child:[]}]})(t)}function cc(t){return F({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(t)}function Si(t){return F({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM212 140v116h-70.9c-10.7 0-16.1 13-8.5 20.5l114.9 114.3c4.7 4.7 12.2 4.7 16.9 0l114.9-114.3c7.6-7.6 2.2-20.5-8.5-20.5H300V140c0-6.6-5.4-12-12-12h-64c-6.6 0-12 5.4-12 12z"},child:[]}]})(t)}function lc(t){return F({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(t)}function uc(t){return F({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(t)}function $i(t){return F({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(t)}function dc(t){return F({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(t)}function fc(t){return F({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 16h4v4"},child:[]},{tag:"path",attr:{d:"M19.458 11.042c.86 -2.366 .722 -4.58 -.6 -5.9c-2.272 -2.274 -7.185 -1.045 -10.973 2.743c-3.788 3.788 -5.017 8.701 -2.744 10.974c2.227 2.226 6.987 1.093 10.74 -2.515"},child:[]}]})(t)}const pc="700px",hc=N`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  position: relative;
  z-index: 2;
`,mc=f.div`
  ${hc}
  ${({$customStyle:t})=>t}
`,gc=f.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  min-height: 860px;
  z-index: 1;

  ${m.tablet`
    padding: 50px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: auto;
    min-height: 100vh;
  `}

${m.smallPhone`
    padding: 50px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: auto;
    min-height: 100vh;
  `}
`,Oi=f.div`
  position: absolute;
  height: 860px;
  max-height: 860px;
  width: 100%;
  background-image: url(${({$backgroundImageDesktopUrl:t})=>t});
  background-size: cover;
  z-index: 2;

  ${m.tablet`
    background-image: url(${({$backgroundImageTabletUrl:t})=>t});
    background-size: auto 100%;
    background-position: center;
    
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%);
      z-index: 3;
    }
  `}

  ${m.phone`
    background-image: url(${({$backgroundImageSmallMobileUrl:t})=>t});
    background-size: cover;
    background-position: center;
    min-height: 100vh;
  `}

  ${m.smallPhone`
    background-image: url(${({$backgroundImageMobileUrl:t})=>t});
    background-size: cover;
    background-position: center;
    min-height: 100vh;
  `}
`,vc=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  height: auto;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 800;

  ${m.tablet`
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}

${m.smallPhone`
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `}
`;f.div`
  display: flex;
  align-items: center;
  width: 100%;

  ${m.tablet`
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;const Ud=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: ${({$reverse:t})=>t?"row-reverse":"row"};
  gap: 20px;

  ${m.tablet`
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`,yc=f.div`
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 16px;
  letter-spacing: 1.4px;
  text-align: left;

  ${m.tablet`
    margin-top: 0;
    // margin-right: 250px;
    text-align: center;
  `}

  ${m.phone`
    margin-top: 0;
    text-align: center;
  `}

  ${m.smallPhone`
    margin-top: 0;
    text-align: center;
    margin: 0 auto;
  `}
`,Gd=f.div`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  margin-top: 12px;
  text-align: left;

  ${m.tablet`
    margin-top: 0;
    margin-right: 260px;
    text-align: center;
  `}

  ${m.phone`
    margin-top: 0;
    text-align: center;
  `}

  ${m.smallPhone`
    margin-top: 0;
    text-align: center;
  `}
`,qd=f.div`
  width: 100%;
  position: relative;
  margin-right: 18px;

  ${m.tablet`
    max-width: 100%;
    order: 2; // Text on bottom
    margin-left: 40%;
  `}

  ${m.phone`
    order: 2; // Text on bottom
    margin-top: 0;
    margin: 0;
    padding: 0;
  `}

  ${m.smallPhone`
    order: 2; // Text on bottom
    margin-top: 0;
    margin: 0;
    padding: 0;
    gap: 0;
  `}
`,bc=f.h1`
  font-size: ${({$fontSize:t})=>t||"20px"};
  color: ${({$color:t})=>t||"#fff"};
  font-family: ${({$fontFamily:t})=>t||"inherit"};
  ${m.phone`
    font-size: 4rem;
  `}
`,cr=f.p.attrs(({as:t="p"})=>({as:t}))`
  color: ${({$color:t})=>t||"#fff"};
  font-size: ${({$fontSize:t})=>t||"20px"};
  font-weight: ${({$fontWeight:t})=>t||"400"};
  font-family: ${({$fontFamily:t})=>t||"inherit"};
  line-height: ${({$lineHeight:t})=>t||"normal"};
  letter-spacing: ${({$letterSpacing:t})=>t||"normal"};
  text-transform: ${({$textTransform:t})=>t||"none"};
  margin-top: ${({$marginTop:t})=>t||"0"};
  margin-bottom: ${({$marginBottom:t})=>t||"0"};
  margin-right: ${({$marginRight:t})=>t||"0"};
  text-align: ${({$textAlign:t})=>t||"left"};
  position: ${({$position:t})=>t||"relative"};
  max-width: ${({$maxWidth:t})=>t||"none"};

  ${m.tablet`
    font-size: ${({$tabletFontSize:t,$fontSize:e})=>t||e};
    text-align: ${({$tabletTextAlign:t})=>t||"center"};
    margin-right: ${({$tabletMarginRight:t})=>t||"0"};
  `}

  ${m.phone`
    font-size: ${({$phoneFontSize:t,$fontSize:e})=>t||e};
    text-align: center;
  `}

  ${m.smallPhone`
    font-size: ${({$smallPhoneFontSize:t,$fontSize:e})=>t||e};
    text-align: center;
  `}
`,xc=f.h1`
  color: #ac94f4;
  font-size: 44px;
  font-weight: 600;
  text-align: left;

  ${m.tablet`
    font-size: 40px;
    text-align: center;
    // margin-right: 250px;
  `}

  ${m.phone`
    font-size: 32px;
    text-align: center;
  `}
`,Qd=f.div`
  max-width: 455px;
  width: 100%;
  height: 455px;
  position: relative;
  z-index: 1;
  margin-bottom: 16px;

  ${m.tablet`
    width: 100%;
  `}

  ${m.phone`
    order: 1; // Image on top
    margin-bottom: 0;
  `}

  ${m.smallPhone`
    order: 1; // Image on top
    margin-bottom: 0;
  `}
`;f.img`
  width: 455px;
  height: auto;
  position: relative;
  border-radius: 10px;
  border: 2px solid #ac94f4;
  z-index: 10;
`;const wc=f.div`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;

  ${m.tablet`
    font-weight: 500;
    justify-content: center;
    // margin-right: 260px;
  `}

  ${m.phone`
    font-weight: 300;
    justify-content: center;
  `}
`,_c=f(He)`
    border-radius: 50px;
    background: #ac94f4;
    border: 1px solid #010606;
    white-space: nowrap;
    padding: ${({$big:t})=>t?"14px 48px":"12px 30px"};
    color: #010606;
    font-size: ${({$fontBig:t})=>t?"20px":"16px"};
    outline: none;
    border: none;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #010606;
        color: #ac94f4;
        outline: 1px solid #ac94f4;
        border: 1px solid #ac94f4;
    }
`,Yd=f.span`
    display: flex;
    align-items: center;
    margin-left: 8px;
    font-size: 20px;
`,Ti=f.span`
  margin-left: 8px;
  transition: transform 0.3s ease-in-out;
`,Sc=f($i)`
  ${Ti}
`,$c=f(Si)`
  ${Ti}
`,Ei=f(({$hover:t,className:e})=>t?l.jsx(Sc,{className:e}):l.jsx($c,{className:e}))`
  color: ${({$hover:t})=>t?"#ac94f4":"inherit"};
  font-size: 24px; 
  &:hover {
    transform: scale(1.1);
  }
  margin-left: 0.4em;
`,Jd=f.form`
  position: relative;
  z-index: 10;

  ${m.tablet`
    order: 1;
  `}
`,Oc=f.div`
  z-index: 22;
  max-width: ${pc};
  width: 100%;
  margin: 0 auto;
  padding-top: 3rem;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
    margin-top: 150px;
  }
`,Xd=f.textarea`
margin-top: 15px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  resize: vertical;

  ${m.tablet`
    width: 62%;
  `}

${m.phone`
    width: 100%;
  `}  
`;f.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 28px;
`;const mt=f.img`
  position: ${({$position:t})=>t||"absolute"};
  width: ${({$width:t})=>t||"auto"};
  height: ${({$height:t})=>t||"auto"};
  top: ${({$top:t})=>t||"auto"};
  right: ${({$right:t})=>t||"auto"};
  left: ${({$left:t})=>t||"auto"};
  bottom: ${({$bottom:t})=>t||"auto"};
  z-index: ${({$zIndex:t})=>t||"auto"};
  transform: ${({$transform:t})=>t||"none"};
  border-radius: ${({$borderRadius:t})=>t||"0"};
  border: ${({$border:t})=>t||"none"};
  `;f.iframe`
max-width: 455px;
width: 100%;
height: 455px;
position: relative;
z-index: 1;
order: 2;
margin-bottom: 16px;
border-radius: 10px;

${m.largeTablet`
order: 1; 
margin-top: 50px;
`}

${m.tablet`
  width: 100%;
  order: 1;
  margin-bottom: 50px;
`}

${m.smallPhone`
  order: 1;
  width: 95%;
  height: 455px;;
  margin-left: 10px;
`}
`;f.div`
position: absolute;
top: 15%;
left: 2%;
width: 400px;
height: 400px; 
z-index: 2;

${m.tablet`
  width: 200px;
  height: 200px;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
`}

${m.phone`
  width: 200px;
  height: 200px;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`}
`;const Tc=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;f.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  position: absolute;
  top: 400px;
  left: 10px;
  z-index: 20;
`;f(fc)`
  margin-left: 125px;
  font-size: 48px;
`;const Kd=f.div`
  width: 455px;
  height: auto;
  position: relative;
  margin-right: 10px;
  border-radius: 10px;
  border: 2px solid #ac94f4;
  z-index: 10;

  ${m.tablet`
    width: 455px;
    height: auto
  `}

${m.phone`
    width: 100%;
    height: auto
  `}
`;f.div`
  position: relative;
  z-index: 4;
  max-width: 100%;
  height: auto;
  margin: 0 auto;

  ${m.tablet`
    display: none;
  `}
`;const Zd=f.img`
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  background-position: center;
  background-image: url(${({$desktopUrl:t})=>t});
  background-size: cover;

  ${m.phone`
    background-image: url(${({$mobileUrl:t})=>t});
  `}

  ${m.smallPhone`
    background-image: url(${({$smallMobileUrl:t})=>t});
  `}
`,Ec=f.div`
  max-width: 455px;
  width: 100%;
  height: 455px;
  position: relative;
  z-index: 1;

  ${m.tablet`
    width: 100%;
    order: 1;
  `}

${m.phone`
    order: 1;
    margin-bottom: 0;
  `}

${m.smallPhone`
    order: 1;
    margin-bottom: -70px;
  `}

`,jc=f.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 20px 0; */
  min-height: 100vh;
  z-index: 1;

  ${m.tablet`
    min-height: 100vh;
    padding: 0;
  `}

  ${m.phone`
    min-height: 100vh;
    padding: 0;
  `}

${m.smallPhone`
    min-height: 100vh;
    padding: -100px;
  `}
`,kc=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: ${({$reverse:t})=>t?"row-reverse":"row"};
  gap: 20px;

  ${m.tablet`
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;f.div`
  max-width: 455px;
  width: 100%;
  height: 455px;
  position: relative;
  z-index: 1;
  margin-bottom: 16px;

  ${m.tablet`
    width: 100%;
  `}

  ${m.phone`
    order: 1; // Image on top
    margin-bottom: 0;
  `}

  ${m.smallPhone`
    order: 1; // Image on top
    margin-bottom: 0;
  `}
`;const Cc=f.div`
  width: 100%;
  position: relative;
  margin-right: 18px;

  ${m.tablet`
    max-width: 100%;
    order: 2; // Text on bottom
    margin-left: 40%;
  `}

  ${m.phone`
    order: 2; // Text on bottom
    margin-top: 0;
    margin: 0;
    padding: 0;
  `}

  ${m.smallPhone`
    order: 2; // Text on bottom
    margin-top: 0;
    margin: 0;
    padding: 0;
    gap: 0;
  `}
`,Pc=f(He)`
    border-radius: 50px;
    background: #ac94f4;
    border: 1px solid #010606;
    white-space: nowrap;
    padding: ${({$big:t})=>t?"14px 48px":"12px 30px"};
    color: #010606;
    font-size: ${({$fontBig:t})=>t?"20px":"16px"};
    outline: none;
    border: none;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #010606;
        color: #ac94f4;
        outline: 1px solid #ac94f4;
        border: 1px solid #ac94f4;
    }
`;function Ic(t){return!(typeof t!="object"||t instanceof Array)}class Ac{filterOutNonSupportedKeys(e,r){const n=Object.create({});return Ic(e)?(Object.keys(e).forEach(i=>{r.indexOf(i)>=0?n[i]=e[i]:console.warn("Warning - unsupported key provided to configuration: ",i)}),n):Object.create({})}}const hn=["cname","secureDistribution","privateCdn","signUrl","longUrlSignature","shorten","useRootPath","secure","forceVersion","analytics","queryParams"];class $r extends Ac{constructor(e){super();const r=this.filterOutNonSupportedKeys(e,hn);Object.assign(this,{secure:!0},r)}extend(e){const r=this.filterOutNonSupportedKeys(e,hn);return new $r(Object.assign({},this,r))}setCname(e){return this.cname=e,this}setSecureDistribution(e){return this.secureDistribution=e,this}setPrivateCdn(e){return this.privateCdn=e,this}setSignUrl(e){return this.signUrl=e,this}setLongUrlSignature(e){return this.longUrlSignature=e,this}setShorten(e){return this.shorten=e,this}setUseRootPath(e){return this.useRootPath=e,this}setSecure(e){return this.secure=e,this}setForceVersion(e){return this.forceVersion=e,this}setQueryParams(e){return this.queryParams=e,this}}class J{constructor(e){this.values=[],this.delimiter=":",this.hasValue(e)&&this.addValue(e)}toString(){return this.values.join(this.delimiter)}hasValue(e){return typeof e<"u"&&e!==null&&e!==""}addValue(e){return Array.isArray(e)?this.values=this.values.concat(e):this.values.push(e),this.values=this.values.filter(r=>this.hasValue(r)),this}setDelimiter(e){return this.delimiter=e,this}}class Mc extends Error{constructor(e="Unsupported"){super(e)}}function Or(t){return new Mc(t)}function Rc(){return this._qualifierModel||{error:Or(`unsupported qualifier ${this.constructor.name}`)}}class zc{constructor(){this._qualifierModel={}}toJson(){return Rc.apply(this)}}class W extends zc{constructor(e,r){super(),this.delimiter="_",this.key=e,r instanceof J?this.qualifierValue=r:(this.qualifierValue=new J,this.qualifierValue.addValue(r))}toString(){const{key:e,delimiter:r,qualifierValue:n}=this;return`${e}${r}${n.toString()}`}addValue(e){return this.qualifierValue.addValue(e),this}}class U extends W{constructor(e,r){let n;r?n=new J([e,`${r}`]).setDelimiter(":"):n=e,super("fl",n),this.flagValue=r}toString(){return super.toString().replace(/\./g,"%2E")}getFlagValue(){return this.flagValue}}function Lc(t,e){const r=Array.from(t.entries());return e.forEach(n=>{r.push(["fl",n])}),r.sort().map(n=>n[1])}function Nc(){var t,e,r;const n=this._actionModel&&Object.keys(this._actionModel).length,i=(r=(e=(t=this._actionModel)===null||t===void 0?void 0:t.source)===null||e===void 0?void 0:e.transformation)===null||r===void 0?void 0:r.error;return i&&i instanceof Error?{error:i}:n?this._actionModel:{error:Or(`unsupported action ${this.constructor.name}`)}}class Dc{constructor(){this._actionModel={}}toJson(){return Nc.apply(this)}}class Mt extends Dc{constructor(){super(...arguments),this.qualifiers=new Map,this.flags=[],this.delimiter=",",this.actionTag=""}prepareQualifiers(){}getActionTag(){return this.actionTag}setActionTag(e){return this.actionTag=e,this}toString(){return this.prepareQualifiers(),Lc(this.qualifiers,this.flags).join(this.delimiter)}addQualifier(e){if(typeof e=="string"){const[r,n]=e.toLowerCase().split("_");r==="fl"?this.flags.push(new U(n)):this.qualifiers.set(r,new W(r,n))}else this.qualifiers.set(e.key,e);return this}addFlag(e){return typeof e=="string"?this.flags.push(new U(e)):e instanceof U&&this.flags.push(e),this}addValueToQualifier(e,r){return this.qualifiers.get(e).addValue(r),this}}function Fc(t){return t&&(t.match(/^#/)?`rgb:${t.substr(1)}`:t)}class Hc extends Mt{constructor(e){super(),this._actionModel={},this.addQualifier(new W("b",new J(Fc(e)).setDelimiter("_"))),this._actionModel.color=e,this._actionModel.actionType="backgroundColor"}static fromJson(e){const{color:r}=e;return new this(r)}}class mn{constructor(e){this.raw=e}toString(){return this.raw}toJson(){return{error:Or(`unsupported action ${this.constructor.name}`)}}}function Bc(t){const e=t;return"error"in e&&!!e.error}function Vc(){return new U("ignore_aspect_ratio")}function Wc(){return new U("lossy")}function Uc(){return new U("preserve_transparency")}function Gc(t){return new U("progressive",t)}function qc(){return new U("region_relative")}function Qc(){return new U("relative")}class Yc extends J{constructor(e){super(e),this.val=e}getValue(){return this.val}}function fe(t){const e={};return Object.keys(t).forEach(r=>{e[t[r]]=r}),e}const ji={limitFit:"limit",limitFill:"lfill",minimumFit:"mfit",thumbnail:"thumb",limitPad:"lpad",minimumPad:"mpad",autoPad:"auto_pad"},Jc={colorSpace:"cs",dpr:"dpr",density:"dn",defaultImage:"d",format:"f",quality:"q"},Xc={redEye:"redeye",advancedRedEye:"adv_redeye",oilPaint:"oil_paint",unsharpMask:"unsharp_mask",makeTransparent:"make_transparent",generativeRestore:"gen_restore",upscale:"upscale"},Kc={autoBest:"auto:best",autoEco:"auto:eco",autoGood:"auto:good",autoLow:"auto:low",jpegminiHigh:"jpegmini:1",jpegminiMedium:"jpegmini:2",jpegminiBest:"jpegmini:0"},Zc={fullHd:"full_hd",fullHdWifi:"full_hd_wifi",fullHdLean:"full_hd_lean",hdLean:"hd_lean"},el={444:"CHROMA_444",420:"CHROMA_420"},tl={noCmyk:"no_cmyk",keepCmyk:"keep_cmyk",tinySrgb:"tinysrgb",srgbTrueColor:"srgb:truecolor"};fe(el);fe(tl);const rl=fe(ji),nl=fe(Jc);fe(Xc);fe(Kc);fe(Zc);class il extends Mt{constructor(e,r,n){super(),this._actionModel={};let i;r instanceof Yc?i=r.getValue():i=r,this._actionModel.actionType=nl[e],this._actionModel[n]=i,this.addQualifier(new W(e,r))}}class ol extends U{constructor(e){super("progressive",e)}}class gt extends il{constructor(e,r){super(e,r,"formatType")}lossy(){return this._actionModel.lossy=!0,this.addFlag(Wc()),this}progressive(e){return e instanceof ol?(this._actionModel.progressive={mode:e.getFlagValue()},this.addFlag(e)):(this._actionModel.progressive={mode:e},this.addFlag(Gc(e))),this}preserveTransparency(){return this._actionModel.preserveTransparency=!0,this.addFlag(Uc()),this}static fromJson(e){const{formatType:r,lossy:n,progressive:i,preserveTransparency:o}=e;let a;return r?a=new this("f",r):a=new this("f"),i&&(i.mode?a.progressive(i.mode):a.progressive()),n&&a.lossy(),o&&a.preserveTransparency(),a}}class Rt{constructor(){this.actions=[]}addAction(e){let r;if(typeof e=="string"){if(e.indexOf("/")>=0)throw"addAction cannot accept a string with a forward slash in it - /, use .addTransformation() instead";r=new mn(e)}else r=e;return this.actions.push(r),this}addTransformation(e){return e instanceof Rt?this.actions=this.actions.concat(e.actions):this.actions.push(new mn(e)),this}toString(){return this.actions.map(e=>e.toString()).filter(e=>e).join("/")}animated(e){return this.addAction(e)}border(e){return this.addAction(e)}reshape(e){return this.addAction(e)}resize(e){return this.addAction(e)}quality(e){return this.addAction(new gt("q",e)),this}format(e){return this.addAction(new gt("f",e)),this}roundCorners(e){return this.addAction(e)}overlay(e){return this.addAction(e)}underlay(e){return e.setLayerType("u"),this.addAction(e)}addVariable(e){return this.addAction(e)}conditional(e){return this.addAction(e)}effect(e){return this.addAction(e)}adjust(e){return this.addAction(e)}rotate(e){return this.addAction(e)}namedTransformation(e){return this.addAction(e)}delivery(e){return this.addAction(e)}backgroundColor(e){return this.addAction(new Hc(e))}psdTools(e){return this.addAction(e)}extract(e){return this.addAction(e)}addFlag(e){const r=new Mt;let n=e;return typeof e=="string"&&(n=new U(e)),r.addQualifier(n),this.addAction(r)}customFunction(e){return this.addAction(e)}transcode(e){return this.addAction(e)}videoEdit(e){return this.addAction(e)}toJson(){const e=[];for(const r of this.actions){const n=r.toJson();if(Bc(n))return n;e.push(n)}return{actions:e}}}class al extends Rt{}class sl extends Rt{}function gn(t){const e=t.toString();return e.match(/[A-Z]/gi)||e.length>1&&e[0]==="0"?e:!isNaN(parseFloat(e))&&e.indexOf(":")===-1&&e.indexOf(".")===-1?`${e}.0`:e}class cl extends J{}class ll extends Mt{constructor(e,r,n){super(),this._actionModel={dimensions:{}},this._actionModel.actionType=rl[e]||e,this.addQualifier(new W("c",e)),r&&this.width(r),n&&this.height(n)}height(e){return this._actionModel.dimensions.height=e,this.addQualifier(new W("h",e))}width(e){return this._actionModel.dimensions.width=e,this.addQualifier(new W("w",e))}aspectRatio(e){if(e instanceof cl)return this._actionModel.dimensions.aspectRatio=`${e}`,this.addQualifier(new W("ar",e));if(typeof e=="number"||typeof e=="string")return this._actionModel.dimensions.aspectRatio=gn(e),this.addQualifier(new W("ar",gn(e)));if(e instanceof U)return this._actionModel.dimensions.aspectRatio=`${e.qualifierValue}`,this.addFlag(e)}relative(){return this._actionModel.relative=!0,this.addFlag(Qc())}regionRelative(){return this._actionModel.regionRelative=!0,this.addFlag(qc())}static fromJson(e){const{actionType:r,dimensions:n,relative:i,regionRelative:o}=e,{aspectRatio:a,width:s,height:c}=n,u=ji[r]||r,d=new this(u,s,c);return a&&d.aspectRatio(a==="ignore_aspect_ratio"?Vc():a),i&&d.relative(),o&&d.regionRelative(),d}}class Tr extends W{constructor(e){super("g",new J(e))}}class ki extends Tr{constructor(){super("auto")}autoFocus(...e){return this.addValue(e),this}}class Ci extends Tr{constructor(e){super(e)}fallbackGravity(e){return this.addValue(e.qualifierValue),this}}class ul extends Tr{constructor(e){super(e)}}function Pi(...t){const e=[...t];return new Ci(e)}function Ii(){return new ki}class zt extends J{constructor(e){super(),this.name=e}toString(){return this.name}}function dl(){return new zt("ocr_text")}function fl(t){return t&&`${t}`.split(":")[0]==="auto"}function pl(t){const e=Er(t);return["north","center","east","west","south","north_west","south_east","south_west","north_east"].includes(e)}function Er(t){return`${t}`.replace("g_","")}function hl(t){return{compass:Er(t),gravityType:"direction"}}function ml(t){return Er(t)==="ocr_text"}function gl(){return{gravityType:"ocr"}}function vl(t){return`${t.qualifierValue}`.split(":")[0]==="auto"}function yl(t){const r=t.toString().split("_"),n={object:r[0]};return r.length>1&&(r[1]==="avoid"?n.avoid=!0:n.weight=+r[1]),n}function Ai(t){let e;const r=t==="auto"?new ki:t;return`${t}`.startsWith("auto:")?e=`${t}`.split(":").filter(i=>i!=="auto"):e=r.qualifierValue.values.filter(i=>i!=="auto"),{gravityType:"auto",autoFocus:e.map(yl)}}function bl(t){const e=`${t}`.split(":").includes("auto"),r=t.qualifierValue.values,i={gravityType:"object",focusOnObjects:(e?r.slice(0,r.length-1):r).map(o=>`${o}`)};if(e){const o=r[r.length-1].values.slice(1),a=Ii().autoFocus(...o);i.fallbackGravity=Ai(a)}return i}function xl(t){const r=t.split(":").map(n=>new zt(n));return new Ci(r)}function wl(t){return pl(t)?hl(t):ml(t)?gl():fl(t)||vl(t)?Ai(t):bl(typeof t=="string"?xl(t):t)}class jr extends J{constructor(e,r){super(),this._weight=r,this.focusOn=e,this.shouldAvoid=!1}static focusOn(e,r){return new jr(e,r)}shouldAddWeight(){return typeof this._weight=="number"||typeof this._weight=="string"||this.shouldAvoid}getName(){return this.focusOn.name}getWeight(){return this.shouldAvoid?"avoid":this._weight}toString(){return this.shouldAddWeight()?`${this.getName()}_${this.getWeight()}`:`${this.getName()}`}weight(e){return this._weight=e,this}avoid(){return this.shouldAvoid=!0,this}}class _l extends J{constructor(e){super(),this.val=e}toString(){return this.val}}function Sl(t){return t.gravityType==="direction"}function $l(t){return t.gravityType==="ocr"}function Ol(t){return t.gravityType==="auto"}function Tl(t){const{object:e,weight:r,avoid:n}=t,i=new jr(new zt(e));return(r||r===0)&&i.weight(r),n&&i.avoid(),i}function Mi(t){const r=(t.autoFocus||[]).map(Tl);return Ii().autoFocus(...r)}function El(t){const e=(t.focusOnObjects||[]).map(n=>new zt(n)),r=Pi(...e);if(t.fallbackGravity){const n=Mi(t.fallbackGravity);r.fallbackGravity(n)}return r}function jl(t){return Sl(t)?new ul(new _l(t.compass)):$l(t)?Pi(dl()):Ol(t)?Mi(t):El(t)}class kl extends ll{gravity(e){this._actionModel.gravity=wl(e);const r=typeof e=="string"?new W("g",e):e;return this.addQualifier(r)}static fromJson(e){const r=super.fromJson.apply(this,[e]);return e.gravity&&r.gravity(jl(e.gravity)),r}}class Cl extends kl{x(e){return this._actionModel.x=e,this.addQualifier(new W("x",e))}y(e){return this._actionModel.y=e,this.addQualifier(new W("y",e))}static fromJson(e){const r=super.fromJson.apply(this,[e]);return e.x&&r.x(e.x),e.y&&r.y(e.y),r}}function Pl(t,e){return new Cl("fill",t,e)}function Il(t){return t.match(/^https?:\//)}function Al(t){return t.indexOf("/")<0}function Ml(t){return t.match(/^v[0-9]+/)}function Rl(t,e){const r=e.secure,n=e.privateCdn,i=e.cname,o=e.secureDistribution;return!r&&!i?`http://res.cloudinary.com/${t}`:r&&!o&&n?`https://${t}-res.cloudinary.com`:r&&!o?`https://res.cloudinary.com/${t}`:r&&o&&n?`https://${o}`:r&&o?`https://${o}/${t}`:!r&&i?`http://${i}/${t}`:"ERROR"}function zl(t){return t||"image"}function Ll(t){return t||"upload"}function Nl(t,e,r){const n=r!==!1;return e?`v${e}`:Ml(t)||Il(t)||Al(t)?"":n?"v1":""}function kr(t,e,r){let n=e>>0,i=String(r);return t.length>n?String(t):(n=n-t.length,n>i.length&&(i+=Dl(i,n/i.length)),i.slice(0,n)+String(t))}function Dl(t,e){let r=e,n="";for(;r>0;)n+=t,r--;return n}const Fl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",vt={};let vn=0;Fl.split("").forEach(t=>{let e=vn.toString(2);e=kr(e,6,"0"),vt[e]=t,vn++});function Hl(t){if(t.split(".").length<2)throw new Error("invalid semVer, must have at least two segments");return t.split(".").reverse().join(".")}function Bl(t){if(t.split(".").length<2)throw new Error("invalid semVer, must have at least two segments");return t.split(".").map(e=>{const r=+e;if(isNaN(r)||r<0)throw"Invalid version number provided";return kr(e,2,"0")}).join(".")}function yn(t){let e="";const n=t.split(".").length*6,i=Hl(t),o=Bl(i);let s=parseInt(o.split(".").join("")).toString(2);if(s=kr(s,n,"0"),s.length%6!==0)throw"Version must be smaller than 43.21.26)";return s.match(/.{1,6}/g).forEach(c=>{e+=vt[c]}),e}function Vl(t){const e={sdkSemver:t.sdkSemver,techVersion:t.techVersion,sdkCode:t.sdkCode,product:t.product,feature:"0",osType:t.osType,osVersion:t.osVersion};return t.accessibility&&(e.feature="D"),t.lazyload&&(e.feature="C"),t.responsive&&(e.feature="A"),t.placeholder&&(e.feature="B"),e}const Wl="1.19.0";function Ul(t){const[e,r]=t.split("."),n=parseInt(e).toString(2),i=parseInt(r).toString(2),o=n.padStart(6,"0"),a=i.padStart(6,"0");return vt[o]+vt[a]}function Gl(){const t="0.0.0";if(typeof window<"u")return t;try{return process.versions.node||t}catch{return t}}function ql(t){const e={techVersion:Gl(),sdkCode:"T",sdkSemver:Wl.split("-")[0],product:"A",osType:"Z",osVersion:"0.0",responsive:!1,placeholder:!1,lazyload:!1,accessibility:!1};return t?Object.assign(Object.assign({},e),t):e}function bn(t){const e=ql(t),r=Vl(e);try{const n=Ql(r.techVersion),i=yn(r.sdkSemver),o=yn(n),a=Ul(r.osVersion),s=r.feature,c=r.sdkCode,{product:u,osType:d}=r;return`D${u}${c}${i}${o}${d}${a}${s}`}catch{return"E"}}function Ql(t){const e=t.split(".");return`${e[0]}.${e[1]}`}const xn={"image/upload":"images","image/private":"private_images","image/authenticated":"authenticated_images","raw/upload":"files","video/upload":"videos"};class Yl{constructor(e,r={},n){this.setPublicID(e),this.setCloudConfig(r),this.setURLConfig(n)}setURLConfig(e){return this.urlConfig=new $r(e),this}setCloudConfig(e){return this.cloudName=e.cloudName,this.apiKey=e.apiKey,this.apiSecret=e.apiSecret,this.authToken=e.authToken,this}setPublicID(e){return this.publicID=e?e.toString():"",this}setDeliveryType(e){return this.deliveryType=e,this}setSuffix(e){return this.suffix=e,this}setSignature(e){return this.signature=e,this}setVersion(e){return e&&(this.version=e),this}setAssetType(e){return e&&(this.assetType=e),this}sign(){return this}toURL(e={}){return this.createCloudinaryURL(null,e.trackedAnalytics)}validateAssetForURLCreation(){if(typeof this.cloudName>"u")throw"You must supply a cloudName when initializing the asset";const e=this.suffix&&this.suffix.indexOf(".")>=0,r=this.suffix&&this.suffix.indexOf("/")>=0;if(e||r)throw"`suffix`` should not include . or /"}getResourceType(){const e=zl(this.assetType),r=Ll(this.deliveryType),n=!!this.suffix,i=`${e}/${r}`,o=xn[`${e}/${r}`],a=this.urlConfig.useRootPath,s=this.urlConfig.shorten;if(a){if(i==="image/upload")return"";throw new Error(`useRootPath can only be used with assetType: 'image' and deliveryType: 'upload'. Provided: ${i} instead`)}if(s&&i==="image/upload")return"iu";if(n){if(o)return o;throw new Error(`URL Suffix only supported for ${Object.keys(xn).join(", ")}, Provided: ${i} instead`)}return i}getSignature(){return this.signature?`s--${this.signature}--`:""}createCloudinaryURL(e,r){if(!this.publicID)return"";this.validateAssetForURLCreation();const n=Rl(this.cloudName,this.urlConfig),i=e?e.toString():"",o=Nl(this.publicID,this.version,this.urlConfig.forceVersion),a=this.publicID;if(typeof e=="string")return[n,this.getResourceType(),this.getSignature(),i,o,a.replace(/,/g,"%2C"),this.suffix].filter(c=>c).join("/");{const s=[encodeURI(n),this.getResourceType(),this.getSignature(),encodeURI(i),o,encodeURI(a).replace(/,/g,"%2C"),this.suffix&&encodeURI(this.suffix)].filter(d=>d).join("/").replace(/\?/g,"%3F").replace(/=/g,"%3D"),c=this.urlConfig.analytics!==!1&&!a.includes("?");let u="";if(typeof this.urlConfig.queryParams=="object")try{const d=new URLSearchParams(this.urlConfig.queryParams);c&&d.set("_a",bn(r)),u=d.toString()}catch{console.error("Error: URLSearchParams is not available so the queryParams object cannot be parsed, please try passing as an already parsed string")}else u=this.urlConfig.queryParams||"",c&&(u+=`${u.length>0?"&":""}_a=${bn(r)}`);return u?`${s}?${u}`:s}}}class Ri extends Yl{constructor(e,r,n,i){super(e,r,n),this.transformation=i}animated(e){return this.transformation.animated(e),this}border(e){return this.transformation.border(e),this}reshape(e){return this.transformation.reshape(e),this}resize(e){return this.transformation.resize(e),this}quality(e){return this.addAction(new gt("q",e)),this}format(e){return this.addAction(new gt("f",e)),this}roundCorners(e){return this.transformation.roundCorners(e),this}overlay(e){return this.transformation.overlay(e),this}addVariable(e){return this.transformation.addVariable(e),this}conditional(e){return this.transformation.conditional(e),this}effect(e){return this.transformation.effect(e),this}adjust(e){return this.transformation.adjust(e),this}rotate(e){return this.transformation.rotate(e),this}namedTransformation(e){return this.transformation.namedTransformation(e),this}delivery(e){return this.transformation.delivery(e),this}backgroundColor(e){return this.transformation.backgroundColor(e),this}psdTools(e){return this.transformation.psdTools(e),this}extract(e){return this.transformation.extract(e),this}addFlag(e){return this.transformation.addFlag(e),this}customFunction(e){return this.transformation.customFunction(e),this}addAction(e){return this.transformation.addAction(e),this}addTransformation(e){return this.transformation.addTransformation(e),this}toString(){return this.transformation.toString()}underlay(e){return this.transformation.underlay(e),this}toURL(e={}){return this.createCloudinaryURL(this.transformation,e==null?void 0:e.trackedAnalytics)}}class Jl extends Ri{constructor(e,r,n){super(e,r,n,new al)}}class Xl extends Ri{constructor(e,r,n){super(e,r,n,new sl),this.assetType="video"}transcode(e){return this.transformation.transcode(e),this}videoEdit(e){return this.transformation.videoEdit(e),this}}class zi{constructor(e){e&&(this.cloudinaryConfig=e)}image(e){return new Jl(e,this.cloudinaryConfig.cloud,this.cloudinaryConfig.url)}video(e){return new Xl(e,this.cloudinaryConfig.cloud,this.cloudinaryConfig.url)}setConfig(e){return this.cloudinaryConfig=e,this}getConfig(){return this.cloudinaryConfig}extendConfig(){}}const Kl=()=>new zi({cloud:{cloudName:"djqw1de3s"}}),Zl=()=>{const[t,e]=b.useState(!1),[r,n]=b.useState(""),i=Kl(),o=b.useMemo(()=>i.image("ARTISTDD_vmsgcd").toURL({transformation:[{width:1920,crop:"scale"},{quality:"auto:good"},{fetch_format:"auto"}]}),[i]),a=b.useMemo(()=>i.image("ARTISTDD_vmsgcd").toURL({transformation:[{width:386,crop:"scale"},{quality:"auto:good"},{fetch_format:"auto"}]}),[i]),s=b.useMemo(()=>i.image("ARTISTDD_vmsgcd").toURL({transformation:[{width:300,crop:"scale"},{quality:"auto:good"},{fetch_format:"auto"}]}),[i]),c=b.useMemo(()=>i.image("bam_shooter_kujs9e_e_improve_e_sharpen-fotor-2024053015749_x9rsmf").toURL({transformation:[{width:455,height:455,crop:"fill"},{quality:"auto"},{fetch_format:"auto"},{secure:!0}]}),[i]);return b.useEffect(()=>{const u=()=>{window.innerWidth<=300?n(s):window.innerWidth<=386?n(a):n(o)};return u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[o,a,s]),l.jsxs(jc,{id:"bio",children:[l.jsx(Oi,{children:l.jsx(mt,{src:r,alt:"description",$position:"absolute",$width:"100%",$height:"auto",$top:0,$left:0,loading:"lazy"})}),l.jsx(vc,{children:l.jsxs(kc,{$reverse:!0,children:[l.jsx(Ec,{children:l.jsx(mt,{src:c,alt:"Artist pretending to hold a weapon",$position:"relative",$width:"455px",$height:"auto",$borderRadius:"10px",$border:"2px solid #ac94f4",$zIndex:"10",loading:"lazy"})}),l.jsxs(Cc,{className:"",children:[l.jsx(yc,{className:"text-center",children:"Approved Bam Bio"}),l.jsx(xc,{className:"text-center",children:"Gavin Di Fresco"}),l.jsx(cr,{$fontSize:"20px",$lineHeight:"26px",$color:"#fff",$marginTop:"30px",$marginBottom:"25px",$maxWidth:"440px",$phoneFontSize:"18px",children:"'Gavin Di Fresco, known professionally as Bamvsthewrld, is an American rapper, singer, and songwriter who shares his life experiences in his lyrics, inspiring others who can relate to the issues of his generation. Career highlights include a live performance at Innovative Academy prom in Hendersonville, NC, and a sold-out show in his home town of Brevard, NC.'"}),l.jsx(wc,{children:l.jsxs(Pc,{to:"music",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),children:["See More",l.jsx(Ei,{icon:t?$i:Si,color:t?"#ac94f4":"inherit"})]})})]})]})})]})},eu=hr`
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
`,tu=hr`
  0% { opacity: 0.8; }
  50% { opacity: 1; }
  100% { opacity: 0.8; }
`,ru=hr`
  0% {
    opacity: 1;
    margin-top: -300px;
    margin-right: -300px;
  }
  12% {
    opacity: 0;
  }
  15% {
    margin-top: 300px;
    margin-left: -600px;
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;f.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;f.div`
  background: #000 url(${({$starsImageUrl:t})=>t}) repeat top center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 0;
  opacity: 0.9;
  animation: ${tu} 2s infinite ease-in-out;
`;f.div`
  background: transparent url(${({$twinklingImageUrl:t})=>t}) repeat top center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 1;
  opacity: 1;
  animation: ${eu} 250s linear infinite;
`;f.div`
  width: 2px;
  height: 2px;
  background-color: transparent;
  box-shadow: ${({$boxShadow:t})=>t};
  z-index: 3;
`;f.div`
  position: absolute;
  width: 300px;
  height: 1px;
  transform: rotate(-45deg);
  background-image: linear-gradient(to right, #ac94f4, rgba(255, 255, 255, 0));
  animation: ${ru} ${({$duration:t})=>t}s linear infinite;
  z-index: 4;

  &::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 5px;
    border-radius: 50%;
    margin-top: -2px;
    background: rgba(172, 148, 244, 0.7);
    box-shadow: 0 0 15px 3px #ac94f4;
  }
`;const nu=new zi({cloud:{cloudName:"djqw1de3s"}}),yt=(t,e)=>nu.image(t).resize(Pl().width(e.width).height(e.height)).format(e.format).quality(e.quality||"auto").toURL(),iu=()=>{const[t,e]=b.useState(!1),r=b.useRef(null),[n,i]=b.useState(!1);b.useEffect(()=>{const s=new IntersectionObserver(u=>{i(u.some(d=>d.isIntersecting))},{threshold:.1});let c=r.current;return c&&s.observe(c),()=>{c&&s.unobserve(c)}},[]);const o=b.useMemo(()=>yt("backplanet_t2wgdk",{format:"webp",width:500,height:500}),[]),a=b.useMemo(()=>yt("earth_mwg9cb",{format:"webp",width:150,height:150}),[]);return l.jsxs(gc,{id:"home",ref:r,children:[l.jsxs(Oi,{children:[l.jsx(mt,{src:o,alt:"Planet",$position:"absolute",$width:"5vw",$height:"auto",$top:"30%",$right:"10%",$zIndex:"12"}),l.jsx(mt,{src:a,alt:"Earth",$position:"absolute",$width:"150px",$height:"auto",$top:"550px",$right:"350px",$zIndex:"3"})]}),l.jsx(mc,{$customStyle:N`
          padding-top: 3rem;
          ${m.tablet`           
          `}
        `,children:l.jsxs(Oc,{style:{zIndex:"20",color:n?"blue":"black"},children:[l.jsx(bc,{$color:"#ac94f4",$fontSize:"8rem",$fontWeight:"500",$fontFamily:"Arthemis, sans-serif",$lineHeight:"1.1",$marginBottom:"24px",children:"BamVsTheWrld"}),l.jsx(cr,{$fontSize:"20px",$lineHeight:"26px",$marginBottom:"20px",$maxWidth:"900px",$textAlign:"center",children:`Witnessing Bam's evolution as an artist has been truly
            inspiring. Since we first collaborated back in 2020, his
            dedication and love for music have propelled his growth tremendously.
            It's a privilege to watch him not just meet, but far exceed, every
            expectation.`}),l.jsx(cr,{$fontSize:"20px",$lineHeight:"26px",$marginTop:"20px",$maxWidth:"700px",children:"~Bray Kaizen"}),l.jsx(Tc,{children:l.jsxs(_c,{to:"bio",onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),smooth:!0,$duration:500,spy:!0,exact:"true",offset:-80,onClick:s=>{s.stopPropagation()},children:["Bam's Wrld",l.jsx(Ei,{$hover:t})]})})]})})]})};function ou(t){return F({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M192 277.4h189.7l-43.6 44.7L368 352l96-96-96-96-31 29.9 44.7 44.7H192v42.8z"},child:[]},{tag:"path",attr:{d:"M255.7 421.3c-44.1 0-85.5-17.2-116.7-48.4-31.2-31.2-48.3-72.7-48.3-116.9 0-44.1 17.2-85.7 48.3-116.9 31.2-31.2 72.6-48.4 116.7-48.4 44 0 85.3 17.1 116.5 48.2l30.3-30.3c-8.5-8.4-17.8-16.2-27.7-23.2C339.7 61 298.6 48 255.7 48 141.2 48 48 141.3 48 256s93.2 208 207.7 208c42.9 0 84-13 119-37.5 10-7 19.2-14.7 27.7-23.2l-30.2-30.2c-31.1 31.1-72.5 48.2-116.5 48.2zM448.004 256.847l-.849-.848.849-.849.848.849z"},child:[]}]})(t)}const Li=()=>{const{state:t}=Ie(),{currentUser:e}=t,{signOut:r,openSignIn:n}=Gi(),[i,o]=b.useState(!1),a=b.useRef(),s=()=>{o(u=>!u)},c=u=>{a.current&&!a.current.contains(u.target)&&o(!1)};return b.useEffect(()=>(window.addEventListener("mousedown",c),()=>{window.removeEventListener("mousedown",c)}),[]),b.useEffect(()=>{console.log("Current user:",e)},[e]),l.jsx("div",{className:"lg:block relative bg-black",children:e?l.jsxs("div",{className:"flex items-center border-2 border-[#ac94f4] space-x-4 opacity-90 cursor-pointer hover:opacity-60 hover:text-black rounded-full p-1 pr-2 mt-4",onClick:s,children:[l.jsx("img",{className:"rounded-full w-8 h-8",src:e.imageUrl,alt:e.fullName}),l.jsx("span",{className:"text-[#ac94f4]",children:e.fullName}),l.jsx(uc,{}),i&&l.jsx("div",{ref:a,className:"absolute top-10 right-0 mt-2 py-2 w-48 bg-[#ac94f4] rounded-full shadow-xl z-20",children:l.jsxs("button",{onClick:()=>r(),className:"flex items-center px-2 py-[1px] text-md font-md text-[#010606] hover:text-[#010606] hover:opacity-60",children:[l.jsx(ou,{size:28,className:"mr-2",color:"#010606"}),l.jsx("span",{children:"Logout"})]})})]}):l.jsx("button",{className:"flex items-center justify-center gap-2 px-2 py-2.5 rounded-full bg-[#010606] p-1 mt-3 text-[#ac94f4] border-2 border-[#ac94f4] text-md shadow-md shadow-glow cursor-pointer transition-colors hover:opacity-60 hover:border-[#ac94f4] hover:shadow-md",onClick:()=>n(),children:l.jsx("span",{className:"block text-[#ac94f4] pr-2",children:"Sign in"})})})},au=f.nav.withConfig({shouldForwardProp:t=>t!=="backgroundColor"})`
  background: ${({backgroundColor:t})=>t||"transparent"};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;

  @media screen and (max-width: 960px) {
      transition: 0.8s all ease;
  }
`,su=({scrollNav:t,children:e,...r})=>{const n=t?"#000":"transparent";return l.jsx(au,{backgroundColor:n,...r,children:e})},cu=f.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`,lu=f(bt)`
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    z-index: 10;
`,uu=f.img`
  width: 60px;
  height: 60px;
  box-shadow: 0 0 20px white;
  border: 3px solid #ac94f4;
  border-radius: 50%;

  ${m.tablet`
    margin-top: 10px;
    left: 0;
  `}
`,du=f.div`
  display: none;

  ${m.tablet`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2.5rem;
    cursor: pointer;
    color: #fff;
    visibility: ${({$isOpen:t})=>t?"hidden":"visible"};
    z-index: 1001;
  `}
`,fu=f(He)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem; // Adjust padding as needed
  height: 100%;
  cursor: pointer;
  overflow-x: visible; // Ensure text is not cut off

  &.active {
    border-bottom: 3px solid #ac94f4;
    min-width: fit-content; // Ensures the active item can fit its content
  }
`,pu=f.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;

  ${m.tablet`
      display: none;
  `}
`;f.li`
    height: 80px;
    z-index: 1001;
`;const hu=f.nav`
    display: flex;
    align-items: center;
    margin-bottom: 14px;

    ${m.tablet`
        display: none;
    `}
`;function mu(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Ni=mu,gu=typeof oe=="object"&&oe&&oe.Object===Object&&oe,vu=gu,yu=vu,bu=typeof self=="object"&&self&&self.Object===Object&&self,xu=yu||bu||Function("return this")(),Di=xu,wu=Di,_u=function(){return wu.Date.now()},Su=_u,$u=/\s/;function Ou(t){for(var e=t.length;e--&&$u.test(t.charAt(e)););return e}var Tu=Ou,Eu=Tu,ju=/^\s+/;function ku(t){return t&&t.slice(0,Eu(t)+1).replace(ju,"")}var Cu=ku,Pu=Di,Iu=Pu.Symbol,Fi=Iu,wn=Fi,Hi=Object.prototype,Au=Hi.hasOwnProperty,Mu=Hi.toString,Ee=wn?wn.toStringTag:void 0;function Ru(t){var e=Au.call(t,Ee),r=t[Ee];try{t[Ee]=void 0;var n=!0}catch{}var i=Mu.call(t);return n&&(e?t[Ee]=r:delete t[Ee]),i}var zu=Ru,Lu=Object.prototype,Nu=Lu.toString;function Du(t){return Nu.call(t)}var Fu=Du,_n=Fi,Hu=zu,Bu=Fu,Vu="[object Null]",Wu="[object Undefined]",Sn=_n?_n.toStringTag:void 0;function Uu(t){return t==null?t===void 0?Wu:Vu:Sn&&Sn in Object(t)?Hu(t):Bu(t)}var Gu=Uu;function qu(t){return t!=null&&typeof t=="object"}var Qu=qu,Yu=Gu,Ju=Qu,Xu="[object Symbol]";function Ku(t){return typeof t=="symbol"||Ju(t)&&Yu(t)==Xu}var Zu=Ku,ed=Cu,$n=Ni,td=Zu,On=NaN,rd=/^[-+]0x[0-9a-f]+$/i,nd=/^0b[01]+$/i,id=/^0o[0-7]+$/i,od=parseInt;function ad(t){if(typeof t=="number")return t;if(td(t))return On;if($n(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=$n(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=ed(t);var r=nd.test(t);return r||id.test(t)?od(t.slice(2),r?2:8):rd.test(t)?On:+t}var sd=ad,cd=Ni,Xt=Su,Tn=sd,ld="Expected a function",ud=Math.max,dd=Math.min;function fd(t,e,r){var n,i,o,a,s,c,u=0,d=!1,h=!1,v=!0;if(typeof t!="function")throw new TypeError(ld);e=Tn(e)||0,cd(r)&&(d=!!r.leading,h="maxWait"in r,o=h?ud(Tn(r.maxWait)||0,e):o,v="trailing"in r?!!r.trailing:v);function y(p){var g=n,z=i;return n=i=void 0,u=p,a=t.apply(z,g),a}function _(p){return u=p,s=setTimeout(w,e),d?y(p):a}function O(p){var g=p-c,z=p-u,B=e-g;return h?dd(B,o-z):B}function k(p){var g=p-c,z=p-u;return c===void 0||g>=e||g<0||h&&z>=o}function w(){var p=Xt();if(k(p))return T(p);s=setTimeout(w,O(p))}function T(p){return s=void 0,v&&n?y(p):(n=i=void 0,a)}function $(){s!==void 0&&clearTimeout(s),u=0,n=c=i=s=void 0}function S(){return s===void 0?a:T(Xt())}function E(){var p=Xt(),g=k(p);if(n=arguments,i=this,c=p,g){if(s===void 0)return _(c);if(h)return clearTimeout(s),s=setTimeout(w,e),y(c)}return s===void 0&&(s=setTimeout(w,e)),a}return E.cancel=$,E.flush=S,E}var pd=fd;const En=qi(pd),hd=D.memo(({toggle:t})=>{const{state:e,dispatch:r}=Ie(),[n,i]=b.useState(window.innerWidth<768),[o,a]=b.useState(!1),s=b.useMemo(()=>yt("logo_qkgu64",{width:60,height:60,gravity:"center",crop:"thumb",format:"auto",quality:"auto",secure:!0}),[]),c=b.useRef(En(()=>{a(window.scrollY>=80)},200)).current,u=b.useRef(En(()=>{i(window.innerWidth<768)},200)).current;return b.useEffect(()=>(window.addEventListener("scroll",c),window.addEventListener("resize",u),()=>{c.cancel(),u.cancel(),window.removeEventListener("scroll",c),window.removeEventListener("resize",u)}),[c,u]),l.jsx(ft.Provider,{value:{color:"#ac94f4"},children:l.jsx(su,{scrollNav:o,children:l.jsxs(cu,{children:[l.jsx(lu,{to:"/",onClick:()=>Sr.scrollToTop(),children:l.jsx(uu,{src:s,alt:"logo",loading:"lazy"})}),l.jsx(du,{$isOpen:e.isOpen,onClick:t,children:l.jsx(lc,{})}),l.jsx(pu,{children:["home","bio","music","new","thoughts","comments"].map((d,h)=>l.jsx("li",{children:l.jsx(fu,{to:d,smooth:!0,$duration:500,spy:!0,exact:"true",offset:-80,activeClass:"active",children:d.charAt(0).toUpperCase()+d.slice(1)})},h))}),l.jsx(hu,{children:l.jsx(Li,{isMobile:n,toggle:t,dispatch:r})})]})})})});function ef(t){return F({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"},child:[]}]})(t)}function md(t){return F({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.943 11.526c-.111-.303-.323-.465-.564-.599a1 1 0 0 0-.123-.064l-.219-.111c-.752-.399-1.339-.902-1.746-1.498a3.4 3.4 0 0 1-.3-.531c-.034-.1-.032-.156-.008-.207a.3.3 0 0 1 .097-.1c.129-.086.262-.173.352-.231.162-.104.289-.187.371-.245.309-.216.525-.446.66-.702a1.4 1.4 0 0 0 .069-1.16c-.205-.538-.713-.872-1.329-.872a1.8 1.8 0 0 0-.487.065c.006-.368-.002-.757-.035-1.139-.116-1.344-.587-2.048-1.077-2.61a4.3 4.3 0 0 0-1.095-.881C9.764.216 8.92 0 7.999 0s-1.76.216-2.505.641c-.412.232-.782.53-1.097.883-.49.562-.96 1.267-1.077 2.61-.033.382-.04.772-.036 1.138a1.8 1.8 0 0 0-.487-.065c-.615 0-1.124.335-1.328.873a1.4 1.4 0 0 0 .067 1.161c.136.256.352.486.66.701.082.058.21.14.371.246l.339.221a.4.4 0 0 1 .109.11c.026.053.027.11-.012.217a3.4 3.4 0 0 1-.295.52c-.398.583-.968 1.077-1.696 1.472-.385.204-.786.34-.955.8-.128.348-.044.743.28 1.075q.18.189.409.31a4.4 4.4 0 0 0 1 .4.7.7 0 0 1 .202.09c.118.104.102.26.259.488q.12.178.296.3c.33.229.701.243 1.095.258.355.014.758.03 1.217.18.19.064.389.186.618.328.55.338 1.305.802 2.566.802 1.262 0 2.02-.466 2.576-.806.227-.14.424-.26.609-.321.46-.152.863-.168 1.218-.181.393-.015.764-.03 1.095-.258a1.14 1.14 0 0 0 .336-.368c.114-.192.11-.327.217-.42a.6.6 0 0 1 .19-.087 4.5 4.5 0 0 0 1.014-.404c.16-.087.306-.2.429-.336l.004-.005c.304-.325.38-.709.256-1.047m-1.121.602c-.684.378-1.139.337-1.493.565-.3.193-.122.61-.34.76-.269.186-1.061-.012-2.085.326-.845.279-1.384 1.082-2.903 1.082s-2.045-.801-2.904-1.084c-1.022-.338-1.816-.14-2.084-.325-.218-.15-.041-.568-.341-.761-.354-.228-.809-.187-1.492-.563-.436-.24-.189-.39-.044-.46 2.478-1.199 2.873-3.05 2.89-3.188.022-.166.045-.297-.138-.466-.177-.164-.962-.65-1.18-.802-.36-.252-.52-.503-.402-.812.082-.214.281-.295.49-.295a1 1 0 0 1 .197.022c.396.086.78.285 1.002.338q.04.01.082.011c.118 0 .16-.06.152-.195-.026-.433-.087-1.277-.019-2.066.094-1.084.444-1.622.859-2.097.2-.229 1.137-1.22 2.93-1.22 1.792 0 2.732.987 2.931 1.215.416.475.766 1.013.859 2.098.068.788.009 1.632-.019 2.065-.01.142.034.195.152.195a.4.4 0 0 0 .082-.01c.222-.054.607-.253 1.002-.338a1 1 0 0 1 .197-.023c.21 0 .409.082.49.295.117.309-.04.56-.401.812-.218.152-1.003.638-1.18.802-.184.169-.16.3-.139.466.018.14.413 1.991 2.89 3.189.147.073.394.222-.041.464"},child:[]}]})(t)}function gd(t){return F({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"},child:[]}]})(t)}function vd(t){return F({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"},child:[]}]})(t)}const yd=f.footer`
  background-color: #010606;
  width: 100%;
  min-height: 80px;
  z-index: 10; /* Higher than the background */
  position: sticky;
  bottom: 0; /* Sticks to the bottom */
`,bd=f.div`
    padding: 30px 0 24px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
`;f.div`
    display: flex;
    flex: 2;
    justify-content: center;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        padding-top: 32px;
    }
`;f.div`
    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding-bottom: 20px; 
    }
`;f.div`
    display: flex;
    flex-direction: column;
    
    align-items: center;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;f.h1`
    font-size: 18px;
    flex-wrap: nowrap;
    margin-bottom: 20px;
    margin-top: 40px;
    color: #ac94f4;
`;f(bt)`
    color:#fff;
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 14px;

    &:hover {
        color: #ac94f4;
        transition: 0.3s ease-out;
    }
`;const xd=f.section`
    max-width: 1000px;
    width: 100%;
`,wd=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto;
  flex-direction: row; /* keep as row for desktop */

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`,_d=f(bt)`
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`,Sd=f.img`
  width: 60px; // You may adjust this as necessary
  height: 60px; // Or keep it auto if you want to maintain the aspect ratio
  box-shadow: 0 0 20px white; // This adds a glow effect
  border: 3px solid #ac94f4; // A white border for contrast
  border-radius: 50%;

    @media screen and (max-width: 768px) {
        display: none;
  }
`,$d=f.small`
    color: #fff;
    margin: 16px 0;
    text-align: center;
    display: block;

    @media screen and (max-width: 820px) {
    order: 3; /* WebsiteRights at the bottom on mobile */
  }
`,Od=f.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    color: #ac94f4;

    @media screen and (max-width: 820px) {
    order: 2;
    margin-top:16px;
  }
`,ce=f.a`
    color: #fff;
    font-size: 24px;
`;function Td(t){return F({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21 2H6a2 2 0 0 0-2 2v3H2v2h2v2H2v2h2v2H2v2h2v3a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-8 2.999c1.648 0 3 1.351 3 3A3.012 3.012 0 0 1 13 11c-1.647 0-3-1.353-3-3.001 0-1.649 1.353-3 3-3zM19 18H7v-.75c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18z"},child:[]}]})(t)}const Ed=N`
  border-radius: 50px;
  background: #ac94f4;
  padding: 8px 10px;
  color: #010606;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  gap: 10px;
  min-width: 175px;

  &:hover {
    background: #010606;
    color: #ac94f4;
  }

  @media screen and (max-width: 768px) {
    padding: 2px 10px;
    font-size: 14px;
    min-width: 160px; 
  }

  @media screen and (max-width: 480px) {
    padding: 2px 8px;
    font-size: 12px;
    min-width: 140px;
  }
`,Bi=f.button`
  ${Ed}
  background-color: #ac94f4;
  color: #010606;

  &:hover {
    background-color: #010606;
    color: #ac94f4;
    border: 1px solid #ac94f4;
  }

    @media screen and (max-width: 820px) {
    font-size: 14px;
    padding: 1px 1px;
    border: 1px solid #ac94f4;
    order: 1;
  }
`;f.img`
width: 40px;
height: 40px;
border-radius: 50%; 

@media screen and (max-width: 480px) {
    font-size: 12px;
    width: 30px;
    height: 30px;
  }
`;const Vi=f.div`
background-color: #010606; 
color: #ac94f4;
padding: 10px;
border-radius: 5px;
margin-top: 10px;
border: 1px solid #ac94f4;

&:hover {
    background: #010606;
    color: #ac94f4;
    border: 1px solid #ac94f4;
  }
`;console.log("CustomButton:",Bi);console.log("ContactInfoContainer:",Vi);const jd=()=>{const{state:t}=Ie(),{currentUser:e}=t,[r,n]=b.useState(!1),[i,o]=b.useState(!1),a=b.useRef(null),s=()=>{o(!e),n(!!e&&!r)};return b.useEffect(()=>{if(i){const c=setTimeout(()=>{o(!1)},3e3);return()=>clearTimeout(c)}},[i]),b.useEffect(()=>{const c=u=>{a.current&&!a.current.contains(u.target)&&o(!1)};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[]),l.jsxs("div",{children:[l.jsxs(Bi,{className:"bg-[#ac94f4] text-[#010606]",onClick:s,children:[l.jsx(Td,{className:"bg-[#010606]",size:"24"}),r?"Hide Contact Info":"Contact Info"]}),r&&e&&l.jsxs(Vi,{children:[l.jsx("p",{children:"Email: difrescoc@gmail.com"}),l.jsx("p",{children:"Phone: 828-595-3049"})]}),i&&l.jsx("div",{ref:a,style:{color:"red",marginTop:"10px"},children:"You must be logged in to view contact information."})]})},kd=()=>{const t=()=>{Sr.scrollToTop()},e=b.useMemo(()=>yt("logo_qkgu64",{width:60,height:60,gravity:"center",crop:"thumb",format:"auto",quality:"auto",secure:!0}),[]);return l.jsx(ft.Provider,{value:{color:"#ac94f4"},children:l.jsx(yd,{children:l.jsx(bd,{children:l.jsx(xd,{id:"social media",children:l.jsxs(wd,{children:[l.jsx(_d,{to:"/",onClick:t,children:l.jsx(Sd,{src:e,alt:"logo"})}),l.jsx(jd,{}),l.jsxs($d,{children:["Bamvsthewrld © ",new Date().getFullYear()," All rights reserved"]}),l.jsxs(Od,{children:[l.jsx(ce,{href:"//www.facebook.com/trapstarbam",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:l.jsx(oc,{})}),l.jsx(ce,{href:"//www.instagram.com/trapstar_bam",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:l.jsx(ac,{})}),l.jsx(ce,{href:"//www.youtube.com/trapstarbam",target:"_blank",rel:"noopener noreferrer","aria-label":"Youtube",children:l.jsx(cc,{})}),l.jsx(ce,{href:"//www.spotify.com/trapstarbam",target:"_blank",rel:"noopener noreferrer","aria-label":"Spotify",children:l.jsx(gd,{})}),l.jsx(ce,{href:"//www.snapchat.com/add/trapstarbam",target:"_blank",rel:"noopener noreferrer","aria-label":"SnapChat",children:l.jsx(md,{})}),l.jsx(ce,{href:"//soundcloud.com/trapstarbam",target:"_blank",rel:"noopener noreferrer","aria-label":"SoundCloud",children:l.jsx(sc,{})}),l.jsx(ce,{href:"mailto:contact@trapstarbam.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Email",children:l.jsx(vd,{})})]})]})})})})})},Cd=f.aside.attrs(t=>({style:{transform:t.$isOpen?"translateX(0)":"translateX(100%)"}}))`
  position: fixed;
  z-index: 1002;
  width: 100%;
  height: 100%;
  background: #010606;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 0;
  top: 0;
  transition: transform 0.3s ease-in-out;
  border-left: 2px solid #ac94f4;
`,Pd=f(dc)`
  display: flex;
  margin: 6px;
  color: #ac94f4;

  &:hover {
    color: #fff;
    transition: 0.2s ease-in-out;
  }
`,Id=f.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: flex-end;
  top: 2rem;
  right: 1.5rem;
  margin-right: 10px;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;

  &:hover {
    color: #ac94f4;
    transition: 0.2s ease-in-out;
  }
`,Ad=f.div`
  color: #fff;
  margin-top: 10rem;
`,Md=f.ul`
  display: grid;
  grid-template-columns: 10fr;
  grid-template-rows: repeat(8, 80px);
  text-align: center;

  ${m.tablet`
    grid-template-rows: repeat(6, 60px);
  `}
`,Rd=f(He)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: #fff;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #ac94f4;
  }

  &.active {
    border-bottom: 3px solid #ac94f4;
  }
`,zd=f.div`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  margin-top: 5px;
`;f(bt)`
  border-radius: 50px;
  background: #ac94f4;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    border: 2px solid #ac94f4;
    background: #000;
    color: #ac94f4;
  }
`;const Ld=["home","bio","music","new","thoughts","comments"],Nd=({toggle:t,isOpen:e})=>{const{state:r}=Ie(),{currentUser:n}=r;return b.useEffect(()=>{console.log("Sidebar Is Open:",e),console.log("Current User in Sidebar:",n)},[e,n]),l.jsxs(Cd,{$isOpen:e,children:[l.jsx(Id,{onClick:t,children:l.jsx(Pd,{})}),l.jsxs(Ad,{children:[l.jsx(Md,{children:Ld.map((i,o)=>l.jsx(Rd,{to:i,spy:!0,smooth:!0,offset:-70,$duration:500,activeClass:"active",onClick:t,children:i.charAt(0).toUpperCase()+i.slice(1)},o))}),l.jsx(zd,{children:l.jsx(Li,{})})]})]})},Dd=D.lazy(()=>xt(()=>import("./Thoughts-DeJ2cPl7.js"),__vite__mapDeps([0,1,2,3]))),Fd=D.lazy(()=>xt(()=>import("./Music-Bo7ftHHG.js"),__vite__mapDeps([4,1,2]))),Hd=D.lazy(()=>xt(()=>import("./NewSection-CMuVumxj.js").then(t=>t.N),__vite__mapDeps([5,1,2,3]))),Bd=D.lazy(()=>xt(()=>import("./CommentSection-DYIZvz9C.js"),__vite__mapDeps([6,1,2]))),Vd=()=>{const{state:t,dispatch:e}=Ie();return Qi(),b.useEffect(()=>{console.log("Sidebar Is Open:",t.isOpen),console.log("Current User in Sidebar:",t.currentUser)},[t.isOpen,t.currentUser]),l.jsxs(l.Fragment,{children:[l.jsx(Nd,{isOpen:t.isOpen,toggle:()=>e({type:"TOGGLE_SIDEBAR"})}),l.jsx(hd,{toggle:()=>e({type:"TOGGLE_SIDEBAR"})}),l.jsx(iu,{}),l.jsx(Zl,{}),l.jsx(b.Suspense,{fallback:l.jsx("div",{children:"Loading Music..."}),children:l.jsx(Fd,{})}),l.jsx(b.Suspense,{fallback:l.jsx("div",{children:"Loading New Section..."}),children:l.jsx(Hd,{})}),l.jsx(b.Suspense,{fallback:l.jsx("div",{children:"Loading Thoughts..."}),children:l.jsx(Dd,{})}),l.jsx(b.Suspense,{fallback:l.jsx("div",{children:"Loading Comments..."}),children:l.jsx(Bd,{currentUser:t.currentUser,dispatch:e})}),t.successMessage&&l.jsx("div",{className:"message",children:t.successMessage}),t.errorMessage&&l.jsx("div",{className:"error-message",children:t.errorMessage}),l.jsx(kd,{})]})},tf=Object.freeze(Object.defineProperty({__proto__:null,default:Vd},Symbol.toStringTag,{value:"Module"}));export{Gd as B,Ud as F,xc as H,Qd as I,Kd as M,Zd as R,gc as S,qd as T,vc as a,mt as b,cr as c,f as d,yc as e,wc as f,_c as g,Ei as h,Oi as i,Yd as j,Jd as k,Xd as l,m,ef as n,tf as o,Ct as p,Kl as u};
