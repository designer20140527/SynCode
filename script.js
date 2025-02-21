document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    // 设置初始状态
    accordionButtons.forEach((button, index) => {
        if (index === 0) {
            button.setAttribute('aria-expanded', 'true');
            button.nextElementSibling.classList.add('active');
        } else {
            button.setAttribute('aria-expanded', 'false');
            button.nextElementSibling.classList.remove('active');
        }
    });
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            
            // Close all other items
            accordionButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.setAttribute('aria-expanded', 'false');
                    otherButton.nextElementSibling.classList.remove('active');
                }
            });
            
            // Toggle current item
            button.setAttribute('aria-expanded', !isExpanded);
            content.classList.toggle('active');
        });
    });

    const cta = document.querySelector('.cta');
    const glow = document.querySelector('.cta-glow');
    
    if (cta && glow) {
        cta.addEventListener('mousemove', (e) => {
            const rect = cta.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            glow.style.left = `${x}px`;
            glow.style.top = `${y}px`;
        });
        
        // 鼠标离开时，光晕回到中心
        cta.addEventListener('mouseleave', () => {
            glow.style.left = '50%';
            glow.style.top = '50%';
        });
    }
});

// 添加滚动动画
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-up, .fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // 当元素进入视口时添加active类
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            element.classList.add('active');
        }
    });
}

// 监听滚动事件
window.addEventListener('scroll', handleScrollAnimation);
// 初始检查
handleScrollAnimation(); 