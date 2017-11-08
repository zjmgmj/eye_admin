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
			"aTargets": [0, 10]
		} // 不参与排序的列
	]
});

/*添加弹框*/
function article_add(obj) {
	var title=['工号','密码','姓名','性别','职位','手机号','身份证','加入时间'];
	var type=['number','text','sex','text','text','tel','number','time'];
	var id=['job_num','pw','name','sex','office','tel','ID_card','join_time'];
	var data=''//数据
	edit_show(title,id,type,'400px','auto');
	verification_val(id[0],'isBlank');
}
/*编辑弹框*/
function article_edit(obj) {
	var title=['工号','密码','姓名','性别','职位','手机号','身份证','加入时间'];
	var type=['number','text','sex','text','text','tel','number','time'];
	var id=['job_num','pw','name','sex','office','tel','ID_card','join_time'];
	edit_show(title,id,type,'400px','auto');
	verification_val(id[0],'isBlank');
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

