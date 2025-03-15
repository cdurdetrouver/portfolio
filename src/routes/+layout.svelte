<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Components
	import Logo from '$lib/components/Logo.svelte';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// Toast
	import { initializeStores, Toast } from '@skeletonlabs/skeleton';

	initializeStores();
</script>

<svelte:head>
	<title>Portfolio Gabriel Bazart</title>
	<meta
		name="description"
		content="Portfolio de Gabriel Bazart, présentant des projets et des compétences en développement web et en ingénierie logicielle."
	/>
	<meta
		name="keywords"
		content="Gabriel Bazart, portfolio, développement web, ingénierie logicielle, projets, programmation, développeur, JavaScript, Svelte, Node.js, React, CSS, HTML, CPP, c++, backend, frontend, full-stack, applications web, technologies, informatique, école 42, 42, 42 Paris, alternance, stage, software engineering"
	/>
	<meta name="author" content="Gabriel Bazart" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta charset="UTF-8" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.cdurdetrouver.fr/" />
	<meta property="og:title" content="Portfolio Gabriel Bazart" />
	<meta
		property="og:description"
		content="Portfolio de Gabriel Bazart, présentant des projets et des compétences en développement web et en ingénierie logicielle."
	/>
	<meta property="og:image" content="https://www.cdurdetrouver.fr/projects/portfolio.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.cdurdetrouver.fr/" />
	<meta property="twitter:title" content="Portfolio Gabriel Bazart" />
	<meta
		property="twitter:description"
		content="Portfolio de Gabriel Bazart, présentant des projets et des compétences en développement web et en ingénierie logicielle."
	/>
	<meta property="twitter:image" content="https://www.cdurdetrouver.fr/projects/portfolio.png" />

	<!-- Favicon -->
	<link rel="icon" href="/favicon.png" type="image/x-icon" />
	<link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
	<link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<Toast />

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<Logo />
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div>
					<a class="btn hover:variant-soft-primary cursor-pointer" href="/contact">
						<span class="select-none inline-block">Contact</span>
					</a>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
