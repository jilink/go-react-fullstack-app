FROM golang:1.16-alpine

RUN apk update && apk add --no-cache git gcc musl-dev

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

# Build the main package
RUN go build -o /app/main .

CMD ["/app/main"]
