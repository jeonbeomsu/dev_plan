<template>
    <div>
        <div class="position-relative">
            <section class="section section-lg">
                <div class="container">
                    <div class="row justify-content-center text-center mb-lg">
                        <div class="col-lg-8">
                            <h1 class="title">Developer</h1>
                            <p class="lead text-muted">I'm a key IT talent for Yoo Young Pharm.</p>
                        </div>
                    </div>
                    <div class="row justify-content-center text-center mb-lg">
                        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                            <div class="px-4">
                                <img v-lazy="'img/theme/jbs.jpg'"
                                    class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                    style="width: 200px;">
                                <div class="pt-4 text-center">
                                    <h5 class="title">
                                        <span class="d-block mb-1">Jeon BeomSu</span>
                                        <small class="h6 text-muted">Software Developer</small>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section section-lg">
                <div class="container">
                    <div class="row row-grid justify-content-center">
                        <div class="col-lg-8 text-center">  
                            <h2 class="display-3">Available on these technologies
                            </h2>
                            <div class="text-center">
                                <div class="row justify-content-center">
                                    <div class="col-lg-2 col-3">
                                        <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" data-toggle="tooltip"
                                        data-original-title="C# Docs - get started, tutorials, reference. | Microsoft Docs">
                                            <img v-lazy="'img/brand/csharp.jpg'"
                                                class="img-fluid rounded-circle">
                                        </a>
                                    </div>
                                    <div class="col-lg-2 col-3">
                                        <a href="https://docs.microsoft.com/ko-kr/sql/sql-server" target="_blank" data-toggle="tooltip"
                                        data-original-title="SQL Server 기술 설명서 - SQL Server | Microsoft Docs">
                                            <img v-lazy="'img/brand/mssql.jpg'"
                                                class="img-fluid opacity-5 rounded-circle">
                                        </a>
                                    </div>
                                    <div class="col-lg-2 col-3">
                                        <a href="https://getbootstrap.com/" target="_blank" data-toggle="tooltip"
                                        data-original-title="Bootstrap - The most popular HTML, CSS, and JS library ...">
                                            <img v-lazy="'img/brand/bootstrap.jpg'"
                                                class="img-fluid  opacity-5 rounded-circle" >
                                        </a>
                                    </div>
                                    <div class="col-lg-2 col-3">
                                        <a href="https://vuejs.org/" target="_blank" data-toggle="tooltip"
                                        data-original-title="Vue.js - The progressive javascript framework">
                                            <img v-lazy="'img/brand/vue.jpg'"
                                                class="img-fluid rounded-circle">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>


<script>
//import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
//import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";

export default {
  components: {
        //BCarousel,
        //BCarouselSlide
    }
};
</script>
