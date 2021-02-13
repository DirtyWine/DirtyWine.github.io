<template>
  <el-card shadow="hover" style="margin-bottom: 5px">

    <!--      Left-->
    <el-row :gutter="20" v-if="onLeft">

      <el-col v-if="!isSmallWidth"
              :xs="24" :sm="4" :md="3" :lg="2"
              class="border-right">
          <el-avatar :size="65" :src = "require('@/assets/img/avatar.jpg')"/>
      </el-col>

      <el-col v-if="isSmallWidth"
              :xs="24" :sm="4" :md="3" :lg="2"
              style="margin-bottom: 8px">
        <el-avatar class="left" :size="65" :src = "require('@/assets/img/avatar.jpg')"/>
      </el-col>

      <el-col :xs="24" :sm="19" :md="18" :lg="20">
        <p class="text-content">{{ content }}</p>
      </el-col>

    </el-row>

    <!--      Right-->
<!--    when windows is small size-->
    <el-row :gutter="20" v-if="!onLeft && isSmallWidth">

      <el-col :xs="24" :sm="4" :md="3" :lg="2" style="margin-bottom: 8px">
        <el-avatar class="right border-left" :size="65" :src = "require('@/assets/img/avatar2.jpg')"/>
      </el-col>

      <el-col :xs="24" :sm="20" :md="21" :lg="22">
        <p class="text-content-jj">{{ content }}</p>
      </el-col>

    </el-row>

<!--    when windows is big size-->
    <el-row :gutter="20" v-if="!onLeft && !isSmallWidth" type="flex" justify="end">

      <el-col :xs="24" :sm="19" :md="18" :lg="20">
        <p class="text-content-jj">{{ content }}</p>
      </el-col>

      <el-col :xs="24" :sm="4" :md="3" :lg="2">
        <el-avatar class="border-left" :size="65" :src = "require('@/assets/img/avatar2.jpg')"/>
      </el-col>

    </el-row>

  </el-card>
</template>

<script>
export default {
  name: "MailMessage",

  props: {
    onLeft: Boolean,
    isSmallWidth: Boolean,
    content: String
  },

}
</script>

<style scoped>

.left{
  float: left;
}

.right{
  float: right;
}

.text-content {
  white-space: pre-wrap;
  text-align: left;
  font-size: 16px;
  word-break: break-word;
  font-family: "新宋体";
}

.text-content-jj {
  white-space: pre-wrap;
  text-align: left;
  font-size: 16px;
  word-break: break-word;
  font-style: oblique;
  font-family: "宋体";
}

</style>