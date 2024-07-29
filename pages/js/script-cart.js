function addToCart(productId) {
            const quantity = document.getElementById('quantity').value;
            fetch('/add-to-cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId, quantity }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }

function updateQuantity(button, change) {
            const productRow = button.closest('.row');
            const productId = productRow.getAttribute('data-product-id');
            const input = productRow.querySelector('input[name="quantity"]');
            let newQuantity = parseInt(input.value) + change;
            
            if (newQuantity < 0) newQuantity = 0;
          
            input.value = newQuantity;
          
            fetch('/cart/add', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                productId: productId,
                quantity: newQuantity
              })
            })
            .then(response => response.json())
            .then(data => {
              console.log('Item atualizado no carrinho:', data);
            })
            .catch((error) => {
              console.error('Erro ao atualizar item no carrinho:', error);
            });
          }
          
function removeItem(button) {
            const productRow = button.closest('.row');
            const productId = productRow.getAttribute('data-product-id');
          
            fetch(`/cart/${productId}`, {
              method: 'DELETE',
            })
            .then(response => response.json())
            .then(data => {
              console.log('Item removido do carrinho:', data);
              productRow.remove();
            })
            .catch((error) => {
              console.error('Erro ao remover item do carrinho:', error);
            });
          }