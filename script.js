
function semMsg() {
    document.getElementById('saida').className = 'saida'
    document.getElementById('section').className = 'section'
    let msg = document.getElementById('msg').value
    if (msg == "") {
        document.getElementById('saida').textContent = 'Digite o texto que você deseja criptografar ou descriptografar.'
        try {
            let btncopiar = document.getElementById('copiar')
            if (btncopiar !== null) {
                btncopiar.remove();
            }
        } catch (error) {}

        let checkimg = document.getElementById('img');
        let checkalerta = document.getElementById('alerta');
        if (checkimg === null && checkalerta === null) {
            let img = document.createElement('img');
            img.id = 'img'
            img.src = 'img/default.png'
            let alerta = document.createElement('h1')
            alerta.id = 'alerta'
            alerta.className = 'alerta'
            alerta.textContent = 'Nenhuma mensagem encontrada'

            let section = document.getElementById('section')
            section.appendChild(img)
            section.appendChild(alerta)
            let saida = document.getElementById('saida')
            saida.parentNode.insertBefore(img, saida)
            saida.parentNode.insertBefore(alerta, saida)
        }
    }
}

semMsg()
function cripto(){
    let msg = document.getElementById('msg').value
    if(msg !== ""){
        caracteres = msg.split("")
        if (/^[a-z0-9\s.,;:'"!?()]+$/.test(msg)){
            for (let i = 0; i < caracteres.length; i++){
                if (caracteres[i] == "a"){
                    caracteres[i] = "ai"}
                if (caracteres [i] == "e"){
                    caracteres [i] = "enter"}
                if (caracteres [i] == "i"){
                    caracteres [i] = "imes"}
                if (caracteres [i] == "o"){
                    caracteres [i] = "omer"}
                if (caracteres [i] == "u"){
                    caracteres [i] = "ufat"}
            }
        }else{
            alert('Apenas letras minúsculas e sem acentos')
            document.getElementById('msg').value = ""
            caracteres = ""
        }
        if(caracteres !== ""){
            let img = document.getElementById('img')
            let alerta = document.getElementById('alerta')
            if (img !== null && alerta !== null){
                img.remove()
                alerta.remove()
            }
        }
        
        let saida = caracteres.join("")
        mostrarMsg(saida)
    }else{
        semMsg()
    }
    return false}

function descripto(){
    let msg = document.getElementById('msg').value
    if(msg !== ""){
        function replace_msg(msg, string, replace) {
            return msg.replace(new RegExp(string, 'g'), replace);
        }
        msg = replace_msg(msg, "ai", "a")
        msg = replace_msg(msg, "enter", "e")
        msg = replace_msg(msg, "imes", "i")
        msg = replace_msg(msg, "omer", "o")
        msg = replace_msg(msg, "ufat", "u")

        let img = document.getElementById('img')
        let alerta = document.getElementById('alerta')
        if (img !== null && alerta !== null){
            img.remove()
            alerta.remove()
        }
        mostrarMsg(msg)
    }else{
        semMsg()
    }
    return false}

function mostrarMsg(msg){
    document.getElementById('saida').textContent = msg
    document.getElementById('msg').value = ""
    
    let checkbtn = document.getElementById('copiar')
    if(checkbtn === null){
        let btncopiar = document.createElement('button')
        btncopiar.className = 'copiar'
        btncopiar.id = 'copiar'
        btncopiar.textContent = "Copiar"
        btncopiar.addEventListener('click', copiar)
        document.getElementById('section').appendChild(btncopiar) 
    }
    document.getElementById('saida').className = 'saida-depois'
    document.getElementById('section').className = 'section-depois'
}

function copiar(){
    let btncopiar = document.getElementById('copiar')
    let texto = document.getElementById('saida')
    let textoSelecionado = document.createRange()
    textoSelecionado.selectNode(texto)
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(textoSelecionado)
    
    try {
        let successful = document.execCommand('copy')
        let msg = successful ? 'bem-sucedida' : 'mal-sucedida'
        console.log('Cópia de texto ' + msg)
        btncopiar.className = 'copiado'
        btncopiar.textContent = 'Copiado!'
        setTimeout(function(){
            btncopiar.className = 'copiar'
            btncopiar.textContent = 'Copiar'
        }, 500)
    } catch (err) {
        alert('Oops, não foi possível copiar')
        btncopiar.className = 'erro'
    }

    window.getSelection().removeAllRanges()
    return false
}
    