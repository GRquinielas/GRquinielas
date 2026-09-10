const costo = 50;

const telefono = "524423776858";

const partidos = [

{
local:"Necaxa",
visitante:"Puebla",
escudoL:"img/escudos/necaxa.png",
escudoV:"img/escudos/puebla.png"
},

{
local:"Atlante",
visitante:"Pachuca",
escudoL:"img/escudos/atlante.png",
escudoV:"img/escudos/pachuca.png"
},

{
local:"Tijuana",
visitante:"Querétaro",
escudoL:"img/escudos/tijuana.png",
escudoV:"img/escudos/queretaro.png"
},

{
local:"Toluca",
visitante:"Atlas",
escudoL:"img/escudos/toluca.png",
escudoV:"img/escudos/atlas.png"
},

{
local:"Monterrey",
visitante:"Tigres",
escudoL:"img/escudos/monterrey.png",
escudoV:"img/escudos/tigres.png"
},

{
local:"Cruz Azul",
visitante:"América",
escudoL:"img/escudos/cruzazul.png",
escudoV:"img/escudos/america.png"
},

{
local:"Santos",
visitante:"Juárez",
escudoL:"img/escudos/santos.png",
escudoV:"img/escudos/juarez.png"
},

{
local:"Chivas",
visitante:"Pumas",
escudoL:"img/escudos/chivas.png",
escudoV:"img/escudos/pumas.png"
}

];

let pronosticos = {};

cargarPartidos();

function cargarPartidos(){

const contenedor =
document.getElementById("partidos");

contenedor.innerHTML="";

partidos.forEach((p,index)=>{

contenedor.innerHTML += `

<div class="partido">

<button
class="opcion"
id="L${index}"
onclick="seleccionar(${index},'L')">
L
</button>

<div class="equipo">
${p.escudoL}
${p.local}
</div>

<button
class="opcion"
id="E${index}"
onclick="seleccionar(${index},'E')">
E
</button>

<div class="equipo">
<img src="${p.{p.visitante}
</div>

<button
class="opcion"
id="V${index}"
onclick="seleccionar(${index},'V')">
V
</button>

</div>

`;

});

}

function seleccionar(partido,valor){

document
.querySelectorAll(
`#L${partido},
#E${partido},
#V${partido}`
)
.forEach(btn=>{
btn.classList.remove("activa");
});

document
.getElementById(valor+partido)
.classList.add("activa");

pronosticos[partido]=valor;

}

function limpiarFormulario(){

pronosticos={};

document
.querySelectorAll(".opcion")
.forEach(btn=>{
btn.classList.remove("activa");
});

}

function enviarWhatsApp(){

const nombre =
document
.getElementById("nombre")
.value
.trim();

if(nombre===""){

alert("Ingresa tu nombre");

return;
}

if(
Object.keys(pronosticos).length
!== partidos.length
){

alert(
"Debes seleccionar todos los partidos"
);

return;
}

let mensaje=
`🏆 QUINIELA GR\n\n`;

mensaje+=
`Nombre: ${nombre}\n\n`;

partidos.forEach((p,i)=>{

mensaje +=

`${i+1}. `+

`${p.local} vs `+

`${p.visitante}`+

` = ${pronosticos[i]}\n`;

});

mensaje +=

`\nTotal: $${costo}`;

const url =

`https://wa.me/${telefono}?text=`+

encodeURIComponent(mensaje);

window.open(url,"_blank");

}
