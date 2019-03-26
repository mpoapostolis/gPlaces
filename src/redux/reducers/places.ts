import { AnyAction } from "redux"

type Coords = {
  lat: number
  lng: number
}

type ViewPort = {
  northeast: Coords
  southwest: Coords
}

type Geometry = {
  location: Coords
  viewPort: ViewPort
}

interface Photo {
  height: number
  html_attributions: Array<string>
  photo_reference: string
  width: number
}

export interface PlaceDetail {
  geometry: Geometry
  icon: string
  id: string
  name: string
  photos: Array<Photo>
  place_id: string
  reference: string
  scope: string
  types: Array<string>
  vicinity: string
}

export interface IPlaces {
  html_attributions: Array<never>
  next_page_token: string
  results: Array<PlaceDetail>
}

const initPlaces = {
  html_attributions: [{}],
  next_page_token: "",
  results: [{}]
}

const places = (state = initPlaces, action: AnyAction) => {
  const { type, payload } = action
  switch (type) {
    default:
      return state
  }
}

export default places
