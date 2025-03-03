<script lang="ts">
	type Link = {
		title: string;
		link?: string;
		image?: string;
		text?: string;
	};

	const links: Link[] = [
		{ title: "github", link : "https://github.com/cdurdetrouver" },
		{ title: "instagram" },
		{ title: "discord" }
	];
</script>

<div class="flex justify-center items-center w-full h-full">
	<ul class="flex flex-col justify-center items-center gap-[5vh]">
		{#each links as link}
			<li class="">
				<a href={link.link}>{link.title}</a>
				{#if link.image}
					<img src={link.image} alt={link.title}/>
				{/if}
			</li>
		{/each}
	</ul>
</div>
