
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
const logos = document.querySelectorAll('.logo');
const videoPopup = document.getElementById('video-popup');
const overlay = document.getElementById('overlay');
const videoElement = document.getElementById('popup-video');
const videoSource = document.getElementById('video-source');

logos.forEach(logo => {
  logo.addEventListener('click', function () {
    const videoPath = this.getAttribute('data-video');
    if (videoPath) {
      videoSource.src = videoPath;
      videoElement.load();
      videoPopup.style.display = 'block';
      overlay.style.display = 'block';
    }
  });
});

overlay.addEventListener('click', function () {
  videoPopup.style.display = 'none';
  overlay.style.display = 'none';
  videoElement.pause();
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