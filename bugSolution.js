```javascript
//Correct usage of $inc operator in MongoDB update query
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{$inc:{field1:1,field2:1}});
//or
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{$inc:{field1:1}});
```