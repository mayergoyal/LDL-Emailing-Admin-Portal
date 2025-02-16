//require('dotenv').config();
export function initializeadminscript() {
  //const text=document.querySelector(".texth1");
  //FOE NEW YEAR EMAIL
  const sendbutton1 = document.getElementById("sendemail1");
  sendbutton1.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("name1").value;

    const email = document.getElementById("email1").value;
    console.log(name, email);
    const data = {
      name: name,
      email: email,
    };
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
  });

  //FOR DEEPAWALI EMAIL

  const sendbutton2 = document.getElementById("sendemail2");
  sendbutton2.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("name2").value;

    const email = document.getElementById("email2").value;
    console.log(name, email);
    const data = {
      name: name,
      email: email,
    };
    fetch("http://localhost:5500/sendemail2", {
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
  });
}

//specific job script in admin section
const donationbutton = document.querySelector(".donationbutton");

if (donationbutton) {
  donationbutton.addEventListener("click", function () {
  
    const loginbody = document.querySelector(".loginbody");
    loginbody.style.opacity = "1";
    loginbody.innerHTML = `
<div class="backfromlogin">❌</div>
        <h1>Login</h1>
         
        <h3>Enter the Donation Team's password </h3>
        <br>
        <input type='text' class='inputpass'/>
        <button class='submitbuttondonation'>
           Enter
        </button>
     `;
    const backfromlogin = document.querySelector(".backfromlogin");
    backfromlogin.addEventListener("click", () => {
      console.log("ho gya h tujko toh pyar sajna ");
      loginbody.style.opacity = "0";
      return;
    });
    document
      .querySelector(".submitbuttondonation")
      .addEventListener("click", () => {
        const inputpass = document.querySelector(".inputpass").value;
        fetch("http://localhost:5500/verify-donation-pass", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password: inputpass }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.valid) {
              window.location.href = "donationportal.html";
            } else {
              alert("incorrect pass key");
            }
          })
          .catch((error) => {
            console.error("error", error);
          });
      });
  });
} else {
  console.error("Donation button not found in the DOM.");
}

//attendance button
const attendancebutton = document.querySelector(".attendancebutton");

if (attendancebutton) {
  
  attendancebutton.addEventListener("click", function () {
    console.log("hmm m andar hu attendance button k");
    
    const loginbody = document.querySelector(".loginbody");
    loginbody.style.opacity = "1";
    loginbody.innerHTML = `
<div class="backfromlogin">❌</div>
        <h1>Login</h1>
         
        <h3>Enter the Donation Team's password </h3>
        <br>
        <input type='text' class='inputpass'/>
        <button class='submitbuttondonation'>
           Enter
        </button>
     `;
    const backfromlogin = document.querySelector(".backfromlogin");
    backfromlogin.addEventListener("click", () => {
      console.log("ho gya h tujko toh pyar sajna ");
      loginbody.style.opacity = "0";
      return;
    });
    document
      .querySelector(".submitbuttondonation")
      .addEventListener("click", () => {
        const inputpass = document.querySelector(".inputpass").value;
        fetch("http://localhost:5500/verify-attendance-pass", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password: inputpass }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.valid) {
              window.location.href = "attendanceportal.html";
            } else {
              alert("incorrect pass key");
            }
          })
          .catch((error) => {
            console.error("error", error);
          });
      });
  });
} else {
  console.error("Attendance button not found in the DOM.");
}

//kaushambi...deatails
const kaushambibutton=document.querySelector(".kaushambibutton");
if (kaushambibutton) {
  kaushambibutton.addEventListener("click", () => {
    const loginbody = document.querySelector(".loginbody");
    loginbody.style.opacity = "1";
    loginbody.innerHTML = `
<div class="backfromlogin">❌</div>
        <h1>Login</h1>
         
        <h3>Enter the Donation Team's password </h3>
        <br>
        <input type='text' class='inputpass'/>
        <button class='submitbuttondonation'>
           Enter
        </button>
     `;
    const backfromlogin = document.querySelector(".backfromlogin");
    backfromlogin.addEventListener("click", () => {
      console.log("ho gya h tujko toh pyar sajna ");
      loginbody.style.opacity = "0";
      return;
    });
    document
      .querySelector(".submitbuttondonation")
      .addEventListener("click", () => {
        const inputpass = document.querySelector(".inputpass").value;
        fetch("http://localhost:5500/verify-kaushambi-pass", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password: inputpass }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.valid) {
              window.location.href = "kaushambiportal.html";
            } else {
              alert("incorrect pass key");
            }
          })
          .catch((error) => {
            console.error("error", error);
          });
      });
  });
} else {
  console.error("kaushambi button not found in the DOM.");
}


//fortis...deatails
const fortisbutton=document.querySelector(".fortisbutton");
if (fortisbutton) {
  fortisbutton.addEventListener("click", () => {
    const loginbody = document.querySelector(".loginbody");
    loginbody.style.opacity = "1";
    loginbody.innerHTML = `
<div class="backfromlogin">❌</div>
        <h1>Login</h1>
         
        <h3>Enter the Donation Team's password </h3>
        <br>
        <input type='text' class='inputpass'/>
        <button class='submitbuttondonation'>
           Enter
        </button>
     `;
    const backfromlogin = document.querySelector(".backfromlogin");
    backfromlogin.addEventListener("click", () => {
      console.log("ho gya h tujko toh pyar sajna ");
      loginbody.style.opacity = "0";
      return;
    });
    document
      .querySelector(".submitbuttondonation")
      .addEventListener("click", () => {
        const inputpass = document.querySelector(".inputpass").value;
        fetch("http://localhost:5500/verify-fortis-pass", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password: inputpass }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.valid) {
              window.location.href = "fortisportal.html";
            } else {
              alert("incorrect pass key");
            }
          })
          .catch((error) => {
            console.error("error", error);
          });
      });
  });
} else {
  console.error("fortisbutton not found in the DOM.");
}


//finance...deatails
const financebutton = document.querySelector(".financebutton");
if (financebutton) {
  financebutton.addEventListener("click", () => {
    const loginbody = document.querySelector(".loginbody");
    loginbody.style.opacity = "1";
    loginbody.innerHTML = `
<div class="backfromlogin">❌</div>
        <h1>Login</h1>
         
        <h3>Enter the Donation Team's password </h3>
        <br>
        <input type='text' class='inputpass'/>
        <button class='submitbuttondonation'>
           Enter
        </button>
     `;
    const backfromlogin = document.querySelector(".backfromlogin");
    backfromlogin.addEventListener("click", () => {
      console.log("ho gya h tujko toh pyar sajna ");
      loginbody.style.opacity = "0";
      return;
    });
    document
      .querySelector(".submitbuttondonation")
      .addEventListener("click", () => {
        const inputpass = document.querySelector(".inputpass").value;
        fetch("http://localhost:5500/verify-finance-pass", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password: inputpass }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.valid) {
              window.location.href = "financeportal.html";
            } else {
              alert("incorrect pass key");
            }
          })
          .catch((error) => {
            console.error("error", error);
          });
      });
  });
} else {
  console.error("financebutton not found in the DOM.");
}
