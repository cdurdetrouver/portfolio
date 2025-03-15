<script lang="ts">
	import { getToastStore } from '@skeletonlabs/skeleton';
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
		<div class="flex items-center justify-center space-x-2">
			<span class="text-2xl">📞</span>
			<p class="text-lg font-semibold">Numéro de contact:</p>
			<a class="text-lg" href="tel:+33784633275">+33 7 84 63 32 75</a>
		</div>
		<div class="flex items-center justify-center space-x-2">
			<span class="text-2xl">📧</span>
			<p class="text-lg font-semibold">Adresse e-mail:</p>
			<a class="text-lg" href="mailto:gabriel.bazart@gmail.com">gabriel.bazart@gmail.com</a>
		</div>
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
				value={form?.message ?? ''}
			></textarea>
		</div>
		<div class="flex items-center justify-between">
			<button class="btn variant-filled" type="submit"> Envoyer </button>
		</div>
	</form>
</div>
