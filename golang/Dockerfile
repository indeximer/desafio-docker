FROM golang:alpine AS build

WORKDIR /app

COPY /src ./

RUN go build -o /app/build .


FROM scratch

COPY --from=build /app/build ./hello

ENTRYPOINT ["./hello"]