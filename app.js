// app.js - جدید

// تنظیمات و انیمیشن‌های مورد نظر
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.my-button');
  button.addEventListener('click', () => {
    alert("دکمه کلیک شد!");
  });
  
  // انیمیشن‌های ساده برای بخش‌های مختلف سایت
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.transition = "all 0.5s ease-in-out";
    section.addEventListener('mouseover', () => {
      section.style.transform = "scale(1.05)";
    });
    section.addEventListener('mouseout', () => {
      section.style.transform = "scale(1)";
    });
  });
});
