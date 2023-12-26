package post

import (
	"fmt"

	"github.com/DallasFormulaRacing/DFRWebsite/Backend/pkg/api"
	mid "github.com/DallasFormulaRacing/DFRWebsite/Backend/pkg/api/router/middleware"
	"github.com/DallasFormulaRacing/DFRWebsite/Backend/pkg/types"
	// "github.com/DallasFormulaRacing/DFRWebsite/Backend/pkg/db"
	"net/http"
	// "database/sql"
	"github.com/gorilla/mux"
)

type PostServer struct {
	api api.APIServer
	db  PostStoreDb
}

func (s *PostServer) HandlePost(w http.ResponseWriter, r *http.Request) error {
	if r.Method == "GET" {
		return s.handleGetPosts(w, r)
	}
	if r.Method == "POST" {
		return s.HandleCreatePost(w, r)
	}
	return fmt.Errorf("method not allowed: %s", r.Method)
}

func (s *PostServer) handleGetPosts(w http.ResponseWriter, r *http.Request) error {
	posts, err := s.db.GetPosts()
	if err != nil {
		return err
	}
	return mid.WriteJSON(w, http.StatusOK, posts)
}

func (s *PostServer) HandleGetPostByUUID(w http.ResponseWriter, r *http.Request) error {
	idStr := mux.Vars(r)["uuid"]

	post, err := s.db.GetPostByUUID(idStr)
	if err != nil {
		return err
	}

	return mid.WriteJSON(w, http.StatusOK, post)
}

func (s *PostServer) HandleCreatePost(w http.ResponseWriter, r *http.Request) error {
	createPostReq := new(types.CreatePostRequest)
	if err := mid.BindJSON(r, createPostReq); err != nil {
		return err
	}

	post := NewPost(createPostReq.Author, createPostReq.Title, createPostReq.Tags, createPostReq.Body)

	if err := s.db.CreatePost(post); err != nil {
		return err
	}

	return mid.WriteJSON(w, http.StatusOK, post)
}
