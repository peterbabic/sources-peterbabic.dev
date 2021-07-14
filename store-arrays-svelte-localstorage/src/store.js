import { writable } from "svelte/store"

const itemName = "storedArray"
const retrieved = localStorage.getItem(itemName)
const parsed = JSON.parse(retrieved)
export const storedArray = writable(parsed === null ? [] : parsed)

storedArray.subscribe(value =>
  localStorage.setItem(itemName, JSON.stringify(value))
)
