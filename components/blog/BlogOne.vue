<script setup>
import { xUrl } from "@/hooks/plugin.js";
import LinkAngle from "@/components/links/LinkAngle.vue";
const props = defineProps({ data: Array, boxStyle: String, containBoxesStyle: String, allowDescription: Boolean, classItemPost: String, });
</script>

<template>
	<div class="p-relative">
		<div class="container">
			<slot name="title" />
			<div class="p-relative box-image-transform" :class="`dsn-style-${props.boxStyle}`">
				<div class="root-posts">
					<div class="dsn-posts h-350 d-grid"
						:class="`dsn-post-type-${props.boxStyle}`, props.containBoxesStyle">
						<article v-for="(item, index) in props.data" :key="index"
							class="dsn-item-post grid-item over-hidden border-style" :class="props.classItemPost">
							<div class="box-content d-flex">
								<NuxtLink class="effect-ajax box-image-link bg-shadow" :to="`/blog/${item.slug}`"
									data-dsn-text="Our Stories">
									<div class="box-image-bg before-z-index dsn-swiper-parallax-transform"
										data-overlay="4">
										<img :src="xUrl(item.images[0].src)" class="cover-bg-img" alt="" />
									</div>
								</NuxtLink>
								<div class="post-content dsn-bg p-relative z-index-1 d-flex flex-column">
									<div class="post-title-info">
										<div class="post-meta max-w750">
											<div class="entry-date d-inline-block entry-meta mb-10">
												{{ item.date }}
											</div>
											<span class="mr-5 ml-5 separator-between">
												..</span>
											<MetaPost className="mb-10" v-if="item.categories"
												:category="item.categories" separate=" &" />
										</div>
										<h2 class="post-title dsn-bg title-block">
											<NuxtLink class="effect-ajax" :to="`/blog/${item.slug}`" data-dsn-text="Our Stories">
												{{ item.title }}
											</NuxtLink>
										</h2>
									</div>
									<div class="post-description-info" v-if="props.allowDescription">
										<p class="section_description mt-15 max-w570">
											{{ item.description }}
										</p>
									</div>
									<div class="post-description-info">
										<LinkAngle v-if="item.link" linkName="READ ARTICLE" :linkTo="`/blog/${item.slug}`" />
									</div>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
