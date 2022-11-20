
function validar(){

	//Validación de clogin
	var clogin = document.formulario.clogin.value;
	if(clogin.length == 0){

	}else{ // si la longitud no es cero
		if((clogin.length >=4) && (clogin.length <=8)){
			if((clogin.search(/[A-Z]/) != -1) && (clogin.search(/[\W\S_]/) != -1)){ 
						// [\W\S_] significa \W will select all non "word" characters equivalent to [^a-zA-Z0-9_] 
						// \S will select all non "whitespace" characters equivalent to [ \t\n\r\f\v]
						// _ negado		
				alert("El campo "+clogin+" no debe de contener mayúsculas ni caracteres especiales");
				return false;
			}else if(clogin.search(/[a-z]/) == -1 && (clogin.search(/[0-9]/) == -1)){
					alert("El campo "+clogin+" no contiene ni letras minúsculas ni números");
					return false;	
			}
			
		}else{
			alert("El campo "+clogin+" debe contener entre 4 y 8 caracteres");
			return false;
		}
	}

	//Validación contraseña
	var cpasswd = document.formulario.cpasswd.value;
	if(cpasswd.length == 0){

	}else{
		if((cpasswd.length >=6) && (cpasswd.length <=12)){
			if((cpasswd.search(/[a-z]/))== -1){
				alert("El campo "+cpasswd+" debe contener al menos una minúscula");
				return false;
			}else{
				if((cpasswd.search(/[A-Z]/))== -1){
					alert("El campo "+cpasswd+" debe contener al menos una mayúscula");
					return false;
				}else{
					if((cpasswd.search(/[0-9]/))== -1){
						alert("El campo "+cpasswd+" debe contener al menos un número");
						return false;
					}else{
						if((cpasswd.search(/[+\-\*\/]/))== -1){
							alert("El campo "+cpasswd+" debe contener al menos un símbolo /+-*/");
							return false;
						}
					}
				}
			}
		}else{
			alert("El campo "+cpasswd+" debe contener entre 6 y 12 caracteres");
			return false;
		}
	}

	//Verificación del dni
	var cdni = document.formulario.cdni.value;
	if(cdni.length == 0){

	}else{
		if(cdni.length == 9){
			if(cdni[0]>= 0 && cdni[0]<= 7){
				if(cdni[8] != cdni[8].toUpperCase()){
					alert("El campo "+cdni+" no contiene una letra final o no es mayúscula");
					return false;
				}
			}else{
				alert("El campo "+cdni+" no contiene un número entre 0 y 7 en la posición inicial");
				return false;
			}
		}else{
			alert("El campo "+cdni+" debe contener 8 caracteres y una letra");
			return false;
		}
	}
	

//

	var ahora = new Date();
	document.formulario.cdate.value = ahora.getDate()+"/"+ahora.getMonth()+"/"+ahora.getFullYear()+" "+ahora.getHours()+":"+ahora.getMinutes()+":"+ahora.getSeconds()
	
	// NAVEGADOR

	if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
        document.formulario.cbrowser.value='Opera';
    } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
        document.formulario.cbrowser.value='Chrome';
    } else if(navigator.userAgent.indexOf("Safari") != -1) {
        document.formulario.cbrowser.value='Safari';
    } else if(navigator.userAgent.indexOf("Firefox") != -1 ){
        document.formulario.cbrowser.value='Firefox';
    } else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
        document.formulario.cbrowser.value='IE';
    } else {
        document.formulario.cbrowser.value='Unknown';
    }



	if(document.formulario.cmethod[0].checked && document.formulario.cencoding[1].checked){
		alert("La codificación multipart/form-data sólo se puede utilizar con el método POST");
		return false;
	}

	var cmethod = document.getElementsByName("cmethod");
	for(var i=0; i<cmethod.length; i++){
		if(cmethod[i].checked) {
			document.formulario.method = cmethod[i].value;
			//alert("se envía método "+ cmethod[i].value )
		}
	}
	
	
	var cencoding = document.getElementsByName("cencoding");
	for(var j=0; j<cencoding.length; j++){
		if(cencoding[j].checked){
			document.formulario.enctype = cencoding[j].value;
			//alert("se envía enctype "+ cencoding[j].value)
		}
	}

	return true
}




function seleccionarTodo() {
    for (let i=0; i < document.formulario.elements.length; i++) {
        if((document.formulario.elements[i].type == "checkbox") && (document.formulario.elements[i].checked == false)) {
            document.formulario.elements[i].checked = true;
        }
		else if((document.formulario.elements[i].type == "checkbox") && (document.formulario.elements[i].checked == true)) {
            document.formulario.elements[i].checked = false;
        }
    }
}

function seleccionarNinguno(){
	for (let i=0; i < document.formulario.elements.length; i++) {
		/*if((document.formulario.elements[i].type == "checkbox") && (document.formulario.elements[i].checked == false)) {
			document.formulario.elements[i].checked = true;
		}
		else */if((document.formulario.elements[i].type == "checkbox") && (document.formulario.elements[i].checked == true)) {
			document.formulario.elements[i].checked = false;
		}
	}
}	

