package types

import (
	"time"
)

type Account struct {
	ID        string    `json:"id"`
	FirstName string    `json:"firstName"`
	LastName  string    `json:"lastName"`
	Email     string    `json:"email"`
	Posistion string    `json:"position"`
	CreatedAt time.Time `json:"createdAt"`
}

type Post struct {
	ID        string    `json:"id"`
	Author    string    `json:"author"`
	Title     string    `json:"title"`
	Tags      []string  `json:"tags"`
	Body      string    `json:"body"`
	CreatedAt time.Time `json:"createdAt"`
}

type FormattedPost struct {
	ID        string    `json:"id"`
	Author    string    `json:"author"`
	Title     string    `json:"title"`
	Tags      []string  `json:"tags"`
	Body      string    `json:"body"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
	Image     string    `json:"image"`
	Snippet   string    `json:"snippet"`
}

type Event struct {
	ID        string    `json:"id"`
	Name      string    `json:"name"`
	Location  string    `json:"location"`
	StartTime time.Time `json:"startTime"`
	EndTime   time.Time `json:"endTime"`
	Link      string    `json:"link"`
}

type Sponsor struct {
	ID   string `json:"id"`
	Name string `json:"name"`
	Logo string `json:"logo"`
	Link string `json:"link"`
}
