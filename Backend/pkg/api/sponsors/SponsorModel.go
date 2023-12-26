package sponsors

import (
	"database/sql"
	"fmt"

	types "github.com/DallasFormulaRacing/DFRWebsite/Backend/pkg/types"
	_ "github.com/lib/pq"
)

type SponsorStoreDb struct { // cannot import type from db package
	db *sql.DB
}

type SponsorStore interface {
	CreateSponsor(*types.Sponsor) error
	DeleteSponsor(string) error
	GetSponsorByUUID(string) (*types.Sponsor, error)
	GetSponsorByName(string) (*types.Sponsor, error)
	GetSponsors() ([]*types.Sponsor, error)
	UpdateSponsor(*types.Sponsor) error
}

func NewSponsorStore(db *sql.DB) *SponsorStoreDb {
	return &SponsorStoreDb{
		db: db,
	}
}

func (s *SponsorStoreDb) Init() error {
	if err := s.CreateSponsorTable(); err != nil {
		return err
	}
	return nil
}

func (s *SponsorStoreDb) CreateSponsorTable() error {
	query := `CREATE TABEL if not exists sponsor (
		id UUID PRIMARY KEY,
		name VARCHAR(255) NOT NULL,
		logo VARCHAR(255) NOT NULL,
		link VARCHAR(255) NOT NULL
	)`
	_, err := s.db.Exec(query)
	return err
}

func (s *SponsorStoreDb) CreateSponsor(sponsor *types.Sponsor) error {
	query := `INSERT INTO sponsor
	(id, name, logo, link)
	VALUES ($1, $2, $3, $4)`

	resp, err := s.db.Exec(query,
		sponsor.ID,
		sponsor.Name,
		sponsor.Logo,
		sponsor.Link)

	if err != nil {
		return err
	}

	fmt.Printf("%+v\n", resp)
	return nil
}

func (s *SponsorStoreDb) DeleteSponsor(id string) error {
	query := `DELETE FROM sponsor WHERE id = $1`
	_, err := s.db.Exec(query, id)
	return err
}

// TODO: look into switching query to qureryRow
func (s *SponsorStoreDb) GetSponsorByUUID(id string) (*types.Sponsor, error) {
	query := `SELECT * FROM sponsor WHERE id = $1`
	rows, err := s.db.Query(query, id)

	if err != nil {
		return nil, err
	}

	for rows.Next() {
		return scanIntoSponsor(rows)
	}

	return nil, fmt.Errorf("sponsor %s not found", id)
}

func (s *SponsorStoreDb) GetSponsorByName(name string) (*types.Sponsor, error) {
	query := `SELECT * FROM sponsor WHERE name = $1`
	rows, err := s.db.Query(query, name)

	if err != nil {
		return nil, err
	}

	for rows.Next() {
		return scanIntoSponsor(rows)
	}

	return nil, fmt.Errorf("sponsor %s not found", name)
}

func (s *SponsorStoreDb) GetSponsors() ([]*types.Sponsor, error) {
	query := `SELECT * FROM sponsor`
	rows, err := s.db.Query(query)
	if err != nil {
		return nil, err
	}

	sponsors := make([]*types.Sponsor, 0)

	for rows.Next() {
		sponsor, err := scanIntoSponsor(rows)
		if err != nil {
			return nil, err
		}
		sponsors = append(sponsors, sponsor)
	}

	return sponsors, nil
}

func (s *SponsorStoreDb) UpdateSponsor(sponsor *types.Sponsor) error {
	query := `UPDATE sponsor
	SET name = $2,
	logo = $3,
	link = $4
	WHERE id = $1`

	resp, err := s.db.Exec(query,
		sponsor.ID,
		sponsor.Name,
		sponsor.Logo,
		sponsor.Link)

	if err != nil {
		return err
	}

	fmt.Printf("%+v\n", resp)
	return nil
}

func scanIntoSponsor(rows *sql.Rows) (*types.Sponsor, error) {
	sponsor := new(types.Sponsor)
	err := rows.Scan(
		&sponsor.ID,
		&sponsor.Name,
		&sponsor.Logo,
		&sponsor.Link)

	if err != nil {
		return nil, err
	}
	return sponsor, nil
}
