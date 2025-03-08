<script lang="ts">
	import type { Project } from "$lib/types/project";

	let projects: Project[] = [
		{
			title: "Portfolio",
			description: "Mon protfolio personnel, réalisé avec SvelteKit et TailwindCSS.",
			link : "https://www.cdurdetrouver.fr",
			image : "portfolio.png",
		},
		{
			title: "France Limousine",
			description: "Projet hackaton sur le fait de créer une IA pour de la séléction bovine.",
			link : "https://github.com/cdurdetrouver/france-limousin-inetum",
			image : "france-limousine.png",
		},
		{
			title: "France Limousine",
			description: "Projet hackaton sur le fait de créer une IA pour de la séléction bovine.",
			link : "https://github.com/cdurdetrouver/france-limousin-inetum",
			image : "france-limousine.png",
		},
		{
			title: "France Limousine",
			description: "Projet hackaton sur le fait de créer une IA pour de la séléction bovine.",
			link : "https://github.com/cdurdetrouver/france-limousin-inetum",
			image : "france-limousine.png",
		}
	]
</script>

<div class="space-y-4 md:space-y-10">
	<div class="space-y-4 text-center">
		<h2 class="h2">Projects</h2>
	<ul class="grid grid-cols-2 grid-rows-2 gap-10">
		{#each projects as project}
			<li class="card card-hover aspect-video bg-cover bg-center bg-no-repeat" style="background-image: url('projects/{project.image}');">
				<a class="flex justify-end size-full" href={project.link} target="_blank" rel="noopener noreferrer">
					<h2 class="flex justify-start items-end">{project.title}</h2>
				</a>
			</li>
		{/each}
	</ul>
	</div>
</div>
