

        class Animal {
        
        constructor(cor, peso, nation, sleep, air) {
        
        this.cor = cor
        this.peso = peso
        this.nation = nation
        this.sleep = sleep
        this.air = air
        
        }
        
        dormir() {

        console.log('dorme') 
        
        }
        
        voar() { 
        
        console.log('voa')
        
        }
        
        }      
        
        class Aguia extends Animal  {
        
        constructor(speed, cor, peso, nation, sleep, air) {
        
        super(cor, peso, nation, sleep, air)
        
        
        this.speed = speed
    }

     
    dormir() {     
        
        console.log('dorme') 
        
        
         }               
          
          voar() { 
        
        console.log('voa')        
         }
        }
        
        
        class Coruja extends Aguia {
        
        constructor(lowAir, sleepDay, speed, cor, peso, nation, sleep, air) {
        
        super( speed, cor, peso, nation, sleep) 
        
        this.lowAir = lowAir
        this.sleepDay = sleepDay
        }
         
        dormir() {
                
        console.log('dorme') 
               
         }
        
        voar() { 
                       
        console.log('voa')     
              
        }

       
    }


    
    function x() {

      let coruja = new Coruja('', 'Sleep Day', 150, 'Branco', 209, 'Brasil', 'Dorme de Dia', '')

    console.log(coruja)


coruja.dormir()

    let corujaOuro = new Coruja('', '', 250, 'Dourado', 350, 'Brasil', '')

    console.log(corujaOuro)

    corujaOuro.voar()
}

x()


