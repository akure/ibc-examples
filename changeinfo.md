
15-07-21 : 15:22:43 

starport module create blog --ibc


git status 

On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   app/app.go
	new file:   changeinfo.md
	new file:   proto/blog/genesis.proto
	new file:   proto/blog/packet.proto
	new file:   proto/blog/query.proto
	new file:   proto/blog/tx.proto
	modified:   vue/src/store/generated/index.d.ts
	modified:   vue/src/store/generated/index.js
	modified:   vue/src/store/generated/index.ts
	new file:   x/blog/client/cli/query.go
	new file:   x/blog/client/cli/tx.go
	new file:   x/blog/genesis.go
	new file:   x/blog/handler.go
	new file:   x/blog/keeper/grpc_query.go
	new file:   x/blog/keeper/ibc.go
	new file:   x/blog/keeper/keeper.go
	new file:   x/blog/keeper/keeper_test.go
	new file:   x/blog/keeper/msg_server.go
	new file:   x/blog/keeper/msg_server_test.go
	new file:   x/blog/module.go
	new file:   x/blog/module_ibc.go
	new file:   x/blog/types/codec.go
	new file:   x/blog/types/errors.go
	new file:   x/blog/types/events_ibc.go
	new file:   x/blog/types/expected_keeper_ibc.go
	new file:   x/blog/types/genesis.go
	new file:   x/blog/types/genesis.pb.go
	new file:   x/blog/types/keys.go
	new file:   x/blog/types/packet.pb.go
	new file:   x/blog/types/query.pb.go
	new file:   x/blog/types/tx.pb.go
	new file:   x/blog/types/types.go

===============================================================

DATE : Thursday 15 July 2021 05:34:49 PM IST

starport type post title content --module blog --no-message

On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   go.mod
	modified:   proto/blog/genesis.proto
	new file:   proto/blog/post.proto
	modified:   proto/blog/query.proto
	modified:   vue/src/store/generated/index.d.ts
	modified:   vue/src/store/generated/index.js
	modified:   vue/src/store/generated/index.ts
	modified:   vue/src/views/Types.vue
	modified:   x/blog/client/cli/query.go
	new file:   x/blog/client/cli/queryPost.go
	new file:   x/blog/client/cli/queryPost_test.go
	modified:   x/blog/genesis.go
	new file:   x/blog/keeper/grpc_query_post.go
	new file:   x/blog/keeper/grpc_query_post_test.go
	new file:   x/blog/keeper/post.go
	new file:   x/blog/keeper/post_test.go
	modified:   x/blog/module.go
	modified:   x/blog/types/genesis.go
	modified:   x/blog/types/genesis.pb.go
	modified:   x/blog/types/keys.go
	new file:   x/blog/types/post.pb.go
	modified:   x/blog/types/query.pb.go
	new file:   x/blog/types/query.pb.gw.go

