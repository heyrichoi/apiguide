const pages=[
 ['assets/guidebook/page_00.png','표지'],['assets/guidebook/page_01.png','01. 치지직 Developers 들어가기'],['assets/guidebook/page_02.png','02. 애플리케이션 등록하기'],['assets/guidebook/page_03.png','03. API Scope 선택하기'],['assets/guidebook/page_04.png','04. 발급 정보 확인하기'],['assets/guidebook/page_05.png','05. API 랩에 입력하고 로그인하기'],['assets/guidebook/page_06.png','06. VTube Studio 연동하기'],['assets/guidebook/page_07.png','07. OBS에 오버레이 연결하기'],['assets/guidebook/page_08.png','08. 연동 후 기능 확인하기'],['assets/guidebook/page_09.png','09. 자주 생기는 오류 해결하기'],['assets/guidebook/page_10.png','10. RUN 창은 닫지 말기'],['assets/guidebook/page_11.png','11. 해킹 걱정하지 말기']
];
let idx=0;
const guidePages=document.getElementById('guidePages');
const guideImg=document.getElementById('guideImage');
const guideTitle=document.getElementById('guidePageTitle');
const guideCount=document.getElementById('guidePageCount');
const modal=document.getElementById('imageModal');
const modalImg=document.getElementById('modalImage');
const toast=document.getElementById('toast');
function renderTabs(){guidePages.innerHTML='';pages.forEach((p,i)=>{const b=document.createElement('button');b.className='page-tab'+(i===idx?' active':'');b.innerHTML=`<img src="${p[0]}" alt=""><strong>${p[1]}</strong>`;b.onclick=()=>setPage(i);guidePages.appendChild(b);});}
function setPage(n){idx=Math.max(0,Math.min(pages.length-1,n));guideImg.src=pages[idx][0];guideTitle.textContent=pages[idx][1];guideCount.textContent=`${idx+1} / ${pages.length}`;document.getElementById('prevPage').disabled=idx===0;document.getElementById('nextPage').disabled=idx===pages.length-1;renderTabs();}
document.getElementById('prevPage').onclick=()=>setPage(idx-1);document.getElementById('nextPage').onclick=()=>setPage(idx+1);
document.addEventListener('keydown',e=>{if(modal.classList.contains('open')){if(e.key==='Escape')closeModal();return} if(location.hash==='#guidebook'||document.getElementById('guidebook').getBoundingClientRect().top<window.innerHeight){if(e.key==='ArrowLeft')setPage(idx-1); if(e.key==='ArrowRight')setPage(idx+1);}});
guideImg.addEventListener('click',()=>{modalImg.src=pages[idx][0];modal.classList.add('open');modal.setAttribute('aria-hidden','false')});
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');modalImg.src=''}
document.getElementById('modalClose').onclick=closeModal;modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
function showToast(msg){toast.textContent=msg;toast.classList.add('show');clearTimeout(showToast.t);showToast.t=setTimeout(()=>toast.classList.remove('show'),2000)}
document.querySelectorAll('.copy-discord').forEach(btn=>btn.addEventListener('click',async()=>{try{await navigator.clipboard.writeText('catmozzi_');showToast('catmozzi_ 복사 완료')}catch(e){showToast('catmozzi_ 를 직접 복사해주세요')}}));
const glow=document.querySelector('.cursor-glow');let tx=innerWidth/2,ty=innerHeight/2,x=tx,y=ty;addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY});function anim(){x+=(tx-x)*.18;y+=(ty-y)*.18;glow.style.transform=`translate(${x-18}px,${y-18}px)`;requestAnimationFrame(anim)}anim();setPage(0);
