let cards=[
    {
       image:"https://png.pngtree.com/png-vector/20201227/ourmid/pngtree-a-squatting-british-short-blue-and-white-cat-png-image_2654504.jpg",
       value:1,
       status:"closed"
    },
    {
       image:"https://png.pngtree.com/png-vector/20201227/ourmid/pngtree-a-squatting-british-short-blue-and-white-cat-png-image_2654504.jpg", 
       value:1,
       status:"closed"
    },
    {
       image:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871998-aif13.jpg?resize=480:*",
       value:2,
       status:"closed"
    },
    {
       image:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871998-aif13.jpg?resize=480:*",
       value:2,
       status:"closed"
    },
    {

       image:"https://i.pinimg.com/originals/4f/43/a9/4f43a92abca2f764ddf18e7479dac318.jpg",
       value:3,
       status:"closed"
    },
    {

       image:"https://i.pinimg.com/originals/4f/43/a9/4f43a92abca2f764ddf18e7479dac318.jpg",
       value:3,
       status:"closed"
    },
    {
       image:"https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/1b/SamWilson-CaptainAmerica.png/revision/latest?cb=20210524144921",
       value:4,
       status:"closed"        
    },
    {
       image:"https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/1b/SamWilson-CaptainAmerica.png/revision/latest?cb=20210524144921",
       value:4,
       status:"closed"        
    },
    {
       image:"https://cdn.europosters.eu/image/750/posters/guardians-of-the-galaxy-vol-2-i-am-groot-i40500.jpg",
       value:5,
       status:"closed"        
    },
    {
       image:"https://cdn.europosters.eu/image/750/posters/guardians-of-the-galaxy-vol-2-i-am-groot-i40500.jpg",
       value:5,
       status:"closed"        
    },
    {
      image:"https://static.wikia.nocookie.net/marvel_dc/images/4/4b/Batman_Vol_3_86_Textless.jpg/revision/latest?cb=20200502132734",
      value:6,
      status:"closed"        
    }, 
    {
      image:"https://static.wikia.nocookie.net/marvel_dc/images/4/4b/Batman_Vol_3_86_Textless.jpg/revision/latest?cb=20200502132734",
      value:6,
      status:"closed"        
    },
     
     
]




//Durnsten shuffling algorthem

 let temp;
 for(let i=cards.length-1;i>=0;i--){

    let j=Math.floor(Math.random()*(i+1));

    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
 }

 let cardsCopy=cards;

 function displayCards(data){
    let cardsString="";

    data.forEach(function(card,index){
       cardsString+=`
       <div class="card" style="bacground-image:url('${card.image}')">
          <div class="overlay ${card.status}" onclick="openCard(${index})">

          </div>
       </div>
       `;
      
    });

    document.getElementById("cards").innerHTML=cardsString;
       
   }

displayCards(cards);

let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){
   console.log(cards);
   cards[index].status="opened";
   if(cardCount===1){
      val1=cards[index].value;
      cardCount++;

   }
   else if(cardCount===2){
      val2=cards[index].value;

      if(val1===val2){
         score++;
         document.getElementById("Score").innerText=score;

         //restart after one guess.
         val1=null;
         val2=null;
         cardCount=1;

      }
      else{
         alert("GAME OVER");
         location.reload();

      }

   }

   displayCards(cards);
   
}
 



console.log(cards);