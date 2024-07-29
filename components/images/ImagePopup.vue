<script setup>
import { xUrl } from "@/hooks/plugin.js";
const props = defineProps({imageList: Array,caption: String,fancybox: String,mask: Boolean,});
</script>

<template>
	<div class="p-relative mb-section">
		<div v-if="props.mask" class="dsn-bg-mask d-sm-none h-50 top-0 background-theme"></div>
		<div class="d-grid grid-sm-2 align-items-center" data-dsn-gap="80px 60px">
			<div class="p-relative img-box-parallax before-z-index has-popup" v-for="(item, index) in props.imageList"
				:key="index">
				<div class="effect-popup before-z-index h-100" :data-src="xUrl(item.src)" data-caption="Caption #2"
					data-fancybox="_1" data-cursor="open" data-dsn-overlay="0">
					<img :src="xUrl(item.src)" alt="" />
				</div>
				<div class="cap">
					<span>{{ item.name }}</span>
				</div>
			</div>
		</div>
	</div>
</template>


