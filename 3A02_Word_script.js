const _0x3d2fa8=_0x52c6;(function(_0xf68cc2,_0x3b0a9d){const _0x2340a1=_0x52c6,_0x90f39=_0xf68cc2();while(!![]){try{const _0x5a6910=-parseInt(_0x2340a1(0xf7))/0x1+-parseInt(_0x2340a1(0xe3))/0x2+parseInt(_0x2340a1(0x101))/0x3+-parseInt(_0x2340a1(0xcc))/0x4+-parseInt(_0x2340a1(0xe6))/0x5+-parseInt(_0x2340a1(0xd2))/0x6*(-parseInt(_0x2340a1(0xf2))/0x7)+-parseInt(_0x2340a1(0xde))/0x8*(-parseInt(_0x2340a1(0xd4))/0x9);if(_0x5a6910===_0x3b0a9d)break;else _0x90f39['push'](_0x90f39['shift']());}catch(_0x42eb54){_0x90f39['push'](_0x90f39['shift']());}}}(_0x55c4,0x1f47d));const words=['입학을\x20하다','졸업을\x20하다',_0x3d2fa8(0xd9),'일자리를\x20찾다','일을\x20맡다',_0x3d2fa8(0xd5),_0x3d2fa8(0xdd),_0x3d2fa8(0xc5),_0x3d2fa8(0xeb),_0x3d2fa8(0xff),_0x3d2fa8(0xd0),'청혼을\x20받다','휴학하다','회사에서\x20근무하다',_0x3d2fa8(0xf8),_0x3d2fa8(0xf5)],englishTranslations=[_0x3d2fa8(0xda),'төгсөх',_0x3d2fa8(0xd6),_0x3d2fa8(0xf0),'ажил\x20хариуцан\x20авах',_0x3d2fa8(0xdc),_0x3d2fa8(0xc4),_0x3d2fa8(0xf3),_0x3d2fa8(0xc6),_0x3d2fa8(0xcf),_0x3d2fa8(0xef),_0x3d2fa8(0xfa),_0x3d2fa8(0xdb),_0x3d2fa8(0x104),'ажлаасаа\x20гарах',_0x3d2fa8(0xfd)];let currentWordIndex=0x0,currentWord=words[currentWordIndex]['split'](''),clickedLetters=[],previousClickedCells=[];function createGrid(){const _0x322250=_0x3d2fa8,_0x40299c=document[_0x322250(0xf1)](_0x322250(0xf9));_0x40299c[_0x322250(0xc8)]='';let _0x3047a7=[];if(currentWordIndex<words[_0x322250(0xed)]-0x2)_0x3047a7=words[_0x322250(0x105)](currentWordIndex,currentWordIndex+0x3)['join']('')['split']('');else currentWordIndex===words[_0x322250(0xed)]-0x2?_0x3047a7=words['slice'](currentWordIndex,currentWordIndex+0x2)[_0x322250(0xdf)]('')[_0x322250(0xec)](words[_0x322250(0x105)](0x0,0x1)[_0x322250(0xdf)](''))['split'](''):_0x3047a7=words['slice'](currentWordIndex,currentWordIndex+0x1)['join']('')[_0x322250(0xec)](words[_0x322250(0x105)](0x0,0x2)[_0x322250(0xdf)](''))[_0x322250(0x108)]('');_0x3047a7=_0x3047a7[_0x322250(0xd3)](()=>Math[_0x322250(0xfb)]()-0.5);for(let _0x1e2c13=0x0;_0x1e2c13<0x31;_0x1e2c13++){const _0x526b7d=document[_0x322250(0x100)]('div');_0x526b7d[_0x322250(0x109)][_0x322250(0xfc)](_0x322250(0xc3)),_0x3047a7[_0x1e2c13]?(_0x526b7d['textContent']=_0x3047a7[_0x1e2c13],_0x526b7d[_0x322250(0xca)](_0x322250(0xe1),()=>handleCellClick(_0x526b7d))):(_0x526b7d['textContent']='',_0x526b7d[_0x322250(0x109)][_0x322250(0xfc)](_0x322250(0x107))),_0x40299c['appendChild'](_0x526b7d);}}function handleCellClick(_0x48a4c7){const _0x9835df=_0x3d2fa8;if(clickedLetters[_0x9835df(0xed)]<currentWord[_0x9835df(0xed)]&&_0x48a4c7['textContent']){clickedLetters[_0x9835df(0xc9)](_0x48a4c7[_0x9835df(0xfe)]),previousClickedCells[_0x9835df(0xc9)](_0x48a4c7),_0x48a4c7[_0x9835df(0xfe)]='',_0x48a4c7[_0x9835df(0x109)][_0x9835df(0xfc)](_0x9835df(0x107)),updateBottomRow();const _0x2d1175=document[_0x9835df(0xf1)](_0x9835df(0xf6));clickedLetters[_0x9835df(0xed)]>0x0&&(_0x2d1175[_0x9835df(0x109)][_0x9835df(0xd7)](_0x9835df(0xe8)),_0x2d1175['disabled']=![]),clickedLetters[_0x9835df(0xed)]===currentWord[_0x9835df(0xed)]&&checkCompletion();}}function updateBottomRow(){const _0x25a893=_0x3d2fa8,_0x10b841=document[_0x25a893(0xf1)](_0x25a893(0xc7));_0x10b841['innerHTML']='',clickedLetters[_0x25a893(0xe9)](_0x2431e3=>{const _0x550933=_0x25a893,_0x82e1ce=document[_0x550933(0x100)](_0x550933(0xcd));_0x82e1ce[_0x550933(0x109)][_0x550933(0xfc)](_0x550933(0xc3)),_0x82e1ce['textContent']=_0x2431e3,_0x10b841[_0x550933(0xea)](_0x82e1ce);});}function displayDateTime(){const _0x3c220b=_0x3d2fa8,_0x411ed9=new Date(),_0x1b4dc9=_0x411ed9[_0x3c220b(0xe5)](),_0x565f81=String(_0x411ed9[_0x3c220b(0xe4)]()+0x1)[_0x3c220b(0xe7)](0x2,'0'),_0x5cd9fb=String(_0x411ed9[_0x3c220b(0xee)]())[_0x3c220b(0xe7)](0x2,'0'),_0x3f6191=String(_0x411ed9[_0x3c220b(0xd1)]())[_0x3c220b(0xe7)](0x2,'0'),_0x4b5909=String(_0x411ed9[_0x3c220b(0x103)]())[_0x3c220b(0xe7)](0x2,'0'),_0x343610=document[_0x3c220b(0xf1)](_0x3c220b(0xe0));_0x343610['textContent']=_0x1b4dc9+'년\x20'+_0x565f81+'월\x20'+_0x5cd9fb+'일\x20'+_0x3f6191+'시\x20'+_0x4b5909+'분';}function checkCompletion(){const _0x278610=_0x3d2fa8,_0xe6ac16=document[_0x278610(0xf1)](_0x278610(0xcb));if(clickedLetters['join']('')===currentWord['join']('')){_0xe6ac16[_0x278610(0x109)][_0x278610(0xfc)](_0x278610(0xd8));if(currentWordIndex<words[_0x278610(0xed)]-0x1){currentWordIndex++,currentWord=words[currentWordIndex][_0x278610(0x108)](''),clickedLetters=[],previousClickedCells=[];let _0x2211eb=currentWord[_0x278610(0xed)];document[_0x278610(0xf1)](_0x278610(0x106))[_0x278610(0xfe)]=_0x278610(0x102)+(currentWordIndex+0x1)+_0x278610(0xf4)+words[_0x278610(0xed)]+_0x278610(0xe2)+englishTranslations[currentWordIndex]+'\x20('+_0x2211eb+')',createGrid(),updateBottomRow();const _0x364ff8=document['getElementById']('undoButton');_0x364ff8['classList'][_0x278610(0xfc)](_0x278610(0xe8)),_0x364ff8[_0x278610(0xe8)]=!![];}else document[_0x278610(0xf1)](_0x278610(0xf9))[_0x278610(0x109)][_0x278610(0xfc)](_0x278610(0xd8)),document[_0x278610(0xf1)](_0x278610(0xc7))[_0x278610(0x109)]['add'](_0x278610(0xd8)),document[_0x278610(0xf1)]('header')[_0x278610(0x109)]['add'](_0x278610(0xd8)),document[_0x278610(0xf1)]('end-message')[_0x278610(0x109)][_0x278610(0xd7)](_0x278610(0xd8)),displayDateTime();}else _0xe6ac16[_0x278610(0x109)]['remove']('hidden'),clickedLetters=[],previousClickedCells=[],updateBottomRow(),createGrid();}function _0x52c6(_0x29d3a5,_0x55e99d){const _0x55c481=_0x55c4();return _0x52c6=function(_0x52c6be,_0x27cc2d){_0x52c6be=_0x52c6be-0xc3;let _0x1b49c3=_0x55c481[_0x52c6be];return _0x1b49c3;},_0x52c6(_0x29d3a5,_0x55e99d);}document['getElementById'](_0x3d2fa8(0xf6))[_0x3d2fa8(0xca)](_0x3d2fa8(0xe1),()=>{const _0x4cefcd=_0x3d2fa8;if(clickedLetters['length']>0x0){const _0x578ce1=clickedLetters[_0x4cefcd(0xce)](),_0x1bfe1e=previousClickedCells[_0x4cefcd(0xce)]();_0x1bfe1e&&(_0x1bfe1e[_0x4cefcd(0xfe)]=_0x578ce1,_0x1bfe1e[_0x4cefcd(0x109)][_0x4cefcd(0xd7)](_0x4cefcd(0x107)));updateBottomRow();if(clickedLetters[_0x4cefcd(0xed)]===0x0){const _0xdb2d9a=document[_0x4cefcd(0xf1)](_0x4cefcd(0xf6));_0xdb2d9a[_0x4cefcd(0x109)][_0x4cefcd(0xfc)](_0x4cefcd(0xe8)),_0xdb2d9a[_0x4cefcd(0xe8)]=!![];}}});function _0x55c4(){const _0x513364=['\x20:\x20','335410puxHmK','getMonth','getFullYear','510020iKgmby','padStart','disabled','forEach','appendChild','회사에\x20지원하다','concat','length','getDate','гэрлэх\x20санал\x20тавих','ажлын\x20байр\x20олох','getElementById','7qVvipl','\x20тэтгэлэг\x20авах','\x20/\x20','아이를\x20낳다','undoButton','188333SBkXxt','일을\x20그만두다','grid','гэрлэх\x20санал\x20хүлээн\x20авах','random','add','хүүхэд\x20төрүүлэх','textContent','승진하다','createElement','301710hoViEA','단어\x20','getMinutes','компанид\x20ажиллах','slice','header','empty','split','classList','cell','жолооны\x20үнэмлэх\x20авах','장학금을\x20받다','компанид\x20өргөдөл\x20гаргах','bottomRow','innerHTML','push','addEventListener','alert','362096WiGkgW','div','pop','албан\x20тушаал\x20дэвших','청혼을\x20하다','getHours','728646PiChqW','sort','180JlaFPy','업무를\x20맡다','ажлын\x20байр\x20хайх','remove','hidden','일자리를\x20구하다','сургуульд\x20орох','ээлжийн\x20амралтаа\x20авах','ажил\x20хариуцан\x20авах','운전면허를\x20따다','181872UwvrvB','join','date-time','click'];_0x55c4=function(){return _0x513364;};return _0x55c4();}let d=currentWord['length'];document[_0x3d2fa8(0xf1)](_0x3d2fa8(0x106))[_0x3d2fa8(0xfe)]='단어\x201\x20/\x20'+words[_0x3d2fa8(0xed)]+_0x3d2fa8(0xe2)+englishTranslations[0x0]+'\x20('+d+')',createGrid();