package service

import (
	"context"

	"github.com/gogo/protobuf/types"
	"github.com/iyou/dawn/internal/impl/biz"
	pb "github.com/iyou/dawn/service/sdk/go"
)

const (
	groupTable = "groups"
)

type GroupsImpl struct{}

func (s *GroupsImpl) Add(ctx context.Context, in *pb.Group) (*pb.Group, error) {
	in.Id = types.TimestampNow().String()
	in.Created = types.TimestampNow()
	if err := biz.Insert(groupTable, in); err != nil {
		return nil, err
	}
	return in, nil
}

func (s *GroupsImpl) Get(ctx context.Context, in *pb.Group) (*pb.Group, error) {
	group := pb.Group{}
	if err := biz.GetById(groupTable, in.Id, &group); err != nil {
		return nil, err
	}
	return &group, nil
}

func (s *GroupsImpl) Update(ctx context.Context, in *pb.Group) (*pb.Group, error) {
	group, err := s.Get(ctx, in)
	if err != nil {
		return nil, err
	}
	group.Description = in.Description
	if err := biz.Update(groupTable, in.Id, group); err != nil {
		return nil, err
	}
	return in, nil
}

func (s *GroupsImpl) List(in *types.Empty, stream pb.Groups_ListServer) error {
	groups := []*pb.Group{}
	if err := biz.List(groupTable, &groups, " order by data->'$.created.seconds' desc"); err != nil {
		return err
	}

	for _, v := range groups {
		if err := stream.Send(v); err != nil {
			return err
		}
	}

	return nil
}

func (s *GroupsImpl) Delete(ctx context.Context, in *pb.Group) (*types.Empty, error) {
	if err := biz.Delete(groupTable, in.Id); err != nil {
		return nil, err
	}
	return &types.Empty{}, nil
}
