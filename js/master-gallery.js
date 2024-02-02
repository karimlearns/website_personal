// Start Nav Links
let navLinks = document.querySelectorAll('#navLinks ul li');

let arrayContentsWrapper = Array.from(document.querySelectorAll('#wrapper .content'));

navLinks.forEach(link => {

    link.addEventListener('click', (e) => {

        document.querySelector('#navLinks ul .active')?.classList.remove('active');

        e.target.classList.add('active');

        for (let i = 0; i < arrayContentsWrapper.length; i++) {

            arrayContentsWrapper[i].classList.remove('active');

        }

        arrayContentsWrapper[e.target.dataset.pos].classList.add('active');

    })

});

// End Nav Links
// Start Footer
document.querySelector('#currentYear').innerHTML = new Date().getFullYear();
// End Footer