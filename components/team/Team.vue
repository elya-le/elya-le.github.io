<script setup>
import { xUrl } from "@/hooks/plugin.js";
const props = defineProps({ data: Array, grid: String });
</script>

<template>
    <div class="dsn-container over-hidden background-section section-padding">
        <slot name="title" />
        <div class="d-grid dsn-team" :class="props.grid">
            <div class="team-item p-relative grid-item box-hover-image" v-for="(member, index) in props.data"
                :key="index">
                <div class="team-item-inner background-main">
                    <div class="avatar box-img" data-overlay="4">
                        <img class="cover-bg-img" :src="xUrl(member.imageSrc)" alt="" />
                    </div>
                    <div class="team-content border-before text-center">
                        <h4 class="text-name sm-title-block">{{ member.name }}</h4>
                        <span class="text-position">{{ member.job }}</span>
                        <SocialGroup class="team-socials" :data="member.social" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

