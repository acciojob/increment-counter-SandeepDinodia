//your JS code here. If required.
const counter=document.getElementById('counter');
const incrementBtn=document.getElementById('incrementBtn');

let count=0;

incrementBtn.addEventListener("click",function() {
	alert('Current Counter Value: ' + count);
	count++;
	counter.innerText=count;
});
