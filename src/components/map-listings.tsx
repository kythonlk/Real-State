"use client"

import React from "react"
import dynamic from "next/dynamic"
import "leaflet/dist/leaflet.css"
import { Listing } from '../types/listing';
import { divIcon } from "leaflet"

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false })
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false })
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false })

interface MapProps {
  properties: Listing[]
}

export default function Map({ properties }: MapProps) {
  const center = [52.2297, 21.0122]

  const createPriceMarkerIcon = (price: number) => {
    return divIcon({
      className: "custom-price-marker",
      html: `<div class="bg-blue-600 text-white px-2 py-1 rounded-lg shadow-lg font-semibold">
              $${(price / 1000).toFixed(0)}k
            </div>`,
      iconSize: [80, 40],
      iconAnchor: [40, 40],
    })
  }

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer
        center={[center[0], center[1]] as [number, number]}
        zoom={3}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {properties.map((property) => (
          <Marker
            key={property.id}
            position={[property.location.lat, property.location.lng] as [number, number]}
            icon={createPriceMarkerIcon(property.price)}
          >
            <Popup className="-mb-50">
              <a href={"listings/" + (property.id)} className="text-center">
                <h3 className="font-semibold">{property.title}</h3>
                <p className="text-blue-600 font-bold">${property.price.toLocaleString()}</p>
              </a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

