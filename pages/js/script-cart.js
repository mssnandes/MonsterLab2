async function loadItemsCart() {
    const response = await fetch('http://localhost:3000/cartItems');
        if (response.ok) {
            const cart = await response.json();
            const cartItems = cart.itemsCart;
            let label = "";
            let labelValue = "";
            
            cartItems.forEach(cartItems => {
              
              if( (cartItems.size == "" && cartItems.sabor == "" ) ){
                label = "";
                labelValue = "";
              }else if (!(cartItems.size == "")){
                label = "Tamanho:";
                labelValue = cartItems.size;
              }else if (!(cartItems.sabor == "")){
                label = "Sabor:";
                labelValue = cartItems.sabor;
              }
            
            const cartItemsHTML = ` 
                          <div id="id-item-${cartItems.id}">
                            <hr class="my-4">
                            <div class="row mb-4 d-flex justify-content-between align-items-center">
                              <div class="col-md-2 col-lg-2 col-xl-2">
                                  <img
                                  src="../img/Produtos/${cartItems.type}/${cartItems.image}"
                                  class="img-fluid rounded-3" alt="">
                              </div>
                              <div class="col-md-3 col-lg-3 col-xl-3">
                                <h6 class="text-muted">${label} ${labelValue}</h6>
                                <h6 class="text-muted"></h6>
                                <h6 class="mb-0">${cartItems.name}</h6>
                              </div>
                              <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
                                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                  <i class="fas fa-minus"></i>
                                </button>
          
                                <input id="form1" min="0" name="quantity" value="1" type="number"
                                  class="form-control form-control-sm" />
          
                                <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
                                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                  <i class="fas fa-plus"></i>
                                </button>
                              </div>
                              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h6 class="mb-0 price" value="${cartItems.price.toFixed(2)}">R$${cartItems.price.toFixed(2)}</h6>
                              </div>
                              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
                              </div>
                              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                <button class="btn btn-dark" onclick="deleteCartItem(${cartItems.id})">
                                  <i class="bi bi-trash-fill"></i>
                                </button>
                              </div>
                            </div>        
                          </div>
            
                    `;
                  

                    document.querySelector('.cart-items-add-html').innerHTML += cartItemsHTML;
            });
        } else {
            alert('Erro ao buscar a roupa. Verifique se o ID está correto.');
        }
}
  window.onload = loadItemsCart;

  async function deleteCartItem(itemId) {
    try {
      // Envia a solicitação para o backend para deletar o item do banco de dados
      const response = await fetch(`http://localhost:3000/cart/${itemId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      // Verifica se a resposta é bem-sucedida
      if (response.ok) {
        // Remove a div do DOM
        const element = document.getElementById(`id-item-${itemId}`);
        element.remove();
      } else {
        console.error('Erro ao deletar o item do carrinho.');
      }
    } catch (error) {
      console.error('Erro ao realizar a operação de deletar:', error);
    }
  }
  


function updateTotalValue() {
  const priceElements = document.querySelectorAll('.price');
  let total = 0;

  priceElements.forEach(element => {
    const price = parseFloat(element.getAttribute('value'));
    console.log(price);
    if (price) {
      total += price;
    }
  });

  const valueTotal = document.getElementById("totalItemsValue");
  valueTotal.innerHTML = `R$ ${total.toFixed(2)}`;
  
  const valueSubTotal = document.getElementById("subtotalValue");
  realValue = total + 20;
  valueSubTotal.innerHTML = `R$ ${realValue.toFixed(2)}`;
}

// Executa a função `updateTotalValue` a cada 1 segundo (1000 milissegundos)
setInterval(updateTotalValue, 100);
