const labels = [...document.querySelectorAll('.label')];
const contents = [...document.querySelectorAll('.content')];

labels.forEach((label) => {
    label.addEventListener('click', (e) => {
        label.nextElementSibling.classList.toggle('show')
    })
})

