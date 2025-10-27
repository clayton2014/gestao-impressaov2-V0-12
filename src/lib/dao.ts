// Temporary in-memory stubs to keep build green. Replace with real implementation later.
export const ClientsDAO = {
  async list(){ return [] as any[]; },
  async create(input:any){ return { id: crypto.randomUUID?.() ?? String(Date.now()), ...input }; },
  async update(id:string, patch:any){ return { id, ...patch }; },
  async remove(id:string){ return; },
  async get(id:string){ return null as any; },
};

export const MaterialsDAO = {
  async list(){ return [] as any[]; },
  async create(input:any){ return { id: crypto.randomUUID?.() ?? String(Date.now()), ...input }; },
  async update(id:string, patch:any){ return { id, ...patch }; },
  async remove(id:string){ return; },
  async get(id:string){ return null as any; },
};

export const InksDAO = {
  async list(){ return [] as any[]; },
  async create(input:any){ return { id: crypto.randomUUID?.() ?? String(Date.now()), ...input }; },
  async update(id:string, patch:any){ return { id, ...patch }; },
  async remove(id:string){ return; },
  async get(id:string){ return null as any; },
};

export const ServicesDAO = {
  async list(){ return [] as any[]; },
  async create(input:any){ return { id: crypto.randomUUID?.() ?? String(Date.now()), ...input }; },
  async update(id:string, patch:any){ return { id, ...patch }; },
  async remove(id:string){ return; },
  async get(id:string){ return null as any; },
};

export const ServiceOrdersDAO = {
  async list(){ return [] as any[]; },
  async create(input:any){ return { id: crypto.randomUUID?.() ?? String(Date.now()), ...input }; },
  async update(id:string, patch:any){ return { id, ...patch }; },
  async remove(id:string){ return; },
  async get(id:string){ return null as any; },
};

export const SettingsDAO = {
  async get(){ return { theme: 'system', currency: 'BRL' } as any; },
  async upsert(patch:any){ return { ...patch }; },
};
