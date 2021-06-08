function buildgraph(){
   ;
}
let c=[];
let speed= document.getElementById("myRange");
console.log(speed);
var render = function () {
    let ctr = document.getElementById("graph").getContext("2d");
    ctr.canvas.width = document.documentElement.clientWidth*0.9;
    ctr.canvas.height = document.documentElement.clientHeight*0.8;
}

function getarray(){
    let s = document.getElementById("input").value;
    c = s.split(" ").map(i => parseInt(i));
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

function getRandomarray() {
  c = []
  let n=Math.floor(Math.random() * (200-1) + 1);
  for(let i=0;i<n;i++){
      c.push(Math.floor(Math.random() * (1000-1) + 1));
  }
  document.getElementById("random_input").innerHTML = "Current array is: " + c;
  let can = document.getElementById("graph");
  let ctx = can.getContext("2d");
  let h = 600;
  let m = Math.max(...c);
  h = h / m;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  window.addEventListener("resize", render);
  render();
  for (let i = 0; i < n; i++) {
    let wt = ctx.canvas.width / n;
    ctx.fillStyle = "black";
    ctx.fillRect(i * wt,ctx.canvas.height - h * c[i],ctx.canvas.width / (4 * n),h * c[i]);
  }
}

async function bubblesort() {
    let can = document.getElementById("graph");
    let ctx = can.getContext("2d");
    let n=c.length;
    let w=1000/n;
    let h= 600;
    let m=Math.max(...c);
    h=h/m;
    let wt=ctx.canvas.width/n;
    var nswap = 0;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            speed= document.getElementById("myRange").value;
            console.log(speed);
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
                }, speed)//miliseconds
            );

            if(c[j]>c[j+1]) {
                
                ctx.clearRect(t*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
                ctx.clearRect(j*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
                let temp=c[j+1];
                c[j+1]=c[j];
                c[j]=temp;
                nswap++;
                document.getElementById("no_of_swaps").innerHTML = "Number Of Swaps: " + nswap;
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
    document.getElementById("no_of_swaps").innerHTML = "Number Of Swaps: " + nswap;
    console.log("sorted ",c);
}
async function selectionsort() {
    let can = document.getElementById("graph");
    let ctx = can.getContext("2d");
    let n=c.length; 
    let w=1000/n;
    let h= 600;
    let m=Math.max(...c);
    h=h/m;
    let wt=ctx.canvas.width/n;
    speed= document.getElementById("myRange").value;
    console.log(c);
    let minindx;
    var nswap = 0;
    for(let i = 0; i < n; i++) {
        
        minindx = i;
        ctx.clearRect(minindx*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
        ctx.fillStyle = "green";
        ctx.fillRect(minindx*wt,ctx.canvas.height-(h*c[minindx]),ctx.canvas.width/(4*n),h*c[minindx]);
        
        await new Promise((resolve) => 
            setTimeout(() => {
                resolve();
            }, speed)
        );
        for(let j = i+1; j < n; j++){
            speed= document.getElementById("myRange").value;
            console.log(c)
            ctx.clearRect(j*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
            ctx.fillStyle = "blue";
            ctx.fillRect(j*wt,ctx.canvas.height-(h*c[j]),ctx.canvas.width/(4*n),h*c[j]);
            if(c[j] < c[minindx]) {
                let t1=minindx;
                minindx=j; 

                ctx.clearRect(minindx*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
                ctx.clearRect(t1*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
                ctx.fillStyle = "green";
                ctx.fillRect(minindx*wt,ctx.canvas.height-(h*c[minindx]),ctx.canvas.width/(4*n),h*c[minindx]);
                ctx.fillStyle = "black";
                ctx.fillRect(t1*wt,ctx.canvas.height-(h*c[t1]),ctx.canvas.width/(4*n),h*c[t1]);
                await new Promise((resolve) => 
                setTimeout(() => {
                    resolve();
                }, speed));
            }
            ctx.clearRect(j*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
            ctx.fillStyle = "black";
            ctx.fillRect(j*wt,ctx.canvas.height-(h*c[j]),ctx.canvas.width/(4*n),h*c[j]);
         }
         if (minindx != i) {
     
            let tmp = c[i];
            c[i] = c[minindx];
            c[minindx] = tmp;
            nswap++;
            document.getElementById("no_of_swaps").innerHTML = "Number Of Swaps: " + nswap;
            ctx.clearRect(minindx*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
            ctx.clearRect(i*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
            ctx.fillStyle = "black";
            ctx.fillRect(minindx*wt,ctx.canvas.height-(h*c[minindx]),ctx.canvas.width/(4*n),h*c[minindx]);
            ctx.fillRect(i*wt,ctx.canvas.height-(h*c[i]),ctx.canvas.width/(4*n),h*c[i]);
        }
        minindx = i;
        ctx.clearRect(minindx*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(minindx*wt,ctx.canvas.height-(h*c[minindx]),ctx.canvas.width/(4*n),h*c[minindx]);

    }
    document.getElementById("no_of_swaps").innerHTML = "Number Of Swaps: " + nswap;
    console.log("sorted ",c);
}

async function insertionsort() {

    let can = document.getElementById("graph");
    let ctx = can.getContext("2d");
    let n = c.length;
    let h = 600;
    let m = Math.max(...c)
    h = h/m;
    let wt = ctx.canvas.width/n;
    var nswap=0;
    for (let i=1;i<n;i++) {
        let k = c[i];
        let j = i-1;
        let t = j+1;
        ctx.clearRect(t*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
        ctx.fillStyle = "blue";
        ctx.fillRect(t*wt,ctx.canvas.height-(h*c[t]),ctx.canvas.width/(4*n),h*c[t]);
        ctx.clearRect(j*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
        ctx.fillStyle = "blue";
        ctx.fillRect(j*wt,ctx.canvas.height-(h*c[j]),ctx.canvas.width/(4*n),h*c[j]);
        await new Promise ((resolve) =>
            setTimeout(() => {
                resolve();
            }, speed)    // in milliseconds
        );
        while(k < c[j] && j >= 0)
        {
            ctx.clearRect((j+1)*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
            ctx.fillStyle = "blue";
            ctx.fillRect((j+1)*wt,ctx.canvas.height-(h*k),ctx.canvas.width/(4*n),h*k);
            ctx.clearRect(j*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
            ctx.fillStyle = "blue";
            ctx.fillRect(j*wt,ctx.canvas.height-(h*c[j]),ctx.canvas.width/(4*n),h*c[j]);
            speed = document.getElementById("myRange").value;
            console.log(c);
            await new Promise ((resolve) =>
                setTimeout(() => {
                    resolve();
                }, speed)    // in milliseconds
            );
            ctx.clearRect((j+1)*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
            ctx.clearRect(j*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
            c[j+1] = c[j];
            nswap++;
            document.getElementById("no_of_swaps").innerHTML = "Number Of Swaps: " + nswap;
            ctx.fillStyle = "green";
            ctx.fillRect(j*wt,ctx.canvas.height-(h*k),ctx.canvas.width/(4*n),h*k);
            ctx.fillRect((j+1)*wt,ctx.canvas.height-(h*c[j+1]),ctx.canvas.width/(4*n),h*c[j+1]);
            await new Promise((resolve) => 
                setTimeout(() => {
                    resolve();
                }, 300)
            );
            ctx.clearRect((j+1)*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
            ctx.clearRect(j*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
            ctx.fillStyle = "black";
            ctx.fillRect(j*wt,ctx.canvas.height-(h*c[j]),ctx.canvas.width/(4*n),h*c[j]);
            ctx.fillRect((j+1)*wt,ctx.canvas.height-(h*c[j+1]),ctx.canvas.width/(4*n),h*c[j+1]);
            --j;
        }
        t=j+1;
        c[j+1] = k;
        document.getElementById("no_of_swaps").innerHTML = "Number Of Swaps: " + nswap;
        ctx.clearRect(t*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
        ctx.clearRect(j*wt-1,0,ctx.canvas.width/(4*n)+2,ctx.canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(t*wt,ctx.canvas.height-(h*c[t]),ctx.canvas.width/(4*n),h*c[t]);
        ctx.fillRect(j*wt,ctx.canvas.height-(h*c[j]),ctx.canvas.width/(4*n),h*c[j]);
    }

    console.log("sorted",c);
}