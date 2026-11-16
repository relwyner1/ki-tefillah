(() => {
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const labels = {cue:'Action',sing:'Sing',text:'Say',meaning:'Meaning'};
  const renderLine = ([kind, line]) => `<p class="nz-line nz-${kind}"${kind === 'hebrew' ? ' lang="he" dir="rtl"' : ''}>${labels[kind] ? `<span>${labels[kind]}</span>` : ''}${escape(line)}</p>`;
  function mediaMarkup({audio = [], video} = {}) {
    return audio.map(track => `<div class="nz-audio"><span>${escape(track.title)} · Practice recording</span><audio controls preload="none" src="${escape(track.src)}" aria-label="${escape(track.title)} practice recording"></audio></div>`).join('') +
      (typeof video === 'string' && /^https:\/\//i.test(video) ? `<a href="${escape(video)}" class="nz-demo">Watch a demonstration →</a>` : '');
  }
  window.renderNitzanimScript = (container, sections, media = {}) => {
    container.innerHTML = `<div class="nz"><a class="back" href="#">← KI Tefillah home</a>
    <header class="ft-intro"><p class="eyebrow">Shabbat morning · Ages 0–4</p><h1>Nitzanim Service</h1><p>A script for leading Nitzanim. Follow it from top to bottom or jump to a song or prayer.</p>
    ${mediaMarkup({video:media.service?.video}, 'Nitzanim service')}</header>
    <details class="nz-outline"><summary>Jump to a part of the service</summary><ul>${sections.map(s => `<li><button type="button" data-nz-jump="${escape(s.id)}">${escape(s.title)}</button></li>`).join('')}</ul></details>
    ${sections.map(s => `<section class="nz-part" id="nz-${escape(s.id)}" aria-labelledby="nz-title-${escape(s.id)}"><h2 tabindex="-1" id="nz-title-${escape(s.id)}">${escape(s.title)}</h2>
    ${mediaMarkup(media[s.id], s.title)}${s.lines.map(renderLine).join('')}</section>`).join('')}</div>`;
    container.querySelectorAll('[data-nz-jump]').forEach(b=>b.onclick=()=>{
      const heading=document.getElementById('nz-title-'+b.dataset.nzJump);
      heading.focus({preventScroll:true});heading.scrollIntoView();
    });
    const players=[...container.querySelectorAll('audio')];
    for(const player of players)player.addEventListener('play',()=>players.forEach(other=>{if(other!==player)other.pause()}));
    scrollTo(0, 0);
    return ()=>players.forEach(player=>player.pause());
  };
})();
