import{r as O,u as Se,j as i}from"./index-Bfm6BA1g.js";import{p as pe,d as ie,m as A,S as ge,i as ye,b as fe,a as _e,F as xe,T as be,e as Ce,H as Ie,c as $e,k as we,l as Me,f as He,n as je,u as ke}from"./index-BVOJ_WoV.js";var me={},ue={};Object.defineProperty(ue,"__esModule",{value:!0});var _=function(){function e(a,o){var r=[],c=!0,h=!1,m=void 0;try{for(var u=a[Symbol.iterator](),d;!(c=(d=u.next()).done)&&(r.push(d.value),!(o&&r.length===o));c=!0);}catch(S){h=!0,m=S}finally{try{!c&&u.return&&u.return()}finally{if(h)throw m}}return r}return function(a,o){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a))return e(a,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();ue.default=Te;var x=O;function Te(e){var a=(0,x.useState)(e.count),o=_(a,2),r=o[0],c=o[1],h=(0,x.useState)(e.size),m=_(h,2),u=m[0],d=m[1],S=(0,x.useState)(e.char),C=_(S,2),I=C[0],p=C[1],H=(0,x.useState)(e.color),b=_(H,2),w=b[0],j=b[1],k=(0,x.useState)(e.activeColor),f=_(k,2),s=f[0],T=f[1],N=(0,x.useState)(e.isHalf),z=_(N,2),q=z[0],U=z[1],G=(0,x.useState)(e.edit),R=_(G,2),X=R[0],E=R[1],Y=(0,x.useState)(e.emptyIcon),B=_(Y,2),J=B[0],Q=B[1],Z=(0,x.useState)(e.halfIcon),P=_(Z,2),ee=P[0],te=P[1],ae=(0,x.useState)(e.filledIcon),W=_(ae,2),L=W[0],re=W[1],ne=(0,x.useState)(e.a11y),D=_(ne,2),oe=D[0],V=D[1],se={count:r,size:u,char:I,color:w,activeColor:s,isHalf:q,edit:X,emptyIcon:J,halfIcon:ee,filledIcon:L,a11y:oe};function le(v){c(v.count),d(v.size),p(v.char),j(v.color),T(v.activeColor),U(v.isHalf),E(v.edit),Q(v.emptyIcon),te(v.halfIcon),re(v.filledIcon),V(v.a11y)}return[se,le]}var ce={};Object.defineProperty(ce,"__esModule",{value:!0});var ze=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e};ce.default=Le;var Ae=O,Ne=Ue(Ae);function Ue(e){return e&&e.__esModule?e:{default:e}}var Ee={position:"relative",overflow:"hidden",cursor:"pointer",display:"block",float:"left"};function Le(e){var a=e.index,o=e.active,r=e.config,c=e.onMouseOver,h=e.onMouseLeave,m=e.onClick,u=e.halfStarHidden,d=e.halfStarAt,S=e.isUsingIcons,C=e.uniqueness,I=r.color,p=r.activeColor,H=r.size,b=r.char,w=r.isHalf,j=r.edit,k=r.halfIcon,f=r.emptyIcon,s=r.filledIcon,T="",N=!1;w&&!u&&d===a&&(S?T="react-stars-half":T="react-stars-"+C,N=!0);var z=ze({},Ee,{color:o?p:I,cursor:j?"pointer":"default",fontSize:H+"px"});function q(){return S?o?s:!o&&N?k:f:b}return Ne.default.createElement("span",{className:T,style:z,key:a,"data-index":a,"data-forhalf":s?a:b,onMouseOver:c,onMouseMove:c,onMouseLeave:h,onClick:m},q())}Object.defineProperty(me,"__esModule",{value:!0});var M=function(){function e(a,o){var r=[],c=!0,h=!1,m=void 0;try{for(var u=a[Symbol.iterator](),d;!(c=(d=u.next()).done)&&(r.push(d.value),!(o&&r.length===o));c=!0);}catch(S){h=!0,m=S}finally{try{!c&&u.return&&u.return()}finally{if(h)throw m}}return r}return function(a,o){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a))return e(a,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),$=O,F=K($),Oe=pe,y=K(Oe),qe=ue,Re=K(qe),Be=ce,De=K(Be);function K(e){return e&&e.__esModule?e:{default:e}}var Fe={overflow:"hidden",position:"relative"};function Pe(e,a){return`
    .react-stars-`+a+`:before {
      position: absolute;
      overflow: hidden;
      display: block;
      z-index: 1;
      top: 0; left: 0;
      width: 50%;
      content: attr(data-forhalf);
      color: `+e+`;
  }`}function We(e){return`
          span.react-stars-half > * {
          color: `+e+`;
      }`}function de(e){var a=(0,$.useState)(""),o=M(a,2),r=o[0],c=o[1],h=(0,$.useState)(0),m=M(h,2),u=m[0],d=m[1],S=(0,$.useState)([]),C=M(S,2),I=C[0],p=C[1],H=(0,$.useState)(!1),b=M(H,2),w=b[0],j=b[1],k=(0,Re.default)(e),f=M(k,2),s=f[0],T=f[1],N=(0,$.useState)(0),z=M(N,2),q=z[0],U=z[1],G=(0,$.useState)(!1),R=M(G,2),X=R[0],E=R[1],Y=(0,$.useState)(""),B=M(Y,2),J=B[0],Q=B[1];function Z(t){return!t.isHalf&&t.emptyIcon&&t.filledIcon||t.isHalf&&t.emptyIcon&&t.halfIcon&&t.filledIcon}function P(){c((Math.random()+"").replace(".",""))}(0,$.useEffect)(function(){te(),ee(e.value,e.count),p(L(e.value)),T(e),P(),j(Z(e)),U(Math.floor(e.value)),E(e.isHalf&&e.value%1<.5)},[]);function ee(t,n){t<0||t>n?d(0):d(t)}function te(){var t="react-stars";Q(e.classNames+(" "+t))}function ae(t){return t%1===0}function W(){return s.isHalf?Math.floor(u):Math.round(u)}function L(t){typeof t>"u"&&(t=W());for(var n=[],l=0;l<s.count;l++)n.push({active:l<=t-1});return n}function re(t){if(s.edit){var n=Number(t.currentTarget.getAttribute("data-index"));if(s.isHalf){var l=D(t);E(l),l&&(n+=1),U(n)}else n+=1;ne(n)}}function ne(t){var n=I.filter(function(l){return l.active});t!==n.length&&p(L(t))}function D(t){var n=t.target,l=n.getBoundingClientRect(),g=t.clientX-l.left;return g=Math.round(Math.abs(g)),g>l.width/2}function oe(){s.edit&&(V(u),p(L()))}function V(t){s.isHalf&&(E(ae(t)),U(Math.floor(t)))}function se(t){if(s.edit){var n=Number(t.currentTarget.getAttribute("data-index")),l=void 0;if(s.isHalf){var g=D(t);E(g),g&&(n+=1),l=g?n:n+.5,U(n)}else l=n=n+1;v(l)}}function le(){return F.default.createElement("style",{dangerouslySetInnerHTML:{__html:w?We(s.activeColor):Pe(s.activeColor,r)}})}function v(t){t!==u&&(p(L(t)),d(t),e.onChange(t))}function ve(t){if(!(!s.a11y&&!s.edit)){var n=t.key,l=u,g=Number(n);g?Number.isInteger(g)&&g>0&&g<=s.count&&(l=g):(n==="ArrowUp"||n==="ArrowRight")&&l<s.count?(t.preventDefault(),l+=s.isHalf?.5:1):(n==="ArrowDown"||n==="ArrowLeft")&&l>.5&&(t.preventDefault(),l-=s.isHalf?.5:1),V(l),v(l)}}function he(){return I.map(function(t,n){return F.default.createElement(De.default,{key:n,index:n,active:t.active,config:s,onMouseOver:re,onMouseLeave:oe,onClick:se,halfStarHidden:X,halfStarAt:q,isUsingIcons:w,uniqueness:r})})}return F.default.createElement("div",{className:"react-stars-wrapper-"+r,style:{display:"flex"}},F.default.createElement("div",{tabIndex:s.a11y&&s.edit?0:null,"aria-label":"add rating by typing an integer from 0 to 5 or pressing arrow keys",onKeyDown:ve,className:J,style:Fe},s.isHalf&&le(),he(),F.default.createElement("p",{style:{position:"absolute",left:"-200rem"},role:"status"},u)))}de.propTypes={classNames:y.default.string,edit:y.default.bool,half:y.default.bool,value:y.default.number,count:y.default.number,char:y.default.string,size:y.default.number,color:y.default.string,activeColor:y.default.string,emptyIcon:y.default.element,halfIcon:y.default.element,filledIcon:y.default.element,a11y:y.default.bool};de.defaultProps={edit:!0,half:!1,value:0,count:5,char:"★",size:15,color:"gray",activeColor:"#ffd700",a11y:!0,onChange:function(){}};var Ve=me.default=de;const Ke=ie.div`
  max-width: 455px;
  width: 100%;
  height: 455px;
  position: relative;
  z-index: 1;

  ${A.tablet`
    width: 100%;
    order: 1;
  `}

${A.phone`
    order: 2;
    margin-bottom: 0;
  `}

${A.smallPhone`
    order: 2;
    margin-bottom: -100px;
  `}

`;ie.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center top;
  background-image: url(${e=>e.desktopUrl});

  ${A.phone`
    background-image: url(${e=>e.mobileUrl});
    background-position: center top;
  `}

  ${A.smallPhone`
    background-image: url(${e=>e.mobileUrl});
    background-position: center top;
  `}
`;ie.div`
  position: relative;
  padding-top: 20px;

  ${A.phone`
    padding-top: 200px;
  `}

  ${A.smallPhone`
    padding-top: 200px;
  `}
`;const Ye=()=>{const{state:e,setComment:a,setRating:o,handleCommentSubmit:r,setErrorMessage:c}=Se(),{currentUser:h,comment:m,rating:u,errorMessage:d,successMessage:S}=e,[C,I]=O.useState(!1),p=ke(),H=O.useMemo(()=>p.image("COMMENTBG_2_mctqkg").toURL({transformation:[{width:1920,crop:"scale"},{quality:"auto:good"},{fetch_format:"auto"}]}),[p]),b=O.useMemo(()=>p.image("bam1_Small_sluuou-fotor-2024053015615_pbmxlq").toURL({transformation:[{width:455,height:455,crop:"fill"},{quality:"auto"},{fetch_format:"auto"}]}),[p]),w=f=>{console.log("Rating changed:",f),o(Number(f))},j=f=>{console.log("Comment changed:",f.target.value),a(f.target.value)},k=async f=>{if(console.log("Submitting comment/rating..."),f.preventDefault(),!h){console.log("User not logged in"),c("Login required to leave a comment or rate. Please log in to continue."),I(!0),setTimeout(()=>I(!1),3e3);return}await r(f)};return i.jsxs(ge,{id:"comments",children:[i.jsx(ye,{children:i.jsx(fe,{src:H,alt:"Crescent Moon",$position:"absolute",$width:"100%",$height:"auto",$objectFit:"contain",$top:0,$left:0,loading:"lazy"})}),i.jsx(_e,{style:{zIndex:"20"},children:i.jsxs(xe,{$reverse:!1,children:[i.jsx(Ke,{className:"mr-4",children:i.jsx(fe,{src:b,alt:"Artist Looking Up At Camera",$position:"relative",$width:"455px",$height:"auto",$borderRadius:"10px",$border:"2px solid #ac94f4",$zIndex:"10",loading:"lazy"})}),i.jsxs(be,{children:[i.jsx(Ce,{className:"text-center",children:"Bam Fans"}),i.jsx(Ie,{className:"text-center",children:"Before you go..."}),i.jsx($e,{$fontSize:"20px",$lineHeight:"26px",$color:"#fff",$marginTop:"30px",$marginBottom:"25px",$maxWidth:"440px",$phoneFontSize:"18px",children:"Tell Bam what you loved most about your galaxy tour and rate your adventure!” Thanks for stopping by."}),i.jsxs(we,{onSubmit:k,children:[i.jsx(Ve,{value:Number(u),onChange:w,size:24,activeColor:"#ffd700"}),i.jsx(Me,{placeholder:"Leave a comment",value:m,onChange:j}),C&&i.jsx("div",{style:{color:"red",marginTop:"10px"},children:"You must be logged in to leave a comment or rate."}),i.jsx(He,{children:i.jsxs("button",{className:"inline-flex items-center rounded-full bg-primary border border-[#010606] whitespace-nowrap px-10 py-4",type:"submit",children:[i.jsx("span",{children:"Send"}),i.jsx(je,{size:20,className:"ml-2"})]})}),d&&i.jsx("div",{style:{color:"red",marginTop:"10px"},children:d}),S&&i.jsx("div",{style:{color:"green",marginTop:"10px"},children:S})]})]})]})})]})};export{Ye as default};
