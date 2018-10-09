var showMenu = 1;
var menu = document.getElementById('menu');
menu.className = 'inactive'
document.getElementById('hamburger').addEventListener('click', function(){
	if(showMenu){
		menu.className = 'active'
		showMenu--
	}else{
		menu.className = 'inactive'
		showMenu++
	}
})
