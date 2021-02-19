/* AUDIO/VIDEO CLUB  */

console.log('test')




/* VARIABLES*/
let play = document.querySelector('.play')   
let vid = document.querySelector('.vid')
let body = document.querySelector('body')
let mario = document.querySelector('.mario')
let cry = document.querySelector('.cry')

/*EVENTS*/

play.addEventListener('click', playOrPause)

cry.addEventListener('mouseenter', cryA)
cry.addEventListener('mouseleave', cryB)



/*FUNCTIONS*/


function playOrPause() {
	
	if (body.id == 'playing') {
		vid.pause()
		mario.pause()
		body.id = ''
	} else {
		vid.play()
		mario.play()
		body.id = 'playing'
	}

} 


function cryA() {
	body.style.backgroundColor = '#000000'
	mario.play()
}

function cryB() {
	body.style.backgroundColor = '#ffccfa'
	mario.pause()
}




