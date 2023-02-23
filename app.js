let http = require("http");
let fs = require("fs");
let querystring = require("querystring")

var data = fs.readFileSync('data2.json', 'utf8');
// let pdata=JSON.parse(data);
http.createServer(
	function (req, res) {
		var reqData;

		
		res.writeHead(202, { 'Content-type': 'text/html' });
		if (req.method == "GET") {
			// get query params as object
			if (req.url.indexOf('?') >= 0) {
				reqData = querystring.parse(req.url.replace(/^.*\?/, ''));
			}
			data = JSON.parse(data);
			let user = data.find(user => user.age == reqData.id )
			console.log('user',user);
			res.end(JSON.stringify(user));
		}


		else if (req.method == "POST") {

			//parsing data

			let pdata = JSON.parse(data);
			console.log(pdata);


			//get data
			let d2 = "";
			req.on('data', (d) => {
				d2 += d;
			})
			req.on('end', (d) => {
				d2 = JSON.parse(d2);
				console.log(d2);
				let resdata = pdata.push(d2);
				console.log(pdata);
				// data=JSON.stringify(data);
				// console.log(data+1);
				pdata = JSON.stringify(pdata);
				console.log(pdata);
				fs.writeFile("data2.json", pdata, "utf-8", function (err) {
					console.log('added');
				});
			})
			//  let dt=JSON.stringify(data);

			res.end();
		}


		//put method
		else if (req.method == "PUT") {
			//parsing data

			let pdata = JSON.parse(data);
			console.log(pdata);

			let d2 = "";
			req.on('data', (d) => {
				d2 += d;
			})
			req.on('end', (d) => {
				d2 = JSON.parse(d2);
				let imail = d2.mail;

				//email check
				let a = JSON.parse(data);
				let arr = [];
				for (let i = 0; i < a.length; i++) {
					arr.push(a[i].mail);
				}
				console.log(arr);
				let ans = arr.includes(imail);
				console.log(ans);
				if (!ans) {
					let resdata = pdata.push(d2);
					pdata = JSON.stringify(pdata)
					fs.writeFile("data2.json", pdata, "utf-8", function (err) {
						console.log('added');
					});
				}
				else {
					console.log(" already present");
				}


			})

		}



		else if (req.method == "DELETE") {

			//parsing data

			let pdata = JSON.parse(data);
			console.log(pdata);

			//getting dta
			let d2 = "";
			req.on('data', (d) => {
				d2 += d;
			})
			req.on('end', (d) => {
				d2 = JSON.parse(d2);
				let uage = d2.age;
				console.log(uage);


				//finding index 
				let arr = [];
				for (let i = 0; i < pdata.length; i++) {
					arr.push(pdata[i].age);
				}

				let delIndex = arr.findIndex((i) => i == uage);
				console.log(delIndex);
				let temp = pdata.splice(delIndex, 1);
				pdata = JSON.stringify(pdata);
				fs.writeFile("data2.json", pdata, "utf-8", function (err) {
					console.log("deleted sucessfully");
				})
			})

		}

		res.end();
	}
).listen(6000)
