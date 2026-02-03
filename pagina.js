// Listar todas as notas
let lista_notas = []

// Organizando os id's para o JS
const notas = document.getElementById('notas_id')
const textarea = document.getElementById('caixa_de_texto')
const botao_calcular = document.getElementById('calcular_media')
const resultado = document.getElementById('resultado')
const botao_add = document.getElementById('add_notas')

// Botão Adicionar
botao_add.addEventListener('click', function() {
    let valorDigitado = notas.value.trim() // o '.trim()' remove espaços em branco
    valorDigitado = valorDigitado.replace(',', '.')    // Aceitar vírgula ou ponto

    let nota = Number(valorDigitado);   // Trasformar 'str' em 'Number'

    // Verificar se o valor é ou não é um número
    if (valorDigitado === '' || isNaN(nota)) {  // 'isNaN' = 'is not a number'
        alert('Digite uma nota válida')
        return;
    }

    lista_notas.push(nota)    // Guardar os novos valores na lista

    notas.value = ''   // Limpar o input

    atualizar_caixa_de_texto()
});

// Calcular a média
botao_calcular.addEventListener('click', function() {
    if (lista_notas.length === 0) {
        resultado.textContent = 'A média é:'
        return;
    }

    let soma = 0;

    for (let i = 0; i < lista_notas.length; i++) {
        soma += lista_notas[i];
    }

    let media = soma / lista_notas.length

    resultado.textContent = `A média é: ${media.toFixed(2)}`
});

// Mostrar as notas na caixa de texto
function atualizar_caixa_de_texto() {
    textarea.value = ''

    for (let i = 0; i < lista_notas.length; i++) {
        textarea.value += `A ${i + 1}º nota foi ${lista_notas[i]}\n`
    }
}
