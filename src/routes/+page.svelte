<script>
	import Hero from "$lib/components/Home/Hero.svelte";
	import Freelance from "$lib/components/Home/Freelance.svelte";
	import Project from "$lib/components/Home/Project.svelte";
	import Stack from "$lib/components/Home/Stack.svelte";
</script>

<header id="hero" class="hero-gradient">
	<div class="section-container"><Hero /></div>
</header>

<section id="freelance">
	<div class="section-container"><Freelance/></div>
	<div class="h-[10vh]"></div>
</section>

<section id="project" class="project-gradient">
	<div class="section-projects"><div class="section-container"><Project/></div></div>
</section>

<section id="notice" class="notice-gradient">
	<div class="section-container"><div class="w-[70-vh]"></div></div>
</section>

<section id="stack" class="stack-gradient">
	<div class="section-container"><Stack/></div>
</section>

<img class="w-[50vw]" src="yugo.gif" alt="test">
<img class="w-[5vw]" src="stardew.gif" alt="test">
<img class="w-[15vw]" src="saitama.gif" alt="test">
<img class="w-[20vw] rounded-xl" src="outerwilds.jpg" alt="test">
<img class="w-[20vw] rounded-xl" src="curry.png" alt="test">
<img class="w-[20vw] rounded-xl" src="vitality.png" alt="test">
<img src="https://media0.giphy.com/media/YRMb6dd7zprS00JdGZ/giphy.gif?cid=ecf05e47pp9oy2ivxoy3aif9mvewoex6jc5ywnem9njblkob&ep=v1_stickers_search&rid=giphy.gif&ct=s" alt="dev"/>

<style type="postcss">
	.section-container {
		@apply w-full max-w-7xl mx-auto p-4 py-16 md:py-24;
	}

	@media (min-width: 80rem) {
		.section-projects {
			@apply w-full;
			position: relative;
			background-size: cover;
			background-position: center;
		}
		.section-projects::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 120%;
			height: 100%;
			background-image: url('/outerwilds.jpg');
			background-size: cover;
			background-position: center;
			transform: translateX(-10%);
			opacity: 0.5;
			z-index: -1;
			border-top-left-radius: 75% 50%;
			border-top-right-radius: 75% 50%;
		}
	}

	.hero-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
			radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);
	}

	.project-gradient {
		background-image:
			radial-gradient(at 0% 100%, rgba(var(--color-secondary-500) / 0.50) 0px, transparent 50%);
	}

	.notice-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.50) 0px, transparent 50%),
			radial-gradient(at 100% 100%,  rgba(var(--color-primary-500) / 0.24) 0px, transparent 50%);
	}

	.stack-gradient {
		background-image:
			radial-gradient(at 100% 0%,  rgba(var(--color-primary-500) / 0.24) 0px, transparent 50%),
			radial-gradient(at 30% 100%,  rgba(var(--color-error-500) / 0.1) 0px, transparent 50%);
	}
</style>
