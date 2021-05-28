function buildgraph(){
   ;
}

var render = function () {
    let ctr = document.getElementById("graph").getContext("2d");
    ctr.canvas.width = document.documentElement.clientWidth*0.9;
    ctr.canvas.height = document.documentElement.clientHeight*0.8;
}

function getarray(){
    let s = document.getElementById("input").value;
    let c = s.split(" ").map(i => parseInt(i));
    if (s[s.length-1] == " ")
    {
        alert("Do Not Enter Space at the end of array");
    }
    else{
        document.getElementById("array_input").innerHTML = "Current array is: "+c;
        let n=c.length;
        let w=1000/n;
        let h= 600;
        let m=Math.max(...c);
        h=h/m;
        let can = document.getElementById("graph");
        let ctx = can.getContext("2d");
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        window.addEventListener("resize", render);
        render();
        for(let i=0;i<n;i++){
            let wt=ctx.canvas.width/n;
            ctx.fillStyle = "black";
            ctx.fillRect(i*wt,ctx.canvas.height-(h*c[i]),ctx.canvas.width/(4*n),h*c[i]);
        }
    }
}

function getRandomarray(){
    let s = document.getElementById("input").value;
    let c = s.split(" ").map(i => parseInt(i));
    if (s[s.length-1] == " ")
    {
        alert("Do Not Enter Space at the end of array");
    }
    else{
        document.getElementById("array_input").innerHTML = "Current array is: "+c;
        let n=c.length;
        let w=1000/n;
        let h= 600;
        let m=Math.max(...c);
        h=h/m;
        
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        window.addEventListener("resize", render);
        render();
        for(let i=0;i<n;i++){
            let wt=ctx.canvas.width/n;
            ctx.fillStyle = "black";
            ctx.fillRect(i*wt,ctx.canvas.height-(h*c[i]),ctx.canvas.width/(4*n),h*c[i]);
        }
    }
}

async function bubblesort() {
    let s = document.getElementById("input").value;
    let c = s.split(" ").map(i => parseInt(i));
    console.log(c);
    let can = document.getElementById("graph");
    let ctx = can.getContext("2d");
    let n=c.length;
    let w=1000/n;
    let h= 600;
    let m=Math.max(...c);
    h=h/m;
    let wt=ctx.canvas.width/n;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            ctx.fillStyle = "blue";
            let t=j+1;
            ctx.clearRect(t*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
            ctx.fillRect(t*wt,ctx.canvas.height-(h*c[t]),ctx.canvas.width/(4*n),h*c[t]);
            ctx.fillStyle = "blue";
            ctx.clearRect(j*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
            ctx.fillRect(j*wt,ctx.canvas.height-(h*c[j]),ctx.canvas.width/(4*n),h*c[j]);
            await new Promise((resolve) => 
                setTimeout(() => {
                    resolve();
                }, 3000)//miliseconds
            );
            if(c[j]>c[j+1]){
                
                ctx.clearRect(t*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
                ctx.clearRect(j*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
                let temp=c[j+1];
                c[j+1]=c[j];
                c[j]=temp;
                ctx.fillStyle = "green";
                ctx.fillRect(j*wt,ctx.canvas.height-(h*c[j]),ctx.canvas.width/(4*n),h*c[j]);
                ctx.fillRect(t*wt,ctx.canvas.height-(h*c[t]),ctx.canvas.width/(4*n),h*c[t]);
                await new Promise((resolve) => 
                setTimeout(() => {
                    resolve();
                }, 300)
                );
                ctx.clearRect(t*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
                ctx.clearRect(j*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
                ctx.fillStyle = "black";
                ctx.fillRect(j*wt,ctx.canvas.height-(h*c[j]),ctx.canvas.width/(4*n),h*c[j]);
                ctx.fillRect(t*wt,ctx.canvas.height-(h*c[t]),ctx.canvas.width/(4*n),h*c[t]);


            }
            ctx.clearRect(t*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
            ctx.clearRect(j*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
            ctx.fillStyle = "black";
            ctx.fillRect(j*wt,ctx.canvas.height-(h*c[j]),ctx.canvas.width/(4*n),h*c[j]);
            ctx.fillRect(t*wt,ctx.canvas.height-(h*c[t]),ctx.canvas.width/(4*n),h*c[t]);
        }
    }
    console.log("sorted ",c);
}