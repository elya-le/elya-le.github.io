<script setup>
import { xUrl } from "@/hooks/plugin.js";
const props = defineProps({ imageOneSrc: String, imageTwoSrc: String, bgMask: String, smTitleBlock: Boolean });
</script>

<template>
	<section class="about-section about-one p-relative">
		<div class="p-relative container">
			<div class="bg-mask w-70 h-55 v-middle" :class="props.bgMask"></div>
			<div class="d-grid grid-md-2">
				<div class="box-info">
					<h2 class="title">
						<span class="letter-stroke d-block" v-if="$slots.moveTitle" data-move-this="true"
							data-dsn-animate='{"trigger":{},"from":{"paddingLeft":"-20%"},"to":{"paddingLeft":"20%"}}'>
							<slot name="moveTitle" />
						</span>
						<span v-if="$slots.centerTitle">
							<slot name="centerTitle" />
						</span>
						<span class="text-right w-100" v-if="$slots.lastTitle">
							<slot name="lastTitle" />
						</span>
					</h2>
					<div class="d-grid grid-half-1 align-items-center mt-10">
						<slot name="button" />
						<div class="p-large text-right" v-if="$slots.description">
							<p class="max-w350" :class="props.smTitleBlock ? 'sm-title-block' : null">
								<slot name="description" />
							</p>
						</div>
					</div>
				</div>
				<div class="box-img" v-if="props.imageOneSrc">
					<img decoding="async" class="cover-bg-img" :src="xUrl(props.imageOneSrc)" alt="about" />
				</div>
			</div>
			<div class="p-relative box-img-bottom hv-50" v-if="props.imageTwoSrc">
				<img class="cover-bg-img" decoding="async" :src="xUrl(props.imageTwoSrc)" alt="about" />
			</div>
		</div>
	</section>
</template>
