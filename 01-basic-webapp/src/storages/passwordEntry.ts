export interface PasswordEntry {
  id: string;
  status: "active" | "deleted";
  site: string;
  username: string;
  password: string;
  remark: string;
}

export function createEntry(site: string, username: string, password: string, remark: string): PasswordEntry {
  return {
    id: crypto.randomUUID(),
    status: "active",
    site,
    username,
    password,
    remark
  };
}

export function isActive(entry: PasswordEntry): boolean {
  return entry.status === "active";
}
