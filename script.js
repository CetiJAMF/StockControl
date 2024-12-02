// Adiciona um evento ao formulário para tratar o envio
document.getElementById('add-product-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário recarregue a página ao ser enviado

    // Captura os valores inseridos pelo usuário
    const name = document.getElementById('name').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;

    // Localiza a tabela de produtos e adiciona uma nova linha no corpo
    const table = document.getElementById('products-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(); // Cria uma nova linha na tabela

    // Adiciona células na nova linha e insere os valores
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.textContent = table.rows.length; // Define o ID com base no número de linhas
    cell2.textContent = name; // Nome do produto
    cell3.textContent = quantity; // Quantidade do produto
    cell4.textContent = price; // Preço do produto

    // Limpa os campos do formulário após adicionar o produto
    document.getElementById('name').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('price').value = '';
});
