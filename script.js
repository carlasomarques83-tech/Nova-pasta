const trabalhos=[
{id:1,categoria:'Bordado',titulo:'Flores Bordadas',preco:'25€'},
{id:2,categoria:'Crochê',titulo:'Mala Artesanal',preco:'35€'},
{id:3,categoria:'Vitrinismo',titulo:'Montra Premiada',preco:'Projeto'}
];

function render(lista){
const galeria=document.getElementById('galeria');
if(!galeria) return;
galeria.innerHTML='';
document.getElementById('semResultados').style.display=lista.length?'none':'block';
lista.forEach(item=>{
galeria.innerHTML+=`<div class="card">
<img src="https://via.placeholder.com/300x200" alt="${item.titulo}">
<h3>${item.titulo}</h3>
<p>${item.categoria}</p>
<p>${item.preco}</p>
</div>`;
});
}

function filtrar(cat){
if(cat==='Todos') render(trabalhos);
else render(trabalhos.filter(t=>t.categoria===cat));
}

render(trabalhos);

const form=document.getElementById('contactForm');
if(form){
form.addEventListener('submit',e=>{
e.preventDefault();
document.getElementById('feedback').textContent='Mensagem enviada com sucesso!';
form.reset();
});
}


const produtos = [
{
 id:1,
 titulo:"Flores Silvestres",
 categoria:"Bordado",
 preco:25,
 disponivel:true
}
];