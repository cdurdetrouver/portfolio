<script>
	import HomeHero from "$lib/components/Home/HomeHero.svelte";
</script>

<header id="hero">
	<div class="section-container"><HomeHero /></div>
</header>

<img class="w-[50vw]" src="yugo.gif" alt="test">
<img class="w-[5vw]" src="stardew.gif" alt="test">
<img class="w-[15vw]" src="saitama.gif" alt="test">
<img class="w-[20vw] rounded-xl" src="outerwilds.jpg" alt="test">
<img src="https://media0.giphy.com/media/YRMb6dd7zprS00JdGZ/giphy.gif?cid=ecf05e47pp9oy2ivxoy3aif9mvewoex6jc5ywnem9njblkob&ep=v1_stickers_search&rid=giphy.gif&ct=s" alt="dev"/>

<style type="postcss">
	.section-container {
		@apply w-full max-w-7xl mx-auto p-4 py-16 md:py-24;
	}
</style>
