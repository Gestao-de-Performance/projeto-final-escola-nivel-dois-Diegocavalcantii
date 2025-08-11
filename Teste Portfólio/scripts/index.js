const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
      const body = accordion.querySelector('.accordion-Body');
      body.classList.toggle('active');
    })
})



const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
        entry.target.classList.add('show')
    } else {
        entry.target.classList.remove('show')
    }
  })
})

const elements = document.querySelectorAll('.hidden');

elements.forEach((element) => myObserver.observe(element));
