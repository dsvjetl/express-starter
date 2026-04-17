import { performBackup } from '../services/backupService.ts';

console.log('Starting manual database backup...');
performBackup();
console.log('Backup process finished.');
