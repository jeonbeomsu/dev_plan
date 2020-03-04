<template>
  <div class="wrapper">
    <div id="nav-tabs">
      <h1 class="display-3">개요</h1>
      <div class="md-layout">
        <div class="md-layout-item md-size-50 md-small-size-100">
          <tabs
            :tab-name="['개발 목적', '기대 효과', '산 출 물']"
            :tab-icon="['camera', 'score', 'widgets']"
            plain
            nav-pills-icons
            color-button="primary"
          >
            <!-- here you can add your content for tab-content -->
            <template slot="tab-pane-1">
            <h4><md-icon>arrow_drop_down_circle</md-icon>
              FRONT END 개발 기술 향상
            </h4>
            <h5>
              최신 웹 개발 기술인 VUE를 이용하여 FRONT END 개발 기술 능력을 습득하고
              무료 템플릿을 활용한 경영정보 대시보드 프로그램을 개발한다.
            </h5>
            </template>
            <template slot="tab-pane-2">
              <h4><md-icon>arrow_drop_down_circle</md-icon>
               경영정보 시스템 자체 개발
              </h4>
              <h5>
               FRONT END 개발 기술을 향상시켜 추후에 더 많은 기능을 포함한 유료 템플릿을 이용한
               수준 높은 경영 정보 시스템을 자체 개발할 수 있다. 수준 높은 경영정보 시스템은 
               경영 정보에 필요한 중요한 데이터를 시각화하여 제공함으로써 경영진의 의사 결정 속도를 향상시킬 수 있다.
              </h5>
            </template>
            <template slot="tab-pane-3">
              <h5><md-icon>arrow_right</md-icon>개발 계획서</h5>
              <h5><md-icon>arrow_right</md-icon>설계 화면</h5>
              <h5><md-icon>arrow_right</md-icon>DB 구성도</h5>
              <h5><md-icon>arrow_right</md-icon>대시보드 프로그램</h5>
            </template>
          </tabs>
        </div>
        
        <div class="md-layout-item md-size-50 md-small-size-100">
          <tabs
            :tab-name="['문서의 목적', '문서의 범위']"
            :tab-icon="['pages', 'zoom_out_map']"
            plain
            flex-column
            nav-pills-icons
            color-button="primary"
          >
            <!-- here you can add your content for tab-content -->
            <template slot="tab-pane-1">
              <h5>
              본 문서는 유영제약에서 사용하는 경영정보 대시보드 프로그램의 개발 계획에 대하여 서술한다.
              </h5>
              <h5>
              대시보드 프로그램에는 로그인 페이지, 매출 현황(대시보드), 개발자 소개 메뉴를 포함한다.
              </h5>
            </template>
            <template slot="tab-pane-2">
              <h5>
              본 문서에서는 대시보드 프로그램에 대한 설계규격을 포함한다.
              </h5>
              <h5><md-icon>arrow_right</md-icon>프로그램화면 구성도</h5>
              <h5><md-icon>arrow_right</md-icon>데이터베이스 구성도</h5>
            </template>
          </tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { NavTabsCard } from "@/components";
import { Tabs } from "@/components";

export default {
  components: {
//    NavTabsCard,
    Tabs,
  }
};
</script>

<style lang="css"></style>
