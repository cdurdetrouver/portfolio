<script lang="ts">
	import Icon from '@iconify/svelte';
	import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	export let form;

	const toastStore = getToastStore();

	if (form?.successMessage) {
		const t: ToastSettings = {
			message: form?.successMessage,
			timeout: 5000,
			background: 'variant-filled-success'
		};
		toastStore.trigger(t);
	}

	if (form?.errorMessage) {
		const t: ToastSettings = {
			message: form?.errorMessage,
			timeout: 5000,
			background: 'variant-filled-error'
		};
		toastStore.trigger(t);
	}
</script>

<div class="container h-full w-full mx-auto flex flex-col justify-center items-center gap-10 p-4">
	<h1 class="h1 uppercase">Contactez-moi</h1>

	<div class="text-center space-y-4">
		<a
			class="text-lg flex flex-col md:flex-row items-center justify-center space-x-2"
			href="https://discord.com/users/734497463171416154"
			target="_blank"
		>
			<Icon icon="skill-icons:discord" />
			<p class="font-semibold">Discord:</p>
			<p>cdurdetrouver</p>
		</a>

		<a
			class="text-lg flex flex-col md:flex-row items-center justify-center space-x-2"
			href="https://www.linkedin.com/in/gabriel-bazart-87b3ab265/"
			target="_blank"
		>
			<Icon icon="skill-icons:linkedin" />
			<p class="font-semibold">Linkedin:</p>
			<p>gabriel bazart</p>
		</a>
		<a
			class="text-lg flex flex-col md:flex-row items-center justify-center space-x-2"
			href="mailto:gabriel.bazart@gmail.com"
		>
			<span class="text-2xl">📧</span>
			<p class="font-semibold">Adresse e-mail:</p>
			<p>gabriel.bazart@gmail.com</p>
		</a>
	</div>

	<form class="w-full max-w-lg" method="POST">
		<div class="mb-4">
			<label class="h4 mb-2" for="name"> Nom </label>
			<input
				class="input rounded py-2 px-3"
				id="name"
				name="name"
				type="text"
				placeholder="Votre nom"
				value={form?.name ?? ''}
			/>
		</div>
		<div class="mb-4">
			<label class="h4 mb-2" for="email"> E-mail </label>
			<input
				class="input rounded py-2 px-3"
				id="email"
				name="email"
				type="email"
				placeholder="Votre adresse e-mail"
				value={form?.email ?? ''}
			/>
		</div>
		<div class="mb-6">
			<label class="h4 mb-2" for="message"> Message </label>
			<textarea
				class="input rounded py-2 px-3"
				id="message"
				name="message"
				placeholder="Votre message"
				rows="5"
				value={form?.message?.toString() ?? ''}
			></textarea>
		</div>
		<div class="flex items-center justify-between">
			<button class="btn variant-filled" type="submit"> Envoyer </button>
		</div>
	</form>
</div>
