const month = 3; // agr string hota hai toh case me string dalenge

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("Jun");
        break;                                      // agr break syntax nahi lagate toh jo bhi case match karega wahan se neeche ke sare case print karega except default
    default:
        console.log("default case match");
        break;
    
    
}