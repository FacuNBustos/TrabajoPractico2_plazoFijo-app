
const checkName = (value) => {
    try{
        const names = value.trim().replace(',',' ').split(' ');
        if (names.length != 2){
            return false;
        }else{
            names.map((elem, index) => {
                names[index] = elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase();
            })
            return names;
        }
    }
    catch (error){
        return false;
    }
}

const checkMount = (value) => {
    try{
        const mount = parseInt(value.toString().replace(',','.'))
        if (Number.isInteger(mount)){
            if (mount >= 1000){
                return mount;
            }
        }
        return false;
    }catch (error){
        return false;
    }
}

const checkDays = (value) => {
    try{
        const days = parseInt(value.toString().replace(',','.'))
        if (Number.isInteger(days)){
            if (days >= 30){
                return days;
            }
        }
        return false;
    }catch (error){
        return false;
    }
}

export { checkName, checkMount, checkDays };