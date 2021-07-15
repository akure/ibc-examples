package keeper

import (
	"github.com/akure/planet/x/blog/types"
)

var _ types.QueryServer = Keeper{}
