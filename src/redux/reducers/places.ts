import { AnyAction } from "redux"

type ICoords = {
  lat: number
  lng: number
}

type IViewPort = {
  northeast: ICoords
  southwest: ICoords
}

type IGeometry = {
  location: ICoords
  viewPort: IViewPort
}

interface IPhoto {
  height: number
  html_attributions: Array<string>
  photo_reference: string
  width: number
}

export interface IPlaceDetail {
  geometry: IGeometry
  icon: string
  id: string
  name: string
  open: boolean
  photos: Array<string>
  place_id: string
  reference: string
  scope: string
  types: Array<string>
  rating: number
  user_ratings_total: number
  vicinity: string
}

export interface IPlaces {
  results: Array<IPlaceDetail>
}

const initPlaces = {
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
