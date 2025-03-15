<script>
	import emailjs from 'emailjs-com';
	let name = '';
	let email = '';
	let message = '';

	function handleSubmit() {
		const templateParams = {
		from_name: name,
		from_email: email,
		message: message,
		};

		emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
		.then((response) => {
			console.log('SUCCESS!', response.status, response.text);
			alert('Message sent successfully!');
		}, (error) => {
			console.log('FAILED...', error);
			alert('Failed to send message. Please try again later.');
		});
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
	
	<form class="w-full max-w-lg" on:submit|preventDefault={handleSubmit}>
		<div class="mb-4">
			<label class="h4 mb-2" for="name">
				Nom
			</label>
			<input
				class="input rounded py-2 px-3"
				id="name"
				type="text"
				bind:value={name}
				placeholder="Votre nom"
			/>
		</div>
		<div class="mb-4">
			<label class="h4 mb-2" for="email">
			E-mail
			</label>
			<input
				class="input rounded py-2 px-3"
				id="email"
				type="email"
				bind:value={email}
				placeholder="Votre adresse e-mail"
			/>
		</div>
		<div class="mb-6">
			<label class="h4 mb-2" for="message">
			Message
			</label>
			<textarea
				class="input rounded py-2 px-3"
				id="message"
				bind:value={message}
				placeholder="Votre message"
				rows="5"
			></textarea>
		</div>
		<div class="flex items-center justify-between">
			<button
			class="btn variant-filled"
			type="submit"
			>
			Envoyer
			</button>
		</div>
	</form>
</div>
