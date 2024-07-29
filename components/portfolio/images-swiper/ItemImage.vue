<script setup>
import { xUrl } from "@/hooks/plugin.js"
const props = defineProps({ className: String, tag: { type: String, default: 'div' }, data: Array, });
</script>

<template>
    <props.tag v-for="(item, index) in props.data.toReversed()" :key="index" class="over-hidden  background-transparent"
        :class="className">
        <div class="item-img">
            <div class="img-box-parallax before-z-index">
                <img :src="xUrl(item.src)" class="cover-bg-img" alt='' />
            </div>
        </div>
    </props.tag>
</template>
