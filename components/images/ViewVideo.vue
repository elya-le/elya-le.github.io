<script setup>
import { xUrl } from "@/hooks/plugin.js";
const props = defineProps({ src: String, poster: String });
</script>

<template>
	<div class="p-relative mt-section">
		<div class="dsn-bg-mask h-50 bottom-0 background-theme"></div>
		<div class="dsn-container">
			<video class="w-100" preload autoPlay muted loop :poster="xUrl(props.poster)">
				<source v-if="props.src" :src="xUrl(props.src) ? xUrl(props.src) : null" type="video/mp4" />
			</video>
		</div>
	</div>
</template>
