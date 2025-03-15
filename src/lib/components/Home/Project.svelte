<script lang="ts">
	import type { Project } from '$lib/types/project';

	let projects: Project[] = [
		{
			title: 'Portfolio',
			description: 'Mon protfolio personnel, réalisé avec SvelteKit et TailwindCSS.',
			link: 'https://www.cdurdetrouver.fr',
			image: 'portfolio.png'
		},
		{
			title: 'Marty',
			description: "Projet de bot discord et dashboard utilisant l'API de mon école.",
			link: 'https://www.marty42.xyz/',
			image: 'marty.png'
		},
		{
			title: 'France Limousine',
			description: 'Projet hackaton sur le fait de créer une IA pour de la séléction bovine.',
			link: 'https://github.com/cdurdetrouver/france-limousin-inetum',
			image: 'france-limousine.png'
		},
		{
			title: 'Alimavet',
			description: 'Site vitrine pour vétérinaire.',
			link: 'https://alimavet54.fr/',
			image: 'alimavet.png'
		}
	];
</script>

<div class="space-y-4 md:space-y-10">
	<div class="space-y-4 text-center">
		<h2 class="h2">Projets</h2>
		<ul class="grid grid-cols-2 grid-rows-2 gap-10">
			{#each projects as project}
				<li
					class="card card-hover aspect-video bg-cover bg-center bg-no-repeat"
					style="background-image: url('projects/{project.image}');"
				>
					<a class="group size-full" href={project.link} target="_blank" rel="noopener noreferrer">
						<h2 class="group-hover:hidden shadow size-full flex justify-end items-end">
							{project.title}
						</h2>
						<p
							class="absolute rounded-md group-hover:flex hidden text-background justify-center items-center size-full"
						>
							{project.description}
						</p>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style lang="postcss">
	.shadow {
		background: linear-gradient(transparent 60%, #1c051c6e 80%, #1c051c 100%);
	}

	.text-background {
		background-color: #1c051cd2;
	}
</style>
