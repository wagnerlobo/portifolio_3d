
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onClick = () =>  {

        const pageTurnId = el.getAtribute('data-page');
        const pageTurn = document.getElementById('pageTurnId');

        if (pageTurn.classList.contains('turn')) {

            pageTurn.classList.remove('turn');

            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
     else { 

        pageTurn.classList.add('turn');
        setTimeout(() => {
            pageTurn.style.zIndex = 20 + index;
        }, 500)

    }
  }
})

const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onClick = () => {

    pages.forEach((pages, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                pages.style.zIndex = 20 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
           
    })

           
}

