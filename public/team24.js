export function initaializeteam24() {
  //coordinator
  const mainsection = document.querySelector(".mainpicture");
  mainsection.addEventListener("mouseleave", () => {
    mainsection.style.opacity = "0";
  });
  const coordinator = document.querySelector(".coordinator");
  coordinator.addEventListener("mouseover", () => {
    const main = document.querySelector(".mainpicture");
    main.style.opacity = "1";
    main.style.display = "flex";
    main.style.justifyContent = "center";
    main.style.alignItems = "center";

    main.innerHTML = `
             <img style="height:100%; width:100%; border: 10px solid white;" src="./images/mayer.png" alt="not"/>
               <div style="display:flex; flex-direction:column; opacity:0;" class="overlay"> Mayer_Goyal 
               <a><i class="fa-brands fa-instagram"></i></a>
               <a><i class="fa-brands fa-linkedin"></i></a>
               <a><i class="fa-brands fa-github"></i></a>
               <a><i class="fa-solid fa-envelope"></i></a>
               </div>
        `;
    main.addEventListener("mouseover", () => {
      document.querySelector(".overlay").style.opacity = "1";
      document.querySelector(".overlay").style.transform =
        "translate(-120px,-100px)";
    });
  });

  //Kaushambi coordinator

  const kcoordinator = document.querySelector(".kcoordinator");
  kcoordinator.addEventListener("mouseover", () => {
    const main = document.querySelector(".mainpicture");
    main.style.opacity = "1";
    main.style.display = "flex";
    main.style.justifyContent = "center";
    main.style.alignItems = "center";

    main.innerHTML = `
             <img style="height:100%; width:100%; border: 10px solid white;" src="./images/parth.png" alt="not"/>
               <div style="display:flex; flex-direction:column; opacity:0;" class="overlay"> Parth_Gupta 
               <a><i class="fa-brands fa-instagram"></i></a>
               <a><i class="fa-brands fa-linkedin"></i></a>
               <a><i class="fa-brands fa-github"></i></a>
               <a><i class="fa-solid fa-envelope"></i></a>
               </div>
        `;
    main.addEventListener("mouseover", () => {
      document.querySelector(".overlay").style.opacity = "1";
      document.querySelector(".overlay").style.transform =
        "translate(-120px,-100px)";
    });
  });

  //Fortis coordinator
  const fcoordinator = document.querySelector(".fcoordinator");
  fcoordinator.addEventListener("mouseover", () => {
    const main = document.querySelector(".mainpicture");
    main.style.opacity = "1";
    main.style.display = "flex";
    main.style.justifyContent = "center";
    main.style.alignItems = "center";

    main.innerHTML = `
             <img style="height:100%; width:100%; border: 10px solid white;" src="./images/anshika.png" alt="not"/>
               <div style="display:flex; flex-direction:column; opacity:0;" class="overlay">Anshika_Agarwal
               <a><i class="fa-brands fa-instagram"></i></a>
               <a><i class="fa-brands fa-linkedin"></i></a>
               <a><i class="fa-brands fa-github"></i></a>
               <a><i class="fa-solid fa-envelope"></i></a>
               </div>
        `;
    main.addEventListener("mouseover", () => {
      document.querySelector(".overlay").style.opacity = "1";
      document.querySelector(".overlay").style.transform =
        "translate(-130px,-100px)";
    });
  });
  //Treasurer
  const treasurer = document.querySelector(".treasurer");
  treasurer.addEventListener("mouseover", () => {
    const main = document.querySelector(".mainpicture");
    main.style.opacity = "1";
    main.style.display = "flex";
    main.style.justifyContent = "center";
    main.style.alignItems = "center";

    main.innerHTML = `
             <img style="height:100%; width:100%; border: 10px solid white;" src="./images/vivek.png" alt="not"/>
               <div style="display:flex; flex-direction:column; opacity:0;" class="overlay">Vivek_Nair
               <a><i class="fa-brands fa-instagram"></i></a>
               <a><i class="fa-brands fa-linkedin"></i></a>
               <a><i class="fa-brands fa-github"></i></a>
               <a><i class="fa-solid fa-envelope"></i></a>
               </div>
        `;
    main.addEventListener("mouseover", () => {
      document.querySelector(".overlay").style.opacity = "1";
      document.querySelector(".overlay").style.transform =
        "translate(-130px,-100px)";
    });
  });
  //Donation1
  const donation1 = document.querySelector(".dh1");
  donation1.addEventListener("mouseover", () => {
    const main = document.querySelector(".mainpicture");
    main.style.opacity = "1";
    main.style.display = "flex";
    main.style.justifyContent = "center";
    main.style.alignItems = "center";

    main.innerHTML = `
             <img style="height:100%; width:100%; border: 10px solid white;" src="./images/pushkar.png" alt="not"/>
               <div style="display:flex; flex-direction:column; opacity:0;" class="overlay">Pushkar_Sharma
               <a><i class="fa-brands fa-instagram"></i></a>
               <a><i class="fa-brands fa-linkedin"></i></a>
               <a><i class="fa-brands fa-github"></i></a>
               <a><i class="fa-solid fa-envelope"></i></a>
               </div>
        `;
    main.addEventListener("mouseover", () => {
      document.querySelector(".overlay").style.opacity = "1";
      document.querySelector(".overlay").style.transform =
        "translate(-130px,-100px)";
    });
  });

  //Digital head
  const digital = document.querySelector(".dg");
  digital.addEventListener("mouseover", () => {
    const main = document.querySelector(".mainpicture");
    main.style.opacity = "1";
    main.style.display = "flex";
    main.style.justifyContent = "center";
    main.style.alignItems = "center";

    main.innerHTML = `
             <img style="height:100%; width:100%; border: 10px solid white;" src="./images/astha.png" alt="not"/>
               <div style="display:flex; flex-direction:column; opacity:0;" class="overlay">Aastha
               <a><i class="fa-brands fa-instagram"></i></a>
               <a><i class="fa-brands fa-linkedin"></i></a>
               <a><i class="fa-brands fa-github"></i></a>
               <a><i class="fa-solid fa-envelope"></i></a>
               </div>
        `;
    main.addEventListener("mouseover", () => {
      document.querySelector(".overlay").style.opacity = "1";
      document.querySelector(".overlay").style.transform =
        "translate(-130px,-100px)";
    });
  });

  //She for she
  const sfs = document.querySelector(".sfs");
  sfs.addEventListener("mouseover", () => {
    const main = document.querySelector(".mainpicture");
    main.style.opacity = "1";
    main.style.display = "flex";
    main.style.justifyContent = "center";
    main.style.alignItems = "center";

    main.innerHTML = `
             <img style="height:100%; width:100%; border: 10px solid white;" src="./images/sakshi.png" alt="not"/>
               <div style="display:flex; flex-direction:column; opacity:0;" class="overlay">Sakshi_Khandelwal
               <a><i class="fa-brands fa-instagram"></i></a>
               <a><i class="fa-brands fa-linkedin"></i></a>
               <a><i class="fa-brands fa-github"></i></a>
               <a><i class="fa-solid fa-envelope"></i></a>
               </div>
        `;
    main.addEventListener("mouseover", () => {
      document.querySelector(".overlay").style.opacity = "1";
      document.querySelector(".overlay").style.transform =
        "translate(-130px,-100px)";
    });
  });
}
