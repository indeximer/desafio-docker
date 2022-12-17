FROM golang:1.19.4

WORKDIR /usr/src/app

COPY /src ./
RUN go mod download && go mod verify

COPY . .
RUN go run .