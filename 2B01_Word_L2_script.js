const _0x329892=_0x2463;(function(_0x451954,_0x46efc4){const _0x4df87a=_0x2463,_0x513d13=_0x451954();while(!![]){try{const _0x267f6b=parseInt(_0x4df87a(0x188))/0x1*(parseInt(_0x4df87a(0x187))/0x2)+parseInt(_0x4df87a(0x173))/0x3*(-parseInt(_0x4df87a(0x165))/0x4)+parseInt(_0x4df87a(0x170))/0x5+-parseInt(_0x4df87a(0x172))/0x6+parseInt(_0x4df87a(0x162))/0x7+-parseInt(_0x4df87a(0x16d))/0x8*(-parseInt(_0x4df87a(0x17e))/0x9)+-parseInt(_0x4df87a(0x18b))/0xa;if(_0x267f6b===_0x46efc4)break;else _0x513d13['push'](_0x513d13['shift']());}catch(_0x435c99){_0x513d13['push'](_0x513d13['shift']());}}}(_0x2641,0x3d8b9));const words=[_0x329892(0x179),'간식을\x20준비하다','친구들의\x20취향을\x20물어보다',_0x329892(0x18c),_0x329892(0x17b),'지하도','육교',_0x329892(0x15f),_0x329892(0x182),_0x329892(0x16a)],englishTranslations=['Газраа\x20тогтох',_0x329892(0x15c),'Найзуудын\x20сонирхлыг\x20асуух','Уулзалт\x20хийх',_0x329892(0x163),'Нүхэн\x20гарц',_0x329892(0x17a),_0x329892(0x16c),_0x329892(0x15e),_0x329892(0x158)];let currentWordIndex=0x0,currentWord=words[currentWordIndex][_0x329892(0x184)](''),clickedLetters=[],previousClickedCells=[],startTime=new Date();function shuffleArray(_0x4efba3){const _0x5356bc=_0x329892;for(let _0x1c2700=_0x4efba3[_0x5356bc(0x167)]-0x1;_0x1c2700>0x0;_0x1c2700--){let _0x358ccf=Math['floor'](Math['random']()*(_0x1c2700+0x1));[_0x4efba3[_0x1c2700],_0x4efba3[_0x358ccf]]=[_0x4efba3[_0x358ccf],_0x4efba3[_0x1c2700]];}return _0x4efba3;}function _0x2463(_0x40f740,_0x51248d){const _0x26414d=_0x2641();return _0x2463=function(_0x2463e1,_0xcdcaa){_0x2463e1=_0x2463e1-0x156;let _0x2741ee=_0x26414d[_0x2463e1];return _0x2741ee;},_0x2463(_0x40f740,_0x51248d);}function _0x2641(){const _0x2655b3=['장소를\x20결정하다','Гүүр','횡단보도','pop','appendChild','19071nzgONn','click','getMonth','getFullYear','좌회전하다','<br>걸린\x20시간:\x20','split','innerHTML','2024-11-4','389834BPFwnF','2wiAobq','disabled','header','8547350xacotj','모임을\x20하다','textContent','getHours','hidden','forEach','empty','div','slice','Гэрлэн\x20дохио','단어\x20','floor','grid','Хөнгөн\x20зууш\x20бэлдэх','\x20:\x20','Зүүн\x20зүг\x20рүү\x20эргэх','우회전하다','undoButton','bottomRow','2638356criQys','Явган\x20хүний\x20гарц','join','4GHKFNS','remove','length','getElementById','cell','신호등','단어\x201\x20/\x20','Баруун\x20зүг\x20рүү\x20эргэх','912VtFjts','createElement','add','2434920MZLCrp','\x20/\x20','1524006LRKWJV','403401lgcrrx','classList','addEventListener','push','alert','concat'];_0x2641=function(){return _0x2655b3;};return _0x2641();}function createGrid(){const _0x50d26d=_0x329892,_0x3b7311=document['getElementById'](_0x50d26d(0x15b));_0x3b7311[_0x50d26d(0x185)]='';let _0x52ad1a=[];if(currentWordIndex<words['length']-0x2)_0x52ad1a=words[_0x50d26d(0x157)](currentWordIndex,currentWordIndex+0x3)[_0x50d26d(0x164)]('')[_0x50d26d(0x184)]('');else currentWordIndex===words[_0x50d26d(0x167)]-0x2?_0x52ad1a=words['slice'](currentWordIndex,currentWordIndex+0x2)[_0x50d26d(0x164)]('')[_0x50d26d(0x178)](words['slice'](0x0,0x1)[_0x50d26d(0x164)](''))['split'](''):_0x52ad1a=words[_0x50d26d(0x157)](currentWordIndex,currentWordIndex+0x1)[_0x50d26d(0x164)]('')[_0x50d26d(0x178)](words[_0x50d26d(0x157)](0x0,0x2)['join'](''))[_0x50d26d(0x184)]('');_0x52ad1a=shuffleArray(_0x52ad1a);for(let _0x44841d=0x0;_0x44841d<0x31;_0x44841d++){const _0x3d45be=document[_0x50d26d(0x16e)]('div');_0x3d45be[_0x50d26d(0x174)][_0x50d26d(0x16f)](_0x50d26d(0x169)),_0x52ad1a[_0x44841d]?(_0x3d45be[_0x50d26d(0x18d)]=_0x52ad1a[_0x44841d],_0x3d45be[_0x50d26d(0x175)](_0x50d26d(0x17f),()=>handleCellClick(_0x3d45be))):(_0x3d45be['textContent']='',_0x3d45be[_0x50d26d(0x174)][_0x50d26d(0x16f)](_0x50d26d(0x191))),_0x3b7311['appendChild'](_0x3d45be);}}function handleCellClick(_0x2cc2e2){const _0x1c10e0=_0x329892;if(clickedLetters[_0x1c10e0(0x167)]<currentWord[_0x1c10e0(0x167)]&&_0x2cc2e2[_0x1c10e0(0x18d)]){clickedLetters['push'](_0x2cc2e2[_0x1c10e0(0x18d)]),previousClickedCells[_0x1c10e0(0x176)](_0x2cc2e2),_0x2cc2e2[_0x1c10e0(0x18d)]='',_0x2cc2e2[_0x1c10e0(0x174)][_0x1c10e0(0x16f)](_0x1c10e0(0x191)),updateBottomRow();const _0x59faae=document['getElementById'](_0x1c10e0(0x160));clickedLetters[_0x1c10e0(0x167)]>0x0&&(_0x59faae[_0x1c10e0(0x174)]['remove'](_0x1c10e0(0x189)),_0x59faae[_0x1c10e0(0x189)]=![]),clickedLetters['length']===currentWord['length']&&checkCompletion();}}function updateBottomRow(){const _0x35b54c=_0x329892,_0x18d5c0=document[_0x35b54c(0x168)]('bottomRow');_0x18d5c0[_0x35b54c(0x185)]='',clickedLetters[_0x35b54c(0x190)](_0x273b20=>{const _0x4ca107=_0x35b54c,_0x4e0542=document[_0x4ca107(0x16e)](_0x4ca107(0x156));_0x4e0542['classList'][_0x4ca107(0x16f)](_0x4ca107(0x169)),_0x4e0542['textContent']=_0x273b20,_0x18d5c0[_0x4ca107(0x17d)](_0x4e0542);});}function displayDateTime(){const _0xc6b15c=_0x329892,_0x2e80a4=document['getElementById']('date-time'),_0x1cd629=new Date(),_0x5cd068=_0x1cd629[_0xc6b15c(0x181)]()+'년\x20'+(_0x1cd629[_0xc6b15c(0x180)]()+0x1)+'월\x20'+_0x1cd629['getDate']()+'일\x20'+_0x1cd629[_0xc6b15c(0x18e)]()+'시\x20'+_0x1cd629['getMinutes']()+'분',_0x9bc71e=Math[_0xc6b15c(0x15a)]((_0x1cd629-startTime)/0x3e8),_0x1ce21c=Math[_0xc6b15c(0x15a)](_0x9bc71e/0x3c),_0x308d8f=_0x9bc71e%0x3c;_0x2e80a4[_0xc6b15c(0x185)]=_0x5cd068+_0xc6b15c(0x183)+_0x1ce21c+'분\x20'+_0x308d8f+'초';}function checkCompletion(){const _0xf9b462=_0x329892,_0x2b411f=document[_0xf9b462(0x168)](_0xf9b462(0x177));if(clickedLetters['join']('')===currentWord[_0xf9b462(0x164)]('')){_0x2b411f[_0xf9b462(0x174)][_0xf9b462(0x16f)]('hidden');if(currentWordIndex<words[_0xf9b462(0x167)]-0x1){currentWordIndex++,currentWord=words[currentWordIndex][_0xf9b462(0x184)](''),clickedLetters=[],previousClickedCells=[];let _0x6e4bc=currentWord[_0xf9b462(0x167)];document[_0xf9b462(0x168)](_0xf9b462(0x18a))[_0xf9b462(0x18d)]=_0xf9b462(0x159)+(currentWordIndex+0x1)+_0xf9b462(0x171)+words[_0xf9b462(0x167)]+_0xf9b462(0x15d)+englishTranslations[currentWordIndex]+'\x20('+_0x6e4bc+')',createGrid(),updateBottomRow();const _0x428cd9=document[_0xf9b462(0x168)](_0xf9b462(0x160));_0x428cd9[_0xf9b462(0x174)][_0xf9b462(0x16f)](_0xf9b462(0x189)),_0x428cd9[_0xf9b462(0x189)]=!![];}else document['getElementById'](_0xf9b462(0x15b))[_0xf9b462(0x174)][_0xf9b462(0x16f)]('hidden'),document['getElementById'](_0xf9b462(0x161))[_0xf9b462(0x174)][_0xf9b462(0x16f)](_0xf9b462(0x18f)),document[_0xf9b462(0x168)](_0xf9b462(0x18a))[_0xf9b462(0x174)][_0xf9b462(0x16f)](_0xf9b462(0x18f)),document['getElementById']('end-message')[_0xf9b462(0x174)]['remove'](_0xf9b462(0x18f)),displayDateTime();}else _0x2b411f[_0xf9b462(0x174)][_0xf9b462(0x166)]('hidden'),clickedLetters=[],previousClickedCells=[],updateBottomRow(),createGrid();}document[_0x329892(0x168)](_0x329892(0x160))[_0x329892(0x175)]('click',()=>{const _0x55745b=_0x329892;if(clickedLetters['length']>0x0){const _0x4b7af7=clickedLetters[_0x55745b(0x17c)](),_0xd32352=previousClickedCells['pop']();_0xd32352&&(_0xd32352[_0x55745b(0x18d)]=_0x4b7af7,_0xd32352[_0x55745b(0x174)][_0x55745b(0x166)](_0x55745b(0x191)));updateBottomRow();if(clickedLetters[_0x55745b(0x167)]===0x0){const _0x2f5617=document['getElementById']('undoButton');_0x2f5617[_0x55745b(0x174)][_0x55745b(0x16f)]('disabled'),_0x2f5617[_0x55745b(0x189)]=!![];}}});let d=currentWord[_0x329892(0x167)];document[_0x329892(0x168)]('header')[_0x329892(0x18d)]=_0x329892(0x16b)+words[_0x329892(0x167)]+'\x20:\x20'+englishTranslations[0x0]+'\x20('+d+')',createGrid();const currentDate=new Date(),startDate=new Date('2024-11-3'),endDate=new Date(_0x329892(0x186));createGrid();