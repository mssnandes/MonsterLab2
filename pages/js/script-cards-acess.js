async function loadItems() {
    const response = await fetch('http://localhost:3000/acessories');
        if (response.ok) {
            const acessorios = await response.json();
            const acessoriesItems = acessorios.acessories;

            let parcela = ( acessoriesItems.price / 3 );
            let cont = 1;
            acessoriesItems.forEach(acessoriesItems => {
            const acessoriesHTML = `
    
                    <div class="col mb-5" onclick="storeAndRedirect(${cont})"> 
                        <a class="text-black text-decoration-none" href="Produtos/produto-acessorios.html">
                            <div class="card h-100 transform-scale-0">
                                <!-- Product image-->
                                
                                <img class="card-img-top" src="../img/Produtos/Acessórios/${acessoriesItems.image}" alt="..." />
                                
                                <!-- Product details-->
                                <div class="card-body p-4">
                                    <div class="text-center">
                                        <!-- Product name-->
                                        
                                        <h5 class="fw-bolder">${acessoriesItems.name}</h5>
                                        
                                        <!-- Product price-->
                                        <p class="p-1 d-inline inter text-muted text-decoration-line-through old-price"> R$${acessoriesItems.promotion.toFixed(2)}  </p>
                                        <p class="p-1 d-inline inter new-price">R$${acessoriesItems.price.toFixed(2)}</p>
    
                                        <span class="p-1 d-block inter old-price">3x de R$${parcela.toFixed(2)} sem juros</span>
                                    </div>
                            </div>
                        <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">+ Carrinho</a></div>
                            </div>
                            </div>
                        </a>
                    </div>
                                
                    `;
                    
                document.getElementById('add-html').innerHTML += acessoriesHTML;
                cont = cont + 1
            });
        } else {
            alert('Erro ao buscar a roupa. Verifique se o ID está correto.');
        }
}
    

  
  window.onload = loadItems;