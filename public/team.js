export function initializetamscript() {
     const team24=document.querySelector("#team24");
     team24.addEventListener('click',()=>{
        fetch("team24.html").then((response)=>response.text())
        .then((data)=>{
            document.getElementById("teamhere").innerHTML=data;
            import("./team24.js").then((module)=>{
                module.initaializeteam24();
            });
        })
        .catch((error)=>{
            console.error("error ho  gya bhai ",error);
        })
     })
}
