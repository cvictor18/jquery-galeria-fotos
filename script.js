const form = $('form')

$(document).ready(function() {
// código que depende do jQuery

$('header button').click(function(){
    form.slideDown()
})

$('button:last').click(function() {
    form.slideUp()
})

form.on('submit', function(e) {
    e.preventDefault()
    const enderecoDaNovaImagem = $('#endereco-imagem-nova').val()
    const novoItem = $('<li style="display: none"></li>')
    $(`<img src="${enderecoDaNovaImagem}" >`).appendTo(novoItem)
    $(`
        <div class="overlay-imagem-link" >
            <a 
                href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
        </div>
    `).appendTo(novoItem)
    $(novoItem).appendTo('ul').fadeIn(1000)
    $('input[type=url]').val('')
    /*let novaImg = '<li>'
    novaImg += `<img src="${enderecoDaNovaImagem}">`
    novaImg += '<div class="overlay-imagem-link">'
    novaImg += `<a href="${enderecoDaNovaImagem}" title="Ver imagem em tamanho real" target="_blank"> Ver imagem em tamanho real</a>`
    novaImg += '</div>'
    novaImg += '</li>'
    const ul = $('ul')
    ul.append(novaImg)*/
})

})

/*mesmo preventDefault sem uso do jQuery
const form = document.querySelector('form')
form.addEventListener('submit', function(e) {
    e.preventDefault()
    form.innerHTML = ''
})
*/

/* mesma função sem o uso do jQuery
document.querySelector('header button').addEventListener('click', function() {
    window.alert('fui clicado')
})
*/