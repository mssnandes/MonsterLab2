async function pullClothing() {
    const idLocalStorage = localStorage.getItem('Id');
    if (!idLocalStorage) {
        alert('ID do produto não encontrado.');
        return;
    }

    const id =  parseInt(idLocalStorage, 10);
    if (id) {
      const response = await fetch(`http://localhost:3000/vestuario/${id}`);
      if (response.ok) {
        const vestuario = await response.json();
        const clothingItems = vestuario.clothing;

        const promotion = parseFloat(clothingItems.promotion);

        const promo = promotion == 0 ? "" : "R$" + promotion.toFixed(2);
        const price = parseFloat(clothingItems.price);

        
        const parcela = ( price / 3 );

        const productHTML = `

            <div class="row gx-4 gx-lg-5 align-items-center img-wrapper">
                <div class="col-md-6 box">
                    <img class="card-img-top mb-5 mb-md-0 cursor-zoom-in img-zoom" src="/./img/Produtos/Vestuário/${clothingItems.image}" alt="..." />
                </div>
                <div class="col-md-6">
                    <div class="small mb-1"></div>
                    <h1 class="display-5 fw-bolder">${clothingItems.name}</h1>
                    <div class="d-flex justify-content-start small text-warning mb-2">
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <a href="#" class="link-warning link-offset-2 link-underline-none strong mx-3">Veja as avaliações</a>
                    </div>

                    <div class="fs-5 mb-2">
                        <span class="text-decoration-line-through h5 text-danger">${promo} </span>
                        <span class="h2">R$${clothingItems.price.toFixed(2)}</span>
                    </div>

                    <div class="d-flex">
                        <span class="text-danger f-bold fs-6">3x de R$${parcela.toFixed(2)} sem juros</span>
                    </div>
                    
                    <div class="d-flex">
                        <span class="text-danger f-bold fs-6"> 3% de desconto</span>
                        <span class="f-bold fs-6 mx-1">no Pix</span>
                    </div>

                    <div class="d-flex my-4">

                        <input id="form1" min="0" name="quantity" value="1" type="number" class="form-control fs-5 text-center form-width-15 form-control-sm form-quantity" />

                        <div class="form-floating form-width-25 mx-3">
                            <select class="form-select value-select" id="floatingSelect" aria-label="Floating label select example">
                              <option value="PP">PP</option>
                              <option value="P">P</option>
                              <option value="M">M</option>
                              <option value="G">G</option>
                              <option value="GG">GG</option>
                            </select>
                            <label for="floatingSelect">Tamanho</label>
                        </div>
                        
                        <button class="btn btn-outline-dark flex-shrink-0 form-button" id="btn-cart" type="button">
                            <i class="bi-cart-fill me-1"></i>
                            Adicionar ao Carrinho
                        </button>

                        
                    </div>
                    <p class="lead">
                        ${clothingItems.description}
                    </p>
                </div>
            </div>
                          
            `;
            document.querySelector('.add-html').innerHTML += productHTML;

            const btnCart = document.getElementById('btn-cart');
            btnCart.addEventListener('click', async (e) => {
                e.preventDefault();
                const valueInput = document.querySelector('.form-quantity').value;
                const valueSelect = document.querySelector('.value-select').value;
                const typeProduct = "Vestuário";
                if(  valueSelect === 0  ){
                    alert(`Não temos tamanho ${clothingItems.size} mais disponível no estoque, escolha outro tamanho.`)
                    return
                }
                if( valueInput > clothingItems.stock ){
                    alert(`A quantidade que você selecionou não temos disponível no estoque. Estoque: ${clothingItems.stock}`)
                    return
                }
                    const cartItem = {
                        type: typeProduct,
                        name: clothingItems.name,
                        image: clothingItems.image,
                        price: clothingItems.price,
                        quantity: parseInt(valueInput, 10),
                        size: valueSelect,
                        sabor: "",
                    };
                
                    // Enviar os dados para o backend
                    try {
                        const response = await fetch('http://localhost:3000/cart/add', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(cartItem)
                        });
                        if (response.ok) {
                            alert('Produto adicionado ao carrinho.');
                        } else {
                            alert('Erro ao adicionar produto ao carrinho.');
                        }
                    } catch (error) {
                        console.error('Erro:', error);
                        alert('Erro ao conectar com o servidor.');
                    }
            })
        } else {
          alert('Erro ao buscar a roupa. Verifique se o ID está correto.');
        }
    }
}

window.onload = pullClothing;
