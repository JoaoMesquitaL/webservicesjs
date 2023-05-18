function qrGenerate(){
	const input = document.querySelector("#qrcode").value
	if(!input){
		alert("Por favor, preencha o campo para gerar o QrCode!")
	}else{
		ImgChang(input)
		dlPNGActivate()
	}
}

function ImgChang(input){
	const qrcode = document.getElementById("qrcodeimg")
	qrcode.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="+input;
}

function dlPNGActivate(){
	document.getElementById("dl-png").style.display = 'block';
}

function gwppLink(){
		const wppInput = document.querySelector("#wpplinkNumero").value
		if(!wppInput){
			alert("Por favor, preencha o campo para gerar o QrCode!")
		}else{
			wppGenerator(wppInput);
			dlWpplinkActivate();
		}
}

function wppGenerator(wppInput){
	const result = "https://wa.me/55"+wppInput
	
	const inpRes = document.getElementById('wppLinkResult')
	inpRes.value = result
}

function dlWpplinkActivate(){
	document.getElementById("copy-wpp").style.display = 'block';
}