export function fenceSideChoose() {
	return document
		.getElementById('leftFence')
		.children[0]
		.classList
		.contains('active')
}
