
import { checkInterest } from "./checkInterest.service"

const investmentCalculator = (amount, days) => {
    try{
        const interest = checkInterest(days);
        const finalAmount = (amount * ((days/360) * (interest/100))) + amount;
        return finalAmount
    }catch (error){
        console.log(error.message);
        return 0;
    }
}
const reinvestmentCalculator = (amount, days) => {
    try{
        const interest = checkInterest(days);
        let reinvestedAmounts = [[amount, (amount * ((days/360) * (interest/100))) + amount]]
        for (let i = 1; i < 4; i++) {
            let flag = reinvestedAmounts[i-1][1];
            let calc = (flag * ((days/360) * (interest/100))) + flag;
            reinvestedAmounts.push([flag, calc])
        }
        return reinvestedAmounts;
    }   catch (error){
        return null;
    } 
}


export { investmentCalculator, reinvestmentCalculator };