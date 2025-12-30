import{s as t,g as s,a as W,u as X}from"./index-DjK5nMnr.js";import{render3DFloorStack as Y}from"./floor3D-BaPrrK3C.js";let c=null;function j(){const o=document.getElementById("interactive-3d-group");o&&o.setAttribute("transform",`translate(${t.threeDPan.x}, ${t.threeDPan.y}) scale(${t.threeDScale})`)}function J(o){!c||o.button!==0||(t.threeDIsDragging=!0,t.threeDStartPos={x:o.clientX,y:o.clientY},c.style.cursor="grabbing")}function Z(o){if(!t.threeDIsDragging)return;const d=o.clientX-t.threeDStartPos.x,n=o.clientY-t.threeDStartPos.y;t.threeDPan.x+=d,t.threeDPan.y+=n,t.threeDStartPos={x:o.clientX,y:o.clientY},j()}function K(){t.threeDIsDragging&&(t.threeDIsDragging=!1,c&&(c.style.cursor="grab"))}function Q(o){if(o.preventDefault(),!c)return;const d=.05,n=t.threeDScale,g=o.deltaY<0?n*(1+d):n/(1+d);t.threeDScale=Math.max(.1,Math.min(g,5)),j()}function ee(){if(c=document.getElementById("floor3DView"),!c)return;const o=/^\/(floor|etage)\//.test(location.pathname),d=`
    <div id="floor3DHeader" class="floor-3d-header" style="display:flex;align-items:center;gap:12px;">
      <img src="/assets/logo_outline.png" alt="Logo" style="height:28px;" />
      <select id="floor3DSelect" style="margin-right: auto;"></select>
      <div class="window-controls" style="display:flex;gap:10px;">
        <button id="floor3DMinimizeBtn" title="${s("threeD_minimize")}" style="background:none;border:none;color:inherit;padding:4px;border-radius:6px;display:flex;align-items:center;justify-content:center">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14" />
          </svg>
        </button>
        <button id="floor3DMaximizeBtn" title="${s("threeD_toggle_fullscreen")}" style="background:none;border:none;color:inherit;padding:4px;border-radius:6px;display:flex;align-items:center;justify-content:center">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="6" y="6" width="12" height="12" rx="1" />
          </svg>
        </button>
        <button id="floor3DCloseBtn" title="${s("backToApp")}" style="background:none;border:none;color:inherit;padding:4px;border-radius:6px;display:flex;align-items:center;justify-content:center">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M6 6l12 12M18 6l-12 12" />
          </svg>
        </button>
      </div>
    </div>`,n=`
    <div id="floor3DHeader" class="floor-3d-header" style="display:flex;align-items:center;justify-content:space-between;padding:6px 10px;">
      <img src="/assets/logo_outline.png" alt="Logo" style="height:34px;" />
      <div class="floor-3d-title" style="font-weight:600;letter-spacing:0.2px;">
        <span id="floor3DTitle">${s("threeD_fullscreen_title")}: ${t.project.properties.projectName||""} – ${t.activeFloorId||""}</span>
      </div>
    </div>`;c.innerHTML=`
    ${o?n:d}
    <div id="floor3DRenderer" style="flex-grow: 1; overflow: auto; position: relative; scrollbar-gutter: stable both-edges;">
      <div id="floor3DContent" style="width: 4000px; height: 4000px; position: relative;"></div>
    </div>
    <div id="floor3DOverlay" style="position:absolute; right:12px; bottom:12px; z-index:1002; pointer-events:auto;">
      <button id="floor3DScreenshotBtn" class="tool-btn" title="${s("screenshot")}">
        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="7" width="18" height="12" rx="2" fill="none" />
          <circle cx="12" cy="13" r="3.5" fill="none" />
          <path d="M8 7l1.5-2h5L16 7" fill="none" />
        </svg>
        <span>${s("screenshot")}</span>
      </button>
    </div>
  `;const g=document.getElementById("show3DViewBtn").querySelector("span"),T=()=>{c.style.display="none",document.querySelector(".canvas-wrapper").style.display="grid",g.textContent=s("preview3D")},z=()=>{c.style.display="none",document.querySelector(".canvas-wrapper").style.display="grid",g.textContent=s("backToApp")},R=()=>{const m=t.activeLanguage==="de"?"etage":"floor",D=t.activeFloorId||"";try{localStorage.setItem("imd_editor_project",JSON.stringify(t.project))}catch{}const C=`${location.origin}/${m}/${encodeURIComponent(D)}`;window.open(C,"_blank")},F=()=>{const m=document.getElementById("floor3DRenderer");if(!m)return;const D=m.querySelector("svg");if(!D)return;const P=new XMLSerializer().serializeToString(D),_=new Blob([P],{type:"image/svg+xml;charset=utf-8"}),b=URL.createObjectURL(_),S=new Image;S.onload=()=>{const w=m.getBoundingClientRect(),a=16,r=Math.max(2,Math.floor(window.devicePixelRatio||2)),f=document.createElement("canvas");f.width=Math.max(1,Math.floor(w.width*r)+a*2),f.height=Math.max(1,Math.floor(w.height*r)+a*2);const e=f.getContext("2d");if(!e){URL.revokeObjectURL(b);return}const U=getComputedStyle(document.body).getPropertyValue("--color-surface").trim()||"#ffffff";e.fillStyle=U,e.fillRect(0,0,f.width,f.height),e.imageSmoothingEnabled=!0,e.drawImage(S,a,a,Math.floor(w.width*r),Math.floor(w.height*r));const y=(t.project.properties.projectName||"Projekt")+" – "+(t.activeFloorId||"Etage"),M=new Image;M.onload=()=>{const h=Math.floor(28*r),x=Math.floor(14*r);e.font=`${x}px Segoe UI, Arial, sans-serif`;const k=Math.ceil(e.measureText(y).width),p=h+Math.floor(12*r)+k+Math.floor(12*r),u=Math.max(h,Math.floor(30*r)),l=a+6,i=a+6,I=document.body.getAttribute("data-theme")==="dark",V=I?"rgba(38,22,56,0.78)":"rgba(255,255,255,0.88)",N=I?"rgba(230,225,239,0.12)":"rgba(0,0,0,0.08)",v=Math.floor(8*r);e.shadowColor="rgba(0,0,0,0.12)",e.shadowBlur=Math.floor(8*r),e.shadowOffsetX=Math.floor(2*r),e.shadowOffsetY=Math.floor(2*r),e.lineWidth=Math.max(1,Math.floor(r*.75)),e.beginPath(),e.moveTo(l+v,i),e.arcTo(l+p,i,l+p,i+u,v),e.arcTo(l+p,i+u,l,i+u,v),e.arcTo(l,i+u,l,i,v),e.arcTo(l,i,l+p,i,v),e.closePath(),e.fillStyle=V,e.fill(),e.shadowColor="transparent",e.strokeStyle=N,e.stroke();const O=i+Math.floor((u-h)/2);e.drawImage(M,l+Math.floor(8*r),O,h,h),e.textBaseline="middle",e.fillStyle=getComputedStyle(document.body).getPropertyValue("--color-text").trim()||"#333333",e.strokeStyle=I?"rgba(0,0,0,0.4)":"rgba(255,255,255,0.85)",e.lineWidth=Math.max(2,r);const E=l+Math.floor(8*r)+h+Math.floor(12*r),L=i+Math.floor(u/2);e.strokeText(y,E,L),e.fillText(y,E,L),URL.revokeObjectURL(b);const B=document.createElement("a"),A=t.activeLanguage==="de"?"etage":"floor",H=t.activeFloorId||"screenshot";B.download=`${A}-${H}.png`,B.href=f.toDataURL("image/png"),B.click()},M.onerror=()=>{const h=Math.floor(14*r);e.font=`${h}px Segoe UI, Arial, sans-serif`,e.fillStyle=getComputedStyle(document.body).getPropertyValue("--color-text").trim()||"#333333",e.strokeStyle="rgba(255,255,255,0.8)",e.lineWidth=Math.max(2,r),e.strokeText(y,a+8,a+24*r),e.fillText(y,a+8,a+24*r),URL.revokeObjectURL(b);const x=document.createElement("a"),k=t.activeLanguage==="de"?"etage":"floor",p=t.activeFloorId||"screenshot";x.download=`${k}-${p}.png`,x.href=f.toDataURL("image/png"),x.click()},M.src="/assets/logo_transparent.png"},S.src=b};o||(document.getElementById("floor3DCloseBtn")?.addEventListener("click",T),document.getElementById("floor3DMinimizeBtn")?.addEventListener("click",z),document.getElementById("floor3DMaximizeBtn")?.addEventListener("click",R)),document.getElementById("floor3DScreenshotBtn")?.addEventListener("click",F);const $=document.getElementById("floor3DTitle");$&&($.textContent=`${s("threeD_fullscreen_title")}: ${t.project.properties.projectName||""} – ${t.activeFloorId||""}`)}function te(){const o=document.getElementById("floor3DSelect");if(!o)return;const d=W();o.innerHTML="",d.forEach(n=>{const g=document.createElement("option");g.value=n,g.textContent=n,o.appendChild(g)}),o.value=t.activeFloorId||d[0]||"",o.onchange=()=>{t.activeFloorId=o.value,X(),Y(t.project,"floor3DContent");const n=document.getElementById("floor3DTitle");n&&(n.textContent=`${s("threeD_fullscreen_title")}: ${t.project.properties.projectName||""} – ${t.activeFloorId||""}`)}}export{Z as do3DDrag,Q as handle3DZoom,ee as setup3DViewControls,J as start3DDrag,K as stop3DDrag,te as update3DFloorSelector,j as update3DGroupTransform};
