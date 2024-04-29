package main

import (
	"net/http"

	"scales/routing"
)

func main() {
	routing.SetupRoutes()
	http.ListenAndServe(":8080", nil)
}
