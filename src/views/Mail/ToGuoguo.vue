<template>

  <div class="container">

<!--    <el-button @click="lock = !lock"> Lock </el-button>-->

    <!--    Content-->
    <transition name="el-zoom-in-top">

      <div v-show="!lock">

        <el-row type="flex" justify="end">
          <el-col :span="12" align="right">

            <el-select v-model="timeReverse" placeholder="请选择" class="mt-5">
              <el-option
                  v-for="item in options"
                  :key="item.label"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>

          </el-col>
        </el-row>


        <h3 style="text-align: left; font-style: italic; font-family: 楷体" class="my-1">To 过过:</h3>

        <el-divider></el-divider>

        <el-timeline :reverse="this.timeReverse">

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

    </transition>

<!--    Login-->
    <div class="container mt-5" v-if="lock">
      <el-row>
        <el-col :span="12" :offset="6">
          <el-image
              :src="require('@/assets/img/mail-logo.jpg')">
          </el-image>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="16" :offset="4">

          <el-form :model="form" :inline="true">
            <el-form-item label="Password" >
              <el-input v-model="form.password" placeholder="8-number pin" ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit" plain>Open</el-button>
            </el-form-item>
          </el-form>

        </el-col>
      </el-row>
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
      timeReverse: true,

      options:[
        {value: false, label:"时间顺序"},
        {value: true, label:"时间倒序"}
      ],

      form:{
        password: ''
      },

      mails: [
        // ----------------------------------------- 2/12
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
              content: "我 是 你 的 内 心 哟 ~ \n\n你难道忘了吗，你以前写信的时候，我不就时不时冒出来和你对话的嘛！这是我们的风格啊！" +
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
            }
          ]
        },
        // ----------------------------------------- 3/27
        {
          time: "2021 / 04 / 10",
          messages: [
            {
              onLeft: true,
              content: "Dear 过过，\n" +
                  "    我发现，夏天是有味道的。\n" +
                  "    前两天出门，没有看天气就套上了羽绒服，结果走到街上才发现室外已经22度了。明明才四月份，却感觉好像夏天已经来了。回来之后，我打开房间的窗户，外面吹进来不冷不热的风，也顺便把外面世界的嘈杂声一并带了进来，风里面有一股若隐若现的气味，仿佛在哪里闻到过。\n" +
                  "    我想起来我刚刚来到芝城，正是盛夏的时候，那天晚上我就直接睡在地上，窗户应该也是开着的，夜晚的风吹进来，一起进来的还有车辆往来的声音，时不时响起的警笛声，还有风城的风声。那时的风里，似乎也有这样一股味道。\n" +
                  "    这可能就是夏天的味道吧。\n" +
                  "    四月离真正的夏天还是有一段距离的，这两天下了雨，气温又降了下去。但是我始终可以感受到空气中那种夏天的味道，可能是这个冬天实在太长了，也可能是我不知不觉对新的夏天已经迫不及待了。\n" +
                  "    三月是寒冷的。于我而言，今年的三月是忙碌的，焦虑的，冬季学期在三月份迎来期末，我一边要完成两门课的期末作业，一边也在为实习工作投简历和面试。最难熬的就是在面试完之后，等待结果的那几天，简直茶饭不香。\n" +
                  "    三月是炙热的。压力让我一定程度上小胜我的拖延症，我顺利完成了我的期末作业，甚至是超前完成了。而面试也终于尘埃落定，在这里容我跟你分享我的一个好消息，我通过了面试，成功拿到腾讯暑期实习的offer啦！\n" +
                  "    所以，我六月底就要回国了，虽然还没毕业，但是最后一个秋季学期我是准备在国内上网课完成，然后，我就毕业了。我的学生生涯，就要结束了。\n" +
                  "    这也是这一年多来，我第一次清晰的感觉到，我要回去了。很多次我妈跟我微信视频的时候要我赶紧回国，我都说还早还早，因为我也不知道我什么时候会回去，或者说我没有给自己这样的念想。但是现在我无比真切的感受到，我就是回去了，并且回去以后还有一份自己理想的工作，虽然还只是实习生。但是这是一个很好的开始。\n" +
                  "    明明才四月份，却感觉夏天已经来了……希望夏天已经来了。\n"
            },
            {
              onLeft: false,
              content: "呦呦呦，这文本量，下功夫了嘛！让我看看你都写了啥……"
            },
            {
              onLeft: true,
              content: "又是你！哎，这不距离上次更新已经过去了快两个月了嘛。正好各个事情都告一段落了，新的学期又开始了，趁着还没有忙起来，小小总结一下。"
            },
            {
              onLeft: false,
              content: "你这总结了个啥玩意！等等，我瞅着你这文本内容是不是少了点什么啊……"
            },
            {
              onLeft: true,
              content: "嗯？少了什么？"
            },
            {
              onLeft: false,
              content: "你说呢小伙子，为什么我的形象现在变成了这个而不再是蜘蛛侠了。据我所知，你一直想聊一聊你之前看奥特曼看哭了那件事，本来计划是要写进这一次更新的吧！"
            },
            {
              onLeft: true,
              content: "啊哈哈哈……好像是有这么一回事哦。但是感觉现在这个文本结构下，奥特曼好像插不进去啊，下次吧要不？"
            },
            {
              onLeft: false,
              content: "喂！你特么……！"
            },
            {
              onLeft: true,
              content: "撒，下次更新再见！"
            },
            {
              onLeft: false,
              content: "喂喂！岂可修！更新那么慢，溜得倒挺快。"
            }
          ]
        },
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
        this.$notify({
          title: "Welcome back, 过过！",
          message: "你猜我有没有更新呢",
          iconClass: "el-icon-loading"
        })
      }
      else{
        this.$message.error({
          message: "Wrong Password!",
          duration: 1500
        });
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