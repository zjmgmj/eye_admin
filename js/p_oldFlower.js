$('.table-sort').dataTable({
	"aaSorting": [
		[1, "desc"]
	], //默认第几个排序
	"bStateSave": true, //状态保存
	"bFilter":false,//过滤
	"pading": false,
	"sDom":'rt<"bottom"ilp>',//改变元素位置
	"aoColumnDefs": [
		//{"bVisible": false, "aTargets": [ 3 ]} //控制列的隐藏显示
		{
			"orderable": false,
			"aTargets": [0, 8]
		} // 不参与排序的列
	]
});
/*添加*/
function article_add(title, url, w, h) {
	/*var title=['仓库','品牌','材质','型号','色号','销售价格'];
	var type=['select','select','text','text','text','text'];
	var id=['warehouse','brand','material','model','color','price']
	edit_show(title,id,type,'400px','auto');
	verification_val(id[0],'isBlank');*/
	var window_title='添加';
	var title=['产品信息','供应商信息'];
	var content_title=[
		['仓库','品牌','材质','型号','色号','销售价格'],
		['单位名称','地址','联系人','电话','入库价格','当前欠款']
	];
	var content_type=[
		['select','select','text','text','text','text'],
		['text','text','text','text','text','text']
	];
	var content_id=[
		['warehouse','brand','material','model','color','price'],
		['company_name','add','name','tel','storage_price','arrears']
	];
	var select_content=[['仓库1','仓库2','仓库3'],['品牌1','品牌2','品牌3']];
	edit_large_show(window_title,title,content_title,content_type,content_id,'1200px','auto',select_content);
	verification_val(content_id[0][0],'isBlank');
}
/*编辑*/
function article_edit(obj) {
	/*var title=['仓库','品牌','材质','型号','色号','销售价格'];
	var type=['select','select','text','text','text','text'];
	var id=['warehouse','brand','material','model','color','price']
	edit_show(title,id,type,'400px','auto');
	verification_val(id[0],'isBlank');*/
	var window_title='编辑';
	var title=['产品信息','供应商信息'];
	var content_title=[
		['仓库','品牌','材质','型号','色号','销售价格'],
		['单位名称','地址','联系人','电话','入库价格','当前欠款']
	];
	var content_type=[
		['select','select','text','text','text','text'],
		['text','text','text','text','text','text']
	];
	var content_id=[
		['warehouse','brand','material','model','color','price'],
		['company_name','add','name','tel','storage_price','arrears']
	];
	var select_content=[['仓库1','仓库2','仓库3'],['品牌1','品牌2','品牌3']];
	edit_large_show(window_title,title,content_title,content_type,content_id,'1200px','auto',select_content);
	verification_val(content_id[0][0],'isBlank');
}
/*删除*/
function article_del(obj, id) {
	layer.confirm('确认要删除吗？', function(index) {
		/*$.ajax({
			type: 'POST',
			url: '',
			dataType: 'json',
			success: function(data) {
				$(obj).parents("tr").remove();
				layer.msg('已删除!', {
					icon: 1,
					time: 1000
				});
			},
			error: function(data) {
				console.log(data.msg);
			},
		});*/
		$(obj).parents("tr").remove();
		layer.msg('已删除!', {
			icon: 1,
			time: 1000
		});
	});
}

$('.edit_btn').on('click', function() {
	article_edit($(this));
});
$('.add_btn').on('click', function() {
	article_add();
});
$('.del_btn').on('click', function() {
	article_del($(this))
});
