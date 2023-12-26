package api

import (
	"net/http"

	e "github.com/DallasFormulaRacing/DFRWebsite/Backend/pkg/api/err"
)

type APIServer struct {
	ListAddr string
}

type apiFunc func(http.ResponseWriter, *http.Request) error

type ApiError struct { //TODO: move to error handler
	Error string `json:"error"`
}

func NewAPIServer(listAddr string) (*APIServer, error) {
	return &APIServer{
		ListAddr: listAddr,
	}, nil
}

func MakeHTTPHandleFunc(f apiFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if err := f(w, r); err != nil {
			e.ServerError(w, err)
		}
	}
}
