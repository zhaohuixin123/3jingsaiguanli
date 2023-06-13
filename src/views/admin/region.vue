<template>
  <div>
    <!-- <div>
          <button type="button" :v-show="bt" @click="preLevel()">返回上一级</button>
      </div> -->
    <br>
    <div>
      选择地域
      <el-select @change="$forceUpdate()" v-model="value1" class="m-2" placeholder="请选择省|直辖市"
        style="margin-left:10px; width:150px;">
        <el-option v-for="item in tableData" :label="item.name" :key="item.id" :value="item.name"
          @click="nextLevel(item.id, item.name)" />
      </el-select>
      <el-select @change="$forceUpdate()" v-model="value2" class="m-2" placeholder="请选择地区市|直辖市辖区" style=" width:180px;">
        <el-option v-for="item in tableData1" :label="item.name" :key="item.id" :value="item.name"
          @click="nextLevel1(item.id, item.name)" />
      </el-select>
      <el-select @change="$forceUpdate()" v-model="value3" class="m-2" placeholder="请选择县|县级市|市辖区" style="width:180px;">
        <el-option v-for="item in tableData2" :label="item.name" :key="item.id" :value="item.name"
          @click="nextLevel2(item.id, item.name), ld(value1,value2,value3)" />
      </el-select>
    </div>
    <div style="margin-top:20px">
      选择学校
      <el-select @change="$forceUpdate()" v-model="value4" class="m-2" placeholder="请选择学校"
        style="margin-left:10px; width:180px;">
        <el-option v-for="item in schoolz" :label="item.schoolName" :key="value4" :value="item.schoolName" @click="bb(value4),this.$router.push('/home')"/>
      </el-select>
    </div>
  </div>
</template>

<script setup>
import { ref} from 'vue';
import { getList, getSchoolsByRegion } from '@/http/region';
let value1 = "";
let value2 = "";
let value3 = "";
let value4 = "";
const schoolz = ref([]);
let cityc = {
  city: "",
  county: "",
  province: ""
};
let key = 0;

const pid = ref(0);
const pidList = ref([]);
const tableData = ref([]);
const cid = ref();
const tableData1 = ref([]);
const pidList1 = ref([]);
const did = ref();
const tableData2 = ref([]);
const pidList2 = ref([]);
const btt = 0

loadData();
const options = [tableData];
const preLevel = () => {
  if (pid.value == 0) {
    alert("当前已经是最低/最高级别了。");
  } else {
    pid.value = pidList.value[pidList.value.length - 1];
    pidList.value.pop();
    loadData();
  }

}


const nextLevel = (id, name) => {
  pidList1.value.push(cid.value);
  cid.value = id;
  value1 = name;
  console.log(value1)
  value2 = "";
  value3 = "";
  value4 = "";
  loadData1();
}


const nextLevel1 = (id, name) => {
  pidList2.value.push(did.value);
  did.value = id;
  value2 = name;
  console.log(cid)
  console.log(value2)
  value3 = "";
value4 = "";
  loadData2();
}



const nextLevel2 = (id, name) => {
  pidList2.value.push(did.value);
  did.value = id;
  value3 = name;
  console.log(did)
  console.log(value3)
  value4 = "";
  loadData2();
}

const zz = () =>{
  value1 = "";
  value2 = "";
  value3 = "";
  value4 = "";
}
function loadData() {
  getList(pid.value).then(res => {
    tableData.value = res.data.regions;
    console.log(tableData.value)
    console.log(options)
  });
}
function loadData1() {
  getList(cid.value).then(res => {
    tableData1.value = res.data.regions;
    console.log(tableData.value)
    console.log(options)
  });
}

function bb(value4){
  const cc = {name:value4}
sessionStorage.setItem("name",JSON.stringify(cc));
// console.log(cc)
}

function loadData2() {
  getList(did.value).then(res => {
    tableData2.value = res.data.regions;
    console.log(tableData.value)
    console.log(options)
  });
}

const ld = (value1,value2,value3) => {
  console.log(value1,value2,value3)
  cityc.city = "泉州市"
  cityc.county = "丰泽区"
  cityc.province = "福建省"
  search();
}

function search() {
  getSchoolsByRegion(cityc).then(res => {
    if (res.success) {
      console.log(res.data.schools)
      schoolz.value = res.data.schools
      console.log(schoolz)
      console.log(res)
    } else {
      console.log(res);
    }
  });
}

function bt() {
  if (btt == 0) {
    return false;
  }
}
</script>

<style></style>
