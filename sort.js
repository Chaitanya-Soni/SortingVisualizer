
function getarray(){
    let s = document.getElementById("input").value;
    let c = s.split(" ").map(i => parseInt(i));
    if (s[s.length-1] == " ")
    {
        alert("Do Not Enter Space at the end of array");
    }
    else
        document.getElementById("array_input").innerHTML = "Current array is: "+c;
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