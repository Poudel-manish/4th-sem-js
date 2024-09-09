
        alert('choose a right number');
        let choose = parseInt(prompt("Enter the week number (1-7)"));

        switch(choose) {
            case 1:
                console.log("Sunday");
                break;
            case 2:
                console.log("Monday");
                break;
            case 3:
                console.log("Tuesday");
                break;
            case 4:
                console.log("Wednesday");
                break;
            case 5:
                console.log("Thursday");
                break;
            case 6:
                console.log("Friday");
                break;
            case 7:
                console.log("Saturday");
                break;
            default:
                console.log("Error: Invalid number! Please enter a number between 1 and 7.");
        }
        



