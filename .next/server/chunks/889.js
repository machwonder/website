"use strict";exports.id=889,exports.ids=[889],exports.modules={6705:(e,t,r)=>{r.r(t),r.d(t,{Table:()=>d,TableBody:()=>c,TableCell:()=>b,TableHead:()=>n,TableHeader:()=>x,TableRow:()=>u});var a=r(326),s=r(1135),o=r(7577),i=r(6471);let l=(0,o.createContext)({bleed:!1,dense:!1,grid:!1,striped:!1});function d({bleed:e=!1,dense:t=!1,grid:r=!1,striped:o=!1,className:i,children:d,...n}){return a.jsx(l.Provider,{value:{bleed:e,dense:t,grid:r,striped:o},children:a.jsx("div",{className:"flow-root",children:a.jsx("div",{...n,className:(0,s.Z)(i,"-mx-[--gutter] overflow-x-auto whitespace-nowrap"),children:a.jsx("div",{className:(0,s.Z)("inline-block min-w-full align-middle",!e&&"sm:px-[--gutter]"),children:a.jsx("table",{className:"min-w-full text-left text-sm/6 text-zinc-950 dark:text-white",children:d})})})})})}function n({className:e,...t}){return a.jsx("thead",{...t,className:(0,s.Z)(e,"text-zinc-500 dark:text-zinc-400")})}function c(e){return a.jsx("tbody",{...e})}let g=(0,o.createContext)({href:void 0,target:void 0,title:void 0});function u({href:e,target:t,title:r,className:i,...d}){let{striped:n}=(0,o.useContext)(l);return a.jsx(g.Provider,{value:{href:e,target:t,title:r},children:a.jsx("tr",{...d,className:(0,s.Z)(i,e&&"has-[[data-row-link][data-focus]]:outline has-[[data-row-link][data-focus]]:outline-2 has-[[data-row-link][data-focus]]:-outline-offset-2 has-[[data-row-link][data-focus]]:outline-blue-500 dark:focus-within:bg-white/[2.5%]",n&&"even:bg-zinc-950/[2.5%] dark:even:bg-white/[2.5%]",e&&n&&"hover:bg-zinc-950/5 dark:hover:bg-white/5",e&&!n&&"hover:bg-zinc-950/[2.5%] dark:hover:bg-white/[2.5%]")})})}function x({className:e,...t}){let{bleed:r,grid:i}=(0,o.useContext)(l);return a.jsx("th",{...t,className:(0,s.Z)(e,"border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] dark:border-b-white/10",i&&"border-l border-l-zinc-950/5 first:border-l-0 dark:border-l-white/5",!r&&"sm:first:pl-1 sm:last:pr-1")})}function b({className:e,children:t,...r}){let{bleed:d,dense:n,grid:c,striped:u}=(0,o.useContext)(l),{href:x,target:b,title:h}=(0,o.useContext)(g),[m,p]=(0,o.useState)(null);return(0,a.jsxs)("td",{ref:x?p:void 0,...r,className:(0,s.Z)(e,"relative px-4 first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))]",!u&&"border-b border-zinc-950/5 dark:border-white/5",c&&"border-l border-l-zinc-950/5 first:border-l-0 dark:border-l-white/5",n?"py-2.5":"py-4",!d&&"sm:first:pl-1 sm:last:pr-1"),children:[x&&a.jsx(i.r,{"data-row-link":!0,href:x,target:b,"aria-label":h,tabIndex:m?.previousElementSibling===null?0:-1,className:"absolute inset-0 focus:outline-none"}),t]})}},5480:(e,t,r)=>{r.r(t),r.d(t,{Stat:()=>g,default:()=>u});var a=r(9510),s=r(4382),o=r(2052),i=r(6677),l=r(2095),d=r(182),n=r(2557),c=r(1906);function g({title:e,value:t,change:r}){return(0,a.jsxs)("div",{children:[a.jsx(i.i,{}),a.jsx("div",{className:"mt-6 text-lg/6 font-medium sm:text-sm/6",children:e}),a.jsx("div",{className:"mt-3 text-3xl/8 font-semibold sm:text-2xl/8",children:t}),(0,a.jsxs)("div",{className:"mt-3 text-sm/6 sm:text-xs/6",children:[a.jsx(o.C,{color:r.startsWith("+")?"lime":"pink",children:r})," ",a.jsx("span",{className:"text-zinc-500",children:"from last week"})]})]})}async function u(){let e=await (0,c.oe)();return(0,a.jsxs)(a.Fragment,{children:[a.jsx(l.X,{children:"Good afternoon, Erica"}),(0,a.jsxs)("div",{className:"mt-8 flex items-end justify-between",children:[a.jsx(l.p,{children:"Overview"}),a.jsx("div",{children:(0,a.jsxs)(d.P,{name:"period",children:[a.jsx("option",{value:"last_week",children:"Last week"}),a.jsx("option",{value:"last_two",children:"Last two weeks"}),a.jsx("option",{value:"last_month",children:"Last month"}),a.jsx("option",{value:"last_quarter",children:"Last quarter"})]})})]}),(0,a.jsxs)("div",{className:"mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4",children:[a.jsx(g,{title:"Total revenue",value:"$2.6M",change:"+4.5%"}),a.jsx(g,{title:"Average order value",value:"$455",change:"-0.5%"}),a.jsx(g,{title:"Tickets sold",value:"5,888",change:"+4.5%"}),a.jsx(g,{title:"Pageviews",value:"823,067",change:"+21.2%"})]}),a.jsx(l.p,{className:"mt-14",children:"Recent orders"}),(0,a.jsxs)(n.iA,{className:"mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]",children:[a.jsx(n.ss,{children:(0,a.jsxs)(n.SC,{children:[a.jsx(n.xD,{children:"Order number"}),a.jsx(n.xD,{children:"Purchase date"}),a.jsx(n.xD,{children:"Customer"}),a.jsx(n.xD,{children:"Event"}),a.jsx(n.xD,{className:"text-right",children:"Amount"})]})}),a.jsx(n.RM,{children:e.map(e=>(0,a.jsxs)(n.SC,{href:e.url,title:`Order #${e.id}`,children:[a.jsx(n.pj,{children:e.id}),a.jsx(n.pj,{className:"text-zinc-500",children:e.date}),a.jsx(n.pj,{children:e.customer.name}),a.jsx(n.pj,{children:(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[a.jsx(s.q,{src:e.event.thumbUrl,className:"size-6"}),a.jsx("span",{children:e.event.name})]})}),(0,a.jsxs)(n.pj,{className:"text-right",children:["US",e.amount.usd]})]},e.id))})]})]})}},4382:(e,t,r)=>{r.d(t,{q:()=>o});var a=r(9510),s=r(5761);function o({src:e=null,square:t=!1,initials:r,alt:o="",className:i,...l}){return(0,a.jsxs)("span",{"data-slot":"avatar",...l,className:(0,s.Z)(i,"inline-grid shrink-0 align-middle [--avatar-radius:20%] [--ring-opacity:20%] *:col-start-1 *:row-start-1","outline outline-1 -outline-offset-1 outline-black/[--ring-opacity] dark:outline-white/[--ring-opacity]",t?"rounded-[--avatar-radius] *:rounded-[--avatar-radius]":"rounded-full *:rounded-full"),children:[r&&(0,a.jsxs)("svg",{className:"size-full select-none fill-current p-[5%] text-[48px] font-medium uppercase",viewBox:"0 0 100 100","aria-hidden":o?void 0:"true",children:[o&&a.jsx("title",{children:o}),a.jsx("text",{x:"50%",y:"50%",alignmentBaseline:"middle",dominantBaseline:"middle",textAnchor:"middle",dy:".125em",children:r})]}),e&&a.jsx("img",{className:"size-full",src:e,alt:o})]})}r(1159),r(9365),r(3346)},2052:(e,t,r)=>{r.d(t,{C:()=>i});var a=r(9510),s=r(5761);r(1159),r(9365),r(3346);let o={red:"bg-red-500/15 text-red-700 group-data-[hover]:bg-red-500/25 dark:bg-red-500/10 dark:text-red-400 dark:group-data-[hover]:bg-red-500/20",orange:"bg-orange-500/15 text-orange-700 group-data-[hover]:bg-orange-500/25 dark:bg-orange-500/10 dark:text-orange-400 dark:group-data-[hover]:bg-orange-500/20",amber:"bg-amber-400/20 text-amber-700 group-data-[hover]:bg-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400 dark:group-data-[hover]:bg-amber-400/15",yellow:"bg-yellow-400/20 text-yellow-700 group-data-[hover]:bg-yellow-400/30 dark:bg-yellow-400/10 dark:text-yellow-300 dark:group-data-[hover]:bg-yellow-400/15",lime:"bg-lime-400/20 text-lime-700 group-data-[hover]:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-[hover]:bg-lime-400/15",green:"bg-green-500/15 text-green-700 group-data-[hover]:bg-green-500/25 dark:bg-green-500/10 dark:text-green-400 dark:group-data-[hover]:bg-green-500/20",emerald:"bg-emerald-500/15 text-emerald-700 group-data-[hover]:bg-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-400 dark:group-data-[hover]:bg-emerald-500/20",teal:"bg-teal-500/15 text-teal-700 group-data-[hover]:bg-teal-500/25 dark:bg-teal-500/10 dark:text-teal-300 dark:group-data-[hover]:bg-teal-500/20",cyan:"bg-cyan-400/20 text-cyan-700 group-data-[hover]:bg-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300 dark:group-data-[hover]:bg-cyan-400/15",sky:"bg-sky-500/15 text-sky-700 group-data-[hover]:bg-sky-500/25 dark:bg-sky-500/10 dark:text-sky-300 dark:group-data-[hover]:bg-sky-500/20",blue:"bg-blue-500/15 text-blue-700 group-data-[hover]:bg-blue-500/25 dark:text-blue-400 dark:group-data-[hover]:bg-blue-500/25",indigo:"bg-indigo-500/15 text-indigo-700 group-data-[hover]:bg-indigo-500/25 dark:text-indigo-400 dark:group-data-[hover]:bg-indigo-500/20",violet:"bg-violet-500/15 text-violet-700 group-data-[hover]:bg-violet-500/25 dark:text-violet-400 dark:group-data-[hover]:bg-violet-500/20",purple:"bg-purple-500/15 text-purple-700 group-data-[hover]:bg-purple-500/25 dark:text-purple-400 dark:group-data-[hover]:bg-purple-500/20",fuchsia:"bg-fuchsia-400/15 text-fuchsia-700 group-data-[hover]:bg-fuchsia-400/25 dark:bg-fuchsia-400/10 dark:text-fuchsia-400 dark:group-data-[hover]:bg-fuchsia-400/20",pink:"bg-pink-400/15 text-pink-700 group-data-[hover]:bg-pink-400/25 dark:bg-pink-400/10 dark:text-pink-400 dark:group-data-[hover]:bg-pink-400/20",rose:"bg-rose-400/15 text-rose-700 group-data-[hover]:bg-rose-400/25 dark:bg-rose-400/10 dark:text-rose-400 dark:group-data-[hover]:bg-rose-400/20",zinc:"bg-zinc-600/10 text-zinc-700 group-data-[hover]:bg-zinc-600/20 dark:bg-white/5 dark:text-zinc-400 dark:group-data-[hover]:bg-white/10"};function i({color:e="zinc",className:t,...r}){return a.jsx("span",{...r,className:(0,s.Z)(t,"inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline",o[e])})}},2557:(e,t,r)=>{r.d(t,{RM:()=>n,SC:()=>c,iA:()=>l,pj:()=>u,ss:()=>d,xD:()=>g});var a=r(8570);let s=(0,a.createProxy)(String.raw`/Users/noahwatson/Documents/Github/website/src/components/table.tsx`),{__esModule:o,$$typeof:i}=s;s.default;let l=(0,a.createProxy)(String.raw`/Users/noahwatson/Documents/Github/website/src/components/table.tsx#Table`),d=(0,a.createProxy)(String.raw`/Users/noahwatson/Documents/Github/website/src/components/table.tsx#TableHead`),n=(0,a.createProxy)(String.raw`/Users/noahwatson/Documents/Github/website/src/components/table.tsx#TableBody`),c=(0,a.createProxy)(String.raw`/Users/noahwatson/Documents/Github/website/src/components/table.tsx#TableRow`),g=(0,a.createProxy)(String.raw`/Users/noahwatson/Documents/Github/website/src/components/table.tsx#TableHeader`),u=(0,a.createProxy)(String.raw`/Users/noahwatson/Documents/Github/website/src/components/table.tsx#TableCell`)}};