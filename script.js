
let time = 900;
let timer;

const answers = {
  q1:"carnivorous", q2:"scent", q3:"pouch", q4:"fossil", q5:"habitat",
  q6:"TRUE", q7:"FALSE", q8:"NOT GIVEN", q9:"FALSE",
  q10:"NOT GIVEN", q11:"FALSE", q12:"TRUE", q13:"NOT GIVEN"
};

function startTest(){
  const name=document.getElementById("studentName").value;
  if(!name) return alert("Enter name");
  localStorage.setItem("student",name);
  document.getElementById("loginScreen").classList.add("hidden");
  document.getElementById("examScreen").classList.remove("hidden");
  document.getElementById("welcome").innerText="Student: "+name;
  timer=setInterval(runTimer,1000);
}

function runTimer(){
  time--;
  document.getElementById("timer").innerText =
    Math.floor(time/60)+":"+String(time%60).padStart(2,"0");
  if(time<=0) submitTest();
}

function submitTest(){
  clearInterval(timer);
  let score=0;
  for(let q in answers){
    let val=document.getElementById(q).value.trim().toUpperCase();
    if(val===answers[q].toUpperCase()) score++;
  }
  document.getElementById("examScreen").classList.add("hidden");
  document.getElementById("resultScreen").classList.remove("hidden");
  document.getElementById("scoreText").innerText="Your Score: "+score+"/13";
}
