<template>
  <div class="centrar" style="padding-bottom: 60px">
    <el-card class="ancho">
      <h1>Sistema de Gestion Documental</h1>
      <el-row>
        <Nav></Nav>
      </el-row>
      <el-row>
        <el-col :span="6" class="border1">
          {{ nodo.label }}
          <div class="block heigth">
            <el-tree
              :data="info"
              node-key="id"
              :default-expand-all="expand"
              :expand-on-click-node="true"
              draggable
            >
              <span class="custom-tree-node" slot-scope="{ node, data }">
                <span @click="getNode([node, data])">
                  <i :class="node.data.file ? 'sizeFile fa-solid fa-file-pdf' 
                              : node.expanded ? 'sizeFile fa-regular fa-folder-open' : 'sizeFile fa-regular fa-folder'"></i>
                  {{ node.data.file ? node.label+node.data.file : node.label }}
                </span>
              </span>
            </el-tree>
          </div>
        </el-col>
        <el-col :span="18" class="border2">
          <div style="width: 100%">
            <el-row>
              <el-col :span="24">
                <span style="color: rgb(90, 90, 90)">Files</span>
                <hr />
              </el-col>
            </el-row>
          </div>
          <div style="display: flex; height: 443px">
            <div class="position" style="width: 70%">
              <el-row>
                <el-col :span="24">
                  <i
                    :class="!nodo.data ? 'fa-3x  fa-regular fa-folder' : 
                            nodo.data.file ? 'fa-3x fa-solid fa-file-pdf' : 'fa-3x  fa-regular fa-folder'"
                    style="color: rgb(90, 90, 90)"
                  ></i>
                </el-col>
                <el-col :span="24">
                  <span>{{ data.label }}</span>
                </el-col>
              </el-row>
            </div>
            <div class="position" style="width: 30%">
              <el-row>
                <el-col>
                  <i
                    class="fa-lg fa-regular fa-trash-can show"
                    v-show="data.label"
                    @click="() => remove(nodo, data)"
                  ></i>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6" class="border1 size">
          <i
            class="fa-lg fa-solid fa-angles-up show"
            @click="expand = false"
          ></i>
        </el-col>
        <el-col :span="18" class="border2 size"> </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
import Products from "@/views/finderScripts/products";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  components: {
    Nav,
  },
  data() {
    return {
      expand: true,
      info: Products.products,
      files: {
        html: "mdi-language-html5",
        js: "mdi-nodejs",
        json: "mdi-code-json",
        md: "mdi-language-markdown",
        pdf: "mdi-file-pdf",
        png: "mdi-file-image",
        txt: "mdi-file-document-outline",
        xls: "mdi-file-excel",
      },
    };
  },

  computed: {
    ...mapState(["nodo", "data"]),
  },

  methods: {
    ...mapMutations(["getNode"]),

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
      console.log("remove >>", node);
    },

    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.append(data)}
            >
              Append
            </el-button>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.remove(node, data)}
            >
              Delete
            </el-button>
          </span>
        </span>
      );
    },
  },
};
</script>
<style scoped>
.border1 {
  padding: 5px;
  border-width: 1px;
  border-right: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5;
}

.border2 {
  padding: 5px;
  border-width: 1px;
  border-bottom: 1px solid #ebeef5;
}

.ancho {
  width: 70%;
}

.centrar {
  display: flex;
  justify-content: center;
}

.heigth {
  height: 500px;
}

.position {
  display: flex;
  justify-content: center;
  align-items: center;
}

.show {
  color: rgb(210, 210, 210);
}

.show:hover {
  color: black;
  cursor: pointer;
}

.size {
  height: 40px;
}

.sizeFile{
  font-size: 23px;
}
</style>
