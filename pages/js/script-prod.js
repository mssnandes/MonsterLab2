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
        console.log(promotion);
        const promo = promotion == 0 ? "" : "R$" + promotion.toFixed(2);
        const price = parseFloat(clothingItems.price);

        
        const parcela = ( price / 3 );
        console.log(Number.isInteger(price))
        const productHTML = `

            <div class="row gx-4 gx-lg-5 align-items-center">
                <div class="col-md-6 zoom-container">
                    <img class="card-img-top mb-5 mb-md-0 cursor-zoom-in" src="/./img/Produtos/Vestuário/${clothingItems.image}" alt="..." />
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
                        <span class="text-decoration-line-through h5 text-danger">${promo}</span>
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
                        <select class="form-select pointer form-width-15" aria-label="Default select example">
                            <option selected></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>

                        <div class="form-floating form-width-25 mx-3">
                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                              <option selected></option>
                              <option value="1">PP</option>
                              <option value="2">P</option>
                              <option value="3">M</option>
                              <option value="4">G</option>
                              <option value="5">GG</option>
                            </select>
                            <label for="floatingSelect">Tamanho</label>
                        </div>

                        <button class="btn btn-outline-dark flex-shrink-0 form-button" type="button">
                            <i class="bi-cart-fill me-1"></i>
                            Comprar
                        </button>

                        
                    </div>
                    <p class="lead">
                        ${clothingItems.description}
                    </p>
                </div>
            </div>
                          
            `;
            document.querySelector('.add-html').innerHTML += productHTML;
        } else {
          alert('Erro ao buscar a roupa. Verifique se o ID está correto.');
        }
    }
}

window.onload = pullClothing;