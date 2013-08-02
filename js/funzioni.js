/* ------ variables ------ */

var click_counter = 0;

/* ------ functions ------ */

function spostati(dove){
	document.location.href = dove;
}

/* ------ popup ------*/

function apripop(path){
	document.location.href = path;
}

function chiudipop(dove){
	document.location.href = dove + '#close';	
}

/* --- functions menu --- */
function menu_chk(){
	click_counter++;
	if(click_counter%2!=0){
		abbassa_menu();
	}
	else
	{
		alza_menu();
	}
}

function alza_menu(){
	$("#menu").slideDown();
}

function abbassa_menu(){
	$("#menu").slideUp();
}