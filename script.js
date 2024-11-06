
// tab-contents script
var tablinks = document.getElementsByClassName("tab-links")
        var tabcontents = document.getElementsByClassName("tab-contents")

        function opentab(tabname)
        {
            for(tablink of tablinks){
                tablink.classList.remove("active-link")
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab")
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

    //    menubar script
       
    var sidemeu = document.getElementById("sidemenu");

    function openmenu(){
     sidemeu.style.right = "0";
    }
    function closemenu(){
     sidemeu.style.right = "-200px";
    }  


    // Input your web app URL script
    const scriptURL =   'https://script.google.com/macros/s/AKfycbxTxOhie3MDpDH7U5NTrJ9IGEaItn9phgbEt0C0rDGVUPj2Azp5x8jpzA1qTwhQAqo/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent succesfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },3000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })

    // background script

   