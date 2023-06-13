<template>
    <div class="">
      <el-button type="success" size="small" @click="toAdd">添加</el-button>
      <el-input v-model="serch.id" placeholder="编号" clearable style="width: 120px"></el-input>
      <el-input v-model="serch.name" placeholder="请输入建筑名称" clearable style="width: 120px"></el-input>
      <el-input v-model="serch.schoolId" placeholder="请输入学校ID" clearable style="width: 120px"></el-input>
      <el-button type="primary" @click="selectById">搜索</el-button>
      <el-button type="info" @click="reset">重置</el-button>
      <div class="table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column fixed prop="id" label="编号" width="150" align="center" />
          <el-table-column prop="name" label="建筑楼名称" width="210" align="center" />
          <el-table-column prop="chager" label="管理员" width="120" align="center" />
          <el-table-column prop="schoolId" label="学校编号" width="120" align="center" />
          <el-table-column prop="createTime" label="创建时间" width="250" align="center" />
          <el-table-column prop="updateTime" label="更新时间" width="250" align="center" />
          <el-table-column fixed="right" label="操作" width="180" align="center">
            <template #default="scope">
              <el-button size="small" @click="handleEdit(scope.row.id)">编辑</el-button>
              <el-button size="small" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-pagination :current-page="page" :total="total" :page-size="limit" :page-sizes="[5, 10, 20, 30, 40, 50, 100]"
        style="padding: 30px 0; text-align: center" layout="sizes, prev, pager, next, jumper, ->, total, slot"
        @current-change="fetchData" @size-change="changeSize" />
      <el-dialog v-model="dialogFormVisible" title="添加/编辑">
        <el-form :model="biulding">
          <el-form-item label="管理员名称" :label-width="formLabelWidth">
            <el-input v-model="biulding.chager" autocomplete="off" />
          </el-form-item>
          <el-form-item label="建筑楼名称" :label-width="formLabelWidth">
            <el-input v-model="biulding.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="学校编号" :label-width="formLabelWidth">
            <el-input v-model="biulding.schoolId" autocomplete="off" />
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取消</el-button>
            <el-button type="primary" @click="excute()"> 确定 </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </template>
  <script>
  import biulding from "../../http/building";
  import { defineComponent } from "vue";
  import dayjs from "dayjs";
  export default defineComponent({
    data() {
      return {
        tableData: [  
        ],
        page: 1,
        biuldings:{
            "schoolId": "",
            "id": "",
          " name": "",
         " chager":"",
        },
        serch: {
          id: "",
          name: "",
          schoolId: "",
        },
        total: 0,
        limit: 10,
        biulding: {},
        dialogFormVisible: false,
      };
    },
    methods: {
      fetchData(page) {
        console.log(page);
        this.page = page;
        const vo = { current: page, size: this.limit };
        biulding.getBuildingsPage(vo).then((res) => {
          console.log(res);
          const pageInfo = res.data.page;
          this.tableData = pageInfo.records;
          this.tableData.forEach((item) => {
            
            item.createTime = dayjs(item.createTime).format(
              "YYYY-MM-DD HH:mm:ss"
            );
            item.updateTime = dayjs(item.createTime).format(
              "YYYY-MM-DD HH:mm:ss"
            );
            console.log(item.createTime);
          });
          this.total = pageInfo.total;
        });
      },
      handleDelete(id) {
        const data = { id };
        ElMessageBox.confirm("你确定删除该行数据吗?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            biulding.deleteById(data).then((res) => {
              console.log(res);
              if (res.success) {
                ElMessage({
                  type: "success",
                  message: "删除成功",
                });
                this.fetchData(1);
              } else {
                ElMessage({
                  type: "error",
                  message: "删除失败",
                });
              }
            });
          })
          .catch(() => {
            ElMessage({
              type: "warning",
              message: "取消删除",
            });
          });
      },
      handleEdit(id) {
        this.dialogFormVisible = true;
        const data = { id };
        buildings.queryById(data).then((res) => {
        buildings = res.data.biuldings;
        });
      },
      toAdd() {
        this.biulding = {};  
        this.dialogFormVisible = true;
      },
      excute(id) {
        if (building.id != undefined) {
          major.updateById(this.building).then((res) => {
            if (res.success) {
              ElMessage({
                type: "success",
                message: "编辑成功",
              });
              //刷新页面
              this.fetchData(1);
            } else {
              ElMessage({
                type: "error",
                message: "编辑失败",
              });
            }
          });
          this.dialogFormVisible = false;
        } else {
          biulding.addOne(this.major).then((res) => {
            if (res.success) {
              ElMessage({
                type: "success",
                message: "添加成功",
              });
              //刷新页面
              this.fetchData(1);
            } else {
              ElMessage({
                type: "error",
                message: "添加失败",
              });
            }
            this.dialogFormVisible = false;
          });
        }
      },
      changeSize(size) {
        this.limit = size;
        this.fetchData(this.page);
      },
      selectById() {
        if (this.serch.id) {
          const data = { id: this.serch.id };
          biulding.getone(data).then((res) => {
            this.tableData = res.data.biuldings;
          });
        } else if (this.serch.name) {
          const data = { name: this.serch.name };
          biulding.getBuildingsByColums(data).then((res) => {
          
            this.tableData = res.data.biuldings;
          });
        } else if (this.serch.schoolId) {
          const data = { schoolId: this.serch.schoolId };
          biulding.getBuildingBySchoolId(data).then((res) => {
            console.log(res);
            this.tableData = res.data.biuldings;
          });
        }
      },
     
      reset() {
        this.serch = {};
        this.fetchData(1);
      },
      //
    },
    mounted() {
      this.fetchData(1);
    },
  });
  </script>
    
  <style lang="scss" scoped>
  .table {
    margin-top: 10px;
  }
  </style>
    