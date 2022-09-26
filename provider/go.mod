module github.com/mark-bixler/pulumi-ultradns/provider

go 1.18

replace github.com/hashicorp/terraform-plugin-sdk/v2 => github.com/pulumi/terraform-plugin-sdk/v2 v2.0.0-20220824175045-450992f2f5b9

require (
	github.com/pulumi/pulumi-terraform-bridge/v3 v3.28.1
	github.com/pulumi/pulumi/pkg/v3 v3.38.0
	github.com/pulumi/pulumi/sdk/v3 v3.38.0
	github.com/ultradns/terraform-provider-ultradns v1.5.1
)
