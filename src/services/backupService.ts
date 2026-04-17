import fs from 'node:fs';
import path from 'node:path';

const BACKUP_DIR = path.join(process.cwd(), 'backups');
const DB_FILE = path.join(process.cwd(), 'database.sqlite');

export function performBackup() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupFileName = `backup-${timestamp}.sqlite`;
  const backupPath = path.join(BACKUP_DIR, backupFileName);

  // Ensure backup directory exists (in case it was deleted)
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
  }

  try {
    if (!fs.existsSync(DB_FILE)) {
      console.error('Backup failed: database.sqlite does not exist');
      return;
    }
    fs.copyFileSync(DB_FILE, backupPath);
    console.log(`Database backup created: ${backupPath}`);

    // Optional: Keep only last 7 backups
    cleanOldBackups();
  } catch (error) {
    console.error('Database backup failed:', error);
  }
}

function cleanOldBackups() {
  const MAX_BACKUPS = 7;
  const files = fs
    .readdirSync(BACKUP_DIR)
    .filter((file) => file.startsWith('backup-') && file.endsWith('.sqlite'))
    .map((file) => ({
      name: file,
      time: fs.statSync(path.join(BACKUP_DIR, file)).mtime.getTime(),
    }))
    .sort((a, b) => b.time - a.time);

  if (files.length > MAX_BACKUPS) {
    files.slice(MAX_BACKUPS).forEach((file) => {
      fs.unlinkSync(path.join(BACKUP_DIR, file.name));
      console.log(`Old backup deleted: ${file.name}`);
    });
  }
}
