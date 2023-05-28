let start=document.querySelector(".start_button")
start.addEventListener("click",()=>{starting()})
function starting(){
if(start.textContent==='START'){
  countdown();
  start.textContent='STARTED';
  start.disabled=true;
  }
else{
  start.textContent='START';
  start.disabled=false;
}
}



let min=0;
let sec=0;

let timer_min = document.querySelector(".time_min");
let timer_sec = document.querySelector(".time_sec");

let secondss = 0;
let wanted_sec=0;

function countdown() {
  let minute = document.querySelector(".input_min");
  min = minute.value;
  let second = document.querySelector(".input_sec");
  sec = second.value;
  wanted_sec=Number(sec) + Number(min) * 60;
  if(Number(secondss)!==Number(wanted_sec)){
    seconds();
    minu();
  }
  else{
    document.querySelector('.dis_m_s').innerHTML('Time out');
  }
}

let my_sec ='';
function seconds(){
  let minute = document.querySelector(".input_min");
  min = minute.value;
  let second = document.querySelector(".input_sec");
  sec = second.value;
  let wanted_sec = Number(sec) + Number(min) * 60;
  
  my_sec = setInterval(() => {
    timeee_sec();
  }, 1000);
  
  function timeee_sec() {
    if (secondss < wanted_sec) {
      if (i_sec < sec_out) {
        timer_sec.innerHTML = i_sec;
        i_sec++;
      } else {
        i_sec = 0;
      }
      secondss++;
    } else {
      clearInterval(my_sec);
      clearInterval(my_min)
      timer_min.innerHTML='TIME';
      timer_sec.innerHTML='OUT';
    }
  }
};

let i_sec = 1;
let sec_in = 1;
let sec_out = 60;




//--------------------------------------------------------------------------------------------------------
let my_min='';
function minu(){
  let minute = document.querySelector(".input_min");
  min = minute.value;
  console.log('min=',min);

  my_min= setInterval(() => {
    timeee_min();
  }, 60000);
  
  let i_min = 1;
  let min_in = 0;
  let min_out = Number(min);

  function timeee_min(){
    if (i_min <= min) {
      timer_min.innerHTML = i_min;
      i_min++;
    } else {
      conosle.log(i_min = 0);
      clearInterval(my_min);
    }
  }
}

//--------------------------------------------------------------------------------------------------------
let stopp=document.querySelector('.stop_button')
stopp.addEventListener("click",()=>{
  stop();
});
function stop(){
  if(stopp.textContent==='STOP'){
    stopp.textContent='RESUME';
    clearInterval(my_sec);
  }
  else{
    stopp.textContent='STOP';
    countdown();
  }
};

document.querySelector('.reset_button').addEventListener("click",()=>{
  reset();
})

function reset(){
  document.location.reload(true);
}
