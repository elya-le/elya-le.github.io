<script setup>
import { xUrl } from "@/hooks/plugin.js";
import brandsImages from "@/api/brands/brand-one.json";
const props = defineProps({ data: { type: Array, default: brandsImages }, boxStyle: String, });
</script>

<template>
	<div class="p-relative">
		<slot name="title" />
		<div
			:class="props.boxStyle === '1' ? 'container d-grid grid-half-1 align-items-center' : 'grid-md-4 grid-sm-2 d-grid-no-space dsn-brand border-style'">
			<div class="experience" v-if="$slots.number">
				<span class="exp-number dsn-animate-number">
					<span class="animate-number data-counter">
						<slot name="number" />
					</span>
				</span>
				<h5 class="title-block mt-30">
					<slot name="description" />
				</h5>
			</div>
			<div class="d-grid grid-sm-4 d-grid-no-space dsn-brand">
				<div class="brand-item"
					:class="index === 0 || index === 1 || index === 2 ? 'border-bottom border-right' : null, index === 3 ? 'border-bottom' : null, index > 3 && index != data.length - 1 ? 'border-right' : null"
					v-for="(item, index) in props.data" :key="index">
					<div class="brand-item-inner over-hidden p-relative">
						<img :src="xUrl(item.imageSrc)" alt="brand" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
