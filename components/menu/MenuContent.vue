<template>
	<div class="container-content d-flex flex-column justify-content-center">
		<div class="nav__info">
			<div class="nav-content">
				<h5 class="sm-title-block mb-10"></h5>
			</div>
			<div class="nav-content mt-30">
				<h5 class="sm-title-block mb-10">Contact</h5>
				<p class="links over-hidden">
					<a class="link-hover" href="mailto:info@dsngrid.com"
						data-hover-text="info@dsngrid.com">hello@elya.dev</a>
				</p>
			</div>
		</div>
		<div class="nav-social nav-content mt-30">
			<div class="nav-social-inner p-relative">
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
	{ link: "#0", name: "Github." },
	{ link: "#0", name: "Linkedin." },
];
</script>
