const lista= document.getElementById("cuadrito");
const tablero= document.getElementById("Lista");


Sortable.create(lista,{
    animation:450,
    //chosenClass:"seleccionado",
    //ghostClass:"fantasma"
    //dragClass: "drag",
    onEnd: () => {
        console.log("se insertó un elemento"); 
    },
    group: "atril",
    store: {
        //se guarda el orden de la lista 
        set: (sortable) => {
            const orden = sortable.toArray();
            localStorage.setItem(sortable.options.group.name, orden.join('|'));
        },
        //obtenemos orden lista
        get: (sortable) => {
            const orden= localStorage.getItem(sortable.options.group.name);
            return orden ? orden.split('|') :  [];
        }
    }
});

const time_el= document.querySelector('#reloj1 #cuenta1');
const start_btn= document.getElementById('colocar');
start_btn.addEventListener('click', start);

let seconds = 2760;
let interval = null;

function timer (){
    seconds--;
    time_el.innerHTML='';

    let hrs = Math.floor(seconds / 3600); 
    let mins = Math.floor((seconds-(hrs*3600)) / 60);
    let secs = seconds % 60;
    
    if(secs<10) secs = '0'+secs;
    if(mins<10) mins = '0'+mins;
    
    if(seconds<=0){
        time_el.innerHTML+= `${'00'}:${'00'}`
    }
    else
    time_el.innerHTML+= `${mins}:${secs}`;
}


function start(){
    if(interval){
        return 
    }

    interval=setInterval(timer, 1000);
}

function stop(){
    clearInterval(interval);
    interval=null; 
}

function reset (){
    stop();
    seconds=2760;
    time_el.innerHTML='00:46:00'
}

function alerta(){
    alert('EL BOTÓN COLOCAR SOLO COMIENZA LA CUENTA REGRESIVA, TODAVIA NO ESTA EN FUNCIONAMIENTO EL INICIAR PARTIDA')
}



