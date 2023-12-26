package router

import (
	"log"
	"net/http"

	"github.com/DallasFormulaRacing/DFRWebsite/Backend/pkg/api"
	"github.com/DallasFormulaRacing/DFRWebsite/Backend/pkg/api/account"
	"github.com/gorilla/mux"
)

type Server struct {
	api     api.APIServer
	account account.AccountServer
}

func (s *Server) Router() error {
	router := mux.NewRouter()
	router.HandleFunc("/account", api.MakeHTTPHandleFunc(s.account.HandleAccount))

	log.Printf("Listening on %s", s.api.ListAddr)

	http.ListenAndServe(s.api.ListAddr, router)

	return nil
}
