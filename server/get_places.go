package p

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
}

func GetPlace(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	var kleidi = os.Getenv("KLEIDI")
	location := r.URL.Query().Get("location")
	url := fmt.Sprintf("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=%s&radius=1500&key=%s", location, kleidi)
	resp, err := http.Get(url)
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(string(body))
	w.Header().Set("Content-Type", "application/json")
	w.Write(body)
}
