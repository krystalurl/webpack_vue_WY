

<template>
	
	<div class="mains">
		<com-header></com-header>
		
		<com-footer></com-footer>
	</div>
    
	


</template>

<style lang="scss">
	
    @import './All_css/init.scss';
	@import './lib/font_img/style.css'; 
</style>
<script>
	
	import Header from './Vuecomponent/header.vue';
	import Footer from './Vuecomponent/footer.vue';
	
	
	//这个地方就好像是一个VUE 的DEMO
    export default {
		// 需要的数据  因为这里是一个组件所有需要些的是一个DATA函数
		data(){
			return {
				
			}
		},
		//定义的一些方法
		methods: {
			
		},
		// 组件 或者是单文件
		components: {
			'com-header': Header,
			'com-footer': Footer,
		},
		
    }

</script>