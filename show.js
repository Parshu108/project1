
let getdata=async()=>{
   
   try{
   let url=`http://localhost:3000/costomber`;

   let res= await fetch(url,{
      method:"GET"
   })
   let data=await res.json()
   console.log(data);
   pagination(data);
   // DataShow(data);
   }
   catch(error){
      console.error();
   }
}

let searchh=async()=>{

   let searchinp=document.querySelector("#searchinp").value.toLowerCase();
   let url=`http://localhost:3000/costomber`;

   let res= await fetch(url,{
      method:"GET"
   })
   let data=await res.json()

   let filterData=data.filter((e)=>{
      return e.name.toLowerCase().includes(searchinp) || e.code.toString().includes(searchinp)
   })
   pagination(filterData)
}

   let pagination=(data)=>{
      $('#pagination').pagination({
    dataSource: data,
    pageSize: 5,
    callback: function(data, pagination) {
      DataShow(data);
    }
   })
   }

   let DataShow=(data)=>{
   let show=document.querySelector("#display");
   show.innerHTML=" "

   data.map((e)=>{
     show.innerHTML+=`
     <tr>
     <td> ${e.name} </td>
     <td> ${e.email} </td>
     <td> ${e.number} </td>
     <td> ${e.city} </td>
     <td> ${e.state} </td>
     <td> ${e.code} </td>
     <td> ${e.country} </td>
     
     <td> ${e.price} </td>
     <td onclick="confirmdel('${e.id}')"> Delete </td>
     <td onclick="updatedata('${e.id}')"> update </td>
     </tr>
     `
   })
   }

   let confirmdel=(id)=>{
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
         deleted(id)
       Swal.fire({
         title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
   }


let deleted=(id)=>{
   let url=`http://localhost:3000/costomber/${id}`;
   fetch (url,{method:"DELETE"});
}

   let finalupdate=async(id)=>{
      let inpname = document.querySelector("#upname").value;
      let inpemail = document.querySelector("#upemail").value;
      let inpnum = document.querySelector("#upnumber").value;
      let inpadd = document.querySelector("#upaddress").value;
      let inpct = document.querySelector("#upcity").value;
      let inpsta = document.querySelector("#upstate").value;
      let inpzip = document.querySelector("#upcode").value;
      let inpcount = document.querySelector("#upcountry").value;
      let inpprice = document.querySelector("#upprice").value;

      let url = `http://localhost:3000/costomber/${id}`;
      await fetch(url, {
         method: "PUT",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({
            name: inpname,
            email: inpemail,
            number: inpnum,
            address: inpadd,
            city: inpct,
            state: inpsta,
            code: inpzip,
            country: inpcount,
            price: inpprice
         })
      });

      alert("Data Updated Successfully!");
   };

   let updatedata = async(id)=>{
      let url = `http://localhost:3000/costomber/${id}`;
      let res = await fetch(url);
      let data = await res.json();
       try{
      let datafill = `
      <form action="" id="display" onsubmit="return finalupdate(${id}, event)">
         <div class="box">
            <input id="upname" name="username" type="text" value="${data.name}" placeholder="username"/>
            <input id="upemail" name="email" type="text" value="${data.email}" placeholder="E-mail" />
            <input id="upnumber" type="number" value="${data.number}" placeholder="Phone No"/>
            <input id="upaddress" type="text" value="${data.address}" placeholder="Address" />
            <input id="upcity" type="text" name="city" value="${data.city}" placeholder="City"/>
            <input id="upstate" type="text" name="state" value="${data.state}" placeholder="State"/>
            <input id="upcode" name="" type="text" value="${data.code}" required placeholder="Zipcode" />
            <input id="upcountry" type="text" name="country" value="${data.country}" required placeholder="Country"/>
            <input id="upprice" type="text" name="price" value="${data.price}" placeholder="Price"/>
         </div>
         <div class="box6">
            <input type="submit" value="Update" onclick="finalupdate('${data.id}')" >
         </div>
      </form>
      `;
      
      document.querySelector("#formdata").innerHTML = datafill;}
      catch (error) {
        console.error('Error fetching data:', error);
    }
      
   }
   

