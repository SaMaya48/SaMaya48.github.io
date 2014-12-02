/*
  $('input[type="checkbox"]').checkbox({
    checkedClass: 'icon-check',
    uncheckedClass: 'icon-check-empty'
	});*/

$(document).ready (function () {
	$(".description").click(function () {
	      $("#descriptionbody").text(description($(this).attr('value')));
		});

	$("#anything").click(function () {
	      alert("message");

		var y="";
	
		alert(y);
		
		  $(".feature_check").each(function () {
				if( $(this).prop('checked') && $(this).is(':visible')) {
				
					
					var x = ($(this).prop('value') + $(this).is(":visible"));
					
					x = y + x;
				
				}
		 });  
	});
	$("#password").change(function () {
		if($("#password").prop('checked')) {
			$("#simple-row").show();
			$("#complex-row").show();
		}
		else {
			$("#simple-row").hide();
			$("#complex-row").hide();
		}
	});
	
	$("#encryptedpersistence").change(function () {
	
		if($("#encryptedpersistence").prop('checked')) {
			$("#encryptedcore-row").show();
			$("#keychain-row").show();
		}
		else {
			$("#encryptedcore-row").hide();
			$("#keychain-row").hide();
		}
	});
	
	$("#staticattackdefense").change(function () {
	
		if($("#staticattackdefense").prop('checked')) {
			$("#encryptedcode-row").show();
			$("#compilerdivers-row").show();
		}
		else {
			$("#encryptedcode-row").hide();
			$("#compilerdivers-row").hide();
		}
	});
	$("#jailbreakdebug").change(function () {
	
		if($("#jailbreakdebug").prop('checked')) {
			$("#jailbreak-row").show();
			$("#debugger-row").show();
		}
		else {
			$("#jailbreak-row").hide();
			$("#debugger-row").hide();
		}

	});
	
	$("#dataremoval").change(function () {
	
		if($("#dataremoval").prop('checked')) {
			$("#removesand-row").show();
			$("#wipememory-row").show();
		}
		else {
			$("#removesand-row").hide();
			$("#wipememory-row").hide();
		}

	});
	
	$("#devicemon").change(function () {
	
		if($("#devicemon").prop('checked')) {
			$("#processes-row").show();
			$("#internetconnec-row").show();
		}
		else {
			$("#processes-row").hide();
			$("#internetconnec-row").hide();
		}

	});

});