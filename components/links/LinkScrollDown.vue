<script setup>
import { elScrollDown } from "@/hooks/plugin.js"
const props = defineProps({ goToEl: String });
</script>

<template>
	<div ref="btnScroll" @click="elScrollDown(goToEl)" class="dsn-scroll-bottom"
		data-dsn-option='{"ease": "power4.inOut" , "duration" : 1.5}'>
		<div class="text">></div>
	</div>
</template>


