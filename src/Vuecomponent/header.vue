<template>
	
	<header>
		<i class="icon-menu"></i>
	</header>
	
	
</template>

<script>
	
</script>

<style lang="scss">
	$red: #d33a31;
	header{
		position: fixed;
		top: 0;
		height: 1.57rem;
		width: 100%;
		background: $red;
		display: flex;
		align-items: center;
		i{
			position: relative;
			font-size: 0.63rem;
			color: white;
		}
		i:after{
			position: absolute;
			display: block;
			content: '';
			height: 0.44rem;
			width: 0.44rem;
			font-radius: 50%;
			border: 0.01rem solid blue;
		}
	}
	
</style>