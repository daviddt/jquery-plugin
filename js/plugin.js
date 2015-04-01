(function ( $, window, document ) {
    "use strict";
	
    // The name of the plugin
    var pluginName = "defaultPluginName",
		// The default values of the options
        defaults = {
            propertyName: "value"
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
		// save the element
        this.element = element;
		// extend the default options with the values given
        this.options = $.extend( {}, defaults, options);
        // initialize the plugin
        this.init();
    }

    Plugin.prototype.init = function () {
		$(this.element).text(this.options.text);
    };
	
	// Plugin.prototype.anotherMethod = function () {
	//	
	// };

    // A really lightweight plugin wrapper around the constructor, 
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, 
                new Plugin( this, options ));
            }
        });
	};

})( jQuery, window, document );
