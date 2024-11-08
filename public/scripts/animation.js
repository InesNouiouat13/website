document.addEventListener('DOMContentLoaded', function () {
    const text = "Hi, I am Ines Nouiouat a software engineer.";
    const mainTitle = document.getElementById('main-title');
    let index = 0;
  
    function typeEffect() {
      if (index < text.length) {
        mainTitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
      } else {
        mainTitle.style.borderRight = 'none'; 
      }
    }
  
    mainTitle.textContent = "";
    typeEffect();
  });