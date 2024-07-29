<script setup>
import { xUrl } from "@/hooks/plugin.js";
const props = defineProps({ data: Array });
</script>

<template>
    <div class="p-relative container section-margin">
        <slot name="title" />
        <div class="d-grid grid-md-4 grid-sm-2 dsn-brand">
            <div class="brand-item border-style" v-for="(client, index) in props.data" :key="index">
                <div class="brand-item-inner over-hidden p-relative">
                    <img :src="xUrl(client.imageSrc)" />
                </div>
            </div>
        </div>
    </div>
</template>


