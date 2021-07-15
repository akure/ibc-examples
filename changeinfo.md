
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

=============================================================

DATE : Thursday 15 July 2021 05:59:09 PM IST
command :
starport type sentPost postID title chain --module blog --no-message

On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   proto/blog/genesis.proto
	modified:   proto/blog/query.proto
	new file:   proto/blog/sentPost.proto
	modified:   vue/src/store/generated/index.d.ts
	modified:   vue/src/store/generated/index.js
	modified:   vue/src/store/generated/index.ts
	modified:   vue/src/views/Types.vue
	modified:   x/blog/client/cli/query.go
	new file:   x/blog/client/cli/querySentPost.go
	new file:   x/blog/client/cli/querySentPost_test.go
	modified:   x/blog/genesis.go
	new file:   x/blog/keeper/grpc_query_sentPost.go
	new file:   x/blog/keeper/grpc_query_sentPost_test.go
	new file:   x/blog/keeper/sentPost.go
	new file:   x/blog/keeper/sentPost_test.go
	modified:   x/blog/types/genesis.go
	modified:   x/blog/types/genesis.pb.go
	modified:   x/blog/types/keys.go
	modified:   x/blog/types/query.pb.go
	modified:   x/blog/types/query.pb.gw.go
	new file:   x/blog/types/sentPost.pb.go

===================================================================

Thursday 15 July 2021 06:13:24 PM IST

command : 
starport type timedoutPost title chain --module blog --no-message

Status 
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   proto/blog/genesis.proto
	modified:   proto/blog/query.proto
	new file:   proto/blog/timedoutPost.proto
	modified:   vue/src/store/generated/index.d.ts
	modified:   vue/src/store/generated/index.js
	modified:   vue/src/store/generated/index.ts
	modified:   vue/src/views/Types.vue
	modified:   x/blog/client/cli/query.go
	new file:   x/blog/client/cli/queryTimedoutPost.go
	new file:   x/blog/client/cli/queryTimedoutPost_test.go
	modified:   x/blog/genesis.go
	new file:   x/blog/keeper/grpc_query_timedoutPost.go
	new file:   x/blog/keeper/grpc_query_timedoutPost_test.go
	new file:   x/blog/keeper/timedoutPost.go
	new file:   x/blog/keeper/timedoutPost_test.go
	modified:   x/blog/types/genesis.go
	modified:   x/blog/types/genesis.pb.go
	modified:   x/blog/types/keys.go
	modified:   x/blog/types/query.pb.go
	modified:   x/blog/types/query.pb.gw.go
	new file:   x/blog/types/timedoutPost.pb.go

====================================================================

DATE :
Thursday 15 July 2021 06:41:44 PM IST

command : 
starport packet ibcPost title content --ack postID --module blog


On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   docs/static/openapi.yml
	modified:   proto/blog/packet.proto
	modified:   proto/blog/tx.proto
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/index.d.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/index.js
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/index.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/index.d.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/index.js
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/index.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/rest.d.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/rest.js
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/rest.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/blog/genesis.d.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/blog/genesis.js
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/blog/genesis.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/blog/packet.d.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/blog/packet.js
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/blog/packet.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/blog/post.d.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/blog/post.js
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/blog/post.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/blog/query.d.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/blog/query.js
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/blog/query.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/blog/sentPost.d.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/blog/sentPost.js
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/blog/sentPost.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/blog/timedoutPost.d.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/blog/timedoutPost.js
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/blog/timedoutPost.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/blog/tx.d.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/blog/tx.js
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/blog/tx.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/cosmos/base/query/v1beta1/pagination.d.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/cosmos/base/query/v1beta1/pagination.js
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/cosmos/base/query/v1beta1/pagination.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/gogoproto/gogo.d.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/gogoproto/gogo.js
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/gogoproto/gogo.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/google/api/annotations.d.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/google/api/annotations.js
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/google/api/annotations.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/google/api/http.d.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/google/api/http.js
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/google/api/http.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/google/protobuf/descriptor.d.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/google/protobuf/descriptor.js
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/google/protobuf/descriptor.ts
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/package.json
	new file:   vue/src/store/generated/akure/planet/akure.planet.blog/vuex-root
	modified:   vue/src/store/generated/index.d.ts
	modified:   vue/src/store/generated/index.js
	modified:   vue/src/store/generated/index.ts
	modified:   x/blog/client/cli/tx.go
	new file:   x/blog/client/cli/tx_ibcPost.go
	modified:   x/blog/handler.go
	new file:   x/blog/keeper/ibcPost.go
	new file:   x/blog/keeper/msg_server_ibcPost.go
	modified:   x/blog/module_ibc.go
	modified:   x/blog/types/codec.go
	modified:   x/blog/types/events_ibc.go
	new file:   x/blog/types/messages_ibcPost.go
	modified:   x/blog/types/packet.pb.go
	new file:   x/blog/types/packet_ibcPost.go
	modified:   x/blog/types/tx.pb.go

======================================================

DATE : Thursday 15 July 2021 11:08:30 PM IST

On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   proto/blog/packet.proto
	modified:   x/blog/keeper/ibcPost.go
	modified:   x/blog/keeper/msg_server_ibcPost.go

=======================================================

DATE : Thursday 15 July 2021 11:15:32 PM IST

After spining up the chain using "starport serve"

On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/blog/packet.d.ts
	modified:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/blog/packet.js
	modified:   vue/src/store/generated/akure/planet/akure.planet.blog/module/types/blog/packet.ts
	modified:   vue/src/store/generated/index.d.ts
	modified:   vue/src/store/generated/index.js
	modified:   vue/src/store/generated/index.ts
	modified:   x/blog/types/packet.pb.go


=======================================================
