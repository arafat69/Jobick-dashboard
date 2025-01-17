(function($) {
    "use strict" 


 var dlabVectorMap = function(){
	
	var screenWidth = $(window).width();
	
	var handleWorldMap = function(trigger = 'load'){
		var vmapSelector = $('#world-map');
		if(trigger == 'resize')
		{
			vmapSelector.empty();
			vmapSelector.removeAttr('style');
		}
		
		vmapSelector.delay( 500 ).unbind().vectorMap({ 
			map: 'world_en',
			backgroundColor: 'transparent',
			borderColor: 'var(--border)',
			borderOpacity: 0.25,
			borderWidth: 1,
			color: 'var(--border)',
			enableZoom: true,
			hoverColor: 'var(--primary)',
			hoverOpacity: null,
			normalizeFunction: 'linear',
			scaleColors: ['#b6d6ff', '#005ace'],
			selectedColor: 'var(--primary)',
			selectedRegions: null,
			showTooltip: true,
			onRegionClick: function(element, code, region)
			{
				var message = 'You clicked "'
					+ region
					+ '" which has the code: '
					+ code.toUpperCase();
		 
				alert(message);
			}
		});
	}
	
	var handleUsaMap = function(trigger = 'load'){
		var vmapSelector = $('#usa');
		if(trigger == 'resize')
		{
			vmapSelector.empty();
			vmapSelector.removeAttr('style');
		}
		
		vmapSelector.delay(500).unbind().vectorMap({ 
			map: 'usa_en',
			backgroundColor: 'transparent',
			borderColor: 'var(--border)',
			borderOpacity: 0.25,
			borderWidth: 1,
			color: 'var(--border)',
			enableZoom: true,
			hoverColor: 'var(--primary)',
			hoverOpacity: null,
			normalizeFunction: 'linear',
			scaleColors: ['#b6d6ff', '#005ace'],
			selectedColor: 'var(--primary)',
			selectedRegions: null,
			showTooltip: true,
			onRegionClick: function(element, code, region)
			{
				var message = 'You clicked "'
					+ region
					+ '" which has the code: '
					+ code.toUpperCase();
		 
				alert(message);
			}
		});
	}
	
		return {
			init:function(){
			},
			
			
			load:function(){
				handleWorldMap();
				handleUsaMap();
			},
			
			resize:function(){
				handleWorldMap('resize');
				handleUsaMap('resize');
			}
		}
	
	}();

	jQuery(document).ready(function(){
	});
		
	jQuery(window).on('load',function(){
		setTimeout(function(){
			dlabVectorMap.load();
		}, 1000); 
		
	});

	jQuery(window).on('resize',function(){
		setTimeout(function(){
			dlabVectorMap.resize();
		}, 1000); 
		
	});     

})(jQuery);	