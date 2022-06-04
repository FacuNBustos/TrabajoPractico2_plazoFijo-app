import axios from "axios";
import store from '../store';

const getHistoryReports = async () => {
    try{
        const response = await axios.get('https://expressjs-postgres-production-08e2.up.railway.app/historyreports');
        store.commit('handleResponseHistory', response);
        return response;
    }catch (error){
        return null;
    }
}


export { getHistoryReports };