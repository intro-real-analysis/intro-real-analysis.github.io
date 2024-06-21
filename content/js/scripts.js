function w3_open(){document.getElementById("mySidebar").style.display="block",document.getElementById("myOverlay").style.display="block"}function w3_close(){document.getElementById("mySidebar").style.display="none",document.getElementById("myOverlay").style.display="none"}const myTop=document.getElementById("myTop"),myTitle=document.getElementById("myTitle");function myTopBar(){myTop&&myTitle&&(130<document.body.scrollTop||130<document.documentElement.scrollTop?(document.getElementById("myTop").classList.add("w3-card-4","w3-animate-opacity"),document.getElementById("myTitle").classList.add("w3-show-inline-block")):(document.getElementById("myTitle").classList.remove("w3-show-inline-block"),document.getElementById("myTop").classList.remove("w3-card-4","w3-animate-opacity")))}window.onscroll=function(){myTopBar(),scrollFunction()};let mybutton=document.getElementById("toTop"),prevScrollpos=window.scrollY;function scrollFunction(){mybutton.style.display="none",(500<document.body.scrollTop||500<document.documentElement.scrollTop)&&(mybutton.style.display="block")}function topFunction(){document.querySelectorAll(".toc-chapter a").forEach(e=>{e.classList.remove("active"),e.classList.remove("highlight-list")}),document.body.scrollTop=0,document.documentElement.scrollTop=0}function myAccordion(e){e=document.getElementById(e);-1==e.className.indexOf("w3-show")?(e.className+=" w3-show",e.previousElementSibling.className+=" w3-theme"):(e.className=e.className.replace("w3-show",""),e.previousElementSibling.className=e.previousElementSibling.className.replace(" w3-theme",""))}function myHighlightedNavBar(e){e=document.getElementById(e);-1==e.className.indexOf("w3-grey")?(e.className+=" w3-grey",e.previousElementSibling.className+=" w3-theme"):(e.className=e.className.replace("w3-grey",""),e.previousElementSibling.className=e.previousElementSibling.className.replace(" w3-theme",""))}window.addEventListener("scroll",function(){var e=document.querySelectorAll('div[id^="section"]');let l=document.querySelectorAll(".toc-chapter a"),n=window.scrollY;e.forEach((e,t)=>{var o=e.offsetTop-100,e=o+e.clientHeight;n>=o&&n<e&&(l.forEach(e=>{e.classList.remove("active"),e.classList.remove("highlight-list")}),l[t].classList.add("active"),l[t].classList.add("highlight-list"))})});let darkModeIcon=document.getElementById("dark-mode-toggle"),darkModeBar=document.getElementById("mySidebar"),imageLogo=document.getElementById("myLogo"),show;function myDarkMode(){var e=document.body,t=document.getElementById("mySidebar"),e=(e.classList.toggle("latex-dark"),t.classList.toggle("latex-dark"),document.getElementById("myLogo")),t=(0==show?(show=!0,e.src="imgs/my-logo-white.png"):(show=!1,e.src="imgs/my-logo-black.png"),document.getElementById("dark-mode-toggle"));'<i class="fa-solid fa-moon"></i>'===t.innerHTML.trim()?t.innerHTML='<i class="fa-regular fa-sun"></i>':t.innerHTML='<i class="fa-solid fa-moon"></i>'}darkModeIcon&&darkModeBar&&imageLogo?window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?(show=!0,document.body.classList.toggle("latex-dark"),darkModeBar.classList.toggle("latex-dark"),darkModeIcon.innerHTML='<i class="fa-regular fa-sun"></i>',imageLogo.src="imgs/my-logo-white.png"):(show=!1,darkModeIcon.innerHTML='<i class="fa-solid fa-moon"></i>',imageLogo.src="imgs/my-logo-black.png"):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&document.body.classList.toggle("latex-dark");let modal=document.getElementById("myModal"),span=document.getElementsByClassName("close")[0];function showMessage(){modal.style.display="block"}span.onclick=function(){modal.style.display="none",clearInterval(myInterval)},window.onclick=function(e){e.target==modal&&(modal.style.display="none",clearInterval(myInterval))};let myInterval=setInterval(function(){showMessage()},18e5);function includeHTML(){let e,t,o,l,n;for(e=document.getElementsByTagName("*"),t=0;t<e.length;t++)if(l=(o=e[t]).getAttribute("w3-include-html"))return(n=new XMLHttpRequest).onreadystatechange=function(){4==this.readyState&&(200==this.status&&(o.innerHTML=this.responseText),404==this.status&&(o.innerHTML="Page not found."),o.removeAttribute("w3-include-html"),includeHTML())},n.open("GET",l,!0),void n.send()}function scrollToElementWithOffset(e,t){var e=document.querySelector(e);e&&(e=e.getBoundingClientRect().top+window.scrollY-t,window.scrollTo({top:e,behavior:"smooth"}))}var links=document.querySelectorAll('a[href^="#"]');links.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),scrollToElementWithOffset(this.getAttribute("href"),50)})}),w3CodeColor(),includeHTML();