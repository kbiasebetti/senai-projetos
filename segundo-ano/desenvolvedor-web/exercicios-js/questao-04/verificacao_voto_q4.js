function verificacao(){
    let nome = document.getElementById('nome').value
    let idade = document.getElementById('idade').value

    if(idade >=18 && idade <=70 ){
        res.innerHTML = nome + ', o seu voto é obrigatório pois você tem ' + idade + ' anos'
    }

    else if((idade <18 && idade >15) || (idade > 70)){
        res.innerHTML = nome + ', o seu voto é opcional pois você tem ' + idade + ' anos'
    }

    else{
        res.innerHTML = nome + ', você não precisa votar pois você tem ' + idade + ' anos'
    }
}
