// --- Навігація (Гамбургер) ---
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// --- Модальне вікно ---
const modalOverlay = document.querySelector('.modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const closeModalBtn = document.querySelector('.close-modal');

// Знаходимо всі кнопки "Інфо"
const openModalBtns = document.querySelectorAll('.open-modal');

// Додаємо подію кліку на кожну кнопку
openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 1. Беремо текст з атрибутів data-name та data-desc
        const heroName = btn.getAttribute('data-name');
        const heroDesc = btn.getAttribute('data-desc');

        // 2. Вставляємо цей текст у модальне вікно
        modalTitle.textContent = heroName;
        modalDesc.textContent = heroDesc;

        // 3. Показуємо вікно
        modalOverlay.classList.add('active');
        modalOverlay.setAttribute('aria-hidden', 'false');

        // Коротка візуальна анімація натискання кнопки
        btn.classList.add('pressed');
        setTimeout(() => btn.classList.remove('pressed'), 120);
    });
});

// Функція закриття вікна
const closeModal = () => {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
};

// Закриваємо при кліку на хрестик
closeModalBtn.addEventListener('click', closeModal);

// Закриваємо при кліку на темний фон навколо вікна
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Закрити модалку клавішею Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
        if (modalOverlay.classList.contains('active')) {
            closeModal();
        }
    }
});