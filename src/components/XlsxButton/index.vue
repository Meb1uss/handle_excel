<script setup>
import * as XLSX from "xlsx";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// 点击button 触发 file 点击事件
const fileInput = ref("");
const fileName = ref("未选择文件");
function selectFile() {
  // console.log(fileInput.value.click);
  fileInput.value.click();
}

function getExcel(e) {
  console.log(e.target.files[0]);
  // 修改当前文件名
  fileName.value = e.target.files[0].name;

  // 转化为数组
  let fileObj = e.target.files[0];
  const fileReader = new FileReader();
  fileReader.readAsArrayBuffer(fileObj);

  fileReader.onload = (e) => {
    const fileData = e.target.result;

    const workbook = XLSX.read(fileData, {
      type: "binary",
    });

    const wsname = workbook.SheetNames[0];

    const sheetJson = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]);

    // 通过 url 判断功能
    if (route.path === "/entity") {
      emit("getEntityWord", sheetJson);
    } else if (route.path === "/aligned") {
      emit("getAlignedWord", sheetJson);
    }
  };
}

const emit = defineEmits(["getEntityWord", "getAlignedWord"]);
</script>

<template>
  <div>
    <el-button
      type="primary"
      plain
      size="default"
      @click="selectFile"
      class="btn"
      >选择文件
    </el-button>
    <span class="fileName">{{ fileName }}</span>
    <input
      type="file"
      ref="fileInput"
      @change="getExcel"
      :multiple="false"
      accept=".xlsx"
      style="display: none"
    />
  </div>
</template>

<style scoped lang="scss">
.btn {
  margin-right: 10px;
}

.fileName {
  color: #7f7f7f;
  font-size: 12px;
}
</style>
