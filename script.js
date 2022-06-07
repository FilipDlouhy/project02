let items = document.querySelectorAll("#item");
let result = document.getElementById("result-text");
let random ;
let playerChoice;
let ger =0;
let arm = 0;
items.forEach(function (item) {
    item.addEventListener('click', function() {
   playerChoice = parseInt(item.alt);
   random = Math.floor(Math.random() * 3) ;

if (playerChoice=== 0 && random ===0 ){
result.textContent=`Lads it is a draw status Germanicus ${ger} : Arminius ${arm}`;
} else if(playerChoice=== 0 && random ===1 ){
    arm++;
    result.textContent=` Germanicus ${ger} : Arminius ${arm}`;
}else if (playerChoice=== 0 && random ===2){
    ger++;
    result.textContent=` Germanicus ${ger} : Arminius ${arm}`;
} else if (playerChoice=== 1 && random ===1 ){
    result.textContent=`Lads it is a draw status Germanicus ${ger} : Arminius ${arm}`;
    } else if(playerChoice=== 1 && random ===2 ){
        arm++;
        result.textContent=`Germanicus ${ger} : Arminius ${arm}`;
    }else if (playerChoice=== 1 && random ===0){
        ger++;
        result.textContent=` Germanicus ${ger} : Arminius ${arm}`;
    }
    else if (playerChoice=== 2 && random ===2 ){
        result.textContent=`Lads it is a draw status Germanicus ${ger} : Arminius ${arm}`;
        } else if(playerChoice=== 2 && random ===0 ){
            arm++;
            result.textContent=` status Germanicus ${ger} : Arminius ${arm}`;
        }else if (playerChoice=== 2 && random ===1){
            ger++;
            result.textContent=` status Germanicus ${ger} : Arminius ${arm}`;
        }

if(ger === 5){
    result.textContent=` Germanicus wins. Rome had conquered Germania`;
    arm=0;
    ger=0;
}else if ( arm ===5){
    result.textContent=` Arminius wins. Germans are on their way to pillage Rome`;
    arm=0;
    ger=0;
}
    });
  });
