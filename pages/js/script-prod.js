/*async function loadItems(id) {
    try {
      const response = await fetch(`http://localhost:3000/vestuario/`+id);
      const data = await response.json();
      const vestuario = data.product; // Array de produtos


      vestuario.forEach(vestuario => {
        const option = document.createElement('div');
        const productHTML = `

            <div class="row gx-4 gx-lg-5 align-items-center">
                <div class="col-md-6">
                    <img class="card-img-top mb-5 mb-md-0" src="/./img/Produtos/Roupas/camisa-dark-lab.png" alt="..." />
                </div>
                <div class="col-md-6">
                    <div class="small mb-1"></div>
                    <h1 class="display-5 fw-bolder">${vestuario.name}</h1>
                    <div class="d-flex justify-content-start small text-warning mb-2">
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <a href="#" class="link-warning link-offset-2 link-underline-none strong mx-3">Veja as avaliações</a>
                    </div>

                    <div class="fs-5 mb-2">
                        <span class="text-decoration-line-through h5 text-danger">R$99.00</span>
                        <span class="h2">R$89.00</span>
                    </div>

                    <div class="d-flex">
                        <span class="text-danger f-bold fs-6">3x de R$9,97 sem juros</span>
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
                        A Nova Camiseta Dark Lab chegou, fabricada com o tecido Dry-Fit de mais alta qualidade para se ajustar perfeitamente ao corpo, garantindo conforto e mobilidade em todos os momentos, ideal para práticas esportivas.

                        Seu tecido de microfibras de poliéster proporciona altíssima dispersão do calor do corpo, aumentando a evaporação de suor, além de pesar aproximadamente 30% a menos que os tecidos convencionais.

                        Por que treinar sem estilo? Se você pode treinar com estilo e com qualidade Dark Lab!
                    </p>
                </div>
            </div>
                          
              `;
                const selectBox = document.getElementById('1');
                selectBox.innerHTML += productHTML;
      });


    }
    catch (error) {
      console.error('Error loading pratos:', error);
    }

  }
  window.onload = loadItems;*/