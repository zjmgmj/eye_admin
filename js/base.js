$('.nav_list').on('click', function() {
	$(this).next('.menu_down').toggle('300');
	if($(this).hasClass('nav_left_child')) {
		$(this).removeClass('nav_left_child');
	} else {
		$(this).addClass('nav_left_child');
	}
	return false;
});

$('.nav_a').on('click', function() {
	$('.nav_a').removeClass('active_bg');
	$(this).addClass('active_bg');
});

//编辑弹框
function edit_show(title, id, type, w, h, window_title) {
	(window_title == undefined) ? window_title = '编辑': '';
	var temp = '',
		input_html = '',
		time = false,
		timeId = '';
	for(var i = 0; i < title.length; i++) {
		if(type[i] == 'select') {
			input_html = '<select name="" id="' + id[i] + '">' +
				'<option value="品牌1">品牌1</option><option value="品牌2">品牌2</option><option value="品牌3">品牌3</option>' +
				'</select>'
		} else if(type[i] == 'time') {
			input_html = '<input type="text"  name="" id="' + id[i] + '" value="" />';
			timeId = id[i];
			time = true;
		} else {
			input_html = '<input type="' + type[i] + '" name="" id="' + id[i] + '" value="" />'
		}

		temp += '<li class="edit_list"><span>' + title[i] + '：</span>' + input_html + '</li>';
	}
	html = '<ul class="edit_from"><form>' + temp + '<li class="submit"><button type="reset">重置</button><button class="blue white_text save">保存</button></li></form></ul>'
	layer.open({
		type: 1,
		title: window_title,
		area: [w, h],
		skin: 'edit_content', //样式类名
		closeBtn: 1, //不显示关闭按钮
		anim: 2,
		shadeClose: true, //开启遮罩关闭
		content: html
	});
	$('.layui-layer-ico').addClass('Hui-iconfont').addClass('Hui-iconfont-close');

	if(time == true) {
		$('#' + timeId).on('focus', function() {
			WdatePicker({
				maxDate: '#F{$dp.$D(\'logmax\')||\'%y-%M-%d\'}'
			});
		});
	}
}

//验证
function verification_val(id, reg) {
	if(reg == 'isBlank') {
		$('#' + id).on('blur', function() {
			Reg.isBlank($(this).val(), $(this));
		});
	}
}

function edit_large_show(window_title, title, content_title, content_type, content_id, w, h,select_content) {
	/*
	 *window_title 编辑菜单名称
	 * title 大标题
	 * content_title 字段名称
	 * content_type input字段类型
	 * content_id input id名
	 * w 窗口宽度
	 * h 窗口高度
	 * select_content select中下拉内容
	 * */
	var html = '',
		title_html = '',
		input_html = '',timeId='',time=false;
	for(var i = 0; i < title.length; i++) {
		var content_html = '';
		title_html = '<div class="edit_large"><h4>' + title[i] + '</h4><ul>';
		for(var n = 0; n < content_title[i].length; n++) {
			if(content_type[i][n] == 'select') {
				var option_html='';
				for(var s=0;s<select_content.length;s++){
					for(var s_num=0;s_num<select_content[s].length;s_num++){
						option_html+='<option value="'+select_content[s][s_num]+'">'+select_content[s][s_num]+'</option>';
					}
				}
				input_html = '<select name="" id="' + content_id[i][n] + '">' +option_html+'</select>';
			} else if(content_type[i][n] == 'time') {
				input_html = '<input type="text"  name="" id="' + content_id[i][n] + '" value="" />';
				timeId = content_id[i][n];
				time = true;
			} else {
				input_html = '<input type="' + content_type[i][n] + '" name="" id="' + content_id[i][n] + '" value="" />'
			}
			content_html += '<li class="edit_list"><span>' + content_title[i][n] + '：</span>' +input_html+'</li>'
		}
		html += '<form>'+title_html + content_html + '</ul></div></form>';
	}
	html+='<div class="submit" style="padding-bottom:20px"><button type="reset">重置</button><button class="blue white_text save">保存</button></div>';
	layer.open({
		type: 1,
		title: window_title,
		area: [w, h],
		skin: 'edit_content', //样式类名
		closeBtn: 1, //不显示关闭按钮
		anim: 2,
		shadeClose: true, //开启遮罩关闭
		content: html
	});
	$('.layui-layer-ico').addClass('Hui-iconfont').addClass('Hui-iconfont-close');
	if(time == true) {
		$('#' + timeId).on('focus', function() {
			WdatePicker({
				maxDate: '#F{$dp.$D(\'logmax\')||\'%y-%M-%d\'}'
			});
		});
	}
}