/* eslint-disable no-useless-escape */

export default (ctx, inject) => {
	var breakpoint
	// Get the current breakpoint
	var getBreakpoint = function() {
		return window
			.getComputedStyle(document.body, ':before')
			.content.replace(/\"/g, '')
	}

	// Calculate breakpoint on page load
	breakpoint = getBreakpoint()

	// Recalculate breakpoint on scroll
	window.addEventListener(
		'resize',
		function() {
			window.requestAnimationFrame(function() {
				breakpoint = getBreakpoint()
			})
		},
		false,
	)

	// ? Inject it to nuxt ctx
	inject('breakpoint', breakpoint)
}
