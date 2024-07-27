async function loadItems() {
    const response = await fetch('http://localhost:3000/suplements');
        if (response.ok) {
            const suplement = await response.json();
            const suplementItems = suplement.suplement;

            let parcela = ( suplementItems.price / 3 );
            let cont = 1;
            suplementItems.forEach(suplementItems => {
            const suplementHTML = `
    
                    <div class="col mb-5" onclick="storeAndRedirect(${cont})"> 
                        <a class="text-black text-decoration-none" href="Produtos/produto-suplementos.html">
                            <div class="card h-100 transform-scale-0">
                                <!-- Product image-->
                                
                                <img class="card-img-top" src="../img/Produtos/Suplementos/${suplementItems.image}" alt="..." />
                                
                                <!-- Product details-->
                                <div class="card-body p-4">
                                    <div class="text-center">
                                        <!-- Product name-->
                                        
                                        <h5 class="fw-bolder">${suplementItems.nameProduct + " " + suplementItems.weight + " - " + suplementItems.marca }</h5>
                                        
                                        <!-- Product price-->
                                        <p class="p-1 d-inline inter text-muted text-decoration-line-through old-price"> R$${suplementItems.promotion.toFixed(2)}  </p>
                                        <p class="p-1 d-inline inter new-price">R$${suplementItems.price.toFixed(2)}</p>
    
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
                    if(suplementItems.suplementClass == "Aminoácidos"){
                    const selectBox = document.getElementById('suplementos-aminoacidos');
                    selectBox.innerHTML += suplementHTML;
    
                    }else if(suplementItems.suplementClass == "Carboidratos"){
                    const selectBox = document.getElementById('suplementos-carboidratos');
                    selectBox.innerHTML += suplementHTML;
                    }
                    else if(suplementItems.suplementClass == "Proteína"){
                    const selectBox = document.getElementById('suplementos-proteinas');
                    selectBox.innerHTML += suplementHTML;
                    }
                    else if(suplementItems.suplementClass == "Termogênicos"){
                    const selectBox = document.getElementById('suplementos-termogenicos');
                    selectBox.innerHTML += suplementHTML;
                    }
                    else if(suplementItems.suplementClass == "Pré-treino"){
                    const selectBox = document.getElementById('suplementos-pretreino');
                    selectBox.innerHTML += suplementHTML;
                    }
                    else if(suplementItems.suplementClass == "Vitaminas"){
                    const selectBox = document.getElementById('suplementos-vitaminas');
                    selectBox.innerHTML += suplementHTML;
                    }
                    else if(suplementItems.suplementClass == "Combos"){
                    const selectBox = document.getElementById('suplementos-combos');
                    selectBox.innerHTML += suplementHTML;
                    }
                cont = cont + 1
            });
        } else {
            alert('Erro ao buscar a roupa. Verifique se o ID está correto.');
        }
}
    

  
  window.onload = loadItems;