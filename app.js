const logo = document.querySelectorAll('#logo path')

logo.forEach((letter,i) => {
    console.log(letter.getTotalLength())
})