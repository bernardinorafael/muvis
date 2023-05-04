export interface Buy {
  logo_path: string
  provider_id: number
  provider_name: string
  display_priority: number
}

export interface Provider {
  link: string
  buy: Buy[]
}
