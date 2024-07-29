<script setup>
const props = defineProps({ to: String, blank: Boolean, });
</script>

<template>
	<div data-dsn-animate='{"trigger":{"ease": "power4.inOut"},"from":{"x":"-70%"},"to":{"x":"0%"}}'>
		<NuxtLink class="background-main move-circle link-project p-absolute" data-dsn="parallax" :to="props.to"
			:target="props.blank ? '_blank' : null" rel="nofollow">
			VISIT SITE
			<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M213.333333 750.506667L665.173333 298.666667H384V213.333333h426.666667v426.666667h-85.333334V358.826667L273.493333 810.666667 213.333333 750.506667z" />
			</svg>
		</NuxtLink>
	</div>
</template>


