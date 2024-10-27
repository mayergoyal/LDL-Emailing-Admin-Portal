const express=require("express");
const bodyparser=require("body-parser");
const nodemailer=require("nodemailer");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(bodyparser.urlencoded({extended:true})); //this is for body parsing the request body in readble form , this urlencoded means whatever the url is fetching the data in encoded format , extended parameter is used for handling complex data structures like nested objects , but is extended is set to be false then it takes only key value pairs into consideration
//app.use(express.static('public')); //serve static html files from the public folder
app.use(bodyparser.json())
const uri ="mongodb+srv://mayermongo:mayermongo@mayercluster.uujbdu5.mongodb.net/?retryWrites=true&w=majority&appName=mayercluster";
const mongoose=require('mongoose');
mongoose.connect(uri)
.then(()=>{
  console.log("connected to mongodb successfully");
})
.catch((error)=>{
 console.error("error ",error);
})
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    donationAmount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);



//route to send mails 
app.post('/sendemail',(req,res)=>{
  console.log(req.body);
    const { name, email, donationAmount } = req.body;
    console.log("nahi ho rah akya" ,name,email)
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "goyalmayer2@gmail.com",
        pass: "qupgoyojmefqndib",
      },
      tls: {
        rejectUnauthorized: false,
      },
      connectionTimeout: 10000, // 10 seconds
      timeout: 20000,
    });


    //Email content 
const mailoptions = {
  from: "goyalmayer2@gmail.com",
  to: email,
  subject: "Thankyou for your donation",
  html: `  <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f4f4f4;">
      <h1 style="color: #28a745;">Thank You, ${name}!</h1>
      <!-- Adding an image -->
      <img src="https://media.gettyimages.com/id/925644610/photo/rural-girls-studying-in-light-bulb.jpg?s=612x612&w=0&k=20&c=AjcSUuu6Ij96Yjm6AZQVDjcPczyciTDrJh0zxkzhxDw=" />
      <p style="font-size: 16px;">We sincerely appreciate your generous donation to our cause. Your support helps us continue our work and make a difference.
      The amount you donated was not just money that u gave but its actually a big contribution toward the children .
      Team LDL JIIT wishes all your health and well being .
      Its so beautiful to see you becoming the part of our <b>CHANGE</b> .
      We wish for a healthy & prosperous Deewali !!
      </p>
      
      
      
      <p style="font-size: 14px; color: #555;">
        Best regards,<br>Team LDL JIIT
      </p>
    </div>
    `,
};

     transporter.sendMail(mailoptions);
    res.send('email sent successfully');

//storing data in database
const newuser = new User({
  name: name,
  email: email,
  donationAmount: donationAmount,
});
newuser
  .save()
  .then((user) => {
    console.log("user saved ", user);
  })
  .catch((error) => {
    console.error("Error saving user:", error);
  });


});
//for user saving 
app.get('/users',async(req,res)=>{
  try{
    const users=await User.find();
   res.status(200).json(users);
  }
  catch(error){
    res.status(500).json({message:"errro agyo ",error})
  }
})

//start the server
const PORT =5000;
app.listen( PORT ,()=>{
    console.log("server is running "+PORT);
})
module.exports = User;