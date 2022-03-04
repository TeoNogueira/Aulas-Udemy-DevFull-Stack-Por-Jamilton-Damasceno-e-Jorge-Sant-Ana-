

class ClanDados {

constructor(nomeDoClan, nomeChar, classe, typeReputation, emblemStrategy, gold) 

{

this.nomeDoClan = nomeDoClan
this.nomeChar = nomeChar
this.classe = classe

this.typeReputation = typeReputation
this.emblemStrategy = emblemStrategy
this.gold = gold
}

FormClanAndChar() {

 console.log(`Clan: ${this.nomeDoClan}\n
 Personagem: ${this.nomeChar}\n
 Classe: ${this.classe}\n
 Reputação: ${this.typeReputation}\n
 Emblema: ${this.emblemStrategy}\n
 Ouro: ${this.gold}\n
 \n
 `)//Backticks and template-string
 



}
}

function clans() {

let clandados = new ClanDados('Age Of Wind', 'TeoBaguera', 'Elf-Aqua-Archer', 3700, 'Air_M-water_night_ranger', 600000 )

clandados.FormClanAndChar()


//Outro clan

let newData = { //OBJETO LITERAL

    nomeDoClan: 'RockId', 
    nomeChar: 'Selena', 
    classe: 'NightElf',
    typeReputation: 5000,
    emblemStrategy: 'Full-Damage',
    gold: 600000,



    FormClanAndChar: function() { //CHAMANDO A AÇÃO QUE ESTÁ NA CLASSE

        console.log(`Clan: ${this.nomeDoClan}\n
 Personagem: ${this.nomeChar}\n
 Classe: ${this.classe}\n
 Reputação: ${this.typeReputation}\n
 Emblema: ${this.emblemStrategy}\n
 Ouro: ${this.gold}\n
 `)
    }
    
    
}
//Atribuindo para a variavel, e Puxando o dado da ação da Classe Criada (INVOCAÇÃO DA CLASSE)
newData.FormClanAndChar()

}

clans() //iNVOCAÇÃO DA FUNÇÃO


    