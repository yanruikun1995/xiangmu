window.onload = function(){
	
	$(".yrk_yin").hide();
	$(".yrk_ss").click(function(){
		$(".yrk_ss").hide();
		$('.yrk_yin').show();
		$('.yrk_yin').animate({width: "300"}, 1000);
	})
	
	$("#bss").click(function(){
		var search = $('#nei').val();
		if(search.length > 0){
			alert('没您所查找的内容');
      $(".yrk_ss").show();
      $(".yrk_yin").hide();
      return false;
      
		}else{
			alert('请输入要搜索的内容~')
		}
	})
	
}
