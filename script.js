//your JS code here. If required.
const counter=document.getElementById('counter');
const incrementBtn=document.getElementById('incrementBtn');

let count=0;

incrementBtn.addEventListener("click",function() {
	alert('lockhost3000says')
	count++;
	counter.innerText=count;
})
