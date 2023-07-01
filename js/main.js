document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()
  

  console.log(data);
  let l1 = (Math.ceil(Math.random() *3) )
  l1 === 1 ? document.querySelector("#personStatus").textContent = 'rock' : Math.ceil(Math.random() *3) === 2 ? document.querySelector("#personStatus").textContent ='paper' : document.querySelector("#personStatus").textContent ='scissor' 
  
   let l2 = (Math.ceil(Math.random() *3) )
   l2 === 1 ? document.querySelector("#personOccupation").textContent = 'rock' : Math.ceil(Math.random() *3) === 2 ? document.querySelector("#personOccupation").textContent ='paper' : document.querySelector("#personOccupation").textContent ='scissor' 
   if (l1 > l2){
    console.log('player 1 wins')
   }else if (l2 > l1){
    console.log('player 2 wins')
   }else{
    console.log('draw')
   }
   
}
