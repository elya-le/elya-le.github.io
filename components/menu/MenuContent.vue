<template>
	<div class="container-content d-flex flex-column justify-content-center">
		<div class="nav__info">
			<div class="nav-content">
				<h5 class="sm-title-block mb-10">Studio</h5>
				<p>
					26-30 New Damietta <br />
					El-Mahalla El-Kubra, SK1 66LM
				</p>
			</div>
			<div class="nav-content mt-30">
				<h5 class="sm-title-block mb-10">Contact</h5>
				<p class="links over-hidden mb-1">
					<a class="link-hover" href="tel:+00 (2)012 3321" data-hover-text="+00 (2)012 3321">
						+00 (2)012 3321
					</a>
				</p>
				<p class="links over-hidden">
					<a class="link-hover" href="mailto:info@dsngrid.com"
						data-hover-text="info@dsngrid.com">info@dsngrid.com</a>
				</p>
			</div>
		</div>
		<div class="nav-social nav-content mt-30">
			<div class="nav-social-inner p-relative">
				<h5 class="sm-title-block mb-10">Follow us</h5>
				<ul>
					<li v-for="(item, index) in socialData" :key="index">
						<a :href="item.link" target="_blank" rel="nofollow noopener noreferrer">{{ item.name }}</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup>
const socialData = [
	{ link: "#0", name: "Dribbble." },
	{ link: "#0", name: "Behance." },
	{ link: "#0", name: "Linkedin." },
	{ link: "#0", name: "Twitter." },
];
</script>
