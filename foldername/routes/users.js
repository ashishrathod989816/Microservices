var express = require('express');
var router = express.Router();
var db = require('../connect');


/*Request the ride. */
router.post('/', function (req, res, next) {
// var rideDetailId = req.body.rideDetailId;
// var razorPayId =req.body.razorPayId;
 var paymentType =req.body.paymentType;
// var individualFare =req.body.individualFare;
// var couponId=req.body.couponId;
// var totalpayment =req.body.totalpayment;
// var discountAmount=req.body.discountAmount;
// var paymentStatus=req.body.paymentStatus;
// var settlementstatus=req.body.settlementstatus;
// var paymentDate=req.body.paymentDate;

   
    // var sql1 = `INSERT INTO payment (rideDetailId, razorPayId, paymentType,individualFare,couponId,totalpayment,discountAmount,paymentStatus,settlementstatus,paymentDate) \
    // VALUES ('${rideDetailId}','${razorPayId}', '${paymentType}', '${individualFare}','${couponId}','${totalpayment}','${discountAmount}','${paymentStatus}','${settlementstatus}','${paymentDate}')`;
    var sql1=`INSERT INTO Pay (paymentType) VALUES ('${paymentType}')`;
    db.query(sql1, function(err,result) {
      if (err) throw err;
      //res.json(result);
      console.log("1 record inserted"+result[0]);
    });
    console.log("1 record inserted");
  });


module.exports = router;
