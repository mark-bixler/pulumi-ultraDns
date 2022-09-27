package shim

import (
	"github.com/hashicorp/terraform-plugin-sdk/v2/helper/schema"
	"github.com/ultradns/terraform-provider-ultradns/internal/provider"
)

func Provider() *schema.Provider {
	return provider.Provider()
}
