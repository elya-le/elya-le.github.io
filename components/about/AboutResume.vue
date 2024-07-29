<script setup>
import { xUrl } from "@/hooks/plugin.js";
const props = defineProps({ data: Object });
</script>

<template>
	<div class="about-section about-resume container section-margin text-center">
		<slot name="title" />
		<div class="d-grid grid-md-2 d-grid-no-space box-img">
			<div class="img-left" data-dsn-animate='{"to":{"rotation":"-15","y":"60"}}'>
				<img :src="xUrl(props.data.images[1].src)" alt="" />
			</div>
			<div class="img-right" data-dsn-animate='{"to":{"rotation":"9","y":0}}'>
				<img :src="xUrl(props.data.images[2].src)" alt="" />
			</div>
		</div>
	</div>
</template>
