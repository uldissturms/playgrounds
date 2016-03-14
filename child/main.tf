variable "foo" {}

output "foo_received" {
  value = "${var.foo}"
}
