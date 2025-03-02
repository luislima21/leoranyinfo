// Aqui você pode adicionar funcionalidades interativas, como adicionar produtos ao carrinho

document.querySelectorAll('.product button').forEach(button => {
  button.addEventListener('click', () => {
    alert('Produto adicionado ao carrinho!');
  });
});
