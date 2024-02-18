function Cinema(input){
    let r = Number(input[1]);
    let c = Number(input[2]);
    let price = 0;

    switch(input[0].toLowerCase()){
        case "premiere":
            price = 12 * r * c;
            break;
        case "normal":
            price = 7.5 * r * c;
            break;
        case "discount":
            price = 5 * r * c;
            break;
        default:
            console.log("This type of deal does not exist!");
         break;
    }
    console.log(`${price.toFixed(2)}`);
}

function Dressing(input){
    let degrees = Number(input[0]);
    let timeOfDay = input[1];
    let outfit = " "; let shoes = " ";

    switch(timeOfDay){
        case "Morning":
            if(10 <= degrees && degrees <= 18){
                outfit = "Sweatshirt"
                shoes = "Sneakers"
            }
            else if(18 < degrees && degrees <= 24){
                outfit = "Shirt"
                shoes = "Moccasins"
            }
            else if(degrees >= 25){
                outfit = "T-Shirt"
                shoes = "Sandals"
            }
            break;

        case "Afternoon":
            if(10 <= degrees && 18 >= degrees){
                outfit = "Shirt"
                shoes = "Moccasins"
            }
            else if(18 < degrees && degrees <= 24){
                outfit = "T-Shirt"
                shoes = "Sandals"
            }
            else if(degrees >= 25){
                outfit = "Swim Suit"
                shoes = "Barefoot"
            }
            break;

        case "Evening":
            if(10 <= degrees && degrees <= 18){
                outfit = "Shirt"
                shoes = "Moccasins"
            }
            else if(18 < degrees && degrees <= 24){
                outfit = "Shirt"
                shoes = "Moccasins"
            }
            else if(degrees >= 25){
                outfit = "Shirt"
                shoes = "Moccasins"
            }
            break;
        default:
            console.log("Smth aint working");
            break;
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

function NewHouse(input){
    let flowerType = input[0];
    let numOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;

    switch(flowerType){
        case "Roses":
            price = 5 * numOfFlowers;
            break;
        case "Dahlias":
            price = 3.8 * numOfFlowers;
            break;
        case "Tulips":
            price = 2.8 * numOfFlowers;
            break;
        case "Narcissus":
            price = 3 * numOfFlowers;
            break;
        case "Gladiolus":
            price = 2.5 * numOfFlowers;
            break;
    }

    if(numOfFlowers > 80 && flowerType == "Roses"){
        price = price - price/10;
    } else if(numOfFlowers > 90 && flowerType == "Dahlias"){
        price = price - 3 * price / 20;
    } else if(numOfFlowers > 80 && flowerType == "Tulips"){
        price = price - 3 * price / 20;
    } else if(numOfFlowers < 120 && flowerType == "Narcissus"){
        price = price + 3 * price / 20;
    } else if(numOfFlowers < 80 && flowerType == "Gladiolus"){
        price = price + price / 5;
    }

    if(budget >= price){
        let f = (budget - price).toFixed(2);
        console.log(`Hey, you have a great garden with ${numOfFlowers} ${flowerType} and ${f} leva left.`);
    }
    else if(price > budget){
        let f = (price - budget).toFixed(2);
        console.log(`Not enough money, you need ${f} leva more.`);
    }

}


function FishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let numberOfPeople = input[2];
    let price = 0;

    switch(season){
        case "Spring":
            price = 3000;
            break;
        case "Summer":
            price = 4200;
            break;
        case "Autumn":
            price = 4200;
            break;
        case "Winter":
            price = 2600;
            break;
    }

    if(numberOfPeople <= 6){
        price = price - price/10;
    }
    else if(6 < numberOfPeople && numberOfPeople <=11){
        price = price - price * 3 / 20;
    }
    else if(11 < numberOfPeople){
        price = price - price / 4;
    }

    if(numberOfPeople % 2 == 0 && season != "Autumn"){
        price = price - price / 20;
    }

    if(budget >= price){
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
    }
    else console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
}

function Adventure(input){
    let budget = input[0];
    let season = input[1];
    let destination = " ";
    let restPlace = " ";

    if(season == "summer") restPlace = "Camp";
    else if(season == "winter") restPlace = "Hotel";

    if(budget <= 100){
        destination = "Bulgaria";
        if(season == "summer") budget = budget * 3 / 10;
        else if(season == "winter") budget = budget * 7 / 10;
    }
    else if(100 < budget && budget <= 1000){
        destination = "Balkans";
        if(season == "summer") budget = budget * 4 / 10;
        else if(season == "winter") budget = budget * 8 / 10;
    }
    else if(budget > 1000){
        destination = "Europe";
       budget = budget * 9 / 10;
    }

    if(destination == "Europe"){/*this will be the final if*/
        restPlace = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${restPlace} - ${budget.toFixed(2)}`);

}

function BetweenNumbers(input){
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let symbol = input[2];
   if(n2 == 0){
        console.log(`Cannot divide ${n1} by zero`);
    }
   else{
        switch(symbol){
            case '+':
                if((n1 + n2) % 2 == 0){
                    console.log(`${n1} ${symbol} ${n2} = ${n1 + n2} - even`);
                }
                else{
                    console.log(`${n1} ${symbol} ${n2} = ${n1 + n2} - odd`);
                }
            break;
            case '-':
                if((n1 - n2) % 2 == 0){
                    console.log(`${n1} ${symbol} ${n2} = ${n1 - n2} - even`);
                }
                else{
                    console.log(`${n1} ${symbol} ${n2} = ${n1 - n2} - odd`);
                }
            break;
            case '*':
                if((n1 * n2) % 2 == 0){
                    console.log(`${n1} ${symbol} ${n2} = ${n1 * n2} - even`);
                }
                else{
                    console.log(`${n1} ${symbol} ${n2} = ${n1 * n2} - odd`);
                }
            break;
            case '/':
                console.log(`${n1} / ${n2} = ${(n1 / n2).toFixed(2)}`);
            break;
            case '%':
                console.log(`${n1} % ${n2} = ${(n1 % n2).toFixed(0)}`);
            break;
        }
    }
}

function HotelRoom(input){
    let month = input[0];
    let numberOfNights = Number(input[1]);
    let studioPrice = 0; let apartmentPrice = 0;

    if(month == "May" || month == "October"){
        studioPrice = 50 * numberOfNights;
        apartmentPrice = 65 * numberOfNights;
    }
    if(month == "June" || month == "September"){
        studioPrice = 75.2 * numberOfNights;
        apartmentPrice = 68.7 * numberOfNights;
    }
    if(month == "July" || month == "August"){
        studioPrice = 76 * numberOfNights;
        apartmentPrice = 77 * numberOfNights;
    }

    if((month == "May" || month == "October") && 14 >= numberOfNights && numberOfNights > 7){
        studioPrice = studioPrice - studioPrice * 5 / 100;
    }
    if((month == "May" || month == "October") && numberOfNights > 14){
        studioPrice = studioPrice - studioPrice * 3 / 10;
    }
    if((month == "June" || month == "September") && 14 < numberOfNights){
        studioPrice = studioPrice - studioPrice * 2 / 10;
    }
    if(numberOfNights > 14){
        apartmentPrice = apartmentPrice - apartmentPrice / 10;
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

function examResult(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);
    const examTime = examHour * 60 + examMinute;
    const arrivalTime = arrivalHour * 60 + arrivalMinute;

    if (arrivalTime > examTime) {
        // Late
        const minutesLate = arrivalTime - examTime;
        let hours = Math.floor(minutesLate / 60);
        let minutes = minutesLate % 60;
        
        if (hours === 0) {
            console.log("Late", minutes, "minutes after the start");
        } else {
            console.log("Late", hours + ":" + (minutes < 10 ? "0" : "") + minutes, "hours after the start");
        }
    } else if (examTime - arrivalTime < 30) {
        // On time or Early
        if (examTime === arrivalTime) {
            console.log("On time");
        } else {
            const minutesEarly = examTime - arrivalTime;
            if (minutesEarly > 0) {
                console.log("Early", minutesEarly, "minutes before the start");
            }
        }
    } else {
        // Early
        const minutesEarly = examTime - arrivalTime;
        let hours = Math.floor(minutesEarly / 60);
        let minutes = minutesEarly % 60;
        
        if (hours === 0) {
            console.log("Early", minutes, "minutes before the start");
        } else {
            console.log("Early", hours + ":" + (minutes < 10 ? "0" : "") + minutes, "hours before the start");
        }
    }
}

// Test cases
examResult(9, 30, 9, 50);
examResult(9, 0, 10, 30);
examResult(10, 0, 10, 0);
examResult(9, 0, 8, 30);
examResult(14, 0, 13, 55);
examResult(11, 30, 10, 55);
examResult(16, 0, 15, 0);
examResult(11, 30, 8, 12);
examResult(11, 30, 12, 29);
