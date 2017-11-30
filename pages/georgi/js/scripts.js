$(document).ready(function() {
	$('.show-content').click(function(e){
		$('.content').hide()
		let clickedId = e.target.id.substring(0, 3)
		$('#'+clickedId).show()
	})
})
