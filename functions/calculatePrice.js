/* eslint-disable camelcase */
export function sum_of_orders(orders_list) {
	const arrOfPrices = []
	let totalPrice = 0
	if (!orders_list.length) {
		return totalPrice
	}
	orders_list.forEach(e => {
		const final = e.quantity * e.item.price
		arrOfPrices.push(final)
	})
	totalPrice = arrOfPrices.reduce((accumulator, currentVal) => {
		return accumulator + currentVal
	})
	return totalPrice
}
