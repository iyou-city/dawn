// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: book.proto

package dawn

import (
	context "context"
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	types "github.com/gogo/protobuf/types"
	grpc "google.golang.org/grpc"
	io "io"
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
const _ = proto.GoGoProtoPackageIsVersion2 // please upgrade the proto package

type Book struct {
	Id       string            `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Title    string            `protobuf:"bytes,2,opt,name=title,proto3" json:"title,omitempty"`
	Cover    string            `protobuf:"bytes,3,opt,name=cover,proto3" json:"cover,omitempty"`
	Page     []*Page           `protobuf:"bytes,4,rep,name=page,proto3" json:"page,omitempty"`
	Reader   string            `protobuf:"bytes,5,opt,name=reader,proto3" json:"reader,omitempty"`
	Count    string            `protobuf:"bytes,6,opt,name=count,proto3" json:"count,omitempty"`
	Category string            `protobuf:"bytes,7,opt,name=category,proto3" json:"category,omitempty"`
	Labels   map[string]string `protobuf:"bytes,9,rep,name=labels,proto3" json:"labels,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Created  *types.Timestamp  `protobuf:"bytes,10,opt,name=created,proto3" json:"created,omitempty"`
}

func (m *Book) Reset()         { *m = Book{} }
func (m *Book) String() string { return proto.CompactTextString(m) }
func (*Book) ProtoMessage()    {}
func (*Book) Descriptor() ([]byte, []int) {
	return fileDescriptor_1e89d0eaa98dc5d8, []int{0}
}
func (m *Book) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Book) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Book.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalTo(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Book) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Book.Merge(m, src)
}
func (m *Book) XXX_Size() int {
	return m.Size()
}
func (m *Book) XXX_DiscardUnknown() {
	xxx_messageInfo_Book.DiscardUnknown(m)
}

var xxx_messageInfo_Book proto.InternalMessageInfo

func (m *Book) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *Book) GetTitle() string {
	if m != nil {
		return m.Title
	}
	return ""
}

func (m *Book) GetCover() string {
	if m != nil {
		return m.Cover
	}
	return ""
}

func (m *Book) GetPage() []*Page {
	if m != nil {
		return m.Page
	}
	return nil
}

func (m *Book) GetReader() string {
	if m != nil {
		return m.Reader
	}
	return ""
}

func (m *Book) GetCount() string {
	if m != nil {
		return m.Count
	}
	return ""
}

func (m *Book) GetCategory() string {
	if m != nil {
		return m.Category
	}
	return ""
}

func (m *Book) GetLabels() map[string]string {
	if m != nil {
		return m.Labels
	}
	return nil
}

func (m *Book) GetCreated() *types.Timestamp {
	if m != nil {
		return m.Created
	}
	return nil
}

type Page struct {
	Name    string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Picture string `protobuf:"bytes,2,opt,name=picture,proto3" json:"picture,omitempty"`
	Sound   string `protobuf:"bytes,3,opt,name=sound,proto3" json:"sound,omitempty"`
}

func (m *Page) Reset()         { *m = Page{} }
func (m *Page) String() string { return proto.CompactTextString(m) }
func (*Page) ProtoMessage()    {}
func (*Page) Descriptor() ([]byte, []int) {
	return fileDescriptor_1e89d0eaa98dc5d8, []int{1}
}
func (m *Page) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Page) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Page.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalTo(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Page) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Page.Merge(m, src)
}
func (m *Page) XXX_Size() int {
	return m.Size()
}
func (m *Page) XXX_DiscardUnknown() {
	xxx_messageInfo_Page.DiscardUnknown(m)
}

var xxx_messageInfo_Page proto.InternalMessageInfo

func (m *Page) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Page) GetPicture() string {
	if m != nil {
		return m.Picture
	}
	return ""
}

func (m *Page) GetSound() string {
	if m != nil {
		return m.Sound
	}
	return ""
}

func init() {
	proto.RegisterType((*Book)(nil), "dawn.Book")
	proto.RegisterMapType((map[string]string)(nil), "dawn.Book.LabelsEntry")
	proto.RegisterType((*Page)(nil), "dawn.Page")
}

func init() { proto.RegisterFile("book.proto", fileDescriptor_1e89d0eaa98dc5d8) }

var fileDescriptor_1e89d0eaa98dc5d8 = []byte{
	// 385 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x5c, 0x50, 0xc1, 0x8a, 0xdb, 0x30,
	0x14, 0xb4, 0x1c, 0xc7, 0xe9, 0xbe, 0x40, 0x29, 0xa2, 0x2c, 0xc2, 0x05, 0x35, 0xf8, 0x14, 0x28,
	0x68, 0x4b, 0xda, 0x43, 0xdb, 0xe3, 0x42, 0x2f, 0x65, 0x0f, 0xc5, 0xf4, 0x07, 0x64, 0xfb, 0xd5,
	0x98, 0xd8, 0x96, 0x91, 0xe5, 0x5d, 0xfc, 0x17, 0xfd, 0xac, 0x5e, 0x0a, 0x39, 0xf6, 0x58, 0x92,
	0x1f, 0x29, 0x92, 0xed, 0x6c, 0xc8, 0xed, 0xcd, 0xcc, 0x7b, 0x23, 0xcd, 0x00, 0xa4, 0x4a, 0xed,
	0x45, 0xab, 0x95, 0x51, 0x34, 0xc8, 0xe5, 0x53, 0x13, 0xbd, 0x29, 0x94, 0x2a, 0x2a, 0xbc, 0x73,
	0x5c, 0xda, 0xff, 0xbc, 0xc3, 0xba, 0x35, 0xc3, 0xb8, 0x12, 0xf1, 0x6b, 0xf1, 0x49, 0xcb, 0xb6,
	0x45, 0xdd, 0x4d, 0xfa, 0xdb, 0x6b, 0xdd, 0x94, 0x35, 0x76, 0x46, 0xd6, 0xed, 0xb8, 0x10, 0xff,
	0xf1, 0x21, 0xb8, 0x57, 0x6a, 0x4f, 0x5f, 0x82, 0x5f, 0xe6, 0x8c, 0x6c, 0xc8, 0xf6, 0x26, 0xf1,
	0xcb, 0x9c, 0xbe, 0x86, 0xa5, 0x29, 0x4d, 0x85, 0xcc, 0x77, 0xd4, 0x08, 0x2c, 0x9b, 0xa9, 0x47,
	0xd4, 0x6c, 0x31, 0xb2, 0x0e, 0x50, 0x0e, 0x41, 0x2b, 0x0b, 0x64, 0xc1, 0x66, 0xb1, 0x5d, 0xef,
	0x40, 0xd8, 0x7f, 0x8b, 0xef, 0xb2, 0xc0, 0xc4, 0xf1, 0xf4, 0x16, 0x42, 0x8d, 0x32, 0x47, 0xcd,
	0x96, 0xee, 0x6c, 0x42, 0xa3, 0x5b, 0xdf, 0x18, 0x16, 0xce, 0x6e, 0x7d, 0x63, 0x68, 0x04, 0x2f,
	0x32, 0x69, 0xb0, 0x50, 0x7a, 0x60, 0x2b, 0x27, 0x9c, 0x31, 0x15, 0x10, 0x56, 0x32, 0xc5, 0xaa,
	0x63, 0x37, 0xee, 0xad, 0xdb, 0xf1, 0x2d, 0x9b, 0x40, 0x3c, 0x38, 0xe1, 0x6b, 0x63, 0xf4, 0x90,
	0x4c, 0x5b, 0xf4, 0x23, 0xac, 0x32, 0x8d, 0xd2, 0x60, 0xce, 0x60, 0x43, 0xb6, 0xeb, 0x5d, 0x24,
	0xc6, 0x46, 0xc4, 0xdc, 0x88, 0xf8, 0x31, 0x37, 0x92, 0xcc, 0xab, 0xd1, 0x67, 0x58, 0x5f, 0x98,
	0xd1, 0x57, 0xb0, 0xd8, 0xe3, 0x30, 0x75, 0x63, 0x47, 0xfb, 0xf1, 0x47, 0x59, 0xf5, 0xe7, 0x72,
	0x1c, 0xf8, 0xe2, 0x7f, 0x22, 0xf1, 0x37, 0x08, 0x6c, 0x70, 0x4a, 0x21, 0x68, 0x64, 0x8d, 0xd3,
	0x91, 0x9b, 0x29, 0x83, 0x55, 0x5b, 0x66, 0xa6, 0xd7, 0xf3, 0xdd, 0x0c, 0xad, 0x5f, 0xa7, 0xfa,
	0x26, 0x9f, 0x6b, 0x75, 0x60, 0xf7, 0x0e, 0x96, 0x36, 0x58, 0x47, 0x63, 0x08, 0x1e, 0xca, 0xce,
	0x50, 0x78, 0x4e, 0x1b, 0x5d, 0xcc, 0xb1, 0xf7, 0x9e, 0xdc, 0xb3, 0xdf, 0x47, 0x4e, 0x0e, 0x47,
	0x4e, 0xfe, 0x1d, 0x39, 0xf9, 0x75, 0xe2, 0xde, 0xe1, 0xc4, 0xbd, 0xbf, 0x27, 0xee, 0xa5, 0xa1,
	0x8b, 0xfa, 0xe1, 0x7f, 0x00, 0x00, 0x00, 0xff, 0xff, 0x87, 0xdd, 0xe2, 0xb4, 0x5b, 0x02, 0x00,
	0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// BooksClient is the client API for Books service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type BooksClient interface {
	// rpc Add(Article) returns (Article) {}
	// rpc Get(Article) returns (Article) {}
	// rpc Update(Article) returns (Article) {}
	List(ctx context.Context, in *Book, opts ...grpc.CallOption) (Books_ListClient, error)
}

type booksClient struct {
	cc *grpc.ClientConn
}

func NewBooksClient(cc *grpc.ClientConn) BooksClient {
	return &booksClient{cc}
}

func (c *booksClient) List(ctx context.Context, in *Book, opts ...grpc.CallOption) (Books_ListClient, error) {
	stream, err := c.cc.NewStream(ctx, &_Books_serviceDesc.Streams[0], "/dawn.Books/List", opts...)
	if err != nil {
		return nil, err
	}
	x := &booksListClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type Books_ListClient interface {
	Recv() (*Book, error)
	grpc.ClientStream
}

type booksListClient struct {
	grpc.ClientStream
}

func (x *booksListClient) Recv() (*Book, error) {
	m := new(Book)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// BooksServer is the server API for Books service.
type BooksServer interface {
	// rpc Add(Article) returns (Article) {}
	// rpc Get(Article) returns (Article) {}
	// rpc Update(Article) returns (Article) {}
	List(*Book, Books_ListServer) error
}

func RegisterBooksServer(s *grpc.Server, srv BooksServer) {
	s.RegisterService(&_Books_serviceDesc, srv)
}

func _Books_List_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(Book)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(BooksServer).List(m, &booksListServer{stream})
}

type Books_ListServer interface {
	Send(*Book) error
	grpc.ServerStream
}

type booksListServer struct {
	grpc.ServerStream
}

func (x *booksListServer) Send(m *Book) error {
	return x.ServerStream.SendMsg(m)
}

var _Books_serviceDesc = grpc.ServiceDesc{
	ServiceName: "dawn.Books",
	HandlerType: (*BooksServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "List",
			Handler:       _Books_List_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "book.proto",
}

func (m *Book) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalTo(dAtA)
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Book) MarshalTo(dAtA []byte) (int, error) {
	var i int
	_ = i
	var l int
	_ = l
	if len(m.Id) > 0 {
		dAtA[i] = 0xa
		i++
		i = encodeVarintBook(dAtA, i, uint64(len(m.Id)))
		i += copy(dAtA[i:], m.Id)
	}
	if len(m.Title) > 0 {
		dAtA[i] = 0x12
		i++
		i = encodeVarintBook(dAtA, i, uint64(len(m.Title)))
		i += copy(dAtA[i:], m.Title)
	}
	if len(m.Cover) > 0 {
		dAtA[i] = 0x1a
		i++
		i = encodeVarintBook(dAtA, i, uint64(len(m.Cover)))
		i += copy(dAtA[i:], m.Cover)
	}
	if len(m.Page) > 0 {
		for _, msg := range m.Page {
			dAtA[i] = 0x22
			i++
			i = encodeVarintBook(dAtA, i, uint64(msg.Size()))
			n, err := msg.MarshalTo(dAtA[i:])
			if err != nil {
				return 0, err
			}
			i += n
		}
	}
	if len(m.Reader) > 0 {
		dAtA[i] = 0x2a
		i++
		i = encodeVarintBook(dAtA, i, uint64(len(m.Reader)))
		i += copy(dAtA[i:], m.Reader)
	}
	if len(m.Count) > 0 {
		dAtA[i] = 0x32
		i++
		i = encodeVarintBook(dAtA, i, uint64(len(m.Count)))
		i += copy(dAtA[i:], m.Count)
	}
	if len(m.Category) > 0 {
		dAtA[i] = 0x3a
		i++
		i = encodeVarintBook(dAtA, i, uint64(len(m.Category)))
		i += copy(dAtA[i:], m.Category)
	}
	if len(m.Labels) > 0 {
		for k, _ := range m.Labels {
			dAtA[i] = 0x4a
			i++
			v := m.Labels[k]
			mapSize := 1 + len(k) + sovBook(uint64(len(k))) + 1 + len(v) + sovBook(uint64(len(v)))
			i = encodeVarintBook(dAtA, i, uint64(mapSize))
			dAtA[i] = 0xa
			i++
			i = encodeVarintBook(dAtA, i, uint64(len(k)))
			i += copy(dAtA[i:], k)
			dAtA[i] = 0x12
			i++
			i = encodeVarintBook(dAtA, i, uint64(len(v)))
			i += copy(dAtA[i:], v)
		}
	}
	if m.Created != nil {
		dAtA[i] = 0x52
		i++
		i = encodeVarintBook(dAtA, i, uint64(m.Created.Size()))
		n1, err := m.Created.MarshalTo(dAtA[i:])
		if err != nil {
			return 0, err
		}
		i += n1
	}
	return i, nil
}

func (m *Page) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalTo(dAtA)
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Page) MarshalTo(dAtA []byte) (int, error) {
	var i int
	_ = i
	var l int
	_ = l
	if len(m.Name) > 0 {
		dAtA[i] = 0xa
		i++
		i = encodeVarintBook(dAtA, i, uint64(len(m.Name)))
		i += copy(dAtA[i:], m.Name)
	}
	if len(m.Picture) > 0 {
		dAtA[i] = 0x12
		i++
		i = encodeVarintBook(dAtA, i, uint64(len(m.Picture)))
		i += copy(dAtA[i:], m.Picture)
	}
	if len(m.Sound) > 0 {
		dAtA[i] = 0x1a
		i++
		i = encodeVarintBook(dAtA, i, uint64(len(m.Sound)))
		i += copy(dAtA[i:], m.Sound)
	}
	return i, nil
}

func encodeVarintBook(dAtA []byte, offset int, v uint64) int {
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return offset + 1
}
func (m *Book) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Id)
	if l > 0 {
		n += 1 + l + sovBook(uint64(l))
	}
	l = len(m.Title)
	if l > 0 {
		n += 1 + l + sovBook(uint64(l))
	}
	l = len(m.Cover)
	if l > 0 {
		n += 1 + l + sovBook(uint64(l))
	}
	if len(m.Page) > 0 {
		for _, e := range m.Page {
			l = e.Size()
			n += 1 + l + sovBook(uint64(l))
		}
	}
	l = len(m.Reader)
	if l > 0 {
		n += 1 + l + sovBook(uint64(l))
	}
	l = len(m.Count)
	if l > 0 {
		n += 1 + l + sovBook(uint64(l))
	}
	l = len(m.Category)
	if l > 0 {
		n += 1 + l + sovBook(uint64(l))
	}
	if len(m.Labels) > 0 {
		for k, v := range m.Labels {
			_ = k
			_ = v
			mapEntrySize := 1 + len(k) + sovBook(uint64(len(k))) + 1 + len(v) + sovBook(uint64(len(v)))
			n += mapEntrySize + 1 + sovBook(uint64(mapEntrySize))
		}
	}
	if m.Created != nil {
		l = m.Created.Size()
		n += 1 + l + sovBook(uint64(l))
	}
	return n
}

func (m *Page) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Name)
	if l > 0 {
		n += 1 + l + sovBook(uint64(l))
	}
	l = len(m.Picture)
	if l > 0 {
		n += 1 + l + sovBook(uint64(l))
	}
	l = len(m.Sound)
	if l > 0 {
		n += 1 + l + sovBook(uint64(l))
	}
	return n
}

func sovBook(x uint64) (n int) {
	for {
		n++
		x >>= 7
		if x == 0 {
			break
		}
	}
	return n
}
func sozBook(x uint64) (n int) {
	return sovBook(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Book) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowBook
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Book: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Book: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBook
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthBook
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBook
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Id = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Title", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBook
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthBook
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBook
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Title = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Cover", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBook
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthBook
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBook
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Cover = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Page", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBook
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthBook
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthBook
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Page = append(m.Page, &Page{})
			if err := m.Page[len(m.Page)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Reader", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBook
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthBook
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBook
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Reader = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Count", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBook
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthBook
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBook
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Count = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Category", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBook
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthBook
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBook
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Category = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 9:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Labels", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBook
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthBook
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthBook
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Labels == nil {
				m.Labels = make(map[string]string)
			}
			var mapkey string
			var mapvalue string
			for iNdEx < postIndex {
				entryPreIndex := iNdEx
				var wire uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowBook
					}
					if iNdEx >= l {
						return io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					wire |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				fieldNum := int32(wire >> 3)
				if fieldNum == 1 {
					var stringLenmapkey uint64
					for shift := uint(0); ; shift += 7 {
						if shift >= 64 {
							return ErrIntOverflowBook
						}
						if iNdEx >= l {
							return io.ErrUnexpectedEOF
						}
						b := dAtA[iNdEx]
						iNdEx++
						stringLenmapkey |= uint64(b&0x7F) << shift
						if b < 0x80 {
							break
						}
					}
					intStringLenmapkey := int(stringLenmapkey)
					if intStringLenmapkey < 0 {
						return ErrInvalidLengthBook
					}
					postStringIndexmapkey := iNdEx + intStringLenmapkey
					if postStringIndexmapkey < 0 {
						return ErrInvalidLengthBook
					}
					if postStringIndexmapkey > l {
						return io.ErrUnexpectedEOF
					}
					mapkey = string(dAtA[iNdEx:postStringIndexmapkey])
					iNdEx = postStringIndexmapkey
				} else if fieldNum == 2 {
					var stringLenmapvalue uint64
					for shift := uint(0); ; shift += 7 {
						if shift >= 64 {
							return ErrIntOverflowBook
						}
						if iNdEx >= l {
							return io.ErrUnexpectedEOF
						}
						b := dAtA[iNdEx]
						iNdEx++
						stringLenmapvalue |= uint64(b&0x7F) << shift
						if b < 0x80 {
							break
						}
					}
					intStringLenmapvalue := int(stringLenmapvalue)
					if intStringLenmapvalue < 0 {
						return ErrInvalidLengthBook
					}
					postStringIndexmapvalue := iNdEx + intStringLenmapvalue
					if postStringIndexmapvalue < 0 {
						return ErrInvalidLengthBook
					}
					if postStringIndexmapvalue > l {
						return io.ErrUnexpectedEOF
					}
					mapvalue = string(dAtA[iNdEx:postStringIndexmapvalue])
					iNdEx = postStringIndexmapvalue
				} else {
					iNdEx = entryPreIndex
					skippy, err := skipBook(dAtA[iNdEx:])
					if err != nil {
						return err
					}
					if skippy < 0 {
						return ErrInvalidLengthBook
					}
					if (iNdEx + skippy) > postIndex {
						return io.ErrUnexpectedEOF
					}
					iNdEx += skippy
				}
			}
			m.Labels[mapkey] = mapvalue
			iNdEx = postIndex
		case 10:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Created", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBook
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthBook
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthBook
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Created == nil {
				m.Created = &types.Timestamp{}
			}
			if err := m.Created.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipBook(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthBook
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthBook
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *Page) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowBook
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Page: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Page: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Name", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBook
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthBook
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBook
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Name = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Picture", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBook
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthBook
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBook
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Picture = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Sound", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBook
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthBook
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBook
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Sound = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipBook(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthBook
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthBook
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipBook(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowBook
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowBook
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
			return iNdEx, nil
		case 1:
			iNdEx += 8
			return iNdEx, nil
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowBook
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthBook
			}
			iNdEx += length
			if iNdEx < 0 {
				return 0, ErrInvalidLengthBook
			}
			return iNdEx, nil
		case 3:
			for {
				var innerWire uint64
				var start int = iNdEx
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return 0, ErrIntOverflowBook
					}
					if iNdEx >= l {
						return 0, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					innerWire |= (uint64(b) & 0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				innerWireType := int(innerWire & 0x7)
				if innerWireType == 4 {
					break
				}
				next, err := skipBook(dAtA[start:])
				if err != nil {
					return 0, err
				}
				iNdEx = start + next
				if iNdEx < 0 {
					return 0, ErrInvalidLengthBook
				}
			}
			return iNdEx, nil
		case 4:
			return iNdEx, nil
		case 5:
			iNdEx += 4
			return iNdEx, nil
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
	}
	panic("unreachable")
}

var (
	ErrInvalidLengthBook = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowBook   = fmt.Errorf("proto: integer overflow")
)
