function birthday(date){
  
    while(date>30)
    {
        console.log(date + "days until my birthday. Such a long time... :( ....");
        date--;
    }

    while(date<=30 && date >=5 )
    {
        console.log(date + "days, print a message that sounds excited!");
        date--;
    }

    while(date<5 && date >=0)
    {
        console.log(date+ "SCREAM IT!");
        date--;
    }
    while (date==0){
        console.log(date+ "It's my birthday")
    }
    
}

console.log(birthday(50));