export default ({app: {$axios}, store, error}) => {
	$axios.setHeader('Content-Type', 'application/json')
	$axios.setHeader('Accept', 'application/json')
	$axios.setHeader('Domain', 'chaapit.ir')
	$axios.onRequest(config => {
		console.log(`Request sent to : ${config.url}`)
		// if (store.state.auth.token_local) {
		//     config.headers.common.Authorization = store.state.auth.token_local
		// }
	})
	$axios.onError(err => {
		return error({statusCode: err.code, message: err})
		// const code = parseInt(error.response && error.response.status);
		// if (typeof error.response !== "undefined") {
		//   switch (code) {
		//     //     case 401:
		//     //       console.log(error.response.message);
		//     //       store.commit("setUserErrorCode", code);
		//     //       break;
		//     //     case 403:
		//     //       store.commit("setUserErrorCode", code);
		//     //       setTimeout(() => {
		//     //         redirect({ name: "auth-login" });
		//     //       }, 3000);
		//     //       break;
		//     //     case 422:
		//     //       store.commit("setUserErrorCode", code);
		//     //       break;
		//     default:
		//   }
		// }
		// console.log(`Error response status : ${error.response.status}`);
	})
}
