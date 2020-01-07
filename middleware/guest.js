export default function({app: {$auth}, redirect}) {
	if ($auth.$state.loggedIn) {
		return redirect('/')
	}
}
