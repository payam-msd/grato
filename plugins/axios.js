export default ({app: {$axios}, error, env}) => {
	$axios.setHeader('Content-Type', 'application/json')
	$axios.setHeader('Accept', 'application/json')
	$axios.setHeader('Domain', env.DOMAIN)
	$axios.onRequest(config => {
		console.log(`domain is : ${env.DOMAIN}`)

		console.log(`Request sent to : ${config.url}`)
	})
	$axios.onError(err => {
		return new Error(`Request error :${err}`)
	})
}
