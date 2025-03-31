(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[114],{8291:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});var l=s(2898);let r=(0,l.Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},5340:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});var l=s(2898);let r=(0,l.Z)("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]])},6699:function(e,t,s){Promise.resolve().then(s.bind(s,7258))},7258:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return StoreClient}});var l=s(7437),r=s(2265),a=s(2898);let n=(0,a.Z)("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]),i=(0,a.Z)("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]),c=(0,a.Z)("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]),d=(0,a.Z)("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]);var o=s(9074);function SkillLevelSelector(e){let{skillLevel:t,setSkillLevel:s,onSubmit:a}=e,{t:m}=(0,o.$)(),[x,u]=(0,r.useState)(null),renderBenefits=e=>(0,l.jsx)("ul",{className:"mt-3 space-y-1",children:e.map((e,t)=>(0,l.jsxs)("li",{className:"flex items-start",children:[(0,l.jsx)(n,{className:"h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0"}),(0,l.jsx)("span",{className:"text-xs text-cream/90",children:e})]},t))}),handleSelectAndSubmit=e=>{s(e),a()},h="w-full h-12 py-3 px-4 rounded-lg cursor-pointer transition-all text-white font-medium\n    transform hover:scale-105 hover:shadow-lg flex items-center justify-center";return(0,l.jsx)("div",{className:"mx-auto max-w-4xl",children:(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[(0,l.jsxs)("div",{className:"relative overflow-hidden rounded-xl transition-all duration-300 flex flex-col h-full ".concat("novice"===t?"ring-2 ring-primary shadow-lg shadow-primary/20":"border border-orange-500/30"," ").concat("novice"===x?"transform scale-[1.02] shadow-lg shadow-blue-500/30":""," hover:border-blue-500/70"),onMouseEnter:()=>u("novice"),onMouseLeave:()=>u(null),children:[(0,l.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-[#1A237E]/30 to-[#0A1929]/80 opacity-80"}),(0,l.jsxs)("div",{className:"relative p-6 flex-1 flex flex-col",children:[(0,l.jsxs)("div",{className:"flex items-center mb-4",children:[(0,l.jsx)("div",{className:"bg-[#1A237E] p-3 rounded-full mr-3",children:(0,l.jsx)(i,{className:"h-6 w-6 text-white"})}),(0,l.jsx)("h3",{className:"text-xl font-bold text-cream",children:m("store.skillLevel.novice.title")})]}),(0,l.jsx)("p",{className:"text-sm text-cream/80 mb-4",children:m("store.skillLevel.novice.description")}),(0,l.jsx)("div",{className:"flex-1",children:renderBenefits([m("store.skillLevel.novice.benefits.benefit1"),m("store.skillLevel.novice.benefits.benefit2"),m("store.skillLevel.novice.benefits.benefit3"),m("store.skillLevel.novice.benefits.benefit4")])}),(0,l.jsx)("div",{className:"mt-auto pt-6",children:(0,l.jsx)("button",{onClick:()=>handleSelectAndSubmit("novice"),className:"".concat(h," bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800"),children:m("store.skillLevel.novice.cta")})})]})]}),(0,l.jsxs)("div",{className:"relative overflow-hidden rounded-xl transition-all duration-300 flex flex-col h-full ".concat("advanced"===t?"ring-2 ring-primary shadow-lg shadow-primary/20":"border border-orange-500/30"," ").concat("advanced"===x?"transform scale-[1.02] shadow-lg shadow-primary/30":""," hover:border-primary/70"),onMouseEnter:()=>u("advanced"),onMouseLeave:()=>u(null),children:[(0,l.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-[#000000] to-[#1A1A1A] opacity-80"}),(0,l.jsxs)("div",{className:"relative p-6 flex-1 flex flex-col",children:[(0,l.jsxs)("div",{className:"flex flex-col items-center mb-4",children:[(0,l.jsxs)("div",{className:"bg-green-600 text-xs font-bold text-white px-3 py-1 rounded-full mb-3",children:["\uD83D\uDD25 ",m("store.skillLevel.bestSeller")]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"bg-primary p-3 rounded-full mr-3",children:(0,l.jsx)(c,{className:"h-6 w-6 text-white"})}),(0,l.jsx)("h3",{className:"text-xl font-bold text-cream",children:m("store.skillLevel.advanced.title")})]})]}),(0,l.jsx)("p",{className:"text-sm text-cream/80 mb-4",children:m("store.skillLevel.advanced.description")}),(0,l.jsx)("div",{className:"flex-1",children:renderBenefits([m("store.skillLevel.advanced.benefits.benefit1"),m("store.skillLevel.advanced.benefits.benefit2"),m("store.skillLevel.advanced.benefits.benefit3"),m("store.skillLevel.advanced.benefits.benefit4"),m("store.skillLevel.advanced.benefits.benefit5")])}),(0,l.jsx)("div",{className:"mt-auto pt-6",children:(0,l.jsx)("button",{onClick:()=>handleSelectAndSubmit("advanced"),className:"".concat(h," bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"),children:m("store.skillLevel.advanced.cta")})})]})]}),(0,l.jsxs)("div",{className:"relative overflow-hidden rounded-xl transition-all duration-300 flex flex-col h-full ".concat("training"===t?"ring-2 ring-primary shadow-lg shadow-primary/20":"border border-orange-500/30"," ").concat("training"===x?"transform scale-[1.02] shadow-lg shadow-purple-500/30":""," hover:border-purple-500/70"),onMouseEnter:()=>u("training"),onMouseLeave:()=>u(null),children:[(0,l.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-[#4A148C]/40 to-[#311B92]/80 opacity-80"}),(0,l.jsxs)("div",{className:"relative p-6 flex-1 flex flex-col",children:[(0,l.jsxs)("div",{className:"flex items-center mb-4",children:[(0,l.jsx)("div",{className:"bg-purple-700 p-3 rounded-full mr-3",children:(0,l.jsx)(d,{className:"h-6 w-6 text-white"})}),(0,l.jsx)("h3",{className:"text-xl font-bold text-cream",children:m("store.skillLevel.training.title")})]}),(0,l.jsx)("p",{className:"text-sm text-cream/80 mb-4",children:m("store.skillLevel.training.description")}),(0,l.jsx)("div",{className:"flex-1",children:renderBenefits([m("store.skillLevel.training.benefits.benefit1"),m("store.skillLevel.training.benefits.benefit2"),m("store.skillLevel.training.benefits.benefit3"),m("store.skillLevel.training.benefits.benefit4"),m("store.skillLevel.training.benefits.benefit5"),m("store.skillLevel.training.benefits.benefit6")])}),(0,l.jsx)("div",{className:"mt-auto pt-6",children:(0,l.jsx)("button",{onClick:()=>handleSelectAndSubmit("training"),className:"".concat(h," bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800"),children:m("store.skillLevel.training.cta")})})]})]})]})})}let m=(0,a.Z)("ListFilter",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M10 18h4",key:"1ulq68"}]]),x=(0,a.Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);var u=s(8291),h=s(3023),f=s(9311);let v=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,l.jsx)("div",{ref:t,className:(0,f.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",s),...r})});v.displayName="Card";let p=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,l.jsx)("div",{ref:t,className:(0,f.cn)("flex flex-col space-y-1.5 p-6",s),...r})});p.displayName="CardHeader";let g=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,l.jsx)("h3",{ref:t,className:(0,f.cn)("text-2xl font-semibold leading-none tracking-tight",s),...r})});g.displayName="CardTitle";let j=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,l.jsx)("p",{ref:t,className:(0,f.cn)("text-sm text-muted-foreground",s),...r})});j.displayName="CardDescription";let b=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,l.jsx)("div",{ref:t,className:(0,f.cn)("p-6 pt-0",s),...r})});b.displayName="CardContent";let N=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,l.jsx)("div",{ref:t,className:(0,f.cn)("flex items-center p-6 pt-0",s),...r})});N.displayName="CardFooter";let k=(0,a.Z)("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);function CurrencySelector(){let{currency:e,setCurrency:t}=(0,o.$)(),[s,a]=(0,r.useState)(!1),n=(0,r.useRef)(null),i=(0,r.useRef)(null);(0,r.useEffect)(()=>{let handleClickOutside=e=>{n.current&&!n.current.contains(e.target)&&i.current&&!i.current.contains(e.target)&&a(!1)};return s&&document.addEventListener("mousedown",handleClickOutside),()=>{document.removeEventListener("mousedown",handleClickOutside)}},[s]);let selectCurrency=e=>{t(e),a(!1)};return(0,l.jsxs)("div",{className:"relative inline-block",children:[(0,l.jsxs)(h.z,{ref:i,variant:"outline",size:"sm",className:"text-cream border-orange-500/30 bg-[#0A0A0A] hover:bg-[#1A1A1A] min-w-[80px] sm:min-w-[100px] text-xs sm:text-sm",onClick:()=>{a(!s)},children:[(0,l.jsx)(k,{className:"h-4 w-4 mr-1"}),e]}),s&&(0,l.jsx)("div",{ref:n,className:"absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 rounded-md shadow-lg bg-[#0A0A0A] border border-orange-500/30 z-50",children:(0,l.jsxs)("div",{className:"py-1",children:[(0,l.jsxs)("button",{onClick:()=>selectCurrency("USD"),className:"flex items-center gap-2 px-4 py-2 text-sm w-full text-left ".concat("USD"===e?"bg-[#1A1A1A]":"hover:bg-[#1A1A1A]"," text-cream"),children:[(0,l.jsx)("span",{className:"text-base",role:"img","aria-label":"USD",children:"\uD83C\uDF0E"}),"USD (Internacional)"]}),(0,l.jsxs)("button",{onClick:()=>selectCurrency("ARS"),className:"flex items-center gap-2 px-4 py-2 text-sm w-full text-left ".concat("ARS"===e?"bg-[#1A1A1A]":"hover:bg-[#1A1A1A]"," text-cream"),children:[(0,l.jsx)("span",{className:"text-base",role:"img","aria-label":"ARS",children:"\uD83C\uDDE6\uD83C\uDDF7"}),"ARS (Argentina)"]})]})})]})}var w=s(5340);let A=(0,a.Z)("StarHalf",[["path",{d:"M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2",key:"nare05"}]]),y=["#FF7200","#5865F2","#7289DA","#FF4D4D","#4CAF50","#9C27B0","#2196F3","#FFEB3B","#FF9800","#00BCD4","#795548","#607D8B","#E91E63","#673AB7","#3F51B5","#009688","#FFC107","#8BC34A"],C=[{id:1,name:"KevFilmmaker",roleKey:"director",rating:5,commentId:"review1"},{id:2,name:"AnaVFX",roleKey:"vfxSupervisor",rating:4.5,commentId:"review2"},{id:3,name:"MotionMaster",roleKey:"motionDesigner",rating:5,commentId:"review3"},{id:4,name:"EditPro_Sara",roleKey:"editor",rating:4.5,commentId:"review4"},{id:5,name:"VFX_Wizard",roleKey:"vfxArtist",rating:5,commentId:"review5"},{id:6,name:"CinematicJuan",roleKey:"cinematographer",rating:5,commentId:"review6"},{id:7,name:"AfterEffectsQueen",roleKey:"aeSpecialist",rating:5,commentId:"review7"},{id:8,name:"TransitionKing",roleKey:"transitionEditor",rating:4.5,commentId:"review8"}];function FixedReviewCarousel(){let{t:e}=(0,o.$)(),[t,s]=(0,r.useState)(0),[a,n]=(0,r.useState)([]),i=(0,r.useRef)(null);(0,r.useEffect)(()=>{let e=C.map((e,t)=>({...e,color:y[t%y.length]}));n(e)},[]),(0,r.useEffect)(()=>{if(0!==a.length)return i.current=setInterval(()=>{s(e=>(e+1)%(a.length-2+1))},3e3),()=>{i.current&&clearInterval(i.current)}},[a]);let renderStars=e=>{let t=[],s=Math.floor(e);for(let e=0;e<s;e++)t.push((0,l.jsx)(w.Z,{className:"h-4 w-4 fill-primary text-primary"},"full-".concat(e)));return e%1!=0&&t.push((0,l.jsx)(A,{className:"h-4 w-4 fill-primary text-primary"},"half")),t},renderAvatar=(e,t)=>{let s=e.charAt(0).toUpperCase();return(0,l.jsx)("div",{className:"relative h-12 w-12 rounded-full overflow-hidden mr-4 flex items-center justify-center text-white font-bold text-lg",style:{backgroundColor:t},children:s})};if(0===a.length)return null;let c=window.innerWidth>=768?3:1,d=a.slice(t,t+c);return d.length<c&&d.push(...a.slice(0,c-d.length)),(0,l.jsx)("div",{className:"py-10 bg-[#050505]",children:(0,l.jsxs)("div",{className:"container mx-auto px-4",children:[(0,l.jsx)("h2",{className:"text-2xl md:text-3xl font-bold mb-6 text-center text-cream",children:e("store.reviews.title")}),(0,l.jsx)("p",{className:"text-cream/80 text-center max-w-2xl mx-auto mb-10",children:e("store.reviews.subtitle")}),(0,l.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:d.map(t=>(0,l.jsxs)("div",{className:"bg-[#0A0A0A] rounded-lg p-6 border border-orange-500/30 transition-all duration-300 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10",children:[(0,l.jsxs)("div",{className:"flex items-center mb-4",children:[renderAvatar(t.name,t.color),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-medium text-cream",children:t.name}),(0,l.jsx)("p",{className:"text-sm text-cream/70",children:e("store.reviews.roles.".concat(t.roleKey))})]})]}),(0,l.jsx)("div",{className:"flex mb-3",children:renderStars(t.rating)}),(0,l.jsx)("p",{className:"text-cream/80 text-sm",children:e("store.reviews.comments.".concat(t.commentId))})]},t.id))}),(0,l.jsx)("div",{className:"flex justify-center mt-6 space-x-2",children:Array.from({length:a.length-c+1}).map((e,r)=>(0,l.jsx)("button",{className:"w-2 h-2 rounded-full transition-all ".concat(t===r?"bg-primary w-4":"bg-cream/30"),onClick:()=>{s(r),i.current&&(clearInterval(i.current),i.current=setInterval(()=>{s(e=>(e+1)%(a.length-c+1))},3e3))}},r))})]})})}function AdvancedPackCard(e){let{setSkillLevel:t}=e,{t:s,formatPrice:a,currency:i}=(0,o.$)(),[c,d]=(0,r.useState)(!1),f=(0,r.useRef)(null),j=(0,r.useRef)(null),k=[s("store.products.advancedPack.features.feature1"),s("store.products.advancedPack.features.feature2"),s("store.products.advancedPack.features.feature3"),s("store.products.advancedPack.features.feature4"),s("store.products.advancedPack.features.feature5"),s("store.products.advancedPack.features.feature6"),s("store.products.advancedPack.features.feature7")];return(0,r.useEffect)(()=>{let handleClickOutside=e=>{f.current&&!f.current.contains(e.target)&&j.current&&!j.current.contains(e.target)&&d(!1)};return c&&document.addEventListener("mousedown",handleClickOutside),()=>{document.removeEventListener("mousedown",handleClickOutside)}},[c]),(0,l.jsxs)("div",{className:"space-y-6",children:[(0,l.jsxs)("div",{className:"md:text-left text-center md:max-w-none max-w-[700px] mx-auto md:mx-0",children:[(0,l.jsx)("h1",{className:"text-2xl md:text-3xl font-bold tracking-tighter sm:text-3xl text-cream",children:s("store.products.advancedPack.title")}),(0,l.jsx)("p",{className:"text-sm md:text-base text-cream/80 mt-2",children:s("store.products.advancedPack.description")})]}),(0,l.jsxs)("div",{className:"container mx-auto px-4 md:px-0",children:[(0,l.jsx)("div",{className:"flex md:justify-between justify-center flex-wrap md:flex-nowrap gap-2 md:gap-4 mb-6 items-center",children:(0,l.jsxs)("div",{className:"flex items-center gap-2 md:gap-4",children:[(0,l.jsx)(CurrencySelector,{}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsxs)(h.z,{ref:j,onClick:()=>{d(!c)},size:"sm",variant:"outline",className:"border-orange-500/30 bg-[#0A0A0A] hover:bg-[#1A1A1A] text-cream text-xs sm:text-sm",children:[(0,l.jsx)(m,{className:"h-4 w-4 mr-1"}),(0,l.jsxs)("span",{className:"hidden xs:inline",children:[s("store.products.changeLevel"),":"]}),(0,l.jsx)("span",{className:"font-medium ml-1",children:s("store.skillLevel.advanced.title")}),(0,l.jsx)(x,{className:"h-4 w-4 ml-1"})]}),c&&(0,l.jsx)("div",{ref:f,className:"absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#0A0A0A] border border-orange-500/30 z-50",children:(0,l.jsxs)("div",{className:"py-1",children:[(0,l.jsx)("button",{onClick:()=>t("novice"),className:"flex items-center gap-2 px-4 py-2 text-sm w-full text-left hover:bg-[#1A1A1A] text-cream",children:s("store.skillLevel.novice.title")}),(0,l.jsx)("button",{onClick:()=>t("advanced"),className:"flex items-center gap-2 px-4 py-2 text-sm w-full text-left bg-[#1A1A1A] text-cream",children:s("store.skillLevel.advanced.title")}),(0,l.jsx)("button",{onClick:()=>t("training"),className:"flex items-center gap-2 px-4 py-2 text-sm w-full text-left hover:bg-[#1A1A1A] text-cream",children:s("store.skillLevel.training.title")})]})})]})]})}),(0,l.jsx)("div",{className:"grid gap-6 sm:grid-cols-1 md:max-w-[600px] md:mx-0 mx-auto",children:(0,l.jsxs)(v,{className:"flex flex-col h-full bg-[#0A0A0A] border-orange-500/30",children:[(0,l.jsx)(p,{className:"p-0",children:(0,l.jsxs)("div",{className:"relative h-32 w-full",children:[(0,l.jsxs)("div",{className:"absolute top-2 right-2 bg-green-600 text-xs font-bold text-white px-3 py-1 rounded-full z-10",children:["\uD83D\uDD25 ",s("store.skillLevel.bestSeller")]}),(0,l.jsx)("div",{className:"w-full h-full bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-t-lg flex items-center justify-center",children:(0,l.jsx)("h2",{className:"text-2xl font-bold text-cream",children:"PACK AVANZADO"})})]})}),(0,l.jsxs)(b,{className:"flex-1 p-4",children:[(0,l.jsx)(g,{className:"text-lg text-cream mb-2",children:s("store.products.includes")}),(0,l.jsx)("div",{className:"mt-3",children:(0,l.jsx)("ul",{className:"space-y-2 text-sm text-cream/90",children:k.map((e,t)=>(0,l.jsxs)("li",{className:"flex items-start",children:[(0,l.jsx)(n,{className:"h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0"}),(0,l.jsx)("span",{children:e})]},t))})})]}),(0,l.jsx)(N,{className:"p-4 pt-0 mt-auto",children:(0,l.jsxs)("div",{className:"flex items-center justify-between w-full",children:[(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("div",{className:"text-xl font-bold text-cream",children:"ARS"===i?"ARS $19.999":"$19.99"}),(0,l.jsx)("div",{className:"text-sm text-cream/60 line-through",children:"ARS"===i?"ARS $80.000":"$80.00"})]}),(0,l.jsxs)(h.z,{onClick:()=>{window.location.href="https://e08ff1-xx.myshopify.com/products/pack-de-efectos-esenciales"},className:"btn-primary group",children:[s("store.products.addToCart"),(0,l.jsx)(u.Z,{className:"ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"})]})]})})]})})]}),(0,l.jsx)(FixedReviewCarousel,{})]})}function NovicePackCard(e){let{setSkillLevel:t}=e,{t:s,formatPrice:a,currency:i}=(0,o.$)(),[c,d]=(0,r.useState)(!1),f=(0,r.useRef)(null),j=(0,r.useRef)(null),k=[s("store.products.novicePack.features.feature1"),s("store.products.novicePack.features.feature2"),s("store.products.novicePack.features.feature3")];return(0,r.useEffect)(()=>{let handleClickOutside=e=>{f.current&&!f.current.contains(e.target)&&j.current&&!j.current.contains(e.target)&&d(!1)};return c&&document.addEventListener("mousedown",handleClickOutside),()=>{document.removeEventListener("mousedown",handleClickOutside)}},[c]),(0,l.jsxs)("div",{className:"space-y-6",children:[(0,l.jsxs)("div",{className:"md:text-left text-center md:max-w-none max-w-[700px] mx-auto md:mx-0",children:[(0,l.jsx)("h1",{className:"text-2xl md:text-3xl font-bold tracking-tighter sm:text-3xl text-cream",children:s("store.products.novicePack.title")}),(0,l.jsx)("p",{className:"text-sm md:text-base text-cream/80 mt-2",children:s("store.products.novicePack.description")})]}),(0,l.jsxs)("div",{className:"container mx-auto px-4 md:px-0",children:[(0,l.jsx)("div",{className:"flex md:justify-between justify-center flex-wrap md:flex-nowrap gap-2 md:gap-4 mb-6 items-center",children:(0,l.jsxs)("div",{className:"flex items-center gap-2 md:gap-4",children:[(0,l.jsx)(CurrencySelector,{}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsxs)(h.z,{ref:j,onClick:()=>{d(!c)},size:"sm",variant:"outline",className:"border-orange-500/30 bg-[#0A0A0A] hover:bg-[#1A1A1A] text-cream text-xs sm:text-sm",children:[(0,l.jsx)(m,{className:"h-4 w-4 mr-1"}),(0,l.jsxs)("span",{className:"hidden xs:inline",children:[s("store.products.changeLevel"),":"]}),(0,l.jsx)("span",{className:"font-medium ml-1",children:s("store.skillLevel.novice.title")}),(0,l.jsx)(x,{className:"h-4 w-4 ml-1"})]}),c&&(0,l.jsx)("div",{ref:f,className:"absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#0A0A0A] border border-orange-500/30 z-50",children:(0,l.jsxs)("div",{className:"py-1",children:[(0,l.jsx)("button",{onClick:()=>t("novice"),className:"flex items-center gap-2 px-4 py-2 text-sm w-full text-left bg-[#1A1A1A] text-cream",children:s("store.skillLevel.novice.title")}),(0,l.jsx)("button",{onClick:()=>t("advanced"),className:"flex items-center gap-2 px-4 py-2 text-sm w-full text-left hover:bg-[#1A1A1A] text-cream",children:s("store.skillLevel.advanced.title")}),(0,l.jsx)("button",{onClick:()=>t("training"),className:"flex items-center gap-2 px-4 py-2 text-sm w-full text-left hover:bg-[#1A1A1A] text-cream",children:s("store.skillLevel.training.title")})]})})]})]})}),(0,l.jsx)("div",{className:"grid gap-6 sm:grid-cols-1 md:max-w-[600px] md:mx-0 mx-auto",children:(0,l.jsxs)(v,{className:"flex flex-col h-full bg-[#0A0A0A] border-orange-500/30",children:[(0,l.jsx)(p,{className:"p-0",children:(0,l.jsxs)("div",{className:"relative h-32 w-full",children:[(0,l.jsx)("div",{className:"absolute top-2 right-2 bg-red-500 text-xs font-bold text-white px-3 py-1 rounded-full z-10",children:"50% OFF"}),(0,l.jsx)("div",{className:"w-full h-full bg-gradient-to-r from-blue-500/20 to-blue-700/20 rounded-t-lg flex items-center justify-center",children:(0,l.jsx)("h2",{className:"text-2xl font-bold text-cream",children:"PACK PRINCIPIANTES"})})]})}),(0,l.jsxs)(b,{className:"flex-1 p-4",children:[(0,l.jsx)(g,{className:"text-lg text-cream mb-2",children:s("store.products.includes")}),(0,l.jsx)("div",{className:"mt-3",children:(0,l.jsx)("ul",{className:"space-y-2 text-sm text-cream/90",children:k.map((e,t)=>(0,l.jsxs)("li",{className:"flex items-start",children:[(0,l.jsx)(n,{className:"h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0"}),(0,l.jsx)("span",{children:e})]},t))})})]}),(0,l.jsx)(N,{className:"p-4 pt-0 mt-auto",children:(0,l.jsxs)("div",{className:"flex items-center justify-between w-full",children:[(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("div",{className:"text-xl font-bold text-cream",children:"ARS"===i?"ARS $4999":"$4.99"}),(0,l.jsx)("div",{className:"text-sm text-cream/60 line-through",children:"ARS"===i?"ARS $9998":"$9.98"})]}),(0,l.jsxs)(h.z,{onClick:()=>{window.location.href="https://e08ff1-xx.myshopify.com/products/pack-principiantes"},className:"btn-primary group",children:[s("store.products.addToCart"),(0,l.jsx)(u.Z,{className:"ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"})]})]})})]})})]}),(0,l.jsx)(FixedReviewCarousel,{})]})}function TrainingPackCard(e){let{setSkillLevel:t}=e,{t:s,formatPrice:a,currency:i}=(0,o.$)(),[c,d]=(0,r.useState)(!1),f=(0,r.useRef)(null),j=(0,r.useRef)(null),k=[s("store.products.trainingPack.features.feature1"),s("store.products.trainingPack.features.feature2"),s("store.products.trainingPack.features.feature3"),s("store.products.trainingPack.features.feature4"),s("store.products.trainingPack.features.feature5"),s("store.products.trainingPack.features.feature6")];return(0,r.useEffect)(()=>{let handleClickOutside=e=>{f.current&&!f.current.contains(e.target)&&j.current&&!j.current.contains(e.target)&&d(!1)};return c&&document.addEventListener("mousedown",handleClickOutside),()=>{document.removeEventListener("mousedown",handleClickOutside)}},[c]),(0,l.jsxs)("div",{className:"space-y-6",children:[(0,l.jsxs)("div",{className:"md:text-left text-center md:max-w-none max-w-[700px] mx-auto md:mx-0",children:[(0,l.jsx)("h1",{className:"text-2xl md:text-3xl font-bold tracking-tighter sm:text-3xl text-cream",children:s("store.products.trainingPack.title")}),(0,l.jsx)("p",{className:"text-sm md:text-base text-cream/80 mt-2",children:s("store.products.trainingPack.description")})]}),(0,l.jsxs)("div",{className:"container mx-auto px-4 md:px-0",children:[(0,l.jsx)("div",{className:"flex md:justify-between justify-center flex-wrap md:flex-nowrap gap-2 md:gap-4 mb-6 items-center",children:(0,l.jsxs)("div",{className:"flex items-center gap-2 md:gap-4",children:[(0,l.jsx)(CurrencySelector,{}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsxs)(h.z,{ref:j,onClick:()=>{d(!c)},size:"sm",variant:"outline",className:"border-orange-500/30 bg-[#0A0A0A] hover:bg-[#1A1A1A] text-cream text-xs sm:text-sm",children:[(0,l.jsx)(m,{className:"h-4 w-4 mr-1"}),(0,l.jsxs)("span",{className:"hidden xs:inline",children:[s("store.products.changeLevel"),":"]}),(0,l.jsx)("span",{className:"font-medium ml-1",children:s("store.skillLevel.training.title")}),(0,l.jsx)(x,{className:"h-4 w-4 ml-1"})]}),c&&(0,l.jsx)("div",{ref:f,className:"absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#0A0A0A] border border-orange-500/30 z-50",children:(0,l.jsxs)("div",{className:"py-1",children:[(0,l.jsx)("button",{onClick:()=>t("novice"),className:"flex items-center gap-2 px-4 py-2 text-sm w-full text-left hover:bg-[#1A1A1A] text-cream",children:s("store.skillLevel.novice.title")}),(0,l.jsx)("button",{onClick:()=>t("advanced"),className:"flex items-center gap-2 px-4 py-2 text-sm w-full text-left hover:bg-[#1A1A1A] text-cream",children:s("store.skillLevel.advanced.title")}),(0,l.jsx)("button",{onClick:()=>t("training"),className:"flex items-center gap-2 px-4 py-2 text-sm w-full text-left bg-[#1A1A1A] text-cream",children:s("store.skillLevel.training.title")})]})})]})]})}),(0,l.jsx)("div",{className:"grid gap-6 sm:grid-cols-1 md:max-w-[600px] md:mx-0 mx-auto",children:(0,l.jsxs)(v,{className:"flex flex-col h-full bg-[#0A0A0A] border-orange-500/30",children:[(0,l.jsx)(p,{className:"p-0",children:(0,l.jsxs)("div",{className:"relative h-32 w-full",children:[(0,l.jsx)("div",{className:"absolute top-2 right-2 bg-purple-600 text-xs font-bold text-white px-3 py-1 rounded-full z-10",children:"EXCLUSIVO"}),(0,l.jsx)("div",{className:"w-full h-full bg-gradient-to-r from-purple-600/20 to-indigo-700/20 rounded-t-lg flex items-center justify-center",children:(0,l.jsx)("h2",{className:"text-2xl font-bold text-cream",children:s("store.products.trainingPack.title").toUpperCase()})})]})}),(0,l.jsxs)(b,{className:"flex-1 p-4",children:[(0,l.jsx)(g,{className:"text-lg text-cream mb-2",children:s("store.products.includes")}),(0,l.jsx)("div",{className:"mt-3",children:(0,l.jsx)("ul",{className:"space-y-2 text-sm text-cream/90",children:k.map((e,t)=>(0,l.jsxs)("li",{className:"flex items-start",children:[(0,l.jsx)(n,{className:"h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0"}),(0,l.jsx)("span",{children:e})]},t))})})]}),(0,l.jsx)(N,{className:"p-4 pt-0 mt-auto",children:(0,l.jsxs)("div",{className:"flex items-center justify-between w-full",children:[(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("div",{className:"text-xl font-bold text-cream",children:"ARS"===i?"ARS $149.999":"$149.99"}),(0,l.jsx)("div",{className:"text-sm text-cream/60 line-through",children:"ARS"===i?"ARS $300.000":"$300.00"})]}),(0,l.jsxs)(h.z,{onClick:()=>{window.location.href="https://e08ff1-xx.myshopify.com/products/formacion-1-a-1"},className:"btn-primary group",children:[s("store.products.addToCart"),(0,l.jsx)(u.Z,{className:"ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"})]})]})})]})})]}),(0,l.jsx)(FixedReviewCarousel,{})]})}function StorePageClient(){let[e,t]=(0,r.useState)(null),[s,a]=(0,r.useState)(!1),handleChangeSkillLevel=e=>{t(e)};return(0,l.jsx)("section",{className:"w-full min-h-[calc(100vh-64px)] flex items-center justify-center bg-[#030303]",children:(0,l.jsx)("div",{className:"container px-4 md:px-6 py-12 md:py-16",children:s?(0,l.jsx)(l.Fragment,{children:"advanced"===e?(0,l.jsx)(AdvancedPackCard,{setSkillLevel:handleChangeSkillLevel}):"novice"===e?(0,l.jsx)(NovicePackCard,{setSkillLevel:handleChangeSkillLevel}):"training"===e?(0,l.jsx)(TrainingPackCard,{setSkillLevel:handleChangeSkillLevel}):(0,l.jsx)(NovicePackCard,{setSkillLevel:handleChangeSkillLevel})}):(0,l.jsx)(SkillLevelSelector,{skillLevel:e,setSkillLevel:t,onSubmit:()=>{a(!0)}})})})}var S=s(8267);function StoreClient(){return(0,l.jsx)(S.t,{children:(0,l.jsx)(StorePageClient,{})})}}},function(e){e.O(0,[724,435,267,971,864,744],function(){return e(e.s=6699)}),_N_E=e.O()}]);