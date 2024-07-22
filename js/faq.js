const faqs = document.querySelectorAll('.faq-questions');

faqs.forEach(faq =>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle("active");
    })
})