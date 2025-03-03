<script lang="ts">
	const features = [
		{
			title: 'Svelte',
			body: 'Création de site internet avec Skeleton UI and tailwindcss.',
			icon: 'fa-laptop-code'
		},
		{
			title: 'C++',
			body: 'Programmation orienté objet pour créer des apps performantes.',
			icon: 'fa-universal-access'
		},
		{
			title: 'Python',
			body: `Faire de la dara science rapidement et efficacement.`,
			icon: 'fa-square-arrow-up-right'
		},
		{
			title: 'Typescript',
			body: 'Pour utiliser avec Svelte en tant que backend ave honojs Deno.',
			icon: 'fa-code'
		},
		{
			title: 'Github',
			body: `Création de repo avec pipeline CI/CD, branch ruleset etc...`,
			icon: 'fa-puzzle-piece'
		},
		{
			title: 'Mongodb',
			body: 'Base de données nosql simple et performante.',
			icon: 'fa-icons'
		}
	];
</script>

<div class="space-y-4 md:space-y-10">
	<div class="space-y-4 text-center">
		<h2 class="h2">La liste de mes spécialités</h2>
		<p>à voir.</p>
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
		{#each features as feature}
			<div class="card variant-glass p-4 shadow-lg md:p-10 space-y-4 text-center">
				<span class="btn-icon btn-icon-xl variant-soft-primary">
					<i class="fa-solid {feature.icon}"></i>
				</span>
				<h3 class="h3">{feature.title}</h3>
				<p>{@html feature.body}</p>
			</div>
		{/each}
	</div>
</div>
