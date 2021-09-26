import Vue from 'vue';
// import stock from './stock'
export const loadData = ({ commit }) => {
 Vue.http.get('data.json')
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        if(data){
            console.log(data);
            const stocks = data.stocks;
            const funds = data.funds;
            const stockPortfolio = data.stockPortfolio

            const portfolio = {
                stockPortfolio,
                funds
            };

            commit('SET_STOCK', stocks)
            commit('SET_PORTFOLIO', portfolio)
        }
    })
};