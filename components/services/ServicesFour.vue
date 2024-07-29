<script setup>
import { xUrl } from "@/hooks/plugin.js"
import { Animate } from "@/hooks/pluginanimations.js"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const props = defineProps({ data: Array });
const services = ref(null)
const serviceHover = (event) => {
    const item = services.value.querySelectorAll(".service-item")
    item.forEach(element => {
        element.classList.remove("active")
        const ul = element.querySelector(".service_description")
        const ulHeight = ul.getBoundingClientRect().height
        new Animate({ duration: 1, scrub: false }, { height: ulHeight, overflow: "hidden" }, { height: 0, overflow: "hidden" }, event.target, ul);
    });
    event.target.classList.add("active")
    const ul = event.target.querySelector(".service_description")
    ul.style = "display:block"
    const ulHeight = ul.getBoundingClientRect().height
    new Animate({ duration: 1, scrub: false }, { height: 0, overflow: "hidden" }, { height: ulHeight, overflow: "hidden" }, event.target, ul);
}

onMounted(() => {
    const item = services.value.querySelectorAll(".service-item")
    item.forEach(element => {
        const dataImage = element.getAttribute("data-image")
        element.insertAdjacentHTML('afterend', `<div class="item-bg cover-bg"  data-overlay="4" style="background-image:url(${xUrl(dataImage)})"></div>`);
    });
})
</script>

<template>
    <div ref="services" class="dsn-container p-relative mb-section">
        <div class="service-with-img text-center icon-top dsn-icon-theme-color v-dark-head-mobile">
            <div class="dsn-service d-grid grid-md-3 grid-sm-2 hv-100" data-dsn-iconsize="80px">
                <div class="service-item p-relative  grid-item"
                    :class="index === 0 ? 'active' : null, index === 0 || index === 1 ? 'border-right' : null"
                    v-for="(service, index) in props.data" :key="index" @mouseenter="serviceHover($event)"
                    :data-image="service.imgSrc">
                    <div class="service-item-inner number-item h-100">
                        <div class="dsn-icon">
                            <img :src="service.svgLight" />
                        </div>
                        <div class="service-content p-relative">
                            <h4 class="service_title  title-block ">{{ service.title }}</h4>
                            <div class="service_description mt-20 max-w570 dsn-auto">
                                <ul>
                                    <li v-for="(description, index) in service.description" :key="index">
                                        {{ description }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dsn-bg-mask h-50 top-0 background-section"></div>
        </div>
    </div>
</template>
