
function randomText() {
  const text = ['Adobe', 'Pr', 'Ps', 'Id', 'Ae', 'Ai']; 
  const letter=text[Math.floor(Math.random()*text.length)];
  return letter;
}
function rain(){
  const cloud = document.querySelector('.cloud');
  const e=document. createElement('div');
  const left=Math.floor(Math.random()*310);
  const size = Math.random()*1.5;
  const duration= Math.random()*1;
  const text = randomText();
  e.classList.add('text');
  e.innerText=text;
  e.style.left=left+'px';
  e.style.fontSize= 0.5+size+'em';
  e.style.animationDuration=1+duration+'s';
  cloud.appendChild(e);
  setTimeout(() => {
    cloud.removeChild(e);
  }, 2000);
}
setInterval(rain,20);

// 获取按钮、视频弹出框和遮罩
const showVideoBtn = document.getElementById('show-video-btn');
const videoPopup = document.getElementById('video-popup');
const overlay = document.getElementById('overlay');

// 点击按钮显示视频
showVideoBtn.addEventListener('click', function() {
  videoPopup.style.display = 'block'; // 显示视频弹出框
  overlay.style.display = 'block'; // 显示背景遮罩
});

// 点击遮罩关闭视频
overlay.addEventListener('click', function() {
  videoPopup.style.display = 'none'; // 隐藏视频弹出框
  overlay.style.display = 'none'; // 隐藏背景遮罩
});

document.addEventListener("scroll", function () {
  const paragraphs = document.querySelectorAll(".section_paragraph");
  paragraphs.forEach((paragraph) => {
    if (isInView(paragraph)) {
      paragraph.classList.add("section_paragraph--visible");
    }
  });
});
document.addEventListener("scroll", function () {
  const paragraphs = document.querySelectorAll(".section_paragraph2");
  paragraphs.forEach((paragraph2) => {
    if (isInView(paragraph2)) {
      paragraph2.classList.add("section_paragraph2--visible");
    }
  });
});

function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
  );
}