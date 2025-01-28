document.getElementById("btn").addEventListener("click",add);

function add(e){
    e.preventDefault();// 

    let username =document.getElementById("username").value;
    let email =document.getElementById("email").value;
    let password =document.getElementById("password").value;
    let cnfpsw = document.getElementById("psw").value;
      if(username ==" " || email ==" " || password == " " || cnfpsw ==" "){
        alert("all fieild are mandetry");
        return;
        
      }

      localStorage.setItem("username",username);
      localStorage.setItem("email",email);

      localStorage.setItem("password",password);

   window.location.href="login.html";

   alert("registration successfull");


}

VANTA.NET({
  el: "#s-main",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x9d234e,
  backgroundColor: 0xe0818,
  points: 12.00,
  maxDistance: 21.00
})