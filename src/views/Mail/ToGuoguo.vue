<template>

  <div class="container">

    <div v-if="lock">
      <el-form :model="form" class="mt-lg-5">
        <el-form-item label="Password">
          <el-input v-model="form.password" placeholder="8-number pin"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">GO</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div v-if="!lock">
      <h3 style="text-align: left; font-style: italic; font-family: 楷体" class="my-5">To 过过:</h3>
      <el-divider></el-divider>

      <el-timeline>

        <el-timeline-item
            v-for="mail in mails"
            :timestamp="mail.time"
            :key="mail.time"
            placement="top">

          <MailMessage
              v-for="(msg, index) in mail.messages"
              :key="index"
              :on-left="msg.onLeft"
              :is-small-width="isSmallWidth"
              :content="msg.content">

          </MailMessage>

        </el-timeline-item>
        
      </el-timeline>
    </div>

  </div>

</template>

<script>

import MailMessage from "@/components/Mail/MailMessage";

export default {
  name: "ToGuoguo",
  components: {MailMessage},

  data(){
    return{
      lock: true,
      isSmallWidth: false,
      form:{
        password: ''
      },
      mails: [
          // 2/12
        {
          time: "2021 / 02 / 12",
          messages: [
            {
              onLeft: true,
              content: "哦斯！所以这就是我想出来的，所谓新形式啦。实际的效果比我设想的还是要逊色不少，不过目前我只能做到如此了，抽了点时间快速把这个系统搭建了一下，" +
                  "然后就要去写作业了＞皿＜\n\n" +
                  "那么如你所见呢，做了这个系统就可以不定时更新啦，但是你不知道我什么时候会更新（甚至我自己都不知道），是不是有一种偶尔去信箱看一看信有没有到内味了？"

            },
            {
              onLeft: false,
              content: "巴拉巴拉，说这么好听，不就是为了掩饰你没有好好写稿子么？"
            },
            {
              onLeft: true,
              content: "What the heck? 你是谁？你怎么进来的？"
            },
            {
              onLeft: false,
              content: "我 是 你 的 内 心 哟 ~ \n\n你难道忘了吗，你以前写信的时候，我不就是不是冒出来和你对话的嘛！这是我们的风格啊！" +
                  "之前我经常以蜘蛛侠的形象出现，但是鉴于你最近沉迷特摄剧，我就换一个姿态喽，怎么样？"
            },
            {
              onLeft: true,
              content: "嗖嘎，我好像记得你，你就是Cross……还是叫莫天来着？算了，那都不重要……重要的是，"
            },
            {
              onLeft: false,
              content: "喂，喂，什么怎么的就不重要了？喂！"
            },
            {
              onLeft: true,
              content: "今天就是开个小头，之后我空闲下来的时候会再好好写稿的！撒，那就等下次的更新吧~"
            },
            {
              onLeft: false,
              content: "居然无视我，太无礼了！哼，あばよ！"
            },
          ]
        },
          //
      ]
    }
  },

  methods: {
    onSubmit() {
      console.log(this.form.password);
      const currDate = new Date();

      let year = currDate.getFullYear();
      let month = currDate.getMonth() + 1;
      let date = currDate.getDate();

      if (month < 10){
        month = '0' + month;
      }

      if (date < 10){
        date = '0' + date;
      }

      let psw = '' + year + month + date;

      if (psw == this.form.password){
        this.lock = false;
      }
    },

    checkWidthSize: function ()
    {
      //console.log('get Card Width')

      let windowWidth = window.innerWidth;

      let out = false;

      if (windowWidth < 768){
        out = true;
      }

      return out;
    }
  },

  created() {
    this.lock = true;
    this.isSmallWidth = this.checkWidthSize();
  },

  mounted() {
    window.onresize = () => {
      this.isSmallWidth = this.checkWidthSize();
    }
  }
}
</script>

<style scoped>

</style>