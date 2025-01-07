# MongoDB $inc Operator Error
This example demonstrates an incorrect usage of the MongoDB $inc operator, specifically attempting to increment a field with a non-numeric value.
The `$inc` operator is designed to increment numeric fields. Providing a string value results in a query failure.
The solution shows the correct way to use the operator, ensuring that only numeric values are used for incrementation.  This example uses Javascript.