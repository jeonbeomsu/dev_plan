<template>
<div class="wrapper">
<h1 class="display-3">개발 일정 및 계획</h1>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">

<!--      
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            {{title}}
          </h3>
        </div>
-->
<!--
        <div class="col text-right">
          <base-button type="primary" size="sm">See all</base-button>
        </div>
-->
      </div>
    </div>

    <div class="table-responsive">
      <base-table class="table align-items-center table-flush"
                  :class="type === 'dark' ? 'table-dark': ''"
                  :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                  tbody-classes="list"
                  :data="tableData">
        <template slot="columns">
          <th>Project</th>
          <th>Users</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Outputs</th>
          <th>Status</th>
          <th>Completion</th>
          <th></th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            <div class="media align-items-center">
<!--
              <a href="#" class="avatar rounded-circle mr-3">
                <img alt="Image placeholder" :src="row.img">
              </a>
-->
              <div class="media-body">
                <span class="name mb-0 text-sm">{{row.title}}</span>
              </div>
            </div>
          </th>

          <td>
            <div v-if="row.user2 != ''" class="avatar-group">
              <div class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="People1">
                <img alt="Image placeholder" :src="row.user1">
              </div>
              <div class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="People2">
                <img alt="Image placeholder" :src="row.user2">
              </div>
              <div class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="People3">
                <img alt="Image placeholder" :src="row.user3">
              </div>
              <div class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Jeon Beomsu">
                <img alt="Image placeholder" :src="row.user4">
              </div>
            </div>
            <div v-else class="avatar-group">
              <div class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Jeon Beomsu">
                <img alt="Image placeholder" :src="row.user1">
              </div>
            </div>
          </td>


          <td class="s_date">
            {{row.s_date}}
          </td>
          <td class="e_date">
            {{row.e_date}}
          </td>
          <td>
            {{row.outputs}}
          </td>
          <td>
            <badge class="badge-dot mr-4" :type="row.statusType">
              <i :class="`bg-${row.statusType}`"></i>
              <span class="status">{{row.status}}</span>
            </badge>
          </td>


          <td>
            <div class="d-flex align-items-center">
              <span class="completion mr-2">{{row.completion}}%</span>
              <div>
                <base-progress :type="row.statusType"
                               :show-percentage="false"
                               class="pt-0"
                               :value="row.completion"/>
              </div>
            </div>
          </td>

        </template>

      </base-table>
    </div>

<!--
    <div class="card-footer d-flex justify-content-end"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <base-pagination total="30"></base-pagination>
    </div>
-->
  </div>
</div>
</template>
<script>
  export default {
    name: 'projects-table',
    props: {
      type: {
        type: String
      },
      title: String
    },
    data() {
      return {
        tableData: [
          {
            img: 'img/theme/bootstrap.jpg',
            title: '개발 계획 수립',
            s_date: '2020-02-17',
            e_date: '2020-02-21',
            outputs: '개발 계획서',
            status: 'completed',
            statusType: 'success',
            user1: 'img/theme/jbs.jpg',
            user2: '',
            user3: '',
            user4: '',
            completion: 100
          },
          {
            img: 'img/theme/angular.jpg',
            title: '분석/요구사항 정의',
            s_date: '2020-02-24',
            e_date: '2020-03-27',
            outputs: 'MPS분석자료',
            status: 'proceeding',
            statusType: 'info',
            user1: 'img/theme/team-1-800x800.jpg',
            user2: 'img/theme/team-2-800x800.jpg',
            user3: 'img/theme/team-3-800x800.jpg',
            user4: 'img/theme/jbs.jpg',
            completion: 35
          },
          {
            img: 'img/theme/sketch.jpg',
            title: 'DB 설계',
            s_date: '2020-03-30',
            e_date: '2020-04-03',
            outputs: 'DB 설계도',
            status: 'waiting',
            statusType: 'danger',
            user1: 'img/theme/jbs.jpg',
            user2: '',
            user3: '',
            user4: '',
            completion: 0
          },
          {
            img: 'img/theme/react.jpg',
            title: '프로그램 설계',
            s_date: '2020-04-06',
            e_date: '2020-04-10',
            outputs: '화면 구성도',
            status: 'waiting',
            statusType: 'danger',
            user1: 'img/theme/jbs.jpg',
            user2: '',
            user3: '',
            user4: '',
            completion: 0
          },
          {
            img: 'img/theme/vue.jpg',
            title: '프로그램 개발',
            s_date: '2020-04-13',
            e_date: '2020-05-11',
            outputs: '프로그램',
            status: 'waiting',
            statusType: 'danger',
            user1: 'img/theme/jbs.jpg',
            user2: '',
            user3: '',
            user4: '',
            completion: 0
          },
          {
            img: 'img/theme/vue.jpg',
            title: '테스트 및 안정화',
            s_date: '2020-05-12',
            e_date: '2020-05-29',
            outputs: '검수 확인서',
            status: 'waiting',
            statusType: 'danger',
            user1: 'img/theme/jbs.jpg',
            user2: '',
            user3: '',
            user4: '',
            completion: 0
          },
        ]
      }
    }
  }
</script>
<style>
</style>
