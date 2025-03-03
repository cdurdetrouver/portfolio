<script lang="ts">
</script>

<div class="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-10 items-center justify-center">
	<div class="flex flex-col items-center xl:items-start text-center xl:text-left space-y-4 mt-40">
		<h1 class="h1 !text-5xl md:!text-6xl max-w-[600px]">
			Hey! I’m <span class="glitch-text uppercase" data-text="Gabriel">Gabriel</span> and I'm a software engineer.
		</h1>
		<p class="!text-xl max-w-[475px]">
			I love working on the web and making sure it continues to be a place for everyone and our creative, personal, and weird passions.
		</p>
		<div class="flex gap-4">
			<a class="btn variant-filled text-xl" href="#test" rel="noreferrer">
				Learn more about me
			</a>
		</div>
	</div>
	<div class="hidden md:inline-block w-full max-w-[650px] mx-auto mt-20">
		<div class="aspect-video relative">
			<div class="absolute z-[1] left-[23%]">
				<div class="glitch-image">
					<img src="gbazart.jpg" alt="profile picture" class="rounded-3xl w-[28vw] " aria-hidden="true" />
					<img src="little-logo.png" alt="logo" class="rounded-3xl w-[28vw] overlay-logo" aria-hidden="true" />
				</div>
			</div>
		</div>
	</div>
</div>

<style type="scss">
	.glitch-text {
		position: relative;
		color: white;
		mix-blend-mode: lighten;
		text-shadow: -5px -5px rgba(36, 106, 194, 0.7);

		&:before {
			content: attr(data-text);
			position: absolute;
			top: 10px;
			width: 100%;
			text-shadow: 5px 5px rgba(207, 35, 114, 0.7);
		}
	}

	.glitch-image {
		position: relative;
		display: inline-block;
	}

	.overlay-logo {
		position: absolute;
		display: none;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		animation: img-glitch-transparent 3s linear infinite alternate;
	}

	.glitch-image:hover .overlay-logo{
		display: block;
	}

	@keyframes img-glitch-transparent {
		0% {
			clip-path: polygon(0% 0%, 100% 0%, 100% 25%, 0% 25%);
			transform: translate(5px, 0);
		}
		20% {
			clip-path: polygon(0% 25%, 100% 25%, 100% 50%, 0% 50%);
			transform: translate(-5px, 0);
		}
		40% {
			clip-path: polygon(0% 50%, 100% 50%, 100% 75%, 0% 75%);
			transform: translate(5px, 0);
		}
		60% {
			clip-path: polygon(0% 75%, 100% 75%, 100% 100%, 0% 100%);
			transform: translate(-5px, 0);
		}
		80% {
			clip-path: polygon(0% 50%, 100% 50%, 100% 75%, 0% 75%);
			transform: translate(5px, 0);
		}
		100% {
			clip-path: polygon(0% 25%, 100% 25%, 100% 50%, 0% 50%);
			transform: translate(-5px, 0);
		}
	}
</style>
