<script setup>
const socialData = [
    { link: "", iconType: 'fab', icon: 'facebook-f', name: "Fb" },
    { link: "", iconType: 'fab', icon: 'instagram', name: "In" },
    { link: "", iconType: 'fab', icon: 'twitter', name: "Tw" },
    { link: "", iconType: 'fab', icon: 'linkedin-in', name: "Linkedin" },
];
</script>

<template>
    <div class="social-side d-flex align-items-center flex-column justify-content-center">
        <ul class="socials d-flex flex-column-reverse">
            <li style="--dsn-index-animate" v-for="(item, index) in socialData" :key="index">
                <NuxtLink :href="item.link ? item.link : $route.path" target="_blank">
                    <font-awesome-icon :icon="[item.iconType, item.icon]" />
                    <span>{{ item.name }}</span>
                </NuxtLink>
            </li>
        </ul>
        <div class="icon">FOLLOW </div>
    </div>
</template>

