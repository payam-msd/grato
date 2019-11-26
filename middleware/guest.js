export default function({app: {$auth}, redirect}) {
	if ($auth.loggedIn) {
		return redirect('/')
	}
}
