package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

var kleidi = os.Getenv("KLEIDI")

func getPlace(w http.ResponseWriter, r *http.Request) {
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

func getImage(w http.ResponseWriter, r *http.Request) {
	photoreference := r.URL.Query().Get("photo_reference")
	url := fmt.Sprintf("https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=%s&key=%s", photoreference, kleidi)
	resp, err := http.Get(url)
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)

	if err != nil {
		log.Fatal(err)
	}

	w.Write(body)

}

func main() {
	http.HandleFunc("/", getPlace)
	http.HandleFunc("/photo", getImage)
	http.ListenAndServe(":8080", nil)
}
