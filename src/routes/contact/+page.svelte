<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full w-full mx-auto flex justify-center items-center">
	<div class="flex flex-col items-center justify-center gap-10">
		<h1 class="h1 glitch uppercase" data-text="En construction">En construction</h1>
		<a class="btn variant-filled" href="/">Retour à la page principale</a>
	</div>
</div>

<style lang="scss">

	.glitch {
		position: relative;
		color: white;
		mix-blend-mode: lighten;
		text-shadow: -2.5px -2.5px rgba(blue,0.7);

		&:before {
			content: attr(data-text);
			position: absolute;
			top: 0;
			width: 100%;
			text-shadow: 2.5px 2.5px rgba(red,0.7);
		}
	}
</style>
