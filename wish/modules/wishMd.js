const dbPlugin = require("./db.js")
const db = new dbPlugin("wBox")

module.exports = {
	_xieru(req,res){
		let data = req.body;
		data.time = new Date()
		db.insertOne("wish",data,(err,data)=>{
			if(err) throw err
			res.send({
				status:"1",
				statusText:"添加成功",
			})
		})
	},
	_huoqu(req,res){
		db.find("wish",{},(err,spdata)=>{
			if(err) throw err
			res.send(spdata)
		})
	},
	_del(req,res){
		let data = req.body
		db.deleteById("wish",data._id,(err,spdata)=>{
			if(err) throw err
			res.send(spdata)
		})
	},
	_hq(req,res){
		let data = req.body
		db.findById("wish",data._id,(err,spdata)=>{
			if(err) throw err
			res.send(spdata)
		})
	},
	_bs(req,res){
		let data = req.body
		console.log(data)
		let newData = {}
		newData.content = data.content
		newData.right = "yes"
		console.log(newData)
		db.updateById("wish",data._id,newData,(err,spdata)=>{
			if(err) throw Error
			res.send(spdata)
		})
	}
}

