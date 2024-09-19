(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function d(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=d(e);fetch(e.href,s)}})();let h=()=>{let o=document.querySelector("#bof__series-top-Wrapper"),a=document.querySelector("#swiper-wrapper"),d=async s=>{try{(await(await fetch("https://yzdi-zhra.github.io/db/db.json")).json()).seriesInfo.map(t=>{t.id===s?o==null||o.insertAdjacentHTML("afterbegin",`
                    <div class="bof__series-top-rightWrapper">
                    <div class="bof__series-top__title">${t.title}</div>
                    <div class="bof__series-top__director">${t.director}</div>
                    <div class="bof__series-top__genersWrapper">
                    ${t.geners.map(c=>{`${c.gener}`})}
                    </div>
                    <div class="bof__series-top__text">${t.text}</div>
                    </div>
                    <div class="bof__series-top-leftWrapper">
                        <div class="bof__series-top-left__logo">
                            <img src="${t.logo}" class="bof__series__logo" />
                        </div>
                    </div>
        
                    `):t.id===s&&(o==null||o.insertAdjacentHTML("afterbegin",`
                  <div class="bof__series-top-rightWrapper">
                  <div class="bof__series-top__title">${t.title}</div>
                  <div class="bof__series-top__director">${t.director}</div>
                  <div class="bof__series-top__genersWrapper">
                  ${t.geners.map(c=>{`${c.gener}`})}
                  </div>
                  <div class="bof__series-top__text">${t.text}</div>
                  </div>
                  <div class="bof__series-top-leftWrapper">
                      <div class="bof__series-top-left__logo">
                          <img src="${t.logo}" class="bof__series__logo" />
                      </div>
                  </div>
      
                  `))})}catch(l){console.log(l.message)}},n=async s=>{try{(await(await fetch("https://yzdi-zhra.github.io/db/db.json")).json()).seriesInfo.map(t=>{t.id===s?t.episodes.map(c=>{a==null||a.insertAdjacentHTML("afterbegin",`
                        <div class="swiper-slide flex flex-col">
                        <img class="rounded-[10px]" src="${c.img}" />
                            <span
                            class="text-white text-[14px] w-[100%] flex flex-row items-center justify-start pr-[5px]"
                            >
                        ${c.title}</span>
                        </div>
                        `)}):t.id===s&&t.episodes.map(c=>{a==null||a.insertAdjacentHTML("afterbegin",`
                      <div class="swiper-slide flex flex-col">
                      <img class="rounded-[10px]" src="${c.img}" />
                          <span
                          class="text-white text-[14px] w-[100%] flex flex-row items-center justify-start pr-[5px]"
                          >
                      ${c.title}</span>
                      </div>
                      `)})})}catch(l){console.log(l.message)}},e=document.querySelector("#img5");e==null||e.addEventListener("click",()=>{d("2"),n("2")})},f=document.querySelector("#switch"),r=document.querySelector("#movieWrapper"),i=document.querySelector("#serieWrapper"),p=!0,_=!1,g=1,b=async()=>{try{(await(await fetch("https://yzdi-zhra.github.io/db/db.json")).json()).movies.map(d=>{r==null||r.insertAdjacentHTML("afterbegin",`
       <a href="#">
              <img class="rounded-[10px]" src="${d.src}">
            </a>
        `)})}catch(o){console.log(o.message)}},v=async()=>{try{(await(await fetch("https://yzdi-zhra.github.io/db/db.json")).json()).series.map(d=>{i==null||i.insertAdjacentHTML("afterbegin",`
        <a href="#">
        <img class="rounded-[10px] mobile:min-w-[150px]" id="img${d.id}" src="${d.src}"></img>
        </a>
        `)})}catch(o){console.log(o.message)}},y=()=>{_?(i==null||i.classList.add("flex"),r==null||r.classList.add("hidden"),i==null||i.classList.remove("hidden"),r==null||r.classList.remove("flex"),_=!1,p=!0):p&&(x(),r==null||r.classList.add("flex"),i==null||i.classList.add("hidden"),r==null||r.classList.remove("hidden"),i==null||i.classList.remove("flex"),_=!0,p=!1)};v();h();let x=()=>{for(;g===1;)b(),console.log("its runing"),g=0};f==null||f.addEventListener("click",()=>{y()});
