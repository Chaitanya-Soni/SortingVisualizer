
function getarray(){
    let s = document.getElementById("input").value;
    let c = s.split(" ").map(i => parseInt(i));
    document.getElementById("array_input").innerHTML = "Current array is :"+c;
}
