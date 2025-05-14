// Переключение табов
document.querySelectorAll('.tabs__item').forEach(tab => {
  tab.addEventListener('click', () => {
    // Убираем активный класс у всех табов
    document.querySelectorAll('.tabs__item').forEach(item => {
      item.classList.remove('tabs__item--active');
    });

    // Добавляем активный класс текущему табу
    tab.classList.add('tabs__item--active');

    // Скрываем все секции
    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.remove('active');
    });

    // Показываем выбранную секцию
    const targetTab = tab.getAttribute('data-tab');
    document.getElementById(targetTab).classList.add('active');
  });
});

// Активация/деактивация слайдера
window.addEventListener('resize', checkSlider);
checkSlider();

function checkSlider() {
  const productSlider = document.querySelector('.product-slider');
  const productCards = productSlider.querySelectorAll('.product-card');
  let totalWidth = 0;

  productCards.forEach(card => {
    totalWidth += card.offsetWidth + 20; // Ширина карточки + отступ
  });

  if (totalWidth > productSlider.offsetWidth) {
    productSlider.style.overflowX = 'auto'; // Активируем прокрутку
  } else {
    productSlider.style.overflowX = 'hidden'; // Отключаем прокрутку
  }
}