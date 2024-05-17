//水の量ランダム
let liquor = liquorGetRandom( 90, 95 );
function liquorGetRandom( min, max ) {
    let random = Math.floor( Math.random() * (max + 1 - min) ) + min;
    return random;
}
console.log( liquor );

//スタートボタン
//背景opacity
window.addEventListener("load", function(){
    document.getElementById("start").addEventListener("click", startButton);
});
function startButton() {
    $("#richBGimg").addClass("richBGimgOpa");
    $("#startContents").addClass("startHide");
    $("#fukidashi").removeClass("d_none");
    $("#fukidashiImg_H").addClass("fukidashiHide_H");
    $("#name").removeClass("d_none");
    $("#hostNameTalk01").addClass("hostNameTalk_01");
    $("#nameInput").addClass("playerNameAnser_01");
    $("#hostattackTalk02").addClass("hostNameTalk_02");
    $("#attackInput").addClass("playerNameAnser_02");
}

//host名
const h_name = "ホスト";

//playerNameの入力・取得
function playButton() {
    const p_name = document.getElementById("p_name").value;
    // document.getElementById("nameDisplay").textContent = p_name;
    // document.getElementById("playerCoinF").textContent = p_name;
    // document.getElementById("playerCoinS").textContent = p_name;
    $("#playerCoinF").html(p_name);
    $("#playerCoinS").html(p_name);
    $("#name").addClass("d_none");
    $("#attack").removeClass("d_none");
}

//先攻後攻選択
function attackButton() {
    let elements = document.getElementsByName("attacks");
    let len = elements.length;
    let attackDisplay = "";

    for (let i = 0; i < len; i++){
        if (elements.item(i).checked){
            attackDisplay = elements.item(i).value;
            attackPlayer = elements.item(i).value;
        }
    }
    // document.getElementById("attackDisplay").textContent = attackDisplay;
    $("#attack").addClass("d_none");
    $("#fukidashi").addClass("d_none");
    $("#game").removeClass("d_none");

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
// window.addEventListener("load", function(){
//     document.getElementById("change").addEventListener("click", changePlayer);
// });
// function changePlayer() {
//     if(attackPlayer === "first") {
//         $("#gameFirst").removeClass("d_block");
//         $("#gameFirst").addClass("d_none");
//         $("#gameSecond").removeClass("d_none");
//         attackPlayer = "second";
//         console.log(attackPlayer);
//     } else {
//         $("#gameFirst").removeClass("d_none");
//         $("#gameSecond").removeClass("d_block");
//         $("#gameSecond").addClass("d_none");
//         attackPlayer = "first";
//         console.log(attackPlayer);
//     }
// }

//コイン投入権
window.addEventListener("load", function(){
    document.getElementById("change").addEventListener("click", changePlayer);
});
function changePlayer() {
    if(attackPlayer === "first") {
        $("#gameFirst").removeClass("d_block");
        $("#gameFirst").addClass("d_none");
        $("#gameSecond").removeClass("d_none");
        attackPlayer = "second";
        $("#richBGimg").removeClass("richBGimgOpaRev");
        $("#richBGimg").addClass("richBGimgOpa");
        $("#gameAction").addClass("d_none");
        console.log(attackPlayer);
    } else {
        $("#gameFirst").removeClass("d_none");
        $("#gameSecond").removeClass("d_block");
        $("#gameSecond").addClass("d_none");
        attackPlayer = "first";
        $("#richBGimg").removeClass("richBGimgOpaRev");
        $("#richBGimg").addClass("richBGimgOpa");
        $("#gameAction").addClass("d_none");
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
let p_coinCount = 0;
let h_coinCount = 0;

window.addEventListener("load", function(){
    document.getElementById("playerCoinF").addEventListener("click", playerCoinF);
});
function removeGlass01() {
    $("#Glass01").removeClass("GlassAnim01");
}
function playerCoinF() {
    liquor++;
    p_coinCount++;
    $("#p_coinCountF").html(p_coinCount);
    $("#p_coinCountS").html(p_coinCount);
    $("#richBGimg").addClass("richBGimgOpaRev");
    $("#gameAction").removeClass("d_none");
    $("#Glass01").addClass("GlassAnim01");
    setTimeout(removeGlass01, 3000);
    console.log( liquor );
    console.log( p_coinCount );
    if(liquor === 100) {
        $("#Glass02").removeClass("d_none");
        $("#Glass02").addClass("GlassAnim02");
        $("#wrap").addClass("gameOverBG");
        $("#richBG").addClass("gameOverBG");
        $("#ending").removeClass("d_none");
        $("#endingParts").removeClass("d_none");
        $("#endingParts").addClass("endingBG");
        $("#ending01").addClass("ending01");
        $("#ending02").addClass("ending02");
        $("#ending03").addClass("ending03");
        $("#ending").addClass("endingBGopopa");
        $("#endingGameOver").removeClass("d_none");
        $("#endingGameOver").addClass("endingGameOver");
    }
}
// window.addEventListener("load", function(){
//     document.getElementById("playerCoinS").addEventListener("click", playerCoinS);
// });
// function playerCoinS() {
//     liquor++;
//     console.log( liquor );
//     if(liquor === 100) {
//         console.log(attackPlayer);
//         alert("あなたの負け");
//     }
// }

//hostコイン投入
// function hostCoin() {
//     const hostButton = document.getElementById("hostCoin");
//         hostButton.onclick = function() {
//         liquor = liquor - 0.5;
//         console.log( liquor );
//     };
// }
// window.addEventListener("load", function(){
//     document.getElementById("hostCoinF").addEventListener("click", hostCoinF);
// });
// function hostCoinF() {
//     liquor = liquor + 0;
//     console.log( liquor );
//     if(liquor === 100) {
//         alert("あなたの勝ち");
//     }
// }
window.addEventListener("load", function(){
    document.getElementById("hostCoinS").addEventListener("click", hostCoinS);
});
function hostCoinS() {
    liquor = liquor + 0;
    h_coinCount++;
    $("#h_coinCountF").html(h_coinCount);
    $("#h_coinCountS").html(h_coinCount);
    $("#richBGimg").addClass("richBGimgOpaRev");
    $("#GlassBG").addClass("richBGimgOpaRev");
    $("#gameAction").removeClass("d_none");
    $("#Glass01").addClass("GlassAnim01");
    setTimeout(removeGlass01, 5000);
    console.log( liquor );
    if(liquor === 100) {
        alert("あなたの勝ち");
    }
}

//https://azukipan.com/posts/javascript-form-disabled/