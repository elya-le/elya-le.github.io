<script setup>
const props = defineProps({ data: Array });
</script>

<template>
	<div class="root-blog container section-margin dsn-blog">
		<article class="blog-item p-relative pt-50 pb-50 border-bottom" v-for="(item, index) in props.data"
			:key="index">
			<div class="blog-item-inner p-relative">
				<div class="left-box">
					<NuxtLink :to="`/blog/${item.slug}`" class="effect-ajax word-wrap" rel="bookmark">
						<h4 class="title-block">{{ item.title }}</h4>
					</NuxtLink>

					<div class="link mt-15">
						<span class="font-caps heading-color">{{ item.date }}</span>
					</div>
				</div>
				<div class="right-box">
					<p class="max-w570">{{ item.description }}</p>
					<MetaPost class="mt-5" className="mb-10" v-if="item.categories" :category="item.categories"
						separate=" &" />
				</div>
			</div>
		</article>
	</div>
</template>
