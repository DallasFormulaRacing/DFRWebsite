package sponsors

import (
	"fmt"

	"github.com/DallasFormulaRacing/DFRWebsite/Backend/pkg/api"
	mid "github.com/DallasFormulaRacing/DFRWebsite/Backend/pkg/api/router/middleware"
	// "github.com/DallasFormulaRacing/DFRWebsite/Backend/pkg/db"
	"net/http"
	// "database/sql"
)

type SponsorServer struct {
	api api.APIServer
	db  SponsorStoreDb
}

func (s *SponsorServer) HandleSponsor(w http.ResponseWriter, r *http.Request) error {
	if r.Method == "GET" {
		return s.handleGetSponsors(w, r)
	}
	return fmt.Errorf("method not allowed: %s", r.Method)
}

func (s *SponsorServer) handleGetSponsors(w http.ResponseWriter, r *http.Request) error {
	sponsors, err := s.db.GetSponsors()
	if err != nil {
		return err
	}
	return mid.WriteJSON(w, http.StatusOK, sponsors)
}