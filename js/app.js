//水の量ランダム
let liquor = liquorGetRandom( 90, 95 );
function liquorGetRandom( min, max ) {
    let random = Math.floor( Math.random() * (max + 1 - min) ) + min;
    return random;
}
console.log( liquor );

//host名
const h_name = "ホスト";

//playerNameの入力・取得
function playButton() {
    const p_name = document.getElementById("p_name").value;
    document.getElementById("nameDisplay").textContent = p_name;
    $("#name").addClass("d_none");
    $("#attack").removeClass("d_none");
}

//先攻後攻選択
function attackButton() {
    let elements = document.getElementsByName('attacks');
    let len = elements.length;
    let attackDisplay = '';

    for (let i = 0; i < len; i++){
        if (elements.item(i).checked){
            attackDisplay = elements.item(i).value;
            attackPlayer = elements.item(i).value;
        }
    }
    document.getElementById("attackDisplay").textContent = attackDisplay;
    $("#attack").addClass("d_none");
    $("#ui").removeClass("d_none");
    $("#ui").addClass("d_block");

    //先攻後攻順
    if (attackDisplay === "first"){ 
        $("#gameFirst").removeClass("d_none");
        $("#gameFirst").addClass("d_block");
    } else {
        $("#gameSecond").removeClass("d_none");
        $("#gameSecond").addClass("d_block");
    }
}

//先攻後攻切り替え
window.addEventListener("load", function(){
    document.getElementById("change").addEventListener("click", changePlayer);
});
function changePlayer() {
    if(attackPlayer === "first") {
        $("#gameFirst").removeClass("d_block");
        $("#gameFirst").addClass("d_none");
        $("#gameSecond").removeClass("d_none");
        attackPlayer = "second";
        console.log(attackPlayer);
    } else {
        $("#gameFirst").removeClass("d_none");
        $("#gameSecond").removeClass("d_block");
        $("#gameSecond").addClass("d_none");
        attackPlayer = "first";
        console.log(attackPlayer);
    }
}

//playerコイン投入
// function playerCoin() {
//     const playerButton = document.getElementById("playerCoin");
//         playerButton.onclick = function() {
//         liquor++;
//         console.log( liquor );
//     };
// }
window.addEventListener("load", function(){
    document.getElementById("playerCoin").addEventListener("click", playerCoin);
});
function playerCoin() {
    liquor++;
    console.log( liquor );
    if(liquor === 100) {
        console.log(attackPlayer);
        alert("あなたの負け");
    }
}

//hostコイン投入
// function hostCoin() {
//     const hostButton = document.getElementById("hostCoin");
//         hostButton.onclick = function() {
//         liquor = liquor - 0.5;
//         console.log( liquor );
//     };
// }
window.addEventListener("load", function(){
    document.getElementById("hostCoin").addEventListener("click", hostCoin);
});
function hostCoin() {
    liquor = liquor + 0;
    console.log( liquor );
    if(liquor === 100) {
        alert("あなたの勝ち");
    }
}

//https://azukipan.com/posts/javascript-form-disabled/