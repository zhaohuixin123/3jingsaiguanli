<template>
    <div class="">
      <el-button type="success" size="small" @click="toAdd">添加</el-button>
      <!-- 表格 -->
      <div class="table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column
            fixed
            prop="id"
            label="编号"
            width="150"
            align="center"
          />
          <el-table-column
            prop="name"
            label="课程名称'"
            width="120"
            align="center"
          />
          <el-table-column
            prop="nameEn"
            label="英文课程名称"
            width="120"
            align="center"
          />
          <el-table-column
            prop="courseNo"
            label="课程编号"
            width="120"
            align="center"
          />
          <el-table-column
            prop="description"
            label="课程描述"
            width="120"
            align="center"
          />
          <el-table-column
            prop="depart"
            label="院学"
            width="120"
            align="center"
          />
          <el-table-column
            prop="state"
            label="状态"
            width="120"
            align="center"
          />
          <el-table-column
            prop="major"
            label="专业"
            width="120"
            align="center"
          />
          <el-table-column
            prop="courseType"
            label="课程类型"
            width="120"
            align="center"
          />
          <el-table-column
            prop="school"
            label="学校"
            width="120"
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
        <el-form :model="course">
          <el-form-item label="课程名称" :label-width="formLabelWidth">
            <el-input v-model="course.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="英文课程名称" :label-width="formLabelWidth">
            <el-input v-model="course.nameEn" autocomplete="off" />
          </el-form-item>
          <el-form-item label="课程编号" :label-width="formLabelWidth">
            <el-input v-model="course.courseNo" autocomplete="off" />
          </el-form-item>
          <el-form-item label="课程描述" :label-width="formLabelWidth">
            <el-input v-model="course.description" autocomplete="off" />
          </el-form-item>
          <el-form-item label="院学" :label-width="formLabelWidth">
            <el-input v-model="course.depart" autocomplete="off" />
          </el-form-item>
          <el-form-item label="状态" :label-width="formLabelWidth">
            <el-input v-model="course.state" autocomplete="off" />
          </el-form-item>
          <el-form-item label="专业" :label-width="formLabelWidth">
            <el-input v-model="course.major" autocomplete="off" />
          </el-form-item>
          <el-form-item label="课程类型" :label-width="formLabelWidth">
            <el-input v-model="course.courseType" autocomplete="off" />
          </el-form-item>
          <el-form-item label="学校" :label-width="formLabelWidth">
            <el-input v-model="course.school" autocomplete="off" />
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
  import course from "../../http/course";
  import { defineComponent } from "vue";
  
  export default defineComponent({
    data() {
      return {
        tableData: [],
        page: 1,
        total: 0,
        limit: 10,
        course: {},
        dialogFormVisible: false,
      };
    },
    methods: {
      //分页查询
      fetchData(page) {
        console.log(page);
        this.page = page
        //封装分页对象
        const vo = { current: this.page, size: this.limit };
        course.getcourseByPage(vo).then((res) => {
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
        ElMessageBox.confirm("你确定删除该行数据吗?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            course.deleteById(data).then((res) => {
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
        course.queryById(data).then((res) => {
          this.course = res.data.course;
        });
      },
      toAdd() {
        this.dialogFormVisible = true;
        this.course = {}
      },
      //执行编辑业务
      excute() {
        if (this.course.id != undefined) {
          //编辑逻辑
          course.updateById(this.course).then((res) => {
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
          course.addOne(this.course).then(res => {
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