(function($) {
	$.fn.serializeObject = function() {
				$this = this;
        var json = {};  
        $.map($this.serializeArray(), function(n, i){             
            if(n['name'] != undefined && n['name'] != '')
                json[n['name']] = n['value'];
        });        
        return json;		
	}
})( jQuery );


/**
 * fill form from object
 */
(function($) {
	$.fn.deserializeObject = function(object) {
				$this = this;
				for (i in object) {					
					$("input[name="+i+"]",$this).val(object[i])
				}
        return true;		
	}
})( jQuery );
