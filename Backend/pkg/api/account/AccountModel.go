package account

import (
	"database/sql"
	"fmt"
	types "github.com/DallasFormulaRacing/DFRWebsite/Backend/pkg/types"
	_ "github.com/lib/pq"
)

//TODO: Most of this should work but the new methods might be wrong

type PostgresStore struct { // cannot import type from db package
	db *sql.DB
}

type AccountStore interface {
	CreateAccount(*types.Account) error
	DeleteAccount(string) error
	GetAccountByUUID(string) (*types.Account, error)
	GetAccounts() ([]*types.Account, error)
	UpdateAccount(*types.Account) error
}

func (s *PostgresStore) Init() error {
	if err := s.CreateAccountTable(); err != nil {
		return err
	}
	return nil
}

func (s *PostgresStore) CreateAccountTable() error {
	query := `CREATE TABEL if not exists account (
		id UUID PRIMARY KEY,
		first_name VARCHAR(255) NOT NULL,
		last_name VARCHAR(255) NOT NULL,
		email VARCHAR(255) NOT NULL,
		position VARCHAR(255) NOT NULL,
		created_at TIMESTAMP NOT NULL
	)`
	_, err := s.db.Exec(query)
	return err
}

func (s *PostgresStore) CreateAccount(account *types.Account) error {
	query := `INSERT INTO account
	(id, first_name, last_name, email, position, created_at)
	VALUES ($1, $2, $3, $4, $5, $6)`

	resp, err := s.db.Exec(query,
		account.ID,
		account.FirstName,
		account.LastName,
		account.Email,
		account.Posistion,
		account.CreatedAt)

	if err != nil {
		return err
	}

	fmt.Printf("%+v\n", resp)
	return nil
}

func (s *PostgresStore) DeleteAccount(id string) error {
	query := `DELETE FROM account WHERE id = $1`
	_, err := s.db.Exec(query, id)
	return err
}

func (s *PostgresStore) GetAccountByUUID(id string) (*types.Account, error) {
	query := `SELECT * FROM account WHERE id = $1`
	rows, err := s.db.Query(query, id)

	if err != nil {
		return nil, err
	}

	for rows.Next() {
		return scanIntoAccount(rows)
	}

	return nil, fmt.Errorf("account %s not found", id)
}

func (s *PostgresStore) GetAccounts() ([]*types.Account, error) {
	query := `SELECT * FROM account`
	rows, err := s.db.Query(query)
	if err != nil {
		return nil, err
	}

	accounts := make([]*types.Account, 0)

	for rows.Next() {
		account, err := scanIntoAccount(rows)
		if err != nil {
			return nil, err
		}
		accounts = append(accounts, account)
	}
	return accounts, nil
}

//TODO: Check is this actually works because not tested yet
func (s *PostgresStore) UpdateAccount(account *types.Account) error {
	// query := `UPDATE account
	// SET id = $1, first_name = $2, last_name = $3,
	// email = $4, position = $5, created_at = $6`

	query := `UPDATE account SET 
	(id, first_name, last_name, email, position, created_at) 
	= ($1, $2, $3, $4, $5, $6)`

	_, err := s.db.Exec(query,
		account.FirstName,
		account.LastName,
		account.Email,
		account.Posistion,
		account.CreatedAt,
		account.ID)

	return err
}

func scanIntoAccount(rows *sql.Rows) (*types.Account, error) {
	account := new(types.Account)
	err := rows.Scan(
		&account.ID,
		&account.FirstName,
		&account.LastName,
		&account.Email,
		&account.Posistion,
		&account.CreatedAt)

	if err != nil {
		return nil, err
	}

	return account, nil
}
