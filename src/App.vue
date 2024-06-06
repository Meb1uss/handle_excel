<script setup>
// import HelloWorld from "./components/HelloWorld.vue";
import { useRoute } from "vue-router";

import { Connection, Switch } from "@element-plus/icons-vue";

const route = useRoute();
</script>

<template>
  <!-- <HelloWorld /> -->
  <div class="container">
    <div class="nav">
      <el-menu
        :default-active="route.path"
        router
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        class="menu"
      >
        <el-menu-item index="/entity">
          <span
            ><el-icon><Connection /></el-icon>实体词</span
          >
        </el-menu-item>
        <el-menu-item index="/aligned">
          <span
            ><el-icon><Switch /></el-icon>对齐词</span
          >
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 内容展示 -->
    <div class="content">
      <router-view> </router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  .nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100vh;
    .menu {
      flex: 1;
    }
  }
  .content {
    flex: 6;
  }
}
</style>
