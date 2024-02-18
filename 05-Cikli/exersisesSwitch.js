function DayOfWeek(params){
    let p = Number(params);
    switch(p){
        case 1: 
            console.log("Monday");
        break;
        case 2:
            console.log("Tuesday");
        break;
        case 3:
            console.log("Wednesday");
        break;
        case 4:
            console.log("Thursday");
        break;
        case 5:
            console.log("Friday");
        break;
        case 6:
            console.log("Saturday");
        break;
        case 7:
            console.log("Sunday");
        break;
        default:
            console.log("Error");
        break;
    }
}

function DayOfWeekSay(params){
    let p = params;
    switch(p){
        case "Monday": 
        case "Tuesday":
        case "Wedensday":
        case "Thursday":
        case "Friday":
            console.log("Working day");
        break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend");
        break;
        default:
            console.log("Error");
            break;
    }
    
}    DayOfWeekSay(["Tuesday"]);