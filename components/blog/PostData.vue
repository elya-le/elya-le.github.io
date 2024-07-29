<script setup>
import { xUrl } from "@/hooks/plugin.js";
const props = defineProps({ data: Object });
</script>

<template>
	<div class="root-blog">
		<div class="container">
			<div class="dsn-posts">
				<div class="news-content mt-section">
					<div class="news-content-inner">
						<div class="post-content">
							<p v-if="props.data.strings[0]" v-html="props.data.strings[0]" />
							<blockquote class="wp-block-quote" v-for="(blockquote, index) in props.data.blockquote"
								:key="index">
								<p>
									<strong><em>{{ blockquote }}</em></strong>
								</p>
							</blockquote>

							<p v-if="props.data.strings[1]" v-html="props.data.strings[1]" />

							<img class="w-100" :src="xUrl(props.data.images[1].src)" alt="post-image" />

							<p v-if="props.data.strings[2]" v-html="props.data.strings[2]" />

							<div class="post-tags p-relative">
								<NuxtLink :to="$route.path" class="fz-16" v-for="(tag, index) in props.data.tags"
									:key="index">
									<span class="post_tag post_tag">{{ tag }}</span>
								</NuxtLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
