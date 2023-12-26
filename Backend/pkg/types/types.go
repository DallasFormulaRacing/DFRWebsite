package types

import (
	"time"

	"github.com/google/uuid"
)

type Account struct {
	ID        uuid.UUID `gorm:"primarykey"`
	FirstName string    `json:"firstName"`
	LastName  string    `json:"lastName"`
	Email     string    `json:"email"`
	Posistion string    `json:"position"`
	CreatedAt time.Time `json:"createdAt"`
}

type Post struct {
	ID        uuid.UUID `gorm:"primarykey"`
	Author    string    `json:"author"`
	Title     string    `json:"title"`
	Tags      []string  `json:"tags"`
	Body      string    `json:"body"`
	CreatedAt time.Time `json:"createdAt"`
}

type FormattedPost struct {
	ID        uuid.UUID `gorm:"primarykey"`
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
	ID        uuid.UUID `gorm:"primarykey"`
	Name      string    `json:"name"`
	Location  string    `json:"location"`
	StartTime time.Time `json:"startTime"`
	EndTime   time.Time `json:"endTime"`
	Link      string    `json:"link"`
}

type Sponsor struct {
	ID   uuid.UUID `gorm:"primarykey"`
	Name string    `json:"name"`
	Logo string    `json:"logo"`
	Link string    `json:"link"`
}
