import{r as ae,t as se,u as pe,v as A}from"./chunk-CUSBST6C.js";import{b as j,c as K,d as ee,e as v,f as te,i as re,j as y,k as oe,l as ie,m as ne}from"./chunk-S7UAWER7.js";import{f as le,g as d,h as S,m as ce,n as R,p as de,u as me}from"./chunk-4O4HOXQ6.js";import"./chunk-XAZLOLJU.js";import{Bb as P,C as m,Ca as c,Db as G,Fb as Q,Hb as X,Ob as J,Qa as q,Ra as w,S as l,Sa as W,U as V,Ua as $,V as L,Wa as h,X as a,Yb as f,Za as g,_ as z,aa as n,ba as D,fa as U,ia as Y,j as x,ja as C,kb as F,l as k,lb as O,mb as Z,n as M,o as _,r as B,va as u}from"./chunk-HW2HHEWN.js";var T=[]=[{path:"register",loadChildren:()=>import("./chunk-TDIBNMF4.js").then(o=>o.registerRoutes)},{path:"quotes",loadChildren:()=>import("./chunk-4ZYZOXBC.js").then(o=>o.quotesTableRouter)}];var ye=(()=>{class o extends R{constructor(e,r,i){super(e,r,i)}ngOnDestroy(){this.flush()}static{this.\u0275fac=function(r){return new(r||o)(n(f),n(d),n(S))}}static{this.\u0275prov=a({token:o,factory:o.\u0275fac})}}return o})();function Ae(){return new ce}function Se(o,t,e){return new me(o,t,e)}var ue=[{provide:S,useFactory:Ae},{provide:R,useClass:ye},{provide:h,useFactory:Se,deps:[v,R,u]}],Re=[{provide:d,useFactory:()=>new de},{provide:c,useValue:"BrowserAnimations"},...ue],Ve=[{provide:d,useClass:le},{provide:c,useValue:"NoopAnimations"},...ue];function he(){return g("NgEagerAnimations"),[...Re]}var Ie="@",be=(()=>{class o{constructor(e,r,i,s,p){this.doc=e,this.delegate=r,this.zone=i,this.animationType=s,this.moduleImpl=p,this._rendererFactoryPromise=null,this.scheduler=D($,{optional:!0}),this.loadingSchedulerFn=D(Ne,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-ZMXN4JAD.js").then(i=>i),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(e):r=e(),r.catch(i=>{throw new L(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:s})=>{this._engine=i(this.animationType,this.doc);let p=new s(this.delegate,this._engine,this.zone);return this.delegate=p,p})}createRenderer(e,r){let i=this.delegate.createRenderer(e,r);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let s=new H(i);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(p=>{let ve=p.createRenderer(e,r);s.use(ve),this.scheduler?.notify(10)}).catch(p=>{s.use(i)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(r){W()}}static{this.\u0275prov=a({token:o,factory:o.\u0275fac})}}return o})(),H=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,r,i){this.delegate.insertBefore(t,e,r,i)}removeChild(t,e,r){this.delegate.removeChild(t,e,r)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,r,i){this.delegate.setAttribute(t,e,r,i)}removeAttribute(t,e,r){this.delegate.removeAttribute(t,e,r)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,r,i){this.delegate.setStyle(t,e,r,i)}removeStyle(t,e,r){this.delegate.removeStyle(t,e,r)}setProperty(t,e,r){this.shouldReplay(e)&&this.replay.push(i=>i.setProperty(t,e,r)),this.delegate.setProperty(t,e,r)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,r){return this.shouldReplay(e)&&this.replay.push(i=>i.listen(t,e,r)),this.delegate.listen(t,e,r)}shouldReplay(t){return this.replay!==null&&t.startsWith(Ie)}},Ne=new z("");function ge(o="animations"){return g("NgAsyncAnimations"),Y([{provide:h,useFactory:(t,e,r)=>new be(t,e,r,o),deps:[f,v,u]},{provide:c,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var b=class o{constructor(t){this.storageService=t;this.appStorage=this.storageService.initStorageObj(2)}appStorage;intercept(t,e){return this.appStorage.getStorageData("jwt").pipe(l(r=>r?M(t.clone({headers:t.headers.set("Authorization",`Bearer ${r.replaceAll('"',"")}`)})):M(t)),l(r=>e.handle(r)),m(r=>(console.log("error",r),k)))}static \u0275fac=function(e){return new(e||o)(n(A))};static \u0275prov=a({token:o,factory:o.\u0275fac})};var N=class o{constructor(t,e){this.snack=t;this.router=e;this.errorPipe.pipe(l(()=>this.snack.open(`Your session is not authenticated.
 You have to Log In again`,"Go to login",{panelClass:["error-snackBar"],horizontalPosition:"center",verticalPosition:"bottom"}).onAction()),V(()=>this.router.navigate(["register"]))).subscribe()}errorPipe=new x;intercept(t,e){return e.handle(t).pipe(B(r=>r),m(r=>{let i="";if(r.error instanceof ErrorEvent)console.log("This is client side error"),i=`Error: ${r.error.message}`;else{switch(console.log("This is server side error"),r.status){case 401:this.errorPipe.next(!0);break;case 403:this.errorPipe.next(!0);break;default:console.log("default"),r.error.detail&&this.snack.open("Error:"+r.error.detail.split(`
`)[0],"Okay",{panelClass:["error-snackBar"],horizontalPosition:"center",verticalPosition:"bottom"});break}i=`Error Code: ${r.status},  Message: ${r.message}`}return _(()=>r)}))}static \u0275fac=function(e){return new(e||o)(n(ae),n(y))};static \u0275prov=a({token:o,factory:o.\u0275fac})};var fe={providers:[C(ne.forRoot(T,{onSameUrlNavigation:"reload"})),C(pe.forRoot(se)),he(),J({eventCoalescing:!0}),ie(T),ge(),K(ee()),{provide:j,useClass:b,multi:!0},{provide:j,useClass:N,multi:!0}]};var E=class o{constructor(t,e){this.router=t;this.storageService=e}title="RTQ-NgRx ss";myVer=X.full;ngOnInit(){let t=this;window.addEventListener("beforeunload",function(e){console.log("beforeunload"),t.storageService.initStorageObj(1).clearStorageData().subscribe(i=>console.log("cleared",i))})}static \u0275fac=function(e){return new(e||o)(w(y),w(A))};static \u0275cmp=U({type:o,selectors:[["app-root"]],standalone:!0,features:[Q],decls:6,vars:1,consts:[[2,"display","grid","justify-content","end","padding-right","1%"],[2,"margin","0","color","aliceblue"],["routerLink","/register",2,"text-align","end"]],template:function(e,r){e&1&&(F(0,"header",0)(1,"p",1),P(2),O(),F(3,"a",2),P(4,"LogIn/SignUp"),O()(),Z(5,"router-outlet")),e&2&&(q(2),G("real-time quotes dashboard angular ver ",r.myVer,""))},dependencies:[re,oe]})};te(E,fe).catch(o=>console.error(o));
