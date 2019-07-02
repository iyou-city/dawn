package service

import (
	"context"
	"os"

	"github.com/gogo/protobuf/types"
	"github.com/iyou.city/dawn/internal/impl/biz"
	pb "github.com/iyou.city/dawn/service/go"
	"google.golang.org/grpc/grpclog"
	log "google.golang.org/grpc/grpclog"
)

const (
	bookTable = "books"
)

type BooksImpl struct{}

func (s *BooksImpl) Add(ctx context.Context, in *pb.Book) (*pb.Book, error) {
	in.Id = types.TimestampNow().String()
	in.Created = types.TimestampNow()
	if err := biz.Insert(bookTable, in); err != nil {
		return nil, err
	}
	return in, nil
}

func (s *BooksImpl) Get(ctx context.Context, in *pb.Book) (*pb.Book, error) {
	book := pb.Book{}
	if err := biz.GetById(bookTable, in.Id, &book); err != nil {
		return nil, err
	}
	return &book, nil
}

func (s *BooksImpl) Update(ctx context.Context, in *pb.Book) (*pb.Book, error) {
	book, err := s.Get(ctx, in)
	if err != nil {
		return nil, err
	}
	book.Title = in.Title
	if err := biz.Update(bookTable, in.Id, book); err != nil {
		return nil, err
	}
	return in, nil
}

func (s *BooksImpl) List(in *pb.Book, stream pb.Books_ListServer) error {
	books := []*pb.Book{}
	if err := biz.List(bookTable, &books, " order by data->'$.created.seconds' desc"); err != nil {
		log.Errorln(err)
		return err
	}

	for _, v := range books {
		if err := stream.Send(v); err != nil {
			return err
		}
	}

	return nil
}

func (s *BooksImpl) Delete(ctx context.Context, in *pb.Book) (*types.Empty, error) {
	if err := biz.Delete(bookTable, in.Id); err != nil {
		return nil, err
	}
	if err := os.RemoveAll("/uploads/" + in.Title); err != nil {
		grpclog.Errorln(err)
	}
	return &types.Empty{}, nil
}
