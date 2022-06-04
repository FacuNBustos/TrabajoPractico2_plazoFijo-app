
const checkInterest = (value) => {
    try{
        const days = value;
        if (days >= 361 ){
            return 65;
        }
        else if (days >= 121){
            return 50;
        }
        else if (days >= 61){
            return 45;
        }
        else if(days >= 30){
            return 40;
        }
    }
    catch (error){
        return 0;
    }
}

export { checkInterest };