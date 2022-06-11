// const express = require('express');
// const router = express.Router();
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({extended: true}))

// const sendEmail = require("../utils/sendEmail");

// router.post("/send-email", async (req, res, next) => {
//   // const message = `hello`
//   // const email =`himanshu.zestbrains@gmail.com`
//   const email = req.body.email
//   // const info = req.body.info
//   console.log(email)
//   // console.log(info)
//   try {
//     await sendEmail({
//       email,
//       // email: req.body.email
//       //  subject: "Password reset", 
//       //  info
//     });

//       res.send("password reset sucessfully.");
//   } catch (error) {
//       res.send("An error occured");
//       console.log(error);
//   }
// });

// // router.post("/send-email", async (req, res, next) => {
// //   const email = req.body.email
// //   console.log(email)
// //   SENDGRID_RESET_TEMPLATEID=d-wefiniwnef1ewf848erg18er8
// //     try {
// //         await sendEmail({
// //             email,
// //             templateId: process.env.SENDGRID_RESET_TEMPLATEID,
// //             data: {
// //                 reset_url: resetPasswordUrl
// //             }
// //         });

// //         res.status(200).json({
// //             success: true,
// //             message: `Email send`,
// //         });

// //     }  catch (error) {
// //         res.send("An error occured");
// //         console.log(error);;
// //     }
// // });
// // app.get('/test',(req,res)=>{
// //   let image_path = path.join(__dirname+'public/','logo.png');
// //   console.log('image_path==',image_path);

// //   let subject = 'Welcome To Website';
// //   let to = 'to send mail';
// //   let parameters = {
// //       name: 'James',
// //       image_path:image_path
// //   };
// //   let html = ejs.render(fs.readFileSync(__dirname+`/../views/auth/welcome.ejs`).toString(), parameters);
// //   let response:any = await this.sendMail(to, html, subject).then((data:any)=>{return data}).catch(error => { return error });
// //   return response;

// // });
 

// module.exports = router; 

  