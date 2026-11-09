/* Shared Torah service content for both B’nei Mitzvah and Full Services. */
(() => {
'use strict';
const E=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const sections=[
{id:'ein-kamocha',title:'Ein Kamocha',track:'ein-kamocha',start:3.05,end:38.65,lines:[
['אֵין כָּמוֹךָ בָאֱלֹהִים אֲדֹנָי, וְאֵין כְּמַעֲשֶׂיךָ.','Ein kamocha va’elohim Adonai, v’ein kema’asecha.'],
['מַלְכוּתְךָ מַלְכוּת כָּל עֹלָמִים, וּמֶמְשַׁלְתְּךָ בְּכָל דּוֹר וָדֹר.','Malchut’cha malchut kol olamim, umemshalt’cha b’chol dor vador.'],
['אֲדֹנָי מֶלֶךְ, אֲדֹנָי מָלָךְ, אֲדֹנָי יִמְלֹךְ לְעֹלָם וָעֶד.','Adonai melech, Adonai malach, Adonai yimloch l’olam va’ed.'],
['אֲדֹנָי עֹז לְעַמּוֹ יִתֵּן, אֲדֹנָי יְבָרֵךְ אֶת עַמּוֹ בַשָּׁלוֹם.','Adonai oz l’amo yiten, Adonai y’varech et amo vashalom.']]},
{id:'av-harachamim',title:'Av Harachamim',track:'ein-kamocha',start:38.65,end:75.96,lines:[
['אָב הָרַחֲמִים, הֵיטִיבָה בִרְצוֹנְךָ אֶת צִיּוֹן, תִּבְנֶה חוֹמוֹת יְרוּשָׁלָיִם.','Av harachamim, heitivah virtzon’cha et Tzion, tivneh chomot Y’rushalayim.'],
['כִּי בְךָ לְבַד בָּטָחְנוּ, מֶלֶךְ אֵל רָם וְנִשָּׂא, אֲדוֹן עוֹלָמִים.','Ki v’cha l’vad batachnu, melech El ram v’nisa, adon olamim.']]},
{id:'vayehi',title:'Vayehi Binsoa',track:'vayehi',start:5.75,end:57.53,lines:[
['וַיְהִי בִּנְסֹעַ הָאָרֹן, וַיֹּאמֶר מֹשֶׁה: קוּמָה אֲדֹנָי וְיָפֻצוּ אֹיְבֶיךָ, וְיָנֻסוּ מְשַׂנְאֶיךָ מִפָּנֶיךָ.','Vayehi binsoa ha’aron, vayomer Moshe: kumah Adonai v’yafutzu oy’vecha, v’yanusu m’san’echa mipanecha.'],
['כִּי מִצִּיּוֹן תֵּצֵא תוֹרָה, וּדְבַר אֲדֹנָי מִירוּשָׁלָיִם.','Ki miTzion tetzei Torah, ud’var Adonai miY’rushalayim.'],
['בָּרוּךְ שֶׁנָּתַן תּוֹרָה לְעַמּוֹ יִשְׂרָאֵל בִּקְדֻשָּׁתוֹ.','Baruch shenatan Torah l’amo Yisrael bikdushato.']]},
{id:'brich',title:'B’rich Sh’mei',track:'bei-ana',start:18.3,end:21.15,openingOnly:true,note:'The recording teaches the opening words. The rest of this paragraph is read silently in the teaching on this recording; Bei Ana Rachetz follows as the next section.',lines:[
['בְּרִיךְ שְׁמֵהּ דְּמָרֵא עָלְמָא.','B’rich sh’mei d’marei alma.'],
['בְּרִיךְ כִּתְרָךְ וְאַתְרָךְ. יְהֵא רְעוּתָךְ עִם עַמָּךְ יִשְׂרָאֵל לְעָלַם,','B’rich kitrach v’atrach. Y’hei r’utach im amach Yisrael l’alam,'],
['וּפֻרְקַן יְמִינָךְ אַחֲזֵי לְעַמָּךְ בְּבֵית מַקְדְּשָׁךְ,','ufurkan y’minach achazei l’amach b’veit makd’shach,'],
['וּלְאַמְטוּיֵי לָנָא מִטּוּב נְהוֹרָךְ, וּלְקַבֵּל צְלוֹתָנָא בְּרַחֲמִין.','ul’amtuyei lana mituv n’horach, ul’kabel tz’lotana b’rachamin.'],
['יְהֵא רַעֲוָא קֳדָמָךְ דְּתוֹרִיךְ לָן חַיִּין בְּטִיבוּ, וְלֶהֱוֵי אֲנָא פְקִידָא בְּגוֹ צַדִּיקַיָּא,','Y’hei ra’ava kodamach d’torich lan chayin b’tivu, v’lehevei ana f’kida b’go tzadikaya,'],
['לְמִרְחַם עֲלַי וּלְמִנְטַר יָתִי וְיָת כָּל דִּי לִי וְדִי לְעַמָּךְ יִשְׂרָאֵל.','l’mircham alai ul’mintar yati v’yat kol di li v’di l’amach Yisrael.'],
['אַנְתְּ הוּא זָן לְכֹלָּא וּמְפַרְנֵס לְכֹלָּא. אַנְתְּ הוּא שַׁלִּיט עַל כֹּלָּא,','Ant hu zan l’chola um’farnes l’chola. Ant hu shalit al kola,'],
['אַנְתְּ הוּא דְשַׁלִּיט עַל מַלְכַיָּא, וּמַלְכוּתָא דִילָךְ הִיא.','ant hu d’shalit al malkaya, umalchuta dilach hi.'],
['אֲנָא עַבְדָּא דְקֻדְשָׁא בְּרִיךְ הוּא, דְּסָגִידְנָא קַמֵּיהּ וּמִקַּמֵּי דִּיקַר אוֹרַיְתֵיהּ בְּכָל עִדָּן וְעִדָּן.','Ana avda d’kudsha b’rich hu, d’sagidna kamei umikamei dikar oraytei b’chol idan v’idan.'],
['לָא עַל אֱנָשׁ רָחִיצְנָא, וְלָא עַל בַּר אֱלָהִין סָמִיכְנָא, אֶלָּא בֶּאֱלָהָא דִשְׁמַיָּא,','La al enash rachitzna, v’la al bar elahin samichna, ela be’Elaha dishmaya,'],
['דְּהוּא אֱלָהָא קְשׁוֹט וְאוֹרַיְתֵיהּ קְשׁוֹט, וּנְבִיאוֹהִי קְשׁוֹט, וּמַסְגֵּא לְמֶעְבַּד טַבְוָן וּקְשׁוֹט.','d’hu Elaha k’shot v’oraytei k’shot, un’vi’ohi k’shot, umasgei l’me’bad tavvan uk’shot.']]},
{id:'bei-ana',title:'Bei Ana Rachetz',track:'bei-ana',start:24.85,end:84.75,lines:[
['בֵּיהּ אֲנָא רָחִיץ, וְלִשְׁמֵהּ קַדִּישָׁא יַקִּירָא אֲנָא אֵמַר תֻּשְׁבְּחָן.','Bei ana rachetz, v’lishmei kadisha yakira ana emar tushb’chan.'],
['יְהֵא רַעֲוָא קֳדָמָךְ דְּתִפְתַּח לִבִּי בְּאוֹרַיְתָא,','Y’hei ra’ava kodamach d’tiftach libi b’orayta,'],
['וְתַשְׁלִים מִשְׁאֲלִין דְּלִבָּאי וְלִבָּא דְכָל עַמָּךְ יִשְׂרָאֵל, לְטַב וּלְחַיִּין וְלִשְׁלָם.','v’tashlim mish’alin d’libai v’liba d’chol amach Yisrael, l’tav ul’chayin v’lishlam.']]},
{id:'shema',title:'Shema',track:'shema',start:9.65,end:19.45,response:true,lines:[['שְׁמַע יִשְׂרָאֵל, אֲדֹנָי אֱלֹהֵינוּ, אֲדֹנָי אֶחָד.','Shema Yisrael, Adonai Eloheinu, Adonai echad.']]},
{id:'echad',title:'Echad Eloheinu',track:'shema',start:25.9,end:34.25,response:true,lines:[['אֶחָד אֱלֹהֵינוּ, גָּדוֹל אֲדוֹנֵינוּ, קָדוֹשׁ שְׁמוֹ.','Echad Eloheinu, gadol Adoneinu, kadosh sh’mo.']]},
{id:'gadlu',title:'Gadlu',track:'shema',start:40.65,end:47.3,lines:[['גַּדְּלוּ לַאֲדֹנָי אִתִּי, וּנְרוֹמְמָה שְׁמוֹ יַחְדָּו.','Gadlu l’Adonai iti, un’rom’mah sh’mo yachdav.']]},
{id:'lcha',title:'L’cha Adonai',track:'shema',start:47.4,end:73.4,lines:[
['לְךָ אֲדֹנָי הַגְּדֻלָּה וְהַגְּבוּרָה וְהַתִּפְאֶרֶת וְהַנֵּצַח וְהַהוֹד, כִּי כֹל בַּשָּׁמַיִם וּבָאָרֶץ.','L’cha Adonai hag’dulah v’hag’vurah v’hatiferet v’hanetzach v’hahod, ki chol bashamayim uva’aretz.'],
['לְךָ אֲדֹנָי הַמַּמְלָכָה וְהַמִּתְנַשֵּׂא לְכֹל לְרֹאשׁ.','L’cha Adonai hamamlachah v’hamitnasei l’chol l’rosh.']]},
{id:'romemu',title:'Romemu',track:'shema',start:73.4,end:105.91,lines:[
['רוֹמְמוּ אֲדֹנָי אֱלֹהֵינוּ וְהִשְׁתַּחֲווּ לַהֲדֹם רַגְלָיו, קָדוֹשׁ הוּא.','Romemu Adonai Eloheinu v’hishtachavu lahadom raglav, kadosh hu.'],
['רוֹמְמוּ אֲדֹנָי אֱלֹהֵינוּ וְהִשְׁתַּחֲווּ לְהַר קָדְשׁוֹ, כִּי קָדוֹשׁ אֲדֹנָי אֱלֹהֵינוּ.','Romemu Adonai Eloheinu v’hishtachavu l’har kodsho, ki kadosh Adonai Eloheinu.']]}
];
for(const section of sections){
 const english=KI_ENGLISH.torah[section.id];
 if(english.length!==section.lines.length)throw Error('Torah translation row mismatch: '+section.id);
 section.lines=section.lines.map(([he,tr],i)=>[he,tr,english[i]]);
}
for(const [id,sectionIds] of Object.entries({
 einkamocha:['ein-kamocha'],avharachamim:['av-harachamim'],vayehi:['vayehi'],
 torah:['shema','echad','gadlu'],lcha:['lcha','romemu']
})){
 PRAYERS[id].lines=sectionIds.flatMap(sectionId=>sections.find(s=>s.id===sectionId).lines);
 PRAYERS[id].torahLink='#services/torah-service/'+sectionIds[0];
}
let dispose=()=>{};
window.teardownFullTorah=()=>dispose();
window.renderFullTorah=function(from='services',sectionId){
 dispose();const back=from==='bnei'?'#bnei-mitzvah':'#services',label=from==='bnei'?'B’nei Mitzvah Prep':'Full Services';
 document.getElementById('main').innerHTML=`<a class="back" href="${back}">← ${label}</a><section class="ft-intro"><p class="eyebrow">Shabbat morning · Full Torah service</p><h1>Taking out the Torah</h1><p class="ft-subtitle">Hachnasat HaTorah</p><p>Follow the complete prayer texts from Ein Kamocha through Romemu. Choose a section to practice, or hear the original recording with its teaching and responses.</p><a class="ft-guide-link" href="#bnei-mitzvah">Looking for the highlighted student parts? →</a></section><div class="ft-layout"><aside class="ft-outline" aria-label="Torah service sections"><h2>Service order</h2><ol>${sections.map((s,i)=>`<li><button data-ft-section="${s.id}"><span>${i+1}</span>${E(s.title)}</button></li>`).join('')}</ol></aside><section class="ft-lesson" aria-labelledby="ft-title"><div class="ft-lesson-heading"><p id="ft-position" class="eyebrow"></p><h2 id="ft-title"></h2><p id="ft-note" class="ft-note" hidden></p></div><div class="ft-controls"><div class="ft-modes" role="group" aria-label="Playback scope"><button id="ft-section-mode" aria-pressed="true">This section</button><button id="ft-recording-mode" aria-pressed="false">Original recording</button></div><audio id="ft-audio" controls preload="metadata" aria-label="Torah service recording"></audio><div class="ft-mini"><button id="ft-restart">↺ Start again</button><label><input type="checkbox" id="ft-repeat"> Repeat</label></div><details class="ft-tools"><summary>Speed & pitch</summary><div class="ft-selects"><label>Speed<select id="ft-speed">${[.5,.65,.8,1,1.15,1.3,1.5].map(n=>`<option value="${n}"${n===1?' selected':''}>${n}×${n===1?' Original':''}</option>`).join('')}</select></label><label>Pitch<select id="ft-pitch">${[-3,-2,-1,0,1,2,3].map(n=>`<option value="${n}"${n===0?' selected':''}>${n===0?'Original':(n>0?'+':'−')+Math.abs(n)+' semitones'}</option>`).join('')}</select></label></div><button id="ft-reset">Reset speed & pitch</button></details><p id="ft-status" role="status" aria-live="polite"></p></div><div class="ft-text-toolbar"><h3>Complete text</h3><div class="ki-text-toggles"><label><input id="ft-translit" type="checkbox" checked> Transliteration</label><label><input id="ft-english" type="checkbox" checked> English</label></div></div><p id="ft-response" class="ft-response" hidden>Pause after leading this line for the congregation to repeat.</p><div id="ft-text"></div><div class="ft-pager"><button id="ft-prev">← Previous</button><span id="ft-count"></span><button id="ft-next">Next →</button></div></section></div>`;
 const $=id=>document.getElementById('ft-'+id),audio=$('audio');let i=0,pitch=0,speed=1,scope='section',repeat=false,token=0,dead=false,cancel=()=>{};
 function range(){const s=sections[i];return scope==='section'?[s.start,Math.min(s.end,Number.isFinite(audio.duration)?audio.duration:s.end)]:[0,Number.isFinite(audio.duration)?audio.duration:Infinity]}
 async function load(time,play=false){cancel();const id=++token;audio.pause();$('status').textContent='Loading…';audio.src=`bnei-audio/${sections[i].track}_${pitch}.mp3`;audio.load();try{await new Promise((resolve,reject)=>{let timer;const done=e=>{clearTimeout(timer);audio.removeEventListener('loadedmetadata',ok);audio.removeEventListener('error',bad);cancel=()=>{};e?reject(e):resolve()};const ok=()=>done(),bad=()=>done(Error('Audio unavailable'));cancel=()=>done(Error('Cancelled'));audio.addEventListener('loadedmetadata',ok);audio.addEventListener('error',bad);timer=setTimeout(()=>done(Error('Timeout')),20000)});if(dead||id!==token)return;audio.currentTime=Math.min(time,audio.duration-.03);audio.playbackRate=speed;audio.preservesPitch=true;$('status').textContent='';if(play)await audio.play()}catch(e){if(!dead&&id===token)$('status').textContent=e.name==='NotAllowedError'?'Press play to continue.':'Unable to load this recording. Please try again.'}}
 function mode(){const s=sections[i];$('section-mode').textContent=s.openingOnly?'Hear opening':'This section';$('section-mode').setAttribute('aria-pressed',String(scope==='section'));$('recording-mode').setAttribute('aria-pressed',String(scope==='recording'))}
 function select(n,play=false){i=Math.max(0,Math.min(sections.length-1,n));const s=sections[i];$('title').textContent=s.title;$('position').textContent=`Section ${i+1} of ${sections.length}`;$('count').textContent=`${i+1} / ${sections.length}`;$('prev').disabled=i===0;$('next').disabled=i===sections.length-1;$('note').hidden=!s.note;$('note').textContent=s.note||'';$('response').hidden=!s.response;$('text').innerHTML=s.lines.map(([he,tr,en],n)=>`<div class="ft-line${s.openingOnly&&n===0?' ft-opening':''}"><p lang="he" dir="rtl">${E(he)}</p><p class="ft-transliteration"${$('translit').checked?'':' hidden'}>${E(tr)}</p><p class="ki-english"${$('english').checked?'':' hidden'}>${E(en)}</p></div>`).join('');document.querySelectorAll('[data-ft-section]').forEach(b=>{b.removeAttribute('aria-current');if(b.dataset.ftSection===s.id)b.setAttribute('aria-current','step')});mode();load(range()[0],play)}
 document.querySelectorAll('[data-ft-section]').forEach(b=>b.onclick=()=>{select(sections.findIndex(s=>s.id===b.dataset.ftSection));if(innerWidth<850)document.querySelector('.ft-lesson').scrollIntoView({behavior:'smooth',block:'start'})});
 $('prev').onclick=()=>select(i-1);$('next').onclick=()=>select(i+1);$('restart').onclick=()=>audio.currentTime=range()[0];$('repeat').onchange=()=>repeat=$('repeat').checked;
 function changeScope(s){scope=s;mode();const playing=!audio.paused;audio.pause();audio.currentTime=range()[0];if(playing)audio.play().catch(()=>{$('status').textContent='Press play to continue.'})}
 $('section-mode').onclick=()=>changeScope('section');$('recording-mode').onclick=()=>changeScope('recording');$('speed').onchange=()=>{speed=Number($('speed').value);audio.playbackRate=speed;audio.preservesPitch=true};$('pitch').onchange=()=>{pitch=Number($('pitch').value);load(audio.currentTime,!audio.paused)};$('reset').onclick=()=>{speed=1;$('speed').value='1';audio.playbackRate=1;if(pitch){pitch=0;$('pitch').value='0';load(audio.currentTime,!audio.paused)}};$('english').onchange=()=>document.querySelectorAll('#ft-text .ki-english').forEach(p=>p.hidden=!$('english').checked);$('translit').onchange=()=>document.querySelectorAll('.ft-transliteration').forEach(p=>p.hidden=!$('translit').checked);
 function finish(){audio.pause();if(repeat){audio.currentTime=range()[0];audio.play().catch(()=>{$('status').textContent='Press play to repeat.'})}}
 function check(){if(dead||audio.paused||!Number.isFinite(audio.duration))return;if(audio.currentTime>=range()[1]-.015)finish()}
 const timer=setInterval(check,25);audio.addEventListener('timeupdate',check);audio.addEventListener('ended',()=>{if(repeat){audio.currentTime=range()[0];audio.play().catch(()=>{})}});audio.addEventListener('play',()=>{const [start,end]=range();if(audio.currentTime<start-.1||audio.currentTime>=end-.02)audio.currentTime=start});
 dispose=()=>{dead=true;token++;cancel();clearInterval(timer);audio.pause();audio.removeAttribute('src');audio.load();dispose=()=>{}};select(Math.max(0,sections.findIndex(s=>s.id===sectionId)));scrollTo(0,0);
};
window.renderKILanding=function(kind,recordings={}){
 const main=document.getElementById('main');
 const card=(href,kicker,title,desc)=>`<a class="ki-resource" href="${href}"><span class="eyebrow">${kicker}</span><h2>${title}</h2><p>${desc}</p><span class="ki-go">Explore →</span></a>`;
 if(kind==='services'){main.innerHTML=`<a href="#" class="back">← KI Tefillah home</a><section class="ki-library-head"><p class="eyebrow">Learn · Practice · Lead</p><h1>Full Services</h1><p>Prayer texts and recordings for learning to lead.</p></section><div class="ki-resources">${card('#services/torah-service','Shabbat morning','Torah Service','Taking out the Torah: the complete prayer texts from Ein Kamocha through Romemu, with practice recordings.')}</div>`;}
 else if(kind==='kirs'){main.innerHTML=`<a href="#" class="back">← KI Tefillah home</a><section class="ki-library-head"><p class="eyebrow">KI Religious School</p><h1>KIRS Tefillah</h1><p>Choose your class to open your tefillah card.</p></section><div class="class-grid">${Object.keys(CLASSES).map(g=>`<a class="class-choice" href="#${g}"><img src="assets/cards/${g}.png" alt="Tefillah card for grades ${g}"><div class="choice-copy"><h2>Grades ${g.replace('-','–')}</h2><p>${Object.keys(recordings[g]||{}).length} recordings ready to practice</p><p class="choice-action">Start practicing →</p></div></a>`).join('')}</div>`;}
 else {main.innerHTML=`<section class="hero ki-home"><span id="ki-home-logo"></span><p class="eyebrow">Kehillath Israel</p><h1>KI Tefillah</h1><p class="intro">Learn the melodies. Practice the prayers. Find your voice.</p></section><div class="ki-resources">${card('#kirs','Religious school','KIRS','Class tefillah cards and recordings for grades K–1, 2–3, and 4–5.')}${card('#bnei-mitzvah','Prepare to lead','B’nei Mitzvah Prep','Practice the highlighted student parts or learn the full taking-out-the-Torah sequence.')}${card('#services','Explore the service','Full Services','Follow complete prayer texts and recordings, starting with the Torah service.')}</div>`;const logo=document.querySelector('.brand-logo');if(logo){const copy=logo.cloneNode(true);copy.className='hero-logo';copy.alt='Kehillath Israel';document.getElementById('ki-home-logo').replaceWith(copy)}}scrollTo(0,0);
};
})();
