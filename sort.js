
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
}