export function initializeadminscript(){
     //const text=document.querySelector(".texth1");
     const sendbutton1=document.getElementById("sendemail1");
     sendbutton1.addEventListener('click',(e)=>{
        e.preventDefault();
        const name=document.getElementById("name1").value ;

        const email=document.getElementById("email1").value;
        console.log(name,email);
        const data={
            name:name,
            email:email,
        }
        fetch("http://localhost:5500/sendemail1", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.text())
          .then((data) => {
            console.log(data); // Success response
            //alert("Email sent successfully");
          })
          .catch((error) => {
            console.error("Error:", error);
            alert("Error sending email");
          });
     })
}