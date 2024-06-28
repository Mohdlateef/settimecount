let count=document.getElementById("count");
let inc=document.getElementById("inc");
let increa=0;
inc.addEventListener("click",()=>{
    console.log('test')
    setTimeout(()=>{
        increa++;
        count.innerText=increa;
    },2000)
})
