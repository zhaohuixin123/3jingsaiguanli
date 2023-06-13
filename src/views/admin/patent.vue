<template>
    <div class="root">
      <el-button type="success" plain @click="toAdd">新增</el-button>
      <el-dialog v-model="dialogFormVisible" title="专利表单">
        <el-form :model="patent">
          <el-form-item label="专利名称" :label-width="formLabelWidth">
            <el-input v-model="patent.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="发明人" :label-width="formLabelWidth">
            <el-input v-model="patent.userId" autocomplete="off" />
          </el-form-item>
          <el-form-item label="专利类型" :label-width="formLabelWidth">
            <el-input v-model="patent.type" autocomplete="off" />
          </el-form-item>
          <el-form-item label="授权时间" :label-width="formLabelWidth">
            <el-input v-model="patent.empowerTime" autocomplete="off" />
          </el-form-item>
          <el-form-item label="佐证材料" :label-width="formLabelWidth">
            <el-input v-model="patent.attachment" autocomplete="off" />
          </el-form-item>
          <el-form-item label="申请地址" :label-width="formLabelWidth">
            <el-input v-model="patent.address" autocomplete="off" />
          </el-form-item>
          <el-form-item label="专利号" :label-width="formLabelWidth">
            <el-input v-model="patent.patentNo" autocomplete="off" />
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
          <el-table-column prop="name" label="专利名称" width="80" align="center"/>
          <el-table-column prop="userId" label="发明人" width="100" align="center"/>
          <el-table-column prop="type" label="专利类型" width="100" align="center"/>
          <el-table-column prop="empowerTime" label="授权时间" width="250" align="center"/>
          <el-table-column prop="attachment" label="佐证材料" width="100" align="center"/>
          <el-table-column prop="address" label="申请地址" width="100" align="center"/>
          <el-table-column prop="patentNo" label="专利号" width="80" align="center" />
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
  import patent from "@/http/patent";
  import { defineComponent } from "vue";
  
  export default defineComponent({
    data() {
      return {
        list: [],
        patent: {},
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
        patent.getPage(data).then((res) => {
          console.log(res)
          this.list = res.data.page.records;
          this.total = res.data.page.total
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
            patent.remove(data).then((res) => {
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
        patent.select(data).then((res) => {
          this.patent = res.data.patent;
        });
      },
      toAdd() {
        this.patent = {};
        this.dialogFormVisible = true;
      },
      confirm() {
        if (this.patent.id == undefined) {
          patent.add(this.patent).then((res) => {
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
          patent.update(this.patent).then((res) => {
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
    