async function pullAcessories() {
    const idLocalStorage = localStorage.getItem('Id');
    if (!idLocalStorage) {
        alert('ID do produto não encontrado.');
        return;
    }

    const id =  parseInt(idLocalStorage, 10);
    if (id) {
      const response = await fetch(`http://localhost:3000/acessories/${id}`);
      if (response.ok) {
        const acessorios = await response.json();
        const acessoriesItems = acessorios.acessories;
        const promotion = parseFloat(acessoriesItems.promotion);

        const promo = promotion == 0 ? "" : "R$" + promotion.toFixed(2);
        const price = parseFloat(acessoriesItems.price);

        
        const parcela = ( price / 3 );

        const productHTML = `

            <div class="row gx-4 gx-lg-5 align-items-center img-wrapper">
                <div class="col-md-6 box">
                    <img class="card-img-top mb-5 mb-md-0 cursor-zoom-in img-zoom" src="/./img/Produtos/Acessórios/${acessoriesItems.image}" alt="..." />
                </div>
                <div class="col-md-6">
                    <div class="small mb-1"></div>
                    <h1 class="display-5 fw-bolder">${acessoriesItems.name}</h1>
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
                        <span class="h2">R$${acessoriesItems.price.toFixed(2)}</span>
                    </div>

                    <div class="d-flex">
                        <span class="text-danger f-bold fs-6">3x de R$${parcela.toFixed(2)} sem juros</span>
                    </div>
                    
                    <div class="d-flex">
                        <span class="text-danger f-bold fs-6"> 3% de desconto</span>
                        <span class="f-bold fs-6 mx-1">no Pix</span>
                    </div>

                    <div class="d-flex my-4">

                        <input id="form1" min="0" name="quantity" value="1" type="number" class="form-control fs-5 text-center form-width-15 form-control-sm form-quantity me-sm-5" />


                    <button class="btn btn-outline-dark flex-shrink-0 form-button" id="btn-cart" type="button" onclick="addToCart(${acessoriesItems.id})">
                        <i class="bi-cart-fill me-1"></i>
                        Adicionar ao Carrinho
                    </button>

                        
                    </div>
                    <p class="lead">
                        ${acessoriesItems.description}
                    </p>
                </div>
            </div>
                          
            `;
            document.querySelector('.add-html').innerHTML += productHTML;

            const btnCart = document.getElementById('btn-cart');
            btnCart.addEventListener('click', (e) => {
                e.preventDefault();
                const valueInput = document.querySelector('.form-quantity').value;
                const valueSelect = document.querySelector('.value-select').value;
                console.log(valueInput)
                console.log(valueSelect)
                if(  valueSelect === 0  ){
                    alert(`Não temos tamanho ${acessoriesItems.size} mais disponível no estoque, escolha outro tamanho.`)
                }
                if( valueInput > acessoriesItems.stock ){
                    alert(`A quantidade que você selecionou não temos disponível no estoque. Estoque: ${acessoriesItems.stock}`)
                }
                    alert('Produto adicionado ao carrinho.')
            })
        } else {
          alert('Erro ao buscar a roupa. Verifique se o ID está correto.');
        }
    }
}

window.onload = pullAcessories;
