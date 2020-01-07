export function calculatePrice(orders) {
	const arrOfPrices = []
	let totalPrice = 0
	if (!orders.length) {
		return totalPrice
	}
	orders.forEach(e => {
		const final = e.quantity * e.item.price
		arrOfPrices.push(final)
	})
	totalPrice = arrOfPrices.reduce((accumulator, currentVal) => {
		return accumulator + currentVal
	})
	return totalPrice
}
