import type { DashboardMetrics } from '@/lib/types';

export function generateUUID(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    // @ts-ignore
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export async function getDashboardMetrics(): Promise<DashboardMetrics> {
  return {
    totalClients: 0,
    ordersThisMonth: 0,
    revenueThisMonth: 0,
    lowStock: 0,
  };
}

export async function createAuditLog(entity: string, entityId: string, action: string, before: any, after: any){
  // no-op stub
  return;
}
