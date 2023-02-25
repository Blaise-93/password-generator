
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
                    "X","Y","Z" ,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
                    "x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^",
                    "&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"
                ];


let passwordEl = document.querySelector('#disabled-btn')

function generatePassword() {
    let random1 =  Math.floor(Math.random() * characters.length )
    let random2 =  Math.floor(Math.random() * characters.length )
    let random3 =  Math.floor(Math.random() * characters.length )
    let random4 =  Math.floor(Math.random() * characters.length )
    let random5 =  Math.floor(Math.random() * characters.length )
    let random6 =  Math.floor(Math.random() * characters.length )
    let random7 =  Math.floor(Math.random() * characters.length )
    let random8 =  Math.floor(Math.random() * characters.length )
    let random9 =  Math.floor(Math.random() * characters.length )
    let random10 = Math.floor(Math.random() * characters.length )
    let random11 =  Math.floor(Math.random() * characters.length )
    let random12 = Math.floor(Math.random() * characters.length )
  
    randomPswGenerator = characters[random1] + characters[random2] +
              characters[random3] + characters[random4] +  characters[random5] + 
              characters[random6] + characters[random7] + characters[random8] + characters[random9]
             + characters[random10] + characters[random11] + characters[random12]        
   
     console.log(randomPswGenerator)
    passwordEl.textContent = randomPswGenerator


}

generatePassword()




