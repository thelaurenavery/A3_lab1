(function() {
	
  console.log("master.js loaded");
	
    var thumbnail = document.querySelectorAll('img'),
		info = document.querySelector('.modelDetails'),
        model = document.querySelector('.modelName'),
        price = document.querySelector('.priceInfo');

    function makeRequest() {
  	//debugger;
        httpRequest = new XMLHttpRequest();
        if (!httpRequest) {
            console.log('It no worky');
        }
        httpRequest.onreadystatechange = showInfo;
        httpRequest.open('GET', 'includes/ajaxQuery.php' + "?model=" + this.id);
        httpRequest.send();
    }

    function showInfo() {
   
            modelDeets = JSON.parse(httpRequest.responseText);

            [].forEach.call(document.querySelectorAll('.hidden'), function(item) {
				
                      item.classList.remove('hidden');
				
                    });
		
            info.innerHTML = modelDeets.modelDetails;
            model.innerHTML = modelDeets.model;
            price.innerHTML = modelDeets.pricing;
       
    }


    for (var i = 0; i < thumbnail.length; i++) {
      thumbnail[i].addEventListener('click', makeRequest, false);
    }
})();
