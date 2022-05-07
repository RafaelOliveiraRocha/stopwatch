// codigo refeito para mostrar horas, minutos, segundos e milesimos

const iniciar = document.querySelector('.inicio');
const pausar = document.querySelector('.pause');
const horas = document.querySelector('#timer-horas');
const minutos = document.querySelector('#timer-minutos');
const segundos = document.querySelector('#timer-segundos');
const milessegundos = document.querySelector('#timer-milessegundos');
let h = 0;
let min = 0;
let seg = 0;
let mile = 0;
let timer;

function iniciarTempo() {
  timer = setInterval(() => {
    horas.innerHTML = h < 10 ? '0' + h : h;
    minutos.innerHTML = min < 10 ? '0' + min : min;
    segundos.innerHTML = seg < 10 ? '0' + seg : seg;
    milessegundos.innerHTML = mile < 10 ? '0' + mile : mile;

    if (mile < 9) {
      mile += 1;
    } else if (seg < 59) {
      mile = 0;
      seg += 1;
    } else if (min < 59) {
      mile = 0;
      seg = 0;
      min += 1;
    } else if (h < 23) {
      mile = 0;
      seg = 0;
      min = 0;
      h += 1;
    } else {
      alert('1 dia completo se passou!!');
    }
  }, 100);
  iniciar.setAttribute('disabled', '');
}

function pausarTempo() {
  clearInterval(timer);
  iniciar.removeAttribute('disabled');
}

function resetarTempo() {
  horas.innerText = '00';
  minutos.innerText = '00';
  segundos.innerText = '00';
  milessegundos.innerText = '00';
  h = 0;
  min = 0;
  seg = 0;
  mile = 0;
}

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);
