const _0x4d49c4=_0x455d;(function(_0x6dc019,_0xdb1b00){const _0x204b8f=_0x455d,_0x3034b6=_0x6dc019();while(!![]){try{const _0x4390f9=-parseInt(_0x204b8f(0xd0))/0x1+parseInt(_0x204b8f(0x10e))/0x2+parseInt(_0x204b8f(0xc8))/0x3+parseInt(_0x204b8f(0x125))/0x4+parseInt(_0x204b8f(0xec))/0x5*(parseInt(_0x204b8f(0x101))/0x6)+parseInt(_0x204b8f(0xfe))/0x7*(-parseInt(_0x204b8f(0x132))/0x8)+parseInt(_0x204b8f(0x147))/0x9*(-parseInt(_0x204b8f(0x10b))/0xa);if(_0x4390f9===_0xdb1b00)break;else _0x3034b6['push'](_0x3034b6['shift']());}catch(_0x91382a){_0x3034b6['push'](_0x3034b6['shift']());}}}(_0x36c4,0xa0d4c),require(_0x4d49c4(0x120))[_0x4d49c4(0xb2)]());const moment=require(_0x4d49c4(0xfb)),fs=require('fs'),{spawnSync,spawn}=require(_0x4d49c4(0x104)),os=require('os'),{get_button_aria_pressed,get_button_aria_label,getRandomIntInclusive,sleep}=require(_0x4d49c4(0xe5)),{AxiosCustom}=require('./libs/AxiosCustom.js'),puppeteer=require(_0x4d49c4(0x134)),stealthPlugin=require(_0x4d49c4(0xd3))();function _0x455d(_0x42007f,_0xf71a4f){const _0x36c473=_0x36c4();return _0x455d=function(_0x455dbf,_0x33bacd){_0x455dbf=_0x455dbf-0xaf;let _0x39d281=_0x36c473[_0x455dbf];return _0x39d281;},_0x455d(_0x42007f,_0xf71a4f);}['chrome.runtime','navigator.languages'][_0x4d49c4(0x11c)](_0x486bc6=>stealthPlugin[_0x4d49c4(0xcd)][_0x4d49c4(0x126)](_0x486bc6)),puppeteer[_0x4d49c4(0x14c)](stealthPlugin);const axiosCustom=new AxiosCustom(0x2bf20),TELEGRAM_ID=parseInt(process[_0x4d49c4(0xd5)][_0x4d49c4(0x133)]),MODE=process[_0x4d49c4(0xd5)]['MODE'],HOST='tiktok.futalink.com',DEBUG_TAG=_0x4d49c4(0x119),VERSION=_0x4d49c4(0xe0),getYoutubeInfo=function(_0x58e68e,_0x4ee3ad,_0x4af678,_0x3d7329,_0x48dced){const _0xd13bd9=_0x4d49c4,_0x46ec7c={'url':'https://'+_0x58e68e+'/api/youtube/?telegram_id='+_0x4ee3ad+_0xd13bd9(0x130)+_0x4af678+_0xd13bd9(0x13e)+_0x3d7329+'&debug_tag='+DEBUG_TAG+(_0x48dced?_0xd13bd9(0xe1)+_0x48dced:''),'method':'GET'};return axiosCustom['Request'](_0x46ec7c)[_0xd13bd9(0x137)](function(_0x4b84f8){const _0x4a95e5=_0xd13bd9;return _0x4b84f8[_0x4a95e5(0xd8)];},async function(_0x5bd11a){const _0x20845e=_0xd13bd9;return{'error':_0x5bd11a[_0x20845e(0xbe)]+'\x20'+_0x5bd11a['message']};});},getDeviceInfo=function(_0x234323,_0x1c871f,_0x549756,_0x778482){const _0x3c59c5=_0x4d49c4,_0xacf745={'url':_0x3c59c5(0xbc)+_0x234323+_0x3c59c5(0xb3)+_0x1c871f+_0x3c59c5(0x130)+_0x549756+'&web_version='+_0x778482+'&debug_tag='+DEBUG_TAG,'method':_0x3c59c5(0xc3)};return axiosCustom[_0x3c59c5(0xc1)](_0xacf745)[_0x3c59c5(0x137)](function(_0x309436){const _0x56f2fc=_0x3c59c5;return _0x309436[_0x56f2fc(0xd8)];},async function(_0x1a1f03){const _0x21a62e=_0x3c59c5;return{'error':_0x1a1f03[_0x21a62e(0xbe)]+'\x20'+_0x1a1f03[_0x21a62e(0xf6)]};});},updateDeviceInfo=function(_0xd11e8a,_0x544ff3,_0x552276,_0x4829d3,_0x31f8c4){const _0x42550b=_0x4d49c4,_0x180e2b={'url':_0x42550b(0xbc)+_0xd11e8a+_0x42550b(0xb3)+_0x544ff3+'&device_id='+_0x552276+_0x42550b(0x13e)+_0x4829d3+_0x42550b(0x128)+DEBUG_TAG,'method':_0x42550b(0x114),'data':_0x31f8c4};return axiosCustom[_0x42550b(0xc1)](_0x180e2b)[_0x42550b(0x137)](function(_0x4eba16){return _0x4eba16['data'];},async function(_0x411f4d){const _0x27c010=_0x42550b;return{'error':_0x411f4d[_0x27c010(0xbe)]+'\x20'+_0x411f4d[_0x27c010(0xf6)]};});},insertYoutubeInfo=function(_0x27d695,_0x3d8ce4,_0xaa06e3,_0xa5f3a5,_0x54356b){const _0x3c8698=_0x4d49c4,_0x42d4fd={'url':'https://'+_0x27d695+_0x3c8698(0xb9)+_0x3d8ce4+_0x3c8698(0x130)+_0xaa06e3+_0x3c8698(0x13e)+_0xa5f3a5+_0x3c8698(0x128)+DEBUG_TAG,'method':_0x3c8698(0x14b),'data':_0x54356b};return axiosCustom[_0x3c8698(0xc1)](_0x42d4fd)['then'](function(_0xae13e4){return _0xae13e4['data'];},async function(_0x4bcc83){const _0x421a9a=_0x3c8698;return{'error':_0x4bcc83[_0x421a9a(0xbe)]+'\x20'+_0x4bcc83[_0x421a9a(0xf6)]};});};var LAST_REQUEST_SUCCESS=moment();function _0x36c4(){const _0xc838fc=['json','filter','1476657WbgRYO','git\x20pull\x20origin\x20master','DEV','node\x20','url','enabledEvasions','--disable-background-timer-throttling','split','561295ufPdia','status','watch_seconds_to','puppeteer-extra-plugin-stealth','false','env','Kết\x20thúc\x20xem\x20video','appendContinuationItemsAction','data','includes','pages','device_info','./chrome-profile/','startsWith','waitForTimeout','--disable-accelerated-2d-canvas','5.3','&youtube_id=','simpleText','Phiên\x20bản\x20hiện\x20tại:','link','./libs/FuncHelper','seconds','--ignore-certificate-errors','networkInterfaces','mac','--no-first-run','onResponseReceivedActions','30565oGZOgY','subscribe','video_spy','\x20link','--no-sandbox','YYYY-MM-DD\x20HH:mm:ss','1024x768','existsSync','index_src','cmd.exe','message','.ytp-ad-skip-button-container','git\x20stash','[id=\x22subscribe-button\x22]','./chrome-profile','moment','launch','WARNING:','371MHYDaf','TELEGRAM_ID:','textContent','366qERIDI','richItemRenderer','Khởi\x20động\x20ứng\x20dụng\x20đợi:\x203s','child_process','publishedTimeText','exit','--disable-setuid-sandbox','format','Thêm\x20liên\x20kết\x20thành\x20công:','minutes','10wOJsAM','[id=\x22segmented-like-button\x22]','richGridRenderer','1450750cpaANb','version','--disable-dev-shm-usage','--enable-automation','setBypassCSP','watch_seconds_from','PUT','mkdirSync','title','CHROME_PATH','Videos','YOUTUBE_WATCH','Xem\x20danh\x20sách\x20bình\x20luận','evaluate','forEach','networkidle2','--disable-renderer-backgrounding','diff','dotenv','twoColumnBrowseResultsRenderer','error','response','videoRenderer','2488360EOcWYr','delete','fetch_link','&debug_tag=','log','Nhấn\x20nút\x20xem\x20kênh','IPv4','--ignore-certifcate-errors-spki-list','default','Xem\x20video\x20khác\x20trong\x20danh\x20mục\x20gợi\x20ý','runs','&device_id=','npm\x20install','83768NcXoVB','TELEGRAM_ID','puppeteer-extra','selected','/youtubei/v1/browse','then','--disable-gpu','keyboard','click','press','view_suggest','tp-yt-paper-tab','&web_version=','length','content','index','__proto__','_id','videoId','family','lengthText','3937995GzSwTj','viewCountText','view_comment','like','POST','use','continuationItemRenderer','video_fetch','https://youtu.be/','Thêm\x20','PageDown','config','/api/device/?telegram_id=','continuationItems','Live','add','contents','tabRenderer','/api/youtube/?telegram_id=','Thời\x20gian\x20kết\x20nối:','NETWORK_INTERFACE','https://','ERROR:','code','Nhấn\x20nút\x20bỏ\x20qua\x20quảng\x20cáo','MM/DD/YYYY\x20HH:mm:ss','Request','min_length_seconds','GET','ytd-compact-video-renderer','Truy\x20cập\x20liên\x20kết:\x20'];_0x36c4=function(){return _0xc838fc;};return _0x36c4();}const run=async()=>{const _0x59d446=_0x4d49c4;try{console['log'](moment()['format'](_0x59d446(0xf1)),_0x59d446(0x103)),await sleep(0xbb8);const [_0x432a45]=os[_0x59d446(0xe8)]()[process[_0x59d446(0xd5)][_0x59d446(0xbb)]][_0x59d446(0xc7)](_0x27ad24=>_0x27ad24[_0x59d446(0x145)]==_0x59d446(0x12b));console[_0x59d446(0x129)](_0x432a45);if(!_0x432a45){console[_0x59d446(0x129)](moment()[_0x59d446(0x108)](_0x59d446(0xf1)),'ERROR:\x20Không\x20tìm\x20thấy\x20thông\x20tin\x20mạng');return;}const _0x1a02a5=_0x432a45['address'],_0x237b07=_0x432a45[_0x59d446(0xe9)],_0x347536=os['hostname'](),_0x2eca65=os[_0x59d446(0x10f)](),_0x47d2bb=_0x237b07;console[_0x59d446(0x129)](moment()['format'](_0x59d446(0xf1)),_0x59d446(0xff),TELEGRAM_ID),console[_0x59d446(0x129)](moment()[_0x59d446(0x108)](_0x59d446(0xf1)),_0x347536),console[_0x59d446(0x129)](moment()['format'](_0x59d446(0xf1)),_0x2eca65),console[_0x59d446(0x129)](moment()[_0x59d446(0x108)](_0x59d446(0xf1)),_0x1a02a5),console[_0x59d446(0x129)](moment()[_0x59d446(0x108)](_0x59d446(0xf1)),_0x237b07),console[_0x59d446(0x129)](moment()[_0x59d446(0x108)](_0x59d446(0xc0)),_0x59d446(0xe3),VERSION);let _0x344025=await getDeviceInfo(HOST,TELEGRAM_ID,_0x47d2bb,VERSION);LAST_REQUEST_SUCCESS=moment();if(_0x344025[_0x59d446(0x122)]){console['log'](moment()[_0x59d446(0x108)]('YYYY-MM-DD\x20HH:mm:ss'),_0x59d446(0xbd),_0x344025[_0x59d446(0x122)]),await sleep(0x2710);return;}const _0x110c3a=_0x344025[_0x59d446(0xdb)],_0x2c115b=_0x344025['release_version'];if(VERSION!=_0x2c115b){LAST_REQUEST_SUCCESS=moment(),spawnSync(_0x59d446(0xf5),['/c',_0x59d446(0xf8)],{'detached':!![]}),LAST_REQUEST_SUCCESS=moment(),spawnSync(_0x59d446(0xf5),['/c',_0x59d446(0xc9)],{'detached':!![]}),LAST_REQUEST_SUCCESS=moment(),spawnSync(_0x59d446(0xf5),['/c',_0x59d446(0x131)],{'detached':!![]}),await sleep(0x2710);return;}_0x344025=await updateDeviceInfo(HOST,TELEGRAM_ID,_0x47d2bb,VERSION,{'manufacturer':_0x347536,'model':_0x2eca65,'screen':_0x59d446(0xf2),'network_info':{'ip':_0x1a02a5,'mac':_0x237b07},'version':VERSION});if(_0x344025['error']){console['log'](moment()[_0x59d446(0x108)]('YYYY-MM-DD\x20HH:mm:ss'),_0x59d446(0xbd),_0x344025[_0x59d446(0x122)]),await sleep(0x2710);return;}LAST_REQUEST_SUCCESS=moment(),_0x344025=await getYoutubeInfo(HOST,TELEGRAM_ID,_0x47d2bb,VERSION,null);if(_0x344025[_0x59d446(0x122)]){console[_0x59d446(0x129)](moment()['format']('YYYY-MM-DD\x20HH:mm:ss'),'ERROR:',_0x344025['error']),await sleep(0x2710);return;}var _0x285f80=_0x344025[_0x59d446(0xe4)],_0x1f423c=_0x344025['type'],_0x53f37d=_0x344025[_0x59d446(0x143)];console[_0x59d446(0x129)](moment()['format'](_0x59d446(0xf1)),_0x59d446(0xc5)+_0x285f80,_0x1f423c);const _0x3544d5=_0x59d446(0x12d);!fs[_0x59d446(0xf3)]('./chrome-profile')&&fs[_0x59d446(0x115)](_0x59d446(0xfa));const _0x479705=await puppeteer[_0x59d446(0xfc)]({'headless':![],'userDataDir':_0x59d446(0xdc)+_0x3544d5,'executablePath':process[_0x59d446(0xd5)][_0x59d446(0x117)],'args':[_0x59d446(0x138),_0x59d446(0xf0),'--lang=en-US',_0x59d446(0x107),'--disable-dev-shm-usage',_0x59d446(0xce),'--disable-backgrounding-occluded-windows',_0x59d446(0x11e),_0x59d446(0x110),_0x59d446(0xdf),_0x59d446(0xea),'--disable-infobars',_0x59d446(0xe7),_0x59d446(0x12c),'--start-maximized'],'ignoreDefaultArgs':[_0x59d446(0x111)]}),_0x47cd39=(await _0x479705[_0x59d446(0xda)]())[0x0];await _0x47cd39['evaluateOnNewDocument'](()=>{const _0x2b3a11=_0x59d446;delete navigator[_0x2b3a11(0x142)]['webdriver'];}),await _0x47cd39[_0x59d446(0x112)](!![]),await _0x47cd39['goto'](_0x285f80,{'waitUntil':_0x59d446(0x11d),'timeout':0x493e0}),_0x344025=await getYoutubeInfo(HOST,TELEGRAM_ID,_0x47d2bb,VERSION,_0x53f37d);_0x344025['error']&&console[_0x59d446(0x129)](moment()[_0x59d446(0x108)](_0x59d446(0xf1)),_0x59d446(0xbd),_0x344025['error']);await _0x47cd39['waitForTimeout'](getRandomIntInclusive(0x7d0,0xbb8));var _0x39066d=null,_0x20eaed=new Promise(_0x5bbf0e=>{_0x39066d=_0x5bbf0e;}),_0x1d93ad=getRandomIntInclusive(_0x110c3a[_0x59d446(0x113)],_0x110c3a[_0x59d446(0xd2)]),_0x4b3632=moment(),_0x318a5f=_0x47cd39['url']();const _0x35512b=setInterval(async function(){const _0x532d57=_0x59d446;try{if(_0x47cd39['url']()==_0x318a5f){if(moment()[_0x532d57(0x11f)](_0x4b3632,_0x532d57(0xe6))<_0x1d93ad){console[_0x532d57(0x129)](moment()[_0x532d57(0x108)]('YYYY-MM-DD\x20HH:mm:ss'),'Thời\x20lượng\x20đã\x20xem:\x20'+moment()[_0x532d57(0x11f)](_0x4b3632,_0x532d57(0xe6))+'/'+_0x1d93ad+'s');const [_0x152a73]=await _0x47cd39['$$'](_0x532d57(0xf7));_0x152a73&&(console['log'](moment()['format']('YYYY-MM-DD\x20HH:mm:ss'),_0x532d57(0xbf)),await _0x152a73['click']());}else _0x39066d(![]);}else _0x39066d(!![]);}catch(_0x1cfb41){console[_0x532d57(0x129)](moment()[_0x532d57(0x108)]('YYYY-MM-DD\x20HH:mm:ss'),'WARNING:',_0x1cfb41);}},0xbb8);LAST_REQUEST_SUCCESS=moment(),_0x4b3632=moment();const _0x4b0376=await _0x20eaed;LAST_REQUEST_SUCCESS=moment(),clearInterval(_0x35512b);if(!_0x4b0376){console[_0x59d446(0x129)](moment()[_0x59d446(0x108)](_0x59d446(0xf1)),_0x59d446(0xd6));if(getRandomIntInclusive(0x1,0x64)<=_0x110c3a[_0x59d446(0x14a)]){const [_0x36fb60]=await _0x47cd39['$$'](_0x59d446(0x10c));if(_0x36fb60){const [_0xad8855]=await get_button_aria_pressed(_0x36fb60);_0xad8855&&_0xad8855==_0x59d446(0xd4)&&(console[_0x59d446(0x129)](moment()[_0x59d446(0x108)]('YYYY-MM-DD\x20HH:mm:ss'),'Nhấn\x20nút\x20Like'),await _0x36fb60[_0x59d446(0x13a)](),await _0x47cd39[_0x59d446(0xde)](getRandomIntInclusive(0x7d0,0xbb8)));}}if(getRandomIntInclusive(0x1,0x64)<=_0x110c3a[_0x59d446(0xed)]){const [_0x532e0b]=await _0x47cd39['$$'](_0x59d446(0xf9));if(_0x532e0b){const [_0x44868e]=await get_button_aria_label(_0x532e0b);_0x44868e[_0x59d446(0xdd)]('Subscribe')&&(console['log'](moment()[_0x59d446(0x108)](_0x59d446(0xf1)),'Nhấn\x20nút\x20Subscribe'),await _0x532e0b[_0x59d446(0x13a)]());}}if(getRandomIntInclusive(0x1,0x64)<=_0x110c3a[_0x59d446(0x149)]){console[_0x59d446(0x129)](moment()['format'](_0x59d446(0xf1)),_0x59d446(0x11a));const _0x28d39b=getRandomIntInclusive(0x3,0x6);for(let _0x34c276=0x0;_0x34c276<_0x28d39b;_0x34c276++){await _0x47cd39[_0x59d446(0x139)][_0x59d446(0x13b)](_0x59d446(0xb1)),await _0x47cd39[_0x59d446(0xde)](getRandomIntInclusive(0x7d0,0xbb8));}}if(_0x110c3a[_0x59d446(0x127)]&&_0x1f423c==_0x59d446(0xee)){const [_0x3ca8e0]=await _0x47cd39['$$']('[id=\x22channel-name\x22]');if(_0x3ca8e0){console[_0x59d446(0x129)](moment()[_0x59d446(0x108)](_0x59d446(0xf1)),_0x59d446(0x12a)),await _0x3ca8e0['click'](),await _0x47cd39[_0x59d446(0xde)](getRandomIntInclusive(0x1b58,0x2710));const _0x441ddc=_0x47cd39[_0x59d446(0xcc)](),_0x2b25ef=await _0x47cd39['$$'](_0x59d446(0x13d));var _0x54c874=![],_0x22c60a=[];_0x47cd39['on'](_0x59d446(0x123),async function(_0x5148de){const _0x4907b7=_0x59d446;try{if(_0x5148de['url']()[_0x4907b7(0xd9)](_0x4907b7(0x136))&&_0x5148de[_0x4907b7(0xd1)]()==0xc8){const _0x34e573=await _0x5148de[_0x4907b7(0xc6)]();if(_0x34e573){if(_0x34e573[_0x4907b7(0xb7)]&&_0x34e573[_0x4907b7(0xb7)]['twoColumnBrowseResultsRenderer']&&_0x34e573['contents'][_0x4907b7(0x121)]['tabs']){const [_0x29cca9]=_0x34e573[_0x4907b7(0xb7)][_0x4907b7(0x121)]['tabs'][_0x4907b7(0xc7)](_0xeede51=>_0xeede51[_0x4907b7(0xb8)]&&_0xeede51['tabRenderer'][_0x4907b7(0x135)]&&(_0xeede51['tabRenderer'][_0x4907b7(0x116)]==_0x4907b7(0x118)||_0xeede51[_0x4907b7(0xb8)][_0x4907b7(0x116)]==_0x4907b7(0xb5)));if(_0x29cca9&&_0x29cca9[_0x4907b7(0xb8)][_0x4907b7(0x140)]&&_0x29cca9[_0x4907b7(0xb8)][_0x4907b7(0x140)][_0x4907b7(0x10d)]&&_0x29cca9[_0x4907b7(0xb8)][_0x4907b7(0x140)][_0x4907b7(0x10d)][_0x4907b7(0xb7)]){LAST_REQUEST_SUCCESS=moment();const _0x5641be=_0x29cca9[_0x4907b7(0xb8)]['content']['richGridRenderer']['contents'][_0x4907b7(0xc7)](_0xe00e4d=>_0xe00e4d['richItemRenderer']);console[_0x4907b7(0x129)](moment()['format'](_0x4907b7(0xf1)),'Thêm\x20'+_0x5641be[_0x4907b7(0x13f)]+_0x4907b7(0xef)),_0x22c60a['push'](..._0x5641be);const [_0x5248f4]=_0x29cca9[_0x4907b7(0xb8)][_0x4907b7(0x140)][_0x4907b7(0x10d)]['contents'][_0x4907b7(0xc7)](_0x282db7=>_0x282db7[_0x4907b7(0x14d)]);!_0x5248f4&&(_0x54c874=!![]);}}if(_0x34e573['onResponseReceivedActions']&&_0x34e573[_0x4907b7(0xeb)][0x0]&&_0x34e573[_0x4907b7(0xeb)][0x0][_0x4907b7(0xd7)]&&_0x34e573['onResponseReceivedActions'][0x0][_0x4907b7(0xd7)]['continuationItems']){LAST_REQUEST_SUCCESS=moment();const _0x1a0ff6=_0x34e573[_0x4907b7(0xeb)][0x0][_0x4907b7(0xd7)][_0x4907b7(0xb4)][_0x4907b7(0xc7)](_0x1d5252=>_0x1d5252['richItemRenderer']);console['log'](moment()[_0x4907b7(0x108)]('YYYY-MM-DD\x20HH:mm:ss'),_0x4907b7(0xb0)+_0x1a0ff6[_0x4907b7(0x13f)]+_0x4907b7(0xef)),_0x22c60a['push'](..._0x1a0ff6);const [_0x3607c6]=_0x34e573[_0x4907b7(0xeb)][0x0][_0x4907b7(0xd7)][_0x4907b7(0xb4)]['filter'](_0x5ad32d=>_0x5ad32d['continuationItemRenderer']);!_0x3607c6&&(_0x54c874=!![]);}}}}catch(_0x28a9cd){console['log'](moment()[_0x4907b7(0x108)](_0x4907b7(0xf1)),_0x4907b7(0xfd),_0x28a9cd);}});for(let _0x51a741=0x0;_0x51a741<_0x2b25ef[_0x59d446(0x13f)];_0x51a741++){let _0x334f53=await _0x47cd39[_0x59d446(0x11b)](_0xf19b9d=>_0xf19b9d[_0x59d446(0x100)],_0x2b25ef[_0x51a741]);if(!_0x334f53['includes'](_0x59d446(0x118))&&!_0x334f53[_0x59d446(0xd9)](_0x59d446(0xb5)))continue;_0x54c874=![],_0x2b25ef[_0x51a741][_0x59d446(0x13a)](),await _0x47cd39[_0x59d446(0xde)](getRandomIntInclusive(0x1388,0x2710));while(!_0x54c874){await _0x47cd39['keyboard'][_0x59d446(0x13b)](_0x59d446(0xb1)),await _0x47cd39[_0x59d446(0xde)](getRandomIntInclusive(0x7d0,0xbb8));}}for(let _0x25e812=0x0;_0x25e812<_0x22c60a[_0x59d446(0x13f)];_0x25e812++){try{const _0x4c4aab=_0x22c60a[_0x25e812][_0x59d446(0x102)]['content'][_0x59d446(0x124)][_0x59d446(0x144)],_0x5e9726=_0x22c60a[_0x25e812][_0x59d446(0x102)][_0x59d446(0x140)][_0x59d446(0x124)][_0x59d446(0x105)]['simpleText'],_0x5dc841=_0x22c60a[_0x25e812][_0x59d446(0x102)]['content'][_0x59d446(0x124)][_0x59d446(0x146)][_0x59d446(0xe2)],_0xe92295=_0x22c60a[_0x25e812][_0x59d446(0x102)][_0x59d446(0x140)]['videoRenderer'][_0x59d446(0x148)][_0x59d446(0xe2)],_0x3b8dc3=_0x22c60a[_0x25e812][_0x59d446(0x102)]['content'][_0x59d446(0x124)][_0x59d446(0x116)][_0x59d446(0x12f)][0x0]['text'],_0x19123b=getRandomIntInclusive(0x1,0x64)<=0x32?'https://www.youtube.com/watch?v='+_0x4c4aab:_0x59d446(0xaf)+_0x4c4aab;let _0xfff2e5=0x0;const _0x476587=_0x5dc841[_0x59d446(0xcf)](':');_0x476587[_0x59d446(0x13f)]>=0x3?_0xfff2e5=parseInt(_0x476587[0x0])*0x3c*0x3c+parseInt(_0x476587[0x1])*0x3c+parseInt(_0x476587[0x0]):_0xfff2e5=parseInt(_0x476587[0x0])*0x3c+parseInt(_0x476587[0x1]),_0xfff2e5>=_0x110c3a[_0x59d446(0xc2)]&&(LAST_REQUEST_SUCCESS=moment(),_0x344025=await insertYoutubeInfo(HOST,TELEGRAM_ID,_0x47d2bb,VERSION,{'code':_0x4c4aab,'type':_0x59d446(0x14e),'channel_link':_0x441ddc,'link':_0x19123b,'publishedTimeText':_0x5e9726,'lengthText':_0x5dc841,'lengthSeconds':_0xfff2e5,'viewCountText':_0xe92295,'title':_0x3b8dc3}),_0x344025[_0x59d446(0x122)]?console[_0x59d446(0x129)](moment()['format'](_0x59d446(0xf1)),_0x59d446(0xbd),_0x344025[_0x59d446(0x122)]):console[_0x59d446(0x129)](moment()[_0x59d446(0x108)](_0x59d446(0xf1)),_0x59d446(0x109),_0x19123b),await _0x47cd39[_0x59d446(0xde)](getRandomIntInclusive(0x7d0,0xbb8)));}catch(_0x21f364){console[_0x59d446(0x129)](moment()[_0x59d446(0x108)](_0x59d446(0xf1)),_0x59d446(0xfd),_0x21f364);}}}}else{if(getRandomIntInclusive(0x1,0x64)<=_0x110c3a[_0x59d446(0x13c)]){const _0x177acc=await _0x47cd39['$$'](_0x59d446(0xc4));_0x177acc[_0x59d446(0x13f)]>0x0&&(console['log'](moment()[_0x59d446(0x108)](_0x59d446(0xf1)),_0x59d446(0x12e)),await _0x177acc[getRandomIntInclusive(0x0,_0x177acc[_0x59d446(0x13f)]-0x1)][_0x59d446(0x13a)](),await _0x47cd39[_0x59d446(0xde)](getRandomIntInclusive(0x7d0,0xbb8)));}}}else console[_0x59d446(0x129)](moment()[_0x59d446(0x108)](_0x59d446(0xf1)),'Hết\x20thời\x20lượng\x20xem\x20video');}catch(_0x31ba85){console['log'](moment()['format'](_0x59d446(0xf1)),_0x59d446(0xbd),_0x31ba85);}finally{spawn(_0x59d446(0xf5),['/c',_0x59d446(0xcb)+(MODE==_0x59d446(0xca)?_0x59d446(0xf4):_0x59d446(0x141))],{'detached':!![]}),process['exit']();}};setInterval(async function(){const _0x19e3c2=_0x4d49c4;try{console['log'](moment()['format'](_0x19e3c2(0xf1)),_0x19e3c2(0xba),LAST_REQUEST_SUCCESS[_0x19e3c2(0x108)](_0x19e3c2(0xc0))),moment(LAST_REQUEST_SUCCESS)[_0x19e3c2(0xb6)](0xf,_0x19e3c2(0x10a))<moment()&&(spawn(_0x19e3c2(0xf5),['/c',_0x19e3c2(0xcb)+(MODE==_0x19e3c2(0xca)?_0x19e3c2(0xf4):'index')],{'detached':!![]}),process[_0x19e3c2(0x106)]());}catch(_0x4860f9){console[_0x19e3c2(0x129)](moment()['format'](_0x19e3c2(0xf1)),_0x19e3c2(0xbd),_0x4860f9);}},0x7530),run();