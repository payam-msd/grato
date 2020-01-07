import Vue from 'vue'
import VueCurrencyFilter from 'vue-currency-filter'
Vue.use(VueCurrencyFilter, {
	symbol: 'تومان',
	thousandsSeparator: '.',
	fractionCount: 0,
	fractionSeparator: ',',
	symbolPosition: 'before',
	symbolSpacing: true,
})
