// break

for(let i=1; i<=10; i++){
    if(i==5){
        break;
    }
    console.log(i)
}

// continue

for(let i=1; i<=10; i++){
    if(i==5){
        continue;
    }
    console.log(i)
}


for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
        if(i==j){
            continue;
        }
        console.log(i,j);
    }
}
