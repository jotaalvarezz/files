<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      style="background-color: rgb(240, 240, 240)"
    >
      <div class="pnav">
        <div class="flex">
          <el-menu-item index="1"
            ><i class="fa-2x fa-solid fa-folder-tree"></i
          ></el-menu-item>
          <el-submenu index="2">
            <template slot="title"
              ><i class="fa-2x fa-solid fa-folder"></i
            ></template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-submenu>
          </el-submenu>
        </div>
        <div style="display: flex">
          <el-dialog
            title="Nueva Carpeta"
            :visible.sync="centerDialogVisible"
            width="30%"
            center
          >
            <el-row style="display: flex; justify-content: center">
              <span><i class="fa-2x fa-regular fa-folder-open"></i></span><br />
            </el-row>
            <el-row class="mt-3">
              <el-col :span="24">
                <el-input v-model="name"></el-input>
              </el-col>
            </el-row>
            <span slot="footer" class="dialog-footer">
              <el-button @click="centerDialogVisible = false">Cancel</el-button>
              <el-button type="primary" @click="append(data, name)"
                >Confirm</el-button
              >
            </span>
          </el-dialog>
          <el-menu-item index="3" v-show="data.label">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
            >
              <i class="fa-2x fa-solid fa-cloud-arrow-up"></i>
            </el-upload>
          </el-menu-item>
          <el-menu-item index="4" v-show="data.label">
            <i
              class="fa-2x fa-solid fa-folder-plus"
              @click="centerDialogVisible = true"
            ></i>
          </el-menu-item>
        </div>
      </div>
    </el-menu>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";

let id = 1000;
export default {
  data() {
    return {
      name: "",
      centerDialogVisible: false,
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  computed: {
    ...mapState(["nodo", "data"]),
  },
  methods: {
    append(data, name) {
      //this.$set(data.data, 'children', []);
      const newChild = { id: id++, label: name, children: [] };
      if (!this.data.children) {
        this.$set(this.data, "children", []);
      }
      data.children.push(newChild);
      this.name = "";
      this.centerDialogVisible = false;
    },

    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.pnav {
  display: flex;
  justify-content: space-between;
}

.flex {
  display: flex;
}
</style>