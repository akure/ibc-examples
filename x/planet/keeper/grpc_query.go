package keeper

import (
	"github.com/akure/planet/x/planet/types"
)

var _ types.QueryServer = Keeper{}
