function getParams() {
	var idx = document.URL.indexOf('?');
	var params = new Array();
	if (idx != -1) {
		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
		for (var i=0; i<pairs.length; i++) {
			nameVal = pairs[i].split('=');
			params[nameVal[0]] = nameVal[1];
		}
   }
	return params;
}

window.onload = loginLoad;
function loginLoad(){
  // วิธีใช้ getParams()
  	var loginform = document.getElementById("myLogin");
  	loginform.onsubmit = checkLogin;
	var parameter = getParams();
  
}

function checkLogin(){
  //ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย

  if(loginform.username.value == parameter["username"] && loginform.password.value == parameter["password"]){
  alert("Login Complete")
}
else {
  alert("username or password wrong");
  return false;
  }
}