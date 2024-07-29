<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { register } from 'swiper/element/bundle';
gsap.registerPlugin(ScrollTrigger);
register();
</Script>