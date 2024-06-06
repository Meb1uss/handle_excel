<script setup>
import XlsxButton from "@/components/XlsxButton/index.vue";
import CreateExcleBtn from "@/components/CreateExcleBtn/index.vue";
import { ref, watch, computed } from "vue";
// excle转化后的数组对象
const tableData = ref([]);
// 改变后的数组对象
const data = ref([]);
// 格式是否改变
let isChange = ref(false);
// tableData 长度不为0且样式没有改变时，改变格式按钮可用
const disabled = computed(() => {
  return Boolean(tableData.value.length & !isChange.value);
});

// 获得子组件数据
function getEntityWord(arr) {
  tableData.value = arr;
  console.log(arr);
}

// 改变格式
function changeFormat() {
  // 改变图表的显示方式
  isChange.value = true;
  data.value = tableData.value;
  filter();
}

// 如果传入新的文件，则恢复默认显示方式
watch(tableData, () => {
  isChange.value = false;
});

// 判断待处理的元素，根据词的类型分类，并删除多余的属性
function filter() {
  // 筛选出要处理的词
  data.value = data.value.filter((item) => {
    return item["处理类型"] != "暂不处理";
  });
  data.value.forEach((item) => {
    item["一类词"] = "";
    item["二类词"] = "";
    item["三类词"] = "";
    // 将词分类
    if (item["词的类型"] === "一类词") {
      item["一类词"] = item["实体词"];
    } else if (item["词的类型"] === "二类词") {
      item["二类词"] = item["实体词"];
    } else {
      item["三类词"] = item["实体词"];
    }
    for (let key in item) {
      if (
        key !== "一类词" &&
        key !== "二类词" &&
        key !== "三类词" &&
        key !== "实体标准名称（非电商标题名称）" &&
        key !== "实体ID"
      ) {
        delete item[key];
      }
    }
  });
  removeDuplicate(data.value);
}

// 找出名称相同的元素
function removeDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // console.log(arr[j]);
      if (
        arr[i]["实体标准名称（非电商标题名称）"] ===
        arr[j]["实体标准名称（非电商标题名称）"]
      ) {
        cilei(arr[i], arr[j]);
        arr.splice(j, 1);
        j--;
      }
    }
  }
  console.log(arr);
}

// 将重复名称的元素的同类型的词拼接
function cilei(i, j) {
  if (j["一类词"]) {
    if (i["一类词"]) {
      i["一类词"] = i["一类词"] + "," + j["一类词"];
    } else {
      i["一类词"] = j["一类词"];
    }
  } else if (j["二类词"]) {
    if (i["二类词"]) {
      i["二类词"] = i["二类词"] + "," + j["二类词"];
    } else {
      i["二类词"] = j["二类词"];
    }
  } else {
    if (i["三类词"]) {
      i["三类词"] = i["三类词"] + "," + j["三类词"];
    } else {
      i["三类词"] = j["三类词"];
    }
  }
}
</script>

<template>
  <div class="entity_container">
    <div class="top">
      <XlsxButton @getEntityWord="getEntityWord"></XlsxButton>
      <el-button
        type="primary"
        size="default"
        @click="changeFormat"
        plain
        :disabled="!disabled"
        >改变格式</el-button
      >
      <el-text v-if="data.length" class="mx-1" type="primary">{{
        data.length
      }}</el-text>
      <el-text v-else class="mx-1" type="primary">{{
        tableData.length
      }}</el-text>
    </div>
    <!-- <h1 class="length">表格长度：{{ tableData.length }}</h1> -->

    <div class="table">
      <!-- 改变格式后展示 -->
      <el-table
        v-if="isChange"
        :data="data"
        stripe
        style="width: 100%"
        height="600"
        :default-sort="{
          prop: '实体ID',
        }"
      >
        <el-table-column prop="实体ID" label="实体ID" sortable width="150" />
        <el-table-column
          prop="实体标准名称（非电商标题名称）"
          label="实体标准名称（非电商标题名称）"
          sortable
        />
        <el-table-column prop="一类词" label="一类词" />
        <el-table-column prop="二类词" label="二类词" />
        <el-table-column prop="三类词" label="三类词" />
      </el-table>
      <!-- 改变格式前展示 -->
      <el-table
        v-else
        :data="tableData"
        stripe
        style="width: 100%"
        height="600"
        :default-sort="{ prop: '编号' }"
      >
        <el-table-column prop="实体ID" label="实体ID" sortable width="150" />
        <el-table-column
          prop="实体标准名称（非电商标题名称）"
          label="实体标准名称（非电商标题名称）"
          sortable
        />
        <el-table-column prop="实体词" label="实体词" />
        <el-table-column prop="词的类型" label="词的类型" />
        <el-table-column prop="处理类型" label="处理类型" />
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
