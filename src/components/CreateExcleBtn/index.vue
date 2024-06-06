<script setup>
import { ref } from "vue";
import * as XLSX from "xlsx";
import { Edit } from "@element-plus/icons-vue";

let fileName = ref("");
const props = defineProps(["data"]);

function createExcel() {
  console.log(fileName.value, props.data);

  const xlsxObj = {
    SheetNames: ["sheet1"],
    Sheets: {
      ["sheet1"]: XLSX.utils.json_to_sheet(props.data),
    },
  };
  if (fileName.value === "") {
    fileName.value = "xxx";
  }
  XLSX.writeFile(xlsxObj, `${fileName.value}.xlsx`);
}
</script>

<template>
  <el-input
    v-model="fileName"
    style="max-width: 300px"
    placeholder="请输入文件名"
    :prefix-icon="Edit"
  >
    <template #append>.xlsx</template>
  </el-input>
  <el-button
    type="primary"
    size="default"
    @click="createExcel"
    :disabled="!data.length"
    >生成excle</el-button
  >
</template>

<style scoped lang="scss"></style>
