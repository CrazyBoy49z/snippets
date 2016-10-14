<script>
var js1="/path/to/file.js";
function later(){
	var sc=document.createElement("script");
	sc.src=js1;
	document.body.appendChild(sc);
	}if(window.addEventListener){window.addEventListener("load",later,false)}else{if(window.attachEvent){window.attachEvent("onload",later)}else{window.onload=later}};
</script>	