/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Articles from '../api/articles/articles.model';

Articles.find({}).removeAsync()
  .then(() => {
    Articles.create(
    {
      rel: 0,
      item:
      {
        id:2,
        topic_id:10,
        title:"3个月100万，来看看新西兰官员的公款消费",
        content:"<p></p><section class=\"main1\" style=\"margin: 0.5em 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); white-space: normal; border-width: 0px 0px 1px; border-bottom-style: solid; border-color: rgb(245, 15, 63); display: inline-block; font-family: 微软雅黑; font-size: 13px; line-height: 1em; overflow: hidden; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);\"><section class=\"main2\" style=\"margin: 0px; padding: 0.2em; max-width: 100%; border: 0px; display: inline-block; height: 2.8em; line-height: 1em; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(245, 15, 63);\"><section class=\"main3\" style=\"margin: 0px; padding: 0px; max-width: 100%; border: 0px; color: rgb(255, 255, 255); line-height: 1em; font-family: inherit; font-size: 2.5em; box-sizing: border-box !important; word-wrap: break-word !important;\"><span style=\"font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 16px;\">即日起</span></section></section><section class=\"main4\" style=\"margin: 0px; padding: 0.2em; max-width: 100%; border: 0px; display: inline-block; color: rgb(42, 52, 58); line-height: 1em; font-family: inherit; font-size: 1.5em; box-sizing: border-box !important; word-wrap: break-word !important;\"><span style=\"font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 16px;\">递交申请新西兰签证</span></section></section><p></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; white-space: pre-wrap; color: rgb(62, 62, 62); font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; line-height: 25.6000003814697px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);\"><span style=\"font-family: 微软雅黑, 'Microsoft YaHei'; margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 16px;\"><strong style=\"margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;\"><span style=\"font-family: 微软雅黑, 'Microsoft YaHei'; margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 18px; color: rgb(68, 68, 68); line-height: 24px;\">所有纸质材料都必须要提供彩色复印件，或是等尺寸的清晰彩色扫描打印件，所谓纸质材料，包括：</span></strong><br style=\"margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;\"/></span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; white-space: pre-wrap; color: rgb(62, 62, 62); font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif; line-height: 25.6000003814697px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);\"><br style=\"margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;\"/></p><h2 style=\"margin: 8px 0px 0px; padding: 0px; font-weight: normal; font-size: 16px; max-width: 100%; white-space: normal; border: 0px; font-family: 微软雅黑; height: 32px; text-align: justify; color: rgb(240, 10, 57); line-height: 18px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);\"><span style=\"margin: 0px; padding: 0px 2px 3px; max-width: 100%; border: 0px; line-height: 28px; float: left; display: block; box-sizing: border-box !important; word-wrap: break-word !important; font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 16px;\"><span class=\"i_num\" style=\"margin: 0px 8px 0px 0px; padding: 4px 10px; max-width: 100%; line-height: 28px; float: left; display: block; font-size: 18px; color: rgb(255, 255, 255); background-color: rgb(240, 10, 57);\">1</span><strong class=\"ue_t\" style=\"margin: 0px; padding: 0px; max-width: 100%; border: 0px; box-sizing: border-box !important; word-wrap: break-word !important;\">身份证复印件</strong></span></h2><h2 style=\"margin: 8px 0px 0px; padding: 0px; font-weight: normal; font-size: 16px; max-width: 100%; white-space: normal; border: 0px; font-family: 微软雅黑; height: 32px; text-align: justify; color: rgb(240, 10, 57); line-height: 18px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);\"><span style=\"margin: 0px; padding: 0px 2px 3px; max-width: 100%; border: 0px; line-height: 28px; float: left; display: block; box-sizing: border-box !important; word-wrap: break-word !important; font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 16px;\"><span class=\"i_num\" style=\"margin: 0px 8px 0px 0px; padding: 4px 10px; max-width: 100%; line-height: 28px; float: left; display: block; font-size: 18px; color: rgb(255, 255, 255); background-color: rgb(240, 10, 57);\">2</span><strong class=\"ue_t\" style=\"margin: 0px; padding: 0px; max-width: 100%; border: 0px; box-sizing: border-box !important; word-wrap: break-word !important;\">护照首页复印件2张</strong></span></h2><h2 style=\"margin: 8px 0px 0px; padding: 0px; font-weight: normal; font-size: 16px; max-width: 100%; white-space: normal; border: 0px; font-family: 微软雅黑; height: 32px; text-align: justify; color: rgb(240, 10, 57); line-height: 18px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);\"><span style=\"margin: 0px; padding: 0px 2px 3px; max-width: 100%; border: 0px; line-height: 28px; float: left; display: block; box-sizing: border-box !important; word-wrap: break-word !important; font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 16px;\"><span class=\"i_num\" style=\"margin: 0px 8px 0px 0px; padding: 4px 10px; max-width: 100%; line-height: 28px; float: left; display: block; font-size: 18px; color: rgb(255, 255, 255); background-color: rgb(240, 10, 57);\">3</span><strong class=\"ue_t\" style=\"margin: 0px; padding: 0px; max-width: 100%; border: 0px; box-sizing: border-box !important; word-wrap: break-word !important;\">结婚证复印件（如需）</strong></span></h2><h2 style=\"margin: 8px 0px 0px; padding: 0px; font-weight: normal; font-size: 16px; max-width: 100%; white-space: normal; border: 0px; font-family: 微软雅黑; height: 32px; text-align: justify; color: rgb(240, 10, 57); line-height: 18px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);\"><span style=\"margin: 0px; padding: 0px 2px 3px; max-width: 100%; border: 0px; line-height: 28px; float: left; display: block; box-sizing: border-box !important; word-wrap: break-word !important; font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 16px;\"><span class=\"i_num\" style=\"margin: 0px 8px 0px 0px; padding: 4px 10px; max-width: 100%; line-height: 28px; float: left; display: block; font-size: 18px; color: rgb(255, 255, 255); background-color: rgb(240, 10, 57);\">4</span><strong class=\"ue_t\" style=\"margin: 0px; padding: 0px; max-width: 100%; border: 0px; box-sizing: border-box !important; word-wrap: break-word !important;\">户口本复印件</strong></span></h2><h2 style=\"margin: 8px 0px 0px; padding: 0px; font-weight: normal; font-size: 16px; max-width: 100%; white-space: normal; border: 0px; font-family: 微软雅黑; height: 32px; text-align: justify; color: rgb(240, 10, 57); line-height: 18px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);\"><span style=\"margin: 0px; padding: 0px 2px 3px; max-width: 100%; border: 0px; line-height: 28px; float: left; display: block; box-sizing: border-box !important; word-wrap: break-word !important; font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 16px;\"><span class=\"i_num\" style=\"margin: 0px 8px 0px 0px; padding: 4px 10px; max-width: 100%; line-height: 28px; float: left; display: block; font-size: 18px; color: rgb(255, 255, 255); background-color: rgb(240, 10, 57);\">5</span><strong class=\"ue_t\" style=\"margin: 0px; padding: 0px; max-width: 100%; border: 0px; box-sizing: border-box !important; word-wrap: break-word !important;\">雅思成绩（可提供原件）</strong></span></h2><h2 style=\"margin: 8px 0px 0px; padding: 0px; font-weight: normal; font-size: 16px; max-width: 100%; white-space: normal; border: 0px; font-family: 微软雅黑; height: 32px; text-align: justify; color: rgb(240, 10, 57); line-height: 18px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);\"><span style=\"margin: 0px; padding: 0px 2px 3px; max-width: 100%; border: 0px; line-height: 28px; float: left; display: block; box-sizing: border-box !important; word-wrap: break-word !important; font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 16px;\"><span class=\"i_num\" style=\"margin: 0px 8px 0px 0px; padding: 4px 10px; max-width: 100%; line-height: 28px; float: left; display: block; font-size: 18px; color: rgb(255, 255, 255); background-color: rgb(240, 10, 57);\">6</span><strong class=\"ue_t\" style=\"margin: 0px; padding: 0px; max-width: 100%; border: 0px; box-sizing: border-box !important; word-wrap: break-word !important;\">工作证明（可提供原件）</strong></span></h2><h2 style=\"margin: 8px 0px 0px; padding: 0px; font-weight: normal; font-size: 16px; max-width: 100%; white-space: normal; border: 0px; font-family: 微软雅黑; height: 32px; text-align: justify; color: rgb(240, 10, 57); line-height: 18px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);\"><span style=\"margin: 0px; padding: 0px 2px 3px; max-width: 100%; border: 0px; line-height: 28px; float: left; display: block; box-sizing: border-box !important; word-wrap: break-word !important; font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 16px;\"><span class=\"i_num\" style=\"margin: 0px 8px 0px 0px; padding: 4px 10px; max-width: 100%; line-height: 28px; float: left; display: block; font-size: 18px; color: rgb(255, 255, 255); background-color: rgb(240, 10, 57);\">7</span><strong class=\"ue_t\" style=\"margin: 0px; padding: 0px; max-width: 100%; border: 0px; box-sizing: border-box !important; word-wrap: break-word !important;\">其他证明材料复印件</strong></span></h2><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; white-space: normal; border: 0px; color: rgb(68, 68, 68); font-family: 微软雅黑; font-size: 13px; line-height: 24px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);\"><br style=\"margin: 0px; padding: 0px; max-width: 100%; border: 0px; box-sizing: border-box !important; word-wrap: break-word !important;\"/></p><h2 data-page-model=\"title\" style=\"margin: 25px 0px 20px; padding: 5px 0px 10px 7px; font-weight: 100; font-size: 22px; max-width: 100%; white-space: normal; border-width: 2px 0px 0px; border-top-style: solid; border-top-color: rgb(242, 13, 60); font-family: 微软雅黑; clear: both; line-height: 35px; color: rgb(242, 13, 60); box-sizing: border-box !important; word-wrap: break-word !important; background-image: url(http://imgqn.koudaitong.com/upload_files/2015/06/11/e61aa475035d0807c69cb348e709f0fc.png); background-color: rgb(255, 255, 255); background-position: 0px 100%; background-repeat: repeat-x;\"><span style=\"margin: 0px; padding: 0px; max-width: 100%; font-size: 16px; box-sizing: border-box !important; word-wrap: break-word !important; font-family: 微软雅黑, 'Microsoft YaHei';\">近期提交材料但未提供彩色复印件的申请，移民局会接受材料受理，但是有权通知您进行彩色复印件的补交。</span></h2><p><br/></p>",
        images:[{
              url:"http://app.nzinfo.cn/images/upload/one_20140819090510811.jpg"
            }],
        user_id:10,
        gmt_create:"2016-04-04 05:00:57",
        simple:0,
        comment_count:0,
        digg_count:0,
        is_owner:0,
        favourite:0,
        nick:"skysbird",
        avatar:"http://app.nzinfo.cn/images/upload/267f9e2f07082838724a43bdba99a9014d08f1d0.jpg",
        vip_flag:0,
        vip_desc:"",
        digg:0
      }
    },
    {
       rel: 0,
       item:
       {
        id:2,
        topic_id:10,
        title:"南半球历史最悠久的”农学院“---林肯大学",
        content:"<p><span style=\"font-family: 微软雅黑, sans-serif; font-size: 16px; line-height: 24px;\">林肯大学始建于1878年，为新西兰历史最悠久的学府之一，前身是坎特伯雷农学院。大学现屹立于新西兰八所公立大学之中，也是世界闻名的综合性学府。720名来自58个国家的学生就读于林肯大学的31个专业。20%的海外学生在林肯大学就读研究生，海外学生可在自己的国家完成部分研究课程，还可以申请奖学金。<br/></span></p><p style=\"text-align:center\"><img src='http://app.nzinfo.cn/images/loading.gif' data-echo=\"http://app.nzinfo.cn/images/upload/20150807/1438922249989116.png_gz\"></p><p><br/></p><p style=\"margin-top:5px;margin-right:0;margin-bottom:0;margin-left: 0;margin-bottom:0;line-height:24px\"><span style=\"font-size: 16px; font-family: 微软雅黑, 'Microsoft YaHei';\">学校以农业、园艺、及商科为主，有学士、硕士及博士学位。学校主要重心是研究为主，并且有许多研究的计划正在进行，并提供新西兰全国农业的新技术与品种改良。新西兰向来以农业立国，并以许多先进的农业生化技术傲视全球，所以当全世界其他地区正忧患着许多农业病，如疯牛症或者草中含有毒素等，新西兰都没有这类问题，这全是因为新西兰有一个很好的农业大学在背后作技术支援，使得其农产品能以最古老最安全的方法达到最高效益。</span></p><p style=\"margin-top:5px;margin-right:0;margin-bottom:0;margin-left: 0;margin-bottom:0;line-height:24px\"><span style=\"font-size: 16px; font-family: 微软雅黑, 'Microsoft YaHei';\"> </span></p><p style=\"margin-top:5px;margin-right:0;margin-bottom:0;margin-left: 0;margin-bottom:0;line-height:24px\"><span style=\"font-size: 16px; font-family: 微软雅黑, 'Microsoft YaHei';\">开设的专业专业包括经济管理、农业科学、酒店管理、旅游、计算机应用、应用科学、社会科学、机械工程、自然资源工程等方面。大学设有大学预科、单科证书、大专证书、学士学位、研究生学位等多种证书和学位。早期的林肯大学在农、林业的研究上有极高的声誉。在保持领先专业的基础上，又增设了适应社会需求的热门专业，像商业、旅游业等。林肯大学还是少数新西兰几个开设了酒店管理专业的大学之一。</span></p><p style=\"margin-top:5px;margin-right:0;margin-bottom:0;margin-left: 0;margin-bottom:0;line-height:24px\"><span style=\"font-size: 16px; font-family: 微软雅黑, 'Microsoft YaHei';\"> </span></p><p style=\"margin-top:5px;margin-right:0;margin-bottom:0;margin-left: 0;margin-bottom:0;line-height:24px\"><span style=\"font-size: 16px; font-family: 微软雅黑, 'Microsoft YaHei';\">坐落于新西兰第三大城市——基督城的近郊的林肯大学，离市中心仅20分钟车程，距基督城国际机场20多公里。为南半球最著名的农业大学，近五十公顷的校区以及周围的730公顷的农场及花园，另外学校还有其他约1000公顷的农地在坎特布雷省，土地资源相当丰富。大学校园风景秀丽，环境宜人。这里气候温和，一月最高气温为22°C ，七月最高气温为11°C。</span></p><p><br/></p><p style=\"text-align:center\"><img src='http://app.nzinfo.cn/images/loading.gif' data-echo=\"http://app.nzinfo.cn/images/upload/20150807/1438922319910557.png_gz\"></p><p><br/></p><p style=\"margin-top:5px;margin-right:0;margin-bottom:0;margin-left: 0;margin-bottom:0;line-height:24px\"><span style=\"font-size: 16px; font-family: 微软雅黑, 'Microsoft YaHei';\">此大学原先以农业学校之名，於1878年成立，之后於1896年改制为学院，於1930年成为独立自治的大学，属健康成长型大学。学生人数刚超过14,000且每年不断成长，其中一半来自海外各地。</span></p><p style=\"margin-top:5px;margin-right:0;margin-bottom:0;margin-left: 0;margin-bottom:0;line-height:24px\"><span style=\"font-size: 16px; font-family: 微软雅黑, 'Microsoft YaHei';\"> </span></p><p style=\"margin-top:5px;margin-right:0;margin-bottom:0;margin-left: 0;margin-bottom:0;line-height:24px\"><span style=\"font-size: 16px; font-family: 微软雅黑, 'Microsoft YaHei';\">林肯UniversityLincoln大学是一所私立，非赢利性，无派系的大学,总部设在美国加利福尼亚州奥克兰。</span></p><p style=\"margin-top:5px;margin-right:0;margin-bottom:0;margin-left: 0;margin-bottom:0;line-height:24px\"><span style=\"font-size: 16px; font-family: 微软雅黑, 'Microsoft YaHei';\"> </span></p><p style=\"margin-top:5px;margin-right:0;margin-bottom:0;margin-left: 0;margin-bottom:0;line-height:24px\"><span style=\"font-size: 16px; font-family: 微软雅黑, 'Microsoft YaHei';\">该大学的公开宣布的目标是建立一个种族和不同文化间的学习环境，这反映在它的学生和工作人员谁是真正的国际化的起源和前景上。校园是一个缩影，在二十一世纪的全球社会。在最近几年的教育，其在美国出生的学生已经丰富了学生的入学率从40多个不同国家。</span></p><p style=\"margin-top:5px;margin-right:0;margin-bottom:0;margin-left: 0;margin-bottom:0;line-height:24px\"><span style=\"font-size: 16px; font-family: 微软雅黑, 'Microsoft YaHei';\"> </span></p><p style=\"margin-top:5px;margin-right:0;margin-bottom:0;margin-left: 0;margin-bottom:0;line-height:24px\"><span style=\"font-size: 16px; font-family: 微软雅黑, 'Microsoft YaHei';\">林肯大学是新西兰八所国立大学之一，以农业专业的教学、科研而著名，师资力量雄厚，教学设备完善，承担着许多农业专业人才的培养项目，积累了丰富的教学经验。农业和园艺为其优势专业，同时商科的教育和研究在新西兰也享有盛誉。作为新西兰的知名大学，林肯大学致力于众多领域的教学和科研，能够提供国际认可的各种学位和毕业文凭，具有最高的留学生比例、丰富的海外教学项目和一应俱全的分学院(林肯国际学院)，同时还具有国际咨询与项目管理的专长，被誉为新西兰高等学院中最具国际化的一所大学。</span></p><p><br/></p><p style=\"text-align:center\"><img src='http://app.nzinfo.cn/images/loading.gif' data-echo=\"http://app.nzinfo.cn/images/upload/20150807/1438922429127642.png_gz\"></p><p><br/></p><p style=\"margin-top:5px;margin-right:0;margin-bottom:0;margin-left: 0;margin-bottom:0;line-height:24px\"><span style=\"font-size: 16px; font-family: 微软雅黑, 'Microsoft YaHei';\">林肯大学拥有各种便利的服务设施，像国际留学生服务中心、现代化大型图书馆、健康中心、勤工俭学中心等，为学生的学习和生活提供帮助。另外，大学在校园内设有学生宿舍，在校外拥有公寓和寄宿家庭，以满足学生们不同的住宿要求。银行、邮局、商场等公共设施也尽在大学左右。</span></p><p style=\"margin-top:5px;margin-right:0;margin-bottom:0;margin-left: 0;margin-bottom:0;line-height:24px\"><span style=\"font-size: 16px; font-family: 微软雅黑, 'Microsoft YaHei';\"> </span></p><p style=\"margin-top:5px;margin-right:0;margin-bottom:0;margin-left: 0;margin-bottom:0;line-height:24px\"><span style=\"font-size: 16px; font-family: 微软雅黑, 'Microsoft YaHei';\">当全球其他地区面临许多严重问题，如疯牛病或含毒素的草时，新西兰却没有类似难题，这全仰仗新西兰有一个杰出的农业大学在背后作强有力的技术支持。林肯大学主要以研究为主，在自然资源方面的独特研究使林肯大学在新西兰乃至世界领域保持领先。林肯大学在教学和研究上不断创造新高，享誉国际。特别是在工商企业管理、天然资源、自然科学等领域，成绩尤为卓著。</span></p><p style=\"margin-top:5px;margin-right:0;margin-bottom:0;margin-left: 0;margin-bottom:0;line-height:24px\"><span style=\"font-size: 16px; font-family: 微软雅黑, 'Microsoft YaHei';\"> </span></p><p style=\"margin-top:5px;margin-right:0;margin-bottom:0;margin-left: 0;margin-bottom:0;line-height:24px\"><span style=\"font-size: 16px; font-family: 微软雅黑, 'Microsoft YaHei';\">林肯大学有一个两层的图书馆，于1988年建立。图书馆的第二层刚进行过整修，成为一个现代化的图书馆。阅览室、休息室、会议厅、电脑房等功能一应俱全，电脑房共配置了35台电脑及22个电脑插口，二楼还有一个大的会议厅(可分割成4个小会议厅)。林肯大学计划下一步在图书馆的地下室及一楼配置更多的电脑设备、更新IT设备及设立几个会议厅以及公共活动区域。</span></p><p style=\"margin-top:5px;margin-right:0;margin-bottom:0;margin-left: 0;margin-bottom:0;line-height:24px\"><span style=\"font-size: 16px; font-family: 微软雅黑, 'Microsoft YaHei';\"> </span></p><p style=\"margin-top:5px;margin-right:0;margin-bottom:0;margin-left: 0;margin-bottom:0;line-height:24px\"><span style=\"font-size: 16px; font-family: 微软雅黑, 'Microsoft YaHei';\">林肯大学图书馆每年出借各种图书超过100,000册，2012年经阅读的电子刊物超过157,000部。图书馆还提供无线上网服务。学生凭学生证就能享受到图书馆的各种现代化服务。</span></p><p style=\"margin-top:5px;margin-right:0;margin-bottom:0;margin-left: 0;margin-bottom:0;line-height:24px\"><span style=\"font-size: 16px; font-family: 微软雅黑, 'Microsoft YaHei';\"> </span></p><p style=\"margin: 5px 0px 0px; line-height: 24px;\"><span style=\"font-size: 16px; font-family: 微软雅黑, 'Microsoft YaHei';\">林肯大学位于坎特伯雷大平原，环境优美</span><span style=\"font-family: 微软雅黑, 'Microsoft YaHei';\">，大学占地面积五十余公顷，拥有非常良好的生活和学习的环境，学校地理位置优越，距离新西兰南岛最大的城市基督城不到半个小时的路程，无论是到达基督城国际机场，还是游览新西兰著名旅游胜地，交通都十分便利。</span></p>",
        images:[{
              url:"http://app.nzinfo.cn/images/upload/1.png"
            }],
        user_id:10,
        gmt_create:"2016-04-04 05:00:57",
        simple:0,
        comment_count:0,
        digg_count:0,
        is_owner:0,
        favourite:0,
        nick:"skysbird",
        avatar:"http://app.nzinfo.cn/images/upload/267f9e2f07082838724a43bdba99a9014d08f1d0.jpg",
        vip_flag:0,
        vip_desc:"",
        digg:0
      }
    },
    {
       rel: 0,
       item:
       {
        id:2,
        topic_id:10,
        title:"3个月100万，来看看新西兰官员的公款消费",
        content:"3个月100万，来看看新西兰官员的公款消费",
        images:[{
              url:"http://app.nzinfo.cn/images/upload/one_20140819090510811.jpg"
            }],
        user_id:10,
        gmt_create:"2016-04-04 05:00:57",
        simple:0,
        comment_count:0,
        digg_count:0,
        is_owner:0,
        favourite:0,
        nick:"skysbird",
        avatar:"http://app.nzinfo.cn/images/upload/267f9e2f07082838724a43bdba99a9014d08f1d0.jpg",
        vip_flag:0,
        vip_desc:"",
        digg:0
      }
    },
    {
       rel: 0,
       item:
       {
        id:2,
        topic_id:10,
        title:"3个月100万，来看看新西兰官员的公款消费",
        content:"3个月100万，来看看新西兰官员的公款消费",
        images:[{
              url:"http://app.nzinfo.cn/images/upload/one_20140819090510811.jpg"
            }],
        user_id:10,
        gmt_create:"2016-04-04 05:00:57",
        simple:0,
        comment_count:0,
        digg_count:0,
        is_owner:0,
        favourite:0,
        nick:"skysbird",
        avatar:"http://app.nzinfo.cn/images/upload/267f9e2f07082838724a43bdba99a9014d08f1d0.jpg",
        vip_flag:0,
        vip_desc:"",
        digg:0
      }
    },
    {
       rel: 0,
       item:
       {
        id:2,
        topic_id:10,
        title:"3个月100万，来看看新西兰官员的公款消费",
        content:"3个月100万，来看看新西兰官员的公款消费",
        images:[{
              url:"http://app.nzinfo.cn/images/upload/one_20140819090510811.jpg"
            }],
        user_id:10,
        gmt_create:"2016-04-04 05:00:57",
        simple:0,
        comment_count:0,
        digg_count:0,
        is_owner:0,
        favourite:0,
        nick:"skysbird",
        avatar:"http://app.nzinfo.cn/images/upload/267f9e2f07082838724a43bdba99a9014d08f1d0.jpg",
        vip_flag:0,
        vip_desc:"",
        digg:0
      }
    });
  });




Thing.find({}).removeAsync()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
