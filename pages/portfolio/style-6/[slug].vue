<script setup>
import { xUrl, nextProject } from "@/hooks/plugin.js";
import { Fancybox } from "@fancyapps/ui";
import data_Portf from "@/api/portfolio/portfolio.json";
import InfoProject from "@/components/portfolio/info-project/InfoProject.vue";
import InfoProjectItem from "@/components/portfolio/info-project/InfoProjectItem.vue";
import ImagePopup from "@/components/images/ImagePopup.vue";
import DsnFooter from "@/components/footer/DsnFooter.vue";
// import NextProject from "@/components/next/NextProject.vue";
import Layout from '@/components/layout/Layout.vue'; // <-- this has been updated to import the layout

// extract the slug from the route parameters
const { slug } = useRoute().params;

// find the item matching the slug
const item = await data_Portf.find(item => item.slug === slug);

// check if item is found
if (!item) {
    throw createError({
        fatal: true,
        statusCode: 404,
        statusMessage: "Work Not Found",
        data: { msg: useRoute().path, redirectLink: "/work/work-list-1", linkName: "Portfolio" }
    });
} else {
    console.log('Item found:', item); // log the item for debugging
}

// ensure Fancybox is set up correctly
onMounted(() => {
    Fancybox.defaults.Hash = false;
    Fancybox.bind("[data-fancybox]", {
        Thumbs: { Thumbs: true, showOnStart: true, type: "modern" },
        Toolbar: {
            display: {
                left: ["infobar"],
                middle: ["zoomIn", "zoomOut", "toggle1to1", "rotateCCW", "rotateCW", "flipX", "flipY"],
                right: ["slideshow", "thumbs", "close"],
            },
        },
        Carousel: { infinite: true },
    });
});
onUpdated(() => Fancybox.close());
onBeforeUnmount(() => Fancybox.destroy());
</script>

<template>
    <Layout :linkCircleUrl="item.autherLink"> <!-- this has been updated to pass linkCircleUrl prop to Layout -->
        <Head>
            <Title>Projects</Title>
        </Head>

        <!-- ========== Info Project  ========== -->
        <InfoProject id="info">
            <template v-slot:about>
                <h2 class="title-h2 dsn-up" data-fade-up>
                    {{ item.about[0].title }}
                </h2>
                <p class="max-w750 mt-30 dsn-up paragraph-with-margin" data-fade-up>
                    {{ item.about[0].text[0] }}
                </p>
            </template>
            <InfoProjectItem v-for="(info, index) in item.infoProject" :key="index" :title="info.title"
                :description="info.description" />
        </InfoProject>
        <!-- ========== End Info Project  ========== -->

        <!-- ========== Image Popup  ========== -->
        <ImagePopup v-if="item.images && item.images.length > 3" class="dsn-container" :imageList="[item.images[0], item.images[1], item.images[2], item.images[3]]" /> <!-- this has been updated to pass all four images to a single ImagePopup -->
        <!-- ========== End Image Popup  ========== -->

        <!-- ========== Next Project  ========== -->
        <!-- <NextProject light :next="nextProject(item.id, data_Portf)" /> -->
        <!-- ========== End Next Project  ========== -->

        <!-- ========== Footer ======================= -->
        <DsnFooter class="container border-top" :animateContent="false" />
        <!-- ========== End Footer =================== -->
    </Layout>
</template>

