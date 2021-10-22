const date = new Date()
const currentYear = date.getFullYear();

const copyright = `Copyright &copy ${currentYear} C4ArtZ - Alle Rechte vorbehalten.`

const textElement = document.querySelector('#copyright');

textElement.innerHTML = copyright;