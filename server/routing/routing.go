package routing

import (
	"fmt"
	"net/http"
	"scales/conn"
)

func SetupRoutes() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "Simple Server")
	})

	http.HandleFunc("/ws", conn.ServeWs)
}
