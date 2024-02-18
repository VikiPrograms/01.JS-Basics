function Ex1(){
    for (let index = 0; index <= 997; index++) {
        if(index % 10 == 7){
            console.log(index);
        }
    }
}

function Ex2(input){
    let n = Number(input[0]);
    for (let index = 1; index <= 10; index++) {
        console.log(`${index} * ${n} = ${index * n}`);    
    }
}

function Ex3(input){
    let n = input[0]; let p1 = 0, p2 = 0, p3 = 0, p4 = 0, p5 = 0;
    for (let index = 1; index <= n; index++) {
        let a = input[index];
        if(199 >= a){
            p1++;
        }
        else if(399 >= a && a >= 200){
            p2++;
        }
        else if(599 >= a && a >= 400){
            p3++;
        }
        else if(799 >= a && a >= 600){
            p4++;
        }
        else p5++;
    }
    let p = p1 + p2 + p3 + p4 + p5;
    let p1Final = ((p1 / p)* 100).toFixed(2);
    let p2Final = ((p2 / p)* 100).toFixed(2); 
    let p3Final = ((p3 / p)* 100).toFixed(2);
    let p4Final = ((p4 / p)* 100).toFixed(2);
    let p5Final = ((p5 / p)* 100).toFixed(2);
    console.log(p1Final+ '%');
    console.log(p2Final+ '%');
    console.log(p3Final+ '%');
    console.log(p4Final+ '%');
    console.log(p5Final + '%');
}

function Ex4(input){
    let age = Number(input[0]);
    let x = Number(input[1]);
    let p = Number(input[2]);
    let sumOfMoney = 0; let sumOfToys = 0; let totalSum = 0;
    let startSum = 10;

    for (let i = 1; i <= age; i++) {
        if(i % 2 == 0){
            sumOfMoney += startSum - 1;
            startSum+=10;
        }
        else{
            sumOfMoney += p;
        }  
    }

    if(sumOfMoney >= x){
        console.log(`Yes! ${(sumOfMoney - x).toFixed(2)}`);
    }
    else if(x > sumOfMoney){
        console.log(`No! ${(x - sumOfMoney).toFixed(2)}`);
    }

}

function Ex5(input){
    let n = Number(input[0]);
    let salary = Number(input[1]);
    let arr = [];

    for (let i = 2; i < input[n + 2]; i++) {
        arr[i-2] = input[i];
    }

    for (let i = 0; i < arr; i++) {
       let site = arr[i];
        if(salary <= 0){
            console.log('You have lost your salary.');
            break;
        }
        else{
            switch(site){
                case "Facebook":
                    salary -= 150;
                    break;
                case "Instagram":
                    salary -= 100;
                    break;
                case "Reddit":
                    salary -= 50;
                    break;
            }
        }
    }

    if(salary > 0){
        console.log(salary);
    }
}

function Ex6(input){
    let actorName = input[0];
    let points = Number(input[1]);
    let n = parseInt(input[2]);

    for (let i = 3; i < input.length; i+=2) {
        let nameOfJury = input[i];
        let pointsOfJury = parseFloat(input[i + 1]);
       
        if(points > 1250.5){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points}!`);
            break;
        }
        else{
            let nameLenght = nameOfJury.length;
            console.log(nameLenght);
            points += (nameLenght * pointsOfJury) / 2;
            console.log(points);
        }
    }

    if(points < 1250.5){
        console.log(points);
        console.log(`Sorry, ${actorName} you need ${(1250.5 - points).toFixed(1)} more!`);
    }
}

Ex6(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])

function climbingPercentage(input) {
    let totalPeople = 0;
    let musalaCount = 0;
    let montBlancCount = 0;
    let kilimanjaroCount = 0;
    let k2Count = 0;
    let everestCount = 0;

    const groupsCount = Number(input[0]);

    for (let i = 1; i <= groupsCount; i++) {
        const groupSize = Number(input[i]);
        totalPeople += groupSize;

        if (groupSize <= 5) {
            musalaCount += groupSize;
        } else if (groupSize <= 12) {
            montBlancCount += groupSize;
        } else if (groupSize <= 25) {
            kilimanjaroCount += groupSize;
        } else if (groupSize <= 40) {
            k2Count += groupSize;
        } else {
            everestCount += groupSize;
        }
    }

    const musalaPercentage = (musalaCount / totalPeople) * 100;
    const montBlancPercentage = (montBlancCount / totalPeople) * 100;
    const kilimanjaroPercentage = (kilimanjaroCount / totalPeople) * 100;
    const k2Percentage = (k2Count / totalPeople) * 100;
    const everestPercentage = (everestCount / totalPeople) * 100;

    console.log(musalaPercentage.toFixed(2) + '%');
    console.log(montBlancPercentage.toFixed(2) + '%');
    console.log(kilimanjaroPercentage.toFixed(2) + '%');
    console.log(k2Percentage.toFixed(2) + '%');
    console.log(everestPercentage.toFixed(2) + '%');
}

climbingPercentage([
    "10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"
]);

climbingPercentage([
    "5",
    "25",
    "41",
    "31",
    "250",
    "6"
]);
