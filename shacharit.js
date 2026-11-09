(() => {
'use strict';
const rows=s=>s.trim().split('\n').map(l=>l.split('|').map(v=>v.trim()));
const p=id=>PRAYERS[id].lines;
const ein=rows(`
אֵין כְּעֶרְכְּךָ, וְאֵין זוּלָתֶךָ, אֶפֶס בִּלְתֶּךָ וּמִי דּוֹמֶה לָךְ. | Ein k’erkecha, v’ein zulatecha, efes biltecha umi domeh lach. | None compares to You; there is none besides You, none apart from You. Who is like You?
אֵין כְּעֶרְכְּךָ יְיָ אֱלֹהֵינוּ בָּעוֹלָם הַזֶּה, וְאֵין זוּלָתְךָ מַלְכֵּנוּ לְחַיֵּי הָעוֹלָם הַבָּא. | Ein k’erkecha Adonai Eloheinu ba’olam hazeh, v’ein zulatecha malkeinu l’chayei ha’olam haba. | None compares to You, Adonai our God, in this world; there is none besides You, our Sovereign, in the life of the world to come.
אֶפֶס בִּלְתְּךָ גּוֹאֲלֵנוּ לִימוֹת הַמָּשִׁיחַ, וְאֵין דּוֹמֶה לְךָ מוֹשִׁיעֵנוּ לִתְחִיַּת הַמֵּתִים. | Efes biltecha go’aleinu limot hamashiach, v’ein domeh l’cha moshi’einu lit’chiyat hameitim. | There is none but You, our Redeemer, in the days of the Messiah, and none like You, our Savior, at the resurrection of the dead.
`);
const kulam=rows(`
כֻּלָּם אֲהוּבִים, כֻּלָּם בְּרוּרִים, כֻּלָּם גִּבּוֹרִים, וְכֻלָּם עוֹשִׂים בְּאֵימָה וּבְיִרְאָה רְצוֹן קוֹנָם. | Kulam ahuvim, kulam b’rurim, kulam giborim, v’chulam osim b’eimah uv’yirah r’tzon konam. | All are beloved, all are chosen, all are mighty; all do their Maker’s will in awe and reverence.
וְכֻלָּם פּוֹתְחִים אֶת פִּיהֶם בִּקְדֻשָּׁה וּבְטָהֳרָה, בְּשִׁירָה וּבְזִמְרָה, וּמְבָרְכִים וּמְשַׁבְּחִים וּמְפָאֲרִים וּמַעֲרִיצִים וּמַקְדִּישִׁים וּמַמְלִיכִים אֶת שֵׁם הָאֵל, הַמֶּלֶךְ הַגָּדוֹל הַגִּבּוֹר וְהַנּוֹרָא, קָדוֹשׁ הוּא. | V’chulam pot’chim et pihem bikdushah uv’tahorah, b’shirah uv’zimrah, um’var’chim um’shab’chim um’fa’arim uma’aritzim umakdishim umamlichim et shem ha’El, hamelech hagadol hagibor v’hanora, kadosh hu. | All open their mouths in holiness and purity, with song and melody. They bless, praise, glorify, revere, sanctify, and acclaim the name of God, the great, mighty, and awe-inspiring Sovereign, the Holy One.
וְכֻלָּם מְקַבְּלִים עֲלֵיהֶם עֹל מַלְכוּת שָׁמַיִם זֶה מִזֶּה, וְנוֹתְנִים רְשׁוּת זֶה לָזֶה לְהַקְדִּישׁ לְיוֹצְרָם בְּנַחַת רוּחַ, בְּשָׂפָה בְרוּרָה וּבִנְעִימָה. קְדֻשָּׁה כֻּלָּם כְּאֶחָד עוֹנִים וְאוֹמְרִים בְּיִרְאָה. | V’chulam m’kab’lim aleihem ol malchut shamayim zeh mizeh, v’not’nim r’shut zeh lazeh l’hakdish l’yotzram b’nachat ru’ach, b’safah v’rurah uvin’imah. K’dushah kulam k’echad onim v’omrim b’yirah. | They accept from one another the yoke of heaven’s reign and give each other leave to sanctify their Maker serenely, with clear speech and melody. As one they answer in awe:
קָדוֹשׁ קָדוֹשׁ קָדוֹשׁ יְיָ צְבָאוֹת, מְלֹא כָל הָאָרֶץ כְּבוֹדוֹ. | Kadosh, kadosh, kadosh Adonai tz’va’ot, m’lo chol ha’aretz k’vodo. | Holy, holy, holy is Adonai of hosts; the whole earth is full of God’s glory.
וְהָאוֹפַנִּים וְחַיּוֹת הַקֹּדֶשׁ בְּרַעַשׁ גָּדוֹל מִתְנַשְּׂאִים לְעֻמַּת שְׂרָפִים, לְעֻמָּתָם מְשַׁבְּחִים וְאוֹמְרִים. | V’ha’ofanim v’chayot hakodesh b’ra’ash gadol mitnas’im l’umat s’rafim, l’umatam m’shab’chim v’omrim. | With a great roar the ofanim and holy creatures rise opposite the seraphim, praising and saying:
בָּרוּךְ כְּבוֹד יְיָ מִמְּקוֹמוֹ. | Baruch k’vod Adonai mimkomo. | Blessed is Adonai’s glory from God’s place.
לְאֵל בָּרוּךְ נְעִימוֹת יִתֵּנוּ, לְמֶלֶךְ אֵל חַי וְקַיָּם זְמִירוֹת יֹאמֵרוּ וְתִשְׁבָּחוֹת יַשְׁמִיעוּ. כִּי הוּא לְבַדּוֹ פּוֹעֵל גְּבוּרוֹת, עוֹשֶׂה חֲדָשׁוֹת, בַּעַל מִלְחָמוֹת, זוֹרֵעַ צְדָקוֹת, מַצְמִיחַ יְשׁוּעוֹת, בּוֹרֵא רְפוּאוֹת, נוֹרָא תְהִלּוֹת, אֲדוֹן הַנִּפְלָאוֹת. | L’El baruch n’imot yiteinu, l’melech El chai v’kayam z’mirot yomeiru v’tishbachot yashmi’u. Ki hu l’vado po’el g’vurot, oseh chadashot, ba’al milchamot, zorei’a tz’dakot, matzmi’ach y’shu’ot, borei r’fu’ot, nora t’hilot, adon hanifla’ot. | To the blessed God they offer melodies; to the living, enduring Sovereign they sing songs and sound praises. God alone does mighty deeds, makes new things, masters battles, sows justice, brings deliverance to bloom, creates healing, inspires awesome praise, and works wonders.
הַמְחַדֵּשׁ בְּטוּבוֹ בְּכָל יוֹם תָּמִיד מַעֲשֵׂה בְרֵאשִׁית, כָּאָמוּר: לְעֹשֵׂה אוֹרִים גְּדֹלִים כִּי לְעוֹלָם חַסְדּוֹ. | Ham’chadeish b’tuvo b’chol yom tamid ma’aseh v’reishit, ka’amur: l’oseh orim g’dolim ki l’olam chasdo. | In goodness God renews creation continually, every day, as it says: To the Maker of great lights, whose kindness endures forever.
`);
const vahavienu=rows(`
וַהֲבִיאֵנוּ לְשָׁלוֹם מֵאַרְבַּע כַּנְפוֹת הָאָרֶץ, וְתוֹלִיכֵנוּ קוֹמְמִיּוּת לְאַרְצֵנוּ. | Vahavi’einu l’shalom mei’arba kanfot ha’aretz, v’tolicheinu kom’miyut l’artzeinu. | Bring us in peace from the four corners of the earth, and lead us upright to our land.
כִּי אֵל פּוֹעֵל יְשׁוּעוֹת אָתָּה, וּבָנוּ בָחַרְתָּ מִכָּל עַם וְלָשׁוֹן, וְקֵרַבְתָּנוּ לְשִׁמְךָ הַגָּדוֹל סֶלָה בֶּאֱמֶת, לְהוֹדוֹת לְךָ וּלְיַחֶדְךָ בְּאַהֲבָה. | Ki El po’el y’shu’ot atah, uvanu vacharta mikol am v’lashon, v’keiravtanu l’shimcha hagadol selah be’emet, l’hodot l’cha ul’yachedcha b’ahavah. | For You are God who brings deliverance. You chose us from every people and language and drew us near to Your great name in truth, to thank You and affirm Your oneness in love.
בָּרוּךְ אַתָּה יְיָ, הַבּוֹחֵר בְּעַמּוֹ יִשְׂרָאֵל בְּאַהֲבָה. | Baruch atah Adonai, habocheir b’amo Yisrael b’ahavah. | Blessed are You, Adonai, who chooses Your people Israel in love.
`);
const tzur=rows(`
יְיָ אֱלֹהֵיכֶם אֱמֶת. | Adonai Eloheichem emet. | Adonai your God is true.
`).concat(p('mi'),rows(`
שִׁירָה חֲדָשָׁה שִׁבְּחוּ גְאוּלִים לְשִׁמְךָ עַל שְׂפַת הַיָּם, יַחַד כֻּלָּם הוֹדוּ וְהִמְלִיכוּ וְאָמְרוּ: יְיָ יִמְלֹךְ לְעוֹלָם וָעֶד. | Shirah chadashah shib’chu g’ulim l’shimcha al s’fat hayam, yachad kulam hodu v’himlichu v’amru: Adonai yimloch l’olam va’ed. | The redeemed sang a new song to Your name at the shore. Together they gave thanks, proclaimed Your reign, and said: Adonai will reign forever.
צוּר יִשְׂרָאֵל, קוּמָה בְּעֶזְרַת יִשְׂרָאֵל, וּפְדֵה כִנְאֻמֶךָ יְהוּדָה וְיִשְׂרָאֵל. גֹּאֲלֵנוּ יְיָ צְבָאוֹת שְׁמוֹ, קְדוֹשׁ יִשְׂרָאֵל. בָּרוּךְ אַתָּה יְיָ, גָּאַל יִשְׂרָאֵל. | Tzur Yisrael, kumah b’ezrat Yisrael, uf’dei chin’umecha Y’hudah v’Yisrael. Go’aleinu Adonai tz’va’ot sh’mo, k’dosh Yisrael. Baruch atah Adonai, ga’al Yisrael. | Rock of Israel, rise to Israel’s aid and redeem Judah and Israel as You promised. Our Redeemer is named Adonai of hosts, the Holy One of Israel. Blessed are You, Adonai, who redeemed Israel.
`));
const gevurot=rows(`
אַתָּה גִּבּוֹר לְעוֹלָם אֲדֹנָי, מְחַיֵּה מֵתִים אַתָּה, רַב לְהוֹשִׁיעַ. | Atah gibor l’olam Adonai, m’chayei meitim atah, rav l’hoshi’a. | You are mighty forever, Adonai; You give life to the dead and are powerful to save.
מַשִּׁיב הָרוּחַ וּמוֹרִיד הַגָּשֶׁם. | Mashiv haru’ach umorid hagashem. | You make the wind blow and the rain fall. (Seasonal.)
מְכַלְכֵּל חַיִּים בְּחֶסֶד, מְחַיֵּה מֵתִים בְּרַחֲמִים רַבִּים, סוֹמֵךְ נוֹפְלִים וְרוֹפֵא חוֹלִים וּמַתִּיר אֲסוּרִים, וּמְקַיֵּם אֱמוּנָתוֹ לִישֵׁנֵי עָפָר. | M’chalkeil chayim b’chesed, m’chayei meitim b’rachamim rabim, someich nof’lim v’rofei cholim umatir asurim, um’kayeim emunato lisheinei afar. | You sustain life with kindness, give life to the dead with abundant mercy, support those who fall, heal the sick, free the bound, and keep faith with those who sleep in the dust.
מִי כָמוֹךָ בַּעַל גְּבוּרוֹת וּמִי דּוֹמֶה לָּךְ, מֶלֶךְ מֵמִית וּמְחַיֶּה וּמַצְמִיחַ יְשׁוּעָה. | Mi chamocha ba’al g’vurot umi domeh lach, melech meimit um’chayeh umatzmi’ach y’shu’ah. | Who is like You, Master of mighty deeds? Who compares to You, Sovereign who brings death and life and causes salvation to spring forth?
וְנֶאֱמָן אַתָּה לְהַחֲיוֹת מֵתִים. בָּרוּךְ אַתָּה יְיָ, מְחַיֵּה הַמֵּתִים. | V’ne’eman atah l’hachayot meitim. Baruch atah Adonai, m’chayei hameitim. | You are faithful to restore life to the dead. Blessed are You, Adonai, who gives life to the dead.
`);
const mim=rows(`
מִמְּקוֹמְךָ מַלְכֵּנוּ תוֹפִיעַ, וְתִמְלוֹךְ עָלֵינוּ כִּי מְחַכִּים אֲנַחְנוּ לָךְ. | Mimkomcha malkeinu tofi’a, v’timloch aleinu ki m’chakim anachnu lach. | From Your place, our Sovereign, appear and reign over us, for we wait for You.
מָתַי תִּמְלוֹךְ בְּצִיּוֹן, בְּקָרוֹב בְּיָמֵינוּ לְעוֹלָם וָעֶד תִּשְׁכּוֹן. | Matai timloch b’Tziyon, b’karov b’yameinu l’olam va’ed tishkon. | When will You reign in Zion? Dwell there soon, in our days, and forever.
תִּתְגַּדַּל וְתִתְקַדַּשׁ בְּתוֹךְ יְרוּשָׁלַיִם עִירְךָ לְדוֹר וָדוֹר וּלְנֵצַח נְצָחִים. | Titgadal v’titkadash b’toch Y’rushalayim ircha l’dor vador ul’neitzach n’tzachim. | May You be magnified and sanctified in Jerusalem, Your city, from generation to generation and forever.
וְעֵינֵינוּ תִרְאֶינָה מַלְכוּתֶךָ, כַּדָּבָר הָאָמוּר בְּשִׁירֵי עֻזֶּךָ עַל יְדֵי דָוִד מְשִׁיחַ צִדְקֶךָ. | V’eineinu tir’enah malchutecha, kadavar ha’amur b’shirei uzecha al y’dei David m’shi’ach tzidkecha. | May our eyes see Your reign, as told in the songs of Your strength by David, Your righteous anointed one.
יִמְלֹךְ יְיָ לְעוֹלָם, אֱלֹהַיִךְ צִיּוֹן לְדֹר וָדֹר, הַלְלוּיָהּ. | Yimloch Adonai l’olam, Elohayich Tziyon l’dor vador, hal’luyah. | Adonai will reign forever, your God, Zion, from generation to generation. Hallelujah.
`);
const kd=rows(`
נְקַדֵּשׁ אֶת שִׁמְךָ בָּעוֹלָם כְּשֵׁם שֶׁמַּקְדִּישִׁים אוֹתוֹ בִּשְׁמֵי מָרוֹם, כַּכָּתוּב עַל יַד נְבִיאֶךָ, וְקָרָא זֶה אֶל זֶה וְאָמַר. | N’kadesh et shimcha ba’olam k’shem shemakdishim oto bishmei marom, kakatuv al yad n’vi’echa, v’kara zeh el zeh v’amar. | Let us sanctify Your name in the world as it is sanctified in the heavens above, as Your prophet wrote: They called to one another and said:
`).concat([kulam[3]],rows(`
אָז בְּקוֹל רַעַשׁ גָּדוֹל, אַדִּיר וְחָזָק, מַשְׁמִיעִים קוֹל, מִתְנַשְּׂאִים לְעֻמַּת שְׂרָפִים, לְעֻמָּתָם מְשַׁבְּחִים וְאוֹמְרִים. | Az b’kol ra’ash gadol, adir v’chazak, mashmi’im kol, mitnas’im l’umat s’rafim, l’umatam m’shab’chim v’omrim. | Then with a great and mighty roar they raise their voices, rising opposite the seraphim, praising and saying:
`),[kulam[5]]);
const ldor=rows(`
לְדוֹר וָדוֹר נַגִּיד גָּדְלֶךָ, וּלְנֵצַח נְצָחִים קְדֻשָּׁתְךָ נַקְדִּישׁ, וְשִׁבְחֲךָ אֱלֹהֵינוּ מִפִּינוּ לֹא יָמוּשׁ לְעוֹלָם וָעֶד, כִּי אֵל מֶלֶךְ גָּדוֹל וְקָדוֹשׁ אָתָּה. בָּרוּךְ אַתָּה יְיָ, הָאֵל הַקָּדוֹשׁ. | L’dor vador nagid godlecha, ul’neitzach n’tzachim k’dushat’cha nakdish, v’shivchacha Eloheinu mipinu lo yamush l’olam va’ed, ki El melech gadol v’kadosh atah. Baruch atah Adonai, ha’El hakadosh. | From generation to generation we will tell of Your greatness and forever proclaim Your holiness. Your praise, our God, will never leave our lips, for You are a great and holy Sovereign. Blessed are You, Adonai, the holy God.
`);
const yismach=rows(`
יִשְׂמַח מֹשֶׁה בְּמַתְּנַת חֶלְקוֹ, כִּי עֶבֶד נֶאֱמָן קָרָאתָ לּוֹ. כְּלִיל תִּפְאֶרֶת בְּרֹאשׁוֹ נָתַתָּ לּוֹ, בְּעָמְדוֹ לְפָנֶיךָ עַל הַר סִינָי. וּשְׁנֵי לֻחוֹת אֲבָנִים הוֹרִיד בְּיָדוֹ, וְכָתוּב בָּהֶם שְׁמִירַת שַׁבָּת, וְכֵן כָּתוּב בְּתוֹרָתֶךָ. | Yismach Moshe b’matnat chelko, ki eved ne’eman karata lo. K’lil tiferet b’rosho natata lo, b’omdo l’fanecha al har Sinai. Ushnei luchot avanim horid b’yado, v’chatuv bahem sh’mirat Shabbat, v’chen katuv b’Toratecha. | Moses rejoiced in his gift, for You called him a faithful servant. You placed a crown of glory on his head as he stood before You at Sinai. He brought down two stone tablets bearing the command to keep Shabbat. And so it is written in Your Torah:
`).concat(p('vshamru'),rows(`
וְלֹא נְתַתּוֹ יְיָ אֱלֹהֵינוּ לְגוֹיֵי הָאֲרָצוֹת, וְלֹא הִנְחַלְתּוֹ מַלְכֵּנוּ לְעוֹבְדֵי פְסִילִים, וְגַם בִּמְנוּחָתוֹ לֹא יִשְׁכְּנוּ עֲרֵלִים. כִּי לְיִשְׂרָאֵל עַמְּךָ נְתַתּוֹ בְּאַהֲבָה, לְזֶרַע יַעֲקֹב אֲשֶׁר בָּם בָּחָרְתָּ. | V’lo n’tato Adonai Eloheinu l’goyei ha’aratzot, v’lo hinchalto malkeinu l’ovdei f’silim, v’gam bimnuchato lo yishk’nu areilim. Ki l’Yisrael amcha n’tato b’ahavah, l’zera Ya’akov asher bam bacharta. | You did not give it, Adonai our God, to the nations of the lands, nor grant it as an inheritance to idol worshippers, nor do the uncircumcised dwell in its rest. For You gave it in love to Israel Your people, to the descendants of Jacob whom You chose.
יִשְׂמְחוּ בְמַלְכוּתְךָ שׁוֹמְרֵי שַׁבָּת וְקוֹרְאֵי עֹנֶג. עַם מְקַדְּשֵׁי שְׁבִיעִי, כֻּלָּם יִשְׂבְּעוּ וְיִתְעַנְּגוּ מִטּוּבֶךָ, וּבַשְּׁבִיעִי רָצִיתָ בּוֹ וְקִדַּשְׁתּוֹ, חֶמְדַּת יָמִים אוֹתוֹ קָרָאתָ, זֵכֶר לְמַעֲשֵׂה בְרֵאשִׁית. | Yism’chu v’malchut’cha shom’rei Shabbat v’kor’ei oneg. Am m’kad’shei sh’vi’i, kulam yis’b’u v’yit’an’gu mituvecha, uvash’vi’i ratzita bo v’kidashto, chemdat yamim oto karata, zecher l’ma’aseh v’reishit. | May those who keep Shabbat and call it a delight rejoice in Your reign. May all who sanctify the seventh day be satisfied and delight in Your goodness. You desired and sanctified the seventh day, calling it the most cherished of days, a reminder of creation.
`));
const retzeh=rows(`
אֱלֹהֵינוּ וֵאלֹהֵי אֲבוֹתֵינוּ, רְצֵה בִמְנוּחָתֵנוּ. קַדְּשֵׁנוּ בְּמִצְוֹתֶיךָ וְתֵן חֶלְקֵנוּ בְּתוֹרָתֶךָ, שַׂבְּעֵנוּ מִטּוּבֶךָ וְשַׂמְּחֵנוּ בִּישׁוּעָתֶךָ, וְטַהֵר לִבֵּנוּ לְעָבְדְּךָ בֶּאֱמֶת. | Eloheinu v’Elohei avoteinu, r’tzei vimnuchateinu. Kad’sheinu b’mitzvotecha v’tein chelkeinu b’Toratecha, sab’einu mituvecha v’sam’cheinu bishu’atecha, v’taheir libeinu l’ovd’cha be’emet. | Our God and God of our ancestors, welcome our rest. Make us holy through Your commandments and give us our share in Your Torah. Satisfy us with Your goodness, gladden us with Your deliverance, and purify our hearts to serve You sincerely.
וְהַנְחִילֵנוּ יְיָ אֱלֹהֵינוּ בְּאַהֲבָה וּבְרָצוֹן שַׁבַּת קָדְשֶׁךָ, וְיָנוּחוּ בוֹ יִשְׂרָאֵל מְקַדְּשֵׁי שְׁמֶךָ. בָּרוּךְ אַתָּה יְיָ, מְקַדֵּשׁ הַשַּׁבָּת. | V’hanchileinu Adonai Eloheinu b’ahavah uv’ratzon Shabbat kodshecha, v’yanuchu vo Yisrael m’kad’shei sh’mecha. Baruch atah Adonai, m’kadesh haShabbat. | Grant us Your holy Shabbat with love and favor, and let Israel, who sanctifies Your name, rest on it. Blessed are You, Adonai, who sanctifies Shabbat.
רְצֵה יְיָ אֱלֹהֵינוּ בְּעַמְּךָ יִשְׂרָאֵל וּבִתְפִלָּתָם, וְהָשֵׁב אֶת הָעֲבוֹדָה לִדְבִיר בֵּיתֶךָ. | R’tzei Adonai Eloheinu b’amcha Yisrael uvitfilatam, v’hasheiv et ha’avodah lidvir beitecha. | Favor Your people Israel and their prayer, Adonai our God, and restore the service to the sanctuary of Your house.
וְאִשֵּׁי יִשְׂרָאֵל וּתְפִלָּתָם בְּאַהֲבָה תְקַבֵּל בְּרָצוֹן, וּתְהִי לְרָצוֹן תָּמִיד עֲבוֹדַת יִשְׂרָאֵל עַמֶּךָ. | V’ishei Yisrael ut’filatam b’ahavah t’kabeil b’ratzon, ut’hi l’ratzon tamid avodat Yisrael amecha. | Receive Israel’s offerings and prayer with love and favor, and may the worship of Your people Israel always be pleasing to You.
`);
const vetech=rows(`
וְתֶחֱזֶינָה עֵינֵינוּ בְּשׁוּבְךָ לְצִיּוֹן בְּרַחֲמִים. בָּרוּךְ אַתָּה יְיָ, הַמַּחֲזִיר שְׁכִינָתוֹ לְצִיּוֹן. | V’techezenah eineinu b’shuvcha l’Tziyon b’rachamim. Baruch atah Adonai, hamachazir sh’chinato l’Tziyon. | May our eyes see You return to Zion in mercy. Blessed are You, Adonai, who restores Your presence to Zion.
מוֹדִים אֲנַחְנוּ לָךְ, שָׁאַתָּה הוּא יְיָ אֱלֹהֵינוּ וֵאלֹהֵי אֲבוֹתֵינוּ לְעוֹלָם וָעֶד. צוּר חַיֵּינוּ, מָגֵן יִשְׁעֵנוּ, אַתָּה הוּא לְדוֹר וָדוֹר. | Modim anachnu lach, sha’atah hu Adonai Eloheinu v’Elohei avoteinu l’olam va’ed. Tzur chayeinu, magein yish’einu, atah hu l’dor vador. | We thank You, for You are Adonai our God and God of our ancestors forever. You are the rock of our lives and shield of our salvation from generation to generation.
נוֹדֶה לְךָ וּנְסַפֵּר תְּהִלָּתֶךָ עַל חַיֵּינוּ הַמְּסוּרִים בְּיָדֶךָ, וְעַל נִשְׁמוֹתֵינוּ הַפְּקוּדוֹת לָךְ, וְעַל נִסֶּיךָ שֶׁבְּכָל יוֹם עִמָּנוּ, וְעַל נִפְלְאוֹתֶיךָ וְטוֹבוֹתֶיךָ שֶׁבְּכָל עֵת, עֶרֶב וָבֹקֶר וְצָהֳרָיִם. | Nodeh l’cha un’sapeir t’hilatecha al chayeinu ham’surim b’yadecha, v’al nishmoteinu hap’kudot lach, v’al nisecha sheb’chol yom imanu, v’al nifl’otecha v’tovotecha sheb’chol et, erev vavoker v’tzohorayim. | We thank You and tell Your praise for our lives in Your hands, our souls entrusted to You, Your miracles with us every day, and Your wonders and goodness at all times: evening, morning, and noon.
הַטּוֹב כִּי לֹא כָלוּ רַחֲמֶיךָ, וְהַמְרַחֵם כִּי לֹא תַמּוּ חֲסָדֶיךָ, מֵעוֹלָם קִוִּינוּ לָךְ. | Hatov ki lo chalu rachamecha, v’ham’rachem ki lo tamu chasadecha, mei’olam kivinu lach. | You are good, for Your mercies do not end; You are compassionate, for Your kindness never ceases. We have always hoped in You.
וְעַל כֻּלָּם יִתְבָּרַךְ וְיִתְרוֹמַם שִׁמְךָ מַלְכֵּנוּ תָּמִיד לְעוֹלָם וָעֶד. | V’al kulam yitbarach v’yitromam shimcha malkeinu tamid l’olam va’ed. | For all these things may Your name, our Sovereign, be blessed and exalted always, forever.
וְכֹל הַחַיִּים יוֹדוּךָ סֶּלָה, וִיהַלְלוּ אֶת שִׁמְךָ בֶּאֱמֶת, הָאֵל יְשׁוּעָתֵנוּ וְעֶזְרָתֵנוּ סֶלָה. בָּרוּךְ אַתָּה יְיָ, הַטּוֹב שִׁמְךָ וּלְךָ נָאֶה לְהוֹדוֹת. | V’chol hachayim yoducha selah, vihal’lu et shimcha be’emet, ha’El y’shu’ateinu v’ezrateinu selah. Baruch atah Adonai, hatov shimcha ul’cha na’eh l’hodot. | Let all the living thank You forever and praise Your name sincerely, God of our salvation and help. Blessed are You, Adonai, whose name is goodness and to whom thanks are due.
יְבָרֶכְךָ יְיָ וְיִשְׁמְרֶךָ. | Y’varech’cha Adonai v’yishm’recha. | May Adonai bless you and protect you.
יָאֵר יְיָ פָּנָיו אֵלֶיךָ וִיחֻנֶּךָּ. | Ya’er Adonai panav eilecha vichuneka. | May Adonai’s face shine upon you and be gracious to you.
יִשָּׂא יְיָ פָּנָיו אֵלֶיךָ וְיָשֵׂם לְךָ שָׁלוֹם. | Yisa Adonai panav eilecha v’yaseim l’cha shalom. | May Adonai turn toward you and grant you peace.
`);
const sim=rows(`
שִׂים שָׁלוֹם טוֹבָה וּבְרָכָה, חֵן וָחֶסֶד וְרַחֲמִים עָלֵינוּ וְעַל כָּל יִשְׂרָאֵל עַמֶּךָ. | Sim shalom tovah uv’rachah, chein vachesed v’rachamim aleinu v’al kol Yisrael amecha. | Grant peace, goodness and blessing, grace, kindness and compassion to us and all Israel, Your people.
בָּרְכֵנוּ אָבִינוּ כֻּלָּנוּ כְּאֶחָד בְּאוֹר פָּנֶיךָ, כִּי בְאוֹר פָּנֶיךָ נָתַתָּ לָּנוּ יְיָ אֱלֹהֵינוּ תּוֹרַת חַיִּים וְאַהֲבַת חֶסֶד, וּצְדָקָה וּבְרָכָה וְרַחֲמִים וְחַיִּים וְשָׁלוֹם. | Bar’cheinu Avinu kulanu k’echad b’or panecha, ki v’or panecha natata lanu Adonai Eloheinu Torat chayim v’ahavat chesed, utz’dakah uv’rachah v’rachamim v’chayim v’shalom. | Bless us all as one, our Parent, with the light of Your face. By that light You gave us, Adonai our God, a Torah of life, love of kindness, righteousness, blessing, compassion, life, and peace.
וְטוֹב בְּעֵינֶיךָ לְבָרֵךְ אֶת עַמְּךָ יִשְׂרָאֵל בְּכָל עֵת וּבְכָל שָׁעָה בִּשְׁלוֹמֶךָ. בָּרוּךְ אַתָּה יְיָ, הַמְבָרֵךְ אֶת עַמּוֹ יִשְׂרָאֵל בַּשָּׁלוֹם. | V’tov b’einecha l’varech et amcha Yisrael b’chol et uv’chol sha’ah bishlomecha. Baruch atah Adonai, ham’varech et amo Yisrael bashalom. | May it please You to bless Your people Israel at every time and every hour with Your peace. Blessed are You, Adonai, who blesses Your people Israel with peace.
`);
const fullKaddish=p('kaddish').concat(rows(`
תִּתְקַבַּל צְלוֹתְהוֹן וּבָעוּתְהוֹן דְּכָל בֵּית יִשְׂרָאֵל קֳדָם אֲבוּהוֹן דִּי בִשְׁמַיָּא, וְאִמְרוּ אָמֵן. | Titkabal tz’lot’hon uva’ut’hon d’chol beit Yisrael kodam avuhon di vishmaya, v’imru amen. | May the prayers and pleas of all the house of Israel be accepted before their Parent in heaven. And say: Amen.
יְהֵא שְׁלָמָא רַבָּא מִן שְׁמַיָּא וְחַיִּים עָלֵינוּ וְעַל כָּל יִשְׂרָאֵל, וְאִמְרוּ אָמֵן. | Y’hei sh’lama raba min sh’maya v’chayim aleinu v’al kol Yisrael, v’imru amen. | May there be abundant peace from heaven and life for us and all Israel. And say: Amen.
`),p('oseh'));
const groups=[
 ['Closing of P’sukei D’zimrah',[
 ['Shochein Ad',p('shochein')],['Yishtabach',p('yishtabach')],['Hatzi Kaddish',p('kaddish')]]],
 ['Shema and its blessings',[
 ['Barchu',p('barchu')],['Ein K’erkecha',ein],['El Adon',p('eladon')],['Kulam Ahuvim → Or Chadash',kulam.concat(p('yotzer'))],['V’ha’er Eineinu → Vahavi’einu',p('vehaer').concat(vahavienu)],['Shema and V’ahavta',p('shema')],['Adonai Eloheichem → Tzur Yisrael',tzur]]],
 ['Amidah and repetition',[
 ['Avot',p('avot')],['Gevurot',gevurot],['Kedushah: opening',kd],['Mimkomcha · Melody 1 → V’shamru',mim.concat(p('vshamru'))],['Mimkomcha · Melody 2 (Miami Boys Choir)',mim],['Kedushah: L’dor Vador',ldor],['Yismach Moshe → V’lo N’tato',yismach],['Eloheinu → Retzeh',retzeh],['V’techezenah → Priestly Blessing',vetech],['Sim Shalom · Melody 1',sim],['Sim Shalom · Melody 2',sim],['Full Kaddish',fullKaddish]]]
];
const tracks=groups.flatMap(([,items])=>items);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
window.renderShacharit=(origin)=>{
 const back=origin==='bnei'?'bnei-mitzvah':'services';
 let n=0;
 document.getElementById('main').innerHTML=`<a class="back" href="#${back}">← ${origin==='bnei'?'B’nei Mitzvah Prep':'Full Services'}</a>
 <section class="ft-intro"><p class="eyebrow">Shabbat morning · KI Tefillah</p><h1>Shacharit</h1><p>Practice leading from Shochein Ad through Full Kaddish. Choose a recording to follow the prayer in Hebrew, transliteration, and English.</p></section>
 <div class="ft-layout"><aside class="ft-outline" aria-label="Shacharit recordings">${groups.map(([title,items])=>`<h3>${title}</h3><ol start="${n+1}">${items.map(([name])=>`<li><button type="button" data-sh-track="${n++}">${esc(name)}</button></li>`).join('')}</ol>`).join('')}</aside>
 <section class="ft-lesson" aria-labelledby="sh-title"><div class="ft-player"><p class="eyebrow" id="sh-count"></p><h2 id="sh-title"></h2><audio id="sh-audio" controls preload="metadata" style="width:100%" aria-label="Shacharit recording"></audio>
 <div class="ft-controls"><label>Speed <select id="sh-speed">${[0.6,0.75,0.9,1,1.15,1.3].map(x=>`<option value="${x}"${x===1?' selected':''}>${x}×</option>`).join('')}</select></label>
 <label>Key <select id="sh-key"><option value="-2">−2 semitones</option><option value="0" selected>Original</option><option value="2">+2 semitones</option></select></label>
 <label><input id="sh-loop" type="checkbox"> Repeat recording</label></div><p id="sh-status" role="status"></p></div>
 <div class="ft-text-toolbar"><h3>Practice text</h3><label><input id="sh-translit" type="checkbox" checked> Transliteration</label><label><input id="sh-english" type="checkbox" checked> English</label></div>
 <p class="muted">Follow these practice passages alongside the recordings. Some tracks also include spoken teaching or additional lines.</p><div id="sh-text"></div>
 <div class="ft-controls"><button type="button" id="sh-prev">← Previous recording</button> <button type="button" id="sh-next">Next recording →</button></div></section></div>`;
 const $=id=>document.getElementById('sh-'+id), audio=$('audio');
 const buttons=[...document.querySelectorAll('[data-sh-track]')];
 let current=0, pending=null;
 audio.preservesPitch=true;
 const rate=()=>{audio.playbackRate=Number($('speed').value)};
 function load(time=0,resume=false){
  if(pending)audio.removeEventListener('loadedmetadata',pending);
  audio.pause();
  const key=$('key').value;
  audio.src='shacharit-audio/'+(key==='0'?'':'key-'+key+'/')+String(current+1).padStart(2,'0')+'.m4a';
  $('status').textContent='';
  pending=()=>{rate();if(time>0)audio.currentTime=Math.min(time,audio.duration||time);if(resume)audio.play().catch(()=>{$('status').textContent='Press play to continue.'});};
  audio.addEventListener('loadedmetadata',pending,{once:true});audio.load();
 }
 function select(i,move=false){
  current=i;
  const [title,lines]=tracks[i];
  $('title').textContent=title;
  $('count').textContent='Recording '+(i+1)+' of '+tracks.length;
  buttons.forEach((b,j)=>b.setAttribute('aria-pressed',String(j===i)));
  $('prev').disabled=i===0;$('next').disabled=i===tracks.length-1;
  $('text').innerHTML=lines.map(([he,tr,en])=>`<div class="line"><div class="hebrew" lang="he" dir="rtl">${esc(he)}</div><div class="translit"${$('translit').checked?'':' hidden'}>${esc(tr)}</div><p class="ki-english"${$('english').checked?'':' hidden'}>${esc(en)}</p></div>`).join('');
  load();if(move){$('title').tabIndex=-1;$('title').focus();$('title').scrollIntoView({block:'center'});}
 }
 audio.onerror=()=>{$('status').textContent='This recording could not load. Try refreshing the page.'};
 $('key').onchange=()=>load(audio.currentTime,!audio.paused);
 $('speed').onchange=rate;$('loop').onchange=()=>{audio.loop=$('loop').checked};
 $('english').onchange=()=>document.querySelectorAll('#sh-text .ki-english').forEach(el=>{el.hidden=!$('english').checked});
 $('translit').onchange=()=>document.querySelectorAll('#sh-text .translit').forEach(el=>{el.hidden=!$('translit').checked});
 buttons.forEach((b,i)=>b.onclick=()=>select(i,true));
 $('prev').onclick=()=>select(current-1,true);$('next').onclick=()=>select(current+1,true);
 window.teardownShacharit=()=>{audio.onerror=null;if(pending)audio.removeEventListener('loadedmetadata',pending);audio.pause();audio.removeAttribute('src');audio.load();window.teardownShacharit=null;};
 select(0);scrollTo(0,0);
};
})();
