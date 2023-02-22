const cardInput = document.querySelectorAll("#cardInput")
const  userName = document.querySelector('#UserName')
const date = document.querySelector('#date')
const cvv = document.querySelector('#CVV')
const cardType = document.querySelector('#userCardType')
const first = document.querySelector('#first')
const second = document.querySelector('#second')
const third = document.querySelector('#third')
const fourth = document.querySelector('#fourth')
const cardLabelName =document.querySelector('#label-name')
const userDate = document.querySelector('#userDate')
const error = document.querySelector('#error')
const cardInner = document.querySelector('#card-inner')
const userCVV = document.querySelector('#cvv-input')

cardInput[0].addEventListener('input', (e)=> {
    
    if(e.target.value.length < 5){
        
        first.textContent = e.target.value
    //     let regex  = /[\d+]/.test(e.target.value)
    // if(!regex){
    //     error.style.display = `block`
    // }

    // else {
    //     error.style.display = `none`
    // }
       let splitednum = e.target.value.split('') 
       if(splitednum[0] == 5){
        cardType.src  = `images/mastercard.png`
       }
       
       if(splitednum[0] == 4){
cardType.src= `images/visa.png`
       }

       if(splitednum[0]== 3){
        cardType.src=`images/Verve.png`
       }
       
       if(splitednum == 0){
        error.style.display = `none`
       }

       else if(splitednum[0]==0 || splitednum[0]==1||splitednum[0]==2 || splitednum[0]==6 || splitednum[0] == 7|| splitednum[0]==8 || splitednum[0]== 9){
        error.style.display = `block` 
       }

       
    }
    

    if(e.target.value.length == 4){
cardInput[1].focus()

    }
 
    

})

cardInput[1].addEventListener('input', (e)=> {
    
    if(e.target.value.length < 5){
        second.textContent = e.target.value
        let regex  = /[\d+3]/.test(e.target.value)
        if(!regex){
            error.style.display = `block`
            console.log('true')
        }
    
        else {
            error.style.display = `none`
        }
        
    }
    

    if(e.target.value.length == 4){
cardInput[2].focus()

    }
 

})

cardInput[2].addEventListener('input', (e)=> {
    
    if(e.target.value.length < 5){
        third.textContent = e.target.value
        let regex  = /[\d+]/.test(e.target.value)
        if(!regex){
            error.style.display = `block`
            console.log('true')
        }
    
        else {
            error.style.display = `none`
        }
    }
    

    if(e.target.value.length == 4){
cardInput[3].focus()

    }
 

})
cardInput[3].addEventListener('input', (e)=> {
    
    if(e.target.value.length < 5){
        fourth.textContent = e.target.value
        let regex  = /[\d+]/.test(e.target.value)
        if(!regex){
            error.style.display = `block`
            console.log('true')
        }
    
        else {
            error.style.display = `none`
        }
    }
})

function changeName(){
cardLabelName.textContent = userName.value;
}



cvv.addEventListener('input', (e)=>{
userCVV.textContent = e.target.value
})

date.addEventListener('input', (e)=>{
    let newVal= date.value


   let check = /[+d{1,2},+d{1,2},+d{4}]/.test(newVal)

   if(!check){
   error.style.display = `block`
   }
  if(check){
    error.style.display= `none`
  }

let arrayofDate = newVal.split('-')
let year =arrayofDate[0]
let month = arrayofDate[1]
let yearAcro = year.split('')
let lastTwoDigitOfYear = yearAcro[2] + yearAcro[3]
userDate.textContent = `${month}/${lastTwoDigitOfYear}`
})

