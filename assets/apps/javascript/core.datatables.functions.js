var noAllWarning = false;
$(document).ready(function(){
	if($.isFunction($.fn.dataTable)){
		if (typeof datatable_element_id !== 'undefined') {
			var table = $(datatable_element_id).DataTable({
				"ordering": datatable_columns_ordering,
				"orderClasses": false,
				"order": [[ datatable_default_order_column_id, datatable_default_order_column_dir ]],
				"dom": 'T<"clear">lfrtip',
				"serverSide": false,
				"processing": false,				
				"columns": datatable_columns,
				"deferRender": true,
				"paging": true,
				"pageLength": datatable_page_length,
				"pagingType": "full_numbers",
				"lengthMenu": [[10, 20, 30, 40, 50, -1], [10, 20, 30, 40, 50, "All"]],
				"language": {
					"sEmptyTable": "Sorry! No data available in " + $(datatable_module_name_element_id).val() + ".",
					"sLoadingRecords": "Please wait while loading data from Server...",
					"sSearch": "Search Record: ",
					"sInfo": "Showing _START_ to _END_ of _TOTAL_ records.",
					"sInfoEmpty": "Showing 0 to 0 of 0 records.",
					"sProcessing": "Please wait while loading data from Server...",
					"sInfoFiltered": "filtered from _MAX_ total records",
					"sZeroRecords": "No matching records found in " + $(datatable_module_name_element_id).val() + ".",
					"lengthMenu": '_MENU_ <div class="fl rec">records per page.<div>',
					"search": '<i class="fa fa-search"></i>',
					"paginate": {
						"previous": '<i class="fa fa-angle-left"></i>',
						"next": '<i class="fa fa-angle-right"></i>'
					}
				}
			});
			$(datatable_element_id).on('draw.dt', function(){
				table.columns.adjust();
				if($(datatable_element_id + ' > tbody  > tr > td:eq(0)').hasClass('dataTables_empty')){
					if(datatable_has_checkbox == true){
						$('.checkall').attr('disabled', true);
					}
					if(datatable_function_buttons_element_id != null){
						$(datatable_function_buttons_element_id).hide();
					}
					if($(datatable_element_id + '>tfoot').length > 0){
						$(datatable_element_id + '>tfoot').hide();	
					}
					if($('#' + datatable_form_name + ' .exportbtn').length > 0){
						$('#' + datatable_form_name + ' .exportbtn').hide();
					}
				}else{
					$(datatable_element_id).on( 'page.dt', function (){
						var info = table.page.info();
						$('#' + datatable_form_name + '_CurrentPageNo').val(info.page+1);
					});
					if(datatable_has_checkbox == true){
						$('.checkall').removeAttr('disabled');
					}
					if(datatable_function_buttons_element_id != null){
						$(datatable_function_buttons_element_id).show();
					}
					if($(datatable_element_id + '>tfoot').length > 0){
						$(datatable_element_id + '>tfoot').show();
					}
					if($(".dtsublinkstable").length > 0){
						for(row=0; row<$(".dtsublinkstable").length; row++){
							$(".dtsbl" + row).height($(".dtsbl" + row).parent().height());	
						}
					}
				}
				if((datatable_has_checkbox == true) || (datatable_has_deleted == true)){
					$(datatable_element_id + ' > tbody  > tr').each(function(){
						
					});
				}
				var hash = location.hash.replace('#','');
				if(hash != ''){
					$('html, body').animate({ scrollTop: $('#' + hash).offset().top}, 1000);
				}
			});
		}
	    if (typeof datatable_element_id_2 !== 'undefined') {
			var table = $(datatable_element_id_2).DataTable({
				"ordering": datatable_columns_ordering_2,
				"orderClasses": false,
				"order": [[ datatable_default_order_column_id_2, datatable_default_order_column_dir_2 ]],
				"dom": 'T<"clear">lfrtip',
				"serverSide": true,
				"processing": true,
				"ajax": {
					"url": datatable_ajax_source_2, 
					"type": "POST"
				},
				"columns": datatable_columns_2,
				"deferRender": true,
				"paging": true,
				"pageLength": datatable_page_lenght_2,
				"pagingType": "full_numbers",
				"lengthMenu": [[10, 20, 30, 40, 50, -1], [10, 20, 30, 40, 50, "All"]],
				"language": {
					"sEmptyTable": "Sorry! No data available in " + $(datatable_module_name_element_id_2).val() + ".",
					"sLoadingRecords": "Please wait while loading data from Server...",
					"sSearch": "Search Record: ",
					"sInfo": "Showing _START_ to _END_ of _TOTAL_ records.",
					"sInfoEmpty": "Showing 0 to 0 of 0 records.",
					"sProcessing": "Please wait while loading data from Server...",
					"sInfoFiltered": "filtered from _MAX_ total records",
					"sZeroRecords": "No matching records found in " + $(datatable_module_name_element_id_2).val() + ".",
					"lengthMenu": '_MENU_ <div class="fl rec">records per page.<div>',
					"search": '<i class="fa fa-search"></i>',
					"paginate": {
						"previous": '<i class="fa fa-angle-left"></i>',
						"next": '<i class="fa fa-angle-right"></i>'
					}
				}
			});
			$(datatable_element_id_2).on('draw.dt', function(){
				table.columns.adjust();
				if($(datatable_element_id_2 + ' > tbody  > tr > td:eq(0)').hasClass('dataTables_empty')){
					if(datatable_has_checkbox_2 == true){
						$('.checkall').attr('disabled', true);
					}
					if(datatable_function_buttons_element_id_2 != null){
						$(datatable_function_buttons_element_id_2).hide();
					}
					if($(datatable_element_id_2 + '>tfoot').length > 0){
						$(datatable_element_id_2 + '>tfoot').hide();	
					}
					if($('#' + datatable_form_name_2 + ' .exportbtn').length > 0){
						$('#' + datatable_form_name_2 + ' .exportbtn').hide();
					}
				}else{
					$(datatable_element_id_2).on( 'page.dt', function (){
						var info = table.page.info();
						$('#' + datatable_form_name_2 + '_CurrentPageNo').val(info.page+1);
					});
					if(datatable_has_checkbox_2 == true){
						$('.checkall').removeAttr('disabled');
					}
					if(datatable_function_buttons_element_id_2 != null){
						$(datatable_function_buttons_element_id_2).show();
					}
					if($(datatable_element_id_2 + '>tfoot').length > 0){
						$(datatable_element_id_2 + '>tfoot').show();
					}
					if($(".dtsublinkstable").length > 0){
						for(row=0; row<$(".dtsublinkstable").length; row++){
							$(".dtsbl" + row).height($(".dtsbl" + row).parent().height());	
						}
					}
				}
				if((datatable_has_checkbox_2 == true) || (datatable_has_deleted_2 == true)){
					$(datatable_element_id_2 + ' > tbody  > tr').each(function(){
						
					});
				}
				var hash = location.hash.replace('#','');
				if(hash != ''){
					$('html, body').animate({ scrollTop: $('#' + hash).offset().top}, 1000);
				}
			});
		}
		if (typeof datatable_element_id_3 !== 'undefined') {
			var table = $(datatable_element_id_3).DataTable({
				"ordering": datatable_columns_ordering_3,
				"orderClasses": false,
				"order": [[ datatable_default_order_column_id_3, datatable_default_order_column_dir_3 ]],
				"dom": 'T<"clear">lfrtip',
				"serverSide": true,
				"processing": true,
				"ajax": {
					"url": datatable_ajax_source_3, 
					"type": "POST"
				},
				"columns": datatable_columns_3,
				"deferRender": true,
				"paging": true,
				"pageLength": datatable_page_lenght_3,
				"pagingType": "full_numbers",
				"lengthMenu": [[10, 20, 30, 40, 50, -1], [10, 20, 30, 40, 50, "All"]],
				"language": {
					"sEmptyTable": "Sorry! No data available in " + $(datatable_module_name_element_id_3).val() + ".",
					"sLoadingRecords": "Please wait while loading data from Server...",
					"sSearch": "Search Record: ",
					"sInfo": "Showing _START_ to _END_ of _TOTAL_ records.",
					"sInfoEmpty": "Showing 0 to 0 of 0 records.",
					"sProcessing": "Please wait while loading data from Server...",
					"sInfoFiltered": "filtered from _MAX_ total records",
					"sZeroRecords": "No matching records found in " + $(datatable_module_name_element_id_3).val() + ".",
					"lengthMenu": '_MENU_ <div class="fl rec">records per page.<div>',
					"search": '<i class="fa fa-search"></i>',
					"paginate": {
						"previous": '<i class="fa fa-angle-left"></i>',
						"next": '<i class="fa fa-angle-right"></i>'
					}
				}
			});
			$(datatable_element_id_3).on('draw.dt', function(){
				table.columns.adjust();
				if($(datatable_element_id_3 + ' > tbody  > tr > td:eq(0)').hasClass('dataTables_empty')){
					if(datatable_has_checkbox_3 == true){
						$('.checkall').attr('disabled', true);
					}
					if(datatable_function_buttons_element_id_3 != null){
						$(datatable_function_buttons_element_id_3).hide();
					}
					if($(datatable_element_id_3 + '>tfoot').length > 0){
						$(datatable_element_id_3 + '>tfoot').hide();	
					}
					if($('#' + datatable_form_name_3 + ' .exportbtn').length > 0){
						$('#' + datatable_form_name_3 + ' .exportbtn').hide();
					}
				}else{
					$(datatable_element_id_3).on( 'page.dt', function (){
						var info = table.page.info();
						$('#' + datatable_form_name_3 + '_CurrentPageNo').val(info.page+1);
					});
					if(datatable_has_checkbox_3 == true){
						$('.checkall').removeAttr('disabled');
					}
					if(datatable_function_buttons_element_id_3 != null){
						$(datatable_function_buttons_element_id_3).show();
					}
					if($(datatable_element_id_3 + '>tfoot').length > 0){
						$(datatable_element_id_3 + '>tfoot').show();
					}
					if($(".dtsublinkstable").length > 0){
						for(row=0; row<$(".dtsublinkstable").length; row++){
							$(".dtsbl" + row).height($(".dtsbl" + row).parent().height());	
						}
					}
				}
				if((datatable_has_checkbox_3 == true) || (datatable_has_deleted_3 == true)){
					$(datatable_element_id_3 + ' > tbody  > tr').each(function(){
						
					});
				}
				var hash = location.hash.replace('#','');
				if(hash != ''){
					$('html, body').animate({ scrollTop: $('#' + hash).offset().top}, 1000);
				}
			});
		}
	}
});
function AllChecked(){
	var theForm = document.getElementById(datatable_form_name);
	len = theForm.elements.length;
	for(var i = 0 ; i < len ; i++){
	    if(theForm.elements[i].name == "check" && !theForm.elements[i].checked){
			return false;
	    }
	}
	return true;
}
function ExportDataToExcel(){
	var theForm = document.getElementById(datatable_form_name);
	if(!confirm("Are you sure you want to export\nall " + $('#' + datatable_form_name + '_ModuleName').val().toLowerCase() + "?")){
		return false;
	}else{
		theForm.ActionVal.value = "ExportDataToExcel";
		theForm.submit();
	}
}
function ActionOneRecordButton(record_id, module_name, form_name){
	var theForm = document.getElementById(form_name);
	if(!confirm("Are you sure you want to delete\nselected record of " + module_name.toString() + "?")){
		return false;
	}else{
		theForm.Records.value = parseInt(record_id);
		theForm.ActionVal.value = "DeleteOneRecord";
		$(".overlay").show();
		theForm.submit();
	}
}
function ActionSelectedRecords(action_type){
	var noAllWarning = false;
	var theForm = document.getElementById(datatable_form_name);
	var blnSubmit = false;
	var valueArray = "";
	var alert_message_c = "Select one or more record in\n{module} to delete.";
	var alert_message = alert_message_c.replace("{module}", $('#' + datatable_form_name + '_ModuleName').val().toLowerCase());
   	var confirm_message = "Are you sure you want to delete selected\nrecords of " + $('#' + datatable_form_name + '_ModuleName').val().toLowerCase() + "?\n\nNOTICE:\nYou cannot undo this action.";
	var function_name = "DeleteSelectedRecords";
	if (!noAllWarning && AllChecked()){
		if(!confirm(confirm_message.toString())){
			blnSubmit = false;
			return false;
		}else{
			blnSubmit = true;			
		}
	}else{
		for(var i=0; i<theForm.length; i++){
			if((theForm[parseInt(i)].type == "checkbox") && (theForm[parseInt(i)].name == "check")){
				if(theForm[parseInt(i)].checked){
					blnSubmit = true;
					break;
				}else{
					blnSubmit = false;
				}
			}
		}
		if(blnSubmit == true){
			if(!confirm(confirm_message.toString())){
				return false;
			}else{
				blnSubmit = true;				
			}			
		}
	}
	if(blnSubmit == false){
		alert(alert_message);
		return false;
	}
	if(blnSubmit == true){
		valueArray = "";
		for (var i=0; i<theForm.length; i++){
			if((theForm[parseInt(i)].type == "checkbox") && (theForm[parseInt(i)].name == "check")){
				if(theForm[parseInt(i)].checked){
					if(valueArray == ""){
						valueArray = theForm[parseInt(i)].value;
					}else{
						valueArray = valueArray + data_separator + theForm[parseInt(i)].value;
					}
				}
			}
		}
		theForm.Records.value = valueArray;
		theForm.ActionVal.value = function_name.toString();
		$(".overlay").show();
		theForm.submit();	
	}
}