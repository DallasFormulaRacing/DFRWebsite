package middleware

import (
	"encoding/json"
	"net/http"
)

func ContentTypeJson(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Content-Type", "application/json")
}

func WriteJSON(w http.ResponseWriter, status int, v any) error {
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(status)
	return json.NewEncoder(w).Encode(v)
}

func BindJSON(r *http.Request, v any) error {
	return json.NewDecoder(r.Body).Decode(v)
}
