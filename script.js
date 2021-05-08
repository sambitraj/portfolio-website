console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}


function _class(name){
	return document.getElementsByClassName(name);
  }
   
  let tabPanes = _class("tab-header")[0].getElementsByTagName("div");
   
  for(let i=0;i<tabPanes.length;i++){
	tabPanes[i].addEventListener("click",function(){
	  _class("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
	  tabPanes[i].classList.add("active");
	  
	  _class("tab-indicator")[0].style.top = `calc(80px + ${i*50}px)`;
	  
	  _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
	  _class("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");
	  
	});
  }