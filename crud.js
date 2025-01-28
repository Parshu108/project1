

// insert data
  let insertt=async()=>{
      let inpname=document.querySelector("#name").value;
      let inpemail=document.querySelector("#email").value;
      let inpnum=document.querySelector("#number").value;
      let inpadd=document.querySelector("#address").value;
      let inpct=document.querySelector("#city").value;
      let inpsta=document.querySelector("#state").value;
      let inpzip=document.querySelector("#code").value;
      let inpcount=document.querySelector("#country").value;
      let inpdate=document.querySelector("#date1").value;
      let inpdate1=document.querySelector("#date2").value;
      let inpnumb=document.querySelector("#numbers").value;
      let inpnm=document.querySelector("#nm").value;
      let inpnf=document.querySelector("#nf").value;
      let inpnk=document.querySelector("#nk").value;
      let url=`http://localhost:3000/costomber`;
       fetch(url,{
        method:"POST",
        headers:{
         "Content-Type":"application/json"
        },
        
        body:JSON.stringify({
          name:inpname,
          email:inpemail,
          number:inpnum,
          address:inpadd,
          city:inpct,
          state:inpsta,
          code:inpzip,
          country:inpcount,
          date:inpdate,
          datee:inpdate1,
          numbers:inpnumb,
          nmale:inpnm,
          nfamel:inpnf,
          nkid:inpnk
        }) 
      })
      
      
      location.href="show.html";
      return false;
    }
  