<template>
	<div
		class="relative w-full h-full flex justify-center items-center overflow-hidden"
		:ref="id"
		@mousemove="mousemove"
		@mouseover="mouseover"
		@mouseleave="mouseleave"
	>
		<img class="object-cover w-auto bg-center h-present" v-show="showImg" :src="imgUrl" />
		<div class="mouse-cover z-10"></div>
	</div>
</template>

<script>
export default {
	/* eslint object-shorthand: 0 */
	/* eslint no-unused-expressions: 0 */
	/* eslint no-sequences: 0 */
	/* eslint no-unused-vars: 0 */
	/* eslint unicorn/prefer-includes: 0 */
	/* eslint one-var: 0 */

	props: {
		scale: {
			type: Number,
			default: 2.5,
		},
		url: {
			type: String,
			required: true,
		},
		bigUrl: {
			type: String,
			default: null,
		},
		scroll: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			id: null,
			cover: null,
			imgbox: null,
			imgwrap: null,
			orginUrl: null,
			bigImgUrl: null,
			bigOrginUrl: null,
			imgUrl: null,
			img: null,
			canvas: null,
			ctx: null,
			rectTimesX: 0,
			rectTimesY: 0,
			imgTimesX: 0,
			imgTimesY: 0,
			init: false,
			step: 0,
			bigStep: 0,
			showImg: true,
		}
	},
	watch: {
		url: function(val) {
			this.imgUrl = val
			this.orginUrl = val
			this.initTime()
		},
		bigUrl: function() {
			this.bigImgUrl = bigUrl
			this.bigOrginUrl = bigUrl
			this.initTime()
		},
	},
	created() {
		var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
		var maxPos = chars.length
		var str = ''
		for (let i = 0; i < 10; i++) {
			str += chars.charAt(Math.floor(Math.random() * maxPos))
		}
		this.id = str
		this.imgUrl = this.url
		this.orginUrl = this.url
		this.bigImgUrl = this.bigUrl
		this.bigOrginUrl = this.bigUrl
	},

	mounted() {
		this.$nextTick(() => {
			this.initTime()
		})
	},
	methods: {
		initTime() {
			this.init = false
			let box = this.$refs[this.id]

			this.imgbox = box
			this.cover = box.querySelector('.mouse-cover')
			this.cover.style.width = this.imgbox.offsetWidth / this.scale + 'px'
			this.cover.style.height = this.imgbox.offsetHeight / this.scale + 'px'
			this.cover.style.left = '-100%'
			this.cover.style.top = '-100%'
			this.imgwrap = box.querySelector('img')
			let imgsrc
			if (this.bigImgUrl) {
				imgsrc = this.bigImgUrl
			} else {
				imgsrc = this.imgUrl
			}

			this.img = new Image()
			this.img.src = imgsrc
			this.img.onload = () => {
				;(this.rectTimesX =
					this.imgbox.offsetWidth / this.scale / this.imgwrap.offsetWidth),
					(this.rectTimesY =
						this.imgbox.offsetHeight / this.scale / this.imgwrap.offsetHeight)
				;(this.imgTimesX = this.img.width / this.imgwrap.offsetWidth),
					(this.imgTimesY = this.img.height / this.imgwrap.offsetHeight)
				this.vertical = this.img.width < this.img.height
				this.init = true
			}
			if (this.canvas) {
				this.canvas.parentNode.removeChild(this.canvas)
				this.canvas = null
			}
			this.canvas = document.createElement('canvas')
			this.canvas.className = 'mouse-cover-canvas'
			this.canvas.style.position = 'fixed'
			this.canvas.style.left =
				this.imgbox.offsetLeft + this.imgbox.offsetWidth + -10 + 'px'
			this.canvas.style.top = this.imgbox.offsetTop + 10 + 'vh'
			this.canvas.style.border = '1px solid black'
			this.canvas.style.zIndex = '20'
			this.canvas.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
			this.canvas.height = this.imgbox.offsetHeight - 80
			this.canvas.width = this.imgbox.offsetWidth - 200
			this.canvas.style.display = 'none'
			document.body.append(this.canvas)
			this.ctx = this.canvas.getContext('2d')
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
		},
		initBox() {
			this.showImg = false
			this.canvas.style.display = 'none'
			let box = this.$refs[this.id]
			let imgsrc
			if (this.bigImgUrl) {
				imgsrc = this.bigImgUrl
			} else {
				imgsrc = this.imgUrl
			}
			this.img = new Image()
			this.img.src = imgsrc
			this.img.onload = () => {
				this.vertical = this.img.width < this.img.height
				this.showImg = true
				let thumb = box.querySelector('img')
				setTimeout(() => {
					;(this.rectTimesX =
						this.imgbox.offsetWidth /
						this.scale /
						box.querySelector('img').offsetWidth),
						(this.rectTimesY =
							this.imgbox.offsetHeight /
							this.scale /
							box.querySelector('img').offsetHeight)
				}, 20)
			}
		},
		mousemove(e) {
			if (!this.init) {
				return false
			}
			let _this = this
			function offset(curEle) {
				var totalLeft = null,
					totalTop = null,
					par = curEle.offsetParent
				totalLeft += curEle.offsetLeft
				totalTop += curEle.offsetTop
				while (par) {
					if (navigator.userAgent.indexOf('MSIE 8.0') === -1) {
						totalLeft += par.clientLeft
						totalTop += par.clientTop
					}

					totalLeft += par.offsetLeft
					totalTop += par.offsetTop
					par = par.offsetParent
				}

				return {
					left: totalLeft,
					top: totalTop,
				}
			}

			function getXY(eve) {
				return {
					x: eve.clientX - _this.cover.offsetWidth / 2,
					y: eve.clientY - _this.cover.offsetHeight / 2,
				}
			}
			let oEvent = e || event
			let pos = getXY(oEvent)
			let imgwrap = offset(this.imgwrap)
			let range = {
				minX: imgwrap.left,
				maxX: imgwrap.left + this.imgwrap.offsetWidth - this.cover.offsetWidth,
				minY: imgwrap.top - document.documentElement.scrollTop,
				maxY:
					imgwrap.top -
					document.documentElement.scrollTop +
					this.imgwrap.offsetHeight -
					this.cover.offsetHeight,
			}
			if (pos.x > range.maxX) {
				pos.x = range.maxX
			}
			if (pos.x < range.minX) {
				pos.x = range.minX
			}
			if (pos.y > range.maxY) {
				pos.y = range.maxY
			}
			if (pos.y < range.minY) {
				pos.y = range.minY
			}
			this.cover.style.left = pos.x + 'px'
			this.cover.style.top = pos.y + 'px'
			this.ctx.clearRect(
				0,
				0,
				this.imgwrap.offsetWidth,
				this.imgwrap.offsetHeight,
			)
			let startX = pos.x - (imgwrap.left - document.documentElement.scrollLeft),
				startY = pos.y - (imgwrap.top - document.documentElement.scrollTop)
			this.ctx.drawImage(
				this.img,
				startX * this.imgTimesX,
				startY * this.imgTimesY,
				this.img.width * this.rectTimesX,
				this.img.height * this.rectTimesY,
				0,
				0,
				this.imgbox.offsetWidth,
				this.imgbox.offsetHeight,
			)
		},
		mouseover(e) {
			if (!this.init) {
				return false
			}
			e = e || event
			if (!this.scroll) {
				e.currentTarget.addEventListener(
					'mousewheel',
					function(ev) {
						ev.preventDefault()
					},
					false,
				)

				e.currentTarget.addEventListener(
					'DOMMouseScroll',
					function(ev) {
						ev.preventDefault()
					},
					false,
				)
			}

			this.cover.style.display = 'block'
			this.canvas.style.display = 'block'
		},
		mouseleave() {
			if (!this.init) {
				return false
			}
			this.cover.style.display = 'none'
			this.canvas.style.display = 'none'
		},
	},
}
</script>

<style scoped>
.mouse-cover {
	position: fixed;
	background-color: rgba(0, 0, 0, 0.5);
	cursor: move;
}
.mouse-cover-canvas {
	position: fixed;
	left: 100%;
	top: 0;
	width: 100%;
	height: 100%;
}
</style>
