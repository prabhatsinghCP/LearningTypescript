//never and it's use case is really interesting...

// function getError(massage:string,code:number){
//      throw{massage:massage,errorcode:code};
// }

// const result=getError("we got some error ",500);
// console.log(result);//this will return nothing because its throw vahi block kr dega 


// so better way to use 

function getError(massage:string,code:number):never{
    throw{massage:massage,errorcode:code};//never type bacause code ko yahi block kr dega..
    //while(true){}  it is also a never type...
}

const result=getError("we got some error ",500);
console.log(result);



