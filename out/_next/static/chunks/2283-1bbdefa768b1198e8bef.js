"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2283],{2283:function(e,r,t){t.d(r,{cI:function(){return pe}});var n=t(7294),s=e=>e instanceof HTMLElement;const i="blur",c="change",u="input",a="onBlur",o="onChange",l="onSubmit",f="onTouched",d="all",y="undefined",g="max",b="min",h="maxLength",m="minLength",v="pattern",p="required",O="validate";var A=e=>null==e;const j=e=>"object"===typeof e;var V=e=>!A(e)&&!Array.isArray(e)&&j(e)&&!(e instanceof Date),R=e=>/^\w*$/.test(e),k=e=>e.filter(Boolean),C=e=>k(e.replace(/["|']/g,"").replace(/\[/g,".").replace(/\]/g,"").split("."));function w(e,r,t){let n=-1;const s=R(r)?[r]:C(r),i=s.length,c=i-1;for(;++n<i;){const r=s[n];let i=t;if(n!==c){const t=e[r];i=V(t)||Array.isArray(t)?t:isNaN(+s[n+1])?{}:[]}e[r]=i,e=e[r]}return e}var S=(e,r={})=>{for(const t in e)R(t)?r[t]=e[t]:w(r,t,e[t]);return r},D=e=>void 0===e,F=(e={},r,t)=>{const n=k(r.split(/[,[\].]+?/)).reduce(((e,r)=>A(e)?e:e[r]),e);return D(n)||n===e?D(e[r])?t:e[r]:n},E=(e,r)=>{s(e)&&e.removeEventListener&&(e.removeEventListener(u,r),e.removeEventListener(c,r),e.removeEventListener(i,r))};const N={isValid:!1,value:null};var x=e=>Array.isArray(e)?e.reduce(((e,r)=>r&&r.ref.checked?{isValid:!0,value:r.ref.value}:e),N):N,L=e=>"radio"===e.type,B=e=>"file"===e.type,M=e=>"checkbox"===e.type,T=e=>"select-multiple"===e.type;const W={value:!1,isValid:!1},$={value:!0,isValid:!0};var _=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter((e=>e&&e.ref.checked)).map((({ref:{value:e}})=>e));return{value:r,isValid:!!r.length}}const{checked:r,value:t,attributes:n}=e[0].ref;return r?n&&!D(n.value)?D(t)||""===t?$:{value:t,isValid:!0}:$:W}return W};function P(e,r,t,n,s){const i=e.current[r];if(i){const{ref:{value:e,disabled:r},ref:t,valueAsNumber:u,valueAsDate:a,setValueAs:o}=i;if(r&&n)return;return B(t)?t.files:L(t)?x(i.options).value:T(t)?(c=t.options,[...c].filter((({selected:e})=>e)).map((({value:e})=>e))):M(t)?_(i.options).value:s?e:u?""===e?NaN:+e:a?t.valueAsDate:o?o(e):e}var c;if(t)return F(t.current,r)}function H(e){return!e||e instanceof HTMLElement&&e.nodeType!==Node.DOCUMENT_NODE&&H(e.parentNode)}var U=e=>V(e)&&!Object.keys(e).length,q=e=>"boolean"===typeof e;function I(e,r){const t=R(r)?[r]:C(r),n=1==t.length?e:function(e,r){const t=r.slice(0,-1).length;let n=0;for(;n<t;)e=D(e)?n++:e[r[n++]];return e}(e,t),s=t[t.length-1];let i;n&&delete n[s];for(let c=0;c<t.slice(0,-1).length;c++){let r,n=-1;const s=t.slice(0,-(c+1)),u=s.length-1;for(c>0&&(i=e);++n<s.length;){const t=s[n];r=r?r[t]:e[t],u===n&&(V(r)&&U(r)||Array.isArray(r)&&!r.filter((e=>V(e)&&!U(e)||q(e))).length)&&(i?delete i[t]:delete e[t]),i=r}}return e}const z=(e,r)=>e&&e.ref===r;var G=e=>A(e)||!j(e);function J(e,r){if(G(e)||G(r))return r;for(const n in r){const s=e[n],i=r[n];try{e[n]=V(s)&&V(i)||Array.isArray(s)&&Array.isArray(i)?J(s,i):i}catch(t){}}return e}function K(e,r,t){if(G(e)||G(r)||e instanceof Date||r instanceof Date)return e===r;if(!(0,n.isValidElement)(e)){const n=Object.keys(e),s=Object.keys(r);if(n.length!==s.length)return!1;for(const i of n){const n=e[i];if(!t||"ref"!==i){const e=r[i];if((V(n)||Array.isArray(n))&&(V(e)||Array.isArray(e))?!K(n,e,t):n!==e)return!1}}}return!0}function Q(e,r,t,n,s){let i=-1;for(;++i<e.length;){for(const n in e[i])Array.isArray(e[i][n])?(!t[i]&&(t[i]={}),t[i][n]=[],Q(e[i][n],F(r[i]||{},n,[]),t[i][n],t[i],n)):K(F(r[i]||{},n),e[i][n])?w(t[i]||{},n):t[i]=Object.assign(Object.assign({},t[i]),{[n]:!0});n&&!t.length&&delete n[s]}return t}var X=(e,r,t)=>J(Q(e,r,t.slice(0,e.length)),Q(r,e,t.slice(0,e.length))),Y=e=>"string"===typeof e,Z=(e,r,t,n,s)=>{const i={};for(const c in e.current)(D(s)||(Y(s)?c.startsWith(s):Array.isArray(s)&&s.find((e=>c.startsWith(e)))))&&(i[c]=P(e,c,void 0,n));return t?S(i):J(r,S(i))},ee=e=>e instanceof RegExp,re=e=>V(e)&&!ee(e)?e:{value:e,message:""},te=e=>"function"===typeof e,ne=e=>Y(e)||(0,n.isValidElement)(e);function se(e,r,t="validate"){if(ne(e)||q(e)&&!e)return{type:t,message:ne(e)?e:"",ref:r}}var ie=(e,r,t,n,s)=>r?Object.assign(Object.assign({},t[e]),{types:Object.assign(Object.assign({},t[e]&&t[e].types?t[e].types:{}),{[n]:s||!0})}):{},ce=async(e,r,{ref:t,ref:{value:n},options:s,required:i,maxLength:c,minLength:u,min:a,max:o,pattern:l,validate:f},d)=>{const y=t.name,j={},R=L(t),k=M(t),C=R||k,w=""===n,S=ie.bind(null,y,r,j),D=(e,r,n,s=h,i=m)=>{const c=e?r:n;j[y]=Object.assign({type:e?s:i,message:c,ref:t},S(e?s:i,c))};if(i&&(!R&&!k&&(w||A(n))||q(n)&&!n||k&&!_(s).isValid||R&&!x(s).isValid)){const{value:n,message:s}=ne(i)?{value:!!i,message:i}:re(i);if(n&&(j[y]=Object.assign({type:p,message:s,ref:C?((e.current[y].options||[])[0]||{}).ref:t},S(p,s)),!r))return j}if((!A(a)||!A(o))&&""!==n){let e,s;const i=re(o),c=re(a);if(isNaN(n)){const r=t.valueAsDate||new Date(n);Y(i.value)&&(e=r>new Date(i.value)),Y(c.value)&&(s=r<new Date(c.value))}else{const r=t.valueAsNumber||parseFloat(n);A(i.value)||(e=r>i.value),A(c.value)||(s=r<c.value)}if((e||s)&&(D(!!e,i.message,c.message,g,b),!r))return j}if(Y(n)&&!w&&(c||u)){const e=re(c),t=re(u),s=!A(e.value)&&n.length>e.value,i=!A(t.value)&&n.length<t.value;if((s||i)&&(D(s,e.message,t.message),!r))return j}if(Y(n)&&l&&!w){const{value:e,message:s}=re(l);if(ee(e)&&!e.test(n)&&(j[y]=Object.assign({type:v,message:s,ref:t},S(v,s)),!r))return j}if(f){const n=P(e,y,d,!1,!0),i=C&&s?s[0].ref:t;if(te(f)){const e=se(await f(n),i);if(e&&(j[y]=Object.assign(Object.assign({},e),S(O,e.message)),!r))return j}else if(V(f)){let e={};for(const[t,s]of Object.entries(f)){if(!U(e)&&!r)break;const c=se(await s(n),i,t);c&&(e=Object.assign(Object.assign({},c),S(t,c.message)),r&&(j[y]=e))}if(!U(e)&&(j[y]=Object.assign({ref:i},e),!r))return j}}return j};const ue=(e,r,t=[])=>{for(const n in r){const s=e+(V(r)?`.${n}`:`[${n}]`);G(r[n])?t.push(s):ue(s,r[n],t)}return t};var ae=(e,r,t,n,s)=>{let i;return t.add(r),U(e)||(i=F(e,r),(V(i)||Array.isArray(i))&&ue(r,i).forEach((e=>t.add(e)))),D(i)?s?n:F(n,r):i},oe=({isOnBlur:e,isOnChange:r,isOnTouch:t,isTouched:n,isReValidateOnBlur:s,isReValidateOnChange:i,isBlurEvent:c,isSubmitted:u,isOnAll:a})=>!a&&(!u&&t?!(n||c):(u?s:e)?!c:!(u?i:r)||c),le=e=>e.substring(0,e.indexOf("["));const fe=(e,r)=>RegExp(`^${r}([|.)\\d+`.replace(/\[/g,"\\[").replace(/\]/g,"\\]")).test(e);var de=(e,r)=>[...e].some((e=>fe(r,e)));var ye=typeof window!==y&&typeof document!==y;function ge(e){var r;let t;if(G(e)||ye&&(e instanceof File||s(e)))return e;if(!["Set","Map","Object","Date","Array"].includes(null===(r=e.constructor)||void 0===r?void 0:r.name))return e;if(e instanceof Date)return t=new Date(e.getTime()),t;if(e instanceof Set){t=new Set;for(const r of e)t.add(r);return t}if(e instanceof Map){t=new Map;for(const r of e.keys())t.set(r,ge(e.get(r)));return t}t=Array.isArray(e)?[]:{};for(const n in e)t[n]=ge(e[n]);return t}var be=e=>({isOnSubmit:!e||e===l,isOnBlur:e===a,isOnChange:e===o,isOnAll:e===d,isOnTouch:e===f}),he=e=>L(e)||M(e);const me=typeof window===y,ve=ye?"Proxy"in window:typeof Proxy!==y;function pe({mode:e=l,reValidateMode:r=o,resolver:t,context:a,defaultValues:f={},shouldFocusError:y=!0,shouldUnregister:g=!0,criteriaMode:b}={}){const h=(0,n.useRef)({}),m=(0,n.useRef)({}),v=(0,n.useRef)({}),p=(0,n.useRef)(new Set),O=(0,n.useRef)({}),j=(0,n.useRef)({}),C=(0,n.useRef)({}),N=(0,n.useRef)({}),x=(0,n.useRef)(f),W=(0,n.useRef)(!1),$=(0,n.useRef)(!1),_=(0,n.useRef)(),q=(0,n.useRef)({}),J=(0,n.useRef)({}),Q=(0,n.useRef)(a),ee=(0,n.useRef)(t),re=(0,n.useRef)(new Set),ne=(0,n.useRef)(be(e)),{isOnSubmit:se,isOnTouch:ie}=ne.current,fe=b===d,[pe,Oe]=(0,n.useState)({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touched:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!se,errors:{}}),Ae=(0,n.useRef)({isDirty:!ve,dirtyFields:!ve,touched:!ve||ie,isValidating:!ve,isSubmitting:!ve,isValid:!ve}),je=(0,n.useRef)(pe),Ve=(0,n.useRef)(),{isOnBlur:Re,isOnChange:ke}=(0,n.useRef)(be(r)).current;Q.current=a,ee.current=t,je.current=pe,q.current=g?{}:U(q.current)?ge(f):q.current;const Ce=(0,n.useCallback)(((e={})=>{W.current||(je.current=Object.assign(Object.assign({},je.current),e),Oe(je.current))}),[]),we=()=>Ae.current.isValidating&&Ce({isValidating:!0}),Se=(0,n.useCallback)(((e,r,t=!1,n={},s)=>{let i=t||(({errors:e,name:r,error:t,validFields:n,fieldsWithValidation:s})=>{const i=D(t),c=F(e,r);return i&&!!c||!i&&!K(c,t,!0)||i&&F(s,r)&&!F(n,r)})({errors:je.current.errors,error:r,name:e,validFields:N.current,fieldsWithValidation:C.current});const c=F(je.current.errors,e);r?(I(N.current,e),i=i||!c||!K(c,r,!0),w(je.current.errors,e,r)):((F(C.current,e)||ee.current)&&(w(N.current,e,!0),i=i||c),I(je.current.errors,e)),(i&&!A(t)||!U(n)||Ae.current.isValidating)&&Ce(Object.assign(Object.assign(Object.assign({},n),ee.current?{isValid:!!s}:{}),{isValidating:!1}))}),[]),De=(0,n.useCallback)(((e,r)=>{const{ref:t,options:n}=h.current[e],i=ye&&s(t)&&A(r)?"":r;L(t)?(n||[]).forEach((({ref:e})=>e.checked=e.value===i)):B(t)&&!Y(i)?t.files=i:T(t)?[...t.options].forEach((e=>e.selected=i.includes(e.value))):M(t)&&n?n.length>1?n.forEach((({ref:e})=>e.checked=Array.isArray(i)?!!i.find((r=>r===e.value)):i===e.value)):n[0].ref.checked=!!i:t.value=i}),[]),Fe=(0,n.useCallback)(((e,r)=>{if(Ae.current.isDirty){const t=_e();return e&&r&&w(t,e,r),!K(t,x.current)}return!1}),[]),Ee=(0,n.useCallback)(((e,r=!0)=>{if(Ae.current.isDirty||Ae.current.dirtyFields){const t=!K(F(x.current,e),P(h,e,q)),n=F(je.current.dirtyFields,e),s=je.current.isDirty;t?w(je.current.dirtyFields,e,!0):I(je.current.dirtyFields,e);const i={isDirty:Fe(),dirtyFields:je.current.dirtyFields},c=Ae.current.isDirty&&s!==i.isDirty||Ae.current.dirtyFields&&n!==F(je.current.dirtyFields,e);return c&&r&&Ce(i),c?i:{}}return{}}),[]),Ne=(0,n.useCallback)((async(e,r)=>{const t=(await ce(h,fe,h.current[e],q))[e];return Se(e,t,r),D(t)}),[Se,fe]),xe=(0,n.useCallback)((async e=>{const{errors:r}=await ee.current(_e(),Q.current,fe),t=je.current.isValid;if(Array.isArray(e)){const t=e.map((e=>{const t=F(r,e);return t?w(je.current.errors,e,t):I(je.current.errors,e),!t})).every(Boolean);return Ce({isValid:U(r),isValidating:!1}),t}{const n=F(r,e);return Se(e,n,t!==U(r),{},U(r)),!n}}),[Se,fe]),Le=(0,n.useCallback)((async e=>{const r=e||Object.keys(h.current);if(we(),ee.current)return xe(r);if(Array.isArray(r)){!e&&(je.current.errors={});const t=await Promise.all(r.map((async e=>await Ne(e,null))));return Ce({isValidating:!1}),t.every(Boolean)}return await Ne(r)}),[xe,Ne]),Be=(0,n.useCallback)(((e,r,{shouldDirty:t,shouldValidate:n})=>{const s={};w(s,e,r);for(const i of ue(e,r))h.current[i]&&(De(i,F(s,i)),t&&Ee(i),n&&Le(i))}),[Le,De,Ee]),Me=(0,n.useCallback)(((e,r,t)=>{if(!g&&!G(r)&&w(q.current,e,Array.isArray(r)?[...r]:Object.assign({},r)),h.current[e])De(e,r),t.shouldDirty&&Ee(e),t.shouldValidate&&Le(e);else if(!G(r)&&(Be(e,r,t),re.current.has(e))){const n=le(e)||e;w(m.current,e,r),J.current[n]({[n]:F(m.current,n)}),(Ae.current.isDirty||Ae.current.dirtyFields)&&t.shouldDirty&&(w(je.current.dirtyFields,e,X(r,F(x.current,e,[]),F(je.current.dirtyFields,e,[]))),Ce({isDirty:!K(Object.assign(Object.assign({},_e()),{[e]:r}),x.current)}))}!g&&w(q.current,e,r)}),[Ee,De,Be]),Te=e=>$.current||p.current.has(e)||p.current.has((e.match(/\w+/)||[])[0]),We=e=>{let r=!0;if(!U(O.current))for(const t in O.current)e&&O.current[t].size&&!O.current[t].has(e)&&!O.current[t].has(le(e))||(j.current[t](),r=!1);return r};function $e(e){if(!g){let r=ge(e);for(const e of re.current)R(e)&&!r[e]&&(r=Object.assign(Object.assign({},r),{[e]:[]}));return r}return e}function _e(e){if(Y(e))return P(h,e,q);if(Array.isArray(e)){const r={};for(const t of e)w(r,t,P(h,t,q));return r}return $e(Z(h,ge(q.current),g))}_.current=_.current?_.current:async({type:e,target:r})=>{let t=r.name;const n=h.current[t];let s,c;if(n){const u=e===i,a=oe(Object.assign({isBlurEvent:u,isReValidateOnChange:ke,isReValidateOnBlur:Re,isTouched:!!F(je.current.touched,t),isSubmitted:je.current.isSubmitted},ne.current));let o=Ee(t,!1),l=!U(o)||!u&&Te(t);if(u&&!F(je.current.touched,t)&&Ae.current.touched&&(w(je.current.touched,t,!0),o=Object.assign(Object.assign({},o),{touched:je.current.touched})),!g&&M(r)&&w(q.current,t,P(h,t)),a)return!u&&We(t),(!U(o)||l&&U(o))&&Ce(o);if(we(),ee.current){const{errors:e}=await ee.current(_e(),Q.current,fe),n=je.current.isValid;if(s=F(e,t),M(r)&&!s&&ee.current){const r=le(t),n=F(e,r,{});n.type&&n.message&&(s=n),r&&(n||F(je.current.errors,r))&&(t=r)}c=U(e),n!==c&&(l=!0)}else s=(await ce(h,fe,n,q))[t];!u&&We(t),Se(t,s,l,o,c)}};const Pe=(0,n.useCallback)((async(e={})=>{const r=U(h.current)?x.current:{},{errors:t}=await ee.current(Object.assign(Object.assign(Object.assign({},r),_e()),e),Q.current,fe)||{},n=U(t);je.current.isValid!==n&&Ce({isValid:n})}),[fe]),He=(0,n.useCallback)(((e,r)=>{!function(e,r,t,n,s,i){const{ref:c,ref:{name:u}}=t,a=e.current[u];if(!s){const r=P(e,u,n);!D(r)&&w(n.current,u,r)}c.type&&a?L(c)||M(c)?Array.isArray(a.options)&&a.options.length?(k(a.options).forEach(((e={},t)=>{(H(e.ref)&&z(e,e.ref)||i)&&(E(e.ref,r),I(a.options,`[${t}]`))})),a.options&&!k(a.options).length&&delete e.current[u]):delete e.current[u]:(H(c)&&z(a,c)||i)&&(E(c,r),delete e.current[u]):delete e.current[u]}(h,_.current,e,q,g,r),g&&(I(N.current,e.ref.name),I(C.current,e.ref.name))}),[g]),Ue=(0,n.useCallback)((e=>{if($.current)Ce();else{for(const r of p.current)if(r.startsWith(e)){Ce();break}We(e)}}),[]),qe=(0,n.useCallback)(((e,r)=>{e&&(He(e,r),g&&!k(e.options||[]).length&&(I(je.current.errors,e.ref.name),w(je.current.dirtyFields,e.ref.name,!0),Ce({isDirty:Fe()}),Ae.current.isValid&&ee.current&&Pe(),Ue(e.ref.name)))}),[Pe,He]);const Ie=(0,n.useCallback)(((e,r,t)=>{const n=t?O.current[t]:p.current;let s=Z(h,ge(q.current),g,!1,e);if(Y(e)){const t=le(e)||e;return re.current.has(t)&&(s=Object.assign(Object.assign({},v.current),s)),ae(s,e,n,D(F(x.current,e))?r:F(x.current,e),!0)}const i=D(r)?x.current:r;return Array.isArray(e)?e.reduce(((e,r)=>Object.assign(Object.assign({},e),{[r]:ae(s,r,n,i)})),{}):($.current=D(t),S(!U(s)&&s||i))}),[]);function ze(e,r={}){const{name:t,type:n,value:a}=e,o=Object.assign({ref:e},r),l=h.current,f=he(e),d=de(re.current,t),y=r=>ye&&(!s(e)||r===e);let b,m=l[t],v=!0;if(m&&(f?Array.isArray(m.options)&&k(m.options).find((e=>a===e.ref.value&&y(e.ref))):y(m.ref)))return void(l[t]=Object.assign(Object.assign({},m),r));m=n?f?Object.assign({options:[...k(m&&m.options||[]),{ref:e}],ref:{type:n,name:t}},r):Object.assign({},o):o,l[t]=m;const p=D(F(q.current,t));U(x.current)&&p||(b=F(p?x.current:q.current,t),v=D(b),v||d||De(t,b)),U(r)||(w(C.current,t,!0),!se&&Ae.current.isValid&&ce(h,fe,m,q).then((e=>{const r=je.current.isValid;U(e)?w(N.current,t,!0):I(N.current,t),r!==U(e)&&Ce()}))),!g||d&&v||!d&&I(je.current.dirtyFields,t),n&&function({ref:e},r,t){s(e)&&t&&(e.addEventListener(r?c:u,t),e.addEventListener(i,t))}(f&&m.options?m.options[m.options.length-1]:m,f||"select-one"===e.type,_.current)}const Ge=(0,n.useCallback)(((e,r)=>async t=>{t&&t.preventDefault&&(t.preventDefault(),t.persist());let n={},s=$e(Z(h,ge(q.current),g,!0));Ae.current.isSubmitting&&Ce({isSubmitting:!0});try{if(ee.current){const{errors:e,values:r}=await ee.current(s,Q.current,fe);je.current.errors=n=e,s=r}else for(const e of Object.values(h.current))if(e){const{name:r}=e.ref,t=await ce(h,fe,e,q);t[r]?(w(n,r,t[r]),I(N.current,r)):F(C.current,r)&&(I(je.current.errors,r),w(N.current,r,!0))}U(n)&&Object.keys(je.current.errors).every((e=>e in h.current))?(Ce({errors:{},isSubmitting:!0}),await e(s,t)):(je.current.errors=Object.assign(Object.assign({},je.current.errors),n),r&&await r(je.current.errors,t),y&&((e,r)=>{for(const t in e)if(F(r,t)){const r=e[t];if(r){if(r.ref.focus&&D(r.ref.focus()))break;if(r.options){r.options[0].ref.focus();break}}}})(h.current,je.current.errors))}finally{je.current.isSubmitting=!1,Ce({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:U(je.current.errors),submitCount:je.current.submitCount+1})}}),[y,fe]);(0,n.useEffect)((()=>{t&&Ae.current.isValid&&Pe(),Ve.current=Ve.current||!ye?Ve.current:function(e,r){const t=new MutationObserver((()=>{for(const t of Object.values(e.current))if(t&&t.options)for(const e of t.options)e&&e.ref&&H(e.ref)&&r(t);else t&&H(t.ref)&&r(t)}));return t.observe(window.document,{childList:!0,subtree:!0}),t}(h,qe)}),[qe,x.current]),(0,n.useEffect)((()=>()=>{Ve.current&&Ve.current.disconnect(),W.current=!0,Object.values(h.current).forEach((e=>qe(e,!0)))}),[]),!t&&Ae.current.isValid&&(pe.isValid=K(N.current,C.current)&&U(je.current.errors));const Je={trigger:Le,setValue:(0,n.useCallback)((function(e,r,t){Me(e,r,t||{}),Te(e)&&Ce(),We(e)}),[Me,Le]),getValues:(0,n.useCallback)(_e,[]),register:(0,n.useCallback)((function(e,r){if(!me)if(Y(e))ze({name:e},r);else{if(!V(e)||!("name"in e))return r=>r&&ze(r,e);ze(e,r)}}),[x.current]),unregister:(0,n.useCallback)((function(e){for(const r of Array.isArray(e)?e:[e])qe(h.current[r],!0)}),[]),formState:ve?new Proxy(pe,{get:(e,r)=>{if(r in e)return Ae.current[r]=!0,e[r]}}):pe},Ke=(0,n.useMemo)((()=>Object.assign({isFormDirty:Fe,updateWatchedValue:Ue,shouldUnregister:g,updateFormState:Ce,removeFieldEventListener:He,watchInternal:Ie,mode:ne.current,reValidateMode:{isReValidateOnBlur:Re,isReValidateOnChange:ke},validateResolver:t?Pe:void 0,fieldsRef:h,resetFieldArrayFunctionRef:J,useWatchFieldsRef:O,useWatchRenderFunctionsRef:j,fieldArrayDefaultValuesRef:m,validFieldsRef:N,fieldsWithValidationRef:C,fieldArrayNamesRef:re,readFormStateRef:Ae,formStateRef:je,defaultValuesRef:x,shallowFieldsStateRef:q,fieldArrayValuesRef:v},Je)),[x.current,Ue,g,He,Ie]);return Object.assign({watch:function(e,r){return Ie(e,r)},control:Ke,handleSubmit:Ge,reset:(0,n.useCallback)(((e,r={})=>{if(ye)for(const n of Object.values(h.current))if(n){const{ref:e,options:r}=n,i=he(e)&&Array.isArray(r)?r[0].ref:e;if(s(i))try{i.closest("form").reset();break}catch(t){}}h.current={},x.current=Object.assign({},e||x.current),e&&We(""),Object.values(J.current).forEach((e=>te(e)&&e())),q.current=g?{}:ge(e||x.current),(({errors:e,isDirty:r,isSubmitted:t,touched:n,isValid:s,submitCount:i,dirtyFields:c})=>{s||(N.current={},C.current={}),m.current={},p.current=new Set,$.current=!1,Ce({submitCount:i?je.current.submitCount:0,isDirty:!!r&&je.current.isDirty,isSubmitted:!!t&&je.current.isSubmitted,isValid:!!s&&je.current.isValid,dirtyFields:c?je.current.dirtyFields:{},touched:n?je.current.touched:{},errors:e?je.current.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})})(r)}),[]),clearErrors:(0,n.useCallback)((function(e){e&&(Array.isArray(e)?e:[e]).forEach((e=>h.current[e]&&R(e)?delete je.current.errors[e]:I(je.current.errors,e))),Ce({errors:e?je.current.errors:{}})}),[]),setError:(0,n.useCallback)((function(e,r){const t=(h.current[e]||{}).ref;w(je.current.errors,e,Object.assign(Object.assign({},r),{ref:t})),Ce({isValid:!1}),r.shouldFocus&&t&&t.focus&&t.focus()}),[]),errors:pe.errors},Je)}const Oe=(0,n.createContext)(null);Oe.displayName="RHFContext"}}]);