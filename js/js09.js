alert('09');
//function init(){
	var title=document.getElementById('title')
	, closeup=document.getElementById('photo')
	, pets=document.getElementById('pets')
	, petsPhoto=pets.getElementsByTagName('img')
	;
	
	for(i=0,L=petsPhoto.length; i<L; i++){
		petsPhoto[i].onclick=function(){	
     	title.innerHTML=this.alt;
     	closeup.src=this.src;
//     	return false;     
  	}	// function()
	}// for  
	

//)
//window.addEventListener('load',init);
//window.onload(init);
