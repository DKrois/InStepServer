import{s as t,g as n,a as q,u as J}from"./index-COThXori.js";import{render3DFloorStack as _}from"./floor3D-DqIwNvyl.js";let g=null;function F(){const o=document.getElementById("interactive-3d-group");o&&o.setAttribute("transform",`translate(${t.threeDPan.x}, ${t.threeDPan.y}) scale(${t.threeDScale})`)}function K(o){!g||o.button!==0||(t.threeDIsDragging=!0,t.threeDStartPos={x:o.clientX,y:o.clientY},g.style.cursor="grabbing")}function Q(o){if(!t.threeDIsDragging)return;const h=o.clientX-t.threeDStartPos.x,l=o.clientY-t.threeDStartPos.y;t.threeDPan.x+=h,t.threeDPan.y+=l,t.threeDStartPos={x:o.clientX,y:o.clientY},F()}function ee(){t.threeDIsDragging&&(t.threeDIsDragging=!1,g&&(g.style.cursor="grab"))}function te(o){if(o.preventDefault(),!g)return;const h=.05,l=t.threeDScale,f=o.deltaY<0?l*(1+h):l/(1+h);t.threeDScale=Math.max(.1,Math.min(f,5)),F()}function oe(){if(g=document.getElementById("floor3DView"),!g)return;const o=/^\/(floor|etage)\//.test(location.pathname),h=`
    <div id="floor3DHeader" class="floor-3d-header" style="display:flex;align-items:center;gap:12px;">
      <img src="/assets/logo_outline.png" alt="Logo" style="height:28px;" />
      <select id="floor3DSelect" style="margin-right: auto;"></select>
      <div class="window-controls" style="display:flex;gap:10px;">
        <button id="floor3DMinimizeBtn" title="${n("threeD_minimize")}" style="background:none;border:none;color:inherit;padding:4px;border-radius:6px;display:flex;align-items:center;justify-content:center">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14" />
          </svg>
        </button>
        <button id="floor3DMaximizeBtn" title="${n("threeD_toggle_fullscreen")}" style="background:none;border:none;color:inherit;padding:4px;border-radius:6px;display:flex;align-items:center;justify-content:center">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="6" y="6" width="12" height="12" rx="1" />
          </svg>
        </button>
        <button id="floor3DCloseBtn" title="${n("backToApp")}" style="background:none;border:none;color:inherit;padding:4px;border-radius:6px;display:flex;align-items:center;justify-content:center">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M6 6l12 12M18 6l-12 12" />
          </svg>
        </button>
      </div>
    </div>`,l=`
    <div id="floor3DHeader" class="floor-3d-header" style="display:flex;align-items:center;gap:12px;padding:6px 10px;">
      <img src="/assets/logo_outline.png" alt="Logo" style="height:34px;" />
      <div class="floor-3d-title" style="font-weight:600;letter-spacing:0.2px;">
        <span id="floor3DTitle">${n("threeD_fullscreen_title")}: ${t.project.properties.projectName||""} – ${t.activeFloorId||""}</span>
      </div>
      <div class="window-controls" style="display:flex;gap:10px;margin-left:auto">
        <button id="floor3DMinimizeBtn" title="${n("threeD_minimize")}" style="background:none;border:none;color:inherit;padding:4px;border-radius:6px;display:flex;align-items:center;justify-content:center">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14" />
          </svg>
        </button>
        <button id="floor3DMaximizeBtn" title="${n("backToApp")}" style="background:none;border:none;color:inherit;padding:4px;border-radius:6px;display:flex;align-items:center;justify-content:center">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="6" y="6" width="12" height="12" rx="1" />
          </svg>
        </button>
        <button id="floor3DCloseBtn" title="${n("backToApp")}" style="background:none;border:none;color:inherit;padding:4px;border-radius:6px;display:flex;align-items:center;justify-content:center">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M6 6l12 12M18 6l-12 12" />
          </svg>
        </button>
      </div>
    </div>`;g.innerHTML=`
    ${o?l:h}
    <div id="floor3DRenderer" style="flex-grow: 1; overflow: auto; position: relative; scrollbar-gutter: stable both-edges;">
      <div id="floor3DContent" style="width: 100%; height: 100%; position: relative;"></div>
    </div>
    <div id="floor3DOverlay" style="position:absolute; right:12px; bottom:12px; z-index:1002; pointer-events:auto;">
      <button id="floor3DScreenshotBtn" class="tool-btn" title="${n("screenshot")}">
        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="7" width="18" height="12" rx="2" fill="none" />
          <circle cx="12" cy="13" r="3.5" fill="none" />
          <path d="M8 7l1.5-2h5L16 7" fill="none" />
        </svg>
        <span>${n("screenshot")}</span>
      </button>
    </div>
  `;const f=()=>{const i=document.getElementById("floor3DRenderer"),c=document.getElementById("floor3DContent"),v=document.getElementById("floor3DHeader");if(!i||!c)return;if(/^\/(floor|etage)\//.test(location.pathname)){const I=v?Math.round(v.getBoundingClientRect().height):0;i.style.height=`calc(100vh - ${I}px)`,i.style.width="100vw",c.style.width="100%",c.style.height="100%",document.documentElement.style.height="100%",document.body.style.height="100%",document.body.style.overflow="hidden"}else i.style.height="",i.style.width="",c.style.width="100%",c.style.height="100%"};f(),window.addEventListener("resize",f,{passive:!0});const k=document.getElementById("show3DViewBtn")?.querySelector("span")||null,P=()=>{g.style.display="none",document.querySelector(".canvas-wrapper").style.display="grid",k&&(k.textContent=n("preview3D"))},U=()=>{g.style.display="none",document.querySelector(".canvas-wrapper").style.display="grid",k&&(k.textContent=n("backToApp"))},A=()=>{const i=t.activeLanguage==="de"?"etage":"floor",c=t.activeFloorId||"";try{localStorage.setItem("imd_editor_project",JSON.stringify(t.project)),sessionStorage.setItem("imd_editor_project",JSON.stringify(t.project))}catch{}const v=`${location.origin}/${i}/${encodeURIComponent(c)}`;window.open(v,"_blank")},V=()=>{const i=document.getElementById("floor3DRenderer");if(!i)return;const c=i.querySelector("svg");if(!c)return;const T=new XMLSerializer().serializeToString(c),I=new Blob([T],{type:"image/svg+xml;charset=utf-8"}),M=URL.createObjectURL(I),C=new Image;C.onload=()=>{const S=i.getBoundingClientRect(),d=16,r=Math.max(2,Math.floor(window.devicePixelRatio||2)),p=document.createElement("canvas");p.width=Math.max(1,Math.floor(S.width*r)+d*2),p.height=Math.max(1,Math.floor(S.height*r)+d*2);const e=p.getContext("2d");if(!e){URL.revokeObjectURL(M);return}const N=getComputedStyle(document.body).getPropertyValue("--color-surface").trim()||"#ffffff";e.fillStyle=N,e.fillRect(0,0,p.width,p.height),e.imageSmoothingEnabled=!0,e.drawImage(C,d,d,Math.floor(S.width*r),Math.floor(S.height*r));const b=(t.project.properties.projectName||"Projekt")+" – "+(t.activeFloorId||"Etage"),B=new Image;B.onload=()=>{const u=Math.floor(28*r),D=Math.floor(14*r);e.font=`${D}px Segoe UI, Arial, sans-serif`;const $=Math.ceil(e.measureText(b).width),y=u+Math.floor(12*r)+$+Math.floor(12*r),x=Math.max(u,Math.floor(30*r)),a=d+6,s=d+6,E=document.body.getAttribute("data-theme")==="dark",O=E?"rgba(38,22,56,0.78)":"rgba(255,255,255,0.88)",H=E?"rgba(230,225,239,0.12)":"rgba(0,0,0,0.08)",w=Math.floor(8*r);e.shadowColor="rgba(0,0,0,0.12)",e.shadowBlur=Math.floor(8*r),e.shadowOffsetX=Math.floor(2*r),e.shadowOffsetY=Math.floor(2*r),e.lineWidth=Math.max(1,Math.floor(r*.75)),e.beginPath(),e.moveTo(a+w,s),e.arcTo(a+y,s,a+y,s+x,w),e.arcTo(a+y,s+x,a,s+x,w),e.arcTo(a,s+x,a,s,w),e.arcTo(a,s,a+y,s,w),e.closePath(),e.fillStyle=O,e.fill(),e.shadowColor="transparent",e.strokeStyle=H,e.stroke();const W=s+Math.floor((x-u)/2);e.drawImage(B,a+Math.floor(8*r),W,u,u),e.textBaseline="middle",e.fillStyle=getComputedStyle(document.body).getPropertyValue("--color-text").trim()||"#333333",e.strokeStyle=E?"rgba(0,0,0,0.4)":"rgba(255,255,255,0.85)",e.lineWidth=Math.max(2,r);const z=a+Math.floor(8*r)+u+Math.floor(12*r),R=s+Math.floor(x/2);e.strokeText(b,z,R),e.fillText(b,z,R),URL.revokeObjectURL(M);const j=document.createElement("a"),X=t.activeLanguage==="de"?"etage":"floor",Y=t.activeFloorId||"screenshot";j.download=`${X}-${Y}.png`,j.href=p.toDataURL("image/png"),j.click()},B.onerror=()=>{const u=Math.floor(14*r);e.font=`${u}px Segoe UI, Arial, sans-serif`,e.fillStyle=getComputedStyle(document.body).getPropertyValue("--color-text").trim()||"#333333",e.strokeStyle="rgba(255,255,255,0.8)",e.lineWidth=Math.max(2,r),e.strokeText(b,d+8,d+24*r),e.fillText(b,d+8,d+24*r),URL.revokeObjectURL(M);const D=document.createElement("a"),$=t.activeLanguage==="de"?"etage":"floor",y=t.activeFloorId||"screenshot";D.download=`${$}-${y}.png`,D.href=p.toDataURL("image/png"),D.click()},B.src="/assets/logo_transparent.png"},C.src=M},m=document.getElementById("floor3DHeader");document.getElementById("floor3DCloseBtn")?.addEventListener("click",()=>{o?location.assign("/"):P()}),document.getElementById("floor3DMinimizeBtn")?.addEventListener("click",()=>{o&&m?(m.getAttribute("data-collapsed")==="true"?(m.removeAttribute("data-collapsed"),m.style.display="flex"):(m.setAttribute("data-collapsed","true"),m.style.display="none"),f()):U()}),document.getElementById("floor3DMaximizeBtn")?.addEventListener("click",()=>{o?_(t.project,"floor3DContent"):A()}),document.getElementById("floor3DScreenshotBtn")?.addEventListener("click",V);const L=document.getElementById("floor3DTitle");L&&(L.textContent=`${n("threeD_fullscreen_title")}: ${t.project.properties.projectName||""} – ${t.activeFloorId||""}`)}function re(){const o=document.getElementById("floor3DSelect");if(!o)return;const h=q();o.innerHTML="",h.forEach(l=>{const f=document.createElement("option");f.value=l,f.textContent=l,o.appendChild(f)}),o.value=t.activeFloorId||h[0]||"",o.onchange=()=>{t.activeFloorId=o.value,J(),_(t.project,"floor3DContent");const l=document.getElementById("floor3DTitle");l&&(l.textContent=`${n("threeD_fullscreen_title")}: ${t.project.properties.projectName||""} – ${t.activeFloorId||""}`)}}export{Q as do3DDrag,te as handle3DZoom,oe as setup3DViewControls,K as start3DDrag,ee as stop3DDrag,re as update3DFloorSelector,F as update3DGroupTransform};
