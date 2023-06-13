<template>
  
  <el-table :data="schoolz" style="width: 100%">
    <el-table-column fixed prop="schoolName" label="id" width="80" align="center" />
  </el-table>

  <el-select v-model="schoolName" class="m-2" placeholder="Select" size="large">
    <el-option v-for="item in schoolz" :key="item.schoolName" :label="item.schoolName" :value="item.schoolName" />
  </el-select>

  <el-select @change="$forceUpdate()" v-model="schoolName" class="m-2" placeholder="请选择省|直辖市"
    style="margin-left:10px; width:150px;">
    <el-option v-for="item in schoolz" :label="item.schoolName" :key="item.schoolName" :value="item.schoolName" />
  </el-select>

  <el-input v-model="searchKeyword" placeholder="请输入关键词" clearable @clear="search">
  </el-input>
  <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
</template>
  
<script>
import school from "@/http/school";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      list: [],
      school: {},
      schoolz: [],
      cityc: {
        city: "泉州市",
        county: "丰泽区",
        province: "福建省"
      },
      dialogFormVisible: false,
      queryForm: {
        id: ''
      },
      dialogFormVisible: false,
      dialogData: {}
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    search() {
      school.getSchoolsByRegion(this.cityc).then((res) => {
        if (res.success) {
          console.log(res.data.schools)
          this.schoolz = res.data.schools
          ElMessage({
            type: "success",
            message: "编辑成功",
          });
        } else {
          console.log(res),
            ElMessage({
              type: "error",
              message: "网络出问题，联系管理员",
            });
        }
      });
    },
    fetchData() {
      school.all().then((res) => {
        console.log(res)
        this.list = res.data.schools;
      });
    },
    handleQuery() {
      const queryData = { id: this.queryForm.id };
      school.one(queryData)
        .then((res) => {
          // 处理查询结果，例如更新数据
          console.log(res);

          // 设置弹窗数据，并显示弹窗
          this.dialogData = res.data.school;
          this.dialogVisible = true;
        })
        .catch((error) => {
          // 查询失败，弹出错误提示框
          ElMessageBox.alert("查询失败，请重试", "错误", {
            confirmButtonText: "确定",
            type: "error",
          });
          console.error(error); // 打印错误对象到控制台，以便调试
        });
    },
    handleDelete(id) {
      const data = { id };
      ElMessageBox.confirm("您是否需要删除该学校?", "提示", {
        confirmButtonText: "ok",
        cancelButtonText: "no",
        type: "warning",
      })
        .then(() => {
          school.remove(data).then((res) => {
            if (res.success) {
              ElMessage({
                type: "success",
                message: "删除成功",
              });
              this.fetchData();
            } else {
              ElMessage({
                type: "error",
                message: "网络出问题，联系管理员",
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
      school.one(data).then((res) => {
        this.school = res.data.school;
      });
    },
    toAdd() {
      this.school = {};
      this.dialogFormVisible = true;
    },
    confirm() {
      if (this.school.id == undefined) {
        school.add(this.school).then((res) => {
          if (res.success) {
            ElMessage({
              type: "success",
              message: "添加成功",
            });
            this.fetchData();
          } else {
            ElMessage({
              type: "error",
              message: "网络出问题，联系管理员",
            });
          }
          this.dialogFormVisible = false;
        });
      } else {
        school.update(this.school).then((res) => {
          if (res.success) {
            ElMessage({
              type: "success",
              message: "编辑成功",
            });
            this.fetchData();
          } else {
            ElMessage({
              type: "error",
              message: "网络出问题，联系管理员",
            });
          }
        });
        this.dialogFormVisible = false;
      }
    },
  },
});
</script>
  
<style lang="scss" scoped>
.root {
  padding: 20px;
}

.table {
  margin-top: 20px;
}


.cancel-button {
  background-color: #e6a23c;
  color: #fff;
}

.confirm-button {
  background-color: #67c23a;
  color: #fff;
}

.edit-button {
  background-color: #409eff;
  color: #fff;
  margin-right: 10px;
}

.delete-button {
  background-color: #f56c6c;
  color: #fff;
}

.el-table {
  font-size: 14px;
}

.el-table-column {
  padding: 10px;
}

.el-table__header {
  background-color: #f5f7fa;
}

.el-table__row {
  &:nth-child(even) {
    background-color: #f9fafc;
  }
}

.el-input {
  width: 100%;
}

.query-form {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.query-form .el-form-item:not(:last-child) {
  margin-right: 10px;
  margin-left: 10px;
}

.el-input {
  width: 180px;
  margin-left: 10px;
}

.add-button {
  background-color: #67c23a;
  color: #fff;
  margin-left: 10px;
  margin-right: 50px;
}

.footer-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
}

.box {
  display: flex;
}

.query-form.add-button {
  flex: 1;
}
</style>