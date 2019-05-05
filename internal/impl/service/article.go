package service

import (
	"context"

	"github.com/gogo/protobuf/types"
	"github.com/iyou/dawn/internal/impl/biz"
	pb "github.com/iyou/dawn/service/sdk/go"
)

const (
	articleTable = "articles"
)

type ArticlesImpl struct{}

func (s *ArticlesImpl) Add(ctx context.Context, in *pb.Article) (*pb.Article, error) {
	in.Id = types.TimestampNow().String()
	in.Created = types.TimestampNow()
	if err := biz.Insert(articleTable, in); err != nil {
		return nil, err
	}
	return in, nil
}

func (s *ArticlesImpl) Get(ctx context.Context, in *pb.Article) (*pb.Article, error) {
	article := pb.Article{}
	if err := biz.GetById(articleTable, in.Id, &article); err != nil {
		return nil, err
	}
	return &article, nil
}

func (s *ArticlesImpl) Update(ctx context.Context, in *pb.Article) (*pb.Article, error) {
	article, err := s.Get(ctx, in)
	if err != nil {
		return nil, err
	}
	article.Content = in.Content
	if err := biz.Update(articleTable, in.Id, article); err != nil {
		return nil, err
	}
	return in, nil
}

func (s *ArticlesImpl) ListByUser(in *pb.Article, stream pb.Articles_ListByUserServer) error {
	articles := []*pb.Article{}
	if err := biz.List(articleTable, &articles, " order by data->'$.created.seconds' desc"); err != nil {
		return err
	}

	for _, v := range articles {
		if err := stream.Send(v); err != nil {
			return err
		}
	}

	return nil
}

func (s *ArticlesImpl) Delete(ctx context.Context, in *pb.Article) (*types.Empty, error) {
	if err := biz.Delete(articleTable, in.Id); err != nil {
		return nil, err
	}
	return &types.Empty{}, nil
}
