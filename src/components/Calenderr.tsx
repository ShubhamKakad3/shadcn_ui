"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export function Calenda() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="m-10">
        <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
    </div>
  )
}
