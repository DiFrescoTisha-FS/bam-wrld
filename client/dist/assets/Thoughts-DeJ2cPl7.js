import{j as v,c as b,r as x,g as Fe}from"./index-Bfm6BA1g.js";import{d as Z,m as H,S as qe,a as Ge,F as Ke,I as Qe,b as Ye,T as Xe,c as je,e as Ve,H as Ze,B as Je,f as et,g as tt,h as nt,u as rt}from"./index-BVOJ_WoV.js";import{r as ot}from"./index-CWXHrlhI.js";const at=Z.div`
  position: absolute;
  top: ${({$top:t})=>t||0}px;
  left: ${({$left:t})=>t||0}px;
  transform: translate(-50%, 50px);
  display: ${({$show:t})=>t?"block":"none"};
  padding: 8px;
  font-size: 12px;
  color: #000;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  text-align: center;
  z-index: 1000;
  pointer-events: none;
`,Ee=({show:t,top:n,left:s,children:a,specialPosition:o,...f})=>v.jsx(at,{$show:t,$top:n,$left:s,...f,children:a});Z.div`
  max-width: 455px;
  width: 100%;
  height: 455px;
  position: relative;
  z-index: 1;

  ${H.tablet`
    width: 100%;
    order: 1;
  `}

  ${H.phone`
    order: 2;
    margin-bottom: 0;
  `}

  ${H.smallPhone`
    order: 2;
    margin-bottom: -100px;
  `}
`;const it=Z.div`
  position: absolute;
  height: 860px;
  max-height: 860px;
  width: 100%;
  background-image: url(${({$backgroundImageDesktopUrl:t})=>t});
  background-size: cover;
  z-index: 2;

  ${H.tablet`
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

  ${H.phone`
    background-image: url(${({$backgroundImageMobileUrl:t})=>t});
    background-size: cover;
    background-position: center;
    min-height: 100vh;
  `}

  ${H.smallPhone`
    background-image: url(${({$backgroundImageSmallMobileUrl:t})=>t});
    background-size: cover;
    background-position: center;
    min-height: 100vh;
  `}
`;var Ie={},ie={},D=b&&b.__assign||function(){return D=Object.assign||function(t){for(var n,s=1,a=arguments.length;s<a;s++){n=arguments[s];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},D.apply(this,arguments)};Object.defineProperty(ie,"__esModule",{value:!0});var We={position:"absolute",top:0,left:0},Re=D(D({},We),{zIndex:1,userSelect:"none"}),lt=D(D({},Re),{width:"100%",height:"auto"}),st=function(t){return{container:{position:"relative"},canvas:D(D({},We),{pointerEvents:"none",zIndex:2}),img:t!=null&&t.responsive?lt:Re,map:(t==null?void 0:t.onClick)&&{cursor:"pointer"}||void 0}};ie.default=st;var U={};Object.defineProperty(U,"__esModule",{value:!0});U.ImageMapperDefaultProps=U.rerenderPropsList=void 0;U.rerenderPropsList=["src","active","disabled","width","height","imgWidth","fillColor","strokeColor","lineWidth","natural","areaKeyName","stayHighlighted","stayMultiHighlighted","toggleHighlighted","parentWidth","responsive"];U.ImageMapperDefaultProps={map:{areas:[],name:"image-map-".concat(Math.random())},areaKeyName:"id",containerRef:null,active:!0,disabled:!1,fillColor:"rgba(255, 255, 255, 0.5)",strokeColor:"rgba(0, 0, 0, 0.5)",lineWidth:1,imgWidth:0,width:0,height:0,natural:!1,stayHighlighted:!1,stayMultiHighlighted:!1,toggleHighlighted:!1,rerenderProps:[],responsive:!1,parentWidth:0,onImageClick:null,onImageMouseMove:null,onClick:null,onMouseDown:null,onMouseUp:null,onTouchStart:null,onTouchEnd:null,onMouseMove:null,onMouseEnter:null,onMouseLeave:null,onLoad:null};var le={},ke=b&&b.__spreadArray||function(t,n,s){if(s||arguments.length===2)for(var a=0,o=n.length,f;a<o;a++)(f||!(a in n))&&(f||(f=Array.prototype.slice.call(n,0,a)),f[a]=n[a]);return t.concat(f||Array.prototype.slice.call(n))};Object.defineProperty(le,"__esModule",{value:!0});var ut=function(t,n,s,a,o){var f=t[0],h=t[1],M=t[2],u=t[3];o.current.fillStyle=n,o.current.lineWidth=s,o.current.strokeStyle=a,o.current.strokeRect(f,h,M-f,u-h),o.current.fillRect(f,h,M-f,u-h)},ct=function(t,n,s,a,o){o.current.fillStyle=n,o.current.beginPath(),o.current.lineWidth=s,o.current.strokeStyle=a,o.current.arc(t[0],t[1],t[2],0,2*Math.PI),o.current.closePath(),o.current.stroke(),o.current.fill()},ft=function(t,n,s,a,o){var f=t.reduce(function(h,M,u,P){return u%2?h:ke(ke([],h,!0),[P.slice(u,u+2)],!1)},[]);o.current.fillStyle=n,o.current.beginPath(),o.current.lineWidth=s,o.current.strokeStyle=a,f.forEach(function(h){return o.current.lineTo(h[0],h[1])}),o.current.closePath(),o.current.stroke(),o.current.fill()},dt=function(t,n,s,a,o,f,h){return t==="rect"&&f?ut(n,s,a,o,h):t==="circle"&&f?ct(n,s,a,o,h):t==="poly"&&f?ft(n,s,a,o,h):!1};le.default=dt;var w={};Object.defineProperty(w,"__esModule",{value:!0});w.touchEnd=w.touchStart=w.mouseUp=w.mouseDown=w.mouseMove=w.imageClick=w.imageMouseMove=void 0;var ht=function(t,n){n.onImageMouseMove&&n.onImageMouseMove(t)};w.imageMouseMove=ht;var gt=function(t,n){n.onImageClick&&(t.preventDefault(),n.onImageClick(t))};w.imageClick=gt;var vt=function(t,n,s,a){a.onMouseMove&&a.onMouseMove(t,n,s)};w.mouseMove=vt;var pt=function(t,n,s,a){a.onMouseDown&&a.onMouseDown(t,n,s)};w.mouseDown=pt;var mt=function(t,n,s,a){a.onMouseUp&&a.onMouseUp(t,n,s)};w.mouseUp=mt;var yt=function(t,n,s,a){a.onTouchStart&&a.onTouchStart(t,n,s)};w.touchStart=yt;var Mt=function(t,n,s,a){a.onTouchEnd&&a.onTouchEnd(t,n,s)};w.touchEnd=Mt;var Te={};Object.defineProperty(Te,"__esModule",{value:!0});(function(t){var n=b&&b.__assign||function(){return n=Object.assign||function(e){for(var i,c=1,p=arguments.length;c<p;c++){i=arguments[c];for(var m in i)Object.prototype.hasOwnProperty.call(i,m)&&(e[m]=i[m])}return e},n.apply(this,arguments)},s=b&&b.__createBinding||(Object.create?function(e,i,c,p){p===void 0&&(p=c);var m=Object.getOwnPropertyDescriptor(i,c);(!m||("get"in m?!i.__esModule:m.writable||m.configurable))&&(m={enumerable:!0,get:function(){return i[c]}}),Object.defineProperty(e,p,m)}:function(e,i,c,p){p===void 0&&(p=c),e[p]=i[c]}),a=b&&b.__setModuleDefault||(Object.create?function(e,i){Object.defineProperty(e,"default",{enumerable:!0,value:i})}:function(e,i){e.default=i}),o=b&&b.__importStar||function(e){if(e&&e.__esModule)return e;var i={};if(e!=null)for(var c in e)c!=="default"&&Object.prototype.hasOwnProperty.call(e,c)&&s(i,e,c);return a(i,e),i},f=b&&b.__exportStar||function(e,i){for(var c in e)c!=="default"&&!Object.prototype.hasOwnProperty.call(i,c)&&s(i,e,c)},h=b&&b.__spreadArray||function(e,i,c){if(c||arguments.length===2)for(var p=0,m=i.length,j;p<m;p++)(j||!(p in i))&&(j||(j=Array.prototype.slice.call(i,0,p)),j[p]=i[p]);return e.concat(j||Array.prototype.slice.call(i))},M=b&&b.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=o(x),P=M(ot),I=M(ie),S=U,C=M(le),$=w;f(Te,t);var G=function(e){var i=e.containerRef,c=e.active,p=e.disabled,m=e.fillColor,j=e.lineWidth,B=e.map,De=e.src,se=e.strokeColor,ue=e.natural,ce=e.height,K=e.width,J=e.imgWidth,N=e.areaKeyName,fe=e.stayHighlighted,Q=e.stayMultiHighlighted,de=e.toggleHighlighted,Y=e.parentWidth,z=e.responsive,he=e.onLoad,ge=e.onMouseEnter,ve=e.onMouseLeave,pe=e.onClick,me=(0,u.useState)(B),A=me[0],ee=me[1],ye=(0,u.useState)(A),te=ye[0],He=ye[1],Me=(0,u.useState)(!1),F=Me[0],ze=Me[1],_e=(0,u.useState)(null),k=_e[0],Ae=_e[1],q=(0,u.useRef)(null),W=(0,u.useRef)(null),R=(0,u.useRef)(null),L=(0,u.useRef)(null),ne=(0,u.useRef)(!0),be=(0,u.useRef)(0);(0,u.useEffect)(function(){F?clearInterval(be.current):be.current=window.setInterval(function(){var r;!((r=W.current)===null||r===void 0)&&r.complete&&ze(!0)},500)},[F]),(0,u.useEffect)(function(){F&&R.current&&(V(!0),L.current=R.current.getContext("2d"),we())},[F]),(0,u.useEffect)(function(){ne.current?ne.current=!1:(we(),V(),k&&Se())},[e,ne,k]),(0,u.useEffect)(function(){q.current.clearHighlightedArea=function(){ee(te),V()},i&&(i.current=q.current)},[k]),(0,u.useEffect)(function(){z&&V()},[Y]);var we=function(){ee(B),He(B)},Ce=function(r){var l=e,d=r,y=l[d];return typeof y=="function"?y(W.current):y},X=function(r,l,d){d===void 0&&(d="area");var y=W.current,_=y.naturalWidth,g=y.naturalHeight,O=y.clientWidth,T=y.clientHeight;return r==="width"?z?Y:ue?_:K||d==="image"?l:O:r==="height"?z?T:ue?g:ce||d==="image"?l:T:0},V=function(r){if(r===void 0&&(r=!1),!(!r&&!k)){var l=Ce("width"),d=Ce("height"),y=X("width",l),_=X("height",d);(K||z)&&(W.current.width=X("width",l,"image")),(ce||z)&&(W.current.height=X("height",d,"image")),R.current.width=y,R.current.height=_,q.current.style.width="".concat(y,"px"),q.current.style.height="".concat(_,"px"),L.current=R.current.getContext("2d"),L.current.fillStyle=m,he&&k&&he(W.current,{width:y,height:_}),Ae(W.current),k&&oe()}},xe=function(r){var l;return(0,C.default)(r.shape,r.scaledCoords,r.fillColor||m,r.lineWidth||j,r.strokeColor||se,(l=r.active)!==null&&l!==void 0?l:!0,L)},Pe=function(){return L.current.clearRect(0,0,R.current.width,R.current.height)},Le=function(r,l,d){c&&xe(r),ge&&ge(r,l,d)},Oe=function(r,l,d){c&&(Pe(),oe()),ve&&ve(r,l,d)},Ue=function(r,l,d){var y,_=(y=r.active)!==null&&y!==void 0?y:!0;if(_&&(fe||Q||de)){var g=n({},r),O=Q?A:te;if(de&&g.preFillColor){var T=te.areas.find(function(E){return E[N]===r[N]});T&&!T.preFillColor&&delete g.preFillColor}else(fe||Q)&&(g.preFillColor=r.fillColor||m);var ae=O.areas.map(function(E){return E[N]===r[N]?g:E});ee(function(E){return n(n({},E),{areas:ae})}),Q||(Se(),xe(r))}pe&&(d.preventDefault(),pe(r,l,d))},re=function(r){var l=K&&J&&J>0?K/J:1;return z&&Y?r.map(function(d){return d/(k.naturalWidth/Y)}):r.map(function(d){return d*l})},oe=function(r){r===void 0&&(r=A),r.areas.forEach(function(l){return l.preFillColor?((0,C.default)(l.shape,re(l.coords),l.preFillColor,l.lineWidth||j,l.strokeColor||se,!0,L),!0):!1})},Be=function(r){if(!r)return[0,0];var l=re(r.coords);switch(r.shape){case"circle":return[l[0],l[1]];case"poly":case"rect":default:{var d=l.length/2,y=l.reduce(function(O,T,ae){var E=O.y,$e=O.x;return ae%2?{y:E+T/d,x:$e}:{y:E,x:$e+T/d}},{y:0,x:0}),_=y.y,g=y.x;return[g,_]}}},Se=function(){Pe(),oe(B)},Ne=function(){return A.areas.map(function(r,l){var d=re(r.coords),y=Be(r),_=n(n({},r),{scaledCoords:d,center:y});return r.disabled?null:u.default.createElement("area",n({},r.preFillColor?{className:"img-mapper-area-highlighted"}:{},{key:r[N]||l.toString(),shape:r.shape,coords:d.join(","),onMouseEnter:function(g){return Le(_,l,g)},onMouseLeave:function(g){return Oe(_,l,g)},onMouseMove:function(g){return(0,$.mouseMove)(_,l,g,e)},onMouseDown:function(g){return(0,$.mouseDown)(_,l,g,e)},onMouseUp:function(g){return(0,$.mouseUp)(_,l,g,e)},onTouchStart:function(g){return(0,$.touchStart)(_,l,g,e)},onTouchEnd:function(g){return(0,$.touchEnd)(_,l,g,e)},onClick:function(g){return Ue(_,l,g)},href:r.href,alt:"map"}))})};return u.default.createElement("div",{ref:q,id:"img-mapper",style:(0,I.default)(e).container},u.default.createElement("img",{ref:W,role:"presentation",className:"img-mapper-img",style:n(n({},(0,I.default)(e).img),k?{}:{display:"none"}),src:De,useMap:"#".concat(A.name),alt:"map",onClick:function(r){return(0,$.imageClick)(r,e)},onMouseMove:function(r){return(0,$.imageMouseMove)(r,e)}}),u.default.createElement("canvas",{ref:R,className:"img-mapper-canvas",style:(0,I.default)().canvas}),u.default.createElement("map",{className:"img-mapper-map",name:A.name,style:(0,I.default)().map},F&&!p&&k&&Ne()))};G.defaultProps=S.ImageMapperDefaultProps,t.default=u.default.memo(G,function(e,i){var c=h(h([],S.rerenderPropsList,!0),i.rerenderProps,!0),p=c.some(function(m){return e[m]!==i[m]});return(0,P.default)(e.map,i.map)&&!p})})(Ie);const _t=Fe(Ie),bt=({src:t="",map:n={name:"",areas:[]},width:s=100,height:a=100,onClick:o=()=>{},onMouseEnter:f=()=>{},onMouseLeave:h=()=>{},fillColor:M="transparent",...u})=>v.jsx(_t,{src:t,map:n,width:s,height:a,onClick:o,onMouseEnter:f,onMouseLeave:h,fillColor:M,...u}),wt=Z.div`
  position: relative;
  z-index: 4;
  max-width: 100%;
  height: auto;
  margin: 0 auto;

  ${H.tablet`
    display: none;
  `}
`,Ct=({image:t,mapAreas:n,onSongEnd:s})=>{const a=x.useRef(),[o,f]=x.useState(""),[h,M]=x.useState(""),[u,P]=x.useState({top:0,left:0}),I=x.useRef(null),[S,C]=x.useState(!1),$=i=>{o===i.href?C(!S):(o&&S&&a.current.pause(),a.current.src=i.href,f(i.href),C(!0))},G=i=>{const[c,p,m]=i.coords;M(i.title),P({left:c+-50,top:p-m+-20})},e=()=>{M(""),P({top:0,left:0})};return x.useEffect(()=>{const i=a.current;S?i.play():i.pause();const c=()=>{f(""),C(!1),s&&s()};return i.addEventListener("ended",c),()=>{i.removeEventListener("ended",c)}},[S,o,s]),!n||!n.areas?(console.error("mapAreas is undefined or not structured correctly:",n),null):v.jsxs("div",{children:[v.jsxs(wt,{ref:I,children:[v.jsx(bt,{src:t,map:{name:"thoughts-map",areas:n.areas},onClick:$,onMouseEnter:G,onMouseLeave:e,width:1779,height:860,fillColor:"transparent"}),h&&v.jsx(Ee,{top:u.top,left:u.left,show:h!=="",children:h})]}),v.jsx("audio",{ref:a,preload:"metadata"})]})},xt="/assets/goku-1RZqWYjh.mp3",Pt="/assets/ten_below-_smGq3xm.mp3",St="/assets/up_in_clouds-BN1_QqkR.mp3",$t="/assets/jp_legacy-C7fubQTd.mp3",jt="/assets/Up%20All%20Night-sHINDiAF.mp3",kt="/assets/Blitz-BwA3Iq41.mp3",Et="/assets/call%20me%20back-D_xEP1Ja.mp3",It="/assets/Changed_Things-C3g0O-lS.mp3",Wt={name:"thoughts-map",areas:[{shape:"circle",coords:[1010,165,45],directive:"click-planets",alt:"Directive to click planets",title:"Click planets to play a song."},{shape:"circle",coords:[1150,140,72],href:xt,alt:"Goku",title:"Goku"},{shape:"circle",coords:[1320,98,72],href:Pt,alt:"Ten Below",title:"Ten Below"},{shape:"circle",coords:[1550,100,105],href:St,alt:"Up In Clouds",title:"Up In Clouds"},{shape:"circle",coords:[1620,305,114],href:$t,alt:"My Legacy",title:"My Legacy"},{shape:"circle",coords:[1530,400,48],href:jt,alt:"Up All Night",title:"Up All Night"},{shape:"circle",coords:[1518,555,85],href:kt,alt:"Blitz",title:"Blitz"},{shape:"circle",coords:[1380,640,44],href:Et,specialPosition:"right",alt:"Call Me Back",title:"Call Me Back"},{shape:"circle",coords:[1250,750,120],href:It,alt:"Changed Things",title:"Changed Things"}]},Ht=()=>{const[t,n]=x.useState(!1),[s,a]=x.useState(""),[o,f]=x.useState({show:!1,content:"",top:0,left:0,specialPosition:"default"}),h=C=>{f({show:!0,content:C.title,top:C.coords[1],left:C.coords[0],specialPosition:C.specialPosition||"default"})},M=rt(),u=x.useMemo(()=>M.image("THOUGHTSDDD_2_htcj9g").toURL({transformation:[{width:1920,crop:"scale"},{quality:"auto:good"},{fetch_format:"auto"}]}),[M]),P=x.useMemo(()=>M.image("mobile103_rxzgre").toURL({transformation:[{width:386,crop:"scale"},{quality:"auto:good"},{fetch_format:"auto"}]}),[M]),I=x.useMemo(()=>M.image("tattoofingers_hdvyyn_emezhw-fotor-2024053015658_b7utnn").toURL({transformation:[{width:455,height:455,crop:"fill"},{quality:"auto"},{fetch_format:"auto"},{secure:!0}]}),[M]),S=()=>{f({...o,show:!1})};return x.useEffect(()=>{const C=()=>{window.innerWidth<=480?a(P):a(u)};return C(),window.addEventListener("resize",C),()=>window.removeEventListener("resize",C)},[u,P]),v.jsxs(qe,{id:"thoughts",children:[v.jsxs(it,{children:[v.jsx(Ct,{mapAreas:Wt,image:s,alt:"description",$position:"absolute",$width:"80%",$height:"auto",$top:0,$left:0,loading:"lazy",onAreaEnter:h,onAreaLeave:S}),v.jsx(Ee,{$top:o.top,$left:o.left,$show:o.show,$specialPosition:o.specialPosition,children:o.content})]}),v.jsx(Ge,{children:v.jsxs(Ke,{$reverse:!0,children:[v.jsx(Qe,{children:v.jsx(Ye,{src:I,alt:"singer with tattooed fingers on top of his head",$position:"relative",$width:"455px",$height:"auto",$borderRadius:"10px",$border:"2px solid #ac94f4",$zIndex:"10"})}),v.jsxs(Xe,{children:[v.jsx(je,{className:"flex flex-row directive",$fontSize:"18px",$fontWeight:"600",$color:"#ac94f4",$marginBottom:"10px",$marginLeft:"100px",$hideOnSmallScreens:!0,children:"Click on a planet!"}),v.jsx(Ve,{className:"text-center",children:"Bam Quotes"}),v.jsx(Ze,{className:"text-center",children:"Thoughts on Music"}),v.jsx(je,{$fontSize:"20px",$lineHeight:"26px",$color:"#fff",$marginTop:"30px",$marginBottom:"25px",$maxWidth:"440px",$phoneFontSize:"18px",children:"'Music is a way for me to escape reality. It exposes my flaws, and pushes me to be a better person. Always believe in yourself, even when no one else does. Do not let life get in the way of following your dreams.'"}),v.jsx(Je,{children:"~Bamvsthewrld"}),v.jsx(et,{children:v.jsxs(tt,{to:"comments",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,textDecoration:"none",style:{marginTop:"20px"},onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),className:"mb-8",children:["See More",v.jsx(nt,{hover:t})]})})]})]})})]})};export{Ht as default};
