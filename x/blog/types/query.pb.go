// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: blog/query.proto

package types

import (
	context "context"
	fmt "fmt"
	_ "github.com/cosmos/cosmos-sdk/types/query"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

func init() { proto.RegisterFile("blog/query.proto", fileDescriptor_6e22cd6d352f3384) }

var fileDescriptor_6e22cd6d352f3384 = []byte{
	// 184 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x24, 0x8e, 0x31, 0x8e, 0xc2, 0x30,
	0x10, 0x45, 0x93, 0x62, 0x77, 0xa5, 0x54, 0xbb, 0x5b, 0x46, 0xc8, 0x15, 0x15, 0x85, 0x47, 0x81,
	0x9e, 0x82, 0x1b, 0xd0, 0xd2, 0x8d, 0x23, 0xcb, 0x58, 0x24, 0x1e, 0x13, 0x4f, 0x10, 0xb9, 0x05,
	0xc7, 0xa2, 0x4c, 0x49, 0x89, 0x92, 0x8b, 0xa0, 0xd8, 0xf5, 0x7f, 0xff, 0xe9, 0x15, 0xbf, 0xaa,
	0x21, 0x03, 0xd7, 0x5e, 0x77, 0x83, 0xf4, 0x1d, 0x31, 0xfd, 0xff, 0xe1, 0xa5, 0xef, 0xb4, 0xf4,
	0x0d, 0x3a, 0xcd, 0x72, 0x99, 0xcb, 0x95, 0x21, 0x32, 0x8d, 0x06, 0xf4, 0x16, 0xd0, 0x39, 0x62,
	0x64, 0x4b, 0x2e, 0xa4, 0x43, 0xb9, 0xa9, 0x29, 0xb4, 0x14, 0x40, 0x61, 0xd0, 0xc9, 0x04, 0xb7,
	0x4a, 0x69, 0xc6, 0x0a, 0x3c, 0x1a, 0xeb, 0x22, 0x9c, 0xd8, 0xed, 0x4f, 0xf1, 0x75, 0x5c, 0x88,
	0xc3, 0xfe, 0x39, 0x89, 0x7c, 0x9c, 0x44, 0xfe, 0x9e, 0x44, 0xfe, 0x98, 0x45, 0x36, 0xce, 0x22,
	0x7b, 0xcd, 0x22, 0x3b, 0xad, 0x8d, 0xe5, 0x73, 0xaf, 0x64, 0x4d, 0x2d, 0xc4, 0x14, 0x48, 0x29,
	0x70, 0x87, 0xd8, 0xca, 0x83, 0xd7, 0x41, 0x7d, 0x47, 0xdf, 0xee, 0x13, 0x00, 0x00, 0xff, 0xff,
	0xbd, 0x5f, 0xa2, 0x1b, 0xc0, 0x00, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// QueryClient is the client API for Query service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type QueryClient interface {
}

type queryClient struct {
	cc grpc1.ClientConn
}

func NewQueryClient(cc grpc1.ClientConn) QueryClient {
	return &queryClient{cc}
}

// QueryServer is the server API for Query service.
type QueryServer interface {
}

// UnimplementedQueryServer can be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func RegisterQueryServer(s grpc1.Server, srv QueryServer) {
	s.RegisterService(&_Query_serviceDesc, srv)
}

var _Query_serviceDesc = grpc.ServiceDesc{
	ServiceName: "akure.planet.blog.Query",
	HandlerType: (*QueryServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams:     []grpc.StreamDesc{},
	Metadata:    "blog/query.proto",
}