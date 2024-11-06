document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-down');
          observer.unobserve(entry.target); // Para animar apenas uma vez
        }
      });
    }, {
      threshold: 0.2 // Ativa a animação quando 10% do elemento está visível
    });
  
    document.querySelectorAll('.scroll-animate').forEach((element, index) => {
      // Adiciona um delay crescente a cada elemento
      element.classList.add(`delay-${index + 1}`);
      observer.observe(element);
    });
  });