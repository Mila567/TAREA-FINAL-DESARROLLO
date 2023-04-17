let array_carritoCompras = [];

let botones=window.document.querySelectorAll("#catalogo > article > button");
/*Agregar el escucha del evento clic ejecutar metodo*/ 
botones.forEach(element => {
    element.addEventListener("click",agregarcarrito);
});
    /*Metodo para agreagr el producto al carrito*/
    function agregarcarrito(producto){
        /*Conseguir los datos de mi carrito */
    let tituloproducto = producto.target.parentElement.querySelector("h5");
    let precioProducto = producto.target.parentElement.querySelector("span");
    let imagenProducto = producto.target.parentElement.querySelector("picture");
    /*Ahora colocar en el modal*/
    let modalCuerpo = document.querySelector("#ventanacarrito > div > div > div.modal-body");

     /*Conseguir los datos de mi producto */

        /*Condicional para saber si esta vacio */
        if(modalCuerpo.querySelector("p").innerHTML=="Su carrito esta actualmente vacio."){
            modalCuerpo.innerHTML="";
        }
        modalCuerpo=modalCuerpo.innerHTML+="<h5>"+tituloproducto.innerHTML+"</h5><>"+precioProducto.innerHTML+"</p>"+imagenProducto.innerHTML+"</p>";
        alert("Se agrego correctamente al carrito");
    
        //Se declara el objeto
        var ObjItem = new Object();

        ObjItem.tituloproducto = tituloproducto.innerHTML;
        ObjItem.precioProducto = precioProducto.innerHTML;
        ObjItem.imagenProducto = imagenProducto.innerHTML;

        array_carritoCompras.push(ObjItem);
    }

let a_Carrito_ref = window.document.querySelectorAll("#a_Carrito_ref");
a_Carrito_ref.forEach(element => {
    element.addEventListener("click",Llevar_a_Carrito);
});

    function Llevar_a_Carrito(){
        GuardarDatosCarrito();
        location.href = "Carrito.html";
    }
    function MostrarCarrito(){
        let Carrito_Vista_datos = "";
        let Carrito_Vista = document.querySelector("#Carrito_Vista");
        /*Condicional para saber si esta vacio */
       if(array_carritoCompras.length == 0){
            Carrito_Vista.innerHTML= "<p>Su carrito esta actualmente vacio.</p>";
       }else{
            array_carritoCompras.forEach(function(objItem) {
                Carrito_Vista_datos = Carrito_Vista_datos + "<h5>"+objItem.tituloproducto+"</h5><p>"+objItem.precioProducto+"</p>"+objItem.imagenProducto+"</p>";
            });
            Carrito_Vista.innerHTML= Carrito_Vista_datos;
       }
    }

    document.addEventListener('DOMContentLoaded', () => {
        array_carritoCompras = JSON.parse(localStorage.getItem("array_carritoCompras")) || [];
        MostrarCarrito();
    });



    function GuardarDatosCarrito() {
        localStorage.setItem("array_carritoCompras", JSON.stringify(array_carritoCompras));
    }

