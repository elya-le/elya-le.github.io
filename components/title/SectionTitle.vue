<script setup>
const props = defineProps({ subTitle: String, title: String, center: Boolean, spaceDown: { type: Boolean, default: true }, beforeStyle: String, titleClass: String });
</script>

<template>
    <div class="section-title d-flex"
        :class="props.center ? 'justify-content-center' : null, props.spaceDown ? 'mb-70' : null">
        <div class="sub-section-title " :class="center ? 'text-center' : null">
            <p v-if="subTitle" class="description d-inline-block mb-10" :class="props.beforeStyle">{{ props.subTitle }}
            </p>
            <span class="title-h2 dsn-heading-title p-relative title-block-lg d-block heading-color"
                :class="props.titleClass" v-html="props.title" />
            <slot />
        </div>
    </div>
</template>
