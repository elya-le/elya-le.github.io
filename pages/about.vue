<script setup>
import Layout from "@/components/layout/Layout.vue";
import DsnFooter from "@/components/footer/DsnFooter.vue";
// import data_Teste from "@/api/testimonials/testimonials.json";
const pageStyle = { titleBeforeStyle: "circle-before", };
</script>

<template>
    <Head>
        <Title>About</Title>
    </Head>
    <Layout>
        <!-- ========== testimonials ============= -->
        <!-- <Testimonials :data="data_Teste" :stringLine="1" className="section-margin" slideClass="border-style" Pagination
            spaceBetween="30" :desktop="{ slidesPerView: 2 }" :tablet="{ slidesPerView: 2 }"
            :mobile="{ slidesPerView: 1 }" grabCursor :centeredSlides="false" loop :speed="1200">
            <template v-slot:title>
                <SectionTitle subTitle="testimonials" title="What People are Saying" center
                    :beforeStyle="pageStyle.titleBeforeStyle" />
            </template>
        </Testimonials> -->
        <!-- ========== End testimonials ========= -->

        <!-- ========== Footer =================== -->
        <DsnFooter light animate />
        <!-- ========== End Footer =============== -->
    </Layout>
</template>


