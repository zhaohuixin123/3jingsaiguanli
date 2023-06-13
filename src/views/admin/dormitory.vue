<template>
  <div class="root">
    <el-button type="success" plain @click="toAdd">新增</el-button>
    <el-dialog v-model="dialogFormVisible" title="宿舍表单">
      <el-form :model="dormitory">
        <el-form-item label="宿舍名称" :label-width="formLabelWidth">
          <el-input v-model="dormitory.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="宿舍长编号" :label-width="formLabelWidth">
          <el-input v-model="dormitory.leader" autocomplete="off" />
        </el-form-item>
        <el-form-item label="总床位数" :label-width="formLabelWidth">
          <el-input v-model="dormitory.maxNumber" autocomplete="off" />
        </el-form-item>
        <el-form-item label="空位数" :label-width="formLabelWidth">
          <el-input v-model="dormitory.leftNumber" autocomplete="off" />
        </el-form-item>
        <el-form-item label="入住人数" :label-width="formLabelWidth">
          <el-input v-model="dormitory.liveNumber" autocomplete="off" />
        </el-form-item>
        <el-form-item label="宿舍状态" :label-width="formLabelWidth">
          <el-input v-model="dormitory.status" autocomplete="off" />
        </el-form-item>
        <el-form-item label="宿舍备注" :label-width="formLabelWidth">
          <el-input v-model="dormitory.comment" autocomplete="off" />
        </el-form-item>
        <el-form-item label="学校" :label-width="formLabelWidth">
          <el-input v-model="dormitory.school" autocomplete="off" />
        </el-form-item>
        <el-form-item label="宿舍类型" :label-width="formLabelWidth">
          <el-input v-model="dormitory.type" autocomplete="off" />
        </el-form-item>
        <el-form-item label="建筑" :label-width="formLabelWidth">
          <el-input v-model="dormitory.building" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="confirm()"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
    <div class="table">
      <el-table :data="list" style="width: 100%">
        <el-table-column fixed prop="id" label="id" width="80" align="center"/>
        <el-table-column prop="name" label="宿舍名称" width="80" align="center"/>
        <el-table-column prop="leader" label="宿舍长编号" width="100" align="center"/>
        <el-table-column prop="maxNumber" label="总床位数" width="100" align="center"/>
        <el-table-column prop="leftNumber" label="空位数" width="100" align="center"/>
        <el-table-column prop="liveNumber" label="入住人数" width="100" align="center"/>
        <el-table-column prop="status" label="宿舍状态" width="100" align="center"/>
        <el-table-column prop="comment" label="宿舍备注" width="300" align="center" />
        <el-table-column prop="school" label="学校" width="180" align="center"/>
        <el-table-column prop="type" label="宿舍类型" width="80" align="center"/>
        <el-table-column prop="building" label="建筑" width="80" align="center"/>
        <el-table-column fixed="right" label="权限" width="150" align="center">
          <template #default="scope">
            <el-button type="info" plain size="small" @click="handleEdit(scope.row.id)">编辑</el-button>
            <el-button type="danger" plain size="small"  @click="handleDelete(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
  
  <script>
import dormitory from "@/http/dormitory";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      list: [],
      dormitory: {},
      dialogFormVisible: false,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      dormitory.entire().then((res) => {
        console.log(res)
        this.list = res.data.dormitories;
      });
    },
    handleDelete(id) {
      const data = { id };
      ElMessageBox.confirm("您是否需要删除该宿舍?", "提示", {
        confirmButtonText: "ok",
        cancelButtonText: "no",
        type: "warning",
      })
        .then(() => {
          dormitory.remove(data).then((res) => {
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
      dormitory.select(data).then((res) => {
        this.dormitory = res.data.dormitory;
      });
    },
    toAdd() {
      this.dormitory = {};
      this.dialogFormVisible = true;
    },
    confirm() {
      if (this.dormitory.id == undefined) {
        dormitory.add(this.dormitory).then((res) => {
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
        dormitory.update(this.dormitory).then((res) => {
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

</style>
  