let botones=window.document.querySelectorAll("#catalogo > article > button");
/*Agregar el escucha del evento clic ejecutar metodo*/ 
botones.forEach(element => {
    element.addEventListener("click",agregarcarrito);
});


/*Metodo para agreagr el producto al carrito*/
    function agregarcarrito(producto){
        /*Conseguir los datos de mi carrito */
    let tituloproducto = producto.target.parentElement.querySelector("h3");
    let precioProducto = producto.target.parentElement.querySelector("p");
    let imagenProducto = producto.target.parentElement.querySelector("picture");
    /*Ahora colocar en el modal*/
    let modalCuerpo = document.querySelector("#ventanacarrito > div > div > div.modal-body");

     /*Conseguir los datos de mi producto */

        /*Condicional para saber si esta vacio */
        if(modalCuerpo.querySelector("p").innerHTML=="Su carrito esta actualmente vacio."){
            modalCuerpo.innerHTML="";
        }
        modalCuerpo=modalCuerpo.innerHTML+="<h3>"+tituloproducto.innerHTML+"</h3><p>"+precioProducto.innerHTML+"</p>"+imagenProducto.innerHTML+"</p>";
        alert("Se agrego correctamente al carrito");

    }

