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

function tstButton(){
	alert("Chegou!")
}

function gwppLink(){
		const wppInput = document.querySelector("#wpplink").value
		wppLink = 'http://wa.me/' + wppInput
		console.log("Seu link: ", wppLink )
}