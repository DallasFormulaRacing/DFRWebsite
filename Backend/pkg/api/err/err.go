package err

import (
	mid "github.com/DallasFormulaRacing/DFRWebsite/Backend/pkg/api/router/middleware"
	"net/http"
)

type ApiError struct {
	Error string `json:"error"`
}

type ApiErrors struct {
	Errors []ApiError `json:"errors"`
}

func convertErrors(errs []error) []ApiError {
	apiErrs := make([]ApiError, len(errs))
	for i, err := range errs {
		apiErrs[i] = ApiError{Error: err.Error()}
	}
	return apiErrs

}

func ServerError(w http.ResponseWriter, err error) {
	mid.WriteJSON(w, http.StatusInternalServerError, ApiError{Error: err.Error()})
}

func BadRequest(w http.ResponseWriter, err error) {
	mid.WriteJSON(w, http.StatusBadRequest, ApiError{Error: err.Error()})
}

func NotFound(w http.ResponseWriter, err error) {
	mid.WriteJSON(w, http.StatusNotFound, ApiError{Error: err.Error()})
}

func Unauthorized(w http.ResponseWriter, err error) {
	mid.WriteJSON(w, http.StatusUnauthorized, ApiError{Error: err.Error()})
}

func Forbidden(w http.ResponseWriter, err error) {
	mid.WriteJSON(w, http.StatusForbidden, ApiError{Error: err.Error()})
}

func Validation(w http.ResponseWriter, errs []error) {
	mid.WriteJSON(w, http.StatusUnprocessableEntity, ApiErrors{Errors: convertErrors(errs)})
}
