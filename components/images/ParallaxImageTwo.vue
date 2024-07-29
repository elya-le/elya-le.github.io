<script setup>
import { xUrl } from "@/hooks/plugin.js";
const imgParallax = '{"trigger": { "start": "-80% top", "end": "100%" },"from": { "y": "-20%", "height": "120%" },"to": { "y": "0%", "height": "120%" }}';
const props = defineProps({ src: String, caption: String, animate: String, fancybox: String, });
</script>

<template>
	<div class="p-relative mb-section">
		<div class="dsn-bg-mask h-50 top-0 background-section"></div>
		<div class="dsn-container over-hidden">
			<div class="img-box-parallax h-v-80" :data-src="xUrl(props.src)" :data-caption="props.caption"
				:data-fancybox="props.fancybox ? props.fancybox : null" data-cursor="open"
				:data-dsn-animate="props.animate ? props.animate : imgParallax">
				<img class="cover-bg-img has-direction" :src="xUrl(props.src)" alt="" />
				<div class="cap">
					<span>{{ props.caption }}</span>
				</div>
			</div>
		</div>
	</div>
</template>
