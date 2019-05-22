package main

import (
	"net"

	impl "github.com/iyou.city/dawn/internal/impl/service"
	pb "github.com/iyou.city/dawn/service/sdk/go"
	"google.golang.org/grpc"
	"google.golang.org/grpc/grpclog"
)

const (
	port = ":50051"
)

func main() {
	go serveFileUpload()
	lis, err := net.Listen("tcp", port)
	if err != nil {
		grpclog.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterArticlesServer(s, new(impl.ArticlesImpl))
	pb.RegisterUsersServer(s, new(impl.UsersImpl))
	pb.RegisterMessagesServer(s, new(impl.MessageImpl))
	pb.RegisterGroupsServer(s, new(impl.GroupsImpl))
	pb.RegisterBooksServer(s, new(impl.BooksImpl))

	grpclog.Println("begin..." + port)
	if err := s.Serve(lis); err != nil {
		grpclog.Fatalf("failed to serve: %v", err)
	}
}
