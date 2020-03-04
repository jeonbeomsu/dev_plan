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
              재고 비용 최소화
            </h4>
            <h5>
              제품생산에 소요되는 시간(LEAD TIME)의 3요소 간의 상관관계를 논리적으로 분석
              하여 완제품에 대한 수요 요건, 즉 납품시기와 납품량을 전제로하고 이 제품을 그 때
              까지 생산하는데 어떤 자재가 언제 얼마만큼 준비되어야 하는가를 결정하여 재고비용
              을 최소화하는데 있다.
            </h5>
            </template>
            <template slot="tab-pane-2">
              <h4><md-icon>arrow_drop_down_circle</md-icon>
              자재 회전율의 증가
              </h4>
              <h5>
              전통적인 정량 발주 시스템 하에서는 계속 일정 재고가 쌓여가다가 발주시점에 도달하면 
              재고수준이 현저하게 떨어지게 된다. 이에 반해 MRP시스템의 경우 생산 시점에 맞추어 자재가 
              자동으로 도착할 수 있도록 되어있기 때문에 재고가 오랜 시간동안 쌓여있을 필요가 없게 되어 
              자재회전율이 우수하게 된다.
              </h5>
            </template>
            <template slot="tab-pane-3">
              <h5><md-icon>arrow_right</md-icon>개발 계획서</h5>
              <h5><md-icon>arrow_right</md-icon>MPS 분석자료</h5>
              <h5><md-icon>arrow_right</md-icon>DB 설계도</h5>
              <h5><md-icon>arrow_right</md-icon>TPMS-생산계획 프로그램</h5>
              <h5><md-icon>arrow_right</md-icon>프로그램 검수 확인서</h5>
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
              본 문서는 유영제약에서 사용하는 TPMS-생산계획 프로그램의 개발 계획에 대하여 서술한다.
              </h5>
              <h5>
              생산계획 프로그램에는 안전재고 생성, 판매계획 등록, 기초재고 생성, LOT 편성, 투입일 산출 메뉴를 포함한다.
              </h5>
            </template>
            <template slot="tab-pane-2">
              <h5>
              본 문서는 유영제약에 구축된 TPMS가 범위에 포함된다. 본 문서에서는 생산계획 프로그램에 대한 설계규격을 포함한다.
              </h5>
              <h5><md-icon>arrow_right</md-icon>생산계획 업무 흐름도</h5>
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
