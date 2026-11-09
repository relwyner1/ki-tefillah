/* Traditional prayer texts with original English renderings for KI practice. */
(() => {
'use strict';
const rows = text => text.trim().split('\n').map(line => line.split('|').map(s=>s.trim()));
function translate(id, english) {
 const lines=PRAYERS[id].lines;
 if(lines.length!==english.length)throw Error('Translation row mismatch: '+id);
 PRAYERS[id].lines=lines.map(([he,tr],i)=>[he,tr,english[i]]);
}
function extend(id, text) {PRAYERS[id].lines=PRAYERS[id].lines.concat(rows(text));delete PRAYERS[id].excerpt;}
const blessing='Blessed are You, Adonai our God, Sovereign of the universe, ';
translate('candles',[blessing+'who made us holy through Your commandments and commanded us to light the Shabbat candle.']);
translate('wine',[blessing+'who creates the fruit of the vine.']);
translate('motzi',[blessing+'who brings bread forth from the earth.']);
translate('shehecheyanu',[blessing+'who has given us life, sustained us, and brought us to this moment.']);
const shemaEnglish=['Hear, Israel: Adonai is our God, Adonai is one.','Blessed is the name of God’s glorious reign forever and ever.'];
translate('shema-short',shemaEnglish);
translate('shema',[...shemaEnglish,'Love Adonai your God with all your heart, all your soul, and all your might.','Let these words that I command you today be upon your heart.','Teach them diligently to your children and speak of them when you sit at home, when you travel, when you lie down, and when you rise.','Bind them as a sign on your hand, and let them be a sign between your eyes.','Write them on the doorposts of your house and on your gates.']);
translate('oseh',['May the One who makes peace in the heavens make peace for us and for all Israel. And say: Amen.']);
translate('barchu',['Bless Adonai, the One who is blessed.','Blessed is Adonai, the One who is blessed, forever and ever.']);
translate('vshamru',['The people of Israel shall keep Shabbat, observing it throughout their generations as an everlasting covenant.','It is a sign forever between Me and the people of Israel: in six days Adonai made heaven and earth, and on the seventh day rested and was refreshed.']);
translate('psalm150',['Hallelujah! Praise God in the sanctuary; praise God in the mighty heavens.','Praise God for mighty deeds; praise God for surpassing greatness.','Praise God with the blast of the shofar; praise God with harp and lyre.','Praise God with drum and dance; praise God with strings and flute.','Praise God with ringing cymbals; praise God with crashing cymbals.','Let everything that breathes praise Yah. Hallelujah!']);
translate('adon-short',['Sovereign of the world, who reigned before anything was created.','When all was made according to God’s will, then God was called Sovereign.']);
PRAYERS.adon.lines=PRAYERS['adon-short'].lines.slice();
extend('adon',`
וְאַחֲרֵי כִּכְלוֹת הַכֹּל, לְבַדּוֹ יִמְלֹךְ נוֹרָא. | V’acharei kichlot hakol, l’vado yimloch nora. | And when all things cease, God alone will reign in awe.
וְהוּא הָיָה וְהוּא הֹוֶה, וְהוּא יִהְיֶה בְּתִפְאָרָה. | V’hu hayah v’hu hoveh, v’hu yihyeh b’tifarah. | God was, God is, and God will be in glory.
וְהוּא אֶחָד וְאֵין שֵׁנִי, לְהַמְשִׁיל לוֹ לְהַחְבִּירָה. | V’hu echad v’ein sheni, l’hamshil lo l’hachbirah. | God is one, with no second to compare or join to God.
בְּלִי רֵאשִׁית בְּלִי תַכְלִית, וְלוֹ הָעֹז וְהַמִּשְׂרָה. | B’li reishit b’li tachlit, v’lo ha’oz v’hamisrah. | Without beginning or end, to God belong strength and rule.
וְהוּא אֵלִי וְחַי גֹּאֲלִי, וְצוּר חֶבְלִי בְּעֵת צָרָה. | V’hu Eli v’chai go’ali, v’tzur chevli b’et tzarah. | God is my God and my living redeemer, my rock in times of trouble.
וְהוּא נִסִּי וּמָנוֹס לִי, מְנָת כּוֹסִי בְּיוֹם אֶקְרָא. | V’hu nisi umanos li, m’nat kosi b’yom ekra. | God is my banner and my refuge, my portion when I call.
בְּיָדוֹ אַפְקִיד רוּחִי, בְּעֵת אִישַׁן וְאָעִירָה. | B’yado afkid ruchi, b’et ishan v’a’irah. | Into God’s hand I entrust my spirit when I sleep and when I wake.
וְעִם רוּחִי גְּוִיָּתִי, יְיָ לִי וְלֹא אִירָא. | V’im ruchi g’viyati, Adonai li v’lo ira. | And with my spirit, my body too. Adonai is with me; I will not fear.
`);
PRAYERS['adon-short'].fullLines=PRAYERS.adon.lines;
PRAYERS['adon-short'].practiceNote='This recording teaches the opening stanza. The complete hymn is below.';
translate('ashrei-short',['Happy are those who dwell in Your house; they continue to praise You. Selah.','Happy are the people for whom this is so; happy are the people whose God is Adonai.','A praise of David. I will exalt You, my God and Sovereign, and bless Your name forever and ever.','Every day I will bless You and praise Your name forever and ever.','Great is Adonai and greatly praised; Your greatness cannot be fathomed.','One generation praises Your deeds to another and tells of Your mighty acts.','I will speak of the splendor of Your glory and of Your wonders.','They will speak of Your awesome power, and I will tell of Your greatness.']);
PRAYERS.ashrei.lines=PRAYERS['ashrei-short'].lines.slice();
extend('ashrei',`
זֵכֶר רַב טוּבְךָ יַבִּיעוּ, וְצִדְקָתְךָ יְרַנֵּנוּ. | Zecher rav tuvcha yabi’u, v’tzidkat’cha y’ranenu. | They will proclaim Your abundant goodness and sing of Your righteousness.
חַנּוּן וְרַחוּם יְיָ, אֶרֶךְ אַפַּיִם וּגְדָל חָסֶד. | Chanun v’rachum Adonai, erech apayim ug’dal chased. | Adonai is gracious and compassionate, slow to anger and great in kindness.
טוֹב יְיָ לַכֹּל, וְרַחֲמָיו עַל כָּל מַעֲשָׂיו. | Tov Adonai lakol, v’rachamav al kol ma’asav. | Adonai is good to all, and God’s compassion extends to all creation.
יוֹדוּךָ יְיָ כָּל מַעֲשֶׂיךָ, וַחֲסִידֶיךָ יְבָרְכוּכָה. | Yoducha Adonai kol ma’asecha, vachasidecha y’var’chucha. | All Your works will thank You, Adonai, and Your faithful ones will bless You.
כְּבוֹד מַלְכוּתְךָ יֹאמֵרוּ, וּגְבוּרָתְךָ יְדַבֵּרוּ. | K’vod malchut’cha yomeru, ug’vurat’cha y’daberu. | They will speak of the glory of Your reign and tell of Your might.
לְהוֹדִיעַ לִבְנֵי הָאָדָם גְּבוּרֹתָיו, וּכְבוֹד הֲדַר מַלְכוּתוֹ. | L’hodia livnei ha’adam g’vurotav, uch’vod hadar malchuto. | To make known to all people God’s mighty deeds and the splendor of God’s reign.
מַלְכוּתְךָ מַלְכוּת כָּל עֹלָמִים, וּמֶמְשַׁלְתְּךָ בְּכָל דּוֹר וָדֹר. | Malchut’cha malchut kol olamim, umemshalt’cha b’chol dor vador. | Your reign lasts through all ages; Your rule endures through every generation.
סוֹמֵךְ יְיָ לְכָל הַנֹּפְלִים, וְזוֹקֵף לְכָל הַכְּפוּפִים. | Somech Adonai l’chol hanof’lim, v’zokef l’chol hak’fufim. | Adonai supports all who fall and raises all who are bowed down.
עֵינֵי כֹל אֵלֶיךָ יְשַׂבֵּרוּ, וְאַתָּה נוֹתֵן לָהֶם אֶת אָכְלָם בְּעִתּוֹ. | Einei chol eilecha y’saberu, v’atah notein lahem et ochlam b’ito. | All eyes look to You in hope, and You give them food at the right time.
פּוֹתֵחַ אֶת יָדֶךָ, וּמַשְׂבִּיעַ לְכָל חַי רָצוֹן. | Pote’ach et yadecha, umasbia l’chol chai ratzon. | You open Your hand and satisfy the needs of every living thing.
צַדִּיק יְיָ בְּכָל דְּרָכָיו, וְחָסִיד בְּכָל מַעֲשָׂיו. | Tzadik Adonai b’chol d’rachav, v’chasid b’chol ma’asav. | Adonai is righteous in all ways and kind in all deeds.
קָרוֹב יְיָ לְכָל קֹרְאָיו, לְכֹל אֲשֶׁר יִקְרָאֻהוּ בֶאֱמֶת. | Karov Adonai l’chol kor’av, l’chol asher yikra’uhu ve’emet. | Adonai is near to all who call, to all who call sincerely.
רְצוֹן יְרֵאָיו יַעֲשֶׂה, וְאֶת שַׁוְעָתָם יִשְׁמַע וְיוֹשִׁיעֵם. | R’tzon y’re’av ya’aseh, v’et shav’atam yishma v’yoshi’eim. | God fulfills the wishes of those who stand in awe, hears their cry, and saves them.
שׁוֹמֵר יְיָ אֶת כָּל אֹהֲבָיו, וְאֵת כָּל הָרְשָׁעִים יַשְׁמִיד. | Shomer Adonai et kol ohavav, v’et kol har’sha’im yashmid. | Adonai guards all who love God and brings the wicked to an end.
תְּהִלַּת יְיָ יְדַבֶּר פִּי, וִיבָרֵךְ כָּל בָּשָׂר שֵׁם קָדְשׁוֹ לְעוֹלָם וָעֶד. | T’hilat Adonai y’daber pi, vivarech kol basar shem kodsho l’olam va’ed. | My mouth will speak Adonai’s praise; let all living beings bless God’s holy name forever and ever.
וַאֲנַחְנוּ נְבָרֵךְ יָהּ, מֵעַתָּה וְעַד עוֹלָם, הַלְלוּיָהּ. | Va’anachnu n’varech Yah, mei’atah v’ad olam, hal’luyah. | We will bless Yah from now and forever. Hallelujah!
`);
PRAYERS['ashrei-short'].fullLines=PRAYERS.ashrei.lines;
PRAYERS['ashrei-short'].practiceNote='This recording teaches the first eight lines. The complete prayer is below.';
delete PRAYERS['ashrei-short'].excerpt;
translate('eladon',['God is sovereign over all creation, blessed and praised by every living soul.','God’s greatness and goodness fill the world; knowledge and understanding surround God’s glory.']);
extend('eladon',`
הַמִּתְגָּאֶה עַל חַיּוֹת הַקֹּדֶשׁ, וְנֶהְדָּר בְּכָבוֹד עַל הַמֶּרְכָּבָה. | Hamitga’eh al chayot hakodesh, v’nehdar b’chavod al hamerkavah. | Exalted above the holy creatures, glorious upon the heavenly chariot.
זְכוּת וּמִישׁוֹר לִפְנֵי כִסְאוֹ, חֶסֶד וְרַחֲמִים לִפְנֵי כְבוֹדוֹ. | Z’chut umishor lifnei chis’o, chesed v’rachamim lifnei ch’vodo. | Merit and fairness stand before God’s throne; kindness and compassion stand before God’s glory.
טוֹבִים מְאוֹרוֹת שֶׁבָּרָא אֱלֹהֵינוּ, יְצָרָם בְּדַעַת בְּבִינָה וּבְהַשְׂכֵּל. | Tovim m’orot shebara Eloheinu, y’tzaram b’da’at b’vinah uv’haskel. | Good are the lights our God created, fashioned with knowledge, understanding, and insight.
כֹּחַ וּגְבוּרָה נָתַן בָּהֶם, לִהְיוֹת מוֹשְׁלִים בְּקֶרֶב תֵּבֵל. | Ko’ach ug’vurah natan bahem, lihyot mosh’lim b’kerev tevel. | God gave them strength and power to govern the world.
מְלֵאִים זִיו וּמְפִיקִים נֹגַהּ, נָאֶה זִיוָם בְּכָל הָעוֹלָם. | M’lei’im ziv um’fikim nogah, na’eh zivam b’chol ha’olam. | Filled with radiance, they give off light; their brilliance is beautiful throughout the world.
שְׂמֵחִים בְּצֵאתָם וְשָׂשִׂים בְּבוֹאָם, עוֹשִׂים בְּאֵימָה רְצוֹן קוֹנָם. | S’meichim b’tzetam v’sasim b’vo’am, osim b’eimah r’tzon konam. | They rejoice as they go out and as they return, carrying out their Maker’s will in awe.
פְּאֵר וְכָבוֹד נוֹתְנִים לִשְׁמוֹ, צָהֳלָה וְרִנָּה לְזֵכֶר מַלְכוּתוֹ. | P’er v’chavod not’nim lishmo, tzoholah v’rinah l’zecher malchuto. | They give splendor and honor to God’s name, rejoicing and singing at the memory of God’s reign.
קָרָא לַשֶּׁמֶשׁ וַיִּזְרַח אוֹר, רָאָה וְהִתְקִין צוּרַת הַלְּבָנָה. | Kara lashemesh vayizrach or, ra’ah v’hitkin tzurat hal’vanah. | God called to the sun and light shone; God looked and set the moon in its form.
שֶׁבַח נוֹתְנִים לוֹ כָּל צְבָא מָרוֹם, תִּפְאֶרֶת וּגְדֻלָּה שְׂרָפִים וְאוֹפַנִּים וְחַיּוֹת הַקֹּדֶשׁ. | Shevach not’nim lo kol tz’va marom, tiferet ug’dulah s’rafim v’ofanim v’chayot hakodesh. | All the heavenly hosts give praise; the seraphim, ofanim, and holy creatures give glory and greatness.
`);
translate('yishtabach',['May Your name be praised forever, our Sovereign, the great and holy God who reigns in heaven and on earth.']);
extend('yishtabach',`
כִּי לְךָ נָאֶה יְיָ אֱלֹהֵינוּ וֵאלֹהֵי אֲבוֹתֵינוּ, שִׁיר וּשְׁבָחָה, הַלֵּל וְזִמְרָה, עֹז וּמֶמְשָׁלָה, נֶצַח גְּדֻלָּה וּגְבוּרָה, תְּהִלָּה וְתִפְאֶרֶת, קְדֻשָּׁה וּמַלְכוּת, בְּרָכוֹת וְהוֹדָאוֹת מֵעַתָּה וְעַד עוֹלָם. | Ki l’cha na’eh Adonai Eloheinu v’Elohei avoteinu, shir ush’vachah, hallel v’zimrah, oz umemshalah, netzach g’dulah ug’vurah, t’hilah v’tiferet, k’dushah umalchut, b’rachot v’hoda’ot mei’atah v’ad olam. | For to You, Adonai our God and God of our ancestors, belong song and praise, hymns and melody, strength and rule, endurance, greatness and might, praise and splendor, holiness and sovereignty, blessings and thanks, now and forever.
בָּרוּךְ אַתָּה יְיָ, אֵל מֶלֶךְ גָּדוֹל בַּתִּשְׁבָּחוֹת, אֵל הַהוֹדָאוֹת, אֲדוֹן הַנִּפְלָאוֹת, הַבּוֹחֵר בְּשִׁירֵי זִמְרָה, מֶלֶךְ אֵל חֵי הָעוֹלָמִים. | Baruch atah Adonai, El melech gadol batishbachot, El hahoda’ot, adon hanifla’ot, habocheir b’shirei zimrah, melech El chei ha’olamim. | Blessed are You, Adonai, great Sovereign in praise, God of thanksgiving, Master of wonders, who delights in song, Sovereign and living God of all worlds.
`);
const yishtabach=PRAYERS.yishtabach;
yishtabach.fullLines=yishtabach.lines;
yishtabach.lines=[yishtabach.fullLines[0],['בְּרָכוֹת וְהוֹדָאוֹת מֵעַתָּה וְעַד עוֹלָם.', 'B’rachot v’hoda’ot mei’atah v’ad olam.', 'Blessings and thanks, now and forever.'],yishtabach.fullLines[2]];
yishtabach.practiceNote='This recording teaches the sung lines. The complete blessing is below.';
translate('kaddish',['May God’s great name be magnified and made holy.','In the world created according to God’s will, may God establish that reign in your lifetimes and in the lifetime of all Israel, swiftly and soon. And say: Amen.','May God’s great name be blessed forever and ever.']);
extend('kaddish',`
יִתְבָּרַךְ וְיִשְׁתַּבַּח וְיִתְפָּאַר וְיִתְרוֹמַם וְיִתְנַשֵּׂא וְיִתְהַדָּר וְיִתְעַלֶּה וְיִתְהַלָּל שְׁמֵהּ דְּקֻדְשָׁא בְּרִיךְ הוּא. | Yitbarach v’yishtabach v’yitpa’ar v’yitromam v’yitnasei v’yithadar v’yit’aleh v’yithalal sh’mei d’kudsha b’rich hu. | Blessed, praised, glorified, exalted, uplifted, honored, raised high, and acclaimed be the name of the Holy One, blessed be God.
לְעֵלָּא מִן כָּל בִּרְכָתָא וְשִׁירָתָא, תֻּשְׁבְּחָתָא וְנֶחֱמָתָא דַּאֲמִירָן בְּעָלְמָא, וְאִמְרוּ אָמֵן. | L’eila min kol birchata v’shirata, tushb’chata v’nechemata da’amiran b’alma, v’imru amen. | Beyond every blessing and song, praise and consolation spoken in the world. And say: Amen.
`);
translate('avot',['Blessed are You, Adonai, our God and God of our ancestors, God of Abraham, God of Isaac, and God of Jacob.']);
extend('avot',`
הָאֵל הַגָּדוֹל הַגִּבּוֹר וְהַנּוֹרָא, אֵל עֶלְיוֹן, גּוֹמֵל חֲסָדִים טוֹבִים, וְקוֹנֵה הַכֹּל. | Ha’El hagadol hagibor v’hanora, El elyon, gomeil chasadim tovim, v’koneh hakol. | The great, mighty, and awesome God, God Most High, who acts with loving kindness and holds all creation.
וְזוֹכֵר חַסְדֵי אָבוֹת, וּמֵבִיא גוֹאֵל לִבְנֵי בְנֵיהֶם, לְמַעַן שְׁמוֹ בְּאַהֲבָה. | V’zocher chasdei avot, umeivi go’el livnei v’neihem, l’ma’an sh’mo b’ahavah. | You remember the kindness of our ancestors and bring a redeemer to their descendants, for the sake of Your name, in love.
מֶלֶךְ עוֹזֵר וּמוֹשִׁיעַ וּמָגֵן. בָּרוּךְ אַתָּה יְיָ, מָגֵן אַבְרָהָם. | Melech ozeir umoshi’a umagen. Baruch atah Adonai, magen Avraham. | Sovereign who helps, saves, and shields. Blessed are You, Adonai, Shield of Abraham.
`);
translate('mi',['Who is like You among the mighty, Adonai? Who is like You, majestic in holiness, awesome in praise, doing wonders?']);
PRAYERS.mi.note='Exodus 15:11 · The verse sung in this recording';
delete PRAYERS.mi.excerpt;
translate('yotzer',['Shine a new light upon Zion, and may we all soon be worthy of its light.','Blessed are You, Adonai, Creator of the lights.']);
PRAYERS.yotzer.title='Or Chadash — Closing of Yotzer Or';
PRAYERS.yotzer.note='The recording covers the closing of the blessing.';
delete PRAYERS.yotzer.excerpt;
translate('vehaer',['Light up our eyes with Your Torah, bind our hearts to Your commandments, and unite our hearts to love and revere Your name.','May we never be ashamed.']);
extend('vehaer',`
כִּי בְשֵׁם קָדְשְׁךָ הַגָּדוֹל וְהַנּוֹרָא בָּטָחְנוּ, נָגִילָה וְנִשְׂמְחָה בִּישׁוּעָתֶךָ. | Ki v’shem kodsh’cha hagadol v’hanora batachnu, nagilah v’nism’chah bishu’atecha. | For we trust in Your great and awesome holy name; let us rejoice and be glad in Your deliverance.
`);
PRAYERS.oseh.lines=rows(`
עֹשֶׂה שָׁלוֹם בִּמְרוֹמָיו, הוּא יַעֲשֶׂה שָׁלוֹם עָלֵינוּ וְעַל כָּל יִשְׂרָאֵל, וְעַל כָּל יוֹשְׁבֵי תֵבֵל, וְאִמְרוּ אָמֵן. | Oseh shalom bimromav, hu ya’aseh shalom aleinu v’al kol Yisrael, v’al kol yoshvei tevel, v’imru amen. | May the One who makes peace in the heavens make peace for us, for all Israel, and for all who dwell on earth. And say: Amen.
`);
translate('shochein',['The One who dwells forever is exalted, and holy is God’s name.','As it is written: Rejoice in Adonai, you righteous; praise befits the upright.','By the mouths of the upright You are praised; by the words of the righteous You are blessed.','By the tongues of the faithful You are exalted; amid the holy You are sanctified.']);
// The verse of Psalm 33 is read as context in this setting; the recording moves
// from Shochein Ad to B'fi Y'sharim.
PRAYERS.shochein.fullLines=PRAYERS.shochein.lines;
PRAYERS.shochein.lines=PRAYERS.shochein.lines.filter((_,i)=>i!==1);
PRAYERS.shochein.practiceNote='Follow the lines sung in this recording. The intervening verse is in the complete text below.';
PRAYERS['shema-short'].fullLines=PRAYERS.shema.lines;
PRAYERS['shema-short'].fullLabel='Read Shema and V’ahavta';
PRAYERS['shema-short'].practiceNote='This recording teaches Shema and Baruch Shem.';
PRAYERS.anim.title='Shir HaKavod / Anim Zemirot';
PRAYERS.anim.lines=rows(`
אַנְעִים זְמִירוֹת וְשִׁירִים אֶאֱרוֹג, כִּי אֵלֶיךָ נַפְשִׁי תַעֲרוֹג. | An’im z’mirot v’shirim e’erog, ki eilecha nafshi ta’arog. | I will sing sweet melodies and weave songs, for my soul longs for You.
נַפְשִׁי חָמְדָה בְּצֵל יָדֶךָ, לָדַעַת כָּל רָז סוֹדֶךָ. | Nafshi chamdah b’tzel yadecha, lada’at kol raz sodecha. | My soul yearns for the shelter of Your hand, to know the mysteries You hold.
מִדֵּי דַבְּרִי בִּכְבוֹדֶךָ, הוֹמֶה לִבִּי אֶל דּוֹדֶיךָ. | Midei dab’ri bichvodecha, homeh libi el dodecha. | Whenever I speak of Your glory, my heart stirs for Your love.
עַל כֵּן אֲדַבֵּר בְּךָ נִכְבָּדוֹת, וְשִׁמְךָ אֲכַבֵּד בְּשִׁירֵי יְדִידוֹת. | Al ken adaber b’cha nichbadot, v’shimcha achabed b’shirei y’didot. | So I will speak of Your splendor and honor Your name with songs of love.
אֲסַפְּרָה כְבוֹדְךָ וְלֹא רְאִיתִיךָ, אֲדַמְּךָ אֲכַנְּךָ וְלֹא יְדַעְתִּיךָ. | Asap’rah ch’vod’cha v’lo r’iticha, adam’cha achan’cha v’lo y’da’ticha. | I tell of Your glory though I have not seen You; I picture and name You though I cannot know You.
בְּיַד נְבִיאֶיךָ בְּסוֹד עֲבָדֶיךָ, דִּמִּיתָ הֲדַר כְּבוֹד הוֹדֶךָ. | B’yad n’vi’echa b’sod avadecha, dimita hadar k’vod hodecha. | Through Your prophets, in the counsel of Your servants, You gave images of Your radiant glory.
גְּדֻלָּתְךָ וּגְבוּרָתֶךָ, כִּנּוּ לְתוֹקֶף פְּעֻלָּתֶךָ. | G’dulat’cha ug’vuratecha, kinu l’tokef p’ulatecha. | They spoke of Your greatness and might through the power of Your deeds.
דִּמּוּ אוֹתְךָ וְלֹא כְּפִי יֶשְׁךָ, וַיְשַׁוּוּךָ לְפִי מַעֲשֶׂיךָ. | Dimu ot’cha v’lo ch’fi yesh’cha, vay’shavucha l’fi ma’asecha. | They pictured You through what You do, though no picture can show what You are.
הִמְשִׁילוּךָ בְּרֹב חֶזְיוֹנוֹת, הִנְּךָ אֶחָד בְּכָל דִּמְיוֹנוֹת. | Himshilucha b’rov chezyonot, hin’cha echad b’chol dimyonot. | They described You in many visions; through all the images, You are one.
וַיֶּחֱזוּ בְךָ זִקְנָה וּבַחֲרוּת, וּשְׂעַר רֹאשְׁךָ בְּשֵׂיבָה וְשַׁחֲרוּת. | Vayechezu v’cha ziknah uvacharut, us’ar rosh’cha b’seivah v’shacharut. | They saw You as old and young, with hair both gray and black.
זִקְנָה בְּיוֹם דִּין וּבַחֲרוּת בְּיוֹם קְרָב, כְּאִישׁ מִלְחָמוֹת יָדָיו לוֹ רָב. | Ziknah b’yom din uvacharut b’yom k’rav, k’ish milchamot yadav lo rav. | Old on the day of judgment, young on the day of battle, like a warrior strong enough to prevail.
חָבַשׁ כּוֹבַע יְשׁוּעָה בְּרֹאשׁוֹ, הוֹשִׁיעָה לּוֹ יְמִינוֹ וּזְרוֹעַ קָדְשׁוֹ. | Chavash kova y’shu’ah b’rosho, hoshi’ah lo y’mino uz’ro’a kodsho. | God wore a helmet of deliverance; God’s right hand and holy arm won the victory.
טַלְלֵי אוֹרוֹת רֹאשׁוֹ נִמְלָא, קְוֻצּוֹתָיו רְסִיסֵי לָיְלָה. | Tal’lei orot rosho nimla, k’vutzotav r’sisei laylah. | God’s head is filled with luminous dew, the locks of hair with drops of night.
יִתְפָּאֵר בִּי כִּי חָפֵץ בִּי, וְהוּא יִהְיֶה לִּי לַעֲטֶרֶת צְבִי. | Yitpa’er bi ki chafetz bi, v’hu yihyeh li la’ateret tz’vi. | God takes pride in me and delights in me, and will be my beautiful crown.
כֶּתֶם טָהוֹר פָּז דְּמוּת רֹאשׁוֹ, וְחַק עַל מֵצַח כְּבוֹד שֵׁם קָדְשׁוֹ. | Ketem tahor paz d’mut rosho, v’chak al meitzach k’vod shem kodsho. | God’s head is pictured as pure gold, the glory of the holy name engraved upon the brow.
לְחֵן וּלְכָבוֹד צְבִי תִפְאָרָה, אֻמָּתוֹ לוֹ עִטְּרָה עֲטָרָה. | L’chen ul’chavod tz’vi tifarah, umato lo it’rah atarah. | In grace, honor, and beauty, God’s people fashioned a crown for God.
מַחְלְפוֹת רֹאשׁוֹ כְּבִימֵי בְחֻרוֹת, קְוֻצּוֹתָיו תַּלְתַּלִּים שְׁחוֹרוֹת. | Machl’fot rosho k’vimei v’churot, k’vutzotav taltalim sh’chorot. | God’s hair is like the hair of youth, locks in black curls.
נְוֵה הַצֶּדֶק צְבִי תִפְאַרְתּוֹ, יַעֲלֶה נָּא עַל רֹאשׁ שִׂמְחָתוֹ. | N’veh hatzedek tz’vi tifarto, ya’aleh na al rosh simchato. | May the dwelling of righteousness, God’s beautiful splendor, rise to the height of God’s joy.
סְגֻלָּתוֹ תְּהִי נָא בְיָדוֹ עֲטֶרֶת, וּצְנִיף מְלוּכָה צְבִי תִפְאֶרֶת. | S’gulato t’hi na v’yado ateret, utz’nif m’luchah tz’vi tiferet. | May God’s treasured people be a crown in God’s hand, a royal headdress of beauty and splendor.
עֲמוּסִים נְשָׂאָם עֲטֶרֶת עִנְּדָם, מֵאֲשֶׁר יָקְרוּ בְעֵינָיו כִּבְּדָם. | Amusim n’sa’am ateret in’dam, mei’asher yak’ru v’einav kib’dam. | God carried them, placed a crown upon them, and honored them because they were precious in God’s eyes.
פְּאֵרוֹ עָלַי וּפְאֵרִי עָלָיו, וְקָרוֹב אֵלַי בְּקָרְאִי אֵלָיו. | P’eiro alai uf’eiri alav, v’karov eilai b’kor’i eilav. | God’s glory rests on me and my glory on God, who is near when I call.
צַח וְאָדוֹם לִלְבוּשׁוֹ אָדוֹם, פּוּרָה בְּדָרְכוֹ בְּבוֹאוֹ מֵאֱדוֹם. | Tzach v’adom lilvusho adom, purah b’dorcho b’vo’o mei’Edom. | Radiant and ruddy, dressed in red, God treads the winepress on the way from Edom.
קֶשֶׁר תְּפִלִּין הֶרְאָה לֶעָנָיו, תְּמוּנַת יְיָ לְנֶגֶד עֵינָיו. | Kesher t’filin her’ah l’anav, t’munat Adonai l’neged einav. | God showed the knot of the tefillin to the humble one; the likeness of Adonai was before his eyes.
רוֹצֶה בְּעַמּוֹ עֲנָוִים יְפָאֵר, יוֹשֵׁב תְּהִלּוֹת בָּם לְהִתְפָּאֵר. | Rotzeh v’amo anavim y’fa’er, yoshev t’hilot bam l’hitpa’er. | Delighting in God’s people, God adorns the humble and dwells amid their praises.
רֹאשׁ דְּבָרְךָ אֱמֶת קוֹרֵא מֵרֹאשׁ, דּוֹר וָדוֹר עַם דּוֹרְשֶׁיךָ דְּרוֹשׁ. | Rosh d’var’cha emet korei meirosh, dor vador am dor’shecha d’rosh. | Your word is truth from the beginning; in every generation, seek the people who seek You.
שִׁית הֲמוֹן שִׁירַי נָא עָלֶיךָ, וְרִנָּתִי תִּקְרַב אֵלֶיךָ. | Shit hamon shirai na alecha, v’rinati tikrav eilecha. | Receive my many songs, and let my singing draw near to You.
תְּהִלָּתִי תְּהִי נָא לְרֹאשְׁךָ עֲטֶרֶת, וּתְפִלָּתִי תִּכּוֹן קְטֹרֶת. | T’hilati t’hi na l’rosh’cha ateret, ut’filati tikon k’toret. | May my praise be a crown upon Your head, and may my prayer rise like incense.
תִּיקַר שִׁירַת רָשׁ בְּעֵינֶיךָ, כַּשִּׁיר יוּשַׁר עַל קָרְבָּנֶיךָ. | Tikar shirat rash b’einecha, kashir yushar al korbanecha. | May the poor person’s song be precious to You, like the song sung over the offerings.
בִּרְכָתִי תַעֲלֶה לְרֹאשׁ מַשְׁבִּיר, מְחוֹלֵל וּמוֹלִיד צַדִּיק כַּבִּיר. | Birchati ta’aleh l’rosh mashbir, m’cholel umolid tzadik kabir. | May my blessing rise to the One who provides, who brings forth life, righteous and mighty.
וּבְבִרְכָתִי תְנַעֲנַע לִי רֹאשׁ, וְאוֹתָהּ קַח לְךָ כִּבְשָׂמִים רֹאשׁ. | Uv’virchati t’na’anea li rosh, v’otah kach l’cha kivsamim rosh. | May You nod in acceptance of my blessing and receive it like the finest spices.
יֶעֱרַב נָא שִׂיחִי עָלֶיךָ, כִּי נַפְשִׁי תַעֲרוֹג אֵלֶיךָ. | Ye’erav na sichi alecha, ki nafshi ta’arog eilecha. | May my words be pleasing to You, for my soul longs for You.
מִי יְמַלֵּל גְּבוּרוֹת יְיָ, יַשְׁמִיעַ כָּל תְּהִלָּתוֹ. | Mi y’malel g’vurot Adonai, yashmi’a kol t’hilato. | Who can tell of Adonai’s mighty deeds, or make all God’s praise heard?
`);
delete PRAYERS.anim.excerpt;

const torah={
 'ein-kamocha':['There is none like You among the gods, Adonai, and nothing like Your deeds.','Your reign lasts through all ages, and Your rule endures through every generation.','Adonai reigns; Adonai has reigned; Adonai will reign forever and ever.','May Adonai give strength to God’s people; may Adonai bless God’s people with peace.'],
 'av-harachamim':['Source of compassion, favor Zion in Your goodwill; rebuild the walls of Jerusalem.','For in You alone we trust, exalted and uplifted Sovereign, Master of all worlds.'],
 vayehi:['When the ark set out, Moses said: Rise, Adonai, and let Your enemies be scattered; let those who hate You flee before You.','For Torah will go forth from Zion, and the word of Adonai from Jerusalem.','Blessed is the One who gave Torah to the people Israel in holiness.'],
 brich:[
 'Blessed is the name of the Master of the world.',
 'Blessed are Your crown and Your dwelling. May Your favor be with Your people Israel forever.',
 'Show Your people the deliverance of Your right hand in Your holy sanctuary.',
 'Bring us Your good light, and receive our prayers with compassion.',
 'May it be Your will to grant us long life in goodness, and may I be remembered among the righteous.',
 'Have compassion on me and protect me, all that is mine, and all that belongs to Your people Israel.',
 'You nourish and sustain all. You rule over all.',
 'You rule over kings, and sovereignty is Yours.',
 'I am a servant of the Holy One, blessed be God. I bow before God and before the glory of God’s Torah at all times.',
 'I put my trust in no human being or heavenly being, but in the God of heaven,',
 'whose being is truth, whose Torah is truth, whose prophets are true, and who abounds in goodness and truth.'
 ],
 'bei-ana':['In God I trust, and to God’s holy and precious name I speak praises.','May it be Your will to open my heart to Torah,','and fulfill the wishes of my heart and the hearts of all Your people Israel, for goodness, life, and peace.'],
 shema:[shemaEnglish[0]],
 echad:['Our God is one, our Sovereign is great, and God’s name is holy.'],
 gadlu:['Declare Adonai’s greatness with me, and let us exalt God’s name together.'],
 lcha:['Yours, Adonai, are greatness, strength, splendor, victory, and majesty, for everything in heaven and on earth is Yours.','Yours, Adonai, is sovereignty, and You are exalted above all.'],
 romemu:['Exalt Adonai our God and bow at God’s footstool; holy is God.','Exalt Adonai our God and bow at God’s holy mountain, for Adonai our God is holy.']
};
const lead=Object.fromEntries(Object.entries(torah).map(([id,lines])=>[id,lines[0]]));
lead['av-harachamim']='Source of compassion, favor Zion in Your goodwill.';
lead.vayehi='When the ark set out, Moses said:';
lead['bei-ana']='In God I trust.';
window.KI_ENGLISH={torah,lead};
})();
