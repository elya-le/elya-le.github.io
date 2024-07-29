<script setup>
import Isotope from "isotope-layout/js/isotope";
import LinkAngle from "@/components/links/LinkAngle.vue"
const props = defineProps({
    data: Array,
    masonry: Boolean,
    center: Boolean,
    counter: Boolean,
    titleClass: String,
    haveButton: Boolean,
    serviceItemClass: String,
    serviceInnerClass: String,
    iconsize: String,
    fadeUp: { type: Boolean, default: false },
});
const isoServices = ref(null);
const isotope = ref(null);
onMounted(() => {
    if (props.masonry)
        setTimeout(() => { isotope.value = new Isotope(isoServices.value?.querySelector('.dsn-service'), { itemSelector: '.grid-item' }); }, 500)

});
onUnmounted(() => isotope.value?.destroy())
</script>

<template>
    <div ref="isoServices" class="container section-margin">
        <slot name="title" />
        <div class=" icon-top dsn-icon-theme-color"
            :class="props.center ? 'text-center' : null, props.counter ? 'list-with-number' : null">
            <div class="dsn-service d-grid grid-lg-3 grid-sm-2"
                :class="props.masonry ? 'dsn-masonry-grid dsn-masonry-grid-2 dsn-isotope' : null"
                :data-dsn-iconsize="props.iconsize">
                <div class="dsn-up service-item p-relative grid-item style-box" v-for="(item, index) in props.data"
                    :key="index" :class="props.serviceItemClass">
                    <div class="service-item-inner number-item h-100"
                        :class="props.serviceInnerClass ? props.serviceInnerClass : null" :data-fade-up="props.fadeUp">
                        <div class="dsn-icon">
                            <img :src="item.svgLight" />
                        </div>
                        <div class="service-content p-relative">
                            <h4 class="service_title title-block" :class="props.titleClass">{{ item.title }}</h4>
                            <div class="service_description mt-20 max-w570 dsn-auto">
                                <p>{{ item.string }}</p>
                            </div>
                            <LinkAngle v-if="item.link && props.haveButton" classColor="section" linkName="LEARN MORE"
                                :linkTo="item.link" iconPosition="right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
