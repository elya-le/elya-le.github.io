<script setup>
import { ref } from 'vue';
import data_Personal from "@/api/personal/personal.json"
import data_Serve from "@/api/services/service.json";
import data_Portf from "@/api/portfolio/portfolio.json"
import SectionTitlePin from "@/components/title/SectionTitlePin.vue";
import HeaderResume from "@/components/header/HeaderResume.vue"
import ServiceStyle from "@/components/services/ServiceStyle.vue";
import SectionData from "@/components/sections/SectionData.vue"
import PortfolioFilter from "@/components/portfolio/PortfolioFilter.vue"
import DsnFooter from "@/components/footer/DsnFooter.vue";
const personal = 1;

const contactSection = ref(null); // <-- added ref for contact section
const portfolioSection = ref(null); // <-- added ref for portfolio section

const scrollToSection = (sectionRef) => {
  sectionRef.value.scrollIntoView({ behavior: 'smooth' });
};
</script>


<template>
  
  <Head>
    <Title>Elya Lê | Full-Stack Software Engineer</Title>
  </Head>
  
  <Layout bodyStyle="bg-dots">
    
    <!-- ========== Header ========== -->
    <HeaderResume :data="data_Personal[personal]" btnScrollTo="about" />
    <!-- ========== End Header ========== -->
    
    <!-- ========== Portfolio ========== -->
    <div id="project-section">
      <PortfolioFilter class="container" :data="data_Portf.slice(0, 4)" setStyle="cards-1" LinkCircleArrow />
    </div>
    <!-- ========== End Portfolio ========== -->

    <!-- ========== Service ================== -->
    <ServiceStyle class="border-top pt-section" :data="data_Serve.slice(0, 3)" :masonry="false" center titleClass=""
    serviceInnerClass="border-style" iconsize="10px" :haveButton="false" fadeUp>
    </ServiceStyle>
    <!-- ========== End Service ============== -->

    <!-- ========== Portfolio ========== -->
    <PortfolioFilter class="container" :data="data_Portf.slice(4, 8)" setStyle="cards-1" LinkCircleArrow />
    <!-- ========== End Portfolio ========== -->
    

    <!-- ========== Contact ========== -->
    <SectionData id="contact-section">
        <template v-slot:title>
            <SectionTitlePin title="Let's Build Something Together —">
            </SectionTitlePin>
        </template>
        <template v-slot:items>
            <ContactFormSmall />
        </template>
    </SectionData>
    <!-- ========== End Contact ========== -->
    
    <!-- ========== Footer ======================= -->
    <DsnFooter class="container border-top" :animateContent="false" />
    <!-- ========== End Footer =================== -->
    </Layout>
</template>

