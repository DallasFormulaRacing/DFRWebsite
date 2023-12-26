package post

import (
	"database/sql"
	"fmt"

	types "github.com/DallasFormulaRacing/DFRWebsite/Backend/pkg/types"
	_ "github.com/lib/pq"
)

// TODO: test this, havent used this model before
type PostStoreDb struct { // cannot import type from db package
	db *sql.DB
}

type PostStore interface {
	CreatePost(*types.Post) error
	DeletePost(string) error
	GetPostByUUID(string) (*types.Post, error)
	GetPosts() ([]*types.Post, error)
	UpdatePost(*types.Post) error
}

func NewPostStore(db *sql.DB) *PostStoreDb {
	return &PostStoreDb{
		db: db,
	}
}

func (s *PostStoreDb) Init() error {
	if err := s.CreatePostTable(); err != nil {
		return err
	}
	return nil
}

func (s *PostStoreDb) CreatePostTable() error {
	query := `CREATE TABEL if not exists post (
		id UUID PRIMARY KEY,
		author VARCHAR(255) NOT NULL,
		title VARCHAR(255) NOT NULL,
		tags VARCHAR(255) NOT NULL,
		body VARCHAR(255) NOT NULL,
		created_at TIMESTAMP NOT NULL
	)`
	_, err := s.db.Exec(query)
	return err
}

func (s *PostStoreDb) CreatePost(post *types.Post) error {
	query := `INSERT INTO post
	(id, author, title, tags, body, created_at)
	VALUES ($1, $2, $3, $4, $5, $6)`

	resp, err := s.db.Exec(query,
		post.ID,
		post.Author,
		post.Title,
		post.Tags,
		post.Body,
		post.CreatedAt)

	if err != nil {
		return err
	}

	fmt.Printf("%+v\n", resp)
	return nil
}

func (s *PostStoreDb) DeletePost(id string) error {
	query := `DELETE FROM post WHERE id = $1`
	resp, err := s.db.Exec(query, id)
	if err != nil {
		return err
	}

	fmt.Printf("%+v\n", resp)
	return nil
}

func (s *PostStoreDb) GetPostByUUID(id string) (*types.Post, error) {
	query := `SELECT * FROM post WHERE id = $1`
	rows, err := s.db.Query(query, id)

	if err != nil {
		return nil, err
	}

	for rows.Next() {
		return scanIntoPost(rows)
	}

	return nil, fmt.Errorf("no post with id %s", id)
}

func (s *PostStoreDb) GetPosts() ([]*types.Post, error) {
	query := `SELECT * FROM post`
	rows, err := s.db.Query(query)

	if err != nil {
		return nil, err
	}

	posts := make([]*types.Post, 0)

	for rows.Next() {
		post, err := scanIntoPost(rows)
		if err != nil {
			return nil, err
		}
		posts = append(posts, post)
	}

	return posts, nil
}

func (s *PostStoreDb) UpdatePost(post *types.Post) error {
	query := `UPDATE post
	SET author = $1,
		title = $2,
		tags = $3,
		body = $4,
		created_at = $5
	WHERE id = $6`

	resp, err := s.db.Exec(query,
		post.Author,
		post.Title,
		post.Tags,
		post.Body,
		post.CreatedAt,
		post.ID)

	if err != nil {
		return err
	}

	fmt.Printf("%+v\n", resp)
	return nil
}

func scanIntoPost(rows *sql.Rows) (*types.Post, error) {
	post := &types.Post{}
	err := rows.Scan(
		&post.ID,
		&post.Author,
		&post.Title,
		&post.Tags,
		&post.Body,
		&post.CreatedAt)

	if err != nil {
		return nil, err
	}
	return post, nil
}

func NewPost(author string, title string, tags []string, body string) *types.Post {
	return &types.Post{
		ID:        types.NewUUID(),
		Author:    author,
		Title:     title,
		Tags:      tags,
		Body:      body,
		CreatedAt: types.CreateTimeStamp(),
	}
}
