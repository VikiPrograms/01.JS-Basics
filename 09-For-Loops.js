function Ex1(){
    for(let i =1; i <= 100; i++){
        console.log(i);
    }
}

function Ex2(input){
    let n = Number(input[0]);
    for(let i = n; i > 0; i--){
        console.log(i);
    }
}

function Ex4(input){
    let n = Number(input[0]);
    for(let i = 0; i < n; i+= 2){
        console.log(Math.pow(2, i));
    }
}

function Ex5(input){
    let text = input[0];
    for(let i = 0; i < text.length; i++){
        let letter = text[i];
        console.log(letter);
    }
}

function Ex6(input){
    let text = input[0];
    let sum = 0; let letter = ' ';
    for(let i = 0; i < text.length; i++){
        letter = text[i];
        switch(letter){
            case 'a':
                sum +=1;
            break;
            case 'e':
                sum +=2;
            break;
            case 'i':
                sum +=3;
            break;
            case 'o':
                sum +=4;
            break;
            case 'u':
                sum +=5;
            break;
        }
    }

    console.log(sum);
}

function Ex7(input){
    let text = input[0]; let sum = 0; let letter = ' '; let num = 0;
    for (let index = 0; index < text.length; index++) {
       letter = text[index]; num = Number(letter);
       sum+=num;
    }
    console.log(`The sum of the digits is:${sum}`);
}

function Ex8(input){
    let start = Number(input[0]); let end = Number(input[1]);
    let sum = 0;
    let arr = [];
    for(start; start < end; start++){
        if(start % 9 == 0){
            arr.push(start);
            sum += start;
        }
    }

    console.log(`The sum: ${sum}`);
    arr.forEach(element => {
        console.log(element);
    });
}

Ex8(["100", "200"]);