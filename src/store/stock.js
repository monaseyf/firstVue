import stocks from '../data/stocks'

const stock = {
  state: () => ({
    stocks: []
  }),
  mutations: {
    SET_STOCK(state, stocks){
      state.stocks = stocks
    },
    BUY_STOCK(state, {stockId, quantity, stockPrice}) {
      const record = state.stocks.find(element => element.id == stockId)
      if (record){
        record.quantity += quantity
      } else{
        state.stocks.push({
          id: stockId,
          quantity: quantity
        })
      }
      state.funds -= stockPrice * quantity;
    },
    RAND_STOCKS(state){
      state.stocks.forEach(stock => {
        stock.price = Math.round(stock.price *( 1 + Math.random() - 0.5))
      });
    }
  },
  actions: {
    initStock: ({commit}) => {
      commit('SET_STOCK', stocks)
    }, 
    buyStock: ({commit}, order) => {
      commit('BUY_STOCK', order)
    },
    randomizeStocks({commit}){
      commit('RAND_STOCKS')
    }
  },
  getters: {
    stocks(){
      return stocks
    },
    secondStocks(state){
      return state.stocks
    }
  }
}

export default stock