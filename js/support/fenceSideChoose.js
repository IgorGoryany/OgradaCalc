export function fenceSideChoose() {
	console.log(document
		.getElementById('leftFence')
		.children[0]
		.classList
		.contains('active'))
	return document
		.getElementById('leftFence')
		.children[0]
		.classList
		.contains('active')
}
