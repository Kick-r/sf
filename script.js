var p1 = document.querySelector(".p1");
var p2 = document.querySelector(".p2");
var p3 = document.querySelector(".p3");

var bt1 = document.querySelector(".bt1");
var bt2 = document.querySelector(".bt2");
var bt3 = document.querySelector(".bt3");

let seq2 = ['15%', '55%', '35%'];
let seq3 = ['20%','5%'];

bt1.addEventListener('click', function(){

        p1.style.zIndex = 1;
        p2.style.zIndex = 1;
        p3.style.zIndex = 1;

        p1.style.left=seq2[0];
        p2.style.left=seq2[1];
        p3.style.left=seq2[2];

        p1.style.top=seq3[0];
        p2.style.top=seq3[0];
        p3.style.top=seq3[1];

})
bt2.addEventListener('click', function(){

    
        p1.style.zIndex = 2;
        p2.style.zIndex = 1;
        p3.style.zIndex = 1;
        p1.style.left=seq2[2];
        p2.style.left=seq2[0];
        p3.style.left=seq2[1];

        p1.style.top=seq3[1];
        p2.style.top=seq3[0];
        p3.style.top=seq3[0];

})
bt3.addEventListener('click', function(){
    
        p1.style.zIndex = 1;
        p2.style.zIndex = 2;
        p1.style.zIndex = 1;

        p1.style.left=seq2[1];
        p2.style.left=seq2[2];
        p3.style.left=seq2[0];

        p1.style.top=seq3[0];
        p2.style.top=seq3[1];
        p3.style.top=seq3[0];

})