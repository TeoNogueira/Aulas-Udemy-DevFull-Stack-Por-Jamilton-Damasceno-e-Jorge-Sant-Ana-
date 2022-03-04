
       
       //orientada a objetos
       // pillar da abstração

// class representa o modelo da entidade/objeto

class ContaBancaria {


constructor() {
  // características/atribuições
   this.agência = 1075

   this.numeroConta = 8351125

   this.saldo = 50

   this.limite = 450


}
     // ações/modelos
    depositar(valorDeposito) {

this.saldo += valorDeposito


    }

sacar(valorSaque) {

this.saldo -= valorSaque

}


consultarSaldo() {

return this.saldo


}
}
    // identidade
let x = new ContaBancaria()
let y = new ContaBancaria()
       

 x.depositar(1000)

 console.log(x.consultarSaldo())     
 x.sacar(500)
 console.log('Sobrou: ' + x.consultarSaldo()) 



 console.log(y.consultarSaldo())
   