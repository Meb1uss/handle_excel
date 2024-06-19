<script setup>
import XlsxButton from "@/components/XlsxButton/index.vue";
import CreateExcleBtn from "@/components/CreateExcleBtn/index.vue";
import { computed, ref, watch } from "vue";
// excle转化后的数组对象
const tableData = ref([]);
// 改变后的数组对象
const data = ref([]);
// 格式是否改变
let isChange = ref(false);

// tableData 长度不为0且样式没有改变时，改变格式按钮可用
const disabled = computed(() => {
  return tableData.value.length && !isChange.value;
});

// 获得子组件数据
function getAlignedWord(arr) {
  tableData.value = arr;
  console.log(arr);
}

// 改变格式
function changeFormat() {
  // 改变图表的显示方式
  isChange.value = true;
  data.value = tableData.value;
  concat();
}

// 如果传入新的文件，则恢复默认显示方式
watch(tableData, () => {
  isChange.value = false;
  console.log(11111111);
});

/* 对齐词相同，则拼接未处理词 */
function concat() {
  for (let i = 0; i < data.value.length - 1; i++) {
    let j = i + 1;
    if (data.value[j]["对齐"] === data.value[i]["对齐"]) {
      data.value[i]["未处理词"] =
        data.value[i]["未处理词"] + "," + data.value[j]["未处理词"];
      data.value.splice(j, 1);
      i--;
    }
  }
}
</script>

<template>
  <div class="entity_container">
    <div class="top">
      <XlsxButton @getAlignedWord="getAlignedWord"></XlsxButton>
      <el-button
        type="primary"
        size="default"
        @click="changeFormat"
        plain
        :disabled="!disabled"
        >改变格式</el-button
      >
      <el-text class="mx-1" type="primary">{{ tableData.length }}</el-text>
    </div>

    <div class="table">
      <!-- 改变格式前展示 -->
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        height="600"
        :default-sort="{ prop: '编号' }"
      >
        <el-table-column prop="对齐" label="对齐" sortable width="150" />
        <el-table-column prop="未处理词" label="未处理词" />
      </el-table>
    </div>
    <div class="createExcel">
      <CreateExcleBtn :data="data"></CreateExcleBtn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.entity_container {
  max-width: 1200px;
  margin: 20px auto;
  .top {
    margin-bottom: 30px;
    display: flex;
    gap: 20px;
  }
  .length {
    color: #7f7f7f;
    font-size: 16px;
  }
  .createExcel {
    display: flex;
    gap: 20px;
    max-width: 500px;
    margin: 10px auto;
  }
}
</style>
