<script lang="ts">
	import Icon from '@iconify/svelte';

	const features = [
		{
			title: 'Svelte',
			body: "Développement d'inteface web réactives et performantes.",
			icon: 'skill-icons:svelte'
		},
		{
			title: 'Typescript',
			body: 'Code robuste et maintenable avec typage statique.',
			icon: 'skill-icons:typescript'
		},
		{
			title: 'Python',
			body: `Développement back-end, scripts et automatisation.`,
			icon: 'skill-icons:python-dark'
		},
		{
			title: 'Docker',
			body: "Conteneurisation et déploiement d'applications.",
			icon: 'skill-icons:docker'
		},
		{
			title: 'Github',
			body: `Gestion de versions, collaboration et CI/CD.`,
			icon: 'skill-icons:github-dark'
		},
		{
			title: 'C++',
			body: 'Programmation systèmes et optimisation des performances.',
			icon: 'skill-icons:cpp'
		}
	];
</script>

<div class="space-y-4 md:space-y-10">
	<div class="space-y-4 text-center">
		<h2 class="h2">Technos que j'utilise</h2>
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
		{#each features as feature}
			<div class="card variant-glass p-4 shadow-lg md:p-10 space-y-4 text-center">
				<span class="btn-icon btn-icon-xl variant-soft-primary">
					<Icon icon={feature.icon} width="32" height="32" />
				</span>
				<h3 class="h3">{feature.title}</h3>
				<p>{@html feature.body}</p>
			</div>
		{/each}
	</div>
</div>
