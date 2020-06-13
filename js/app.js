
//variables
document.getElementById('txtBtn').addEventListener('click',cargarTxt);
document.getElementById('jsonBtn').addEventListener('click',cargarJson);
document.getElementById('apiBTN').addEventListener('click',cargarAPI);

//fecht API consumiendo un txt
function cargarTxt(){

    fetch('datos.txt').then(function(res){
        return res.text();
    
    }).then(function(data){
        console.log(data);
        document.getElementById('resultado').innerHTML = data;
    }).catch(function(error){
        console.log(error);
    })

}

//Fecht API consumiendo json

function cargarJson(){

    fetch('empleados.json').then(function(res){
        return res.json();
    }).then(function(data){
        let html = `<table class="table table-primary mt-5">
                        <thead>
                        <tr>
                        <th>Nombre</th>
                        <th>puesto</th>
                        </tr>
                    </thead>
                   
                    `;
        data.forEach(function(empleado){
            html += `
            <tbody>
            <tr>
                <td> ${empleado.nombre}</td>
                <td> ${empleado.puesto}</td>
            </tr>
            </tbody>
            `
        });
        document.getElementById('resultado').innerHTML = html;
    });

}

//funcion cargar API

function cargarAPI(){
    
    fetch('https://picsum.photos/list').then(function(res){
        return res.json();
    }).then(function(img){

        let html =``;
        img.forEach(function(imagen){

            html +=`

                <li>
                <a href="${imagen.post_url}"> Ver imagen </a>
                
                </li>
                <li>
                ${imagen.author}
                </li>

            `
        })
       document.getElementById('resultado').innerHTML = html;

    })
}