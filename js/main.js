document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()
  

  console.log(data);
  let l1 = (Math.ceil(Math.random() *3) )
  l1 === 1 ? document.querySelector("#personStatus").textContent = 'rock' : l1 === 2 ? document.querySelector("#personStatus").textContent ='paper' : document.querySelector("#personStatus").textContent ='scissor' 
  
   let l2 = (Math.ceil(Math.random() *3) )
   l2 === 1 ? document.querySelector("#personOccupation").textContent = 'rock' : l2 === 2 ? document.querySelector("#personOccupation").textContent ='paper' : document.querySelector("#personOccupation").textContent ='scissor' 
   
    if (l1 === 1 && l2 === 1){
      document.querySelector("#personName").textContent = 'draw'
    }else if ((l1 === 1) && (l2 === 2)){
      document.querySelector("#personName").textContent = 'player 2 wins'
    }else if ((l1 === 1) && (l2 === 3)){
      document.querySelector("#personName").textContent = 'player 1 wins'
    }else if ((l1 === 2) && (l2 === 1)){
      document.querySelector("#personName").textContent = 'player 1 wins'
    }else if ((l1 === 2) && (l2 === 2)){
      document.querySelector("#personName").textContent = 'draw'
    }else if ((l1 === 2) && (l2 === 3)){
      document.querySelector("#personName").textContent = 'player 2 wins'
    }else if ((l1 === 3) && (l2 === 1)){
      document.querySelector("#personName").textContent = 'player 2 wins'
    }else if ((l1 === 3) && (l2 === 2)){
      document.querySelector("#personName").textContent = 'player 1 wins'
    }else{
      document.querySelector("#personName").textContent = 'draw'
    }


}
