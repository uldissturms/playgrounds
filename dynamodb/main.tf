resource "aws_dynamodb_table" "tf-dynamodb-table" {
  name = "tf-table"
  read_capacity = 5
  write_capacity = 5
  hash_key = "Id"
  range_key = "Activity"
  attribute {
    name = "Id"
    type = "S"
  }
  attribute {
    name = "Activity"
    type = "S"
  }
}
