
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
    const scriptURL =   'https://script.google.com/macros/s/AKfycbyWTpt4ZVOmhewmTvmhL7-zz7kT0yrHJvhu-9G_6ayr2oPpqOLnm1xfArFOSV9yJ5yw/exec'
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

   
