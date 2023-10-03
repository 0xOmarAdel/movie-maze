interface DisplayPriorities {
  [key: string]: number;
}

export type ProviderType = {
  display_priorities: DisplayPriorities;
  display_priority: number;
  logo_path: string;
  provider_id: number;
  provider_name: string;
};
