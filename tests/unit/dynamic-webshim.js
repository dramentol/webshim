module("dynamic webshim");
asyncTest("dynamic webshim Modul", function(){
	var testElem = $('<div />').appendTo('body');
	var testStructure = '<div id="webshim-structure"><section><hgroup><input placeholder="hello" /></hgroup></section><section></section></div>';
	var structureTest = function(fnName){
		equals( $('#webshim-structure > *').length, 2, 'structure has two childs with method '+ fnName );
		equals( $('#webshim-structure *').length, 4, 'structure has 4 descendants with method '+ fnName );
		if($.support.placeholder === 'shim'){
			equals( $('#webshim-structure input')[0].value, 'hello', '1 functional webshim does work with method '+ fnName );
			equals( $('#webshim-structure input').attr('value'), '', '2 functional webshim does work with method '+ fnName );
		}
		$('#webshim-structure input').remove();
		ok($('#webshim-structure').html().indexOf('/>') === -1, 'html5 structure is parsed correctly');
		$('#webshim-structure').remove();
	};
	
	testElem.afterWebshim(testStructure);
	structureTest('afterWebshim');
	
	testElem.htmlWebshim(testStructure);
	structureTest('htmlWebshim');
	
	testElem.remove();
	
	
	$.webshims.readyModules('ready forms', function(){
		start();
	});
});

