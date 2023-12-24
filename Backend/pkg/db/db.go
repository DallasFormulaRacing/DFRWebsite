package db

import (
	"database/sql"
	_ "github.com/lib/pq"
)

type PostgresStore struct {
	db *sql.DB
}

// TODO: set secrets in env variables
func NewPostgresStore() (*PostgresStore, error) {
	connStr := "user=postgres dbname=postgres password=password sslmode=disable"
	db, err := sql.Open("postgres", connStr)

	if err != nil {
		return nil, err
	}

	if err := db.Ping(); err != nil {
		return nil, err
	}

	return &PostgresStore{
		db: db,
	}, nil
}
