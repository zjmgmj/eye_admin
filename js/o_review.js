$('#content').dataTable({
	"aaSorting": [
		[1, "desc"]
	], //默认第几个排序
	"bStateSave": true, //状态保存
	"bFilter": false, //过滤
	"pading": false,
	"sDom": 'rt<"bottom"ilp>', //改变元素位置
	"aoColumnDefs": [
		//{"bVisible": false, "aTargets": [ 3 ]} //控制列的隐藏显示
		{
			"orderable": false,
			"aTargets": [0]
		} // 不参与排序的列
	],
	ajax: {
		url: "/api/admin/audit.php",//接口
		dataType: 'json',
	},
	//默认最后一列（最后更新时间）降序排列
	order: [
		[0, "desc"]
	],
	//行被创建回调
	createdRow: function(row, data, dataIndex) {},
	//行创建完成后回调
	rowCallback: function(row, data, index) {},
	columnDefs: [{
		targets: 0,
		data: 'user_id',
		title: "用户id",
		render: function(data, type, row, meta) {
			return '<input type="checkbox" name="" value="">';
		}
	}, {
		targets: 0,
		data: 'user_id',
		title: "客户",
		render: function(data, type, row, meta) {
			return data;
		}
	}, {
		targets: 0,
		data: 'user_id',
		title: "订单编号",
		render: function(data, type, row, meta) {
			return data;
		}
	}, {
		targets: 0,
		data: 'user_id',
		title: "订单日期",
		render: function(data, type, row, meta) {
			return data;
		}
	}, {
		targets: 0,
		data: 'user_id',
		title: "快递方式",
		render: function(data, type, row, meta) {
			return data;
		}
	}, {
		targets: 0,
		data: 'user_id',
		title: "备注",
		render: function(data, type, row, meta) {
			return data;
		}
	}],
	initComplete: function() {
		//表格加载完毕，手动添加按钮到表格上
		$('.audit_btn').on('click', function() {
			billing('/eye_admin/nested_page/audit.html');
		});
	}
});

//审核
function billing(url) {
	var html = '';
	$.get(url, function(data) {
		html = data;
		layer.open({
			type: 1,
			title: '开单',
			area: ['80%', '80%'],
			skin: 'edit_content', //样式类名
			closeBtn: 1, //不显示关闭按钮
			//anim: 2,
			shadeClose: true, //开启遮罩关闭
			content: html
		});
		$('.layui-layer-ico').addClass('Hui-iconfont').addClass('Hui-iconfont-close');
	});

}