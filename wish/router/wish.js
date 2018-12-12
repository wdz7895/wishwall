 const express = require("express");
const router = express.Router();
const wishMd =require("../modules/wishMd.js");
//写入数据接口
router.post("/xieru",wishMd._xieru);

//获取数据接口
router.get("/huoqu",wishMd._huoqu)

//删除一条数据
router.post("/del",wishMd._del)

//变色
router.post("/bs",wishMd._bs)

//获取content
router.post("/huoqu",wishMd._hq)
module.exports = router;