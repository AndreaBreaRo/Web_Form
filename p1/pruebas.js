function ValidarUsuario(){
	var clogin = "andbr1"
	if(clogin.length >=4 && clogin.length <=8){
		if(!(/^[a-z]*$/.test(clogin)) && !(/^\d{9}$/.test(clogin))) 
		{
			alert("El campo "+clogin+" sólo debe contener letras minúsculas (ASCII) y números")
			return false
		}
	}else{
		alert("El campo Usuario debe contener entre 4 y 8 caracteres");
		return false;
	}
}