package p

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

func GetImage(w http.ResponseWriter, r *http.Request) {
	var kleidi = os.Getenv("KLEIDI")
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
