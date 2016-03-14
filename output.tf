output "ip" {
  value = "${aws_eip.ip.public_ip}"
}

output "child_foo" {
  value = "${module.child.foo_received}"
}
