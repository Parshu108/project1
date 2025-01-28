document.getElementById("login").addEventListener("click",login);
function login(e){
    e.preventDefault();//prevent default behaviour of from submit

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username==" " || password==" "){
        alert("all fields are required");
        return;

    }

    let storedusername = localStorage.getItem("username");
    let storedpassword = localStorage.getItem("password");
    if(storedusername == username && storedpassword==password){
        alert(`login successfull ,welcome ${username}`);
        window.location.href= "index.html";

    }else{
        alert("invalid credentials");
    }

}

VANTA.HALO({
  el: "#main",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  baseColor: 0x168,
  backgroundColor: 0xb134a,
  size: 1.20
})