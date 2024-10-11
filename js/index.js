const sidebar =document.querySelector(".sidebar")
        const sidebartoogle=document.querySelector(".sidebar-toggle")
        const closebtn=document.querySelector(".close-btn")
        sidebartoogle.addEventListener('click',function(){
       sidebar.classList.toggle('show-sidebar')

           /* sidebar.classList.add("show-sidebar")
            sidebartoogle.style.display="none"*/
        })
        closebtn.addEventListener('click',function(){
            sidebar.classList.remove("show-sidebar")
            sidebartoogle.style.display="block"
        })

        //preloader
        const loader =document.getElementById('preloader');
        window.addEventListener("load",function(){
            loader.style.display="none"
        })