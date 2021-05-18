function buildgraph(){
   ;
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
        for(let i=0;i<n;i++){
            let wt=w;
            ctx.fillStyle = "black";
            ctx.fillRect(i*w,0,100,h*c[i]);
        }
    }
}
function swap(){
;;    
}
function bubblesort() {
    let s = document.getElementById("input").value;
    let c = s.split(" ").map(i => parseInt(i));
    console.log(c);
    let n=c.length;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(c[j]>c[j+1]){
                //swap function todo
                let temp=c[j+1];
                c[j+1]=c[j];
                c[j]=temp;
            }
        }
    } 
    console.log("sorted ",c);
}