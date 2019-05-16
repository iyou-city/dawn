FROM alpine:3.5

RUN mkdir /lib64 && ln -s /lib/libc.musl-x86_64.so.1 /lib64/ld-linux-x86-64.so.2
ADD ./bundles/dawn /usr/local/bin
ENTRYPOINT ["/usr/local/bin/dawn"]

EXPOSE 50051 9090