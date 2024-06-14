function updateTimeDate() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `Time: ${hours}:${minutes}:${seconds}`;

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const dateString = `Date: ${year}-${month}-${day}`;

    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

// JavaScript代码可以根据需要进行修改，实现下拉选项的交互功能

document.addEventListener("DOMContentLoaded", function() {
    const customSelects = document.querySelectorAll('.custom-select');
  
    customSelects.forEach(select => {
      const selectedOption = select.querySelector('.selected-option');
      const optionsContainer = select.querySelector('.select-options');
      const optionsList = optionsContainer.querySelectorAll('li');
  
      selectedOption.addEventListener('click', () => {
        select.classList.toggle('open');
      });
  
      optionsList.forEach(option => {
        option.addEventListener('click', () => {
          selectedOption.textContent = option.textContent;
          select.classList.remove('open');
        });
      });
  
      document.addEventListener('click', (e) => {
        if (!select.contains(e.target)) {
          select.classList.remove('open');
        }
      });
    });
  });
  

setInterval(updateTimeDate, 1000);
updateTimeDate(); // 初始化時立即顯示時間和日期

document.getElementById('clickableDiv').addEventListener('click', function() {
    window.location.href = 'notepage.html'; // 替换为你希望的URL
});
document.getElementById('clickToAddNote').addEventListener('click', function() {
    localStorage.removeItem('editIndex');
    window.location.href = 'noteadd.html';
});
document.getElementById('clickToAddCalendar').addEventListener('click', function() {
    window.location.href = 'calendar2.html'; // 替换为你希望的URL
});


const containerWidth = document.querySelector('.container').clientWidth;

// 设置想要的横向偏移量（这里假设是容器宽度的一半）
const desiredHorizontalOffset = containerWidth / 2;

// 设置容器的 left 偏移量
document.querySelector('.container').style.left = `-${desiredHorizontalOffset}px`;