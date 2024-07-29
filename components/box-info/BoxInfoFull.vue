<script setup>
import { xUrl } from "@/hooks/plugin.js";
const props = defineProps({ imageSrc: String });
</script>

<template>
	<div class="right-box-image section-margin dsn-container dsn-left-container over-hidden">
		<div class="box-img">
			<div class="img-box-parallax h-v-80 w-100 before-z-index dsn-animate dsn-effect-left"
				data-dsn-grid="move-up" data-overlay="1" data-dsn-animate='{
                    "trigger":{"start":"-80% top","end":"100%"},
                    "from":{"y": "-20%","height": "120%"},
                    "to":{ "y": "0%", "height": "120%" }
                }'>
				<img :src="xUrl(props.imageSrc)" class="cover-bg-img has-direction" data-dsn-position="50% 0%" alt="" />
			</div>
		</div>
		<div class="box-info background-section box-padding section-margin" data-dsn-gap="30px 30px">
			<slot name="title" />
			<slot name="string" />
			<slot />
		</div>
	</div>
</template>


