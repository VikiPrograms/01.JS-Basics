function GreaterNumber(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    if(a>=b)console.log(a);
    else console.log(b);
}

function EvenOrUneven(input){
    if(input % 2 == 0){
        console.log("even");
    }
    else if(input % 2 == 1){
        console.log("odd");
    }
}

function Password(input){
    if(input == "s3cr3t!P@ssw0rd"){
        console.log(" Welcome");
    }
    else{
        console.log(" Wrong password! ");
    }
}

function Between100And200(input){
    if(Number(input) < 100){
        console.log("Less than 100");
    }
    else if(100 <= Number(input) && Number(input) <= 200){
        console.log("Between 100 and 200");
    }
    else{
        console.log("Greater than 200");
    }
}

function InfoAboutSpeed(input){
    if(input <=10){
        console.log("slow");
    }
    else if(10 < input && input <= 50){
        console.log("average");
    }
    else if(50 < input && input <= 150){
        console.log("fast");
    }
    else if(150 < input && input <= 1000){
        console.log("ultra fast");
    }
    else if(1000 < input){
        console.log("extremely fast");
    }
}

function Figure(input) {
    let type = input[0];
    if (type === "square") {
        let a = parseFloat(input[1]);
        console.log((a * a).toFixed(3));
    } else if (type === "rectangle") {
        let a = parseFloat(input[1]);
        let b = parseFloat(input[2]);
        console.log((a * b).toFixed(3));
    } else if (type === "circle") {
        let a = parseFloat(input[1]);
        console.log((Math.PI * a * a).toFixed(3));
    } else if (type === "triangle") {
        let a = parseFloat(input[1]);
        let b = parseFloat(input[2]);
        console.log((a * b / 2).toFixed(3));
    }
}

Figure(["square", "5"]);
