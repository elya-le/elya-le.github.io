<script setup>
import { xUrl } from "@/hooks/plugin.js"
import { store } from "@/store/store";
const props = defineProps({ click: Function, name: String });
</script>

<template>
	<div class="main-logo main-brand" @click="props.click()">
		<NuxtLink to="/" v-if="store.colorPage == 'v-dark'">
			<img class="logo-light" :src="xUrl('assets/img/logo-light.png')" alt="logo" />
		</NuxtLink>
		<NuxtLink to="/" v-if="store.colorPage == 'v-light'">
			<img class="logo-light" :src="xUrl('assets/img/logo.png')" alt="logo" />
		</NuxtLink>
		{{ props.name }}
	</div>
</template>
