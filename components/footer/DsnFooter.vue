<script setup>
import { Animate } from "@/hooks/pluginanimations.js";
import SiteLogo from "@/components/logo/SiteLogo.vue";
import SvgSeparator from "@/components/svg/SvgSeparator.vue";
const props = defineProps({ light: Boolean, animate: Boolean, animateContent: { type: Boolean, default: true }, containerContent: Boolean, });
const footer = ref(null);
const footerContent = ref(null);
const socialData = [
    {
        name: "GH",
        link: "",
        type: "fab",
        iconName: "github",
    },
    {
        name: "In",
        link: "",
        type: "fab",
        iconName: "linkedin-in",
    },
];
const footerLinks = [
    { link: "/", name: "HOME" },
    { link: "/#project-section", name: "PROJECTS" },
    { link: "/about", name: "ABOUT" },
    { link: "/#contact-section", name: "CONTACT" },
];

onMounted(() => {
    if (!props.animateContent) return;
    new Animate({ start: "top bottom", end: "top " }, { yPercent: -70 }, { yPercent: 0 }, footer.value, footerContent.value);
});
</script>

<template>
    <footer ref="footer" id="dsn_footer" class="dsn-footer p-relative svg-animate" :class="[
        props.light ? 'background-section' : 'background-main',
        props.animate ? 'footer-animate' : '',
    ]">
        <SvgSeparator :light="props.light" />
        <div ref="footerContent" class="footer-content p-relative mt-section"
            :class="props.containerContent ? 'container' : null">
            <div class="dsn-container pt-60">
                <div class="d-grid grid-lg-4 grid-md-2">
                    <div class="grid-col-1">
                        <div class="dsn-logo main-logo">
                            <SiteLogo height="undefined" width="undefined" />
                        </div>
                        <SocialGroup class="mt-20 dsn-icon-heading-color" :data="socialData" />
                    </div>
                    <div class="grid-col-2">
                      <h4 class="subtitle p-relative line-shape line-shape-after">
                        <span class="background-revere">CONTACT</span>
                      </h4>
                      <div class="col-contact">
                        <!-- <p><strong>T</strong> :&nbsp;+001 225 3351</p> -->
                        <p class="over-hidden mt-10">
                          <!-- <strong>E</strong> : -->
                          <a class="link-hover" href="mailto:hello@elya.dev">&nbsp;hello@elya.dev</a>
                        </p>
                      </div>
                    </div>
                    <div class="grid-col-3">
                      <h4 class="subtitle p-relative line-shape line-shape-after">
                        <span class="background-revere">LOCATION</span>
                      </h4>
                      <div class="col-address">
                        <p>
                          New Orleans, LA<br />
                        </p>
                      </div>
                    </div>
                    <div class="grid-col-4">
                        <h4 class="subtitle p-relative line-shape line-shape-after">
                            <span class="background-revere">NAVIGATION</span>
                        </h4>
                        <div class="menu-footer-menu-container">
                            <ul id="menu-footer-menu" class="menu">
                                <li class="menu-item" v-for="(item, index) in footerLinks" :key="index">
                                    <NuxtLink :to="item.link ? item.link : $route.path" class="effect-ajax">{{
                                        item.name }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom mt-60 pt-30 border-top pb-30 text-center">
                    <p class="over-hidden">
                        © 2024 Elya.dev
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>
