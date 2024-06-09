//your JS code here. If required.
const inc=document.getElementById('inc');
const btn=document.getElementById('btn');

let count=0;

btn.addEventListener("click",function() {
	alert('lockhost3000says')
	count++;
	inc.innerText=count;
})
