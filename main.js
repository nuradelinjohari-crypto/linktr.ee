// Ripple effect on link buttons
document.querySelectorAll('.link-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = `
      position:absolute;
      width:${size}px;height:${size}px;
      left:${e.clientX - rect.left - size / 2}px;
      top:${e.clientY - rect.top - size / 2}px;
      background:rgba(167,139,250,0.15);
      border-radius:50%;
      transform:scale(0);
      animation:ripple 0.5s linear;
      pointer-events:none;
    `;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 500);
  });
});

const style = document.createElement('style');
style.textContent = `@keyframes ripple{to{transform:scale(2.5);opacity:0}}`;
document.head.appendChild(style);
