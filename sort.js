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

function swap(a, b){
    console.log(a + " " + b);
    let temp = b;
    b = a;
    a = temp;
    console.log(a + " " + b);
}

function bubblesort() {
    let s = document.getElementById("input").value;
    let c = s.split(" ").map(i => parseInt(i));
    console.log(c);
    let n=c.length;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(c[j]>c[j+1]){
                let temp=c[j+1];
                c[j+1]=c[j];
                c[j]=temp;
            }
        }
    }
    console.log("sorted ",c);
}