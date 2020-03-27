const dom = {
	h : document.querySelector('.h'),
	m : document.querySelector('.m'),
	s : document.querySelector('.s'),
	date : document.querySelector('.date'),
	months : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};

function clock(){
	const d = new Date();
	
	dom.date.innerText = `${dom.months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
	dom.h.innerText = d.getHours() + ":";
	dom.m.innerText = rewriteFirstNull(d.getMinutes()) + ":";
	dom.s.innerText = rewriteFirstNull(d.getSeconds());
}

function rewriteFirstNull(num){
	return num < 10? '0' + num: num;
}
setInterval(clock,1000);