package api

import (
	"encoding/json"
	"net/http"
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

func WriteJSON(w http.ResponseWriter, status int, v any) error {
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(status)
	return json.NewEncoder(w).Encode(v)
}

func MakeHTTPHandleFunc(f apiFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if err := f(w, r); err != nil {
			WriteJSON(w, http.StatusBadRequest, ApiError{Error: err.Error()})
		}
	}
}
