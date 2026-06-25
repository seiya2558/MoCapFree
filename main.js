// =======================================
// MoCap Free
// main.js
// =======================================

// ---------------------------
// Intersection Observer
// フェードインアニメーション
// ---------------------------

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section, .hero-card, .card").forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// ---------------------------
// 現在開いているページを
// ナビでハイライト
// ---------------------------

const navLinks = document.querySelectorAll("nav a");

const currentPage = location.pathname.split("/").pop() || "index.html";

navLinks.forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage) {

        link.classList.add("active");

    }

});

// ---------------------------
// ボタンホバー演出
// ---------------------------

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-4px) scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "";

    });

});

// ---------------------------
// フッターの年を自動更新
// ---------------------------

const footerYear = document.querySelector(".footer-year");

if (footerYear) {

    footerYear.textContent = new Date().getFullYear();

}

// ---------------------------
// コンソール表示
// ---------------------------

console.log(
"%cMoCap Free Beta v0.1",
"color:#00e5ff;font-size:22px;font-weight:bold;"
);

console.log("Motion Capture in Your Browser");

// ---------------------------
// スクロール時に
// ヘッダー背景を変更
// ---------------------------

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("header-scroll");

    } else {

        header.classList.remove("header-scroll");

    }

});

// ---------------------------
// Hero文字を順番に表示
// ---------------------------

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// ---------------------------
// マウス追従ライト
// ---------------------------

const glow = document.createElement("div");

glow.className = "cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove", e => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

// ---------------------------
// カードを少し浮かせる
// ---------------------------

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.transform =
            `rotateX(${-(y-rect.height/2)/25}deg)
             rotateY(${(x-rect.width/2)/25}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

// ---------------------------
// CSSをJSから追加
// ---------------------------

const style = document.createElement("style");

style.textContent = `

.hidden{

opacity:0;

transform:translateY(50px);

transition:.8s ease;

}

.show{

opacity:1;

transform:translateY(0);

}

.active{

color:var(--accent);

font-weight:700;

}

.header-scroll{

background:rgba(10,10,20,.95);

backdrop-filter:blur(18px);

transition:.4s;

}

.loaded .hero h1{

animation:fadeHero .9s ease;

}

@keyframes fadeHero{

from{

opacity:0;

transform:translateY(25px);

}

to{

opacity:1;

transform:translateY(0);

}

}

.cursor-glow{

position:fixed;

width:300px;

height:300px;

pointer-events:none;

background:radial-gradient(circle,
rgba(0,229,255,.18),
transparent 70%);

transform:translate(-50%,-50%);

filter:blur(40px);

z-index:-1;

transition:.08s;

}

`;

document.head.appendChild(style);
// =============================
// Loading
// =============================

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},800);

},1400);

});

// =============================
// Scroll Progress
// =============================

window.addEventListener("scroll",()=>{

const progress=document.getElementById("scroll-progress");

const h=document.documentElement;

const percent=(h.scrollTop)/(h.scrollHeight-h.clientHeight)*100;

progress.style.width=percent+"%";

});

// =============================
// Back To Top
// =============================

const topBtn=document.getElementById("backTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});