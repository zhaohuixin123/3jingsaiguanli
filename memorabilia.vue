<template>
    <div class="">
      <el-button type="success" size="small" @click="toAdd">添加</el-button>
      <!-- 表格 -->
      <div class="table">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column
            prop="userId"
            label="用户编号"
            width="120"
            align="center"
          />
          <el-table-column
            fixed
            prop="content"
            label="内容"
            width="150"
            align="center"
          />
          <el-table-column
            fixed
            prop="happenTime"
            label="大事件发生时间"
            width="150"
            align="center"
          />
          <el-table-column
            prop="createTime"
            label="创建时间"
            width="120"
            align="center"
          />
          <el-table-column
            prop="updateTime"
            label="更新时间"
            width="120"
            align="center"
          />
          
         
          <el-table-column fixed="right" label="操作" width="180" align="center">
            <template #default="scope">
              <el-button size="small" @click="handleEdit(scope.row.id)"
                >编辑</el-button
              >
              <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.row.id)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
  
      <!-- 分页 -->
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
  
      <!-- 表单 -->
      <el-dialog v-model="dialogFormVisible" title="添加/编辑">
        <el-form :model="memorabilia">
          <el-form-item label="内容" :label-width="formLabelWidth">
            <el-input v-model="memorabilia.content" autocomplete="off" />
          </el-form-item>
          <el-form-item label="大事件发生时间" :label-width="formLabelWidth">
            <el-input v-model="memorabilia.happenTime" autocomplete="off" />
          </el-form-item>
          <el-form-item label="用户编号" :label-width="formLabelWidth">
            <el-input v-model="memorabilia.userId" autocomplete="off" />
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
  //模块引入
  import memorabilia from "../../http/memorabilia";
  import { defineComponent } from "vue";
  
  export default defineComponent({
    data() {
      return {
        tableData: [],
        page: 1,
        total: 0,
        limit: 10,
        memorabilia: {},
        dialogFormVisible: false,
      };
    },
    methods: {
      //分页查询
      fetchData() {
        //封装分页对象
        const vo = { current: this.page, size: this.limit };
        memorabilia.getMemorabiliasPage(vo).then((res) => {
            console.log(res);
          //得到page对象
          const pageInfo = res.data.page;
          this.tableData = pageInfo.records;
          this.total = pageInfo.total;
        });
      },
      //删除业务 id作参
      handleDelete(id) {
        //封装数据对象
        const data = { id };
        ElMessageBox.confirm("确定删除该行数据嘛？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            memorabilia.deleteById(data).then((res) => {
              if (res.success) {
                ElMessage({
                  type: "success",
                  message: "删除成功",
                });
                //刷新页面
                this.fetchData();
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
      //编辑-数据回显
      handleEdit(id) {
        //唤出编辑表单
        this.dialogFormVisible = true;
        //根据id查询 完成数据回显
        const data = { id };
        memorabilia.queryById(data).then((res) => {
          this.memorabilia = res.data.memorabilia;
        });
      },
      toAdd() {
        this.dialogFormVisible = true;
        this.memorabilia = {}
      },
      //执行编辑业务
      excute() {
        if (this.memorabilia.id != undefined) {
          //编辑逻辑
          memorabilia.updateById(this.memorabilia).then((res) => {
            if (res.success) {
              ElMessage({
                type: "success",
                message: "编辑成功",
              });
              //刷新页面
              this.fetchData();
            } else {
              ElMessage({
                type: "error",
                message: "编辑失败",
              });
            }
          });
          //关闭弹窗
          this.dialogFormVisible = false;
        } else {
          //添加逻辑
          memorabilia.addOne(this.memorabilia).then(res => {
            if(res.success){
              ElMessage({
                type: "success",
                message: "编辑成功",
              });
              //刷新页面
              this.fetchData();
            }else{
              ElMessage({
                type: "error",
                message: "添加失败",
              });
            }
            this.dialogFormVisible = false;
          })
        }
      },
      //更新每页显示数
      changeSize(size) {
        this.limit = size;
        this.fetchData();
      },
    },
    created() {
      this.fetchData(1);
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .table {
    margin-top: 10px;
  }
  </style>
  