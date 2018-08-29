$(document).ready(function() {
	(function(){

		var checkComment = {
			init: function(){
				this._setupListner();
			},

			_setupListner: function(){
				$('#comment-form').on('submit', checkComment._validateForm)
			},

			_validateForm: function(event){
				event.preventDefault();
				var form = $(this),
						textarea = form.find('.textarea');
						textParent = textarea.parents();
				console.log(textParent);
				if (textarea.val().trim() == ""){
					console.log("В условии");
					event.preventDefault();
					textParent.find('.notify').removeClass('hide');
				} else {
					textParent.find('.notify').addClass('hide');
					$('#comment-form').unbind('submit').submit();
				}
			},
		};
		checkComment.init();

	}());


});