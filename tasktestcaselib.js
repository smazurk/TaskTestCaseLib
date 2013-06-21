var renderContent = function($contentElement, context) {
	
		var html = '';
		html += '<div id="templateAddNewDiv">';

		$contentElement.append(html);

	}

tau.mashups.addDependency('tp/userStory/view')
    
    .addMashup(function (view) {
        view.addTab('Template', renderContent)
          
    });
    
    tau.mashups 
    .addDependency('app.bus') 
    .addDependency('tau/configurator')
    .addMashup(function ($deferred, configurator) { 
 	
               
var applyTemplate = function() {
		console.log('hello');

		this.init = function() {

			this._userstoryid = 0;
			$deferred.then(function(bus) {
				//TODO: Need to use a better event, or do something when this is not the default tab
				bus.on('afterRenderAll', function(evt, data) {



					if (evt.caller.name == "container") {
						if (typeof data.data.context.entity !== 'undefined') {

							startApplyTemplate(data);
						}
					}

				});


			})

		};






		startApplyTemplate = function(eventdata) {

		};


/*
        fix the input from the text boxes
        */
		function fixInput(s) {

			s = s.replace(/"/gm, '"');
			s = s.replace(/>/gm, '>');
			s = s.replace(/</gm, '<');
			//s = s.replace(/'/gm, ''');
			s = s.replace(/(\r\n|\n|\r)/gm, '\n');
			s = s.replace(/(\r\n|\n|\r)/gm, '<br />');
			return s;
		}





	};




new applyTemplate().init();

});
