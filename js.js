var app = {
	createElement: function(params){
		var element = document.createElement(params.tagName);


		if (params.inputType){
			element.setAttribute('type' , params.inputType);
		}

		element.className = params.className;
		element.innerHTML = params.content;

		if(params.parentElement){
			params.parentElement.appendChild(element);
		}
	
         return element;
	  },

	  generateQuestions:function(questionsAmount, answersAmount){


	  	for( var i = 0; i < questionsAmount; i++){
	  	this.createElement({
	  		tagName: 'h2',
	  		content:'Вопрос №' + (i + 1) ,
	  		parentElement: body
	  	});
	  	for( var j = 0; j < answersAmount; j++){
	  		this.createElement({
	  			tagName: 'label',
	  		    content:' <input type = "checkbox">Вариант ответа №' + (j + 1) ,
	  		    parentElement: body
	  		})
	  	}
	  };
	}
}



var body = document.querySelector('body');

app.createElement({
	tagName: 'h1',
	className: 'title',
	content: 'Тест по программированию',
	parentElement: body
});






app.generateQuestions(10, 10);



app.createElement({
	tagName: 'input',
	inputType: 'submit',
	className: 'check-results',
	content: 'Проверить мои результаты',
	parentElement: body
});