<script setup>
const props = defineProps({data: Array})
</script>

<template>
    <ul class="dsn-socials box-social">
        <li v-for="(social, index) in data" :key="index">
            <NuxtLink class="init-color move-circle border-color-default" :to="!social.link ? $route.path : social.link"
                target="_blank" data-dsn="parallax">
                <span class="dsn-icon">
                    <font-awesome-icon :icon="[`${social.type}`, `${social.iconName}`]" />
                </span>
                <span>{{ social.name }}</span>
            </NuxtLink>
        </li>
    </ul>
</template>

