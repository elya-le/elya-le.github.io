<script setup>
import { xUrl } from '~/hooks/plugin.js';
const props = defineProps({ imageSrc: String, });
</script>

<template>
    <div class="container  section-margin">
        <div class="d-grid grid-lg-2 d-grid-no-space">
            <div class="left-box-image mb-section">
                <div class="box-img w-100" data-dsn-animate='{
                        "trigger":{"scrub":"0","start":"-80%","end":"100%"},
                        "from":{},
                        "to":{"y":"120"},
                        "responsive":["desktop"]}'>
                    <div class="img-box-parallax h-v-80 before-z-index w-100" data-overlay="1">
                        <img class="cover-bg-img" :src="xUrl(imageSrc)" alt="" />
                    </div>
                </div>
            </div>
            <div class="box-info background-section p-80 mt-section">
                <slot name="title" />
                <p class="mt-20">
                    <slot name="string" />
                </p>
                <slot />
            </div>
        </div>
    </div>
</template>

