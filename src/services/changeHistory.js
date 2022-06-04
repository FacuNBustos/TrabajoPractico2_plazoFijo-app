import store from "../store";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const handlechangeHistory = async (id) => {
    store.commit('handleResetAll');
    await sleep(500);
    store.commit('handleChangeForHistory', id);
}

export default handlechangeHistory;