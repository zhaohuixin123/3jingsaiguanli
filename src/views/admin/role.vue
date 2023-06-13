<template>
    <div class="root">
      <el-button type="success" plain @click="toAdd">新增</el-button>

      <el-dialog v-model="dialogFormVisible" title="角色表单">
        <el-form :model="role">
          <el-form-item label="角色名称" :label-width="formLabelWidth">
            <el-input v-model="role.roleName" autocomplete="off" />
          </el-form-item>
          <el-form-item label="描述" :label-width="formLabelWidth">
            <el-input v-model="role.description" autocomplete="off" />
          </el-form-item>
          <el-form-item label="状态" :label-width="formLabelWidth">
            <el-input v-model="role.status" autocomplete="off" />
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
          <el-table-column fixed prop="id" label="序号" width="80" align="center"/>
          <el-table-column prop="roleName" label="角色名称" width="250" align="center"/>
          <el-table-column prop="description" label="描述" width="100" align="center"/>
          <el-table-column prop="status" label="状态" width="100" align="center"/>
          <el-table-column prop="createTime" label="创建时间" width="250" align="center"/>
          <el-table-column prop="updateTime" label="更新时间" width="100" align="center"/>
          <el-table-column fixed="right" label="权限" width="150" align="center">
            <template #default="scope">
              <el-button type="info" plain size="small" @click="handleEdit(scope.row.id)">编辑</el-button>
              <el-button type="danger" plain size="small"  @click="handleDelete(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-pagination
      :current-page="page"
      :total="total"
      :page-size="limit"
      :page-sizes="[5, 10, 20, 30, 40, 50, 100]"
      style="padding: 30px 0; text-align: center"
      layout="sizes, prev, pager, next, jumper, ->, total, slot"
      @current-change="fetchData"
      @size-change="changeSize"
    />
    </div>
  </template>
    
    <script>
  import role from "@/http/role";
  import { defineComponent } from "vue";
  
  export default defineComponent({
    data() {
      return {
        list: [],
        role: {},
        current:1,
        size:10,
        total:0,
        dialogFormVisible: false,
      };
    },
    mounted() {
      this.fetchData(1);
    },
    methods: {
      fetchData(page) {
        this.current = page
        const data = {current:this.current,size:this.size}
        role.getPage(data).then((res) => {
          console.log(res)
          this.list = res.data.page.records;
          this.total = res.data.page.total
        });
      },
      handleDelete(id) {
        const data = { id };
        ElMessageBox.confirm("您是否需要删除该角色?", "提示", {
          confirmButtonText: "ok",
          cancelButtonText: "no",
          type: "warning",
        })
          .then(() => {
            role.remove(data).then((res) => {
              if (res.success) {
                ElMessage({
                  type: "success",
                  message: "删除成功",
                });
                this.fetchData(1);
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
        role.one(data).then((res) => {
          this.role = res.data.role;
        });
      },
      toAdd() {
        this.role = {};
        this.dialogFormVisible = true;
      },
      confirm() {
        if (this.role.id == undefined) {
            console.log(this.role)
          role.insert(this.role).then((res) => {
            console.log(res);
            if (res.success) {
              ElMessage({
                type: "success",
                message: "添加成功",
              });
              this.fetchData(1);
            } else {
              ElMessage({
                type: "error",
                message: "网络出问题，联系管理员",
              });
            }
            this.dialogFormVisible = false;
          });
        } else {
          role.update(this.role).then((res) => {
            if (res.success) {
              ElMessage({
                type: "success",
                message: "编辑成功",
              });
              this.fetchData(1);
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
      changeSize(size){
        this.size = size;
        this.fetchData(1)
      }
    },
  });
  </script>
    
    <style lang="scss" scoped>
  
  </style>
    