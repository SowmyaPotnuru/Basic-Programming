function checkIsPrime(num){
  let isPrime = true 
  for(let i=2; i<num; i++){
    if(num%i == 0){
      isPrime = false
      break
    }
  }
  if(isPrime){
    console.log(true)
  }
  else{
    console.log(false)
  }
}

checkIsPrime(4)
checkIsPrime(31)

function evenOdd(num){
  if(num%2 == 0){
    console.log(true)
  }else{
    console.log(false)
  }
}

evenOdd(7)
evenOdd(24)