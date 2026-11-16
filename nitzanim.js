(() => {
  const esc = v => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const flow = [
    ['10:20','Room setup','schedule-overview'],
    ['10:30','Open play','10-30-open-play-as-families-arrive'],
    ['10:45','Put toys away','10-45-clean-up-toys'],
    ['10:50','Welcome & name songs','10-50-welcome'],
    ['11:00','Tefillah','11-00-tefillah'],
    ['11:10','Torah parade & story','11-10-torah-service-and-read-aloud'],
    ['11:20','Prayer for peace','11-20-prayer-for-peace'],
    ['11:22','Kiddush & Motzi','11-22-kiddush-and-motzi'],
    ['11:25','Cleanup & goodbye','11-25-clean-up-invite-families-to-join-their-congregations'],
    ['','Extra songs','additional-songs']
  ];
  const teaching = {
    '10-50-welcome':['What does “Shabbat Shalom” mean?',s=>s.includes('How do we greet')],
    '11-00-tefillah':['How do we celebrate Shabbat?',s=>s.includes('a holiday we get')],
    'mah-tovu':['Make a tallit tent together',s=>s.startsWith('On Shabbat')],
    barchu:['Why do we bow?',s=>s.includes('thankful to God')],
    shema:['Practice listening closely',s=>s.includes('Shema means hear')],
    'mi-chamocha':['Imagine crossing the sea',s=>s.includes('crossing a huge ocean')],
    amidah:['What are you grateful for?',s=>s.includes('really important part')],
    'read-aloud':['Connect the story to the Torah portion or holiday',()=>true],
    '11-20-prayer-for-peace':['What does peace look like?',s=>s.includes('Peace means')],
    '11-22-kiddush-and-motzi':['Invite older children to lead a blessing',()=>true]
  };
  const titleFor=s=>s.id.startsWith('alternative-name-song')?'Alternative name song':s.id==='shabbat-soup-to-the-tune-of-london-bridge'?'Shabbat Soup':s.title;
  const demo=video=>typeof video==='string' && /^https:\/\//i.test(video)?`<a class="nz-demo" href="${esc(video)}">Watch a demonstration →</a>`:'';
  const players=({audio=[],video}={})=>audio.map(t=>`<div class="nz-audio"><strong>${esc(t.title)}</strong><audio controls preload="none" src="${esc(t.src)}" aria-label="${esc(t.title)} practice recording"></audio></div>`).join('')+demo(video);
  function line([kind,value], id) {
    const [title,match]=teaching[id]||[];
    if(match?.(value))return `<aside class="nz-learning"><p class="nz-tag">Learning moment</p><h4>${esc(title)}</h4><p>${esc(value)}</p></aside>`;
    return `<p class="nz-line nz-${kind}"${kind==='hebrew'?' lang="he" dir="rtl"':''}>${esc(value)}</p>`;
  }
  function scriptLines(s) {
    if(s.id!=='schedule-overview')return s.lines;
    const end=s.lines.findIndex(([,line])=>line.startsWith('10:30'));
    return s.lines.slice(0,end<0?undefined:end).map(([kind,value])=>[kind,value.replace(/^10:20\s+/,'')]);
  }
  window.renderNitzanimScript=(container, sections, media={})=>{
    let view='script';
    function render(focus=false) {
      const overview=`<section class="nz-overview" aria-labelledby="nz-overview-title"><h2 id="nz-overview-title">Service at a glance</h2><ol>${flow.map(([time,title,id])=>`<li><button type="button" data-jump="${id}"><span>${time||'Optional'}</span>${title}</button></li>`).join('')}</ol></section>`;
      const script=flow.map(([time,title,id],i)=>{
        const start=sections.findIndex(s=>s.id===id);
        const end=i+1===flow.length?sections.length:sections.findIndex(s=>s.id===flow[i+1][2]);
        return `<section class="nz-phase"><h2 tabindex="-1" id="nz-${id}">${time?`<span>${time}</span> `:''}${title}</h2>${sections.slice(start,end).map((s,j)=>`<div class="nz-part">${j?`<h3 tabindex="-1" id="nz-${s.id}">${esc(titleFor(s))}</h3>`:''}${scriptLines(s).map(l=>line(l,s.id)).join('')}${media[s.id]?.audio?.length?`<details class="nz-recordings"><summary>Practice recording${media[s.id].audio.length>1?'s':''}</summary>${players(media[s.id])}</details>`:demo(media[s.id]?.video)}</div>`).join('')}<button type="button" class="nz-link" data-jump="overview-title">↑ Service overview</button></section>`;
      }).join('');
      const songs=flow.map(([,title,id],i)=>{
        const start=sections.findIndex(s=>s.id===id);
        const end=i+1===flow.length?sections.length:sections.findIndex(s=>s.id===flow[i+1][2]);
        const list=sections.slice(start,end).filter(s=>media[s.id]?.audio?.length||s.id==='mi-chamocha');
        return list.length?`<section class="nz-phase"><h2>${title}</h2><div class="nz-song-grid">${list.map(s=>`<article class="nz-song"><h3>${esc(titleFor(s))}</h3>${players(media[s.id])}<button type="button" class="nz-link" data-script="${s.id}">Find in script →</button></article>`).join('')}</div></section>`:'';
      }).join('');
      container.querySelectorAll('audio').forEach(a=>a.pause());
      container.innerHTML=`<div class="nz"><a class="back" href="#">← KI Tefillah home</a><header class="ft-intro"><p class="eyebrow">Shabbat morning · Ages 0–4</p><h1>Nitzanim Service</h1><p>Follow the leader’s script or go straight to the songs and blessings.</p>${demo(media.service?.video)}</header><div class="nz-switch" role="group" aria-label="Nitzanim practice view">${['script','songs'].map(v=>`<button type="button" data-view="${v}" aria-pressed="${v===view}">${v==='script'?'Leader’s script':'Songs & recordings'}</button>`).join('')}</div>${view==='script'?overview+script:songs}</div>`;
      const jump=id=>{const el=document.getElementById('nz-'+id);if(el){el.tabIndex=-1;el.focus({preventScroll:true});el.scrollIntoView({block:'start'});}};
      container.querySelectorAll('[data-jump]').forEach(b=>b.onclick=()=>jump(b.dataset.jump));
      container.querySelectorAll('[data-script]').forEach(b=>b.onclick=()=>{view='script';render();jump(b.dataset.script);});
      container.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>{if(view!==b.dataset.view){view=b.dataset.view;render(true);}});
      const audio=[...container.querySelectorAll('audio')];
      audio.forEach(a=>a.addEventListener('play',()=>audio.forEach(other=>{if(a!==other)other.pause();})));
      if(focus){container.querySelector(`[data-view="${view}"]`).focus();scrollTo(0,0);}
    }
    render();scrollTo(0,0);
    return ()=>container.querySelectorAll('audio').forEach(a=>a.pause());
  };
})();
