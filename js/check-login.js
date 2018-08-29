$(document).ready(function() {

		(function(){

		var loginValidation = {

			isValid: true,

			init: function(){
				// вызов внутренних функций
				this._setUpListeners();
			},

			_setUpListeners: function(){

				$('#login-form').on('submit', loginValidation._validLogin);
			},

			_validLogin: function(event){
				event.preventDefault();
				var _form = $(this),
						_inputs = _form.find('input');


				$.each(_inputs,function(index,val){



					var _input = $(val),
							_value = _input.val().trim(),
							_parent = _input.parents(),
							_textError = 'Введите ' + _input.attr('name'),
							_blockError = $('<div class="notify notify--error mb-20">' + _textError + '</div>')

					if (_value == ''){
						console.log(_parent);
						_blockError.prependTo(_form);
					}	

				// Hide errors
					// input.on('focus', function(){
					// 	form.find('.notify--error').remove();
					// });

				});

			},

		};

		loginValidation.init();

	}());


});