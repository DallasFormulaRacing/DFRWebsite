package account

import (
	"fmt"

	"github.com/DallasFormulaRacing/DFRWebsite/Backend/pkg/api"
	mid "github.com/DallasFormulaRacing/DFRWebsite/Backend/pkg/api/router/middleware"
	// "github.com/DallasFormulaRacing/DFRWebsite/Backend/pkg/db"
	"net/http"
	// "database/sql"
)

type AccountServer struct {
	api api.APIServer
	db  AccountStoreDb
}

func (s *AccountServer) HandleAccount(w http.ResponseWriter, r *http.Request) error {
	if r.Method == "GET" {
		return s.handleGetAccounts(w, r)
	}
	return fmt.Errorf("method not allowed: %s", r.Method)
}

func (s *AccountServer) handleGetAccounts(w http.ResponseWriter, r *http.Request) error {
	accounts, err := s.db.GetAccounts()
	if err != nil {
		return err
	}
	return mid.WriteJSON(w, http.StatusOK, accounts)
}
