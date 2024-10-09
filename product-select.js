document.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', function() {
      // Exibir o seletor de quantidade
      const quantitySelector = document.getElementById('quantity-selector');
      quantitySelector.style.display = 'flex';
      
      // Opcional: Alinhar o seletor de quantidade ao item clicado
      const rect = item.getBoundingClientRect();
      quantitySelector.style.position = 'absolute';
      quantitySelector.style.top = rect.bottom + 'px';
      quantitySelector.style.left = rect.left + 'px';
      
      // Armazenar qual produto está sendo selecionado
      quantitySelector.setAttribute('data-selected-product', item.dataset.product);
    });
  });
  
  // Botão de incremento e decremento
  let quantityInput = document.getElementById('quantity');
  document.getElementById('increment').addEventListener('click', function() {
    quantityInput.value = parseInt(quantityInput.value) + 1;
  });
  
  document.getElementById('decrement').addEventListener('click', function() {
    if (parseInt(quantityInput.value) > 0) {
      quantityInput.value = parseInt(quantityInput.value) - 1;
    }
  });
  