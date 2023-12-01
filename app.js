document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.button');

    const result = document.querySelector('.result');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(button.value);
        })
    })
});
