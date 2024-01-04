var notas = [];
var contador = 0;

const crearNota = () => {
    const nota  = document.getElementById("input-nota");
    const pk = contador;
    notas.push({pk:pk, nota:nota.value});
    contador++;

    nota.value = "";
    
    imprimirNotas();
}

const imprimirNotas = () => {
    const div = document.getElementById("notas");
    div.innerHTML="";

    notas.forEach(nota => {
        if(nota){
            div.innerHTML += `
            <div class="nota-content">
                <p class="text">${nota.nota}</p>
                <div class="btn-close-container">
                    <button class="btn-borrar" onClick="eliminarNota(${nota.pk})">Borrar</button>
                </div>
            </div>
        `; 
        }
    });
}

const eliminarNota = (nota) => {
    notas = notas.filter(item => item.pk !== nota );

    imprimirNotas();
}