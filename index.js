const express = require("express");
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const xlsx = require("xlsx");
const fs = require("fs");
app.use(cors());
require("dotenv").config();
app.use(bodyparser.urlencoded({ extended: true })); //this is for body parsing the request body in readble form , this urlencoded means whatever the url is fetching the data in encoded format , extended parameter is used for handling complex data structures like nested objects , but is extended is set to be false then it takes only key value pairs into consideration
//app.use(express.static('public')); //serve static html files from the public folder
app.use(bodyparser.json());
const uri = process.env.mongo_url;
const mongoose = require("mongoose");
const email_name = process.env.email_name;
const email_pass = process.env.email_pass;
const port_name = process.env.port_name;
mongoose
  .connect(uri)
  .then(() => {
    console.log("connected to mongodb successfully");
  })
  .catch((error) => {
    console.error("error ", error);
  });
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
//NEW YEAR SERVER SIDE
app.post("/sendemail1", (req, res) => {
  console.log(req.body);
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send("Name and email are required");
  }
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: email_name,
      pass: email_pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
    connectionTimeout: 10000, // 10 seconds
    timeout: 20000, // 20 seconds
  });

  const mailOptions = {
    from: email_name,
    to: email,
    subject: `Happy New-Year ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f4f4f4; line-height: 1.6; max-width: 600px; margin: auto; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
  <h1 style="color: #28a745; margin-bottom: 20px;">Happy New Year, ${name}!</h1>
  <img src="https://img.freepik.com/premium-photo/cute-illustration-children-celebrating-new-year-2025-with-festive-winter-attire-cheerful-expr_1352657-450.jpg" alt="Happy New Year Image" style="width: 100%; max-width: 400px; border-radius: 10px; margin-bottom: 20px;" />
  
  <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
    A great New-Year folks!! <br />
    New year represents new beginnings and new moves. On behalf of <strong>LDL JIIT</strong>, we're all set to begin <strong>2025</strong> with new hopes and new aims with that same notion of "change" for which we all are working and giving our best to lift those whose foots are now the responsibility of our backs.
    <br /><br />
    We strongly believe in growing together , lifting each other with the grace of love and togetherness . 
    For this "change," we expect a hand of help and support.
  </p>
  
 
  
  <p style="font-size: 16px; color: #333; margin-top: 20px;">
    Team LDL JIIT wishes you all health and well-being. It's so beautiful to see you becoming part of our <strong>CHANGE</strong>.
    <br />
    We wish you a healthy & prosperous year ahead!
  </p>
  
  <p style="font-size: 14px; color: #555; margin-top: 30px;">
    Best regards,<br />
    <strong>Team LDL JIIT</strong>
  </p>
  
  <img src="https://drive.google.com/uc?id=1uPUIRGyDlM_iHiIG8PG--JnlkZJQVJIp" alt="Team Image" style="width: 100%; max-width: 400px; border-radius: 10px; margin-top: 20px;" />
</div>

    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Error sending email");
    }
    console.log("Message sent: %s", info.messageId);
    res.send("Email sent successfully");
  });
});
//DEEWALI SERVER SIDE
app.post("/sendemail2", (req, res) => {
  console.log(req.body);
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send("Name and email are required");
  }
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: email_name,
      pass: email_pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
    connectionTimeout: 10000, // 10 seconds
    timeout: 20000, // 20 seconds
  });

  const mailOptions = {
    from: email_name,
    to: email,
    subject: `Happy Deepawali ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f4f4f4; line-height: 1.6; max-width: 600px; margin: auto; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
  <h1 style="color: #28a745; margin-bottom: 20px;">Happy New Year, ${name}!</h1>
  <img src="https://img.freepik.com/premium-photo/cute-illustration-children-celebrating-new-year-2025-with-festive-winter-attire-cheerful-expr_1352657-450.jpg" alt="Happy New Year Image" style="width: 100%; max-width: 400px; border-radius: 10px; margin-bottom: 20px;" />
  
  <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
    A great Deewapali folks!! <br />
    Deewali is a festival of lights and love. On behalf of <strong>LDL JIIT</strong>, We are wishing everyone a graceful deewali full of hopes , new visions and delighful experiences . But As we know deewali is not same for all that's why LDL JIIT stands to erase that difference , to glorify those hearts as well that are darkened by destiny and situations .Our Kids loves the festival , when they cheer - we hear the bustling of instruements , when they smile - we see the forminmg of rainbows .. <br/>
    This is the "Change" we all are working for ... 
    <br /><br />
    For this "change," we expect a hand of help and support.
  </p>
  
  <div style="display: inline-block; padding: 12px 24px; background-color: #28a745; color: #fff; text-decoration: none; border-radius: 5px; font-size: 16px; font-weight: bold; margin: 20px auto;">
    Contribute Now <div/>

  
  <p style="font-size: 16px; color: #333; margin-top: 20px;">
    Team LDL JIIT wishes you all health and well-being. It's so beautiful to see you becoming part of our <strong>CHANGE</strong>.
    <br />
    We wish you a healthy & prosperous year ahead!
  </p>
  
  <p style="font-size: 14px; color: #555; margin-top: 30px;">
    Best regards,<br />
    <strong>Team LDL JIIT</strong>
  </p>
  
  <img src="https://drive.google.com/uc?id=1uPUIRGyDlM_iHiIG8PG--JnlkZJQVJIp" alt="Team Image" style="width: 100%; max-width: 400px; border-radius: 10px; margin-top: 20px;" />
</div>

    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Error sending email");
    }
    console.log("Message sent: %s", info.messageId);
    res.send("Email sent successfully");
  });
});

//route to send mails
app.post("/sendemail", (req, res) => {
  console.log(req.body);
  const { name, email, donationAmount } = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: email_name,
      pass: email_pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
    connectionTimeout: 10000, // 10 seconds
    timeout: 20000,
  });

  //Email content
  const mailoptions = {
    from: email_name,
    to: email,
    subject: "Thankyou for your donation",
    html: `  
    <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: rgb(97, 36, 39); color: white; line-height: 1.6; max-width: 600px; margin: auto; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <div >
      <h1 style="color: #28a745;">Thank You, ${name}!</h1>
      <!-- Adding an image -->
      
      <img src="https://drive.google.com/uc?id=1uPUIRGyDlM_iHiIG8PG--JnlkZJQVJIp" alt="Team Image" style="width: 100%; max-width: 400px;  margin-top: 20px;" />
      
      
      <div>
      <p style="font-size: 16px;">We sincerely appreciate your generous donation to our cause. Your support helps us continue our work and make a difference.
      The amount you donated was not just money that u gave but its actually a big contribution toward the children .
      We all know that life is a bundle of different emotions and experiences but out of all those bundlings , the purest form is called <b>Love</b>
      <div style='background-Color:white ; margin:10px;'>
      And we 're spreading love and since you became a part of it now you too with us are at this mission : a pure mission toward love ; toward change ..
       and thus we say :-
      </div>
      <h3 style=" color:yellow; "><b>We For Change</b></h3>
      Team LDL JIIT wishes all your health and well being .
      Its so beautiful to see you becoming the part of our <b>CHANGE</b> .
      </div>
      </p>
      
      
      
    
      <img src="https://media.gettyimages.com/id/925644610/photo/rural-girls-studying-in-light-bulb.jpg?s=612x612&w=0&k=20&c=AjcSUuu6Ij96Yjm6AZQVDjcPczyciTDrJh0zxkzhxDw=" />
        <p style="font-size: 14px; color: white;">
        Best regards,<br> <b>Team LDL JIIT</b>
      </p>
    </div>
    </div>
    `,
  };

  transporter.sendMail(mailoptions);
  res.send("email sent successfully");

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
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "errro agyo ", error });
  }
});

//for lofin passwords
//donation passkeys
app.post("/verify-donation-pass", (req, res) => {
  const { password } = req.body;
  if (password == process.env.donationpasskey) {
    res.json({ valid: true });
  } else {
    res.json({ valid: false });
  }
});
app.post("/verify-attendance-pass",(req,res)=>{
  const {password}=req.body;
  if(password==process.env.attendancepasskey){
    res.json({valid:true});
  }
  else{
    res.json({valid:false});
  }
})
app.post("/verify-kaushambi-pass", (req, res) => {
  const { password } = req.body;
  if (password == process.env.kaushambipasskey) {
    res.json({ valid: true });
  } else {
    res.json({ valid: false });
  }
});
app.post("/verify-fortis-pass", (req, res) => {
  const { password } = req.body;
  if (password == process.env.fortspasskey) {
    res.json({ valid: true });
  } else {
    res.json({ valid: false });
  }
});
app.post("/verify-finance-pass", (req, res) => {
  const { password } = req.body;
  if (password == process.env.financespasskey) {
    res.json({ valid: true });
  } else {
    res.json({ valid: false });
  }
});

//incampusdonation
const donationSchema = new mongoose.Schema({
  name: String,
  department: String,
  date: String,
  buildingFloor: String,
  amount: String,
  Receiver1: String,
  Receiver2: String,
  Receiver3: String,
});
const Donation=mongoose.model("Donation",donationSchema);

app.post("/add-to-mongo", async(req, res) => {
  const {
    name,
    department,
    date,
    Building,
    amount,
    Receiver1,
    Receiver2,
    Receiver3,
  } = req.body;

  console.log("Received request with body:", req.body);

  // Check if all required fields are present
  if (
    !name ||
    !department ||
    !date ||
    !Building ||
    !amount ||
    !Receiver1 ||
    !Receiver2 ||
    !Receiver3
  ) {
    return res.status(400).send("Error: Missing required fields.");
  }
try {
    const newDonation = new Donation({
      name,
      department,
      date,
      buildingFloor: Building,
      amount,
      Receiver1,
      Receiver2,
      Receiver3
    });
    
    await newDonation.save();
    console.log("Data added to MongoDB successfully.");
    res.send("Data added to MongoDB successfully.");
  } catch (err) {
    console.error("Error adding data to MongoDB:", err);
    res.status(500).send("Failed to add data to MongoDB.");
  }
});
app.get("/get-donations",async(req,res)=>{
  try{
    const donations=await Donation.find();
    res.json(donations);
  }
  catch(err){
    console.error("error in reteiving",err);
    res.status(500).send("failed to find");
  }
})

//start the server
const PORT = port_name || 3000;
app.listen(PORT, () => {
  console.log("server is running " + PORT);
});
module.exports = User;
